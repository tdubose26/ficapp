'use client'

import { createClient } from '@/lib/supabase/client'
import { ChevronRight, Users, Shield, Heart } from 'lucide-react'

export default function LoginPage() {
  const handleGoogleLogin = async () => {
    const supabase = createClient()
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
  }

  return (
    <div
      className="text-foreground"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2.5rem 1.5rem',
        backgroundImage:
          'radial-gradient(ellipse at top, var(--secondary) 0%, var(--primary) 55%, var(--secondary) 100%)',
        backgroundColor: 'var(--secondary)',
      }}
    >
      {/* Logo placeholder */}
      <div
        aria-hidden
        style={{
          width: 140,
          height: 140,
          borderRadius: '9999px',
          backgroundImage:
            'radial-gradient(circle at 30% 25%, var(--primary) 0%, var(--primary) 35%, var(--secondary) 100%)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
          marginTop: '1rem',
        }}
      />

      {/* Wordmark */}
      <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
        <p
          className="font-serif text-[#F7F4ED] tracking-widest"
          style={{ fontSize: '0.95rem', lineHeight: 1.1 }}
        >
          FLOWING IN CHRIST
        </p>
        <p
          className="font-serif text-[#F7F4ED] tracking-widest"
          style={{ fontSize: '0.7rem', marginTop: '0.25rem' }}
        >
          MINISTRIES
        </p>
      </div>

      {/* Heading */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h1 className="font-serif text-[#F7F4ED] text-4xl">Welcome Home</h1>
        <p
          className="text-[#F7F4ED]"
          style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}
        >
          Sign in to access The FLOW family hub.
        </p>
      </div>

      {/* Buttons */}
      <div
        style={{
          width: '100%',
          maxWidth: 380,
          marginTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.875rem',
        }}
      >
        <button
          onClick={handleGoogleLogin}
          className="bg-secondary border-2 border-primary rounded-full"
          style={{
            color: '#fff',
            padding: '1rem 1.5rem',
            fontSize: '1rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
            boxShadow: '0 6px 18px rgba(0,0,0,0.25)',
          }}
        >
          <span
            aria-hidden
            className="bg-primary text-secondary font-serif"
            style={{
              width: 28,
              height: 28,
              borderRadius: '9999px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.95rem',
              fontWeight: 700,
            }}
          >
            G
          </span>
          <span style={{ flex: 1, textAlign: 'center' }}>Continue with Google</span>
          <ChevronRight className="h-5 w-5" />
        </button>

        <button
          type="button"
          className="bg-card text-secondary border-2 border-secondary rounded-full"
          style={{
            padding: '1rem 1.5rem',
            fontSize: '1rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
          }}
        >
          <Users className="h-5 w-5" />
          <span style={{ flex: 1, textAlign: 'center' }}>Members Only</span>
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Security indicator */}
      <div
        style={{
          marginTop: '2rem',
          width: '100%',
          maxWidth: 380,
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
        }}
      >
        <div style={{ flex: 1, borderTopWidth: 1, borderTopStyle: 'solid', borderTopColor: '#F7F4ED', opacity: 0.7 }} />
        <Shield className="text-primary h-5 w-5" />
        <div style={{ flex: 1, borderTopWidth: 1, borderTopStyle: 'solid', borderTopColor: '#F7F4ED', opacity: 0.7 }} />
      </div>
      <p
        className="text-[#F7F4ED]"
        style={{ marginTop: '0.5rem', fontSize: '0.8rem', textAlign: 'center' }}
      >
        Secure · Private · For Members
      </p>

      {/* Bottom card */}
      <div
        className="bg-card text-card-foreground border border-border"
        style={{
          width: '100%',
          maxWidth: 380,
          marginTop: '2rem',
          padding: '1.25rem',
          borderRadius: '1rem',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <Heart className="text-secondary h-6 w-6" />
        <h2 className="font-serif text-secondary" style={{ fontSize: '1.25rem' }}>
          We&apos;re glad you&apos;re here.
        </h2>
        <p className="text-muted-foreground" style={{ fontSize: '0.85rem' }}>
          Built for connection. Rooted in faith.
        </p>
      </div>

      <div style={{ flex: 1 }} />

      {/* Footer */}
      <p
        className="text-[#F7F4ED]"
        style={{ fontSize: '0.7rem', marginTop: '1.5rem', textAlign: 'center' }}
      >
        Powered by Flowing In Christ Ministries
      </p>
    </div>
  )
}
