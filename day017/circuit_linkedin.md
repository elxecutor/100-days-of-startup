LinkedIn Post (ready-to-paste):

Day 017 focus: hall sensor conditioning using MCP6002 on 3.3 V. Built a single-supply front-end with ~45x gain, HPF 0.4 Hz, and LPF 200 Hz. Simulated in LTspice (netlist: ecg_frontend.cir).

How to reproduce:
- Save ecg_frontend.cir into LTspice.
- Set VCC to 3.3 V and confirm mid-rail bias at VREF.
- Replace ideal E1 with a vendor model for MCP6002 and re-run .ac and .tran.

Short caption:
Day 017: hall sensor conditioning front-end on 3.3 V with ~45x gain. DM for the netlist and a quick checklist.
