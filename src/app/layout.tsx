import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "JP's Desk Setup | James Poulter",
  description: "The complete desk setup, gear, and software stack behind James Poulter's content creation, live streaming and AI workflow.",
  authors: [{ name: 'James Poulter' }],
  openGraph: {
    title: "JP's Desk Setup",
    description: "The complete desk setup, gear, and software stack behind James Poulter's content creation, live streaming and AI workflow.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@jamespoulter',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
