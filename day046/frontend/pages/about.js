export default function About() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <nav style={{ borderBottom: '1px solid #1f2937', padding: '14px 0', background: '#0a0a0f' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ fontWeight: 700, fontSize: 16, color: '#f0f0f5', textDecoration: 'none' }}>AntennaForge</a>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <a href="/" style={{ color: '#9ca3af', fontSize: 13 }}>Home</a>
            <a href="/about" style={{ color: '#60a5fa', fontSize: 13, fontWeight: 500 }}>About</a>
            <a href="/login" className="btn btn-ghost" style={{ fontSize: 12, padding: '6px 14px' }}>Sign In</a>
          </div>
        </div>
      </nav>

      <section style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h1 style={{ fontSize: 28, fontWeight: 800, color: '#f0f0f5', marginBottom: 8 }}>About AntennaForge</h1>
            <p style={{ color: '#9ca3af', fontSize: 14 }}><strong>Step 19:</strong> Team roles, operating culture, and the Lean Canvas</p>
          </div>

          {/* ── Team Roles ── */}
          <div className="card" style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: '#f0f0f5', marginBottom: 16 }}>👥 Founding Team</h2>
            <div className="grid-2">
              {[
                { role: 'CEO / Product', name: 'You (Founder)', focus: 'Vision, customer interviews, product decisions, partnerships', bg: '#1e3a5f', color: '#93c5fd' },
                { role: 'CTO / Full-Stack', name: 'You / Co-founder', focus: 'Frontend (Next.js), backend (FastAPI), cloud infrastructure', bg: '#1a2e1a', color: '#6ee7b7' },
                { role: 'RF Engineer', name: 'Hired Part-Time', focus: 'Validates simulation accuracy, designs templates, writes solver configs', bg: '#2e1a1a', color: '#fca5a5' },
                { role: 'Marketing / Growth', name: 'You (wearing this hat)', focus: 'Content, LinkedIn, community, Product Hunt, ad campaigns', bg: '#2e2a1a', color: '#fbbf24' },
              ].map((t, i) => (
                <div key={i} style={{ padding: 16, background: t.bg, borderRadius: 8 }}>
                  <div style={{ fontSize: 11, color: t.color, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>{t.role}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#f0f0f5', marginBottom: 4 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: '#9ca3af' }}>{t.focus}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Operating Culture ── */}
          <div className="card" style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: '#f0f0f5', marginBottom: 16 }}>🧬 Operating Culture</h2>
            <div className="grid-2">
              {[
                { icon: '🎯', title: 'Customer Obsession', desc: 'Every decision starts with "does this help the customer design a better antenna?"' },
                { icon: '⚡', title: 'Speed Over Polish', desc: 'Ship rough, iterate fast. No feature takes longer than 2 weeks.' },
                { icon: '📊', title: 'Radical Transparency', desc: 'All metrics (MRR, churn, sims/week) shared with the whole team.' },
                { icon: '📖', title: 'Learning Culture', desc: 'Weekly "what did we learn" session. Failures are shared, not hidden.' },
                { icon: '🏗️', title: 'No Bureaucracy', desc: 'One Slack channel. One 15-min standup/week. Decisions in hours, not days.' },
                { icon: '👤', title: 'Radical Accountability', desc: 'Every task has one owner. No shared responsibility.' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: 12 }}>
                  <span style={{ fontSize: 20 }}>{c.icon}</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#f0f0f5' }}>{c.title}</div>
                    <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 2 }}>{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Lean Startup Canvas (Step 9) ── */}
          <div className="card">
            <h2 style={{ fontSize: 18, fontWeight: 700, color: '#f0f0f5', marginBottom: 16 }}>📋 Lean Startup Canvas (Step 9)</h2>
            {[
              { section: 'Problem', content: 'Antenna tools cost $15k-$50k/seat. Desktop-locked. No collaboration. No real-world feedback loop.' },
              { section: 'Solution', content: 'Cloud-native antenna simulation. Browser-based. Team sharing. Post-install performance monitoring.' },
              { section: 'Key Metrics', content: 'Simulations/week (North Star), signups, conversion rate, churn, CAC, LTV' },
              { section: 'Unique Value Prop', content: 'Browser-based antenna simulation at 90% less cost with built-in team collaboration and real-world feedback.' },
              { section: 'Unfair Advantage', content: 'Deep RF + cloud expertise; first to market with post-install performance monitoring.' },
              { section: 'Channels', content: 'LinkedIn RF groups, Hacker News, YouTube tutorials, hardware accelerators, RF conferences' },
              { section: 'Customer Segments', content: 'RF consultants ($50-100/mo), IoT startups ($30-80/mo), telecom OEMs ($200-500/mo), universities ($25/mo)' },
              { section: 'Cost Structure', content: 'Cloud compute (40%), engineering (40%), marketing (15%), overhead (5%)' },
              { section: 'Revenue Streams', content: 'Tiered subscription ($79-$499/mo), enterprise custom, education $25/mo, overage fees' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: i < 8 ? '1px solid #1f2937' : 'none' }}>
                <span className="step-badge">{i + 1}</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#60a5fa', marginBottom: 2 }}>{item.section}</div>
                  <div style={{ fontSize: 12, color: '#9ca3af', lineHeight: 1.5 }}>{item.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
