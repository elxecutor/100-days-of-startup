import { useState } from 'react'

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${API}/auth/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`, { method: 'POST' })
      if (!res.ok) throw new Error('Invalid email or password')
      const data = await res.json()
      localStorage.setItem('af_token', data.access_token)
      localStorage.setItem('af_user', JSON.stringify(data.user))
      window.location.href = '/dashboard'
    } catch (err) { setError(err.message) }
    finally { setLoading(false) }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div className="card" style={{ width: 400, maxWidth: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" style={{ marginBottom: 8 }}><circle cx="12" cy="12" r="7"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: '#f0f0f5' }}>Welcome back</h1>
          <p style={{ color: '#9ca3af', fontSize: 13, marginTop: 4 }}>Sign in to your AntennaForge account</p>
        </div>
        {error && <div style={{ background: '#7f1d1d', color: '#fca5a5', padding: '8px 12px', borderRadius: 8, marginBottom: 16, fontSize: 13 }}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <label className="label">Email</label>
            <input className="input" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div style={{ marginBottom: 24 }}>
            <label className="label">Password</label>
            <input className="input" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: 16, fontSize: 12, color: '#6b7280' }}>
          Don't have an account? <a href="/signup" style={{ fontSize: 12 }}>Start free trial</a>
        </p>
      </div>
    </div>
  )
}
