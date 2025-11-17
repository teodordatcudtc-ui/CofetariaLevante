'use client'

import { useState, FormEvent } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function EvenimentePage() {
  const [formData, setFormData] = useState({
    nume: '',
    telefon: '',
    email: '',
    tipEveniment: '',
    numarPersoane: '',
    data: '',
    buget: '',
    detalii: '',
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

    if (!formData.tipEveniment.trim()) {
      newErrors.tipEveniment = 'Tipul evenimentului este obligatoriu'
    }

    if (!formData.numarPersoane.trim()) {
      newErrors.numarPersoane = 'Numărul de persoane este obligatoriu'
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
    const subject = encodeURIComponent(`Cerere ofertă eveniment: ${formData.tipEveniment}`)
    const body = encodeURIComponent(
      `Nume: ${formData.nume}\n` +
      `Telefon: ${formData.telefon}\n` +
      `Email: ${formData.email}\n` +
      `Tip eveniment: ${formData.tipEveniment}\n` +
      `Număr persoane: ${formData.numarPersoane}\n` +
      `Data: ${formData.data}\n` +
      `Buget estimat: ${formData.buget}\n` +
      `Detalii: ${formData.detalii}`
    )

    try {
      // Aici poți adăuga un endpoint real când ești gata
      window.location.href = `mailto:contact@cofetaria-levante.ro?subject=${subject}&body=${body}`
      
      setSubmitSuccess(true)
      setTimeout(() => {
        setSubmitSuccess(false)
        setFormData({
          nume: '',
          telefon: '',
          email: '',
          tipEveniment: '',
          numarPersoane: '',
          data: '',
          buget: '',
          detalii: '',
        })
      }, 3000)
    } catch (error) {
      console.error('Error submitting form:', error)
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
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary/10 to-white">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="container-custom text-center"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            Torturi pentru Evenimente
          </h1>
          <p className="text-xl text-accent max-w-3xl mx-auto">
            Creează momente memorabile cu torturi personalizate pentru nuntă, aniversare, 
            botez sau orice alt eveniment special
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              Ce oferim
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { title: 'Torturi Nuntă', icon: '💒', description: 'Torturi elegante și sofisticate pentru ziua cea mai specială' },
              { title: 'Torturi Aniversare', icon: '🎂', description: 'Torturi personalizate pentru orice vârstă' },
              { title: 'Torturi Botez', icon: '👶', description: 'Torturi dulci și delicate pentru botezuri' },
              { title: 'Evenimente Corporate', icon: '🏢', description: 'Soluții pentru evenimente de business' },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center card-hover"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-serif text-primary mb-2">{service.title}</h3>
                <p className="text-accent text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              Solicită Ofertă
            </h2>
            <p className="text-accent text-lg">
              Completează formularul de mai jos și te vom contacta cu o ofertă personalizată
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg"
            noValidate
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                />
                {errors.nume && (
                  <p className="text-red-500 text-sm mt-1">{errors.nume}</p>
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
                />
                {errors.telefon && (
                  <p className="text-red-500 text-sm mt-1">{errors.telefon}</p>
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
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="tipEveniment" className="block text-sm font-medium text-accent mb-2">
                  Tip eveniment *
                </label>
                <select
                  id="tipEveniment"
                  name="tipEveniment"
                  value={formData.tipEveniment}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.tipEveniment ? 'border-red-500' : 'border-secondary'
                  }`}
                  required
                >
                  <option value="">Selectați tipul</option>
                  <option value="Nuntă">Nuntă</option>
                  <option value="Aniversare">Aniversare</option>
                  <option value="Botez">Botez</option>
                  <option value="Corporate">Eveniment Corporate</option>
                  <option value="Alt eveniment">Alt eveniment</option>
                </select>
                {errors.tipEveniment && (
                  <p className="text-red-500 text-sm mt-1">{errors.tipEveniment}</p>
                )}
              </div>

              <div>
                <label htmlFor="numarPersoane" className="block text-sm font-medium text-accent mb-2">
                  Număr persoane *
                </label>
                <input
                  type="number"
                  id="numarPersoane"
                  name="numarPersoane"
                  value={formData.numarPersoane}
                  onChange={handleChange}
                  min="1"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.numarPersoane ? 'border-red-500' : 'border-secondary'
                  }`}
                  required
                />
                {errors.numarPersoane && (
                  <p className="text-red-500 text-sm mt-1">{errors.numarPersoane}</p>
                )}
              </div>

              <div>
                <label htmlFor="data" className="block text-sm font-medium text-accent mb-2">
                  Data evenimentului *
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
                />
                {errors.data && (
                  <p className="text-red-500 text-sm mt-1">{errors.data}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="buget" className="block text-sm font-medium text-accent mb-2">
                  Buget estimat (opțional)
                </label>
                <input
                  type="text"
                  id="buget"
                  name="buget"
                  value={formData.buget}
                  onChange={handleChange}
                  placeholder="Ex: 500-800 lei"
                  className="w-full px-4 py-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="detalii" className="block text-sm font-medium text-accent mb-2">
                  Detalii și preferințe (opțional)
                </label>
                <textarea
                  id="detalii"
                  name="detalii"
                  value={formData.detalii}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Descrieți-vă visul: gusturi preferate, temă, culori, stil decor..."
                  className="w-full px-4 py-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-6 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Se trimite...' : 'Solicită ofertă'}
            </button>

            {submitSuccess && (
              <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mt-6" role="alert">
                Cererea a fost trimisă cu succes! Vă vom contacta în cel mai scurt timp cu o ofertă personalizată.
              </div>
            )}
          </motion.form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary to-accent p-12 rounded-lg"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-white">
              Ai întrebări?
            </h2>
            <p className="text-xl mb-6 text-white/95">
              Sună-ne direct pentru o consultanță personalizată
            </p>
            <a href="tel:0745380056" className="btn-secondary bg-white text-primary hover:bg-white/90 inline-block">
              Sună: 0745380056
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

