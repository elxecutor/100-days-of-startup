# Day 70 — Deliverables & Success Metrics: Stage 1 (Concept, Prototype, Alpha)

**Theme:** Define clear deliverables and success metrics for each developmental stage (part 1).

---

## Stage 1 — Concept (Weeks 1–4)

### Team
Founder only.

### Problem Document
- **Deliverable:** One-page problem statement document.
- **Content:** Describe the specific pain of RF engineers running antenna simulations. Include frequency of pain, current workarounds, and financial/time cost. Name the target persona (e.g., "small-company RF engineer who cannot access expensive licensed solvers").
- **Success criteria:** Document is shared with 3 advisors and they agree the problem is worth solving.
- **Done when:** Signed off by founder and stored in the project wiki.

### 15 Customer Interviews
- **Deliverable:** A spreadsheet or CRM (e.g., Airtable) with 15 rows, one per interview.
- **Columns:** Name, title, company, company size, current simulation tool, monthly spend, top frustration, willingness to pay ($/month), quote, follow-up date.
- **Success criteria:**
  - At least 10 of 15 are from the target persona.
  - At least 8 express willingness to pay >$50/month.
  - Patterns are extracted into a synthesis doc.
- **Done when:** 15 interviews logged, synthesis doc written, top 3 pains identified.

### Competitive Matrix
- **Deliverable:** A table comparing AntennaForge against 5+ alternatives.
- **Dimensions:** Price, ease of use, accuracy, setup time, collaboration, cloud-native, antenna library size, supported output types (S-params, far-field, etc.).
- **Success criteria:** At least one clear competitive advantage identified (e.g., "only cloud-native option with team sharing").
- **Done when:** Matrix is reviewed and AntennaForge's positioning is updated.

### Value Proposition Canvas
- **Deliverable:** Filled value proposition canvas (pains, gains, customer jobs, pain relievers, gain creators, products & services).
- **Success criteria:** Each cell has 3+ specific items grounded in interview data.
- **Done when:** Canvas is used to write a one-sentence value proposition.

### Gate to Prototype
- All four deliverables above are complete.
- At least 8 of 15 interviewees willing to pay >$50/month.
- A clear competitive angle exists.

---

## Stage 2 — Prototype (Weeks 5–8)

### Team
Founder + 1 contract designer or frontend developer.

### Figma Clickable Mockup
- **Deliverable:** Figma file with a clickable prototype.
- **Screens:** Landing page → sign-up → dashboard → antenna selection → parameter configuration → simulation progress → results (S-parameter plot).
- **Success criteria:** Covers the full happy path. Error / loading / empty states are designed for at least 3 screens.
- **Done when:** Shared with 5 target users and each can complete the flow without instruction.

### 3 Antenna Types Working
- **Deliverable:** Solver code that produces S₁₁ vs. frequency for patch, dipole, and PIFA antennas.
- **Success criteria:** For each antenna type, the simulated resonant frequency is within 10% of the reference value from CST or HFSS at the same geometry.
- **Done when:** A script can be run that outputs results for all 3 types and an accuracy report is generated.

### Validated with 5 Users
- **Deliverable:** Recorded test sessions (video or written notes) from 5 target users going through the Figma prototype.
- **Success criteria:** Each user can complete the configure → simulate → view results flow in under 3 minutes. At least 4 of 5 say they would use the product.
- **Done when:** Notes are synthesised into a top-5 usability issue list, and all critical issues are resolved in Figma.

### Gate to Alpha
- 3 antenna types simulated with <10% error vs. CST.
- 5 users validated the mockup flow.
- Top usability issues fixed.

---

## Stage 3 — Alpha (Weeks 9–16)

### Team
Founder + 1 full-stack engineer.

### 6 Antenna Types
- **Deliverable:** Patch, dipole, PIFA, monopole, loop, and Yagi-Uda antennas can be selected, parametrized, and simulated.
- **Success criteria:** Each type has a validated configuration form (geometry inputs match a real antenna). Solver converges for all 6 within 30 seconds.
- **Done when:** QA matrix passes — all 6 types simulated against known reference values.

### S-Parameter Sweep
- **Deliverable:** A frequency range slider that triggers S₁₁, S₁₂, S₂₁, S₂₂ plots over the range.
- **Success criteria:** Plots render in <5 s after job completion. Chart is interactive (zoom, hover tooltip, export PNG).
- **Done when:** 10 random sweep jobs complete with correct plot shapes.

### User Auth
- **Deliverable:** Email/password sign-up, login, password reset, and Google OAuth.
- **Success criteria:** JWT-based sessions, 30-day refresh token, rate-limited login attempts, no auth-related security findings.
- **Done when:** Automated auth test suite passes (register, login, logout, reset, OAuth flow).

### Dashboard
- **Deliverable:** User dashboard listing past simulations, status (pending/running/done/failed), timestamp, and a "view results" link. "New simulation" button.
- **Success criteria:** Dashboard loads in <2 s for a user with 100 simulations. Empty state is informative.
- **Done when:** Dashboard UX review passes with the team.

### 10 Alpha Users Running 5+ Simulations Each
- **Deliverable:** A cohort of 10 alpha users, each with ≥5 completed simulations in production.
- **Success criteria:** Usage data confirms 50+ total sims. No critical bugs in the core flow.
- **Done when:** Usage dashboard shows 10 users with ≥5 sims. User satisfaction survey sent; score ≥7/10.

### <5 s Median Response Time
- **Deliverable:** Performance monitoring (e.g., DataDog, CloudWatch) showing p50 response time <5 s from "Run" click to plot render, excluding solver time.
- **Success criteria:** Measured over a 1-week period with at least 50 sims.
- **Done when:** Alert is configured to warn if p50 exceeds 5 s.

### Gate to Beta
- 6 antenna types operational.
- 10 alpha users (not the team) have run 5+ sims each.
- Response time <5 s p50.
- Top 10 bugs fixed and logged.
