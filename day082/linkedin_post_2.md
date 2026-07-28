5 antenna design mistakes IoT startups make (and how to avoid them)

I've reviewed over 50 IoT product designs in the past two years. The same five antenna mistakes show up every time. Here's what they are — and how to fix them before your FCC test fails.

1️⃣ Treating the antenna as an afterthought
"Let's lay out the PCB first, then find space for the antenna." I hear this constantly. The antenna should be one of the FIRST components you place, not the last. Its ground plane clearance, feed line routing, and surrounding component placement all affect performance. Design the antenna zone before you route anything else.

2️⃣ Copying the reference design blindly
That app note from the chip vendor? It was simulated on an 8-layer board with specific stackup and no enclosure. Your 2-layer board with a plastic case is a completely different electromagnetic environment. Reference designs are starting points, not blueprints. Always simulate your actual geometry.

3️⃣ Skipping simulation entirely
"I'll just tune it on the VNA after assembly." This costs you weeks and multiple board spins. A 30-minute simulation can catch a 10 dB impedance mismatch before you ever order a PCB. Modern cloud simulators make this trivially cheap.

4️⃣ Ignoring enclosure effects
Your antenna was -10 dB return loss on the bench. You put it in the enclosure. Now it's -3 dB. Plastic, metal, battery proximity, even the color of the paint — they all detune the antenna. Always simulate with the enclosure model included.

5️⃣ Not measuring after installation
The antenna that worked on your desk might not work on the factory floor, in a metal junction box, or mounted on a truck. Test with a VNA after final assembly. Better yet, design a small test coupon with the antenna on every production batch.

The good news: every one of these is avoidable with the right tools and a bit of discipline. You don't need a $20k license to get it right.

What's the worst antenna problem you've debugged? I'll share mine in the comments.

#IoT #HardwareDesign #AntennaDesign #PCBDesign #RFEngineering #ProductDevelopment
