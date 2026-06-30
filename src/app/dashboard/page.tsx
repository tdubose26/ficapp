import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import {
  Bell,
  Calendar,
  Church,
  BookOpen,
  Star,
  ChevronRight,
  Play,
  HeartHandshake,
  Users,
  Shield,
} from 'lucide-react'
import BottomNav from '@/components/BottomNav'

const FILTERS = [
  { label: 'This Week', active: true },
  { label: 'Announcements', active: false },
  { label: 'Prayer', active: false },
  { label: 'Events', active: false },
  { label: 'Serve', active: false },
]

const WEEK_ITEMS = [
  {
    icon: Church,
    title: 'Sunday Service',
    subtitle: 'Worship together as one family.',
    when: 'Sun 10:00 AM',
  },
  {
    icon: BookOpen,
    title: 'Bible Study',
    subtitle: "Deep dive into God's Word.",
    when: 'Wed 7:00 PM',
  },
  {
    icon: Star,
    title: 'Anniversary Weekend',
    subtitle: "Celebrating God's faithfulness.",
    when: 'May 17 - 18',
  },
]

const QUICK_ACCESS = [
  {
    href: '/flow-tv',
    icon: Play,
    title: 'FLOW TV',
    subtitle: 'Watch sermons and live services.',
  },
  {
    href: '/wellspring',
    icon: HeartHandshake,
    title: 'Prayer',
    subtitle: 'Submit a request and pray with us.',
  },
  {
    href: '/bible-study',
    icon: BookOpen,
    title: 'Bible Study',
    subtitle: 'Explore resources and studies.',
  },
  {
    href: '/serve-teams',
    icon: Users,
    title: 'Serve Teams',
    subtitle: 'Use your gifts to build the Kingdom.',
  },
]

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

  const greetingName = profile?.preferred_name || profile?.full_name || user.email

  return (
    <div
      className="text-foreground"
      style={{
        minHeight: '100vh',
        backgroundImage:
          'radial-gradient(ellipse at top, var(--secondary) 0%, var(--primary) 55%, var(--secondary) 100%)',
        backgroundColor: 'var(--secondary)',
        padding: '1.75rem 1.25rem 100px',
      }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        {/* Top row: logo + bell */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div
            aria-hidden
            style={{
              width: 50,
              height: 50,
              borderRadius: '9999px',
              backgroundImage:
                'radial-gradient(circle at 30% 25%, var(--primary) 0%, var(--primary) 35%, var(--secondary) 100%)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
            }}
          />
          <button
            type="button"
            aria-label="Notifications"
            className="text-[#F7F4ED]"
            style={{
              width: 42,
              height: 42,
              borderRadius: '9999px',
              backgroundColor: 'rgba(247,244,237,0.2)',
              border: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <Bell className="h-5 w-5" />
          </button>
        </div>

        {/* Greeting */}
        <div style={{ marginTop: '1.5rem' }}>
          <p className="text-[#F7F4ED]" style={{ fontSize: '0.95rem', opacity: 0.95 }}>
            Good Morning,
          </p>
          <h1
            className="font-serif text-[#F7F4ED] text-5xl"
            style={{ marginTop: '0.25rem', lineHeight: 1.05 }}
          >
            {greetingName}
          </h1>
          <p className="text-[#F7F4ED]" style={{ marginTop: '0.75rem', fontSize: '0.95rem' }}>
            You&apos;re a valued member of The FLOW family.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            marginTop: '1.5rem',
            overflowX: 'auto',
            paddingBottom: '0.25rem',
          }}
        >
          {FILTERS.map((f) => (
            <span
              key={f.label}
              className={
                f.active
                  ? 'bg-secondary text-white border-2 border-primary'
                  : 'bg-white/90 text-secondary border-2 border-secondary'
              }
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              {f.label}
            </span>
          ))}
        </div>

        {/* This Week card */}
        <div
          className="text-secondary"
          style={{
            marginTop: '1.5rem',
            padding: '1.5rem',
            borderRadius: '1.5rem',
            backgroundColor: 'rgba(247,244,237,0.96)',
            boxShadow: '0 16px 36px rgba(0,0,0,0.25)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span
              className="bg-primary text-secondary"
              style={{
                width: 36,
                height: 36,
                borderRadius: '9999px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Calendar className="h-4 w-4" />
            </span>
            <h2 className="font-serif text-secondary" style={{ fontSize: '1.5rem' }}>
              This Week at The FLOW
            </h2>
          </div>

          {/* Decorative shield divider */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginTop: '0.75rem',
              marginBottom: '0.25rem',
            }}
          >
            <div
              style={{
                flex: 1,
                borderTopWidth: 1,
                borderTopStyle: 'solid',
                borderTopColor: 'var(--primary)',
                opacity: 0.6,
              }}
            />
            <Shield className="text-primary h-4 w-4" />
            <div
              style={{
                flex: 1,
                borderTopWidth: 1,
                borderTopStyle: 'solid',
                borderTopColor: 'var(--primary)',
                opacity: 0.6,
              }}
            />
          </div>

          {/* Items */}
          <div>
            {WEEK_ITEMS.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.875rem',
                    padding: '0.875rem 0',
                    borderTopWidth: i === 0 ? 0 : 1,
                    borderTopStyle: 'solid',
                    borderTopColor: 'rgba(127,21,25,0.15)',
                  }}
                >
                  <span
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(208,163,52,0.2)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                    className="text-secondary"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p className="text-secondary" style={{ fontWeight: 700, fontSize: '0.95rem' }}>
                      {item.title}
                    </p>
                    <p
                      className="text-secondary"
                      style={{ fontSize: '0.8rem', opacity: 0.65, marginTop: '0.15rem' }}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                  <div
                    className="text-secondary"
                    style={{ fontSize: '0.8rem', fontWeight: 600, whiteSpace: 'nowrap', textAlign: 'right' }}
                  >
                    {item.when}
                  </div>
                  <ChevronRight className="text-secondary h-4 w-4" />
                </div>
              )
            })}
          </div>
        </div>

        {/* Quick access grid */}
        <div
          style={{
            marginTop: '1.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0.875rem',
          }}
        >
          {QUICK_ACCESS.map(({ href, icon: Icon, title, subtitle }) => (
            <Link
              key={href}
              href={href}
              className="bg-secondary border-2 border-primary"
              style={{
                padding: '1.125rem',
                borderRadius: '1rem',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                position: 'relative',
                boxShadow: '0 8px 24px rgba(0,0,0,0.22)',
                minHeight: 150,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  className="bg-primary text-secondary"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '9999px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <ChevronRight style={{ color: '#F7F4ED', opacity: 0.85 }} className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-serif" style={{ color: '#fff', fontSize: '1.25rem' }}>
                  {title}
                </h3>
                <p style={{ color: '#F7F4ED', opacity: 0.85, fontSize: '0.8rem', marginTop: '0.25rem' }}>
                  {subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
