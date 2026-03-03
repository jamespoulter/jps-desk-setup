export interface Product {
  name: string;
  category: string;
  description: string;
  image: string;
  affiliateUrl: string;
  brandUrl: string;
}

export const PRODUCTS: Product[] = [
  // --- Cameras & Video ---
  { name: "Elgato Prompter", category: "cameras", description: "Teleprompter for on-camera reading. Read scripts and notes while maintaining eye contact with your audience.", image: "", affiliateUrl: "https://www.amazon.co.uk/dp/B0CN4FQ4GG?tag=YOUR-TAG", brandUrl: "https://www.elgato.com/uk/en/p/prompter" },
  { name: "Sony ZV-E10 + Sigma 16mm f/1.4", category: "cameras", description: "Primary camera for streaming and video. Beautiful bokeh and stunning low-light performance with the Sigma 16mm lens.", image: "", affiliateUrl: "https://www.amazon.co.uk/dp/B098JFRMGD?tag=YOUR-TAG", brandUrl: "https://www.sony.co.uk/interchangeable-lens-cameras/products/zv-e10" },
  { name: "Insta360 Link 2", category: "cameras", description: "AI-powered 4K webcam with gesture control. My backup camera and overhead camera for desk shots.", image: "", affiliateUrl: "https://www.amazon.co.uk/dp/B0DCLYGXFQ?tag=YOUR-TAG", brandUrl: "https://www.insta360.com/product/insta360-link2" },
  { name: "Elgato Low Profile Mic Arm", category: "cameras", description: "Low profile desk-mount arms for mic and camera. Two of these keep my setup clean and adjustable.", image: "", affiliateUrl: "https://www.amazon.co.uk/dp/B097376LKF?tag=YOUR-TAG", brandUrl: "https://www.elgato.com/uk/en/p/wave-mic-arm-lp" },

  // --- Audio ---
  { name: "RØDE PodMic (XLR)", category: "audio", description: "Professional broadcast-quality dynamic microphone. Rich, warm sound perfect for podcasting and streaming.", image: "", affiliateUrl: "https://www.amazon.co.uk/dp/B09N16WRTY?tag=YOUR-TAG", brandUrl: "https://rode.com/en/microphones/studio-condenser/podmic" },
  { name: "Elgato Wave XLR", category: "audio", description: "Premium USB audio interface for XLR mics. Includes capacitive mute button, gain dial and Elgato Wave Link software.", image: "", affiliateUrl: "https://www.amazon.co.uk/dp/B09GCMP7Y7?tag=YOUR-TAG", brandUrl: "https://www.elgato.com/uk/en/p/wave-xlr" },
  { name: "Apple HomePod Mini (×2)", category: "audio", description: "Desk speakers for monitoring and music. Stereo pair delivers surprisingly rich audio for their tiny size.", image: "", affiliateUrl: "https://www.amazon.co.uk/dp/B08LFV5JRC?tag=YOUR-TAG", brandUrl: "https://www.apple.com/uk/homepod-mini/" },

  // --- Monitors ---
  { name: "LG 32\" 4K Monitor", category: "monitors", description: "Primary display for editing and productivity. 32 inches of 4K real estate on a generic Amazon monitor arm.", image: "", affiliateUrl: "https://www.amazon.co.uk/dp/PLACEHOLDER?tag=YOUR-TAG", brandUrl: "https://www.lg.com/uk/monitors/" },
  { name: "Dell 27\" Monitor", category: "monitors", description: "Secondary rear-projection display for live streaming backgrounds. Connected via Chromecast for easy content casting.", image: "", affiliateUrl: "https://www.amazon.co.uk/dp/PLACEHOLDER?tag=YOUR-TAG", brandUrl: "https://www.dell.com/en-uk/shop/monitors" },

  // --- Peripherals ---
  { name: "NuPhy Air75", category: "peripherals", description: "Primary wireless mechanical keyboard. Ultra-slim, hot-swappable switches and gorgeous RGB lighting.", image: "", affiliateUrl: "https://www.amazon.co.uk/dp/PLACEHOLDER?tag=YOUR-TAG", brandUrl: "https://nuphy.com/products/air75-v2" },
  { name: "NuPhy Air60 v2", category: "peripherals", description: "Compact travel mechanical keyboard. 60% layout perfect for on-the-go productivity without compromise.", image: "", affiliateUrl: "https://www.amazon.co.uk/dp/PLACEHOLDER?tag=YOUR-TAG", brandUrl: "https://nuphy.com/products/air60-v2" },
  { name: "Logitech MX Keys", category: "peripherals", description: "Full-size backup keyboard. Perfect typing feel with smart backlighting and multi-device switching.", image: "", affiliateUrl: "https://www.amazon.co.uk/dp/B07W7KRBNM?tag=YOUR-TAG", brandUrl: "https://www.logitech.com/en-gb/products/keyboards/mx-keys-s.html" },
  { name: "Logitech MX Keys Mini for Mac", category: "peripherals", description: "Compact backup keyboard optimised for Mac. Minimalist footprint with all the MX Keys quality.", image: "", affiliateUrl: "https://www.amazon.co.uk/dp/B09DP9VHTG?tag=YOUR-TAG", brandUrl: "https://www.logitech.com/en-gb/products/keyboards/mx-keys-mini-for-mac.html" },
  { name: "Logitech MX Master 4", category: "peripherals", description: "Primary mouse with the middle button mapped to Wispr Flow for instant voice-to-text input. Ergonomic and precise.", image: "", affiliateUrl: "https://www.amazon.co.uk/dp/PLACEHOLDER?tag=YOUR-TAG", brandUrl: "https://www.logitech.com/en-gb/products/mice/mx-master-3s.html" },

  // --- Lighting ---
  { name: "Elgato Ring Light", category: "lighting", description: "Key light for video calls and streaming. Edge-lit design with app-controlled brightness and colour temperature.", image: "", affiliateUrl: "https://www.amazon.co.uk/dp/B0CLL2LDQ1?tag=YOUR-TAG", brandUrl: "https://www.elgato.com/uk/en/p/ring-light" },
  { name: "Aputure Amaran", category: "lighting", description: "Professional key light for studio-quality lighting. Powerful LED panel for interviews, streams and video production.", image: "", affiliateUrl: "https://www.amazon.co.uk/dp/PLACEHOLDER?tag=YOUR-TAG", brandUrl: "https://www.aputure.com/products/amaran" },
  { name: "Govee Light Bars & Bulbs", category: "lighting", description: "Ambient RGB lighting for desk aesthetic. App-controlled colour scenes that transform the workspace mood.", image: "", affiliateUrl: "https://www.amazon.co.uk/dp/PLACEHOLDER?tag=YOUR-TAG", brandUrl: "https://www.govee.com" },
  { name: "Tapo Smart Bulbs", category: "lighting", description: "Smart home connected ambient lighting. Easy to set up, energy efficient and controllable from anywhere.", image: "", affiliateUrl: "https://www.amazon.co.uk/dp/PLACEHOLDER?tag=YOUR-TAG", brandUrl: "https://www.tapo.com/uk/product/smart-light-bulb/" },

  // --- Control & Streaming ---
  { name: "Elgato Stream Deck MK2", category: "control", description: "Programmable control deck with 15 LCD keys for streaming shortcuts, app launching and smart home control.", image: "", affiliateUrl: "https://www.amazon.co.uk/dp/B09738CV2G?tag=YOUR-TAG", brandUrl: "https://www.elgato.com/uk/en/p/stream-deck-mk2-black" },
  { name: "Google Chromecast", category: "control", description: "Streams content to the rear-projection Dell monitor. Simple casting for backgrounds, dashboards and reference material.", image: "", affiliateUrl: "https://www.amazon.co.uk/dp/PLACEHOLDER?tag=YOUR-TAG", brandUrl: "https://store.google.com/gb/category/chromecast" },
  { name: "Norwii Presentation Clicker", category: "control", description: "Wireless presenter remote for keynotes. Reliable, ergonomic and with a built-in laser pointer for live presentations.", image: "", affiliateUrl: "https://www.amazon.co.uk/dp/PLACEHOLDER?tag=YOUR-TAG", brandUrl: "https://www.norwii.com" },

  // --- 3D Printing ---
  { name: "Bambu Lab A1 + AMS Lite", category: "printing", description: "Full-size multi-colour 3D printer with automatic material system. Fast, reliable prints for desk accessories and prototypes.", image: "", affiliateUrl: "https://www.amazon.co.uk/dp/PLACEHOLDER?tag=YOUR-TAG", brandUrl: "https://bambulab.com/en/a1" },
  { name: "Bambu Lab A1 Mini + AMS Lite", category: "printing", description: "Compact multi-colour 3D printer. Same great print quality in a smaller footprint for quick prints and small parts.", image: "", affiliateUrl: "https://www.amazon.co.uk/dp/PLACEHOLDER?tag=YOUR-TAG", brandUrl: "https://bambulab.com/en/a1-mini" },

  // --- Devices ---
  { name: "MacBook Pro M3 Pro 14\"", category: "devices", description: "Primary workstation powering everything. M3 Pro chip handles 4K video editing, streaming and AI workloads effortlessly.", image: "", affiliateUrl: "https://www.amazon.co.uk/dp/PLACEHOLDER?tag=YOUR-TAG", brandUrl: "https://www.apple.com/uk/macbook-pro/" },
  { name: "iPhone 17 Air", category: "devices", description: "Daily driver phone. Ultra-thin design with incredible camera system for quick content capture on the go.", image: "", affiliateUrl: "https://www.amazon.co.uk/dp/PLACEHOLDER?tag=YOUR-TAG", brandUrl: "https://www.apple.com/uk/iphone/" },
  { name: "Samsung Galaxy Z Fold 7", category: "devices", description: "Foldable phone for multitasking and content review. The large inner display is perfect for monitoring streams remotely.", image: "", affiliateUrl: "https://www.amazon.co.uk/dp/PLACEHOLDER?tag=YOUR-TAG", brandUrl: "https://www.samsung.com/uk/smartphones/galaxy-z-fold/" },
];
