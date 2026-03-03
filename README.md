# JP's Desk Setup

A single-page website showcasing James Poulter's desk setup, gear, software stack, and a call-to-action for the upcoming book *AI at Work*.

**Live site concept:** Dark, modern aesthetic matching [jamespoulter.co.uk](https://www.jamespoulter.co.uk)

---

## Quick Start

Open `index.html` directly in a browser — no build step or dependencies required.

Or serve locally:

```bash
python3 -m http.server 3000
# Visit http://localhost:3000
```

---

## Editing Products

All product data lives at the top of the `<script>` block in `index.html`. Find the `PRODUCTS` array:

```javascript
const PRODUCTS = [
  {
    name: "Elgato Prompter",
    category: "cameras",       // Must match a CATEGORIES key
    description: "Teleprompter for on-camera reading",
    image: "",                 // Path or URL to product image
    affiliateUrl: "https://www.amazon.co.uk/dp/PLACEHOLDER?tag=YOUR-TAG",
    brandUrl: "https://www.elgato.com/..."
  },
  // ...
];
```

### To add a product

Add a new object to the `PRODUCTS` array. Required fields:

| Field | Description |
|-------|-------------|
| `name` | Product display name |
| `category` | One of: `cameras`, `audio`, `monitors`, `peripherals`, `lighting`, `control`, `printing`, `devices` |
| `description` | Short description (1 line) |
| `image` | Image path or URL (leave `""` for gradient placeholder) |
| `affiliateUrl` | Amazon affiliate link |
| `brandUrl` | Manufacturer product page |

### To remove a product

Delete the corresponding object from the `PRODUCTS` array.

### To add a new category

1. Add the category to the `CATEGORIES` object:
   ```javascript
   const CATEGORIES = {
     // ...existing categories
     newcategory: "Display Label"
   };
   ```
2. Use the new category key in your product objects.

---

## Editing Software

Find the `SOFTWARE` array below the products data:

```javascript
const SOFTWARE = [
  {
    tab: "Live Streaming & Video",
    items: [
      { name: "Ecamm Live", description: "...", url: "https://...", tag: "paid", tagLabel: "Paid" },
      // ...
    ]
  },
  // ...
];
```

- `tag` controls the pill color: `paid`, `free`, or `freemium`
- `tagLabel` is the display text for the pill

---

## Adding Setup Photos

Find the `GALLERY` array:

```javascript
const GALLERY = [
  { src: "", alt: "Full desk overview", caption: "The Complete Setup" },
  // ...
];
```

Replace the empty `src` values with paths to your images:

```javascript
{ src: "images/setup/desk-overview.jpg", alt: "Full desk overview", caption: "The Complete Setup" }
```

Recommended image sizes: **1200x800px** or larger for the lightbox to look sharp.

---

## Affiliate Links

All Amazon links use this format:

```
https://www.amazon.co.uk/dp/PRODUCT_ID?tag=YOUR-TAG
```

**To set your affiliate tag**, find-and-replace `YOUR-TAG` across the file with your actual Amazon Associates tag.

All affiliate links include `rel="noopener noreferrer sponsored"` for compliance.

---

## Deployment

### Netlify (drag & drop)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the project folder onto the page
3. Done — you'll get a live URL

### GitHub Pages
1. Push the repo to GitHub
2. Go to **Settings → Pages**
3. Set source to the branch containing `index.html`
4. Site will be live at `https://username.github.io/repo-name`

### Existing Next.js site
Copy `index.html` into your Next.js project's `public/` folder. It will be accessible at `/index.html` (or rename as needed).

---

## Project Structure

```
JP's Desk Setup/
├── index.html          # Entire website (HTML + CSS + JS)
├── README.md           # This file
└── images/             # Add your own images here
    ├── setup/          # Desk gallery photos
    ├── products/       # Individual product images
    ├── software/       # Software logos/icons
    └── book/           # AI at Work cover image
```

---

## Tech Details

- **Zero dependencies** — no CDN links, no npm, no build step
- **Single file** — all HTML, CSS, and JS in one `index.html`
- **Mobile-first** responsive design (breakpoints at 768px and 1024px)
- **Scroll animations** via Intersection Observer
- **Lightbox** with keyboard navigation (Escape, Arrow keys)
- **Category filtering** on product cards
- **Tabbed interface** for software stack

---

## License

Copyright 2024–2026 Poulter Ventures. All rights reserved.
