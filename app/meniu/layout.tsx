import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meniu',
  description: 'Descoperă produsele Cofetăriei Levante: torturi personalizate, prăjituri artizanale, tartes și deserturi premium. Comandă online sau sună la 0745380056.',
  openGraph: {
    title: 'Meniu — Cofetăria Levante',
    description: 'Torturi personalizate, prăjituri artizanale și deserturi premium în București.',
  },
}

export default function MeniuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

