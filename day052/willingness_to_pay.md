# Willingness to Pay — Day 052

## Step 6: Validate willingness to pay (price above competition)

### Competition baseline pricing

| Tool | Annual Cost (1 seat) | Monthly Equivalent | Target Customer |
|------|--------------------:|-------------------:|-----------------|
| Ansys HFSS | $30,000 | $2,500/mo | Enterprise |
| CST Studio Suite | $20,000 | $1,667/mo | Enterprise |
| Altair Feko | $15,000 | $1,250/mo | Enterprise |
| COMSOL (RF Module) | $11,000 | $917/mo | Enterprise / Research |
| Microwave Office (AWR) | $10,000 | $833/mo | Enterprise |
| **AntennaForge (Starter)** | **$588/yr** | **$49/mo** | **Freelancers / Startups** |
| **AntennaForge (Professional)** | **$1,788/yr** | **$149/mo** | **Teams** |
| **AntennaForge (Team)** | **$4,788/yr** | **$399/mo** | **Mid-size Orgs** |

**AntennaForge is 96% cheaper than the cheapest desktop competitor (AWR) and 98% cheaper than HFSS.**

---

## Persona 1 — Marco (Independent RF Consultant)

**Shown:** Pro plan at $149/mo. Compared to his current $2,500/mo HFSS rent.

> "You're asking me if I'd pay $149 instead of $2,500 for something that's actually more convenient because it's in the cloud? That's not a pricing question. That's a 'how fast can I sign up' question."

**Willingness to pay: $149/mo confirmed.**

**His logic:**
- Current HFSS license: $2,500/mo
- Time wasted waiting for local sims: ~5 hrs/week at $175/hr = $875/week = $3,500/mo
- Total cost of status quo: $6,000/mo (license + lost billable time)
- AntennaForge at $149/mo eliminates the lost time
- ROI: 40x return on investment

> "Even at $299/mo I'd still save $5,700/mo compared to now. $149 feels like theft on my part. I'd pay $299 without blinking."

**Threshold:** Would pay up to **$499/mo** before reconsidering alternatives. At $499, would compare against a cut-down HFSS license.

---

## Persona 2 — Amina (IoT Startup Hardware Lead)

**Shown:** Starter plan at $49/mo. Compared to her current cost of PCB spins.

> "We spent $16,000 on PCB spins last year because of antenna guesswork. That's $1,333/mo. You're telling me I can spend $49/mo and fix that? Where do I sign?"

**Willingness to pay: $49/mo confirmed. Would go to $99/mo.**

**Her logic:**
- Average PCB spin: $4,000
- Antenna-related spins per project: 3-5
- Cost per product: $12,000-20,000 in wasted spins
- Amortized monthly: $1,000-1,667/mo
- AntennaForge at $49/mo: 20-34x ROI
- At $99/mo: 10-17x ROI (still obvious)

> "If you told me this tool guarantees I pass FCC on the first try, I'd pay $199/mo. FCC retesting cost us $22,000 last year. That's $1,833/mo I'm burning."

**Threshold:** Would pay up to **$199/mo** if the tool certifiably reduces certification risk. CEO would approve anything under $200/mo without a meeting.

---

## Persona 3 — Dr. Akinwande (Professor)

**Shown:** Education pricing at $20/mo per student. Compared to his current CST licensing cost.

> "I pay $18,000/year for 5 CST floating licenses that bottleneck my entire lab. That's $3,600 per license, or $1,500 per student per year. You're offering $240 per student per year with no bottleneck? The math speaks for itself."

**Willingness to pay: $20/mo per student confirmed. Lab would pay up to $35/mo per seat.**

**His logic:**
- Current CST cost: $18,000/yr for 5 licenses ÷ 8 students = $2,250/yr per student (but with queuing)
- Effective cost with queuing waste: ~$3,000/yr per student (productivity loss)
- AntennaForge at $20/mo × 8 students × 12 months = $1,920/yr total
- Annual savings: $16,080

