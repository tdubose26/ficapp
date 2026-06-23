import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('onboarding_complete')
    .eq('id', user.id)
    .single()

  if (!profile?.onboarding_complete) {
    redirect('/onboarding')
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000', color: '#fff', padding: '2rem' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#D0A334' }}>Welcome to The FLOW</h1>
        <p style={{ marginBottom: '1rem' }}>You are signed in as:</p>
        <p style={{ fontSize: '1.25rem', color: '#D0A334' }}>{user.email}</p>
        <p style={{ marginTop: '2rem', fontSize: '0.9rem', opacity: 0.7 }}>This is just a placeholder dashboard. We will build the real one soon.</p>
      </div>
    </div>
  )
}
