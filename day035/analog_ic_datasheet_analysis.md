Analog IC Datasheet Analysis - Day 035
Part: MCP6072
Focus: thermistor divider buffer

Quick checks:
- Supply range: 3.3 V single-supply (verify absolute max)
- Key specs: input offset, input bias, noise density, CMRR, output swing
- Application target: thermistor divider buffer

Design notes:
- Decouple supply near the pins and verify input common-mode range.
- Validate output headroom at the target load and gain.
- Simulate with a vendor SPICE model for noise and stability.

Action:
- Use MCP6072 if you need a compact thermistor divider buffer front-end at 3.3 V. Otherwise select a part with better noise or speed for your band.
