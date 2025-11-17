import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Evenimente',
  description: 'Torturi personalizate pentru evenimente: nuntă, aniversare, botez. Solicită ofertă personalizată pentru torturi de eveniment de la Cofetăria Levante.',
  openGraph: {
    title: 'Torturi pentru Evenimente — Cofetăria Levante',
    description: 'Torturi personalizate pentru nuntă, aniversare, botez și evenimente corporate.',
  },
}

export default function EvenimenteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

