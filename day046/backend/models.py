import uuid
from datetime import datetime
from sqlalchemy import Column, String, Integer, Float, DateTime, ForeignKey, Enum, Boolean, JSON, Text
from sqlalchemy.orm import relationship
from database import Base
import enum


def uuid_col():
    return Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))


class PlanType(str, enum.Enum):
    STARTER = "starter"
    PROFESSIONAL = "professional"
    TEAM = "team"
    ENTERPRISE = "enterprise"


class SimulationStatus(str, enum.Enum):
    QUEUED = "queued"
    RUNNING = "running"
    COMPLETED = "completed"
    FAILED = "failed"


class User(Base):
    __tablename__ = "users"

    id = uuid_col()
    email = Column(String(255), unique=True, nullable=False, index=True)
    hashed_password = Column(String(255), nullable=False)
    full_name = Column(String(255))
    company = Column(String(255))
    plan = Column(Enum(PlanType), default=PlanType.STARTER)
    stripe_customer_id = Column(String(255))
    simulations_remaining = Column(Integer, default=50)
    simulations_reset_at = Column(DateTime, default=datetime.utcnow)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    simulations = relationship("Simulation", back_populates="user")


class Simulation(Base):
    __tablename__ = "simulations"

    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    user_id = Column(String(36), ForeignKey("users.id"), nullable=False)
    name = Column(String(255))
    antenna_type = Column(String(50), nullable=False)
    frequency_hz = Column(Float, nullable=False)
    parameters = Column(JSON, nullable=False)
    status = Column(Enum(SimulationStatus), default=SimulationStatus.QUEUED)
    result = Column(JSON)
    error_message = Column(String(1000))
    created_at = Column(DateTime, default=datetime.utcnow)
    completed_at = Column(DateTime)

    user = relationship("User", back_populates="simulations")


class ApiKey(Base):
    __tablename__ = "api_keys"

    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    user_id = Column(String(36), ForeignKey("users.id"), nullable=False)
    key = Column(String(64), unique=True, nullable=False, index=True)
    name = Column(String(255))
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    last_used_at = Column(DateTime)
