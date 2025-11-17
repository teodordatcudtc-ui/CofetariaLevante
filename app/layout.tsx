import type { Metadata } from 'next'
import { Playfair_Display, Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import StickyCTA from '@/components/StickyCTA'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://cofetaria-levante.ro'),
  title: {
    default: 'Cofetăria Levante — Torturi și Prăjituri Artizanale în București',
    template: '%s | Cofetăria Levante',
  },
  description: 'Cofetăria Levante — Torturi personalizate, prăjituri artizanale și deserturi premium. Comandă online sau ridică din Șoseaua Berceni 8, București. Sunați: 0745380056.',
  keywords: ['cofetarie artizanala Bucuresti', 'torturi personalizate București', 'prăjituri artizanale Berceni', 'comandă tort București', 'cofetarie Levante'],
  authors: [{ name: 'Cofetăria Levante' }],
  manifest: '/manifest.json',
  themeColor: '#87355d',
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://cofetaria-levante.ro',
    siteName: 'Cofetăria Levante',
    title: 'Cofetăria Levante — Torturi și Prăjituri Artizanale în București',
    description: 'Torturi personalizate, prăjituri artizanale și deserturi premium. Comandă online sau ridică din Șoseaua Berceni 8, București.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cofetăria Levante — Torturi și Prăjituri Artizanale',
    description: 'Torturi personalizate, prăjituri artizanale și deserturi premium în București.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieConsent />
        <StickyCTA />
      </body>
    </html>
  )
}

