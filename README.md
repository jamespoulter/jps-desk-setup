# JP's Desk Setup

A single-page website showcasing James Poulter's desk setup, gear, software stack, and a call-to-action for the upcoming book *AI at Work*.

**Live site concept:** Dark, modern aesthetic matching [jamespoulter.co.uk](https://www.jamespoulter.co.uk)

Built with **Next.js 15**, **React 19**, and **TypeScript**. Statically exported for easy deployment anywhere.

---

## Quick Start

```bash
npm install
npm run dev
# Visit http://localhost:3000
```

### Production Build

```bash
npm run build
# Static output in /out — deploy to any static host
```

---

## Project Structure

```
JP's Desk Setup/
├── src/
│   ├── app/
│   │   ├── globals.css          # All styles (variables, components, responsive)
│   │   ├── layout.tsx           # Root layout with metadata
│   │   └── page.tsx             # Main page composing all sections
│   ├── components/
│   │   ├── Navigation.tsx       # Sticky nav with hamburger + active section
│   │   ├── Hero.tsx             # Hero banner with animated orbs
│   │   ├── SectionHeader.tsx    # Numbered section headings
│   │   ├── ScrollAnimator.tsx   # Scroll-triggered animation wrapper
│   │   ├── GallerySection.tsx   # Photo gallery grid
│   │   ├── GearSection.tsx      # Product cards with category filter
│   │   ├── SoftwareSection.tsx  # Tabbed software stack
│   │   ├── BookSection.tsx      # AI at Work book CTA
│   │   ├── Footer.tsx           # Footer with social links
│   │   ├── Lightbox.tsx         # Fullscreen image lightbox
│   │   └── LightboxContext.tsx  # Shared lightbox state provider
│   ├── data/
│   │   ├── products.ts          # 27 products across 8 categories
│   │   ├── categories.ts        # Category definitions
│   │   ├── software.ts          # Software stack (3 tabs, 9 items)
│   │   ├── gallery.ts           # Gallery image data
│   │   └── icons.tsx            # SVG icons as React components
│   └── hooks/
│       └── useIntersectionObserver.ts  # Scroll animation hook
├── public/images/               # Add your own images here
│   ├── setup/                   # Desk gallery photos
│   ├── products/                # Individual product images
│   ├── software/                # Software logos/icons
│   └── book/                    # AI at Work cover image
├── index.html                   # Original single-file version (archived)
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

---

## Editing Products

Product data lives in `src/data/products.ts`:

```typescript
{
  name: "Elgato Prompter",
  category: "cameras",        // Must match a CATEGORIES id
  description: "Teleprompter for on-camera reading",
  image: "",                  // Path or URL to product image
  affiliateUrl: "https://www.amazon.co.uk/dp/PLACEHOLDER?tag=YOUR-TAG",
  brandUrl: "https://www.elgato.com/..."
}
```

| Field | Description |
|-------|-------------|
| `name` | Product display name |
| `category` | One of: `cameras`, `audio`, `monitors`, `peripherals`, `lighting`, `control`, `printing`, `devices` |
| `description` | Short description (1 line) |
| `image` | Image path or URL (leave `""` for gradient placeholder) |
| `affiliateUrl` | Amazon affiliate link |
| `brandUrl` | Manufacturer product page |

Categories are defined in `src/data/categories.ts`. Software items in `src/data/software.ts`.

---

## Affiliate Links

All Amazon links use this format:

```
https://www.amazon.co.uk/dp/PRODUCT_ID?tag=YOUR-TAG
```

**To set your affiliate tag**, find-and-replace `YOUR-TAG` across the data files with your actual Amazon Associates tag.

All affiliate links include `rel="noopener noreferrer sponsored"` for compliance.

---

## Deployment

### Vercel (recommended)
1. Push to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Deploy — zero config needed

### Netlify
1. Run `npm run build`
2. Deploy the `out/` directory

### GitHub Pages
1. Run `npm run build`
2. Push the `out/` folder contents to your GitHub Pages branch

---

## Tech Stack

- **Next.js 15** — App Router with static export
- **React 19** — Server and Client Components
- **TypeScript** — Full type safety
- **Global CSS** — Custom properties design system
- **Mobile-first** responsive design (breakpoints at 768px and 1024px)
- **Scroll animations** via Intersection Observer
- **Lightbox** with keyboard navigation (Escape, Arrow keys)
- **Category filtering** on product cards
- **Tabbed interface** for software stack

---

## License

Copyright 2024-2026 Poulter Ventures. All rights reserved.
