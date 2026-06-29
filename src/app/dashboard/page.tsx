import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import SignOutButton from '@/components/SignOutButton'
import SectionCard from '@/components/SectionCard'
import { ThemeToggle } from '@/components/theme-toggle'
import BottomNav from '@/components/BottomNav'

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

  const sections = [
    { href: '/bible-study', emoji: '📖', title: 'Bible Study', description: 'Grow deeper in the Word.' },
    { href: '/flow-kids', emoji: '👶', title: 'FLOW Kids', description: 'Helping kids grow in faith.' },
    { href: '/flow-tv', emoji: '📺', title: 'FLOW TV', description: 'Sermons and teachings.' },
    { href: '/events', emoji: '📅', title: 'Events', description: "What's happening at FIC." },
    { href: '/serve-teams', emoji: '🙌', title: 'Serve Teams', description: 'Find your place to serve.' },
    { href: '/wellspring', emoji: '💧', title: 'Wellspring', description: 'Prayer and spiritual care.' },
  ]

  return (
    <div className="bg-background text-foreground min-h-screen" style={{ padding: '2rem', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h1 className="font-serif" style={{ fontSize: '2rem', color: '#D0A334' }}>The FLOW</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ThemeToggle />
            <SignOutButton />
          </div>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <h2 className="font-serif" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Welcome, {greetingName}</h2>
          <p style={{ opacity: 0.7 }}>Your home for everything at Flowing In Christ Ministries.</p>
        </div>

        {isAdmin && (
          <div style={{ marginBottom: '2rem', padding: '1.25rem', backgroundColor: '#1a1a1a', border: '1px solid #D0A334', borderRadius: '0.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#D0A334', marginBottom: '0.75rem' }}>Admin Tools</h3>
            <a href="/admin/approvals" style={{ color: '#fff', textDecoration: 'none', display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: '#7F1519', borderRadius: '0.5rem', fontSize: '0.9rem' }}>Review Pending Members</a>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {sections.map((s) => (
            <SectionCard key={s.href} href={s.href} emoji={s.emoji} title={s.title} description={s.description} />
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  )
}
