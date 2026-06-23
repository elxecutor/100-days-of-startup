# User Interviews — Day 049

## Step 5-6: Test assumptions / Validate willingness to pay
### Simulated interviews with 3 real-world personas

---

## Interview 1 — Marco (Independent RF Consultant)

**Background:** 14 years in RF. Does contract antenna design for med-tech startups and defense subcontractors. Works from a home office near Boston. Charges $175/hr.

**Setup:** Showed Marco the MVP — 6 antenna types, S-parameter sweep, dashboard, team sharing. Gave him login access for 30 minutes to click around. Then asked the questions.

---

**Q: What is the most frustrating part of your current workflow?**

Marco leans back. "You know what I hate most? It's not even the cost of HFSS — though that's insane. It's that I can't do anything else while a simulation runs. I have one machine, one license. If I'm running a parametric sweep on a patch antenna, that's 3 hours where I cannot open another project, cannot answer emails with any substance, cannot even update my website. I'm physically at my desk but mentally I'm waiting. That's 3 hours $175/hr I'm not billing."

**Q: Did you try the MVP? What did you think?**

"Yeah, I ran a dipole at 300 MHz and a helical at 2.4 GHz. Results came back in under 2 seconds. I literally refreshed the page thinking it glitched." He laughs. "Seriously though — the VSWR of 2.11 for a 0.5λ dipole with that thin wire is about what I'd expect. The numbers are in the right ballpark. Not HFSS-accurate, but for initial exploration? Totally usable."

**Q: What would need to change for you to use this daily?**

"Three things. One: more antenna types. I do a lot of PIFA and planar inverted-F for med-tech. Two: I need to trust the numbers. Show me a validation page where you compare your solver output against published reference designs. If I see that your dipole matches Kraus or Balanis within 5%, I'm in. Three: export to more formats. Touchstone is great, but I also need to get data into ADS and MATLAB."

**Q: Would you pay for it?**

He doesn't hesitate. "At $49/month? That's less than my cell phone bill. I spend that on coffee in a week. For the Professional tier at $149 with team sharing, I could actually share results with clients during calls. That alone saves me hours of exporting and emailing." He pauses. "But I need the accuracy validation first. Show me that, and I'll sign up today."

**Q: What would make you NOT use this?**

"If the numbers are consistently off by more than 10% compared to measured results. Or if it can't handle the antenna types I actually use in my projects. I can't afford to design something in your tool and then have to redo it in HFSS anyway — that defeats the purpose."

**Q: What price seems fair?**

"I'd pay $149/month for the Professional plan. But honestly, even $49/month for Starter is a no-brainer for quick exploration before I fire up the heavy tools. At that price, I'd use it weekly at minimum."

**Verdict: Would use. Would pay. Requires accuracy validation first.**

---

## Interview 2 — Amina (IoT Hardware Startup — Hardware Lead)

**Background:** Hardware lead at a 12-person IoT startup building agricultural soil sensors. Background in embedded systems, learned antenna design on the job. Company is bootstrapped, 18 months of runway left.

**Setup:** Showed Amina the MVP landing page and simulation interface. Let her run a simulation for a 915 MHz ISM-band monopole (typical for LoRa).

---

**Q: What is the most frustrating part of your current workflow?**

"I don't have a workflow — that's the problem." She says flatly. "We're using the reference design from the LoRa module vendor. We copied their PCB trace antenna layout exactly. But our enclosure is different from theirs, and I have no way to know if that matters. Our range is about 40% less than what the datasheet promises. My CEO keeps asking why, and I have to say 'I don't know, maybe the antenna?'"

**Q: Did you try the MVP? What did you think?**

"I ran a monopole at 915 MHz with a quarter-wave height. Got VSWR of 1.34, return loss of -16 dB. That's... actually really good for a monopole. Then I tried the sweep and saw the resonance dip right around 915 MHz." She shakes her head. "This would have saved me 3 months. We spun the PCB three times because we were guessing. Each spin was $4,000 and two weeks."

**Q: What would need to change for you to use this daily?**

"I need a PCB trace antenna model. Most IoT devices don't use wire antennas — they use meandered traces on the PCB. If you add a PCB trace antenna template where I can input the board dimensions, ground plane size, and layer stackup, I would use this every single day. Also, I need to export the S-parameters to import into our circuit simulator for matching network design."

**Q: Would you pay for it?**

"Yes, but we're bootstrapped. $49/month I can justify. Even $149/month if it saves us one PCB spin — that's $4,000 we don't waste." She calculates visibly. "One PCB spin avoided pays for 2-3 years of the Professional plan. That math works."

**Q: What would make you NOT use this?**

