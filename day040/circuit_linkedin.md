LinkedIn Post (ready-to-paste):

Day 040 focus: resistive touch sense using OPA1678 on 5.0 V. Built a single-supply front-end with ~10x gain, HPF 0.2 Hz, and LPF 60 Hz. Simulated in LTspice (netlist: ecg_frontend.cir).

How to reproduce:
- Save ecg_frontend.cir into LTspice.
- Set VCC to 5.0 V and confirm mid-rail bias at VREF.
- Replace ideal E1 with a vendor model for OPA1678 and re-run .ac and .tran.

Short caption:
Day 040: resistive touch sense front-end on 5.0 V with ~10x gain. DM for the netlist and a quick checklist.
