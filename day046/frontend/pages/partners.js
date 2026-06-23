import { useState } from 'react'

const TIERS = [
  {
    tier: 'Tier 1 — Distribution', priority: 'High',
    partners: [
      { name: 'Hardware Accelerators', logo: '🚀', desc: 'HAX, Bolt, Hardware Club, Zero to One. Offer free Team plan for portfolio companies in exchange for newsletter features.', benefit: 'Access to 500+ hardware startups' },
      { name: 'RF Component Distributors', logo: '🔌', desc: 'Digi-Key, Mouser, Arrow. Cross-promotion: "Buy RF components from us, design with AntennaForge."', benefit: 'Distribution to 100k+ engineers' },
      { name: 'PCB Design Tools', logo: '📐', desc: 'Altium, KiCad, Eagle. Build plugins: "Design your PCB, simulate your antenna without leaving the tool."', benefit: 'Integration into daily workflow' },
    ]
  },
  {
    tier: 'Tier 2 — Credibility', priority: 'Medium',
    partners: [
      { name: 'University Research Labs', logo: '🎓', desc: 'MIT Antenna Lab, Stanford Wireless, TU Delft RF. Free Enterprise plan in exchange for case study and logo.', benefit: 'Academic credibility + case study' },
      { name: 'Standards Bodies', logo: '📡', desc: 'IEEE Antennas and Propagation Society. Sponsor workshops and webinars.', benefit: 'Industry authority signal' },
    ]
  },
  {
    tier: 'Tier 3 — Technical', priority: 'Low',
    partners: [
      { name: 'Cloud Providers', logo: '☁️', desc: 'AWS Activate, GCP for Startups. Get compute credits to reduce infrastructure costs.', benefit: '$5k-100k in cloud credits' },
      { name: 'Open Source Community', logo: '🔓', desc: 'OpenEMS project. Contribute upstream, sponsor, get listed as a commercial supporter.', benefit: 'Community goodwill + technical validation' },
    ]
  }
]

export default function Partners() {
  const [expanded, setExpanded] = useState(null)

  return (
    <div style={{ minHeight: '100vh' }}>
      <nav style={{ borderBottom: '1px solid #1f2937', padding: '14px 0', background: '#0a0a0f' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ fontWeight: 700, fontSize: 16, color: '#f0f0f5', textDecoration: 'none' }}>AntennaForge</a>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <a href="/" style={{ color: '#9ca3af', fontSize: 13 }}>Home</a>
            <a href="/partners" style={{ color: '#60a5fa', fontSize: 13, fontWeight: 500 }}>Partners</a>
            <a href="/login" className="btn btn-ghost" style={{ fontSize: 12, padding: '6px 14px' }}>Sign In</a>
          </div>
        </div>
      </nav>

      <section style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h1 style={{ fontSize: 28, fontWeight: 800, color: '#f0f0f5', marginBottom: 8 }}>Partnership Program</h1>
            <p style={{ color: '#9ca3af', fontSize: 14 }}><strong>Step 18:</strong> Deliberate partnerships for distribution, credibility, and technical leverage.</p>
          </div>

          {TIERS.map((tier, i) => (
            <div key={i} style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <span className="tag" style={{
                  background: tier.priority === 'High' ? '#1e3a5f' : '#1a2e1a',
                  color: tier.priority === 'High' ? '#93c5fd' : '#6ee7b7',
                }}>{tier.priority} Priority</span>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: '#f0f0f5' }}>{tier.tier}</h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {tier.partners.map((p, j) => (
                  <div key={j} className="card" style={{ cursor: 'pointer' }}
                    onClick={() => setExpanded(expanded === `${i}-${j}` ? null : `${i}-${j}`)}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <span style={{ fontSize: 24 }}>{p.logo}</span>
                        <div>
                          <h3 style={{ fontSize: 15, fontWeight: 600, color: '#f0f0f5' }}>{p.name}</h3>
                          <p style={{ fontSize: 12, color: '#9ca3af' }}>{p.desc}</p>
                        </div>
                      </div>
                      <span style={{ fontSize: 12, color: '#60a5fa' }}>{expanded === `${i}-${j}` ? '▲' : '▼'}</span>
                    </div>
                    {expanded === `${i}-${j}` && (
                      <div style={{ marginTop: 12, padding: 12, background: '#1a1a2e', borderRadius: 8 }}>
                        <div style={{ fontSize: 12, color: '#34d399', fontWeight: 600, marginBottom: 4 }}>Benefit:</div>
                        <div style={{ fontSize: 12, color: '#d1d5db' }}>{p.benefit}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="card" style={{ textAlign: 'center', background: '#1e3a5f', borderColor: '#3b82f6' }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: '#f0f0f5', marginBottom: 8 }}>Want to partner with us?</h3>
            <p style={{ fontSize: 13, color: '#bfdbfe', marginBottom: 16 }}>We are actively looking for distribution, integration, and technology partners.</p>
            <a href="mailto:partners@antennaforge.io" className="btn btn-primary">partner@antennaforge.io</a>
          </div>
        </div>
      </section>
    </div>
  )
}
