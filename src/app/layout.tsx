import type { Metadata } from 'next';
import { Syne, DM_Sans } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

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
      <body className={`${syne.variable} ${dmSans.variable}`}>{children}</body>
    </html>
  );
}
