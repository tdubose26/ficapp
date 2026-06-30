import Link from 'next/link'
import Image from 'next/image'
import {
  Heart,
  Users,
  Calendar,
  Megaphone,
  User,
  CalendarPlus,
  Clipboard,
  ChevronRight,
  ArrowRight,
} from 'lucide-react'
import BottomNav from '@/components/BottomNav'

const STATS = [
  { icon: Heart, label: 'Prayer Requests', value: '143', subtitle: 'Awaiting prayer' },
  { icon: Users, label: 'Members', value: '39', subtitle: 'Total Members' },
  { icon: Calendar, label: 'Events', value: '12', subtitle: 'Upcoming Events' },
  { icon: Megaphone, label: 'Announcements', value: '8', subtitle: 'Active Posts' },
]

const PENDING = [
  { name: 'Sarah Jenkins', requested: '10/24/2025' },
  { name: 'Robert Chen', requested: '10/23/2025' },
  { name: 'Michael Adams', requested: '10/22/2025' },
]

const ACTIONS = [
  {
    href: '#',
    icon: CalendarPlus,
    title: 'Add Event',
    subtitle: 'Create and manage upcoming events.',
  },
  {
    href: '#',
    icon: Megaphone,
    title: 'Post Announcement',
    subtitle: 'Share updates with your church.',
  },
  {
    href: '/admin/approvals',
    icon: Clipboard,
    title: 'Review Requests',
    subtitle: 'Manage pending prayer and content requests.',
  },
]

export default function AdminDashboardPage() {
  return (
    <div
      className="text-foreground"
      style={{
        minHeight: '100vh',
        backgroundImage:
          'radial-gradient(ellipse at top, var(--secondary) 0%, var(--primary) 55%, var(--secondary) 100%)',
        backgroundColor: 'var(--secondary)',
        padding: '2rem 0 100px',
      }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', padding: '0 1.5rem' }}>
          <Image src="/Flowlogoofficial.svg" alt="Flowing In Christ Ministries" width={50} height={50} priority style={{ flexShrink: 0 }} />
          <div>
            <h1 className="font-serif text-[#F7F4ED] text-4xl" style={{ lineHeight: 1 }}>Admin</h1>
            <p className="text-[#F7F4ED]" style={{ fontSize: '0.85rem', opacity: 0.85, marginTop: '0.3rem' }}>
              Manage members, content, and ministry activity.
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div
          style={{
            marginTop: '1.5rem',
            padding: '0 1.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0.875rem',
          }}
        >
          {STATS.map(({ icon: Icon, label, value, subtitle }) => (
            <div
              key={label}
              className="bg-secondary border-2 border-primary"
              style={{
                padding: '1.25rem',
                borderRadius: '1rem',
                boxShadow: '0 8px 24px rgba(0,0,0,0.22)',
              }}
            >
              <span
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(208,163,52,0.25)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#F7F4ED',
                }}
              >
                <Icon className="h-5 w-5" />
              </span>
              <p
                className="text-primary tracking-widest"
                style={{ marginTop: '0.875rem', fontSize: '0.65rem', textTransform: 'uppercase', fontWeight: 600 }}
              >
                {label}
              </p>
              <p className="font-serif text-5xl" style={{ color: '#F7F4ED', marginTop: '0.25rem', lineHeight: 1 }}>
                {value}
              </p>
              <p style={{ color: '#F7F4ED', opacity: 0.8, fontSize: '0.8rem', marginTop: '0.4rem' }}>
                {subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Pending Members */}
        <div
          style={{
            marginTop: '2rem',
            padding: '0 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <h2 className="font-serif text-[#F7F4ED] text-2xl">Pending Members</h2>
          <Link
            href="/admin/approvals"
            className="text-primary"
            style={{ fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
          >
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div
          style={{
            margin: '1rem 1.5rem 0',
            padding: '0.5rem 1rem',
            borderRadius: '1rem',
            backgroundColor: 'rgba(247,244,237,0.95)',
            boxShadow: '0 10px 26px rgba(0,0,0,0.2)',
          }}
        >
          {PENDING.map((m, i) => (
            <div
              key={m.name}
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
                className="bg-muted text-muted-foreground"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '9999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <User className="h-5 w-5" />
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p className="font-serif text-secondary" style={{ fontSize: '1.05rem' }}>{m.name}</p>
                <p className="text-secondary" style={{ fontSize: '0.78rem', opacity: 0.65, marginTop: '0.1rem' }}>
                  Requested {m.requested}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                <button
                  type="button"
                  className="bg-primary"
                  style={{
                    color: '#fff',
                    padding: '0.4rem 0.9rem',
                    borderRadius: '9999px',
                    border: 'none',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Approve
                </button>
                <button
                  type="button"
                  className="bg-white text-secondary border border-secondary"
                  style={{
                    padding: '0.4rem 0.9rem',
                    borderRadius: '9999px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Review
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div
          style={{
            margin: '2rem 1.5rem 0',
            padding: '0.5rem 1rem',
            borderRadius: '1rem',
            backgroundColor: 'rgba(247,244,237,0.95)',
            boxShadow: '0 10px 26px rgba(0,0,0,0.2)',
          }}
        >
          {ACTIONS.map(({ href, icon: Icon, title, subtitle }, i) => (
            <Link
              key={title}
              href={href}
              className="text-secondary"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem 0',
                textDecoration: 'none',
                borderTopWidth: i === 0 ? 0 : 1,
                borderTopStyle: 'solid',
                borderTopColor: 'rgba(127,21,25,0.15)',
              }}
            >
              <span
                style={{
                  width: 48,
                  height: 48,
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
                <p className="font-serif text-secondary text-xl">{title}</p>
                <p className="text-secondary" style={{ fontSize: '0.82rem', opacity: 0.65, marginTop: '0.15rem' }}>
                  {subtitle}
                </p>
              </div>
              <ChevronRight className="text-secondary h-5 w-5" style={{ flexShrink: 0 }} />
            </Link>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
