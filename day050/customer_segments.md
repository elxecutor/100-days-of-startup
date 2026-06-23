# Customer Segment Deep-Dive — Day 050

## Step 2: Identify who has the problem most urgently
### Based on day049 interviews with Marco, Amina, and Dr. Akinwande

---

## Tier 1 — Independent RF Consultant (Marco)

**The most urgent buyer.** Has money, feels the pain daily, makes purchase decisions alone.

| Dimension | Detail |
|-----------|--------|
| **Age range** | 32-55 |
| **Location** | Urban/suburban US, EU, UK. Home-office based. Concentrated in tech hubs (Boston, SF, Seattle, Munich, Cambridge). |
| **Income level** | $120k-250k/yr gross. Net after expenses: $80k-160k. Highly variable month to month. |
| **Profession** | Self-employed RF/antenna design consultant. May also do EM simulation services, compliance testing, or patent consulting as adjunct income. |
| **Education** | MSEE or PhD in EE (antenna focus). Typically 8-20 years experience. |
| **Behavior** | Works on 3-5 projects simultaneously. Bids on contracts via Upwork, LinkedIn, or personal network. Keeps strict timesheets. Resistant to recurring software costs because they hit cash flow directly. |
| **Digital habits** | Heavy LinkedIn user (daily). Reads IEEE Spectrum, Microwave Journal. Uses Slack/WhatsApp with clients. One primary workstation (high-end desktop or laptop). Uses Excel for everything that isn't simulation. |
| **Current tool stack** | HFSS or CST (cracked or single-seat license), MATLAB, ADS, Python for automation. |
| **Willingness to pay** | **High.** $79-249/mo is trivial ($3-8/day). But will demand proof of accuracy before subscribing. Buying decision is same-day once validated. |
| **Urgency level** | 🔴 **Critical** — every simulation wait costs billable dollars |
| **Decision maker** | Self (sole proprietor) |
| **Purchase trigger** | Seeing solver output match published reference within 5% |
| **Churn risk** | Low — once hooked, $249 is not worth the hassle of canceling |
| **LTV estimate** | ~$4,500 (18 months at $249/mo before potential upgrade or cancellation) |

**Quotes from Marco that define this segment:**
> "I'd pay $249/month for Professional. But I need the accuracy validation first."

> "At $79/month, I'd use it weekly for quick exploration before firing up the heavy tools."

---

## Tier 2 — IoT Hardware Startup Hardware Lead (Amina)

**High urgency, lower ability to pay.** Pain is acute (PCB spins, certification), but budget is constrained by startup runway.

| Dimension | Detail |
|-----------|--------|
| **Age range** | 25-38 |
| **Location** | Urban tech hubs globally. Often in co-working spaces or small offices. Common in SF, Berlin, Shenzhen, Bangalore, Tel Aviv, Austin. |
| **Income level** | Personal salary: $80k-140k. Company has limited OpEx budget. Individual does not have a P&L but can request tool purchases up to $500/mo without VP approval in most startups. |
| **Profession** | Hardware lead, principal engineer, or head of hardware. Usually the only RF-capable person in the company. Background in embedded systems or electrical engineering generalist — not an antenna specialist. |
| **Education** | BSEE or MSEE. May have taken one electromagnetics course in university. Learning antenna design on the job. |
| **Behavior** | Wears 5 hats (PCB design, system architecture, certification, manufacturing liaison, supply chain). Time is fragmented across meetings. Runs simulations in short bursts between other tasks. Highly pragmatic — will use the simplest tool that works. |
| **Digital habits** | Heavy Slack user. Lives in email. Uses GitHub for firmware, Altium/KiCad for PCB design. Watches YouTube tutorials to learn new skills. Active on Hacker News and hardware subreddits. |
| **Current tool stack** | KiCad/Altium for PCB, maybe a MATLAB script for basic antenna calculations, reference designs from chip vendors, Ansys HFSS if company bought a license (rare at this stage). |
| **Willingness to pay** | **Moderate.** $79/mo is easy. $249/mo needs 1-2 sentence justification to CEO. Anything above $200/mo requires formal approval. Will not pay without a free trial first. |
| **Urgency level** | 🔴 **High** — every PCB spin costs $4k+ and 2-4 weeks |
| **Decision maker** | Self (recommends), CEO or CTO (approves if >$100/mo) |
| **Purchase trigger** | Running a simulation that matches their real-world measurement closely. Or after one more failed PCB spin — "never again." |
| **Churn risk** | Medium — if startup runs out of money, subscription is cut first. If tool saves one PCB spin, loyalty is high. |
| **LTV estimate** | ~$900 (12 months at $75 avg, then either upgrade or churn based on startup survival) |

**Quotes from Amina that define this segment:**
> "One PCB spin avoided pays for 2-3 years of Professional."

