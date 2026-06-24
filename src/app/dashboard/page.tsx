import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import SignOutButton from '@/components/SignOutButton'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('onboarding_complete, approval_status, role, full_name, preferred_name')
    .eq('id', user.id)
    .single()

  if (!profile?.onboarding_complete) {
    redirect('/onboarding')
  }

  if (profile?.approval_status !== 'approved') {
    redirect('/pending')
  }

  const isAdmin = profile?.role === 'admin' || profile?.role === 'pastor'
  const greetingName = profile?.preferred_name || profile?.full_name || user.email

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000', color: '#fff', padding: '2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h1 style={{ fontSize: '2rem', color: '#D0A334' }}>The FLOW</h1>
          <SignOutButton />
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Welcome, {greetingName}</h2>
          <p style={{ opacity: 0.7 }}>Your home for everything at Flowing In Christ Ministries.</p>
        </div>

        {isAdmin && (
          <div style={{ marginBottom: '2rem', padding: '1.25rem', backgroundColor: '#1a1a1a', border: '1px solid #D0A334', borderRadius: '0.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#D0A334', marginBottom: '0.75rem' }}>Admin Tools</h3>
            <a href="/admin/approvals" style={{ color: '#fff', textDecoration: 'none', display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: '#7F1519', borderRadius: '0.5rem', fontSize: '0.9rem' }}>Review Pending Members</a>
          </div>
        )}

        <div style={{ padding: '2rem', backgroundColor: '#1a1a1a', borderRadius: '0.5rem', border: '1px solid #333', textAlign: 'center' }}>
          <p style={{ opacity: 0.7 }}>The main dashboard sections (Bible Study, FLOW Kids, FLOW TV, Events, Serve Teams, Wellspring) are coming next.</p>
        </div>
      </div>
    </div>
  )
}
