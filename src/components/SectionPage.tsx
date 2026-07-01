import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import SignOutButton from '@/components/SignOutButton'

type Props = {
  emoji: string
  title: string
  description: string
  comingSoonMessage: string
}

export default async function SectionPage({ emoji, title, description, comingSoonMessage }: Props) {
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
    <div className="bg-background text-foreground min-h-screen" style={{ padding: '2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <Link href="/dashboard" style={{ color: '#D0A334', textDecoration: 'none', fontSize: '0.95rem' }}>← Back to Dashboard</Link>
          <SignOutButton />
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{emoji}</div>
          <h1 style={{ fontSize: '2.5rem', color: '#D0A334', marginBottom: '0.75rem' }}>{title}</h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: 1.5 }}>{description}</p>
        </div>

        <div className="bg-card text-card-foreground border border-border" style={{ padding: '3rem 2rem', borderRadius: '0.75rem', textAlign: 'center' }}>
          <p style={{ fontSize: '1.5rem', color: '#D0A334', marginBottom: '1rem' }}>Coming Soon</p>
          <p style={{ opacity: 0.7, lineHeight: 1.6 }}>{comingSoonMessage}</p>
        </div>
      </div>
    </div>
  )
}