> "$79/month I can justify. $249/month if it saves us one PCB spin."

---

## Tier 3 — University Professor / Lab Director (Dr. Akinwande)

**High potential volume, slowest to convert.** Urgency is real but buying process is bureaucratic.

| Dimension | Detail |
|-----------|--------|
| **Age range** | 35-60 |
| **Location** | University towns globally. More geographically distributed than the other segments. Strong concentration in US, Europe, East Asia. |
| **Income level** | Personal: $90k-180k (professor salary). Lab budget: $10k-100k/yr (grants). Has discretionary fund of $1k-5k/yr that can be spent without university procurement. |
| **Profession** | Associate/full professor in electrical engineering, specifically antennas, electromagnetics, or wireless communications. Also: lab director, research scientist, or senior PhD student who manages tools. |
| **Education** | PhD in EE (antenna/EM focus). 10-30 years in the field. |
| **Behavior** | Delegates simulation work to graduate students. Spends time writing grants, reviewing papers, teaching. Cares deeply about reproducibility and methodology. Will not adopt a tool that cannot be cited or documented in a paper. |
| **Digital habits** | Email-heavy. Uses Google Scholar, IEEE Xplore, ResearchGate. May be active on LinkedIn but less than industry peers. Manages lab tools via spreadsheets and email chains — not automated. |
| **Current tool stack** | CST (floating licenses), HFSS (floating licenses), MATLAB, FEKO, custom in-house solvers. Licenses managed via server-based license managers. Student usage tracked manually. |
| **Willingness to pay** | **Moderate for pilot, high for full rollout.** Will spend $200/mo for 8 students from discretionary fund. Will allocate grant money for larger deployment if convinced. Education pricing at $25/mo is ideal. |
| **Urgency level** | 🟡 **Medium** — pain is real but not acute enough to bypass university procurement. Will pilot before committing. |
| **Decision maker** | Professor (for discretionary spending). University procurement office (for >$5k/yr). |
| **Purchase trigger** | Successful pilot with 1-2 students whose simulation results match CST within acceptable tolerance. |
| **Churn risk** | Low — once lab workflow is built around the tool, switching back is painful. High switching cost. |
| **LTV estimate** | ~$2,400 (24-36 months at $80-160/mo, then expands to more students or grants expire) |

**Quotes from Dr. Akinwande that define this segment:**
> "I'd start with 1-2 students as a pilot. If results match CST, I'd roll out to the whole lab."

> "I spend more on journal subscriptions than $160/month for 8 students."

---

## Segment Comparison: Who to Go After First

| Factor | Marco (Consultant) | Amina (IoT Startup) | Dr. Akinwande (Professor) |
|--------|-------------------|---------------------|--------------------------|
| **Pain intensity** | 9/10 | 8/10 | 6/10 |
| **Ability to pay** | High ($79-249/mo) | Medium ($79/mo) | Medium ($25/mo per seat) |
| **Decision speed** | Same day | 1-7 days | 2-12 weeks |
| **Proof required** | Accuracy validation | Match real-world measurement | Peer-reviewed comparison |
| **Volume potential** | Hundreds (niche) | Thousands (larger TAM) | Hundreds (but multi-seat) |
| **Churn risk** | Low | Medium | Low |
| **LTV** | ~$4,500 | ~$1,600 | ~$3,000 |

**Recommendation: Go after Marco first.**
- Fastest sale (same-day decision)
- Highest willingness to pay
- Lowest proof threshold (just needs validation page)
- Will become reference customer for Amina's segment
- Once Marco validates accuracy, Amina follows

Amina is next — larger TAM but needs more hand-holding. Dr. Akinwande is a slow burn — build education tier, let it be self-serve, and collect revenue passively.

---

## Detailed Willingness to Pay Matrix

| Plan Price | Marco | Amina | Dr. Akinwande |
|------------|-------|-------|---------------|
| **Free (10 sims/mo)** | Would not use (too limiting) | Would use to evaluate | Would use to evaluate |
| **$25/mo (education)** | N/A | N/A | Would pay for entire lab |
| **$79/mo (Starter)** | Would pay, might outgrow | Would pay | Would pilot 1-2 students |
| **$249/mo (Professional)** | Ideal plan — would pay | Would pay if tool saves one PCB spin | Too expensive per student |
| **$499/mo (Team)** | Too much for solo | Too much for startup | Lab-wide if grant-funded |

**Optimal pricing strategy:**
1. Free tier (10 sims/mo) — hooks Amina and Dr. Akinwande
2. Starter at $79 — immediate revenue from all three segments
3. Professional at $249 — Marco's sweet spot
4. Education at $25 — Dr. Akinwande's lab rollout
5. Annual billing at 20% discount — lock in Marco and reduce churn
