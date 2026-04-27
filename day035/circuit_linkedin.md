LinkedIn Post (ready-to-paste):

Day 035 focus: thermistor divider buffer using MCP6072 on 3.3 V. Built a single-supply front-end with ~35x gain, HPF 0.2 Hz, and LPF 160 Hz. Simulated in LTspice (netlist: ecg_frontend.cir).

How to reproduce:
- Save ecg_frontend.cir into LTspice.
- Set VCC to 3.3 V and confirm mid-rail bias at VREF.
- Replace ideal E1 with a vendor model for MCP6072 and re-run .ac and .tran.

Short caption:
Day 035: thermistor divider buffer front-end on 3.3 V with ~35x gain. DM for the netlist and a quick checklist.