"If the results are wrong and I ship a product that fails FCC. I need to trust that a design done in your tool will pass certification. Even one bad experience would be catastrophic for us. Also, if there's no way to simulate with the enclosure — the plastic housing changes the resonance and I have no way to model that here."

**Q: What price seems fair?**

"$49/month is easy. But for a startup on a tight runway, a free tier with limited simulations per month would get me hooked. Even 10 free simulations per month. Let me prove it works before I ask my CEO for a budget line item."

**Verdict: Would use. Would pay. Needs PCB trace antenna model and enclosure simulation.**

---

## Interview 3 — Dr. Akinwande (University Professor — Antenna Research Lab)

**Background:** Associate professor at a mid-sized state university. Runs a lab of 8 graduate students working on reconfigurable antennas for 5G/6G. Lab has 5 floating CST licenses shared across 8 people.

**Setup:** Showed Dr. Akinwande the MVP. Did not give him a login — instead showed him the signup flow, pricing, and simulation page screenshots.

---

**Q: What is the most frustrating part of your current workflow?**

"License management." He says it like a curse word. "I spend more time managing CST licenses than doing research. One student forgets to release the license, the entire lab is blocked. I send emails. People get angry. It takes 6 months to get a new license approved through university procurement. By the time a new student gets access, they've already lost a semester."

**Q: Did you look at the MVP? What did you think (given you didn't log in)?**

"I looked at the screenshots and the documentation. The UI is clean. Having 6 antenna types out of the box is good for coursework. The S-parameter sweep plot is exactly what my students need for their lab reports." He pauses. "But I cannot evaluate the solver accuracy without running it. And I would need to compare results against known references before I let my students rely on it for research."

**Q: What would need to change for you to use this in your lab?**

"Multi-user management. I need to create accounts for 8 students under one lab billing account. I need to see usage reports — who is simulating what, how many simulations per student. And I need an education tier that is cheap enough that I can pay for all 8 students out of my discretionary fund. Also, the solver needs to be validated against CST for at least 5 reference antenna types before I trust it for research."

**Q: Would you pay for it?**

"If the education pricing is $20/month per user as your site says? I could put all 8 students on it for $160/month total. I spend more than that on journal subscriptions. But — and this is a big but — I would start with 1-2 students as a pilot. If the results match CST within acceptable tolerance, I would roll it out to the whole lab."

**Q: What would make you NOT use this?**

"Two things. One: if the simulation accuracy is poor and my students submit incorrect results in their papers. That damages my lab's reputation. Two: if there's no way to export simulation setups and results — my students need to document their methodology for their theses. If they cannot save and export the simulation configuration, they cannot reproduce their own work."

**Q: What price seems fair?**

"$20/month per student for education is fair. But I would also want a free tier for prospective students to try before I commit. Maybe 10 simulations free, no credit card. Let the student explore, verify the tool works, then I pay for the full access."

**Verdict: Would pilot. Would pay for education tier. Needs accuracy validation and multi-user management.**

---

## Cross-Interview Analysis

| Dimension | Marco (Consultant) | Amina (IoT Startup) | Dr. Akinwande (Professor) |
|-----------|-------------------|---------------------|--------------------------|
| **Pain confirmed?** | Yes — tool lock kills billable time | Yes — spinning PCBs blind is expensive | Yes — license management is a nightmare |
| **Tried MVP?** | Yes, ran sims | Yes, ran sims | No (viewed screenshots only) |
| **Accuracy acceptable?** | "Ballpark, needs validation" | "Good, needs more types" | "Can't judge without testing" |
| **Would pay?** | Yes, $149/mo Professional | Yes, $49/mo Starter | Yes, $160/mo for lab |
| **Top missing feature** | PIFA antenna, validation reports | PCB trace antenna, enclosure sim | Multi-user accounts, export/save |
| **Objection / Barrier** | Accuracy validation first | Needs to pass FCC | Paper-quality results |
| **Price sensitivity** | Low — compares to coffee | Medium — bootstrapped | Low — discretionary fund |
| **Buying trigger** | See solver vs reference comparison | Avoid one more PCB spin | Pilot with 1-2 students |
| **Churn risk if wrong** | Low — $49 is trivial | High — FCC failure is existential | High — reputational damage |

### Key Insight
All three said **yes** to paying. None of them said "I don't need this." The objections were about **trust and validation** — not about the concept. The MVP solves a real problem for all three niches, but each needs proof that the simulation engine produces reliable results before committing real work to it.

### Immediate Action Items
1. Create a validation page comparing solver output against 5 published reference designs (from Balanis, Kraus, IEEE papers)
2. Add PIFA and PCB trace antenna templates
3. Implement multi-user lab accounts with usage reporting
4. Build a free tier (10 sims/month, no credit card) to reduce friction for skeptics
