Analog IC Datasheet Analysis - Day 050
Part: AD8615
Focus: comparator wake-on-event

Quick checks:
- Supply range: 5.0 V single-supply (verify absolute max)
- Key specs: input offset, input bias, noise density, CMRR, output swing
- Application target: comparator wake-on-event

Design notes:
- Decouple supply near the pins and verify input common-mode range.
- Validate output headroom at the target load and gain.
- Simulate with a vendor SPICE model for noise and stability.

Action:
- Use AD8615 if you need a compact comparator wake-on-event front-end at 5.0 V. Otherwise select a part with better noise or speed for your band.
