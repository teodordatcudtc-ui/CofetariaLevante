'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: 'Maria P.',
    text: 'Tortul pentru ziua de naștere a fiicei mele a fost absolut perfect! Atât de delicios și frumos decorat. Recomand cu căldură!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Alexandru D.',
    text: 'Cea mai bună cofetărie din zonă! Prăjiturile sunt proaspete, aromate și întotdeauna la timp. Serviciu excelent!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Elena M.',
    text: 'Am comandat tort pentru nuntă și a fost exact ce ne-am dorit. Decorul a fost impecabil și gustul extraordinar.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
            Ce spun clienții noștri
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-accent mb-4 italic">"{testimonial.text}"</p>
              <p className="text-primary font-medium">— {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

