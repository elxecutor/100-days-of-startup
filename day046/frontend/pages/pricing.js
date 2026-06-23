import { useState } from 'react'

const PLANS = [
  {
    id: 'starter', name: 'Starter', price: 79, sims: '50 sims/mo', seats: '1 seat', popular: false,
    segments: ['Independent RF Consultants', 'Students', 'Hobbyists'],
    features: ['6 antenna types (dipole, patch, helical, monopole, Yagi, loop)',
      'S-parameter plots (S11, VSWR)', 'Key metrics (gain, impedance, BW, efficiency)',
      'Touchstone (.s1p) export', 'Email support'],
    missing: ['Team sharing', 'API access', 'Far-field patterns', 'Optimization engine', 'Priority support']
  },
  {
    id: 'professional', name: 'Professional', price: 249, sims: '200 sims/mo', seats: '5 seats', popular: true,
    segments: ['IoT Hardware Startups', 'Small RF Teams'],
    features: ['Everything in Starter', 'Team sharing with 5 seats',
      'REST API access (1000 req/hr)', '10 antenna types (advanced variants)',
      'Far-field pattern visualization', 'Priority email + chat support'],
    missing: ['Optimization engine', 'SSO/SAML', 'Enterprise SLA']
  },
  {
    id: 'team', name: 'Team', price: 499, sims: '1000 sims/mo', seats: '20 seats', popular: false,
    segments: ['Mid-size Telecom OEMs', 'R&D Departments'],
    features: ['Everything in Professional', '20 team seats',
      'Optimization engine (automated tuning)', 'SSO/SAML + audit logs',
      'API access (unlimited)', '99.9% SLA', 'Dedicated support engineer'],
    missing: ['On-prem deployment']
  },
  {
    id: 'enterprise', name: 'Enterprise', price: null, sims: 'Unlimited', seats: 'Unlimited', popular: false,
    segments: ['Large OEMs', 'Defense/ Aerospace', 'Broadcast Companies'],
    features: ['Everything in Team', 'Unlimited simulations',
      'On-premise deployment option', 'Custom integrations',
      'Dedicated infrastructure', '24/7 phone + email support',
      'Quarterly business reviews'],
    missing: []
  }
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)
  const [selected, setSelected] = useState(null)

  return (
    <div style={{ minHeight: '100vh' }}>
      <nav style={{ borderBottom: '1px solid #1f2937', padding: '14px 0', background: '#0a0a0f' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 16, color: '#f0f0f5', textDecoration: 'none' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2"><circle cx="12" cy="12" r="7"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>
            AntennaForge
          </a>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <a href="/" style={{ color: '#9ca3af', fontSize: 13 }}>Home</a>
            <a href="/pricing" style={{ color: '#60a5fa', fontSize: 13, fontWeight: 500 }}>Pricing</a>
            <a href="/login" className="btn btn-ghost" style={{ fontSize: 12, padding: '6px 14px' }}>Sign In</a>
            <a href="/signup" className="btn btn-primary" style={{ fontSize: 12, padding: '6px 14px' }}>Start Trial</a>
          </div>
        </div>
      </nav>

      <section style={{ padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: 32, fontWeight: 800, color: '#f0f0f5', marginBottom: 8 }}>
            Pricing by Customer Segment
          </h1>
          <p style={{ color: '#9ca3af', maxWidth: 600, margin: '0 auto 32px', fontSize: 14, lineHeight: 1.6 }}>
            <strong>Step 2:</strong> Each plan targets a specific segment with the features they need.
            <br />
            <strong>Step 17:</strong> Tiered subscription + overage. Annual = 20% off.
          </p>

          {/* Toggle: Monthly / Annual */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 40 }}>
            <span style={{ fontSize: 13, color: annual ? '#9ca3af' : '#f0f0f5', fontWeight: annual ? 400 : 600 }}>Monthly</span>
            <button onClick={() => setAnnual(!annual)}
              style={{ width: 44, height: 24, borderRadius: 12, background: annual ? '#2563eb' : '#1f2937', border: 'none', cursor: 'pointer', position: 'relative', transition: 'background 0.2s' }}>
              <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'white', position: 'absolute', top: 3, left: annual ? 23 : 3, transition: 'left 0.2s' }} />
            </button>
            <span style={{ fontSize: 13, color: annual ? '#f0f0f5' : '#9ca3af', fontWeight: annual ? 600 : 400 }}>
              Annual <span style={{ color: '#34d399', fontSize: 11 }}>(Save 20%)</span>
            </span>
          </div>

          {/* Plan Cards */}
          <div className="grid-4" style={{ gap: 16, textAlign: 'left' }}>
            {PLANS.map((plan, i) => {
              const monthlyPrice = plan.price
              const effectivePrice = annual ? Math.round(monthlyPrice * 0.8) : monthlyPrice
              return (
                <div key={plan.id} className="card" style={{
                  position: 'relative',
                  borderColor: plan.popular ? '#2563eb' : '#1f2937',
                  display: 'flex', flexDirection: 'column',
                }}>
                  {plan.popular && (
                    <div style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', background: '#2563eb', color: 'white', fontSize: 10, fontWeight: 700, padding: '2px 14px', borderRadius: 12 }}>
                      MOST POPULAR
                    </div>
                  )}

                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontSize: 11, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>
                      {plan.segments.join(' · ')}
                    </div>
                    <h2 style={{ fontSize: 20, fontWeight: 700, color: '#f0f0f5' }}>{plan.name}</h2>
                  </div>

                  <div style={{ marginBottom: 16 }}>
                    {plan.price ? (
                      <div>
                        <span style={{ fontSize: 32, fontWeight: 800, color: '#f0f0f5' }}>
                          ${effectivePrice}
                        </span>
                        <span style={{ fontSize: 14, color: '#9ca3af' }}>/month</span>
                        {annual && <div style={{ fontSize: 11, color: '#34d399' }}>${monthlyPrice}/mo billed annually</div>}
                      </div>
                    ) : (
                      <div style={{ fontSize: 24, fontWeight: 800, color: '#60a5fa' }}>Custom</div>
                    )}
                    <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>{plan.sims} · {plan.seats}</div>
                  </div>

                  <ul style={{ listStyle: 'none', flex: 1, marginBottom: 16 }}>
                    {plan.features.map((f, j) => (
                      <li key={j} style={{ padding: '4px 0', fontSize: 12, color: '#d1d5db' }}>
                        <span style={{ color: '#34d399', marginRight: 6 }}>✓</span>{f}
                      </li>
                    ))}
                    {plan.missing.map((f, j) => (
                      <li key={j} style={{ padding: '4px 0', fontSize: 12, color: '#4b5563' }}>
                        <span style={{ color: '#4b5563', marginRight: 6 }}>—</span>{f}
                      </li>
                    ))}
                  </ul>

                  <a href="/signup" className="btn" style={{
                    width: '100%', justifyContent: 'center',
                    background: plan.popular ? '#2563eb' : '#1f2937',
                    color: plan.popular ? 'white' : '#e4e4e7',
                    border: plan.popular ? 'none' : '1px solid #374151',
                  }}>
                    {plan.price ? 'Start Free Trial' : 'Contact Sales'}
                  </a>
                </div>
              )
            })}
          </div>

          {/* Step 17: Revenue model detail */}
          <div style={{ marginTop: 40, padding: 24, background: '#14141f', borderRadius: 12, border: '1px solid #1f2937', textAlign: 'left' }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: '#f0f0f5', marginBottom: 12 }}>💰 Revenue Model Details (Step 17)</h3>
            <div className="grid-3" style={{ fontSize: 13, color: '#9ca3af', gap: 20 }}>
              <div>
                <strong style={{ color: '#d1d5db' }}>Primary:</strong> Tiered monthly subscription
                <ul style={{ marginTop: 6, listStyle: 'none', fontSize: 12 }}>
                  <li>• Starter: $79/mo — individual engineers</li>
                  <li>• Professional: $249/mo — small teams</li>
                  <li>• Team: $499/mo — departments</li>
                  <li>• Enterprise: Custom — large orgs</li>
                </ul>
              </div>
              <div>
                <strong style={{ color: '#d1d5db' }}>Add-ons:</strong>
                <ul style={{ marginTop: 6, listStyle: 'none', fontSize: 12 }}>
                  <li>• Overage: $2/sim (Starter), $1/sim (Pro), $0.50/sim (Team)</li>
                  <li>• Extra seats: $10/seat (Pro), $5/seat (Team)</li>
                  <li>• Performance monitoring: $29/device/mo</li>
                </ul>
              </div>
              <div>
                <strong style={{ color: '#d1d5db' }}>Discounts:</strong>
                <ul style={{ marginTop: 6, listStyle: 'none', fontSize: 12 }}>
                  <li>• Annual: 20% off</li>
                  <li>• Education: $25/mo flat</li>
                  <li>• Nonprofit: 50% off</li>
                  <li>• Referral: 1 month free per referral</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid #1f2937', padding: '24px 0', textAlign: 'center', fontSize: 12, color: '#6b7280' }}>
        <div className="container">All plans include a 14-day free trial. No credit card required.</div>
      </footer>
    </div>
  )
}
