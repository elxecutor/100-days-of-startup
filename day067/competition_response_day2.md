# Day 67 — Competitive Response Memo (Day 2)

## Scenario: CST launches student pricing at $99/yr

---

### Situation

CST Studio Suite, Dassault Systèmes's EM simulation tool, announces student pricing: $99/year for a full-featured desktop license. Targeted at universities and self-learning engineers.

---

### Threat Assessment

| Factor | Rating | Notes |
|--------|--------|-------|
| Brand power | 🟡 Moderate | CST is strong in Europe, weaker in US startups |
| Price | 🟡 Parity zone | $99/yr = $8.25/mo — our Starter is $49/mo |
| UX | 🟢 To our advantage | CST desktop app, heavy install, Windows-only |
| Collaboration | 🟢 To our advantage | None — CST student is single-user, offline |
| Platform lock-in | 🟡 Moderate | Students who learn CST may demand it at work |
| Target overlap | 🟢 Low | Students vs our core: employed engineers |

---

### CST's Likely Positioning

> *"Learn on the same tool the pros use. $99/year. No cloud required."*

Their weakness: **it's a desktop app.** Installing CST requires 4 GB download, IT admin rights, and a Windows machine. Students and self-taught engineers increasingly live in the browser. CST also has zero collaboration — you cannot share a project or review a teammate's simulation.

---

### AntennaForge Counter-Strategy

**Core message: "Match the price. Win on UX and collaboration."**

| Domain | CST Student | AntennaForge |
|--------|------------|--------------|
| Price | $99/yr | **$20/mo Education** ← new tier |
| Platform | Windows desktop | Browser (any OS) |
| Install time | 2–4 hours | 0 seconds |
| Collaboration | None | Real-time sharing, comments |
| Updates | Annual release | Continuous |
| Export | Native CST format | Touchstone, MATLAB, CSV |
| Team management | None | Workspaces with roles |

---

### Response Memo

```
TO:          Team
FROM:        Product / Strategy
DATE:        Day 67
SUBJECT:     CST Student Pricing — Strategic Response

1. EDUCATION WAS NEVER OUR PRIMARY REVENUE.

   Students represent <5% of current MRR. We can afford to be
   aggressive on pricing without hurting the core business.

2. INTRODUCE EDUCATION TIER: $20/MONTH.

   New plan: "AntennaForge Education"
     - $20/month (billed annually $200/yr)
     - All features except team workspaces (limit 1 user)
     - .edu email required
     - Same solver, same accuracy

   This undercuts CST ($8.25/mo for CST vs $16.67/mo for AF
   annual). The difference is trivial. We win on UX.

3. MAKE THE COMPARISON OBVIOUS.

   Landing page for education:
     "CST Student: $99/yr + download + install + Windows only.
      AntennaForge Education: $200/yr + instant browser access
      + any OS + collaboration + better UI."

   Students will pay $8/mo extra to never install a desktop
   EM tool again. We've seen this play out with every industry
   that moved to cloud (CAD, EDA, IDE).

4. DOUBLE DOWN ON WHAT CST CANNOT MATCH.

   CST's student license is:
     - Offline (no collaboration)
     - Desktop-only (no mobile, no tablet review)
     - Single-user (no sharing projects with advisor)
     - Windows-only (no Mac, no Linux)

   These are not bugs CST will fix — they're architectural limits.
   Cloud-native is a moat.

5. CAPTURE THE ACADEMIC → PROFESSIONAL PIPELINE.

   Students on CST graduate and demand CST at work.
   Students on AntennaForge graduate and demand AntennaForge
   at work. The $200/yr education tier is customer acquisition
   cost disguised as a pricing plan.

BOTTOM LINE: Education pricing is a lead-gen play, not a
revenue play. Go lower, win on UX, and capture the next
generation of antenna engineers before CST locks them in.
```

---

### Next Actions

- [ ] Create "Education" pricing tier: $20/mo, $200/yr (1 day)
- [ ] Add .edu email validation to signup (2 days)
- [ ] Write /education landing page (1 day)
- [ ] Email current education leads about new tier (1 day)
- [ ] Blog post: "Why cloud simulation is better for learning" (2 days)
