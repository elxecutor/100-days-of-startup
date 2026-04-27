Analog IC Datasheet Analysis - Day 015
Part: AD620
Focus: load cell preamp

Quick checks:
- Supply range: 3.3 V single-supply (verify absolute max)
- Key specs: input offset, input bias, noise density, CMRR, output swing
- Application target: load cell preamp

Design notes:
- Decouple supply near the pins and verify input common-mode range.
- Validate output headroom at the target load and gain.
- Simulate with a vendor SPICE model for noise and stability.

Action:
- Use AD620 if you need a compact load cell preamp front-end at 3.3 V. Otherwise select a part with better noise or speed for your band.
