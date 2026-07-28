**Title:** I built a cloud antenna simulator — here's what I learned from 15 RF engineers

**Subreddit:** r/rfelectronics

Hey everyone,

Over the past few months, I've been building AntennaForge — a cloud-based EM simulator that runs in the browser (no install, no license key). I wanted to share what I learned from interviewing 15 RF engineers about their simulation workflow, and get feedback from this community.

**What I heard:**

1. **The license server pain is real.** Every engineer I talked to who uses HFSS or CST has a story about license checkout failures, VPN issues, or IT firewall blocks. One guy keeps a dedicated Windows VM just for the license manager. It's 2025. This is absurd.

2. **Most IoT antenna work is simple geometry.** The vast majority of designs are 1-2 layer PCB antennas (IFA, PIFA, meandered monopole) at 433 MHz, 915 MHz, or 2.4 GHz. Nobody needs the full CST Microwave Studio suite for a Bluetooth PCB trace antenna.

3. **Collaboration is broken.** Consultants told me the #1 pain point is getting project files from clients who use different tools. A CST project file is useless to an HFSS user and vice versa.

4. **OpenEMS is good but painful.** Several people mentioned trying OpenEMS and giving up because of the learning curve. No GUI, Python-only geometry definition, no built-in optimization.

**What I built:**

- Web-based geometry editor (Three.js 3D viewer)
- OpenEMS solver on autoscaling Kubernetes
- Pay-per-simulation or $200/month unlimited
- Share projects via link (no license required to view)
- Export to Touchstone format

**What I want to know from you:**

- What's your current simulation workflow?
- What's the biggest bottleneck in your antenna design process?
- If you've tried cloud-based tools, what was missing?

I'm not here to pitch — genuinely want to build something useful for this community. AMA about the tech stack or the business side, happy to share.

---
*For context: I'm an RF engineer turned founder. Background: 8 years in hardware design before starting this.*
