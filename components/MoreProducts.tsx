'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ImagePlaceholder from './ImagePlaceholder'

interface Product {
  id: string
  name: string
  description: string
  category: string
  price: string
}

const moreProducts: Product[] = [
  {
    id: '4',
    name: 'Croissant cu Ciocolată',
    description: 'Croissant proaspăt cu ciocolată belgiană',
    category: 'Prăjituri',
    price: 'De la 6 lei',
  },
  {
    id: '5',
    name: 'Baton Ciocolată',
    description: 'Baton cu ciocolată și alune',
    category: 'Batoane',
    price: 'De la 12 lei',
  },
  {
    id: '6',
    name: 'Tort Fructe de Pădure',
    description: 'Tort cu fructe de pădure, cremă de brânză și biscuiți',
    category: 'Torturi',
    price: 'De la 140 lei',
  },
  {
    id: '7',
    name: 'Tort Nuntă Premium',
    description: 'Tort elegant pentru evenimente speciale',
    category: 'Evenimente',
    price: 'Preț la cerere',
  },
  {
    id: '8',
    name: 'Tort Aniversare',
    description: 'Tort personalizat pentru aniversări',
    category: 'Evenimente',
    price: 'Preț la cerere',
  },
  {
    id: '9',
    name: 'Macarons Premium',
    description: 'Macarons cu arome variate și glazură rafinată',
    category: 'Prăjituri',
    price: 'De la 4 lei/buc',
  },
]

export default function MoreProducts() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="section-padding bg-secondary/10">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
            Mai Multe Produse
          </h2>
          <p className="text-accent text-lg max-w-2xl mx-auto">
            Explorează întreaga noastră selecție de deserturi și specialități
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {moreProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/meniu" className="btn-primary">
            Vezi toate produsele
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function ProductCard({ product, index, inView }: { product: Product; index: number; inView: boolean }) {
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="card-hover bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <ImagePlaceholder label={product.name} icon="product" />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
            <Link
              href={`/meniu/${product.id}`}
              className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              Vezi detalii →
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <span className="text-sm text-primary font-medium mb-2">{product.category}</span>
          <h3 className="text-xl font-serif text-primary mb-2">{product.name}</h3>
          <p className="text-accent text-sm mb-4 flex-1">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-primary font-semibold text-sm">{product.price}</span>
            <Link
              href={`/meniu/${product.id}`}
              className="text-primary font-medium hover:underline inline-flex items-center text-sm"
            >
              Detalii <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

