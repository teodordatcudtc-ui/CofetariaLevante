'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TermsPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">
              Termeni și Condiții
            </h1>
            <p className="text-accent mb-8">
              Ultima actualizare: {new Date().toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-lg max-w-none space-y-6 text-accent leading-relaxed">
              <section>
                <h2 className="text-2xl font-serif text-primary mb-4">1. Acceptarea termenilor</h2>
                <p>
                  Prin accesarea și utilizarea site-ului Cofetăriei Levante, accepti acești termeni și condiții. 
                  Dacă nu ești de acord cu acești termeni, te rugăm să nu utilizezi site-ul nostru.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-primary mb-4">2. Comenzi</h2>
                <p>
                  Toate comenzile sunt supuse disponibilității produselor. Ne rezervăm dreptul de a refuza 
                  sau anula orice comandă. Prețurile pot fi modificate fără notificare prealabilă, dar comenzile 
                  confirmate vor fi onorate la prețul stabilit la momentul comenzii.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-primary mb-4">3. Prețuri și plăți</h2>
                <p>
                  Prețurile afișate pe site sunt în lei (RON) și includ TVA, unde este cazul. 
                  Plățile pot fi efectuate la livrare sau ridicare, conform aranjamentelor făcute.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-primary mb-4">4. Livrare</h2>
                <p>
                  Oferim servicii de livrare în București pentru comenzile mai mari. Termenii și costurile 
                  de livrare vor fi discutate individual. Clientul este responsabil să furnizeze o adresă 
                  corectă și accesibilă pentru livrare.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-primary mb-4">5. Anularea comenzilor</h2>
                <p>
                  Comenzile pot fi anulate cu minim 24 de ore înainte de data livrării/ridicării. 
                  Pentru anulări ulterioare, se pot aplica taxe de anulare.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-primary mb-4">6. Proprietate intelectuală</h2>
                <p>
                  Conținutul site-ului, inclusiv texte, imagini, logo-uri și design, este proprietatea 
                  Cofetăriei Levante și este protejat de legile privind drepturile de autor.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-primary mb-4">7. Limitarea răspunderii</h2>
                <p>
                  Cofetăria Levante nu își asumă răspunderea pentru daune indirecte sau consecutive 
                  rezultate din utilizarea site-ului sau a produselor noastre, în limita permisă de lege.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-primary mb-4">8. Modificări</h2>
                <p>
                  Ne rezervăm dreptul de a modifica acești termeni și condiții în orice moment. 
                  Modificările vor intra în vigoare imediat după publicarea pe site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-primary mb-4">9. Legea aplicabilă</h2>
                <p>
                  Acești termeni și condiții sunt guvernați de legile României. Orice dispute 
                  vor fi rezolvate de instanțele competente din România.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-primary mb-4">10. Contact</h2>
                <p>
                  Pentru întrebări despre acești termeni și condiții, ne poți contacta la:
                </p>
                <div className="bg-secondary/20 p-6 rounded-lg mt-4">
                  <p className="font-medium text-primary mb-2">Cofetăria Levante</p>
                  <p className="text-accent">Email: <a href="mailto:contact@cofetaria-levante.ro" className="text-primary hover:underline">contact@cofetaria-levante.ro</a></p>
                  <p className="text-accent">Telefon: <a href="tel:0745380056" className="text-primary hover:underline">0745380056</a></p>
                  <p className="text-accent">Adresă: Șoseaua Berceni 8, București 041914</p>
                </div>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-secondary">
              <Link href="/" className="text-primary hover:underline">
                ← Înapoi la pagina principală
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

