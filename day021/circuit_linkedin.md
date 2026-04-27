LinkedIn Post (ready-to-paste):

Day 021 focus: current shunt monitor using INA180 on 3.3 V. Built a single-supply front-end with ~15x gain, HPF 0.3 Hz, and LPF 80 Hz. Simulated in LTspice (netlist: ecg_frontend.cir).

How to reproduce:
- Save ecg_frontend.cir into LTspice.
- Set VCC to 3.3 V and confirm mid-rail bias at VREF.
- Replace ideal E1 with a vendor model for INA180 and re-run .ac and .tran.

Short caption:
Day 021: current shunt monitor front-end on 3.3 V with ~15x gain. DM for the netlist and a quick checklist.
