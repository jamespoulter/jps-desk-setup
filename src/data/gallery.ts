export interface Hotspot {
  x: number;       // percentage from left
  y: number;       // percentage from top
  label: string;   // product name tooltip
  productSlug: string; // slug for scrolling to product card
}

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  hotspots?: Hotspot[];
}

function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export const GALLERY: GalleryItem[] = [
  {
    src: "/images/gallery/full-desk-setup.jpg",
    alt: "Full desk setup with ultrawide monitor, ring light, mechanical keyboard, and laptop",
    caption: "The Full Setup",
    hotspots: [
      { x: 50, y: 14, label: "Elgato Ring Light", productSlug: slugify("Elgato Ring Light") },
      { x: 40, y: 40, label: "LG 32\" 4K Monitor", productSlug: slugify("LG 32 4K Monitor") },
      { x: 64, y: 26, label: "Elgato Prompter", productSlug: slugify("Elgato Prompter") },
      { x: 78, y: 52, label: "MacBook Pro M3 Pro 14\"", productSlug: slugify("MacBook Pro M3 Pro 14") },
      { x: 37, y: 74, label: "NuPhy Air75", productSlug: slugify("NuPhy Air75") },
      { x: 53, y: 74, label: "Logitech MX Master 4", productSlug: slugify("Logitech MX Master 4") },
      { x: 24, y: 56, label: "RØDE PodMic", productSlug: slugify("RODE PodMic XLR") },
      { x: 31, y: 62, label: "Elgato Stream Deck MK2", productSlug: slugify("Elgato Stream Deck MK2") },
    ],
  },
  {
    src: "/images/gallery/desk-side-view.jpg",
    alt: "Side angle of desk showing monitor, teleprompter, microphone, and laptop",
    caption: "Camera & Prompter",
    hotspots: [
      { x: 42, y: 10, label: "Elgato Ring Light", productSlug: slugify("Elgato Ring Light") },
      { x: 36, y: 38, label: "LG 32\" 4K Monitor", productSlug: slugify("LG 32 4K Monitor") },
      { x: 62, y: 20, label: "Elgato Prompter", productSlug: slugify("Elgato Prompter") },
      { x: 74, y: 50, label: "MacBook Pro M3 Pro 14\"", productSlug: slugify("MacBook Pro M3 Pro 14") },
      { x: 28, y: 70, label: "NuPhy Air75", productSlug: slugify("NuPhy Air75") },
      { x: 44, y: 70, label: "Logitech MX Master 4", productSlug: slugify("Logitech MX Master 4") },
      { x: 20, y: 44, label: "RØDE PodMic", productSlug: slugify("RODE PodMic XLR") },
    ],
  },
  {
    src: "/images/gallery/the-workspace.jpg",
    alt: "Wide angle view of the complete workspace with standing desk, shelving, and ambient lighting",
    caption: "The Workspace",
    hotspots: [
      { x: 48, y: 10, label: "Elgato Ring Light", productSlug: slugify("Elgato Ring Light") },
      { x: 42, y: 34, label: "LG 32\" 4K Monitor", productSlug: slugify("LG 32 4K Monitor") },
      { x: 60, y: 22, label: "Elgato Prompter", productSlug: slugify("Elgato Prompter") },
      { x: 68, y: 48, label: "MacBook Pro M3 Pro 14\"", productSlug: slugify("MacBook Pro M3 Pro 14") },
      { x: 34, y: 64, label: "NuPhy Air75", productSlug: slugify("NuPhy Air75") },
      { x: 8, y: 38, label: "Govee Light Bars", productSlug: slugify("Govee Light Bars Bulbs") },
    ],
  },
  {
    src: "/images/gallery/3d-printer-station.jpg",
    alt: "Bambu Lab A1 3D printer with Elegoo filament spools on wooden cabinet",
    caption: "3D Printing Station",
    hotspots: [
      { x: 62, y: 38, label: "Bambu Lab A1 + AMS Lite", productSlug: slugify("Bambu Lab A1 AMS Lite") },
      { x: 12, y: 18, label: "Bambu Lab A1 Mini", productSlug: slugify("Bambu Lab A1 Mini AMS Lite") },
    ],
  },
  {
    src: "/images/gallery/display-shelf.jpg",
    alt: "Display shelf with LEGO Technic Bugatti, Star Wars figures, BB-8, and Google Nest Hub",
    caption: "Display Shelf",
    hotspots: [
      { x: 50, y: 8, label: "Govee Light Bars & Bulbs", productSlug: slugify("Govee Light Bars Bulbs") },
    ],
  },
  {
    src: "/images/gallery/entertainment-area.jpg",
    alt: "TV entertainment area with red LED backlighting, astronaut figurines, and collectibles",
    caption: "Entertainment Corner",
    hotspots: [
      { x: 22, y: 18, label: "Govee Light Bars & Bulbs", productSlug: slugify("Govee Light Bars Bulbs") },
    ],
  },
];
