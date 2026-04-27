LinkedIn Post (ready-to-paste):

Day 024 focus: capacitance-to-voltage using AD7746 on 5.0 V. Built a single-supply front-end with ~30x gain, HPF 0.6 Hz, and LPF 140 Hz. Simulated in LTspice (netlist: ecg_frontend.cir).

How to reproduce:
- Save ecg_frontend.cir into LTspice.
- Set VCC to 5.0 V and confirm mid-rail bias at VREF.
- Replace ideal E1 with a vendor model for AD7746 and re-run .ac and .tran.

Short caption:
Day 024: capacitance-to-voltage front-end on 5.0 V with ~30x gain. DM for the netlist and a quick checklist.
