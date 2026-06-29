import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import ApprovalsList from '@/components/admin/ApprovalsList'

export default async function ApprovalsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: myProfile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()

  if (myProfile?.role !== 'admin' && myProfile?.role !== 'pastor') {
    redirect('/dashboard')
  }

  const { data: pendingMembers } = await supabase
    .from('profiles')
    .select('id, full_name, preferred_name, phone, ministry_status, household_type, serves, preferred_serve_team, sms_permission, email_permission, created_at')
    .eq('approval_status', 'pending')
    .eq('onboarding_complete', true)
    .order('created_at', { ascending: false })

  return (
    <div className="bg-background text-foreground min-h-screen" style={{ padding: '2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 style={{ fontSize: '2rem', color: '#D0A334', marginBottom: '0.5rem' }}>Pending Approvals</h1>
            <p style={{ opacity: 0.7 }}>Review and approve new member requests</p>
          </div>
          <a href="/dashboard" style={{ color: '#D0A334', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to Dashboard</a>
        </div>
        <ApprovalsList members={pendingMembers || []} />
      </div>
    </div>
  )
}
