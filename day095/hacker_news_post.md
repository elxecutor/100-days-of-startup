**Title:** Show HN: AntennaForge – Cloud antenna simulation in your browser

Hi HN,

I'm [name], an RF engineer turned founder. For the past year, I've been building AntennaForge — a 3D electromagnetic simulator that runs entirely in the browser.

**The problem**

EM simulation tools (HFSS, CST, FEKO) cost $20k–$40k/year per seat, require dedicated workstations, and have license management from 2005. For IoT hardware teams designing PCB antennas at 433 MHz–6 GHz, this is massive overkill.

**What AntennaForge does**

- Users define antenna geometry in a browser-based 3D editor (Three.js)
- The geometry is sent to an OpenEMS solver running on Kubernetes
- Results (S-parameters, far-field patterns, Smith chart) come back via WebSocket
- Pricing: $10/simulation or $200/month unlimited

**Tech stack**

- Frontend: Next.js + Three.js (3D viewer)
- API: FastAPI (Python) with WebSocket for job status updates
- Solver: OpenEMS FDTD, containerized with Docker
- Compute: Kubernetes cluster with autoscaling (scale to zero when idle)
- Storage: S3 for simulation results, Postgres for metadata
- Auth: Clerk

**Why I'm excited about this**

1. **No install**: Genuinely browser-based. Works on a Chromebook.
2. **No lock-in**: Export results as Touchstone (.S1P, .S2P) — interoperable with any tool.
3. **Fair pricing**: Pay for what you use. A typical IoT antenna simulation costs $10.
4. **Collaboration**: Share a project link with a contractor — they don't need a license.

**Where we fall short (being transparent)**

- We only support FDTD (no FEM, MoM, or hybrid solvers)
- Electrically large structures (>5λ) are slow — we're working on it
- No eigenmode solver for filter/cavity design
- Pre-1.0: expect bugs and rough edges
- Only PCB antenna geometries well-supported today

**What I'd love feedback on**

- Does this pricing model make sense for your use case?
- What's missing for you to use this in your workflow?
- Any RF engineers want to do a call and tear apart our solver accuracy?

**Try it:** [link] (first 3 simulations free, no credit card)
**Tech blog:** [link]
**GitHub (open-source OpenEMS contributions):** [link]

Happy to answer questions about the tech stack, the FDTD solver, the Kubernetes setup, or the RF business side.

---

*Why not just use OpenEMS directly? OpenEMS is excellent software, but it has no GUI, requires Python scripting, and has a steep learning curve. We're essentially wrapping it in a usable UX + cloud compute. We also contribute solver improvements back upstream.*
