import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import type { TokenResponse } from '../lib/types'

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

interface SignupForm {
  email: string
  password: string
  full_name: string
  company: string
  role: string
}

export default function Signup() {
  const [form, setForm] = useState<SignupForm>({ email: '', password: '', full_name: '', company: '', role: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(1)

  const update = (k: keyof SignupForm) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm({ ...form, [k]: e.target.value })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${API}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) { const err = await res.json(); throw new Error(err.detail || 'Signup failed') }
      const data = (await res.json()) as TokenResponse
      localStorage.setItem('af_token', data.access_token)
      localStorage.setItem('af_user', JSON.stringify(data.user))
      window.location.href = '/dashboard'
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div className="card" style={{ width: 460, maxWidth: '100%' }}>
        {/* Step 15: Sales funnel — multi-step signup reduces friction */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 24, justifyContent: 'center' }}>
          {[1, 2, 3].map(s => (
            <div key={s} style={{
              width: 32, height: 4, borderRadius: 2,
              background: step >= s ? '#2563eb' : '#1f2937',
              transition: 'background 0.3s'
            }} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: '#f0f0f5' }}>
            {step === 1 ? 'Start your free trial' : step === 2 ? 'Tell us about yourself' : 'Almost done'}
          </h1>
          <p style={{ color: '#9ca3af', fontSize: 13, marginTop: 4 }}>
            {step === 1 ? 'Step 1 of 3: Create your account' : step === 2 ? 'Step 2 of 3: Help us tailor the experience' : 'Step 3 of 3: Set your password'}
          </p>
        </div>

        {error && <div style={{ background: '#7f1d1d', color: '#fca5a5', padding: '8px 12px', borderRadius: 8, marginBottom: 16, fontSize: 13 }}>{error}</div>}

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <div style={{ marginBottom: 16 }}>
                <label className="label">Work Email</label>
                <input className="input" type="email" value={form.email} onChange={update('email')} required placeholder="you@company.com" />
              </div>
              <button type="button" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setStep(2)}>
                Continue
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <div style={{ marginBottom: 16 }}>
                <label className="label">Full Name</label>
                <input className="input" value={form.full_name} onChange={update('full_name')} required placeholder="Jane Doe" />
              </div>
              <div className="grid-2" style={{ marginBottom: 16 }}>
                <div>
                  <label className="label">Company</label>
                  <input className="input" value={form.company} onChange={update('company')} placeholder="Acme RF" />
                </div>
                <div>
                  <label className="label">Role</label>
                  <select className="input" value={form.role} onChange={update('role')}>
                    <option value="">Select...</option>
                    <option value="rf_engineer">RF Engineer</option>
                    <option value="hardware_engineer">Hardware Engineer</option>
                    <option value="researcher">Researcher</option>
                    <option value="student">Student</option>
                    <option value="manager">Engineering Manager</option>
                  </select>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button type="button" className="btn btn-secondary" style={{ flex: 1, justifyContent: 'center' }} onClick={() => setStep(1)}>Back</button>
                <button type="button" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }} onClick={() => setStep(3)}>Continue</button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div style={{ marginBottom: 16 }}>
                <label className="label">Password</label>
                <input className="input" type="password" value={form.password} onChange={update('password')} required minLength={8} placeholder="At least 8 characters" />
              </div>
              <div style={{ background: '#1a1a2e', borderRadius: 8, padding: 12, marginBottom: 20 }}>
                <p style={{ fontSize: 12, color: '#9ca3af', lineHeight: 1.5 }}>
                  By creating this account you agree to start a <strong style={{ color: '#e4e4e7' }}>14-day free trial</strong> of the Starter plan 
                  (50 simulations). No charge. Cancel anytime.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button type="button" className="btn btn-secondary" style={{ flex: 1, justifyContent: 'center' }} onClick={() => setStep(2)}>Back</button>
                <button type="submit" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }} disabled={loading}>
                  {loading ? 'Creating account...' : 'Start Trial'}
                </button>
              </div>
            </>
          )}
        </form>

        <p style={{ textAlign: 'center', marginTop: 16, fontSize: 12, color: '#6b7280' }}>
          Already have an account? <a href="/login" style={{ fontSize: 12 }}>Sign in</a>
        </p>
      </div>
    </div>
  )
}
