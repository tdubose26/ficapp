import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Geist, DM_Serif_Display, DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});
const dmSerifDisplay = DM_Serif_Display({weight:['400'],subsets:['latin'],variable:'--font-serif'});
const dmSans = DM_Sans({weight:['400','500','700'],subsets:['latin'],variable:'--font-sans-flow'});

export const metadata: Metadata = {
  title: 'The FLOW',
  description: 'Members-only digital hub for Flowing In Christ Ministries',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/icon-180.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'The FLOW',
  },
}

export const viewport: Viewport = {
  themeColor: '#7F1519',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable, dmSerifDisplay.variable, dmSans.variable)}>
      <body className="bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
