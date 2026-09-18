# AntennaForge — Project Summary

## What it is
AntennaForge is a cloud-based antenna simulation SaaS built as the Day 046 project. It replaces expensive on-prem RF tools (Ansys HFSS, CST, Altair Feko — ~$30k/licenses locked to one machine) with a browser-accessible simulation platform pitched at "90% less cost."

## Core value proposition
- **Tagline:** "Cloud antenna simulation — 90% less cost"
- **Problem:** $30k desktop tools lock engineers to a single machine.
- **Solution:** Run antenna simulations in the cloud, pay per tier, no hardware lock-in.

## Product surface
- **Landing** — hero pain points, competitor comparison table (HFSS / CST / Feko / AntennaForge), customer segments.
- **Pricing** — 4 segments, tiered subscriptions, add-ons, overage, education/nonprofit discounts.
- **Simulation (MVP)** — 6 antenna types, essential parameters only, S-parameter sweep. Scope toggle: In MVP / Future / Never Build.
- **Dashboard** — North Star Metric ("simulations completed per week"), 4 KPI cards, retention funnel, analytics tab.
- **Signup** — 3-step funnel (email → profile → password), role-based segmentation.
- **Feedback** — 5 structured interview questions, Build→Measure→Learn widget, triage process.
- **Roadmap** — Concept → Prototype → Alpha → Beta → Launch → Growth → Scale.
- **About** — Lean Canvas (9-box), team roles matrix, 6 culture principles.
- **Partners** — 3 tiers: Distribution, Credibility, Technical.

## Tech stack
- **Backend:** FastAPI (http://localhost:8000, docs at /docs)
- **Frontend:** Next.js (http://localhost:3000)
- **Run:** `docker compose up`

## How it embeds the 20-step startup incubation model
Every incubation step (problem definition, segmentation, market study, value prop, assumption testing, WTP, MVP, North Star, lean canvas, feedback, roadmap, anti-feature-creep, GTM, messaging, sales funnel, CRM/analytics, revenue model, partnerships, team/culture, KPIs) is mapped to a concrete page or widget inside the product rather than being a separate document.

## Status
MVP-stage demo: functional UI surfaces and scaffolding, simulation engine is simplified (essential params + S-parameter sweep only).
