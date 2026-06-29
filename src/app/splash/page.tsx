import Link from 'next/link'

export default function SplashPage() {
  return (
    <div
      className="text-foreground"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3rem 1.5rem',
        backgroundImage:
          'radial-gradient(ellipse at top, var(--secondary) 0%, var(--primary) 55%, var(--secondary) 100%)',
        backgroundColor: 'var(--secondary)',
      }}
    >
      <div
        aria-hidden
        style={{
          width: 200,
          height: 200,
          borderRadius: '9999px',
          backgroundImage:
            'radial-gradient(circle at 30% 25%, var(--primary) 0%, var(--primary) 35%, var(--secondary) 100%)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
          marginTop: '2rem',
        }}
      />

      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <p
          className="font-serif text-secondary tracking-widest"
          style={{ fontSize: '1rem', lineHeight: 1.1 }}
        >
          FLOWING IN CHRIST
        </p>
        <p
          className="font-serif text-secondary tracking-widest"
          style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}
        >
          MINISTRIES
        </p>
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <h1 className="font-serif text-secondary text-3xl">
          Welcome to The FLOW
        </h1>
        <p className="text-muted-foreground" style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>
          Flowing In Christ Ministries
        </p>
      </div>

      <div style={{ flex: 1 }} />

      <Link
        href="/login"
        className="bg-secondary border-2 border-primary rounded-full"
        style={{
          color: '#fff',
          padding: '1rem 2.5rem',
          fontSize: '1.125rem',
          textDecoration: 'none',
          marginBottom: '2rem',
          boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
        }}
      >
        Enter The FLOW
      </Link>
    </div>
  )
}
