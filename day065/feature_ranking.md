# Day 65 — Feature Ranking by Customer Demand

Ranked based on interviews from Days 57–59 (10 customer interviews across 5 segments).

---

## Ranking Table

| Rank | Feature | Customer Quote | Effort | Impact Score |
|------|---------|---------------|--------|-------------|
| 1 | Solver accuracy / validation reports | *"I don't trust cloud solvers. Show me convergence plots."* — RF Engineer, Tier 1 OEM | Medium | 9/10 |
| 2 | More antenna types (PIFA, PCB trace) | *"Your library covers 20% of what I actually design."* — Consultant, 15yr exp | Medium | 8/10 |
| 3 | S-parameter sweep | *"I need to sweep 2–6 GHz in 100 steps, not run 100 jobs manually."* — Startup CTO | Low | 8/10 |
| 4 | Team sharing / workspaces | *"My three juniors run simulations but I review them."* — Manager, Defense contractor | High | 7/10 |
| 5 | Export to Touchstone / MATLAB | *"The sim is useless if I can't get it into my post-processing pipeline."* — PhD Researcher | Low | 6/10 |
| 6 | REST API | *"We want to script our design-of-experiments."* — Systems Eng, Auto supplier | High | 6/10 |
| 7 | Education pricing | *"Our lab has 20 students. $49/mo each is too much."* — Professor | Low | 5/10 |
| 8 | Enclosure simulation | *"The antenna doesn't work the same once you put it in the box."* — Hardware Lead, IoT startup | Very High | 7/10 |
| 9 | Far-field patterns | *"Gain plot is nice but I need the full 3D pattern."* — Antenna Designer | Medium | 5/10 |
| 10 | Optimization engine | *"Can it tune the matching network automatically?"* — RF Engineer | Very High | 6/10 |

---

## Impact vs Effort Matrix

```
                    HIGH IMPACT
                        │
                        │
     ┌──────────────────┼──────────────────┐
     │  DO NEXT         │  ROADMAP         │
     │  (High Impact,   │  (High Impact,   │
     │   Low Effort)    │   High Effort)   │
     │                  │                  │
     │  S-param sweep   │  Team sharing    │
     │  Touchstone/MAT  │  Enclosure sim   │
     │  More ant. types │  REST API        │
     │  Solver accuracy │  Optimization    │
     │                  │                  │
     ├──────────────────┼──────────────────┤
     │  QUICK WINS      │  RECONSIDER      │
     │  (Low Impact,    │  (Low Impact,    │
     │   Low Effort)    │   High Effort)   │
     │                  │                  │
     │  Education       │  (none in list)  │
     │  pricing         │                  │
     │  Far-field (arg) │                  │
     │                  │                  │
     └──────────────────┴──────────────────┘
                        │
                        │
                    LOW EFFORT ───────────► HIGH EFFORT
```

---

## Build Sequence Recommendation

**Sprint 1–2 (Weeks 1–4):**
- Solver accuracy / validation reports (#1)
- S-parameter sweep (#3)
- More antenna types — PIFA (#2 — partial)

**Sprint 3–4 (Weeks 5–8):**
- More antenna types — PCB trace (#2 — remainder)
- Export to Touchstone / MATLAB (#5)
- Education pricing (#7)

**Sprint 5–6 (Weeks 9–12):**
- Team sharing / workspaces (#4 — MVP)
- Far-field patterns (#9)

**Sprint 7+ (Weeks 13+):**
- REST API (#6)
- Enclosure simulation (#8)
- Optimization engine (#10)

---

## Methodology

Scores derived from:
1. **Frequency of mention** across 10 interviews (weight 0.4)
2. **Stated willingness to pay** (weight 0.3)
3. **Emotional intensity** during interview (weight 0.3)

Effort ratings from engineering lead estimates (all relative to current team of 3 engineers).
