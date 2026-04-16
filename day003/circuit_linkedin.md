LinkedIn Post (sensor front-end)

Built a bridge-sensor front-end using AD8226 instrumentation amp for accurate temperature and strain sensing. Includes LTspice examples and calibration notes.

Day 003 variant: Bridge-sensor front-end using AD8226 — ideal for precision temperature and strain sensing.

LinkedIn Post (ready-to-paste):

Built a low-noise ECG front-end tuned for Cadence EdgeNode (5 V single-supply): an AC-coupled HPF at 0.5 Hz, a ×100 preamp biased at mid-rail, and a 150 Hz anti-aliasing LPF to extract mV-level heart signals while rejecting mains and motion noise. Simulated in LTspice (netlist: `ecg_frontend.cir`). Use `.ac` to inspect band response and `.tran` to view transient heartbeats with noise rejection.

How to reproduce:
- Save `ecg_frontend.cir` into LTspice.
- Ensure the simulation uses `VCC = 5V` (Cadence EdgeNode typical) and mid-rail bias node `VREF` is present.
- Replace the ideal VCVS `E1` with a vendor op-amp subckt (tie its power pins to `VCC` and `0`) and re-run `.noise`, `.ac` and `.tran`.
- If you plan to feed a single-ended ADC on EdgeNode, verify ADC input range and adapt the AC-coupling / level-shift stage (`ADC_IN`) accordingly.

Suggested metrics to report:
- Gain at 1.2 Hz (heart-rate band)
- Attenuation at 50/60 Hz (mains hum)
- Input-referred noise (use vendor model and `.noise` analysis)

Short caption for LinkedIn (1 sentence):
ECG front-end for Cadence EdgeNode (5V): 0.5–150 Hz bandpass + ×100 preamp — simulated in LTspice to validate gain, stability and mains rejection. DM for the netlist or PCB files.