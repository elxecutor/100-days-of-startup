# Competitive Analysis — Day 053

## Step 3: Study the market and competitors
### What competitors are doing well

---

## Competitor 1 — Ansys HFSS

**The gold standard.** $30,000+/year per seat.

### What they do well

**1. Solver accuracy is the benchmark.**
HFSS's finite element method (FEM) solver is the most trusted in the industry. If HFSS says VSWR is 1.4, engineers trust that number within 2-3% of real-world measurement. This trust took 30+ years to build. Every competitor is measured against HFSS accuracy.

**2. Comprehensive physics.**
HFSS handles complex 3D geometries, materials with arbitrary properties, non-linear effects, and multiphysics coupling (thermal, structural). For defense and aerospace work, this breadth is non-negotiable.

**3. Ecosystem and automation.**
Ansys Workbench integrates HFSS with structural, thermal, and fluid solvers. Engineers doing antenna placement on an aircraft wing simulate everything in one environment. Ansys also has PyAnsys for Python scripting and AEDT for EDA integration.

**4. Enterprise sales and support.**
Ansys has dedicated account managers, application engineers, and training programs. Companies paying $30k/yr get phone support, on-site training, and escalation paths. The purchasing process is built for enterprise procurement.

**5. Industry standard = hires know it.**
Engineers trained on HFSS are everywhere. A company adopting HFSS can hire engineers who already know the tool. Training cost is near zero.

### What we can learn
- **We must publish accuracy validation** against HFSS reference results. Engineers will not trust a new solver without this.
- **Scripting/automation matters.** Our REST API is our equivalent of PyAnsys. We need to make it excellent.
- **Enterprise support is a feature.** Even at $79/mo, responsiveness builds trust.

---

## Competitor 2 — CST Studio Suite (Dassault Systèmes)

**The challenger.** $20,000+/year per seat. Strong in time-domain solvers.

### What they do well

**1. Time-domain solver is faster for certain problems.**
CST's TLM and FIT solvers are often faster than HFSS for broadband problems and electrically large structures. Engineers who do EMI/EMC, radar cross-section, or ultra-wideband prefer CST for speed.

**2. Excellent cable and harness modeling.**
CST has specialized tools for cable harnesses, wire bundles, and EMC in vehicles. This is a specific niche where CST dominates and HFSS is weak.

**3. Modern UI (relatively).**
CST's interface is more modern than HFSS. It has better visualization, easier setup wizards, and a lower learning curve for basic simulations. Engineers say "it just feels more modern."

**4. Strong in automotive and consumer electronics.**
CST has deep integrations with CATIA (also Dassault) and specific workflows for automotive radar, 5G devices, and consumer electronics. They own the "product design" EM segment.

### What we can learn
- **Speed is a differentiator.** Our cloud solver runs in seconds, not hours. Lead with this.
- **Niche specialization works.** CST owns automotive EMC. We can own "IoT antenna design" as our niche.
- **UI matters.** A clean, modern browser interface beats a 1990s desktop UI every time.

---

## Competitor 3 — Altair Feko

**The value player.** $15,000+/year per seat. Strong in asymptotic methods.

### What they do well

**1. Hybrid solver approach.**
Feko combines MoM, MLFMM, PO, UTD, and FEM in one solver. Engineers can choose the right method for each part of a large problem (e.g., MoM for the antenna, PO for the platform). This makes Feko the best tool for installed antenna performance (antenna on a ship, aircraft, vehicle).

**2. Best-in-class for electrically large problems.**
For antennas on a ship or aircraft (100+ wavelengths), Feko's asymptotic solvers are the only practical option. HFSS and CST struggle with these sizes.

**3. Affordable relative to HFSS.**
At $15k/yr, Feko is "the affordable option" for mid-size companies. Their marketing positions them as the value leader.

**4. Strong in defense and automotive.**
Feko has deep roots in defense (radar cross-section, antenna placement) and automotive (vehicle-to-everything, satellite communications).

### What we can learn
- **"Installed performance" is a gap in the market.** No cloud tool offers antenna-on-platform simulation. This is a long-term opportunity.
- **Being the affordable option works.** They own mid-market by being cheaper than HFSS/CST. We go further by being 96% cheaper.

---

## Competitor 4 — OpenEMS / Free Open-Source Solvers

**The free alternative.** $0. No UI, no support.

### What they do well

**1. Price is unbeatable.**
Free and open-source. No license servers, no IT procurement, no vendor management.

