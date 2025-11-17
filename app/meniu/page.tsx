'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import type { Metadata } from 'next'

const categories = ['Toate', 'Torturi', 'Prăjituri', 'Tartes', 'Batoane', 'Evenimente']

const products = [
  {
    id: '1',
    name: 'Tort Ciocolată Premium',
    description: 'Tort cu ciocolată belgiană, cremă de vanilie și fructe proaspete',
    category: 'Torturi',
    price: 'De la 150 lei',
    image: '/products/tort-ciocolata.jpg',
    ingredients: 'Ciocolată belgiană, cremă vanilie, fructe proaspete',
  },
  {
    id: '2',
    name: 'Tort Fructe de Pădure',
    description: 'Tort cu fructe de pădure, cremă de brânză și biscuiți',
    category: 'Torturi',
    price: 'De la 140 lei',
    image: '/products/tort-fructe.jpg',
    ingredients: 'Fructe de pădure, cremă brânză, biscuiți',
  },
  {
    id: '3',
    name: 'Tartă cu Fructe',
    description: 'Tartă crocantă cu fructe de sezon și cremă de brânză',
    category: 'Tartes',
    price: 'De la 45 lei',
    image: '/products/tarta-fructe.jpg',
    ingredients: 'Aluat crocant, fructe de sezon, cremă brânză',
  },
  {
    id: '4',
    name: 'Ecler Profiterol',
    description: 'Ecleruri clasic cu cremă de vanilie și glazură de ciocolată',
    category: 'Prăjituri',
    price: 'De la 8 lei',
    image: '/products/ecler.jpg',
    ingredients: 'Aluat choux, cremă vanilie, glazură ciocolată',
  },
  {
    id: '5',
    name: 'Croissant cu Ciocolată',
    description: 'Croissant proaspăt cu ciocolată belgiană',
    category: 'Prăjituri',
    price: 'De la 6 lei',
    image: '/products/croissant.jpg',
    ingredients: 'Aluat franțuzesc, ciocolată belgiană',
  },
  {
    id: '6',
    name: 'Baton Ciocolată',
    description: 'Baton cu ciocolată și alune',
    category: 'Batoane',
    price: 'De la 12 lei',
    image: '/products/baton.jpg',
    ingredients: 'Ciocolată, alune, caramel',
  },
  {
    id: '7',
    name: 'Tort Nuntă Premium',
    description: 'Tort elegant pentru evenimente speciale',
    category: 'Evenimente',
    price: 'Preț la cerere',
    image: '/products/tort-nunta.jpg',
    ingredients: 'Personalizat după preferințe',
  },
  {
    id: '8',
    name: 'Tort Aniversare',
    description: 'Tort personalizat pentru aniversări',
    category: 'Evenimente',
    price: 'Preț la cerere',
    image: '/products/tort-aniversare.jpg',
    ingredients: 'Personalizat după preferințe',
  },
]

export default function MeniuPage() {
  const [selectedCategory, setSelectedCategory] = useState('Toate')
  const [filterVegan, setFilterVegan] = useState(false)
  const [filterSugarFree, setFilterSugarFree] = useState(false)

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === 'Toate' || product.category === selectedCategory
    // Note: În realitate, ar trebui să ai un câmp vegan/sugarFree în datele produsului
    return categoryMatch
  })

  return (
    <div className="pt-24">
      <section className="section-padding bg-gradient-to-b from-secondary/20 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">
              Produsele Noastre
            </h1>
            <p className="text-accent text-lg max-w-2xl mx-auto">
              Descoperă selecția noastră de torturi, prăjituri și deserturi create cu pasiune
            </p>
          </motion.div>

          {/* Filters */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-white text-accent hover:bg-secondary/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filterVegan}
                  onChange={(e) => setFilterVegan(e.target.checked)}
                  className="w-4 h-4 text-primary"
                />
                <span className="text-accent">Vegan</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filterSugarFree}
                  onChange={(e) => setFilterSugarFree(e.target.checked)}
                  className="w-4 h-4 text-primary"
                />
                <span className="text-accent">Fără zahăr</span>
              </label>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/meniu/${product.id}`}>
        <div className="card-hover bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col">
          <div className="relative h-64 overflow-hidden">
            <ImagePlaceholder label={product.name} icon="product" />
            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
              <span className="text-white font-medium">Vezi detalii →</span>
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <span className="text-sm text-primary font-medium mb-2">{product.category}</span>
            <h3 className="text-xl font-serif text-primary mb-2">{product.name}</h3>
            <p className="text-accent text-sm mb-4 flex-1">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-primary font-semibold">{product.price}</span>
              <span className="text-primary font-medium hover:underline inline-flex items-center">
                Detalii <span className="ml-1">→</span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

