# Day 66 — Competitive Response Memo (Day 1)

## Scenario: Ansys announces cloud HFSS at $999/mo

---

### Situation

Ansys, the 800 lb gorilla of EM simulation, launches "HFSS Cloud" at $999/month. It's a browser-based version of their gold-standard solver. The press covers it as "democratizing simulation."

---

### Threat Assessment

| Factor | Rating | Notes |
|--------|--------|-------|
| Brand power | 🔴 Extreme | Ansys is synonymous with EM sim in enterprise |
| Price | 🟢 To our advantage | $999/mo vs our $49–$199/mo — 5–20x difference |
| UX | 🟢 To our advantage | HFSS Cloud is still HFSS — 1990s UI, steep learning curve |
| Target customer | 🟢 Different | They serve enterprise; we serve individuals & small teams |
| Distribution | 🟡 Moderate | Ansys sales team has zero interest in $49 accounts |

---

### Ansys's Likely Positioning

> *"The solver you trust, now in the cloud. Enterprise-grade simulation without the IT headache."*

Their weakness: **they built a cloud UI on top of a desktop solver.** It's not cloud-native. No collaboration. No real-time sharing. The onboarding takes weeks, not minutes.

---

### AntennaForge Counter-Strategy

**Core message: "Enterprise cloud is not the same as accessible cloud."**

| Domain | Ansys HFSS Cloud | AntennaForge |
|--------|-----------------|--------------|
| Price | $999/mo | $49–$199/mo |
| Onboarding | Weeks (training required) | Minutes (in-browser, guided) |
| Collaboration | None (single user) | Built-in (team workspaces) |
| API | Enterprise-only add-on | REST API in every plan |
| Antenna-specific | General EM solver | Purpose-built for antenna design |
| Time to first sim | 2–3 hours (setup + mesh) | < 5 seconds |

---

### Response Memo

```
TO:          Team
FROM:        Product / Strategy
DATE:        Day 66
SUBJECT:     Ansys HFSS Cloud — Strategic Response

1. DO NOT PANIC.

   Ansys Cloud costs $999/mo. Our average MRR/user is $35.
   We are not competing for the same wallet.

2. THIS ACTUALLY HELPS US.

   Ansys validates the "cloud simulation" category. Every article
   about HFSS Cloud mentions "expensive" and "complex." We are the
   obvious alternative: cheaper, easier, antenna-specific.

3. SHARPEN OUR POSITIONING.

   Update landing page hero:
     "HFSS-grade accuracy. Not HFSS-grade pricing."

   Write comparison page: /vs/ansys-cloud
   Target keywords: "cloud antenna simulation," "HFSS alternative"

4. NO PRODUCT CHANGES.

   Our roadmap stays the same. Accuracy improvements (rank #1 feature)
   matter more than matching Ansys's enterprise features.

5. MONITOR SIGNUPS.

   Watch for spike in signups from users leaving Ansys Cloud.
   If we see +20% signups within 30 days, accelerate team sharing
   feature to convert them.

BOTTOM LINE: We stay focused on our beachhead — individual engineers
and small teams who need fast, affordable antenna simulation.
Ansys Cloud is a different product for a different customer.
```

---

### Next Actions

- [ ] Write /vs/ansys-cloud comparison page (1 day)
- [ ] Update landing page positioning (2 days)
- [ ] Set up signup-source tracking for "ansys" referral traffic (1 day)
- [ ] Monitor support queue for "switching from Ansys" tickets (ongoing)
