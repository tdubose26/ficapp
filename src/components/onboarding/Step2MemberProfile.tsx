'use client'

import { WizardData } from './OnboardingWizard'

type Props = {
  data: WizardData
  updateData: (updates: Partial<WizardData>) => void
  next: () => void
  back: () => void
}

export default function Step2MemberProfile({ data, updateData, next, back }: Props) {
  const canProceed = data.ministry_status.trim().length > 0

  return (
    <div>
      <h2 style={{ fontSize: '1.75rem', color: '#D0A334', marginBottom: '1.5rem' }}>Member Profile</h2>
      <p style={{ marginBottom: '2rem', opacity: 0.8 }}>Tell us a bit about your connection to FIC.</p>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Ministry Status *</label>
        <select
          value={data.ministry_status}
          onChange={(e) => updateData({ ministry_status: e.target.value })}
          style={{ width: '100%', padding: '0.75rem', backgroundColor: '#1a1a1a', color: '#fff', border: '1px solid #333', borderRadius: '0.5rem', fontSize: '1rem' }}
        >
          <option value="">Select one...</option>
          <option value="visitor">First-Time Visitor</option>
          <option value="regular_attender">Regular Attender</option>
          <option value="member">Member</option>
          <option value="leader">Ministry Leader</option>
        </select>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Household Type (optional)</label>
        <select
          value={data.household_type}
          onChange={(e) => updateData({ household_type: e.target.value })}
          style={{ width: '100%', padding: '0.75rem', backgroundColor: '#1a1a1a', color: '#fff', border: '1px solid #333', borderRadius: '0.5rem', fontSize: '1rem' }}
        >
          <option value="">Prefer not to say</option>
          <option value="single_adult">Single Adult</option>
          <option value="married_no_kids">Married, no kids</option>
          <option value="married_with_kids">Married, with kids</option>
          <option value="single_parent">Single Parent</option>
          <option value="empty_nesters">Empty Nesters</option>
          <option value="multi_generational">Multi-generational</option>
        </select>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Children/Youth Connected to FIC (optional)</label>
        <input
          type="text"
          value={data.children_youth}
          onChange={(e) => updateData({ children_youth: e.target.value })}
          placeholder="e.g., 2 kids in FLOW Kids"
          style={{ width: '100%', padding: '0.75rem', backgroundColor: '#1a1a1a', color: '#fff', border: '1px solid #333', borderRadius: '0.5rem', fontSize: '1rem' }}
        />
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={back} style={{ flex: 1, padding: '0.875rem', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '0.5rem', fontSize: '1rem', cursor: 'pointer' }}>Back</button>
        <button onClick={next} disabled={!canProceed} style={{ flex: 1, padding: '0.875rem', backgroundColor: canProceed ? '#7F1519' : '#333', color: '#fff', border: 'none', borderRadius: '0.5rem', fontSize: '1rem', cursor: canProceed ? 'pointer' : 'not-allowed' }}>Continue</button>
      </div>
    </div>
  )
}
