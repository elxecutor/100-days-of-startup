LinkedIn Post (ready-to-paste):

Day 013 focus: strain gauge bridge using INA333 on 3.3 V. Built a single-supply front-end with ~25x gain, HPF 0.5 Hz, and LPF 120 Hz. Simulated in LTspice (netlist: ecg_frontend.cir).

How to reproduce:
- Save ecg_frontend.cir into LTspice.
- Set VCC to 3.3 V and confirm mid-rail bias at VREF.
- Replace ideal E1 with a vendor model for INA333 and re-run .ac and .tran.

Short caption:
Day 013: strain gauge bridge front-end on 3.3 V with ~25x gain. DM for the netlist and a quick checklist.
