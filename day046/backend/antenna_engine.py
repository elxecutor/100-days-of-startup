import numpy as np
from scipy.constants import c as SPEED_OF_LIGHT
from enum import Enum
from pydantic import BaseModel
from typing import Optional


class AntennaType(str, Enum):
    DIPOLE = "dipole"
    PATCH = "patch"
    HELICAL = "helical"
    MONOPOLE = "monopole"
    YAGI = "yagi"
    LOOP = "loop"


class SimulationRequest(BaseModel):
    antenna_type: AntennaType
    frequency_hz: float
    parameters: dict
    material_permittivity: float = 1.0
    material_permeability: float = 1.0
    conductivity_siemens: float = 5.96e7


class SimulationResult(BaseModel):
    antenna_type: str
    frequency_hz: float
    vswr: float
    return_loss_db: float
    input_impedance_real: float
    input_impedance_imag: float
    gain_dbi: float
    bandwidth_hz: float
    efficiency: float
    radiation_pattern: Optional[dict] = None
    s11_db: Optional[list] = None
    frequencies_hz: Optional[list] = None


class AntennaEngine:
    def simulate(self, request: SimulationRequest) -> SimulationResult:
        f = request.frequency_hz
        lam = SPEED_OF_LIGHT / (f * np.sqrt(request.material_permittivity * request.material_permeability))
        p = request.parameters
        match request.antenna_type:
            case AntennaType.DIPOLE:
                return self._dipole(f, lam, p)
            case AntennaType.PATCH:
                return self._patch(f, lam, p)
            case AntennaType.HELICAL:
                return self._helical(f, lam, p)
            case AntennaType.MONOPOLE:
                return self._monopole(f, lam, p)
            case AntennaType.YAGI:
                return self._yagi(f, lam, p)
            case AntennaType.LOOP:
                return self._loop(f, lam, p)
        raise ValueError(f"Unknown antenna type: {request.antenna_type}")

    def _sweep(self, antenna_type: AntennaType, center_f: float, param: dict, points: int = 201) -> tuple:
        bandwidth = center_f * 0.4
        freqs = np.linspace(center_f - bandwidth/2, center_f + bandwidth/2, points)
        s11 = []
        for f in freqs:
            lam = SPEED_OF_LIGHT / f
            req = SimulationRequest(
                antenna_type=antenna_type,
                frequency_hz=f,
                parameters=param
            )
            result = self.simulate(req)
            s11.append(result.return_loss_db)
        return freqs.tolist(), s11

    def _dipole(self, f: float, lam: float, p: dict) -> SimulationResult:
        length = p.get("length_m", lam / 2)
        diameter = p.get("diameter_m", lam / 200)
        L_over_lam = length / lam
        if 0.45 <= L_over_lam <= 0.5:
            vswr = 1.2 + abs(L_over_lam - 0.48) * 20
        else:
            vswr = 1.5 + abs(L_over_lam - 0.48) * 30
        vswr = max(1.0, vswr)
        return_loss = -20 * np.log10((vswr - 1) / (vswr + 1))
        Rr = 73 if 0.45 <= L_over_lam <= 0.5 else 50 + (L_over_lam - 0.5) * 200
        jX = 42.5 * np.tan(np.pi * (1 - L_over_lam))
        efficiency = 0.9 if diameter > lam / 100 else 0.8
        gain = 2.15 + 10 * np.log10(efficiency)
        bw = 0.08 * f * (1.5 + 10 * diameter / lam)
        return SimulationResult(
            antenna_type="dipole", frequency_hz=f, vswr=round(vswr, 3),
            return_loss_db=round(return_loss, 2), input_impedance_real=round(Rr, 1),
            input_impedance_imag=round(jX, 1), gain_dbi=round(gain, 2),
            bandwidth_hz=round(bw, 0), efficiency=round(efficiency, 3))

    def _patch(self, f: float, lam: float, p: dict) -> SimulationResult:
        er = p.get("substrate_er", 4.4)
        h = p.get("substrate_height_m", lam / 100)
        W = p.get("width_m", lam / (2 * np.sqrt((er + 1) / 2)))
        L = p.get("length_m", lam / (2 * np.sqrt(er)) - 0.824 * h * (
            (er + 0.3) * (W / h + 0.264)) / ((er - 0.258) * (W / h + 0.8)))
        vswr = 1.15
        return_loss = -20 * np.log10((vswr - 1) / (vswr + 1))
        Rr = 100 if W / lam > 0.1 else 120
        jX = 0.0
        efficiency = 0.85
        gain = 6.0 + 10 * np.log10(efficiency)
        Q = 1 / np.tan(h * np.pi / lam * np.sqrt(er))
        bw = f / Q
        return SimulationResult(
            antenna_type="patch", frequency_hz=f, vswr=vswr,
            return_loss_db=round(return_loss, 2), input_impedance_real=round(Rr, 1),
            input_impedance_imag=jX, gain_dbi=round(gain, 2),
            bandwidth_hz=round(bw, 0), efficiency=round(efficiency, 3))

    def _helical(self, f: float, lam: float, p: dict) -> SimulationResult:
        turns = p.get("turns", 10)
        spacing = p.get("spacing_m", lam / 4)
        diameter = p.get("diameter_m", lam / np.pi)
        circumference = np.pi * diameter
        C_over_lam = circumference / lam
        if 0.8 <= C_over_lam <= 1.2:
            vswr = 1.3
            gain = 8.0 + 10 * np.log10(C_over_lam * spacing / lam * turns)
            efficiency = 0.92
        else:
            vswr = 2.0
            gain = 5.0
            efficiency = 0.7
        return_loss = -20 * np.log10((vswr - 1) / (vswr + 1))
        Rr = 140 * C_over_lam
        jX = 0.0
        bw = 0.2 * f
        return SimulationResult(
            antenna_type="helical", frequency_hz=f, vswr=vswr,
            return_loss_db=round(return_loss, 2), input_impedance_real=round(Rr, 1),
            input_impedance_imag=jX, gain_dbi=round(gain, 2),
            bandwidth_hz=round(bw, 0), efficiency=round(efficiency, 3))

    def _monopole(self, f: float, lam: float, p: dict) -> SimulationResult:
        height = p.get("height_m", lam / 4)
        H_over_lam = height / lam
        vswr = 1.3 + abs(H_over_lam - 0.25) * 15
        return_loss = -20 * np.log10((vswr - 1) / (vswr + 1))
        Rr = 36.5 if abs(H_over_lam - 0.25) < 0.02 else 30
        jX = 20 * np.tan(np.pi * (0.5 - H_over_lam))
        efficiency = 0.85
        gain = 5.15 + 10 * np.log10(efficiency)
        bw = 0.1 * f
        return SimulationResult(
            antenna_type="monopole", frequency_hz=f, vswr=round(vswr, 3),
            return_loss_db=round(return_loss, 2), input_impedance_real=round(Rr, 1),
            input_impedance_imag=round(jX, 1), gain_dbi=round(gain, 2),
            bandwidth_hz=round(bw, 0), efficiency=round(efficiency, 3))

    def _yagi(self, f: float, lam: float, p: dict) -> SimulationResult:
        elements = p.get("elements", 5)
        boom_length = p.get("boom_length_m", lam * 0.4 * elements / 5)
        vswr = 1.3
        return_loss = -20 * np.log10((vswr - 1) / (vswr + 1))
        Rr = 25 + 5 * (elements - 3)
        jX = 0.0
        gain = 9.0 + 3.5 * np.log2(elements / 3)
        efficiency = 0.93
        bw = 0.04 * f * (elements / 3)
        return SimulationResult(
            antenna_type="yagi", frequency_hz=f, vswr=vswr,
            return_loss_db=round(return_loss, 2), input_impedance_real=round(Rr, 1),
            input_impedance_imag=jX, gain_dbi=round(gain, 2),
            bandwidth_hz=round(bw, 0), efficiency=round(efficiency, 3))

    def _loop(self, f: float, lam: float, p: dict) -> SimulationResult:
        radius = p.get("radius_m", lam / (2 * np.pi))
        turns = p.get("turns", 1)
        C = 2 * np.pi * radius
        C_over_lam = C / lam
        if C_over_lam < 0.1:
            Rr = 320 * np.pi**2 * (C_over_lam)**4 * turns**2
            efficiency = 0.7
            gain = 1.5
        else:
            Rr = 100 * C_over_lam
            efficiency = 0.85
            gain = 3.0 + 10 * np.log10(efficiency)
        vswr = 1.4
        return_loss = -20 * np.log10((vswr - 1) / (vswr + 1))
        jX = 120 * np.pi * C_over_lam * (np.log(C / (radius * 0.01)) - 1.5)
        bw = 0.05 * f
        return SimulationResult(
            antenna_type="loop", frequency_hz=f, vswr=vswr,
            return_loss_db=round(return_loss, 2), input_impedance_real=round(Rr, 1),
            input_impedance_imag=round(jX, 1), gain_dbi=round(gain, 2),
            bandwidth_hz=round(bw, 0), efficiency=round(efficiency, 3))
