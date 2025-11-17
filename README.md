# Cofetăria Levante - Site Web

Site web complet funcțional pentru Cofetăria Levante, construit cu Next.js 14, React, TypeScript și Tailwind CSS.

## 🚀 Tehnologii

- **Next.js 14** - Framework React cu App Router
- **TypeScript** - Tipizare statică
- **Tailwind CSS** - Stilizare utility-first
- **Framer Motion** - Animații și tranziții
- **React Intersection Observer** - Scroll reveal animations

## 📋 Cerințe

- Node.js 18+ 
- npm sau yarn

## 🛠️ Instalare

1. **Clonează repository-ul** (sau navighează în directorul proiectului)

2. **Instalează dependențele:**
```bash
npm install
```

## 🏃 Rulare Locală

Pentru a rula site-ul în modul de dezvoltare:

```bash
npm run dev
```

Site-ul va fi disponibil la `http://localhost:3000`

## 🏗️ Build pentru Producție

Pentru a construi site-ul pentru producție:

```bash
npm run build
```

Pentru a rula build-ul de producție local:

```bash
npm start
```

## 📁 Structura Proiectului

```
cofetaria-lavante/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Pagina principală
│   ├── meniu/             # Pagina meniu
│   ├── comanda/           # Pagina comandă
│   ├── despre/            # Pagina despre
│   ├── evenimente/        # Pagina evenimente
│   ├── privacy/           # Politica de confidențialitate
│   ├── terms/             # Termeni și condiții
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Stiluri globale
├── components/             # Componente React reutilizabile
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── FeaturedProducts.tsx
│   ├── Testimonials.tsx
│   ├── CookieConsent.tsx
│   └── StickyCTA.tsx
├── public/                # Fișiere statice
│   └── manifest.json      # PWA manifest
└── package.json
```

## 🌐 Deployment

### Vercel (Recomandat)

1. Conectează repository-ul GitHub cu Vercel
2. Vercel va detecta automat Next.js și va configura build-ul
3. Site-ul va fi live automat după push

**Comandă Vercel CLI:**
```bash
npm i -g vercel
vercel
```

### Netlify

1. Conectează repository-ul cu Netlify
2. Setează build command: `npm run build`
3. Setează publish directory: `.next`

**Netlify CLI:**
```bash
npm i -g netlify-cli
netlify deploy --prod
```

### Alte Platforme

Pentru deployment pe alte platforme (AWS, DigitalOcean, etc.), urmează instrucțiunile standard pentru Next.js:

1. Rulează `npm run build`
2. Rulează `npm start` pentru server Node.js
3. Sau exportează static cu `next export` (dacă nu folosești server-side features)

## 📝 Configurare

### Variabile de Mediu

Creează un fișier `.env.local` pentru variabile de mediu (dacă este necesar):

```env
NEXT_PUBLIC_SITE_URL=https://cofetaria-levante.ro
```

### Imagini

Înlocuiește placeholder-urile pentru imagini cu imagini reale:

- `/public/hero-cake.jpg` - Imagine hero principală
- `/public/products/` - Imagini produse
- `/public/icon-192.png` și `/public/icon-512.png` - Iconițe PWA

**Sugestii pentru imagini:**
- Hero: Close-up tort cu glazură lucioasă, lumină naturală, stil editorial
- Produse: Imagini clare, fundal neutru, iluminare profesională
- Despre: Fotografii din bucătărie, proces de creare, look premium

## ✨ Funcționalități

- ✅ Design responsive (mobile-first)
- ✅ Animații premium (parallax, scroll reveal, card flip)
- ✅ SEO optimizat (meta tags, schema.org, sitemap)
- ✅ Formulare cu validare client-side
- ✅ Cookie consent banner funcțional
- ✅ Sticky CTA pentru mobile
- ✅ Google Maps integrat
- ✅ PWA-ready (manifest.json)
- ✅ Accesibilitate (ARIA labels, semantic HTML)

## 📞 Contact

Pentru întrebări sau suport:
- Email: contact@cofetaria-levante.ro
- Telefon: 0745380056
- Adresă: Șoseaua Berceni 8, București 041914

## 📄 Licență

© 2024 Cofetăria Levante. Toate drepturile rezervate.

