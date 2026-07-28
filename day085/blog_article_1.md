# How to Design a 2.4 GHz PCB Trace Antenna for IoT Devices

*Published: Day 85 of 100 Days of AntennaForge*

Designing a custom PCB trace antenna for 2.4 GHz (Bluetooth, Wi-Fi, Zigbee, Thread) is one of the most valuable skills an IoT hardware engineer can develop. Off-the-shelf chip antennas are convenient, but they cost $0.15–$0.50 per unit and take up board space. A PCB trace antenna costs pennies and can perform just as well — if you design it correctly.

This tutorial walks you through the complete design process: specification, simulation, optimization, and integration.

---

## What You'll Learn

- When to use a PCB trace antenna vs a chip antenna
- How to design an IFA (Inverted-F Antenna) for 2.4 GHz
- Setting up and running a simulation in AntennaForge
- Interpreting S11, impedance, and radiation patterns
- Adding a pi-network for impedance matching
- Common pitfalls and how to avoid them

---

## 1. Design Specifications

Start with your requirements:

| Parameter | Target |
|-----------|--------|
| Frequency | 2.40–2.48 GHz (ISM band) |
| Bandwidth | ≥ 80 MHz |
| Return Loss (S11) | ≤ -10 dB |
| Impedance | 50 Ω |
| Polarization | Linear |
| Gain | ≥ 1.5 dBi (typical for IFA) |
| PCB Stackup | 4-layer FR4, 1.6 mm total, 0.2 mm prepreg |

## 2. IFA Geometry Overview

The Inverted-F Antenna (IFA) is a good choice for 2.4 GHz on a PCB. It offers:

- Compact size (~λ/4 at 2.4 GHz ≈ 31 mm in free space, shorter on PCB)
- Reasonable bandwidth (80–150 MHz with proper design)
- Omnidirectional pattern
- Single-ended feed, no balun required

Key dimensions:

- **Radiating element (L)**: ~λ_eff/4
- **Feed-to-short spacing (S)**: controls impedance
- **Shorting pin**: connects the radiating element to ground at one end
- **Ground clearance**: the antenna needs a keep-out zone on all copper layers beneath it

## 3. Initial Calculation

Effective wavelength on FR4:

λ_eff = c / (f × √ε_eff)

For FR4 (ε_r ≈ 4.4), ε_eff ≈ 3.2 for a microstrip structure.

λ_eff at 2.45 GHz = 3×10⁸ / (2.45×10⁹ × √3.2) = 68.5 mm

Quarter-wave: 68.5 / 4 = 17.1 mm

**Starting dimensions:**
- Radiator length L = 17 mm
- Radiator width W = 1.5 mm
- Feed-to-short spacing S = 2 mm
- Ground clearance (keep-out) = 5 mm beyond radiator edges
- Substrate height = 1.6 mm

## 4. Building the Simulation

*Note: The following steps apply to AntennaForge, but the principles are the same in any EM solver.*

### Step 4.1: Create the Substrate

Set up a 4-layer stackup:
1. Top layer (copper, 0.035 mm)
2. Prepreg (ε_r=4.2, 0.2 mm)
3. Core (ε_r=4.4, 1.2 mm)
4. Prepreg (ε_r=4.2, 0.2 mm)
5. Bottom layer (copper, 0.035 mm)

Set board dimensions to 50 mm × 40 mm.

### Step 4.2: Define the Ground Plane

On layers 2–4, draw a ground polygon that covers the entire board except for the antenna keep-out zone. The keep-out should extend at least 5 mm beyond the antenna element in all directions.

### Step 4.3: Draw the Antenna

On the top layer, trace the IFA geometry:
- A 17 mm × 1.5 mm rectangle for the radiator
- A 2 mm × 1.5 mm pad for the shorting pin (connected to ground via via)
- A 50 Ω microstrip feed line (width calculated for your stackup)

### Step 4.4: Port and Boundary Conditions

- Define a lumped port between the feed line end and ground
- Set the simulation frequency range: 2.0–3.0 GHz
- Use radiation boundary conditions on all airbox faces (λ/4 from the board edges)

## 5. Running the Simulation

Submit the simulation. At 2.4 GHz on a standard mesh, expect:
- Mesh cells: ~200,000–500,000
- Simulation time: 5–15 minutes (depending on mesh density)
- Memory: ~2–4 GB

## 6. Results Analysis

### S11 (Return Loss)

Your first simulation will likely show resonance shifted from the target. This is normal.

**Tuning strategy:**
- Resonance too low (S11 minimum < 2.4 GHz): shorten the radiator L
- Resonance too high (S11 minimum > 2.4 GHz): lengthen the radiator L
- Rule of thumb: 1 mm length change ≈ 60–80 MHz shift

### Impedance (Smith Chart)

The impedance locus should pass near the center of the Smith chart. If the loop is too large (overcoupled), increase the feed-to-short spacing S. If too small (undercoupled), decrease S.

### Radiation Pattern

Expect a figure-8 pattern in the azimuth plane (slightly distorted by the ground plane) and a doughnut shape in the elevation plane. Peak gain should be 1.5–2.5 dBi.

## 7. Adding a Pi-Network Matching

If simulation shows the antenna is slightly off 50 Ω, add a pi-network (series capacitor, shunt inductor, series capacitor) between the feed line and the antenna.

**Tuning procedure:**
1. Simulate the antenna impedance at 2.45 GHz
2. Use a Smith chart tool to calculate the pi-network values
3. Add 0402 or 0603 pads to your layout
4. Simulate again to verify

Typical values for a slightly inductive antenna (Z = 50 + j15 Ω):
- Series C1: 1.8 pF
- Shunt L: 3.3 nH
- Series C2: 1.8 pF

Leave these as "DNI" (Do Not Install) on the BOM. Tune with a VNA on the first prototype.

## 8. Common Pitfalls

- **Ground plane too small**: The antenna needs a ground plane at least λ/4 in each direction. For 2.4 GHz, that's 31 mm minimum. Smaller ground = unpredictable pattern.
- **Via stitching**: Use plenty of ground vias around the antenna area. Poor via stitching creates parasitic resonance.
- **Proximity to components**: Keep the antenna at least 5 mm from batteries, connectors, metal shields, and large components.
- **Plastic enclosure**: Add the enclosure model to your simulation. A plastic case with ε_r = 3.5 can detune the antenna by 30–50 MHz.

## 9. Next Steps

After simulation converges:
1. Export Gerber files with the antenna layer
2. Build 5-10 prototypes
3. Measure S11 with a VNA
4. Adjust pi-network values if needed
5. Run a 3D chamber pattern measurement on the final design

## Simulation Files

Download the AntennaForge project file for this tutorial:
[Link to project]

## Discussion

Have questions about PCB antenna design? Leave a comment or join our Discord community. We run a monthly antenna design review session for IoT startups.

---

*This article is part of the AntennaForge 100 Days of Startup series.*
