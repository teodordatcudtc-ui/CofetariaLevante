import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import MoreProducts from '@/components/MoreProducts'
import PromoSection from '@/components/PromoSection'
import Testimonials from '@/components/Testimonials'
import SVGSeparator from '@/components/SVGSeparator'

export const metadata: Metadata = {
  title: 'Acasă',
  description: 'Cofetăria Levante — Torturi personalizate, prăjituri artizanale și deserturi premium. Comandă online sau ridică din Șoseaua Berceni 8, București. Sunați: 0745380056.',
  openGraph: {
    title: 'Cofetăria Levante — Torturi și Prăjituri Artizanale în București',
    description: 'Torturi personalizate, prăjituri artizanale și deserturi premium. Comandă online sau ridică din Șoseaua Berceni 8, București.',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <MoreProducts />
      <PromoSection />
      <Testimonials />
    </>
  )
}

