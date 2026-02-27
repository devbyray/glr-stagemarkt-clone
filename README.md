# GLR Stagemarkt Clone

![GLR Stagemarkt](./homepage.png)

Een moderne vacature website voor MBO studenten, gebouwd met Nuxt.js, Tailwind CSS en JSON-server. Geïnspireerd door Stagemarkt.nl met de visuele stijl van het Grafisch Lyceum Rotterdam.

> *Deze applicatie is ontwikkeld als onderdeel van een gastles voor het [Grafisch Lyceum Rotterdam](https://glr.nl) door [SBB](https://s-bb.nl). Design gemaakt in [PenPot](https://design.penpot.app/#/view?file-id=429aa6c1-d613-816d-8007-9757a31a90a3&page-id=429aa6c1-d613-816d-8007-9757a31a90a4&section=interactions&index=0&share-id=dd30d345-3fda-8112-8007-976ef5653b91)*

## ✨ Features

- 🔍 **Zoekfunctionaliteit** - Zoek vacatures op functie, bedrijf, locatie of beschrijving
- 📋 **Vacature overzicht** - Browse door alle beschikbare stageplekken
- 📄 **Detail pagina's** - Bekijk volledige vacature informatie
- 🎨 **GLR Brand Design** - Professioneel design in GLR huisstijl
- 📱 **Responsive** - Werkt perfect op desktop, tablet en mobiel
- ⚡ **Snel & Modern** - Gebouwd met Nuxt 4 en Vue 3

## 🚀 Quick Start

### Start de applicatie

```bash
# Alles in één keer starten (aanbevolen)
pnpm run dev:all
```

De applicatie is nu beschikbaar op:
- **Frontend**: http://localhost:3000
- **API**: http://localhost:3001/vacatures

### Of start servers apart

Terminal 1 - Nuxt dev server:
```bash
pnpm run dev
```

Terminal 2 - JSON-server API:
```bash
pnpm run api
```

## 📁 Project Structuur

```
├── components/          # Vue componenten (SearchBar, VacancyCard, etc)
├── composables/         # API logic (useVacancies)
├── layouts/            # Page layouts met header/footer
├── pages/              # Route pages (index, search, detail)
├── server/db.json      # JSON database met 18 vacatures
└── tailwind.config.js  # GLR brand kleuren
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
pnpm run dev:all    # Start Nuxt + JSON-server
pnpm run dev        # Alleen Nuxt (port 3000)
pnpm run api        # Alleen JSON-server (port 3001)
pnpm run build      # Build voor productie
```

## 🛠️ Tech Stack

- Nuxt.js 4 (Vue 3)
- Tailwind CSS 3
- JSON-server
- TypeScript

---

**Made for GLR students** ❤️

