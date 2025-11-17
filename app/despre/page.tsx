'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import ImagePlaceholder from '@/components/ImagePlaceholder'

export default function DesprePage() {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary/10 to-white">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 30 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="container-custom text-center"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            Povestea Levante
          </h1>
          <p className="text-xl text-accent max-w-3xl mx-auto">
            O călătorie a pasiunii și a excelenței în lumea deserturilor
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, y: 30 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
          >
            <div>
              <h2 className="text-3xl font-serif text-primary mb-6">
                Începuturile
              </h2>
              <div className="space-y-4 text-accent leading-relaxed">
                <p>
                  Cofetăria Levante s-a născut din pasiunea pentru deserturile rafinate și dorința 
                  de a aduce bucurie în viața oamenilor prin creații culinare de excepție. 
                  Fiecare produs pe care îl creăm este rezultatul unei combinații perfecte între 
                  tradiție și inovație.
                </p>
                <p>
                  Folosim doar ingrediente de cea mai bună calitate, selectate cu grijă, 
                  pentru a ne asigura că fiecare bucată de tort sau prăjitură pe care o livrăm 
                  depășește așteptările clienților noștri.
                </p>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
              <ImagePlaceholder label="Bucătărie Levante" icon="kitchen" className="rounded-lg" />
            </div>
          </motion.div>

          <motion.div
            ref={ref3}
            initial={{ opacity: 0, y: 30 }}
            animate={inView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
              <ImagePlaceholder label="Proces de creare" icon="kitchen" className="rounded-lg" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-serif text-primary mb-6">
                Valori și Misiune
              </h2>
              <div className="space-y-4 text-accent leading-relaxed">
                <p>
                  Misiunea noastră este să creăm momente de bucurie prin deserturile noastre. 
                  Credem că fiecare ocazie specială merită un tort sau o prăjitură care să 
                  reflecte personalitatea și emoțiile momentului.
                </p>
                <p>
                  Ne dedicăm să oferim nu doar produse de calitate, ci și o experiență completă, 
                  de la consultanță și personalizare până la livrare și servire. Fiecare comandă 
                  este tratată cu atenție și pasiune.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              Ce ne definește
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Calitate Premium',
                description: 'Ingrediente selectate, rețete tradiționale și tehnici moderne pentru rezultate excepționale.',
                icon: '⭐',
              },
              {
                title: 'Personalizare',
                description: 'Fiecare produs poate fi adaptat după preferințele și nevoile tale, creând ceva unic.',
                icon: '🎨',
              },
              {
                title: 'Pasiune',
                description: 'Fiecare tort și prăjitură este creată cu pasiune și atenție la detalii, pentru momentele tale speciale.',
                icon: '❤️',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-serif text-primary mb-3">{value.title}</h3>
                <p className="text-accent">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container-custom text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-white">
            Vrei să descoperi gustul Levante?
          </h2>
          <p className="text-xl mb-8 text-white/95">
            Comandă acum sau sună-ne pentru o consultanță personalizată
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/comanda" className="btn-secondary bg-white text-primary hover:bg-white/90 inline-block">
              Comandă acum
            </a>
            <a href="tel:0745380056" className="btn-secondary bg-white/20 text-white hover:bg-white/30 inline-block">
              Sună-ne: 0745380056
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

