'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:hidden z-40">
      <div className="bg-primary text-white rounded-lg shadow-2xl p-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium">Comandă acum</p>
          <p className="text-xs opacity-90">0745380056</p>
        </div>
        <div className="flex gap-2">
          <Link
            href="/comanda"
            className="bg-white text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors"
          >
            Comandă
          </Link>
          <a
            href="tel:0745380056"
            className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors"
          >
            Sună
          </a>
        </div>
      </div>
    </div>
  )
}

