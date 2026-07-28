**Title:** IoT antenna design doesn't need to be expensive or hard

**Subreddit:** r/IoT (or r/embedded)

I see a lot of posts here asking about antenna selection for IoT products — usually something like "which chip antenna should I use for my BLE sensor?" So I wanted to share some practical advice that goes beyond just picking a part number.

**The Reality**

Most IoT products don't need an exotic antenna design. They need a well-executed standard design. Here's what I've learned from helping ~20 hardware teams with antenna integration:

**1. Chip antennas are fine for prototypes, but PCB antennas are better for production**

A chip antenna (Johanson, Fractus, etc.) costs $0.15–$0.50 in volume. A PCB trace antenna costs $0.02. The performance difference is usually <1 dB if both are properly matched. If you're shipping 10k+ units, PCB antennas save real money.

**2. The ground plane is more important than the antenna**

Antenna gain is meaningless without context. A "2 dBi" chip antenna on a tiny ground plane will outperform a "3 dBi" one on a poorly laid-out board. Rule of thumb: at least λ/4 of ground in each direction from the antenna. For 2.4 GHz, that's 31 mm.

**3. You can simulate antennas without spending $30k**

This is the part I wish I'd known earlier in my career. OpenEMS is free (but hard to use). Cloud simulators like AntennaForge (I'm the founder) cost $10/simulation. Even Ansys has a free student version now for non-commercial use.

**4. Test early, test often**

I've seen teams do 4 PCB spins because they didn't simulate the antenna until Rev C. A 15-minute simulation on Rev A can save $10k+ in NRE. Simulate → prototype → measure → iterate. The loop is faster and cheaper than you think.

**5. Your enclosure WILL detune the antenna**

I can't stress this enough. I've seen -15 dB S11 on the bench turn into -3 dB inside a $0.50 plastic case. Always simulate or measure with the enclosure. If you can't do either, add a pi-network with extra margin so you can tune after assembly.

**Quick Reference: Common IoT Bands**

| Band | Freq | λ/4 on FR4 | Typical Antenna |
|------|------|------------|-----------------|
| LoRa 868/915 | 868/915 MHz | 43/41 mm | Quarter-wave monopole |
| BLE/Wi-Fi | 2.4–2.48 GHz | 17 mm | IFA, PIFA, chip |
| Thread/Zigbee | 2.4 GHz | 17 mm | Same as BLE |
| GPS | 1.575 GHz | 25 mm | Patch, helical |
| 5G NR | 3.5 GHz | 14 mm (on FR4 ~10 mm) | PIFA, slot |

**Resources I recommend:**

- *Antenna Theory* by Balanis (the bible, but read chapter 4 first)
- AntennaForge blog: practical guides on PCB antenna design (bit of a plug, but genuinely useful content)
- IEEE papers on specific antenna topologies

What's the hardest antenna problem you've faced in your IoT product? Happy to offer thoughts.

---
*Full disclosure: I'm building AntennaForge, a cloud-based antenna simulator. I tried to keep this advice tool-agnostic — the principles apply regardless of what you use. If you want a free simulation to test your current design, DM me.*
