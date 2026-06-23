from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime
from antenna_engine import AntennaType


class UserCreate(BaseModel):
    email: EmailStr
    password: str
    full_name: str
    company: Optional[str] = None


class UserResponse(BaseModel):
    id: str
    email: str
    full_name: str
    company: Optional[str]
    plan: str
    simulations_remaining: int
    is_active: bool
    created_at: datetime

    model_config = {"from_attributes": True}


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: UserResponse


class SimulationCreate(BaseModel):
    name: Optional[str] = None
    antenna_type: AntennaType
    frequency_hz: float
    parameters: dict


class SimulationResponse(BaseModel):
    id: str
    name: Optional[str]
    antenna_type: str
    frequency_hz: float
    parameters: dict
    status: str
    result: Optional[dict]
    error_message: Optional[str]
    created_at: datetime
    completed_at: Optional[datetime]

    model_config = {"from_attributes": True}


class SimulationListResponse(BaseModel):
    items: list[SimulationResponse]
    total: int
    page: int
    size: int


class PlanChange(BaseModel):
    plan: str


class ApiKeyCreate(BaseModel):
    name: str


class ApiKeyResponse(BaseModel):
    id: str
    name: str
    key: str
    is_active: bool
    created_at: datetime

    model_config = {"from_attributes": True}
