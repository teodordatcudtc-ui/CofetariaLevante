'use client'

import { useParams } from 'next/navigation'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ImagePlaceholder from '@/components/ImagePlaceholder'

const products: Record<string, {
  id: string
  name: string
  description: string
  fullDescription: string
  category: string
  price: string
  image: string
  ingredients: string
  allergens?: string
}> = {
  '1': {
    id: '1',
    name: 'Tort Ciocolată Premium',
    description: 'Tort cu ciocolată belgiană, cremă de vanilie și fructe proaspete',
    fullDescription: 'Tortul nostru premium cu ciocolată belgiană este o adevărată delicatesă. Preparat cu ingrediente de cea mai bună calitate, combină bogăția ciocolatei cu finețea cremei de vanilie și prospețimea fructelor proaspete. Perfect pentru orice ocazie specială.',
    category: 'Torturi',
    price: 'De la 150 lei',
    image: '/products/tort-ciocolata.jpg',
    ingredients: 'Ciocolată belgiană, cremă vanilie, fructe proaspete, biscuiți, unt',
    allergens: 'Gluten, ouă, lactoză, fructe cu coajă',
  },
  '2': {
    id: '2',
    name: 'Tort Fructe de Pădure',
    description: 'Tort cu fructe de pădure, cremă de brânză și biscuiți',
    fullDescription: 'Un tort delicios cu fructe de pădure proaspete, cremă de brânză cremoasă și straturi de biscuiți crocanți. O combinație perfectă între dulce și acid, ideal pentru iarnă și vară.',
    category: 'Torturi',
    price: 'De la 140 lei',
    image: '/products/tort-fructe.jpg',
    ingredients: 'Fructe de pădure, cremă brânză, biscuiți, zahăr, smântână',
    allergens: 'Gluten, lactoză',
  },
  '3': {
    id: '3',
    name: 'Tartă cu Fructe',
    description: 'Tartă crocantă cu fructe de sezon și cremă de brânză',
    fullDescription: 'Tartă artizanală cu aluat crocant, fructe de sezon proaspete și cremă de brânză delicată. O combinație perfectă de texturi și arome, ideală ca desert sau pentru o pauză dulce.',
    category: 'Tartes',
    price: 'De la 45 lei',
    image: '/products/tarta-fructe.jpg',
    ingredients: 'Aluat crocant, fructe de sezon, cremă brânză, zahăr',
    allergens: 'Gluten, lactoză',
  },
  '4': {
    id: '4',
    name: 'Ecler Profiterol',
    description: 'Ecleruri clasic cu cremă de vanilie și glazură de ciocolată',
    fullDescription: 'Ecleruri tradiționale franceze cu aluat choux crocant, cremă de vanilie parfumată și glazură de ciocolată belgiană. O delicatesă clasică, preparată după rețete autentice.',
    category: 'Prăjituri',
    price: 'De la 8 lei',
    image: '/products/ecler.jpg',
    ingredients: 'Aluat choux, cremă vanilie, glazură ciocolată, zahăr',
    allergens: 'Gluten, ouă, lactoză',
  },
  '5': {
    id: '5',
    name: 'Croissant cu Ciocolată',
    description: 'Croissant proaspăt cu ciocolată belgiană',
    fullDescription: 'Croissant autentic francez, coapte zilnic, cu ciocolată belgiană topită. Aluatul nostru are straturi perfecte, crocante pe exterior și moi pe interior.',
    category: 'Prăjituri',
    price: 'De la 6 lei',
    image: '/products/croissant.jpg',
    ingredients: 'Aluat franțuzesc, ciocolată belgiană, unt, zahăr',
    allergens: 'Gluten, ouă, lactoză',
  },
  '6': {
    id: '6',
    name: 'Baton Ciocolată',
    description: 'Baton cu ciocolată și alune',
    fullDescription: 'Baton artizanal cu ciocolată premium, alune prăjite și caramel. O combinație perfectă de texturi crocante și arome bogate, ideal pentru o pauză dulce.',
    category: 'Batoane',
    price: 'De la 12 lei',
    image: '/products/baton.jpg',
    ingredients: 'Ciocolată, alune, caramel, zahăr',
    allergens: 'Alune, lactoză',
  },
  '7': {
    id: '7',
    name: 'Tort Nuntă Premium',
    description: 'Tort elegant pentru evenimente speciale',
    fullDescription: 'Torturi personalizate pentru nuntă, create după preferințele tale. Oferim consultanță completă pentru design, gusturi și decor, asigurându-ne că tortul tău va fi perfect pentru ziua cea mai specială.',
    category: 'Evenimente',
    price: 'Preț la cerere',
    image: '/products/tort-nunta.jpg',
    ingredients: 'Personalizat după preferințe - consultanță inclusă',
    allergens: 'Variază în funcție de opțiunile alese',
  },
  '8': {
    id: '8',
    name: 'Tort Aniversare',
    description: 'Tort personalizat pentru aniversări',
    fullDescription: 'Torturi personalizate pentru aniversări, create special pentru a marca momente importante. De la design-uri simple și elegante până la creații elaborate, fiecare tort este unic și reflectă personalitatea celebrantului.',
    category: 'Evenimente',
    price: 'Preț la cerere',
    image: '/products/tort-aniversare.jpg',
    ingredients: 'Personalizat după preferințe - consultanță inclusă',
    allergens: 'Variază în funcție de opțiunile alese',
  },
  '9': {
    id: '9',
    name: 'Macarons Premium',
    description: 'Macarons cu arome variate și glazură rafinată',
    fullDescription: 'Macarons artizanali francezi, preparați după rețete autentice. Oferim o varietate de arome rafinate, de la vanilie și ciocolată până la arome mai exotice. Fiecare macaron este o delicatesă perfectă, cu coajă crocantă și cremă cremoasă.',
    category: 'Prăjituri',
    price: 'De la 4 lei/buc',
    image: '/products/macarons.jpg',
    ingredients: 'Mere, zahăr pudră, albuș ouă, coloranți naturali, arome',
    allergens: 'Ouă, lactoză (în unele variante)',
  },
}

