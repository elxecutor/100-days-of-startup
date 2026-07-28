# From Simulation to Measurement: How to Close the Antenna Design Loop

*Published: Day 88 of 100 Days of AntennaForge*

Every RF engineer knows the feeling: you spend hours simulating an antenna, get beautiful S11 curves and perfect radiation patterns, then build the prototype and measure... nothing matches.

The gap between simulation and measurement is the most frustrating — and most educational — part of antenna design. This guide walks you through the systematic process of correlating your simulation results with real-world measurements, identifying the sources of discrepancy, and iterating toward convergence.

---

## Outline

### Part 1: Why Simulation and Measurement Disagree

**1.1 The Fundamental Differences**
- Simulation assumptions: infinite ground planes, perfect conductors, homogeneous substrates, ideal ports
- Reality: finite ground, copper roughness, substrate tolerances, solder joints, connector parasitics

**1.2 Typical Discrepancy Magnitudes**
| Parameter | Typical Mismatch | Acceptable |
|-----------|-----------------|------------|
| S11 resonance frequency | ±5–20 MHz | ±10 MHz |
| S11 magnitude at resonance | ±1–3 dB | ±2 dB |
| Bandwidth | ±10–20% | ±15% |
| Peak gain | ±1–2 dB | ±2 dB |
| Radiation pattern nulls | ±5–10° | ±10° |

**1.3 When to Suspect a Problem**
- Discrepancy exceeds the above ranges
- S11 has extra resonances not predicted in simulation
- Pattern has nulls in unexpected directions
- Gain is 3+ dB below simulation

### Part 2: Improving Your Simulation Accuracy

**2.1 Substrate Properties**
- Use manufacturer-supplied ε_r and tan δ values, not FR4 defaults
- Specify copper roughness (Ra = 0.5–2 μm matters at 2.4+ GHz)
- Include solder mask (ε_r ≈ 3.5–4.0, 20–40 μm thick) — it measurably detunes PCB antennas

**2.2 Connectors and Feed Model**
- Model the SMA or U.FL connector as part of the simulation
- A 3D model of the connector adds 2–5 MHz of accuracy
- Use a wave port instead of a lumped port when possible

**2.3 Mesh Convergence**
- Run a mesh refinement study: halve the mesh size until results stabilize
- For PCB antennas, 20–30 cells per wavelength at the operating frequency is the minimum
- Critical areas (feed point, slot edges, via fences) need local mesh refinement

**2.4 Boundary Conditions**
- Airbox should be λ/4 from the structure in all directions
- Use PML (perfectly matched layer) for radiation boundaries
- Never use PEC boundaries near an antenna — it creates phantom images

### Part 3: Setting Up Accurate Measurements

**3.1 VNA Calibration**
- Perform full 2-port SOLT (Short-Open-Load-Thru) calibration at the measurement plane
- Use a calibrated reference plane — either at the connector or use de-embedding
- IF bandwidth: 100 Hz (higher = noisier, lower = slower)
- Number of points: 401–1601 (enough to resolve the resonance shape)

**3.2 Connecting to the DUT**
- Use a high-quality phase-stable cable
- Support the cable to minimize movement during measurement
- Add ferrite chokes on the cable every λ/4 to reduce common-mode current
- **Most important rule**: if touching the cable changes the measurement, you have common-mode problems

**3.3 Measuring Return Loss (S11)**
- Place the DUT in free space (foam block, not a metal table)
- Keep all objects at least λ/2 away
- Measure in the enclosure AND in free space

**3.4 Pattern Measurement (If You Have a Chamber)**
- Use a calibrated gain standard (dipole or horn)
- Measure at 3–5 frequencies across the operating band
- Record both co-pol and cross-pol
- Verify symmetry — if the pattern isn't symmetric and the antenna is, you have positioning errors

### Part 4: The Correlation Process

**4.1 Step 1: Compare S11 First**
Before looking at patterns, get the impedance match right. Export the simulated .S1P touchstone file and overlay it on the measured trace.

