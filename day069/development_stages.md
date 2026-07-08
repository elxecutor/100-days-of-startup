# Day 69 — Development Stages for AntennaForge

**Theme:** Break development into stages: concept, prototype, alpha version, beta version, public launch, and growth version.

## Overview

| Stage | Timeline | Team | Key Activities | Users |
|-------|----------|------|----------------|-------|
| **Concept** | Week 1–4 | Founder | Customer discovery, problem validation | 0 |
| **Prototype** | Week 5–8 | Founder + contractor | Clickable mockup, solver validation, 3 antenna types | 5 alpha |
| **Alpha** | Week 9–16 | Founder + 1 engineer | Working MVP, 6 antenna types, S-parameter sweep, auth | 20 alpha |
| **Beta** | Week 17–24 | 3 people | Team sharing, API, billing, onboarding, 10 antenna types | 100 beta |
| **Public Launch** | Week 25–28 | 4 people | Product Hunt, LinkedIn campaign, content push, case studies | 500+ |
| **Growth** | Week 29–52 | 5–8 people | Far-field patterns, optimization engine, enterprise SSO, mobile | 2000+ |

---

## Stage 1 — Concept (Weeks 1–4)

*Team: Founder only*

**Goal:** Validate that RF engineers genuinely need a cloud-based antenna simulator and will pay for it.

### Milestones

| Week | Milestone | Deliverable |
|------|-----------|-------------|
| 1 | Problem definition | Draft problem statement document |
| 2 | Customer interviews 1–8 | Interview notes, raw pain-point list |
| 3 | Customer interviews 9–15 | Synthesised problem validation report |
| 4 | Competitive & positioning | Competitive matrix, value proposition canvas, positioning statement |

### Concrete outputs
- Problem document (one-pager) with top 3 customer pains.
- 15 customer discovery interviews logged in a CRM or spreadsheet.
- Competitive matrix covering 5+ existing tools (CST, HFSS, FEKO, openEMS, etc.).
- Value proposition canvas mapping pains/gains to your solution.
- Go / no-go decision by end of Week 4. If validation fails, pivot or kill.

---

## Stage 2 — Prototype (Weeks 5–8)

*Team: Founder + contract designer/developer*

**Goal:** Build a clickable mockup, validate the solver approach, and prove 3 antenna types simulate correctly.

### Milestones

| Week | Milestone | Deliverable |
|------|-----------|-------------|
| 5 | Figma mockup v1 | Clickable prototype covering core flow: select antenna → configure → run → see S-parameters |
| 6 | Solver spike | Basic MoM or FDTD solver for microstrip patch antenna |
| 7 | 3 antenna types | Patch, dipole, PIFA — each returning S₁₁ plot |
| 8 | User validation | 5 user tests of the mockup + solver accuracy < 10% vs. reference (CST/HFSS) |

### Concrete outputs
- Figma prototype linked and shared with alpha testers.
- Solver accuracy report: S₁₁ peak freq within 10% of CST for 3 antenna types.
- Read-only results page showing S₁₁ vs frequency chart.
- Validation notes from 5 target users.

---

## Stage 3 — Alpha (Weeks 9–16)

*Team: Founder + 1 full-stack engineer*

**Goal:** Working MVP that real users can sign up for, configure antennas, run simulations, and view S-parameter sweeps.

### Milestones

| Week | Milestone | Deliverable |
|------|-----------|-------------|
| 9 | Architecture & infra | Backend on AWS/GCP, CI/CD pipeline, database schema |
| 10 | User auth | Sign-up / login (email + Google OAuth), JWT sessions |
| 11 | Antenna library | 6 antenna types (patch, dipole, PIFA, monopole, loop, Yagi-Uda) |
| 12 | Solver integration | Cloud solver worker, job queue (Redis + Celery or equivalent) |
| 13 | S-parameter sweep | Frequency sweep from UI, plot S₁₁, S₁₂, S₂₁, S₂₂ |
| 14 | Dashboard & history | User dashboard listing past simulations with status and results |
| 15 | Onboarding flow | Guided first simulation wizard, tooltips |
| 16 | Alpha release | Invite 20 users, each runs 5+ sims, <5 s response time, bug bash |

### Concrete outputs
- Live web app at `app.antennaforge.io` (or staging equivalent).
- 6 antenna types fully functional.
- S-parameter sweep returning 4-panel S-plot.
- Auth system with password reset, session management, basic RBAC.
- Dashboard showing simulation history with re-run capability.
- ✅ 10 alpha users active, each having run 5+ simulations.
- ✅ Median response time under 5 seconds.
- Post-mortem document listing top 10 bugs to fix before beta.

---

## Stage 4 — Beta (Weeks 17–24)

*Team: Founder + 2 engineers (3 total)*

**Goal:** Deliver a polished product that teams can use together, with billing, API access, and self-serve onboarding.

*(See day071/deliverables_stage2.md for full Beta → Growth details.)*

---

## Stage 5 — Public Launch (Weeks 25–28)

*Team: 4 people*

*(See day071/deliverables_stage2.md.)*

---

## Stage 6 — Growth (Weeks 29–52)

*Team: 5–8 people*

*(See day071/deliverables_stage2.md.)*

---

## Key Principles

1. **No stage is skipped.** Each stage de-risks the next. Do not start building the MVP before validating the problem.
2. **User counts are gates.** You do not move from Alpha to Beta until 10 alpha users have run 5+ simulations each.
3. **Team grows only when revenue or funding justifies it.** Stay lean until launch.
4. **Measure everything.** Each stage has specific success criteria — if they are not met, iterate before advancing.