**2. Academic adoption.**
Many universities use OpenEMS in research because students can install it on any machine, any time. No license bottlenecks.

**3. Customizable.**
Advanced users can modify the solver, add new materials, tweak convergence criteria. The source is available.

### What they do poorly (our opportunity)
- **No graphical UI.** Everything is script-based.
- **No support.** Stack Overflow or nothing.
- **No collaboration.** Single-user, file-based.
- **Steep learning curve.** Weeks to get a first meaningful result.
- **No validation.** User must verify accuracy themselves.

### What we can learn
- **Free tier is essential.** We need a free tier to capture the "I want to try it" user.
- **The barrier is not price — it's usability.** OpenEMS users do not need a cheaper tool. They need a tool that works without a PhD in computational EM.

---

## Competitive Positioning Map

```
                     High Accuracy
                          │
                          │
            HFSS ◄────────┼────────► CST
          ($30k/yr)       │       ($20k/yr)
                          │
                          │
    Desktop ──────────────┼─────────────► Cloud
                          │
                          │
            Feko ◄────────┼────────► AntennaForge
          ($15k/yr)       │          ($79-499/mo)
                          │
                          │
        OpenEMS ◄─────────┼────────► (gap)
            ($0)          │
                          │
                     Low Accuracy
```

**AntennaForge occupies the empty quadrant: Cloud + High Accuracy.**

---

## Competitive Comparison Table

| Feature | HFSS | CST | Feko | OpenEMS | **AntennaForge** |
|---------|:----:|:---:|:----:|:-------:|:----------------:|
| Annual cost | $30k | $20k | $15k | $0 | **$948** |
| Cloud-native | ✗ | ✗ | ✗ | ✗ | **✓** |
| Instant results | ✗ | ✗ | ✗ | ✗ | **✓ (<5s)** |
| GUI | ✓ | ✓ | ✓ | ✗ | **✓** |
| Team collaboration | ✗ | ✗ | ✗ | ✗ | **✓** |
| REST API | Partial | ✗ | Partial | ✗ | **✓** |
| S-parameter sweep | ✓ | ✓ | ✓ | ✓ | **✓** |
| Far-field patterns | ✓ | ✓ | ✓ | ✓ | Phase 2 |
| Optimization engine | ✓ | ✓ | ✓ | ✗ | Phase 3 |
| Antenna-on-platform | ✓ | ✓ | ✓ | ✗ | Phase 4 |
| Free tier | ✗ | ✗ | ✗ | ✓ | **✓ (10 sims)** |
| Education pricing | Partial | Partial | Partial | ✓ | **✓ ($25/mo)** |
| Solver accuracy (trust) | ★★★★★ | ★★★★★ | ★★★★☆ | ★★☆☆☆ | **★★★☆☆ (building)** |
| Learning curve | Steep | Moderate | Moderate | Extreme | **Gentle** |
| Mobile/field use | ✗ | ✗ | ✗ | ✗ | **✓ (browser)** |

---

## Key Takeaways

### What competitors do well that we must match
1. **Solver accuracy** — HFSS and CST set the bar. We need published validation reports.
2. **Comprehensive antenna types** — Users expect to simulate whatever antenna they are designing.
3. **Export formats** — Touchstone is table stakes. CSV, MATLAB, and ADS formats are expected.
4. **Scripting/automation** — HFSS has PyAnsys, CST has VBA/Macro. Our REST API must be well-documented.

### What competitors ignore (our moat)
1. **Cloud-native delivery** — No one offers this. Not even close.
2. **Instant results** — HFSS takes 20 min to 4 hours. We return in <5 seconds.
3. **Team collaboration** — No competitor has built-in sharing. It's still "export → email → import."
4. **Closed-loop design** — Uploading real VNA measurements and comparing against simulation does not exist anywhere.
5. **Education accessibility** — Universities pay $20k+/yr for tools that bottleneck their labs. We offer $25/mo per student.

### Biggest risk
**Trust.** Engineers trust HFSS/CST accuracy because 30 years of use has validated it. We have zero trust. Every dollar of spend on development should be matched by a dollar of spend on validation and trust-building.

### Our winning narrative
> *"HFSS is the most accurate. CST is the fastest on desktop. AntennaForge is the most accessible — and accurate enough for 90% of antenna design work. For the 10% of cases where you absolutely need HFSS-level precision (defense, aerospace, medical implants), use HFSS. For everything else — IoT, consumer, telecom, education, consulting — use AntennaForge at 3% of the cost and save weeks of waiting."*
