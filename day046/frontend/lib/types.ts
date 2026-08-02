export interface User {
  id: string
  email: string
  full_name: string
  company: string | null
  plan: string
  simulations_remaining: number
  is_active: boolean
  created_at: string
}

export interface TokenResponse {
  access_token: string
  token_type: string
  user: User
}

export interface SimulationResult {
  antenna_type: string
  frequency_hz: number
  vswr: number
  return_loss_db: number
  input_impedance_real: number
  input_impedance_imag: number
  gain_dbi: number
  bandwidth_hz: number
  efficiency: number
  radiation_pattern?: Record<string, unknown> | null
  s11_db?: number[] | null
  frequencies_hz?: number[] | null
}

export interface Simulation {
  id: string
  name: string | null
  antenna_type: string
  frequency_hz: number
  parameters: Record<string, unknown>
  status: string
  result: SimulationResult | null
  error_message: string | null
  created_at: string
  completed_at: string | null
}

export interface SimulationListResponse {
  items: Simulation[]
  total: number
  page: number
  size: number
}

export interface SweepResponse {
  frequencies_hz: number[]
  s11_db: number[]
}

export type AntennaType = 'dipole' | 'patch' | 'helical' | 'monopole' | 'yagi' | 'loop'
