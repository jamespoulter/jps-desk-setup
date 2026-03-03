export interface SoftwareItem {
  name: string;
  description: string;
  url: string;
  tag: 'free' | 'paid' | 'freemium';
  tagLabel: string;
}

export interface SoftwareTab {
  tab: string;
  items: SoftwareItem[];
}

export const SOFTWARE: SoftwareTab[] = [
  {
    tab: "Live Streaming & Video",
    items: [
      { name: "Ecamm Live", description: "Professional live streaming and recording studio for Mac", url: "https://www.ecamm.com", tag: "paid", tagLabel: "Paid" },
      { name: "Elgato Camera Hub", description: "Camera control and configuration app for all Elgato cameras", url: "https://www.elgato.com/uk/en/s/downloads", tag: "free", tagLabel: "Free" },
      { name: "Elgato Stream Deck App", description: "Stream Deck button customisation and automation workflows", url: "https://www.elgato.com/uk/en/s/downloads", tag: "free", tagLabel: "Free" },
    ]
  },
  {
    tab: "Productivity",
    items: [
      { name: "Notion", description: "All-in-one workspace for notes, projects, wikis and team collaboration", url: "https://www.notion.so", tag: "freemium", tagLabel: "Freemium" },
      { name: "Notion Calendar", description: "Smart calendar deeply integrated with Notion workspace and tasks", url: "https://www.notion.so/product/calendar", tag: "free", tagLabel: "Free" },
      { name: "Notion Mail", description: "Email client built into the Notion ecosystem for unified workflow", url: "https://www.notion.so/product/mail", tag: "freemium", tagLabel: "Freemium" },
    ]
  },
  {
    tab: "AI Tools & Tech",
    items: [
      { name: "Claude / Claude Code", description: "AI assistant and AI-powered coding agent by Anthropic. My primary AI tool for everything.", url: "https://claude.ai", tag: "freemium", tagLabel: "Freemium" },
      { name: "Cursor", description: "AI-first code editor for rapid development and vibe coding sessions", url: "https://cursor.sh", tag: "freemium", tagLabel: "Freemium" },
      { name: "Wispr Flow", description: "Voice-to-text dictation tool — mapped to my MX Master 4 mouse button for instant input", url: "https://www.wispr.ai", tag: "paid", tagLabel: "Paid" },
    ]
  },
];

export const SOFTWARE_ICONS: Record<string, string> = {
  'Live Streaming & Video': 'streaming',
  'Productivity': 'productivity',
  'AI Tools & Tech': 'ai',
};

export const SOFTWARE_COLORS: Record<string, string> = {
  'Live Streaming & Video': 'rgba(232, 78, 27, 0.12)',
  'Productivity': 'rgba(59, 130, 246, 0.12)',
  'AI Tools & Tech': 'rgba(168, 85, 247, 0.12)',
};

export const SOFTWARE_STROKE: Record<string, string> = {
  'Live Streaming & Video': '#e84e1b',
  'Productivity': '#3b82f6',
  'AI Tools & Tech': '#a855f7',
};
