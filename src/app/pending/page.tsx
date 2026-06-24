import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import SignOutButton from '@/components/SignOutButton'

export default async function PendingPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('approval_status, onboarding_complete')
    .eq('id', user.id)
    .single()

  if (!profile?.onboarding_complete) {
    redirect('/onboarding')
  }

  if (profile?.approval_status === 'approved') {
    redirect('/dashboard')
  }

  if (profile?.approval_status === 'rejected') {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000', color: '#fff', padding: '2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '500px' }}>
          <h1 style={{ fontSize: '2rem', color: '#D0A334', marginBottom: '1.5rem' }}>Account Not Approved</h1>
          <p style={{ marginBottom: '2rem', opacity: 0.8 }}>Your request to join The FLOW was not approved at this time. Please reach out to a ministry leader if you have questions.</p>
          <SignOutButton />
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000', color: '#fff', padding: '2rem' }}>
      <div style={{ textAlign: 'center', maxWidth: '500px' }}>
        <h1 style={{ fontSize: '2rem', color: '#D0A334', marginBottom: '1.5rem' }}>You're Almost In!</h1>
        <p style={{ marginBottom: '1rem', opacity: 0.8 }}>Thanks for completing your profile, {user.email}.</p>
        <p style={{ marginBottom: '2rem', opacity: 0.8 }}>An admin will review your account shortly. We'll let you know when you're approved.</p>
        <SignOutButton />
      </div>
    </div>
  )
}
