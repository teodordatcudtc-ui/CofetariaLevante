import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Comandă',
  description: 'Comandă online torturi și prăjituri de la Cofetăria Levante. Completează formularul sau sună la 0745380056. Livrare în București.',
  openGraph: {
    title: 'Comandă Online — Cofetăria Levante',
    description: 'Comandă torturi personalizate și prăjituri artizanale. Livrare în București.',
  },
}

export default function ComandaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

