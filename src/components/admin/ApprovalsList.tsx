'use client'

import { useState } from 'react'
import { approveMember, rejectMember } from '@/app/admin/approvals/actions'

type Member = {
  id: string
  full_name: string
  preferred_name: string | null
  phone: string | null
  ministry_status: string
  household_type: string | null
  serves: boolean
  preferred_serve_team: string | null
  sms_permission: boolean
  email_permission: boolean
  created_at: string
}

export default function ApprovalsList({ members }: { members: Member[] }) {
  const [processing, setProcessing] = useState<string | null>(null)

  const handleApprove = async (id: string) => {
    setProcessing(id)
    await approveMember(id)
    setProcessing(null)
  }

  const handleReject = async (id: string) => {
    setProcessing(id)
    await rejectMember(id)
    setProcessing(null)
  }

  if (members.length === 0) {
    return (
      <div style={{ padding: '3rem', textAlign: 'center', backgroundColor: '#1a1a1a', borderRadius: '0.5rem', border: '1px solid #333' }}>
        <p style={{ opacity: 0.7, fontSize: '1.1rem' }}>No members pending approval right now. 🎉</p>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {members.map((m) => (
        <div key={m.id} style={{ padding: '1.5rem', backgroundColor: '#1a1a1a', borderRadius: '0.5rem', border: '1px solid #333' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', color: '#D0A334', marginBottom: '0.25rem' }}>{m.full_name}</h3>
              {m.preferred_name && <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>Prefers: {m.preferred_name}</p>}
            </div>
            <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>Submitted {new Date(m.created_at).toLocaleDateString()}</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            <div><strong style={{ color: '#D0A334' }}>Phone:</strong> {m.phone || '—'}</div>
            <div><strong style={{ color: '#D0A334' }}>Ministry Status:</strong> {m.ministry_status}</div>
            {m.household_type && <div><strong style={{ color: '#D0A334' }}>Household:</strong> {m.household_type}</div>}
            <div><strong style={{ color: '#D0A334' }}>Serving:</strong> {m.serves ? (m.preferred_serve_team || 'Yes') : 'Not yet'}</div>
            <div><strong style={{ color: '#D0A334' }}>SMS:</strong> {m.sms_permission ? 'Yes' : 'No'}</div>
            <div><strong style={{ color: '#D0A334' }}>Email:</strong> {m.email_permission ? 'Yes' : 'No'}</div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button onClick={() => handleApprove(m.id)} disabled={processing === m.id} style={{ flex: 1, padding: '0.75rem', backgroundColor: '#7F1519', color: '#fff', border: 'none', borderRadius: '0.5rem', cursor: processing === m.id ? 'wait' : 'pointer', fontSize: '0.95rem' }}>
              {processing === m.id ? 'Working...' : '✓ Approve'}
            </button>
            <button onClick={() => handleReject(m.id)} disabled={processing === m.id} style={{ flex: 1, padding: '0.75rem', backgroundColor: '#333', color: '#fff', border: '1px solid #555', borderRadius: '0.5rem', cursor: processing === m.id ? 'wait' : 'pointer', fontSize: '0.95rem' }}>
              {processing === m.id ? 'Working...' : '✕ Reject'}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