> "I can put the entire lab on your platform for less than the maintenance fee on our CST license. And my students never wait for a license. The only question is accuracy — and once you prove that, I'm in."

**Threshold for lab rollout:** University procurement can approve up to **$5,000/yr** without formal RFP. $1,920/yr for 8 students fits entirely within his discretionary fund. No procurement needed.

**Education pricing elasticity:** Would accept up to **$35/mo per student** ($3,360/yr for 8) before needing grant funding approval.

---

## Persona 4 — The Hobbyist Maker

**Shown:** Free tier (10 sims/mo) and Starter at $49/mo.

> "I'd love to use this but $49/mo for a hobby is steep. I spend $20/mo on my whole AWS infrastructure. Is there a $10/month tier?"

**Willingness to pay:** Free tier only. Would not pay $49/mo for hobby use.

**His logic:**
- Current cost: $0 (spreadsheets, intuition, reference designs)
- Time value: hobby time is leisure, not billable
- Budget: $10-20/mo max for hobby tools
- AntennaForge at $49: 2.5-5x hobby budget

> "If you had a $9/mo hobby tier with like 5 simulations, I'd do that forever. At $49 I'd use the free trial for one weekend project and never come back."

**Threshold:** Would pay up to **$9-15/mo** for a limited hobby tier. Anything above that is a hard no.

---

## Willingness to Pay — Summary Table

| Persona | Plan | WTP | Max WTP | Competitor Price | Our Price vs Competitor |
|---------|------|----:|--------:|-----------------:|:----------------------:|
| **Marco (Consultant)** | Professional | $149/mo | $499/mo | $2,500/mo (HFSS) | **94% cheaper** |
| **Amina (IoT Startup)** | Starter | $49/mo | $199/mo | $1,667/mo (CST) | **97% cheaper** |
| **Dr. Akinwande (Professor)** | Education | $20/mo | $35/mo | $1,500/mo (CST per student) | **98% cheaper** |
| **Hobbyist** | Free / Hobby | $0/mo | $15/mo | $0 (spreadsheets) | **Comparable** |

### Key Finding

The three revenue segments (Marco, Amina, Professor) all perceive the tool as **dramatically underpriced** at current rates. Their WTP exceeds our price by 2-10x. This means:

1. **We can raise prices** without losing core demand
2. **Annual billing discount** is a carrot, not a necessity
3. **The $49/mo Starter** is a low-friction entry point that feels like "no-brainer" territory
4. **We are leaving money on the table** with Marco — he would pay $299-499/mo

### Pricing Power by Segment

| Segment | Our Price | Competitor Price | Price Advantage | Room to Raise |
|---------|---------:|-----------------:|:---------------:|:-------------:|
| Independent Consultant | $149/mo | $2,500/mo | 17x cheaper | Yes — to $299/mo |
| IoT Startup | $49/mo | $1,667/mo | 34x cheaper | Yes — to $99/mo |
| University Lab | $20/mo | $1,500/mo | 75x cheaper | Yes — to $35/mo |
| Hobbyist | $0 (free) | $0 | Same | No — no revenue here |

### Recommended Pricing Adjustments

| Tier | Current Price | Recommended Price | Rationale |
|------|:------------:|:-----------------:|-----------|
| Hobby / Free | 10 sims free | 10 sims free | No change — acquisition funnel |
| Starter | $49/mo → **$79/mo** | $79/mo | Amina said $49 is easy, $99 still OK. Split the difference. |
| Professional | $149/mo → **$249/mo** | $249/mo | Marco said $299 without blinking. $249 feels intentional. |
| Team | $399/mo → **$499/mo** | $499/mo | Aligns with Professional increase. |
| Education | $20/mo → **$25/mo** | $25/mo | Professor said $35 is threshold. $25 feels safe. |
| Enterprise | Custom | Custom | No change. |

**Revised price structure still undercuts nearest competitor (AWR at $833/mo) by 70-94%.**

> *"The biggest mistake startups make is pricing too low. You've validated that customers perceive 10-30x the value you're charging. Capture more of that value."*
