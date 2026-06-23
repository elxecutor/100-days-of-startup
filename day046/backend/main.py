import os
import secrets
from datetime import datetime
from fastapi import FastAPI, Depends, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import engine, get_db, Base
from models import User, Simulation, ApiKey, PlanType, SimulationStatus
from schemas import (
    UserCreate, UserResponse, TokenResponse, SimulationCreate,
    SimulationResponse, SimulationListResponse, PlanChange,
    ApiKeyCreate, ApiKeyResponse
)
from auth import hash_password, verify_password, create_access_token, get_current_user
from antenna_engine import AntennaEngine, SimulationRequest

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AntennaForge API — Cloud Antenna Simulation SaaS",
    description="Step 1: Solves expensive, slow, desktop-locked antenna design.\n"
                "Step 4: Browser-based simulation at 90% less cost.\n"
                "Step 7: MVP with 6 antenna types, S-parameter sweep, team sharing.\n"
                "Step 8: North Star Metric = simulations completed per week.\n"
                "Step 17: Tiered subscription: Starter $79 → Enterprise custom.",
    version="0.1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("CORS_ORIGINS", "http://localhost:3000").split(","),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

engine_instance = AntennaEngine()

PLAN_LIMITS = {
    PlanType.STARTER: 50,
    PlanType.PROFESSIONAL: 200,
    PlanType.TEAM: 1000,
    PlanType.ENTERPRISE: 99999,
}


@app.get("/health")
def health():
    return {"status": "ok", "service": "antennaforge", "version": "0.1.0"}


@app.post("/auth/signup", response_model=TokenResponse)
def signup(body: UserCreate, db: Session = Depends(get_db)):
    existing = db.query(User).filter(User.email == body.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")
    user = User(
        email=body.email,
        hashed_password=hash_password(body.password),
        full_name=body.full_name,
        company=body.company,
        plan=PlanType.STARTER,
        simulations_remaining=PLAN_LIMITS[PlanType.STARTER],
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    token = create_access_token({"sub": str(user.id)})
    return TokenResponse(access_token=token, user=UserResponse.model_validate(user))


@app.post("/auth/login", response_model=TokenResponse)
def login(email: str = Query(...), password: str = Query(...), db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == email).first()
    if not user or not verify_password(password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    token = create_access_token({"sub": str(user.id)})
    return TokenResponse(access_token=token, user=UserResponse.model_validate(user))


@app.get("/me", response_model=UserResponse)
def get_me(user: User = Depends(get_current_user)):
    return UserResponse.model_validate(user)


@app.post("/simulate", response_model=SimulationResponse)
def run_simulation(
    body: SimulationCreate,
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    if user.simulations_remaining <= 0:
        raise HTTPException(status_code=402, detail="Simulation quota exhausted. Upgrade your plan.")

    sim = Simulation(
        user_id=user.id,
        name=body.name or f"{body.antenna_type.value} @ {body.frequency_hz/1e6:.1f} MHz",
        antenna_type=body.antenna_type.value,
        frequency_hz=body.frequency_hz,
        parameters=body.parameters,
        status=SimulationStatus.RUNNING,
    )
    db.add(sim)

    try:
        request = SimulationRequest(
            antenna_type=body.antenna_type,
            frequency_hz=body.frequency_hz,
            parameters=body.parameters,
        )
        result = engine_instance.simulate(request)
        sim.result = result.model_dump()
        sim.status = SimulationStatus.COMPLETED
        sim.completed_at = datetime.utcnow()
        user.simulations_remaining -= 1
    except Exception as e:
        sim.status = SimulationStatus.FAILED
        sim.error_message = str(e)

    db.commit()
    db.refresh(sim)
    return SimulationResponse.model_validate(sim)


@app.get("/simulations", response_model=SimulationListResponse)
def list_simulations(
    page: int = Query(1, ge=1),
    size: int = Query(20, ge=1, le=100),
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    query = db.query(Simulation).filter(Simulation.user_id == user.id)
    total = query.count()
    items = query.order_by(Simulation.created_at.desc()).offset((page - 1) * size).limit(size).all()
    return SimulationListResponse(
        items=[SimulationResponse.model_validate(s) for s in items],
        total=total, page=page, size=size
    )


@app.get("/simulations/{sim_id}", response_model=SimulationResponse)
def get_simulation(sim_id: str, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    sim = db.query(Simulation).filter(
        Simulation.id == sim_id, Simulation.user_id == user.id
    ).first()
    if not sim:
        raise HTTPException(status_code=404, detail="Simulation not found")
    return SimulationResponse.model_validate(sim)


@app.post("/simulations/sweep")
def sweep_simulation(
    body: SimulationCreate,
    points: int = Query(201, ge=21, le=501),
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    if user.simulations_remaining <= 0:
        raise HTTPException(status_code=402, detail="Simulation quota exhausted.")
    freqs, s11 = engine_instance._sweep(body.antenna_type, body.frequency_hz, body.parameters, points)
    user.simulations_remaining -= 1
    db.commit()
    return {"frequencies_hz": freqs, "s11_db": s11}


@app.put("/plan", response_model=UserResponse)
def change_plan(body: PlanChange, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    try:
        new_plan = PlanType(body.plan)
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid plan")
    user.plan = new_plan
    user.simulations_remaining = PLAN_LIMITS[new_plan]
    user.simulations_reset_at = datetime.utcnow()
    db.commit()
    db.refresh(user)
    return UserResponse.model_validate(user)


@app.post("/api-keys", response_model=ApiKeyResponse)
def create_api_key(body: ApiKeyCreate, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    key = secrets.token_hex(32)
    api_key = ApiKey(
        user_id=user.id,
        key=key,
        name=body.name,
    )
    db.add(api_key)
    db.commit()
    db.refresh(api_key)
    return ApiKeyResponse.model_validate(api_key)


@app.get("/api-keys", response_model=list[ApiKeyResponse])
def list_api_keys(user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    keys = db.query(ApiKey).filter(ApiKey.user_id == user.id, ApiKey.is_active == True).all()
    return [ApiKeyResponse.model_validate(k) for k in keys]


@app.delete("/api-keys/{key_id}")
def delete_api_key(key_id: str, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    api_key = db.query(ApiKey).filter(ApiKey.id == key_id, ApiKey.user_id == user.id).first()
    if not api_key:
        raise HTTPException(status_code=404, detail="API key not found")
    api_key.is_active = False
    db.commit()
    return {"detail": "API key deleted"}
