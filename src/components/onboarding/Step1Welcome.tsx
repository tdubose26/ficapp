'use client'

import { WizardData } from './OnboardingWizard'

type Props = {
  data: WizardData
  updateData: (updates: Partial<WizardData>) => void
  next: () => void
}

export default function Step1Welcome({ data, updateData, next }: Props) {
  const canProceed = data.full_name.trim().length > 0 && data.phone.trim().length >= 10

  return (
    <div>
      <h2 style={{ fontSize: '1.75rem', color: '#D0A334', marginBottom: '1.5rem' }}>Welcome to The FLOW</h2>
      <p style={{ marginBottom: '2rem', opacity: 0.8 }}>Let's start by getting to know you.</p>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Full Name *</label>
        <input
          type="text"
          value={data.full_name}
          onChange={(e) => updateData({ full_name: e.target.value })}
          style={{ width: '100%', padding: '0.75rem', backgroundColor: '#1a1a1a', color: '#fff', border: '1px solid #333', borderRadius: '0.5rem', fontSize: '1rem' }}
        />
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Preferred Name</label>
        <input
          type="text"
          value={data.preferred_name}
          onChange={(e) => updateData({ preferred_name: e.target.value })}
          placeholder="What should we call you?"
          style={{ width: '100%', padding: '0.75rem', backgroundColor: '#1a1a1a', color: '#fff', border: '1px solid #333', borderRadius: '0.5rem', fontSize: '1rem' }}
        />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Phone Number *</label>
        <input
          type="tel"
          value={data.phone}
          onChange={(e) => updateData({ phone: e.target.value })}
          placeholder="555-555-5555"
          style={{ width: '100%', padding: '0.75rem', backgroundColor: '#1a1a1a', color: '#fff', border: '1px solid #333', borderRadius: '0.5rem', fontSize: '1rem' }}
        />
      </div>

      <button
        onClick={next}
        disabled={!canProceed}
        style={{ width: '100%', padding: '0.875rem', backgroundColor: canProceed ? '#7F1519' : '#333', color: '#fff', border: 'none', borderRadius: '0.5rem', fontSize: '1rem', cursor: canProceed ? 'pointer' : 'not-allowed' }}
      >
        Continue
      </button>
    </div>
  )
}
