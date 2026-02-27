# GLR Stagemarkt Clone

![GLR Stagemarkt](./homepage.png)

Een moderne vacature website voor MBO studenten, gebouwd met Nuxt.js en Tailwind CSS. Geïnspireerd door Stagemarkt.nl met de visuele stijl van het Grafisch Lyceum Rotterdam.

> *Deze applicatie is ontwikkeld als onderdeel van een gastles voor het [Grafisch Lyceum Rotterdam](https://glr.nl) door [SBB](https://s-bb.nl). Design gemaakt in [PenPot](https://design.penpot.app/#/view?file-id=429aa6c1-d613-816d-8007-9757a31a90a3&page-id=429aa6c1-d613-816d-8007-9757a31a90a4&section=interactions&index=0&share-id=dd30d345-3fda-8112-8007-976ef5653b91)*

## ✨ Features

- 🔍 **Zoekfunctionaliteit** - Zoek vacatures op functie, bedrijf, locatie of beschrijving
- 📋 **Vacature overzicht** - Browse door alle beschikbare stageplekken
- 📄 **Detail pagina's** - Bekijk volledige vacature informatie
- 🎨 **GLR Brand Design** - Professioneel design in GLR huisstijl
- 📱 **Responsive** - Werkt perfect op desktop, tablet en mobiel
- ⚡ **Snel & Modern** - Gebouwd met Nuxt 4 en Vue 3
- 🚀 **Vercel Ready** - API endpoints in Nuxt voor eenvoudige deployment
- 📘 **TypeScript** - Volledige type safety van API tot frontend

## 🚀 Quick Start

### Start de applicatie

```bash
pnpm run dev
```

De applicatie is nu beschikbaar op:
- **Frontend & API**: http://localhost:3000
- **API Endpoints**: 
  - `GET /api/vacatures` - Alle vacatures
  - `GET /api/vacatures/:id` - Specifieke vacature

## 📁 Project Structuur

```
├── app/
│   ├── components/         # Vue componenten (SearchBar, VacancyCard, etc)
│   ├── composables/        # API logic (useVacancies.ts) met TypeScript
│   ├── layouts/           # Page layouts met header/footer
│   └── pages/             # Route pages (index, search, detail)
├── server/
│   ├── api/vacatures/     # Nuxt API endpoints (TypeScript)
│   ├── data.ts            # Vacatures data (18 stageplekken)
│   └── types.ts           # TypeScript interfaces (Vacancy)
└── tailwind.config.js     # GLR brand kleuren
```

## 🎨 GLR Brand Kleuren

Gebaseerd op de authentieke glr.nl website:

- **Primary Lime Green**: `#8fe507` - Officiële GLR lime-groene kleur
- **Black**: `#000000` - Voor tekst, knoppen en sterke accenten  
- **White**: `#ffffff` - Voor achtergronden en contrast
- **Bright Lime**: `#baed00` - Voor banners en call-to-actions

De styling volgt het karakteristieke GLR design met felle lime-groene accenten, strakke zwarte elementen en een modern, bold typografie.

## 📝 Scripts

```bash
pnpm run dev        # Start development server
pnpm run build      # Build voor productie
pnpm run generate   # Generate static site
pnpm run preview    # Preview production build
```

## 🛠️ Tech Stack

- Nuxt.js 4 (Vue 3)
- Tailwind CSS 3
- Nuxt Server API Routes
- TypeScript

## 🌐 Deployment

De applicatie is klaar voor deployment op Vercel:

1. Push je code naar GitHub
2. Importeer het project in Vercel
3. Vercel detecteert automatisch de Nuxt configuratie
4. Deploy! 🚀

De API endpoints (`/api/vacatures`) werken automatisch op Vercel als serverless functions.

---

**Made for GLR students** ❤️


