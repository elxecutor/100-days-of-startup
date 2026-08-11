# 100 Days of Startup

*A day-by-day SaaS startup engineering journal*

[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)
[![Days](https://img.shields.io/badge/Days-99-00a3ee?style=flat-square)](.)
[![Status](https://img.shields.io/badge/Status-In%20Progress-orange?style=flat-square)](.)

A public chronicle of building **AntennaForge** — a cloud-native antenna simulation SaaS platform — from idea to product. Each day is a self-contained deliverable covering the full startup lifecycle: market research, customer interviews, product development, marketing, fundraising, and more.

> [!NOTE]
> This repository is both a **journal** and a **working product**. Days 1–99 contain markdown deliverables documenting the startup journey. The actual SaaS application lives in [`day046/`](day046/).

---

## Overview

Traditional antenna simulation tools (ANSYS HFSS, CST Studio, Altair Feko) cost $15k–$30k/year and require local workstations. AntennaForge aims to disrupt this by offering browser-based simulation at a fraction of the cost, starting at $79/month.

This repository captures the entire process of building that product in public — the research, the code, the outreach, the failures, and the iteration.

### What's Inside

| Section | Days | Content |
|---------|------|---------|
| Marketing & Outreach | 1–45 | Social posts, LinkedIn outreach, hardware marketing, circuit analyses |
| Product Build | 46–54 | The actual SaaS application (FastAPI + Next.js), market analysis |
| Customer Discovery | 55–76 | Market gap analysis, customer interviews, analytics, sales funnels |
| Growth & Fundraising | 77–99 | Blog posts, community engagement, investor outreach, funding prospecting |
| Book Summaries | [`books/`](books/) | 34 book summaries on startup, business, and personal finance |

---

## The Product: AntennaForge

The working SaaS application lives in [`day046/`](day046/) and includes:

- **Backend** — Python + FastAPI + SQLAlchemy + Pydantic
- **Frontend** — Next.js 14 + React 18 + TypeScript
- **Simulation Engine** — NumPy + SciPy for antenna physics
- **Auth** — JWT-based authentication
- **Payments** — Stripe integration
- **Task Queue** — Celery + Redis
- **Database** — PostgreSQL

### Quick Start

```bash
cd day046
docker compose up
```

- Backend: http://localhost:8000
- API docs: http://localhost:8000/docs
- Frontend: http://localhost:3000

See the [day046 README](day046/README.md) for the full 20-step startup incubation framework mapped to SaaS features.

---

## Project Structure

```
100-days-of-startup/
├── books/              # 34 book summaries (startup, finance, business)
├── day001/             # Day 1 deliverable
├── day002/             # Day 2 deliverable
├── ...
├── day046/             # ★ SaaS application code (FastAPI + Next.js)
├── ...
├── day099/             # Day 99 deliverable
└── LICENSE
```

Each `dayNNN/` directory contains markdown files documenting that day's work — whether it's a marketing campaign, a customer interview script, a competitive analysis, or a product feature spec.

---

## Contributing

We welcome contributions — whether it's fixing a typo in a deliverable, suggesting a new day topic, or improving the SaaS application in `day046/`. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## Code of Conduct

This project adheres to a standard code of conduct. See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

---

## License

This project is licensed under the [MIT License](LICENSE).
