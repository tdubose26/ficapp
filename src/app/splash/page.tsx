import Link from 'next/link'
import Image from 'next/image'

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
      <div style={{ marginTop: '2rem' }}>
        <Image src="/Flowlogoofficial.svg" alt="Flowing In Christ Ministries" width={200} height={200} priority />
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <h1 className="font-serif text-[#F7F4ED] text-3xl">
          Welcome to The FLOW
        </h1>
        <p className="text-[#F7F4ED]" style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>
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
