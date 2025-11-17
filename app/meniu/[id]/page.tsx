'use client'

import { use } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ImagePlaceholder from '@/components/ImagePlaceholder'

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <Link href="/meniu" className="text-primary hover:underline mb-6 inline-block">
            ← Înapoi la produse
          </Link>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="mb-6">
                <ImagePlaceholder 
                  label="Imagine produs" 
                  icon="cake" 
                  className="rounded-lg h-64 md:h-96"
                />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-serif text-primary mb-4">
                Detalii Produs
              </h1>
              
              <p className="text-accent text-lg mb-6 max-w-2xl mx-auto">
                Aici vor fi afișate detaliile complete ale produsului selectat, inclusiv descriere, 
                ingrediente, alergeni, preț și opțiuni de comandă.
              </p>
              
              <p className="text-accent/70 text-sm mb-8">
                Pagina este în curs de dezvoltare și va fi disponibilă în curând.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/comanda" className="btn-primary text-center">
                  Comandă acum
                </Link>
                <a href="tel:0745380056" className="btn-secondary text-center">
                  Sună pentru detalii
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
