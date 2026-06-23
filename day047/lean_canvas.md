# Lean Canvas — AntennaForge

## Day 047

---

### 1. Problem
Top 3 problems the customer faces:
1. **Cost barrier** — Ansys HFSS ($30k/yr), CST ($20k/yr), Altair Feko ($15k/yr) price out small teams and independents.
2. **Desktop lock-in** — Simulations tie up the engineer's machine for hours. No collaboration. No remote access.
3. **No feedback loop** — After installation, real-world antenna performance is never compared back to the simulation. Engineers design blind.

**Existing alternatives:**
- Desktop EM tools (HFSS, CST, Feko) — expensive, single-user, steep learning curve
- Open-source solvers (OpenEMS, gprMax) — no UI, CLI-only, no support
- Spreadsheets + hand calculations — inaccurate, unscalable

---

### 2. Customer Segments
**Target customers (early adopters first):**

| Segment | Pain Level | Budget | Reach |
|---------|-----------|--------|-------|
| Independent RF consultants | 🔴 High | $50-100/mo | LinkedIn, Upwork, IEEE |
| IoT hardware startups | 🔴 High | $30-80/mo | YC, HAX, Hardware Club |
| Mid-size telecom OEMs | 🟡 Medium | $200-500/mo | LinkedIn, trade shows |
| University research labs | 🟡 Medium | $0-50/mo (edu) | Published papers, IEEE |
| Field installation engineers | 🔴 High | $20-40/mo | LinkedIn, trade schools |

**Early adopter profile:** RF consultant or IoT engineer who currently avoids simulation (or uses outdated methods) because they cannot justify $15k+ for a tool they use 5-10 hours per week.

---

### 3. Unique Value Proposition

> **AntennaForge lets RF engineers design, simulate, and monitor antennas entirely in the browser — without $15k licenses, without workstation lock-up, and with real-world performance data closing the loop — starting at $79/month.**

**High-concept pitch:** "Figma for antenna design — but it also runs the simulations."

**One-word UVP:** *Accessible* — professional antenna simulation that anyone can use, anywhere, at any budget.

---

### 4. Solution
What we build to solve the problem:

- **Cloud-native simulator** — 6 antenna types (dipole, patch, helical, monopole, Yagi, loop) with analytical models returning VSWR, gain, impedance, bandwidth, efficiency, S-parameters
- **Queue-based solving** — simulations run on our cluster; engineer closes laptop and gets a notification when done
- **Team sharing** — share results via link, no file exports
- **S-parameter sweep** — sweep frequency and plot S11 to find resonance and measure bandwidth
- **REST API** — automate simulations, integrate into CI/CD
- **Touchstone export** — export to .s1p format for import into system design tools
- **Future: performance monitoring** — upload VNA measurements and compare against simulation

---

### 5. Channels
How we reach customers:

| Channel | Type | Cost | Expected Volume |
|---------|------|------|----------------|
| LinkedIn (RF groups, ads) | Organic + Paid | $500/mo ads | 500 visitors/mo |
| Technical SEO (tutorials) | Organic | $0 (time) | 2000 visits/mo (month 6) |
| Hardware accelerators (HAX, Bolt) | Partnership | Free licenses | 50 startup signups |
| Product Hunt launch | Launch | $0 | 1000 visits (launch week) |
| IEEE conferences (virtual booth) | Paid | $1000/event | 200 leads/event |
| RF component distributors (Digi-Key, Mouser) | Partnership | Rev share | 100 signups/mo |

---

### 6. Revenue Streams

| Stream | Model | Price | Target Mix |
|--------|-------|-------|-----------|
| Starter subscription | Monthly | $79/mo (50 sims) | 50% of revenue |
| Professional subscription | Monthly | $249/mo (200 sims) | 30% of revenue |
| Team subscription | Monthly | $499/mo (1000 sims) | 15% of revenue |
| Enterprise | Custom | Custom | 5% of revenue |
| Simulation overage | Usage | $1-2/sim | <5% of revenue |
| Education | Discounted | $25/mo flat | Brand awareness, low margin |

**Pricing philosophy:** 90% cheaper than legacy tools. Price based on usage (simulations/month), not seats.

**Revenue targets (revised at new pricing):**
- Month 1: $790 MRR (10 Starter × $79)
- Month 3: $5,000 MRR (40 Starter + 5 Professional + 2 Team)
- Month 6: $20,000 MRR (100 Starter + 30 Professional + 10 Team)
- Month 12: $80,000 MRR (300 Starter + 100 Professional + 40 Team + 2 Enterprise)

---

### 7. Cost Structure

| Category | Monthly Cost (at scale) | Notes |
|----------|------------------------|-------|
| Cloud compute (AWS ECS) | $2,000-5,000 | Solver workers, mostly idle |
| Database (RDS PostgreSQL) | $200 | Managed DB |
| Domain + email + tools | $100 | Vercel, HubSpot, Crisp |
| Engineering salaries | $15,000-25,000 | 2-3 full-time |
| Marketing (ads + events) | $2,000 | LinkedIn, IEEE booths |
| **Total burn** | **$20,000-32,000/mo** | |

**Break-even MRR:** ~$22,000/mo (at 70% gross margin)

---

### 8. Key Metrics

| Metric | Target | Why It Matters |
|--------|--------|---------------|
| **North Star: Sims completed/week** | Growing | Direct measure of value delivered |
| Trial-to-paid conversion | >25% | Product-market fit signal |
| Monthly churn | <5% | Retention viability |
| CAC | <$200 | Unit economics |
| LTV | >$2,000 | Must be >3x CAC |
| Activation rate (1st sim in 48h) | >60% | Onboarding quality |
| Simulation success rate | >99% | Technical reliability |

---

### 9. Unfair Advantage
Something that cannot be easily copied or bought:

1. **Domain expertise intersection** — Deep knowledge of both RF engineering and cloud-native architecture. Most RF engineers cannot build cloud infrastructure. Most cloud engineers do not understand antenna physics.

2. **Data network effect** — As more users simulate and upload real-world measurements, the comparison database becomes more valuable. Engineers can see "how does my antenna compare to 100 similar designs?"

3. **Closed-loop design** — The ability to compare simulation vs real-world performance (via VNA upload) is a feature no existing tool offers. It turns a one-time design tool into a continuous improvement platform.

---

### Known Risks

| Risk | Severity | Mitigation |
|------|----------|-----------|
| Simulation accuracy not trusted | 🔴 High | Part-time RF contractor validates every solver; publish validation reports against published reference designs |
| Cloud compute costs too high | 🟡 Medium | Queue-based solves + spot instances; cap free tier simulations |
| Customers prefer desktop tools | 🟡 Medium | Target those who *cannot* afford desktop tools first (beachhead) |
| OpenEMS solver insufficient | 🟡 Medium | Wrap multiple open-source solvers; abstract engine so we can swap |
| Long enterprise sales cycle | 🟢 Low | Focus on self-serve $49 plan first; enterprise later |

---

*"Make antenna simulation accessible to every engineer, not just those with $30k budgets."*
