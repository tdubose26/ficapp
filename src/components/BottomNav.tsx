"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Tv, BookOpen, Baby, Menu } from "lucide-react"

const NAV_ITEMS = [
  { href: "/dashboard", label: "Home", icon: Home },
  { href: "/flow-tv", label: "TV", icon: Tv },
  { href: "/grow", label: "Grow", icon: BookOpen },
  { href: "/flow-kids", label: "Kids", icon: Baby },
  { href: "/more", label: "More", icon: Menu },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav
      className="bg-card border-t border-border"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: 72,
        display: "flex",
        alignItems: "stretch",
        zIndex: 50,
      }}
    >
      {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
        const active = pathname === href
        return (
          <Link
            key={href}
            href={href}
            className={active ? "text-primary" : "text-muted-foreground"}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.25rem",
              textDecoration: "none",
              fontSize: "0.75rem",
            }}
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
