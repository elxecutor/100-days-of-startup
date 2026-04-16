Analog IC Datasheet Analysis — AD8099 (high-speed op amp)

Checklist (what to scan first):
- **Overview:** amplifier family and intended ADC-driver role.
- **Absolute max / supply range:** supply rails and headroom for the required swing.
- **Electrical specs:** GBP, slew rate, input capacitance, input noise, output drive.
- **Stability:** compensation requirements, phase margin, and load conditions.
- **Thermal & layout:** decoupling, ground returns, and trace inductance.

Example — AD8099 quick analysis:
- **Overview:** high-speed amplifier suitable as an ADC driver; high GBP and fast slew rate.
- **Key specs:** high bandwidth, fast slew, low settling time — requires careful layout.

Actionable recommendation:
- Use AD8099 for transient capture and ADC front-ends; validate stability with the actual ADC input capacitance and test settling for required sample windows.

Day 007 focus: high-speed front-ends — verify stability with the intended ADC load and layout constraints.