import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Despre',
  description: 'Descoperă povestea Cofetăriei Levante: pasiune, calitate premium și ingrediente selectate pentru torturi și prăjituri artizanale în București.',
  openGraph: {
    title: 'Despre Cofetăria Levante — Povestea Noastră',
    description: 'Pasiune, calitate premium și ingrediente selectate pentru deserturi de excepție.',
  },
}

export default function DespreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

