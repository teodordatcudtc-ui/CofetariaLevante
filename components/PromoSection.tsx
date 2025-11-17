'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PromoSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section className="section-padding bg-gradient-to-r from-primary to-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-20" />
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="container-custom relative z-10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-white">
            Ofertă Săptămânală
          </h2>
          <p className="text-xl mb-8 text-white/95">
            Reducere de 15% la toate torturile comandate cu minim 3 zile înainte
          </p>
          <Link href="/comanda" className="btn-secondary bg-white text-primary hover:bg-white/90 inline-block">
            Profită acum
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

