import Link from 'next/link'
import { BookOpen, PenSquare, Play, Calendar, ChevronRight } from 'lucide-react'
import BottomNav from '@/components/BottomNav'

const CARDS = [
  {
    href: '/bible-study',
    icon: BookOpen,
    title: 'Bible Study',
    subtitle: "Deepen your understanding of God's Word.",
    meta: 'New Study  •  May 25, 2025',
  },
  {
    href: '#',
    icon: PenSquare,
    title: 'The FLOW Journal',
    subtitle: 'Reflect, pray, and grow in your relationship with God.',
    meta: "Today's Entry",
  },
  {
    href: '/flow-tv',
    icon: Play,
    title: 'Past Lessons',
    subtitle: 'Watch or listen to previous sermons and teachings.',
    meta: 'Latest: Walking by Faith',
  },
]

export default function GrowPage() {
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
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        {/* Top: logo + wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0 1.5rem' }}>
          <div
            aria-hidden
            style={{
              width: 40,
              height: 40,
              borderRadius: '9999px',
              backgroundImage:
                'radial-gradient(circle at 30% 25%, var(--primary) 0%, var(--primary) 35%, var(--secondary) 100%)',
              boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
              flexShrink: 0,
            }}
          />
          <div>
            <p className="font-serif text-[#F7F4ED] tracking-widest" style={{ fontSize: '0.7rem', lineHeight: 1.1 }}>
              FLOWING IN CHRIST
            </p>
            <p className="font-serif text-[#F7F4ED] tracking-widest" style={{ fontSize: '0.55rem', marginTop: '0.1rem' }}>
              MINISTRIES
            </p>
          </div>
        </div>

        {/* Heading */}
        <div style={{ padding: '0 1.5rem', marginTop: '1.5rem' }}>
          <h1 className="font-serif text-[#F7F4ED] text-5xl">Grow</h1>
          <div className="bg-primary" style={{ width: 60, height: 2, marginTop: '0.5rem', borderRadius: '9999px' }} />
        </div>

        {/* Verse hero card */}
        <div
          className="bg-secondary border-2 border-primary"
          style={{
            position: 'relative',
            overflow: 'hidden',
            margin: '1.5rem 1.5rem 0',
            padding: '2rem',
            borderRadius: '1.5rem',
            boxShadow: '0 16px 36px rgba(0,0,0,0.28)',
          }}
        >
          {/* Decorative cross overlay */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}
          >
            <svg width="160" height="220" viewBox="0 0 160 220" style={{ opacity: 0.06 }}>
              <rect x="66" y="0" width="28" height="220" fill="#F7F4ED" />
              <rect x="0" y="60" width="160" height="28" fill="#F7F4ED" />
            </svg>
          </div>

          <div style={{ position: 'relative', textAlign: 'center' }}>
            <span className="font-serif text-primary" style={{ fontSize: '3rem', lineHeight: 1, display: 'block' }}>
              &ldquo;
            </span>
            <p className="font-serif text-3xl" style={{ color: '#F7F4ED', marginTop: '0.5rem' }}>
              I can do all things through Christ who strengthens me.
            </p>
            <p
              className="text-primary tracking-widest"
              style={{ marginTop: '1rem', fontSize: '0.75rem', textTransform: 'uppercase' }}
            >
              Philippians 4:13
            </p>
          </div>
        </div>

        {/* Quick-access cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
          {CARDS.map(({ href, icon: Icon, title, subtitle, meta }) => (
            <Link
              key={title}
              href={href}
              className="text-secondary"
              style={{
                margin: '0 1.5rem',
                padding: '1rem',
                borderRadius: '1rem',
                backgroundColor: 'rgba(247,244,237,0.95)',
                boxShadow: '0 10px 26px rgba(0,0,0,0.2)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <span
                className="bg-card text-secondary"
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
                <Icon className="h-5 w-5" />
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h2 className="font-serif text-secondary text-xl">{title}</h2>
                <p className="text-secondary" style={{ fontSize: '0.85rem', opacity: 0.7, marginTop: '0.15rem' }}>
                  {subtitle}
                </p>
                <div
                  className="text-secondary"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.5rem', fontSize: '0.75rem', opacity: 0.8 }}
                >
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{meta}</span>
                </div>
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
