'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-2xl border-t border-secondary p-4 md:p-6"
        >
          <div className="container-custom max-w-4xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <p className="text-sm text-accent">
                  Acest site folosește cookie-uri pentru a îmbunătăți experiența ta. Continuând navigarea, 
                  accepți{' '}
                  <Link href="/privacy" className="text-primary underline hover:no-underline">
                    Politica de confidențialitate
                  </Link>
                  .
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={declineCookies}
                  className="px-4 py-2 text-sm text-accent hover:text-primary transition-colors"
                >
                  Refuză
                </button>
                <button
                  onClick={acceptCookies}
                  className="btn-primary text-sm"
                >
                  Acceptă
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

