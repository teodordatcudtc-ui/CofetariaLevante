import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politica de Confidențialitate',
  description: 'Politica de confidențialitate a Cofetăriei Levante. Informații despre prelucrarea datelor personale conform GDPR.',
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

