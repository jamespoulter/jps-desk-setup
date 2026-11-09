export interface GiftLink {
  label: string;
  href: string;
  /** true for affiliate / referral links (adds rel="sponsored") */
  sponsored?: boolean;
}

export interface Gift {
  id: string;
  number: string;
  forWho: string;
  name: string;
  tagline: string;
  why: string[];
  price: string;
  /** Image URL, or "claude-card" to render the CSS gift card visual */
  image: string;
  imageAlt: string;
  imageFit?: 'contain' | 'cover';
  primary: GiftLink;
  secondary?: GiftLink;
  note?: string;
}

const AMAZON_TAG = 'jamespoulte0c-21';
const amazon = (asin: string) => `https://www.amazon.co.uk/dp/${asin}?tag=${AMAZON_TAG}`;

export const GIFTS: Gift[] = [
  {
    id: 'vibe-key',
    number: '01',
    forWho: 'For the vibe coder',
    name: 'Ulanzi AU05 Vibe Key',
    tagline: 'A push-to-talk button for talking to your computer.',
    why: [
      'Three keys, a control knob and a built-in mic in a magnetic aluminium bar that sits on your desk. Hold a key, say what you want, let go, and your words land wherever your cursor is.',
      'Map a key to your dictation tool and you have a proper "talk to Claude" button. It\'s the most fun I\'ve had with a desk gadget all year.',
    ],
    price: 'c. £65',
    image: 'https://m.media-amazon.com/images/I/61oME9ilrWL._AC_SL1500_.jpg',
    imageAlt: 'Ulanzi AU05 Vibe Key voice input keypad',
    primary: { label: 'Buy on Amazon', href: amazon('B0H7HHWFNS'), sponsored: true },
    secondary: {
      label: 'Ulanzi',
      href: 'https://www.ulanzi.com/en-gb/collections/creator-desk/products/au05-vibe-key-ai-voice-input-keypad-i018',
    },
  },
  {
    id: 'claude',
    number: '02',
    forWho: 'For the one ready to go deeper',
    name: 'A Claude Pro or Max gift',
    tagline: 'The AI I use every single day, gift-wrapped.',
    why: [
      'You can now gift 1, 3, 6 or 12 months of Claude. It arrives by email or as a link, so it works as a last-minute present too.',
      'Pro is the sweet spot for most people. Max is for the friend who\'s already building apps after the kids have gone to bed.',
    ],
    price: '1–12 months',
    image: 'claude-card',
    imageAlt: 'Claude gift subscription card',
    primary: { label: 'Gift Claude', href: 'https://claude.ai/gift' },
    secondary: { label: 'Compare plans', href: 'https://claude.com/pricing' },
    note: 'Not an affiliate link. I just love it.',
  },
  {
    id: 'wispr',
    number: '03',
    forWho: 'For the one who thinks out loud',
    name: 'Wispr Flow',
    tagline: 'Dictation that actually keeps up with you.',
    why: [
      'Talk naturally and Flow turns it into clean, punctuated text in any app, with the ums taken out. I\'ve mapped it to the middle button on my mouse.',
      'It now writes most of my emails, prompts and first drafts. Once you\'ve tried it, going back to the keyboard feels slow.',
    ],
    price: 'Free to start',
    image: '/images/software/wispr-flow.png',
    imageAlt: 'Wispr Flow app icon',
    primary: { label: 'Try Wispr Flow', href: 'https://wisprflow.ai/r?JAMES69', sponsored: true },
    note: 'My referral link.',
  },
  {
    id: 'plaud',
    number: '04',
    forWho: 'For the one in back-to-back meetings',
    name: 'Plaud Note Pro',
    tagline: 'An AI recorder that lives on the back of your phone.',
    why: [
      'Credit-card thin and MagSafe-compatible, so it clips to the back of your phone. It records meetings and calls, then hands you a transcript and summary.',
      'Prefer to wear it? The Plaud NotePin S does the same job as a pin, clip or wristband. Either way, always ask before you press record.',
    ],
    price: 'c. £169',
    image: 'https://m.media-amazon.com/images/I/61szWLRVVvL._AC_SL1500_.jpg',
    imageAlt: 'Plaud Note Pro AI voice recorder',
    primary: { label: 'Note Pro on Amazon', href: amazon('B0FYQ4Y2ZZ'), sponsored: true },
    secondary: { label: 'NotePin S (c. £159)', href: amazon('B0DL9WQ4Z4'), sponsored: true },
  },
  {
    id: 'book',
    number: '05',
    forWho: 'For the boss, the team, or yourself',
    name: 'AI at Work',
    tagline: 'My book: how to build a full stack organisation.',
    why: [
      'Published by Bloomsbury, it\'s the practical playbook I wish I\'d had when I started helping organisations make sense of AI. It\'s built around frameworks, not hype.',
      'It\'s written for leaders and teams who want to move past scattered experiments and work out what AI actually changes about how we work.',
    ],
    price: 'c. £19 hardback',
    image: 'https://m.media-amazon.com/images/I/81O2RMkG0YL._SL1500_.jpg',
    imageAlt: 'AI at Work by James Poulter, book cover',
    primary: { label: 'Buy on Amazon', href: amazon('1350597929'), sponsored: true },
    secondary: { label: 'More about the book', href: 'https://www.jamespoulter.co.uk/aiatwork' },
  },
];
