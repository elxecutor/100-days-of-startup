# FCC Certification for IoT Devices: An Antenna Engineer's Guide

*Published: Day 87 of 100 Days of AntennaForge*

FCC certification is one of the biggest hurdles IoT hardware startups face. A failed test can cost $10,000–$50,000 in rework, re-testing, and delayed launch. And the most common cause of failure? Poor antenna design.

This guide covers everything an antenna engineer needs to know to get an intentional radiator through FCC Part 15. We'll focus on the practical aspects of simulation, pre-compliance testing, and working with a certified test lab.

---

## Outline

### Part 1: Understanding FCC Part 15 Rules for Intentional Radiators

**1.1 What Part 15 Covers**
- Subpart C (15.201–15.247) for 2.4 GHz and 900 MHz ISM bands
- Subpart E (15.401–15.407) for 5 GHz UNII bands
- Key distinction: intentional radiator vs unintentional radiator vs incidental radiator

**1.2 Key Tests for Antenna Engineers**
- **15.207**: Conducted emissions (150 kHz–30 MHz)
- **15.209**: Radiated emissions, general limits (30 MHz–40 GHz)
- **15.247(b)**: Peak output power and antenna gain limits
- **15.247(d)**: Spurious emissions (out-of-band)
- **15.247(e)**: Power spectral density

**1.3 The Antenna-Specific Rules (15.203)**
- Unique antenna connector requirement
- What "unique" means in practice (reverse-polarity, proprietary, custom)
- Integrated antennas and permanent attachment
- Why using a standard SMA violates the rules

### Part 2: Antenna Simulation for Pre-Compliance

**2.1 Setting Up Your Simulation for FCC Success**
- Include the enclosure in your model
- Simulate with the intended battery and cable positions
- Model the actual PCB stackup, not the idealized one

**2.2 What to Extract from Your Simulation**
- S11 (return loss) across all operating bands
- Antenna efficiency and peak gain
- 2D/3D radiation patterns (for positioning during test)
- Harmonic levels (2nd and 3rd) at the antenna port
- Common-mode current on the cable (most overlooked failure)

**2.3 Pre-Compliance Checks You Can Run in Simulation**
- Is gain under the 6 dBi limit for 15.247? (If over 6 dBi, reduce power by 1 dB per dB over)
- Are harmonics at least 20 dB below the fundamental?
- Is the antenna impedance match maintained across the full band?
- Does the enclosure shift resonance by more than 20 MHz?

### Part 3: The Pre-Compliance Measurement Lab

**3.1 Minimum Equipment Setup**
- Spectrum analyzer (with tracking generator for return loss)
- Near-field probe set (H-field and E-field)
- Basic VNA (up to 6 GHz or higher)
- Shielded enclosure (or at least a quiet location)
- Reference antenna (calibrated dipole or log-periodic)

**3.2 Pre-Scan Procedure**
1. Set the device to continuous transmit mode
2. Place in the worst-case orientation for radiated emissions
3. Scan from 30 MHz to the 10th harmonic
4. Identify peak frequencies
5. Correlate with simulation prediction

**3.3 Common Red Flags Detected in Pre-Scan**
- Broadband noise floor elevated by 5+ dB above ambient → switching regulator noise on antenna ground
- Narrow spurs at exact harmonics → poor PA filtering
- Emissions at frequencies other than the fundamental → cavity resonance in enclosure
- Pattern changing when you touch the device → cable radiation

### Part 4: Working with a Certified Test Lab

**4.1 Choosing a Lab**
- A2LA or NVLAP accreditation
- RF experience with your product type (IoT, consumer, industrial)
- Proximity or remote testing capability
- References from other hardware startups

**4.2 The Lab Test Plan**
- Provide: device, power source, antenna, firmware (continuous TX mode), operating instructions
- Specify which tests (radiated, conducted, DFS for 5 GHz)
- Include your simulation data for correlation

**4.3 During the Test: What to Watch**
- Device positioning: azimuth vs elevation scans
- Cable routing: minimize common-mode radiation
- Battery vs USB power: test both
- Multiple units: if the device is identical across variants, you can test one

**4.4 If You Fail**
- Don't panic. Most devices fail the first pass.
- Ask for the test data and plots
- Compare with your simulation to identify the discrepancy
- Common fixes:
  - Add ferrite bead on the cable
  - Improve ground plane stitching near the antenna
  - Reduce power via software
  - Add shielding around noisy components

### Part 5: Case Study — A Real IoT Device Through FCC

**Device:** Smart agriculture sensor, 915 MHz LoRa + 2.4 GHz BLE

**First Attempt Failures:**
1. Radiated emissions at 1.83 GHz (2nd harmonic of 915 MHz) — 4 dB over limit
2. Spurious emission at 248 MHz — switcher noise coupling into antenna
3. BLE band-edge emissions exceeded -20 dBc limit

**Root Causes:**
1. No harmonic filtering on the LoRa PA output
2. DC-DC converter placed 3 mm from antenna ground clearance zone
3. BLE matching network had insufficient rejection at band edge

**Fixes:**
1. Added a 3-pole LPF between PA and antenna port
2. Moved inductor 15 mm away, added ground fence between switcher and antenna
3. Re-tuned BLE matching network for 5 dB more rejection at 2.4 GHz band edges

**Cost of first failure:** $8,500 (re-test fees + rush PCB order)
**Time lost:** 3 weeks

**Lesson:** A single simulation run checking harmonic levels would have caught all three issues before the first PCB order.

### Part 6: Checklist for FCC Submission

**Before sending to the lab, verify:**

- [ ] Antenna is permanently attached or uses a unique connector
- [ ] Maximum peak gain is under 6 dBi (or power reduced accordingly)
- [ ] All harmonics are at least 20 dB below the fundamental
- [ ] Radiated emissions simulated with enclosure
- [ ] Pre-scan performed showing no obvious issues
- [ ] Device firmware can enter continuous TX mode
- [ ] Power source (battery/USB) doesn't change RF behavior
- [ ] Multiple units available (at least 3)
- [ ] Cable is ferrite-loaded or decoupled from the antenna ground
- [ ] Simulation and measurement data are correlated within 3 dB / 5 MHz

### Resources

- FCC Part 15 Rules (47 CFR): [Link]
- AntennaForge FCC pre-compliance simulation template: [Link]
- Free PCB antenna design guide: [Link]
- List of approved test labs by state: [Link]

---

*Questions about FCC testing? Join our AntennaForge Discord and ask in #certification.*

*Next article: From Simulation to Measurement — How to Close the Antenna Design Loop*
