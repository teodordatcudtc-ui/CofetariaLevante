'use client'

import { useState, FormEvent } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Script from 'next/script'

export default function ComandaPage() {
  const [formData, setFormData] = useState({
    nume: '',
    telefon: '',
    email: '',
    produs: '',
    data: '',
    adresa: '',
    observatii: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.nume.trim()) {
      newErrors.nume = 'Numele este obligatoriu'
    }

    if (!formData.telefon.trim()) {
      newErrors.telefon = 'Telefonul este obligatoriu'
    } else if (!/^[0-9+\s-]+$/.test(formData.telefon)) {
      newErrors.telefon = 'Format telefon invalid'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email-ul este obligatoriu'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email invalid'
    }

    if (!formData.produs.trim()) {
      newErrors.produs = 'Selectați un produs'
    }

    if (!formData.data.trim()) {
      newErrors.data = 'Data este obligatorie'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Fallback: mailto link
    const subject = encodeURIComponent(`Comandă: ${formData.produs}`)
    const body = encodeURIComponent(
      `Nume: ${formData.nume}\n` +
      `Telefon: ${formData.telefon}\n` +
      `Email: ${formData.email}\n` +
      `Produs: ${formData.produs}\n` +
      `Data: ${formData.data}\n` +
      `Adresă: ${formData.adresa}\n` +
      `Observații: ${formData.observatii}`
    )

    // Încearcă să trimită prin API (dacă există)
    try {
      // Aici poți adăuga un endpoint real când ești gata
      // const response = await fetch('/api/order', { method: 'POST', body: JSON.stringify(formData) })
      
      // Pentru moment, folosim mailto fallback
      window.location.href = `mailto:contact@cofetaria-levante.ro?subject=${subject}&body=${body}`
      
      setSubmitSuccess(true)
      setTimeout(() => {
        setSubmitSuccess(false)
        setFormData({
          nume: '',
          telefon: '',
          email: '',
          produs: '',
          data: '',
          adresa: '',
          observatii: '',
        })
      }, 3000)
    } catch (error) {
      console.error('Error submitting form:', error)
      // Fallback la mailto
      window.location.href = `mailto:contact@cofetaria-levante.ro?subject=${subject}&body=${body}`
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">
              Comandă Online
            </h1>
            <p className="text-accent text-lg">
              Completează formularul de mai jos și te vom contacta în cel mai scurt timp
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <motion.form
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-lg"
                noValidate
              >
                <div className="space-y-6">
                  <div>
                    <label htmlFor="nume" className="block text-sm font-medium text-accent mb-2">
                      Nume complet *
                    </label>
                    <input
                      type="text"
                      id="nume"
                      name="nume"
                      value={formData.nume}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.nume ? 'border-red-500' : 'border-secondary'
                      }`}
                      required
                      aria-invalid={!!errors.nume}
                      aria-describedby={errors.nume ? 'nume-error' : undefined}
                    />
                    {errors.nume && (
                      <p id="nume-error" className="text-red-500 text-sm mt-1" role="alert">
                        {errors.nume}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="telefon" className="block text-sm font-medium text-accent mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="telefon"
                      name="telefon"
                      value={formData.telefon}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.telefon ? 'border-red-500' : 'border-secondary'
                      }`}
                      required
                      aria-invalid={!!errors.telefon}
                      aria-describedby={errors.telefon ? 'telefon-error' : undefined}
                    />
                    {errors.telefon && (
                      <p id="telefon-error" className="text-red-500 text-sm mt-1" role="alert">
                        {errors.telefon}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-accent mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.email ? 'border-red-500' : 'border-secondary'
                      }`}
                      required
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="produs" className="block text-sm font-medium text-accent mb-2">
                      Produs dorit *
                    </label>
                    <select
                      id="produs"
                      name="produs"
                      value={formData.produs}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.produs ? 'border-red-500' : 'border-secondary'
                      }`}
                      required
                      aria-invalid={!!errors.produs}
                      aria-describedby={errors.produs ? 'produs-error' : undefined}
                    >
                      <option value="">Selectați un produs</option>
                      <option value="Tort Ciocolată Premium">Tort Ciocolată Premium</option>
                      <option value="Tort Fructe de Pădure">Tort Fructe de Pădure</option>
                      <option value="Tartă cu Fructe">Tartă cu Fructe</option>
                      <option value="Ecler Profiterol">Ecler Profiterol</option>
                      <option value="Alt produs">Alt produs</option>
                    </select>
                    {errors.produs && (
                      <p id="produs-error" className="text-red-500 text-sm mt-1" role="alert">
                        {errors.produs}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="data" className="block text-sm font-medium text-accent mb-2">
                      Data livrării/ridicării *
                    </label>
                    <input
                      type="date"
                      id="data"
                      name="data"
                      value={formData.data}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.data ? 'border-red-500' : 'border-secondary'
                      }`}
                      required
                      aria-invalid={!!errors.data}
                      aria-describedby={errors.data ? 'data-error' : undefined}
                    />
                    {errors.data && (
                      <p id="data-error" className="text-red-500 text-sm mt-1" role="alert">
                        {errors.data}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="adresa" className="block text-sm font-medium text-accent mb-2">
                      Adresă livrare (opțional)
                    </label>
                    <input
                      type="text"
                      id="adresa"
                      name="adresa"
                      value={formData.adresa}
                      onChange={handleChange}
                      placeholder="Șoseaua Berceni 8, București 041914"
                      className="w-full px-4 py-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="observatii" className="block text-sm font-medium text-accent mb-2">
                      Observații (opțional)
                    </label>
                    <textarea
                      id="observatii"
                      name="observatii"
                      value={formData.observatii}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Alergii, preferințe speciale, detalii despre decor..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Se trimite...' : 'Trimite comandă'}
                  </button>

                  {submitSuccess && (
                    <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg" role="alert">
                      Comanda a fost trimisă cu succes! Vă vom contacta în cel mai scurt timp.
                    </div>
                  )}
                </div>
              </motion.form>
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-secondary/20 p-6 rounded-lg">
                <h2 className="font-serif text-xl text-primary mb-4">Contact direct</h2>
                <div className="space-y-4">
                  <a
                    href="tel:0745380056"
                    className="flex items-center space-x-3 text-accent hover:text-primary transition-colors"
                  >
                    <span className="text-2xl">📞</span>
                    <span className="font-medium">0745380056</span>
                  </a>
                  <div className="flex items-start space-x-3 text-accent">
                    <span className="text-2xl">📍</span>
                    <address className="not-italic">
                      Șoseaua Berceni 8<br />
                      București 041914
                    </address>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-serif text-lg text-primary mb-3">Program</h3>
                <ul className="space-y-2 text-sm text-accent">
                  <li className="flex justify-between">
                    <span>Luni - Vineri</span>
                    <span>08:00 - 20:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sâmbătă</span>
                    <span>09:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Duminică</span>
                    <span>10:00 - 16:00</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Schema.org markup pentru LocalBusiness */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Bakery',
            name: 'Cofetăria Levante',
            image: 'https://cofetaria-levante.ro/logo.jpg',
            '@id': 'https://cofetaria-levante.ro',
            url: 'https://cofetaria-levante.ro',
            telephone: '0745380056',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Șoseaua Berceni 8',
              addressLocality: 'București',
              postalCode: '041914',
              addressCountry: 'RO',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 44.38872940454933,
              longitude: 26.119445376561192,
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '20:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '09:00',
                closes: '18:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Sunday',
                opens: '10:00',
                closes: '16:00',
              },
            ],
          }),
        }}
      />
    </div>
  )
}

