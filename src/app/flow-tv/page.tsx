import Link from 'next/link'
import { Play, ChevronRight, ArrowRight } from 'lucide-react'
import BottomNav from '@/components/BottomNav'

const FILTERS = [
  { label: 'Sermons', active: true },
  { label: 'Bible Study', active: false },
  { label: 'Worship', active: false },
  { label: 'Highlights', active: false },
]

const MESSAGES = [
  {
    title: 'The Power of Prayer',
    meta: 'Pastor Marcus • May 12, 2024',
    description: 'Discover how prayer changes everything.',
    duration: '38:45',
  },
  {
    title: 'Living in His Presence',
    meta: 'Bible Study • May 5, 2024',
    description: 'Abide in His presence and walk in peace.',
    duration: '29:14',
  },
  {
    title: 'Renewing Your Mind',
    meta: 'Pastor Marcus • Apr 28, 2024',
    description: 'Transform your thoughts, transform your life.',
    duration: '34:27',
  },
]

const THUMB_GRADIENT =
  'radial-gradient(circle at 60% 30%, rgba(127,21,25,0.7) 0%, #121212 75%)'

export default function FlowTvPage() {
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
          <h1 className="font-serif text-[#F7F4ED] text-5xl">FLOW TV</h1>
          <p className="text-[#F7F4ED]" style={{ marginTop: '0.5rem', fontSize: '0.95rem', opacity: 0.85 }}>
            Messages, worship, and ministry highlights.
          </p>
        </div>

        {/* Featured hero */}
        <Link
          href="#"
          className="border-2 border-primary"
          style={{
            display: 'block',
            position: 'relative',
            margin: '1.5rem 1.5rem 0',
            borderRadius: '1.5rem',
            overflow: 'hidden',
            aspectRatio: '16 / 10',
            backgroundImage:
              'radial-gradient(circle at 50% 35%, rgba(127,21,25,0.85) 0%, #121212 80%)',
            boxShadow: '0 16px 36px rgba(0,0,0,0.3)',
            textDecoration: 'none',
          }}
        >
          {/* Play button */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 64,
              height: 64,
              borderRadius: '9999px',
              backgroundColor: '#F7F4ED',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Play className="text-secondary h-7 w-7" style={{ marginLeft: 3 }} fill="currentColor" />
          </div>

          {/* Bottom-left overlay */}
          <div style={{ position: 'absolute', left: '1.25rem', bottom: '1.25rem', right: '1.25rem' }}>
            <p className="text-primary tracking-widest" style={{ fontSize: '0.65rem', textTransform: 'uppercase', fontWeight: 600 }}>
              Featured Message
            </p>
            <h2 className="font-serif text-3xl" style={{ color: '#F7F4ED', marginTop: '0.25rem' }}>
              Walking By Faith
            </h2>
            <p style={{ color: '#F7F4ED', opacity: 0.8, fontSize: '0.85rem', marginTop: '0.15rem' }}>
              Trusting God in every step.
            </p>
          </div>

          {/* Bottom-right duration */}
          <span
            style={{
              position: 'absolute',
              right: '1.25rem',
              bottom: '1.25rem',
              color: '#F7F4ED',
              fontSize: '0.8rem',
              fontWeight: 600,
            }}
          >
            42:18
          </span>
        </Link>

        {/* Filter tabs */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            margin: '1.5rem 0 0',
            padding: '0 1.5rem',
            overflowX: 'auto',
          }}
        >
          {FILTERS.map((f) => (
            <span
              key={f.label}
              className={
                f.active
                  ? 'bg-secondary text-white border-2 border-primary'
                  : 'text-[#F7F4ED] border-2 border-[#F7F4ED]'
              }
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                flexShrink: 0,
                backgroundColor: f.active ? undefined : 'transparent',
              }}
            >
              {f.label}
            </span>
          ))}
        </div>

        {/* Past messages */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginTop: '1.5rem' }}>
          {MESSAGES.map((m) => (
            <Link
              key={m.title}
              href="#"
              className="text-secondary"
              style={{
                margin: '0 1.5rem',
                padding: '0.75rem',
                borderRadius: '1rem',
                backgroundColor: 'rgba(247,244,237,0.95)',
                boxShadow: '0 8px 22px rgba(0,0,0,0.18)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.875rem',
              }}
            >
              {/* Thumbnail */}
              <div
                style={{
                  position: 'relative',
                  width: 80,
                  height: 80,
                  borderRadius: '0.5rem',
                  backgroundImage: THUMB_GRADIENT,
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Play className="text-[#F7F4ED] h-5 w-5" fill="currentColor" />
                <span
                  style={{
                    position: 'absolute',
                    left: 5,
                    bottom: 4,
                    color: '#F7F4ED',
                    fontSize: '0.6rem',
                    fontWeight: 600,
                  }}
                >
                  {m.duration}
                </span>
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 className="font-serif text-secondary text-lg">{m.title}</h3>
                <p className="text-secondary" style={{ fontSize: '0.75rem', opacity: 0.65, marginTop: '0.15rem' }}>
                  {m.meta}
                </p>
                <p className="text-secondary" style={{ fontSize: '0.8rem', opacity: 0.7, marginTop: '0.25rem' }}>
                  {m.description}
                </p>
              </div>

              <ChevronRight className="text-secondary h-5 w-5" style={{ flexShrink: 0 }} />
            </Link>
          ))}
        </div>

        {/* View all */}
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link
            href="#"
            className="text-[#F7F4ED]"
            style={{ fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
          >
            View All Messages <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