Tools:
- MATLAB/Python with scikit-rf
- AntennaForge's built-in comparison tool
- VNA software with data import

**4.2 Step 2: Identify Frequency Shift**
If the measured resonance is shifted from simulated:
- Shift too high → substrate ε_r is higher than modeled, or ground clearance is smaller
- Shift too low → ε_r is lower, or parasitics from connector/solder

**4.3 Step 3: Look for Extra Resonances**
A second dip in the measured S11 that wasn't in simulation usually means:
- A cable resonance (add ferrite)
- An enclosure resonance (add absorber or change geometry)
- A surface wave excited by the board edge

**4.4 Step 4: Compare Bandwidth**
Narrower measured bandwidth than simulated suggests:
- Higher substrate losses (tan δ higher than modeled)
- Copper roughness losses
- Proximity to lossy materials (plastic enclosure)

**4.5 Step 5: Compare Radiation Patterns**
- Normalize both simulated and measured patterns to peak gain
- Look for pattern shape agreement first (direction of nulls, front-to-back ratio)
- Absolute gain matters second — it's harder to calibrate

### Part 5: Common Correlation Failures and Fixes

**Problem: Measured S11 shows multiple resonances, simulation shows one**
*Fix:* Check cable routing. Add ferrite. Measure battery-powered without USB cable.

**Problem: Measured gain is 3 dB below simulation**
*Fix:* Check connector loss. Measure with a known-good reference. Include ohmic losses in simulation.

**Problem: Pattern has a deep null where simulation predicts a lobe**
*Fix:* Check for ground plane asymmetry. Room reflections may create multipath nulls — rotate the device.

**Problem: Matched perfectly on the bench, fails in the enclosure**
*Fix:* Always simulate and measure with the enclosure. Plastic enclosures detune by 10–50 MHz.

### Part 6: Closing the Loop

**6.1 The Iteration Cycle**
1. Simulate → 2. Prototype → 3. Measure → 4. Compare → 5. Update simulation → 6. Repeat

Each cycle should converge. If cycle 3 still shows 20 MHz of shift from simulation, investigate systematic errors (substrate data, connector model, calibration).

**6.2 When to Stop Iterating**
- S11 resonance within 5 MHz of target
- Bandwidth within 10% of specification
- Gain within 1.5 dB of target
- Pattern shape matches within measurement uncertainty

**6.3 Building a Correlation Database**
Keep a log for each design:
| Design | Sim Freq | Meas Freq | Shift | Sim BW | Meas BW | Notes |
|--------|----------|-----------|-------|--------|---------|-------|
| IFA_v1 | 2.45 GHz | 2.44 GHz | -10 MHz | 95 MHz | 88 MHz | Connector not modeled |
| IFA_v2 | 2.45 GHz | 2.448 GHz | -2 MHz | 102 MHz | 98 MHz | Connector included |

Over time, you'll develop correction factors specific to your stackup and frequency band.

### Part 7: Tools for Correlation

- **scikit-rf**: Python library for RF data import/export/plotting
- **AntennaForge Compare Mode**: Overlay simulated and measured S-parameters
- **VNA Data Export**: Save as .S1P (Touchstone format) for import into any tool
- **MATLAB RF Toolbox**: For advanced correlation analysis

### Summary Checklist

- [ ] Substrate properties match manufacturer data sheet
- [ ] Connector modeled in simulation
- [ ] Mesh convergence checked
- [ ] VNA calibrated at the reference plane
- [ ] Cable ferrite chokes installed
- [ ] Free-space measurement environment
- [ ] Enclosure included in simulation and measurement
- [ ] S11, bandwidth, and pattern all correlated within acceptable ranges
- [ ] Correlation database updated

---

*Mastering the simulation-to-measurement loop separates novice RF engineers from experienced ones. It takes practice, patience, and a systematic approach. But once you've closed the loop on one design, each subsequent design gets faster and more accurate.*

*This concludes the AntennaForge technical blog series. Have questions? Join our community below.*

**Next: How AntennaForge is Making Simulation Accessible** — a companion piece on the business side of RF engineering.
