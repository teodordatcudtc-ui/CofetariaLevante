import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-accent text-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-serif text-xl mb-4 text-white">Cofetăria Levante</h3>
            <p className="text-secondary text-sm">
              Torturi și prăjituri artizanale de calitate superioară, create cu pasiune și ingrediente premium.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Linkuri rapide</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-secondary hover:text-white transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="/meniu" className="text-secondary hover:text-white transition-colors">
                  Produse
                </Link>
              </li>
              <li>
                <Link href="/despre" className="text-secondary hover:text-white transition-colors">
                  Despre
                </Link>
              </li>
              <li>
                <Link href="/evenimente" className="text-secondary hover:text-white transition-colors">
                  Evenimente
                </Link>
              </li>
              <li>
                <Link href="/comanda" className="text-secondary hover:text-white transition-colors">
                  Comandă
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-secondary">
              <li>
                <a href="tel:0745380056" className="hover:text-white transition-colors">
                  📞 0745380056
                </a>
              </li>
              <li>
                <address className="not-italic">
                  Șoseaua Berceni 8<br />
                  București 041914
                </address>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg mb-4">Urmărește-ne</h4>
            <a
              href="https://www.facebook.com/p/Levante-Cake-Bakery-Production-100057281596464/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors text-sm inline-flex items-center space-x-2"
            >
              <span>Facebook</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-secondary">
            <p>&copy; {new Date().getFullYear()} Cofetăria Levante. Toate drepturile rezervate.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Confidențialitate
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Termeni
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

