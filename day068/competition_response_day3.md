# Day 68 — Competitive Response Memo (Day 3)

## Scenario: OpenEMS gets a GUI wrapper startup funded by VCs

---

### Situation

OpenEMS is the leading open-source EM solver. A startup (working name "SimLabs") raises $3M seed to build a commercial GUI wrapper around OpenEMS. They plan to offer a free tier and monetize on compute and storage.

---

### Threat Assessment

| Factor | Rating | Notes |
|--------|--------|-------|
| Price | 🟡 Disruptive | Free tier could pull in price-sensitive users |
| Solver accuracy | 🟡 Comparable | OpenEMS solver is legit — weaker than HFSS but improving |
| UX | 🟢 To our advantage | From scratch GUI — will be rough at launch |
| Team | 🟡 Unknown | $3M seed gives them 12–18 months of runway |
| Distribution | 🟢 To our advantage | No brand, no existing users, no trust |
| Funding | 🟡 Watch | If they raise A, they could outspend on marketing |
| Support | 🟢 To our advantage | OpenEMS has no official support — neither will they |

---

### SimLabs's Likely Positioning

> *"Open-source EM simulation, made accessible. Free to use. Pay only for compute."*

Their weakness: **they are a wrapper around a solver they don't control.** OpenEMS has bugs, limited documentation, and no dedicated development team. When users hit solver issues, SimLabs cannot fix them — they can only escalate upstream. Meanwhile, we own our entire stack.

---

### AntennaForge Counter-Strategy

**Core message: "Free is tempting. Reliable is better."**

| Domain | SimLabs (OpenEMS GUI) | AntennaForge |
|--------|----------------------|--------------|
| Solver | OpenEMS (open source, no dev team) | Proprietary solver with dedicated team |
| Support | Community forums + email | In-app chat, dedicated SE, SLA |
| Uptime | Best-effort | 99.9% SLA |
| Accuracy | OpenEMS baseline | Validated against HFSS/CST benchmarks |
| Meas. integration | None | Built-in VNA/camera import & calibration |
| Collaboration | Basic sharing (likely) | Team workspaces, roles, review workflows |
| Export | OpenEMS format + basic | Touchstone, MATLAB, CSV, 3D patterns |
| Development pace | Dependent on OpenEMS | Weekly releases, customer-driven roadmap |

---

### Response Memo

```
TO:          Team
FROM:        Product / Strategy
DATE:        Day 68
SUBJECT:     SimLabs (OpenEMS GUI) — Strategic Response

1. THIS IS THE MOST DANGEROUS COMPETITOR YET.

   Not because their product is better — it won't be at launch.
   But "free + open source" is a powerful narrative, and VC
   funding means they can sustain a long burn.

   Ansys and CST are lumbering giants. SimLabs can move faster.

2. BUT THEY HAVE A FUNDAMENTAL WEAKNESS.

   They wrap OpenEMS. They do not control the solver.
   When OpenEMS produces wrong results (and it will), their
   users will blame SimLabs, not OpenEMS.

   We have full-stack control. We can fix solver bugs in days.
   They have to submit patches upstream and wait.

3. DO NOT COMPETE ON PRICE.

   We will not offer a free tier. Free tiers attract tire-kickers
   and drive up support costs. Instead, compete on:
     a) Accuracy & trust — benchmark reports, convergence plots
     b) Support — real humans who understand EM theory
     c) Integration — VNA import, camera-based measurement ingestion
     d) Collaboration — review workflows, not just file sharing

4. PRODUCT MOVES TO STRENGTHEN THE MOAT.

   Accelerate these roadmap items:
     - Validation report dashboard (solver accuracy comparison)
     - Closed-loop measurement ↔ simulation correlation
     - Published benchmark library (HFSS, CST, measurement)
     - "From OpenEMS?" migration guide & import tool

5. MARKETING RESPONSE.

   Do not attack OpenEMS (it's well-loved). Position as:
     "OpenEMS is great for learning. AntennaForge is for shipping."

   Publish comparison page:
     /vs/openems-gui
     "AntennaForge vs OpenEMS GUI: What you lose when you save $0"

   Lean into the accountability angle:
     "When your simulation is wrong, who do you call?
      OpenEMS has no phone number. We do."

6. MONITOR AND WAIT.

   SimLabs will launch rough. Let them educate the market
   about cloud simulation. We'll be ready to catch the
   users who outgrow them.

   Warning signals:
     - Series A raise (>$10M)
     - Hiring solver engineers (they realize wrapper isn't enough)
     - Pricing changes (free tier becomes unsustainable)

BOTTOM LINE: SimLabs brings attention to cloud EM simulation.
They will struggle with solver quality and support expectations.
We compete on reliability, trust, and the complete workflow —
from simulation to measurement correlation.
```

---

### Next Actions

- [ ] Create /vs/openems-gui comparison page (2 days)
- [ ] Benchmark report dashboard — 2 weeks (was already sprint 1) (keep timeline)
- [ ] OpenEMS import tool — add to engineering sprint backlog (sprint 3)
- [ ] Set up alerts for SimLabs mentions on HN, Reddit, Twitter (1 day)
- [ ] Write "From OpenEMS to AntennaForge" migration blog post (2 days)
- [ ] Prepare "SimLabs comparison" one-pager for sales/support (1 day)
