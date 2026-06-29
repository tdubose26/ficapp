'use client'

import { WizardData } from './OnboardingWizard'

const SERVE_TEAMS = [
  'Praise and Worship',
  'Minister',
  'Intercessor',
  'Ushers',
  'Greeters',
  'Altar Worker',
  "Men's Ministry",
  'Audio/Visual',
  'Media',
  "Children's Ministry",
  'Drama Team',
  'Choir',
  'Dance Ministry',
  'Mothers Board',
  'Security',
  'Outreach',
]

type Props = {
  data: WizardData
  updateData: (updates: Partial<WizardData>) => void
  next: () => void
  back: () => void
}

export default function Step4ServeTeams({ data, updateData, next, back }: Props) {
  const canProceed = !data.serves || (data.serves && data.preferred_serve_team.length > 0)

  return (
    <div>
      <h2 style={{ fontSize: '1.75rem', color: '#D0A334', marginBottom: '1.5rem' }}>Serve Teams</h2>
      <p style={{ marginBottom: '2rem', opacity: 0.8 }}>Are you currently serving on a team at FIC?</p>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        <button onClick={() => updateData({ serves: true })} className={data.serves ? 'border border-border' : 'bg-card text-card-foreground border border-border'} style={{ flex: 1, padding: '0.875rem', backgroundColor: data.serves ? '#7F1519' : undefined, color: data.serves ? '#fff' : undefined, borderRadius: '0.5rem', fontSize: '1rem', cursor: 'pointer' }}>Yes, I'm Serving</button>
        <button onClick={() => updateData({ serves: false, preferred_serve_team: '' })} className={!data.serves ? 'border border-border' : 'bg-card text-card-foreground border border-border'} style={{ flex: 1, padding: '0.875rem', backgroundColor: !data.serves ? '#7F1519' : undefined, color: !data.serves ? '#fff' : undefined, borderRadius: '0.5rem', fontSize: '1rem', cursor: 'pointer' }}>Not Right Now</button>
      </div>

      {data.serves && (
        <div style={{ marginBottom: '2rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Which team do you serve on? *</label>
          <select value={data.preferred_serve_team} onChange={(e) => updateData({ preferred_serve_team: e.target.value })} className="bg-card text-card-foreground border border-border" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', fontSize: '1rem' }}>
            <option value="">Select your team...</option>
            {SERVE_TEAMS.map((team) => <option key={team} value={team}>{team}</option>)}
          </select>
        </div>
      )}

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={back} className="bg-muted text-foreground" style={{ flex: 1, padding: '0.875rem', border: 'none', borderRadius: '0.5rem', fontSize: '1rem', cursor: 'pointer' }}>Back</button>
        <button onClick={next} disabled={!canProceed} className={canProceed ? '' : 'bg-muted text-muted-foreground'} style={{ flex: 1, padding: '0.875rem', backgroundColor: canProceed ? '#7F1519' : undefined, color: canProceed ? '#fff' : undefined, border: 'none', borderRadius: '0.5rem', fontSize: '1rem', cursor: canProceed ? 'pointer' : 'not-allowed' }}>Continue</button>
      </div>
    </div>
  )
}
