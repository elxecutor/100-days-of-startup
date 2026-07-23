# Day 72 — Incubator Research & Draft Application (Day 1)

**Theme:** Check up online incubators and draft application

---

## Ranked Incubator / Accelerator List (by relevance to AntennaForge)

| Rank | Name | Focus Area | Funding Offered | Program Length | Acceptance Rate | Deadline | Why It Fits AntennaForge |
|------|------|------------|----------------|----------------|----------------|----------|--------------------------|
| 1 | **Y Combinator** | Broad tech (SaaS + hard tech welcome) | $500k standard deal | 3 months | ~1.5–2% | Rolling (apply early) | Best network, most prestigious, strong B2B SaaS track record. AntennaForge is a technical SaaS with hardware adjacency — YC funds both. |
| 2 | **HAX (Shenzhen / Newark)** | Hardware + deep tech | $250k–$500k | 6 months | ~5% | Rolling | Perfect for hardware-software bridge. They understand antennas, RF, and manufacturing. Can help with supply chain. |
| 3 | **Techstars (Anywhere + Hardware Focus)** | General + vertical tracks | $120k for 6–10% | 3 months | ~1–1.5% | Various | Wide network, mentor-driven. Hardware track exists in some cohorts. Good for B2B go-to-market. |
| 4 | **TinySeed** | B2B SaaS (specifically) | $200k–$250k (usually) | 12 months (remote) | ~2–3% | Batch-based | Pure B2B SaaS focus matches our revenue model. Remote-first, no relocation. Ideal for capital-efficient founders. |
| 5 | **Entrepreneur First** | Deep tech, founder matching | $80k–$120k | 6 months | ~5% | Cohort-based | If we need a co-founder or deeper technical hire. Strong in AI/engineering. |
| 6 | **SOSV** | Deep tech, life sciences, hardware | $300k–$500k | 6–12 months | ~3% | Rolling | Parent of HAX and IndieBio. Multi-program access. Good for later-stage hardware scaling. |
| 7 | **Plug and Play** | Enterprise / IoT | $50k–$200k | 3–6 months | ~1% | Rolling | Strong corporate partnerships. Antenna Forge could land enterprise pilots through their IoT vertical. |
| 8 | **Startupbootcamp IoT** | IoT / hardware-enabled SaaS | €15k–€25k (equity-free grants) | 3 months | ~2% | Cohort-based | Directly addresses IoT infrastructure simulation. Shorter program, smaller funding, but high mentorship quality. |
| 9 | **Hardware Club** | Hardware + connected devices | $100k–$150k | 6 months | ~5% | Rolling | Community-driven, hardware-specific. Smaller but very focused network. |
| 10 | **IndieBio** | Biotech / med device | $250k | 6 months | ~3% | Cohort-based | Only relevant if AntennaForge expands into biomedical RF sensing. Low priority now but worth knowing. |

---

## Application Draft: Problem Statement (YC-style)

### What problem does AntennaForge solve?

Designing and simulating antennas today requires expensive, desktop-bound software (HFSS, CST, FEKO) that costs $10k–$50k per license, runs only on high-end Windows workstations, and demands hours of setup per simulation. Hardware engineers at IoT startups, defense contractors, and telecom companies spend 40% of their design time *waiting for simulations* and managing license servers instead of actually iterating on designs.

The problem is worse for small teams: a five-person hardware startup might spend $50k+/year on simulation licenses before they've even built a prototype. There is no viable cloud-native alternative that combines a modern UX, collaborative project management, and physics-accurate solver engines accessible from any browser.

Worse, the antenna design workflow is fragmented. Engineers export geometry from CAD, import it into a simulator, run meshing (which often fails), wait for solve times, export results, re-import into reporting tools, and share PDFs back and forth. Each handoff loses time and context. There is no integrated platform that lets a team design, simulate, review, and iterate in one place.

AntennaForge fixes this by bringing antenna simulation to the browser — accessible from any machine, collaborative by default, and priced for teams of any size. We make antenna design as fast and frictionless as modern software development.
