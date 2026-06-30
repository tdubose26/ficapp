import Link from 'next/link'
import { Heart, Star, Calendar, BookOpen, ChevronRight, ArrowRight } from 'lucide-react'
import BottomNav from '@/components/BottomNav'

const AGE_GROUPS = [
  { label: 'Nursery', age: '0-4 yrs', active: false },
  { label: 'Elementary', age: '5-9 yrs', active: true },
  { label: 'Pre-Teen', age: '10-12 yrs', active: false },
]

const TWO_CARDS = [
  {
    icon: Calendar,
    title: 'Upcoming Kids Events',
    subtitle: "See what's happening and save the dates!",
  },
  {
    icon: BookOpen,
    title: 'Family Resources',
    subtitle: 'Helpful tools and devotions for the whole family.',
  },
]

export default function FlowKidsPage() {
  return (
    <div
      className="text-foreground"
      style={{
        minHeight: '100vh',
        backgroundImage:
          'radial-gradient(ellipse at top, var(--secondary) 0%, var(--primary) 55%, var(--secondary) 100%)',
        backgroundColor: 'var(--secondary)',
        padding: '2.5rem 0 100px',
      }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        {/* Logo */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
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
        </div>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginTop: '1.25rem', padding: '0 1.5rem' }}>
          <h1 className="font-serif text-[#F7F4ED] text-5xl">FLOW Kids</h1>
          <p className="text-[#F7F4ED]" style={{ marginTop: '0.5rem', fontSize: '0.95rem', opacity: 0.85 }}>
            Fun, faith-filled growth for every age.
          </p>
        </div>

        {/* Heart divider */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            margin: '1rem auto 0',
            maxWidth: 280,
            padding: '0 1.5rem',
          }}
        >
          <div style={{ flex: 1, borderTopWidth: 1, borderTopStyle: 'solid', borderTopColor: 'var(--primary)', opacity: 0.7 }} />
          <Heart className="text-primary h-4 w-4" fill="currentColor" />
          <div style={{ flex: 1, borderTopWidth: 1, borderTopStyle: 'solid', borderTopColor: 'var(--primary)', opacity: 0.7 }} />
        </div>

        {/* Age group toggle */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            margin: '1.5rem 1.5rem 0',
            padding: '0.5rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(247,244,237,0.95)',
            boxShadow: '0 8px 22px rgba(0,0,0,0.18)',
          }}
        >
          {AGE_GROUPS.map((g) => (
            <button
              key={g.label}
              type="button"
              className={g.active ? 'bg-primary text-secondary' : 'bg-card text-secondary'}
              style={{
                flex: 1,
                padding: '0.6rem 0.5rem',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.1rem',
              }}
            >
              <span style={{ fontSize: '0.9rem', fontWeight: g.active ? 700 : 500 }}>{g.label}</span>
              <span style={{ fontSize: '0.7rem', opacity: 0.7 }}>{g.age}</span>
            </button>
          ))}
        </div>

        {/* Featured Bible Explorer */}
        <div
          className="text-secondary"
          style={{
            margin: '1.5rem 1.5rem 0',
            padding: '1.25rem',
            borderRadius: '1.5rem',
            backgroundColor: 'rgba(247,244,237,0.96)',
            boxShadow: '0 14px 32px rgba(0,0,0,0.22)',
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap',
          }}
        >
          <div
            aria-hidden
            style={{
              width: 200,
              height: 200,
              borderRadius: '9999px',
              backgroundImage:
                'radial-gradient(circle at 35% 30%, var(--primary) 0%, #b8862a 70%, var(--secondary) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '5rem',
              flexShrink: 0,
              margin: '0 auto',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            }}
          >
            🎁
          </div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <p
              className="text-primary tracking-widest"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.65rem', textTransform: 'uppercase', fontWeight: 600 }}
            >
              <Star className="h-3.5 w-3.5" fill="currentColor" /> Featured
            </p>
            <h2 className="font-serif text-secondary text-2xl" style={{ marginTop: '0.35rem' }}>
              Bible Explorer
            </h2>
            <p className="text-secondary" style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '0.4rem' }}>
              Discover God&apos;s Word through fun stories, games, and activities made just for you!
            </p>
            <Link
              href="#"
              className="bg-secondary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                marginTop: '0.875rem',
                padding: '0.5rem 1.1rem',
                borderRadius: '9999px',
                color: '#fff',
                fontSize: '0.85rem',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Explore Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Two cards row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0.75rem',
            margin: '1.5rem 1.5rem 0',
          }}
        >
          {TWO_CARDS.map(({ icon: Icon, title, subtitle }) => (
            <Link
              key={title}
              href="#"
              className="text-secondary"
              style={{
                padding: '1rem',
                borderRadius: '1rem',
                backgroundColor: 'rgba(247,244,237,0.95)',
                boxShadow: '0 8px 22px rgba(0,0,0,0.18)',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <span
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(208,163,52,0.2)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  className="text-secondary"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <ChevronRight className="text-secondary h-4 w-4" />
              </div>
              <div>
                <h3 className="font-serif text-secondary" style={{ fontSize: '1rem' }}>{title}</h3>
                <p className="text-secondary" style={{ fontSize: '0.8rem', opacity: 0.65, marginTop: '0.2rem' }}>
                  {subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Verse footer */}
        <div
          className="text-secondary"
          style={{
            margin: '1.5rem 1.5rem 0',
            padding: '1rem',
            borderRadius: '1rem',
            backgroundColor: 'rgba(247,244,237,0.95)',
            boxShadow: '0 8px 22px rgba(0,0,0,0.18)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem',
          }}
        >
          <Heart className="text-primary h-5 w-5" fill="currentColor" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
          <div style={{ flex: 1 }}>
            <p className="text-secondary" style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>
              Train up a child in the way he should go; even when he is old he will not depart from it.
            </p>
            <p
              className="text-primary tracking-widest"
              style={{ fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: 600, marginTop: '0.5rem', textAlign: 'right' }}
            >
              Proverbs 22:6
            </p>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
