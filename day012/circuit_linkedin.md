LinkedIn Post (ready-to-paste):

Day 012 focus: photodiode TIA using OPA381 on 5.0 V. Built a single-supply front-end with ~20x gain, HPF 0.4 Hz, and LPF 100 Hz. Simulated in LTspice (netlist: ecg_frontend.cir).

How to reproduce:
- Save ecg_frontend.cir into LTspice.
- Set VCC to 5.0 V and confirm mid-rail bias at VREF.
- Replace ideal E1 with a vendor model for OPA381 and re-run .ac and .tran.

Short caption:
Day 012: photodiode TIA front-end on 5.0 V with ~20x gain. DM for the netlist and a quick checklist.
