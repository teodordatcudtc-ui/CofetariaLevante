'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PrivacyPage() {
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
              Politica de Confidențialitate
            </h1>
            <p className="text-accent mb-8">
              Ultima actualizare: {new Date().toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-lg max-w-none space-y-6 text-accent leading-relaxed">
              <section>
                <h2 className="text-2xl font-serif text-primary mb-4">1. Introducere</h2>
                <p>
                  Cofetăria Levante („noi”, „noastră”, „compania”) respectă confidențialitatea vizitatorilor 
                  site-ului nostru web și se angajează să protejeze datele personale colectate în conformitate 
                  cu Regulamentul General privind Protecția Datelor (GDPR) și legislația română aplicabilă.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-primary mb-4">2. Datele pe care le colectăm</h2>
                <p>Colectăm următoarele tipuri de date personale:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nume și prenume</li>
                  <li>Adresă de email</li>
                  <li>Număr de telefon</li>
                  <li>Adresă de livrare (dacă este cazul)</li>
                  <li>Informații despre comenzile tale</li>
                  <li>Date tehnice (adresă IP, tip browser, cookie-uri)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-primary mb-4">3. Scopul prelucrării</h2>
                <p>Folosim datele tale personale pentru:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Procesarea și livrarea comenzilor</li>
                  <li>Comunicarea cu tine privind comenzile</li>
                  <li>Îmbunătățirea serviciilor noastre</li>
                  <li>Conformarea cu obligațiile legale</li>
                  <li>Marketing (doar cu consimțământul tău)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-primary mb-4">4. Baza legală</h2>
                <p>
                  Prelucrăm datele tale personale pe baza următoarelor motive legale:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Executarea contractului (procesarea comenzilor)</li>
                  <li>Consimțământul tău (pentru marketing)</li>
                  <li>Interesul legitim (îmbunătățirea serviciilor)</li>
                  <li>Obligații legale</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-primary mb-4">5. Păstrarea datelor</h2>
                <p>
                  Păstrăm datele tale personale doar atât timp cât este necesar pentru scopurile 
                  pentru care au fost colectate sau conform cerințelor legale. Datele comenzilor 
                  sunt păstrate pentru perioada necesară conform legislației fiscale.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-primary mb-4">6. Drepturile tale</h2>
                <p>Ai următoarele drepturi privind datele tale personale:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dreptul de acces la datele tale</li>
                  <li>Dreptul de rectificare</li>
                  <li>Dreptul la ștergere („dreptul de a fi uitat”)</li>
                  <li>Dreptul la restricționarea prelucrării</li>
                  <li>Dreptul la portabilitatea datelor</li>
                  <li>Dreptul de opoziție</li>
                  <li>Dreptul de a retrage consimțământul</li>
                </ul>
                <p className="mt-4">
                  Pentru a exercita aceste drepturi, te rugăm să ne contactezi la:{' '}
                  <a href="mailto:contact@cofetaria-levante.ro" className="text-primary hover:underline">
                    contact@cofetaria-levante.ro
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-primary mb-4">7. Cookie-uri</h2>
                <p>
                  Site-ul nostru folosește cookie-uri pentru a îmbunătăți experiența ta. 
                  Poți gestiona preferințele cookie-urilor prin setările browser-ului tău 
                  sau prin banner-ul de consimțământ afișat pe site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-primary mb-4">8. Securitate</h2>
                <p>
                  Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja 
                  datele tale personale împotriva accesului neautorizat, pierderii sau distrugerii.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-primary mb-4">9. Contact</h2>
                <p>
                  Pentru întrebări sau solicitări privind protecția datelor, ne poți contacta la:
                </p>
                <div className="bg-secondary/20 p-6 rounded-lg mt-4">
                  <p className="font-medium text-primary mb-2">Cofetăria Levante</p>
                  <p className="text-accent">Email: <a href="mailto:contact@cofetaria-levante.ro" className="text-primary hover:underline">contact@cofetaria-levante.ro</a></p>
                  <p className="text-accent">Telefon: <a href="tel:0745380056" className="text-primary hover:underline">0745380056</a></p>
                  <p className="text-accent">Adresă: Șoseaua Berceni 8, București 041914</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-primary mb-4">10. Modificări</h2>
                <p>
                  Ne rezervăm dreptul de a actualiza această politică de confidențialitate. 
                  Vom notifica utilizatorii despre modificări semnificative prin intermediul site-ului.
                </p>
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

