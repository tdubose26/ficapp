'use client'

import { WizardData } from './OnboardingWizard'

type Props = {
  data: WizardData
  updateData: (updates: Partial<WizardData>) => void
  next: () => void
  back: () => void
}

function YesNoToggle({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem' }}>{label}</label>
      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <button onClick={() => onChange(true)} style={{ flex: 1, padding: '0.625rem', backgroundColor: value ? '#7F1519' : '#1a1a1a', color: '#fff', border: '1px solid #333', borderRadius: '0.5rem', cursor: 'pointer' }}>Yes</button>
        <button onClick={() => onChange(false)} style={{ flex: 1, padding: '0.625rem', backgroundColor: !value ? '#7F1519' : '#1a1a1a', color: '#fff', border: '1px solid #333', borderRadius: '0.5rem', cursor: 'pointer' }}>No</button>
      </div>
    </div>
  )
}

export default function Step5Notifications({ data, updateData, next, back }: Props) {
  return (
    <div>
      <h2 style={{ fontSize: '1.75rem', color: '#D0A334', marginBottom: '1.5rem' }}>Notifications</h2>
      <p style={{ marginBottom: '2rem', opacity: 0.8 }}>How would you like to hear from us?</p>

      <YesNoToggle label="SMS / Text Messages" value={data.sms_permission} onChange={(v) => updateData({ sms_permission: v })} />
      <YesNoToggle label="Email" value={data.email_permission} onChange={(v) => updateData({ email_permission: v })} />
      <YesNoToggle label="Push Notifications (coming soon)" value={data.push_permission} onChange={(v) => updateData({ push_permission: v })} />

      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
        <button onClick={back} style={{ flex: 1, padding: '0.875rem', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '0.5rem', fontSize: '1rem', cursor: 'pointer' }}>Back</button>
        <button onClick={next} style={{ flex: 1, padding: '0.875rem', backgroundColor: '#7F1519', color: '#fff', border: 'none', borderRadius: '0.5rem', fontSize: '1rem', cursor: 'pointer' }}>Continue</button>
      </div>
    </div>
  )
}