export default function ProductPage() {
  const params = useParams()
  const id = params?.id as string
  const product = products[id]

  if (!product) {
    return (
      <div className="pt-24 section-padding">
        <div className="container-custom text-center">
          <h1 className="text-3xl font-serif text-primary mb-4">Produs negăsit</h1>
          <Link href="/meniu" className="btn-primary">
            Înapoi la produse
          </Link>
        </div>
      </div>
    )
  }

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-custom">
          <Link href="/meniu" className="text-primary hover:underline mb-6 inline-block">
            ← Înapoi la produse
          </Link>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start"
          >
            {/* Image */}
            <div className="relative h-64 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <ImagePlaceholder label={product.name} icon="cake" className="rounded-lg" />
            </div>

            {/* Content */}
            <div>
              <span className="text-sm text-primary font-medium mb-2 block">{product.category}</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary mb-4">
                {product.name}
              </h1>
              <p className="text-lg md:text-xl text-accent mb-4">{product.description}</p>
              <p className="text-accent mb-6 md:mb-8 leading-relaxed">{product.fullDescription}</p>

              <div className="space-y-4 mb-6 md:mb-8">
                <div>
                  <h3 className="font-serif text-lg text-primary mb-2">Ingrediente</h3>
                  <p className="text-accent text-sm md:text-base">{product.ingredients}</p>
                </div>
                {product.allergens && (
                  <div>
                    <h3 className="font-serif text-lg text-primary mb-2">Alergeni</h3>
                    <p className="text-accent text-sm md:text-base">{product.allergens}</p>
                  </div>
                )}
                <div>
                  <h3 className="font-serif text-lg text-primary mb-2">Preț</h3>
                  <p className="text-2xl font-semibold text-primary">{product.price}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
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
