import Link from 'next/link'

type Props = {
  href: string
  emoji: string
  title: string
  description: string
}

export default function SectionCard({ href, emoji, title, description }: Props) {
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <div
        className="bg-card text-card-foreground border border-border"
        style={{
          padding: '1.5rem',
          borderRadius: '0.75rem',
          cursor: 'pointer',
          transition: 'all 0.2s',
          height: '100%',
        }}
      >
        <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{emoji}</div>
        <h3 className="text-primary" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ fontSize: '0.9rem', opacity: 0.7, lineHeight: 1.5 }}>{description}</p>
      </div>
    </Link>
  )
}
