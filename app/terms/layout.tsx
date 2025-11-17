import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termeni și Condiții',
  description: 'Termeni și condiții de utilizare a site-ului Cofetăriei Levante. Reguli pentru comenzi, livrare și utilizare.',
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

