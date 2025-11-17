'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const heroImages = [
  { 
    id: 1, 
    src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1920&q=80', 
    alt: 'Torturi Premium', 
    label: 'Torturi Premium' 
  },
  { 
    id: 2, 
    src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1920&q=80', 
    alt: 'Prăjituri Artizanale', 
    label: 'Prăjituri Artizanale' 
  },
  { 
    id: 3, 
    src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1920&q=80', 
    alt: 'Deserturi Rafinate', 
    label: 'Deserturi Rafinate' 
  },
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleParallax = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY
        const rate = scrolled * 0.5
        heroRef.current.style.transform = `translateY(${rate}px)`
      }
    }

    window.addEventListener('scroll', handleParallax)
    return () => window.removeEventListener('scroll', handleParallax)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="relative h-[55vh] md:h-[80vh] flex items-end md:items-center justify-center overflow-hidden pt-24 md:pt-0 pb-20 md:pb-0">
      {/* Background Slider with Parallax */}
      <div
        ref={heroRef}
        className="absolute inset-0 parallax gpu-accelerated"
      >
        <AnimatePresence mode="wait">
          {heroImages.map((image, index) => (
            index === currentImageIndex && (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover blur-sm"
                    priority={index === 0}
                    quality={90}
                    sizes="100vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                  <div className="absolute inset-0 bg-primary/30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {/* Floating decorative circles */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute top-40 right-20 w-24 h-24 rounded-full bg-secondary/20 blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full bg-accent/10 blur-2xl"
        />

        {/* Decorative lines/patterns */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <motion.path
            d="M0,200 Q300,100 600,200 T1200,200"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.path
            d="M0,600 Q300,500 600,600 T1200,600"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#cbcbe0" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#87355d" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#87355d" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#cbcbe0" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 pt-8 md:pt-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge/Tag */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
          >
            <span className="text-white/90 text-sm font-medium">⭐ Artizanat Premium</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-[family-name:var(--font-cormorant)] font-light text-white mb-3 md:mb-6 drop-shadow-2xl leading-tight tracking-wide"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            Cofetăria Levante
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-xl lg:text-2xl text-white mb-6 md:mb-10 max-w-2xl mx-auto drop-shadow-lg font-light"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            Torturi și prăjituri artizanale create cu pasiune și ingrediente premium
          </motion.p>
          
          {/* Stats/Features */}
          <motion.div
            variants={itemVariants}
            className="flex flex-nowrap justify-center gap-3 sm:gap-4 md:gap-8 mb-8"
          >
            {[
              { number: '10+', label: 'Ani experiență' },
              { number: '500+', label: 'Clienți mulțumiți' },
              { number: '100%', label: 'Ingrediente premium' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center flex-1 min-w-0"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-serif text-white font-semibold mb-1">
                  {stat.number}
                </div>
                <div className="text-white/80 text-xs sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/comanda" className="btn-primary text-lg px-8 py-4 group relative overflow-hidden">
              <span className="relative z-10">Comandă acum</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <Link href="/meniu" className="btn-secondary text-lg px-8 py-4 bg-white/90 text-primary hover:bg-white group relative overflow-hidden">
              <span className="relative z-10">Vezi produsele</span>
              <motion.div
                className="absolute inset-0 bg-primary/10"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
