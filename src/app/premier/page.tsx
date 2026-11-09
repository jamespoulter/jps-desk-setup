import type { Metadata } from 'next';
import { Fraunces } from 'next/font/google';
import { GIFTS, type Gift, type GiftLink } from '@/data/giftGuide';
import './premier.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-festive',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "JP's Christmas Tech Gift Guide | Premier Christian Radio",
  description:
    'Five AI and tech gifts I recommended as guest editor of the Premier Christian Radio breakfast show.',
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  openGraph: {
    title: "JP's Christmas Tech Gift Guide",
    description: 'Five AI and tech gifts I recommended as guest editor of the Premier Christian Radio breakfast show.',
    type: 'website',
  },
};

function LinkButton({ link, variant }: { link: GiftLink; variant: 'primary' | 'secondary' }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel={link.sponsored ? 'noopener noreferrer sponsored' : 'noopener noreferrer'}
      className={variant === 'primary' ? 'xm-btn xm-btn-primary' : 'xm-btn xm-btn-secondary'}
    >
      {link.label}
      {variant === 'primary' && (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      )}
    </a>
  );
}

function ClaudeCard() {
  return (
    <div className="xm-claude-card" role="img" aria-label="Claude gift subscription card">
      <div className="xm-claude-ribbon-v" />
      <div className="xm-claude-ribbon-h" />
      <div className="xm-claude-bow" aria-hidden="true">
        <span /><span />
      </div>
      <div className="xm-claude-text">
        <span className="xm-claude-word">Claude</span>
        <span className="xm-claude-plans">Pro · Max</span>
        <span className="xm-claude-sub">Gift subscription</span>
      </div>
    </div>
  );
}

function GiftCard({ gift }: { gift: Gift }) {
  return (
    <article className="xm-gift" id={gift.id}>
      <div className={`xm-gift-media ${gift.image === 'claude-card' ? 'is-claude' : ''}`}>
        <span className="xm-gift-number">No. {gift.number}</span>
        {gift.image === 'claude-card' ? (
          <ClaudeCard />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={gift.image} alt={gift.imageAlt} loading="lazy" className={gift.id === 'wispr' ? 'is-icon' : ''} />
        )}
      </div>
      <div className="xm-gift-body">
        <span className="xm-tag">
          <span className="xm-tag-hole" aria-hidden="true" />
          {gift.forWho}
        </span>
        <h2 className="xm-gift-name">{gift.name}</h2>
        <p className="xm-gift-tagline">{gift.tagline}</p>
        {gift.why.map((p, i) => (
          <p key={i} className="xm-gift-why">{p}</p>
        ))}
        <div className="xm-gift-footer">
          <span className="xm-price">{gift.price}</span>
          <div className="xm-gift-ctas">
            <LinkButton link={gift.primary} variant="primary" />
            {gift.secondary && <LinkButton link={gift.secondary} variant="secondary" />}
          </div>
        </div>
        {gift.note && <p className="xm-note">{gift.note}</p>}
      </div>
    </article>
  );
}

export default function PremierPage() {
  return (
    <main className={`xm ${fraunces.variable}`}>
      <div className="xm-snow" aria-hidden="true" />
      <div className="xm-snow xm-snow-2" aria-hidden="true" />

      <header className="xm-hero">
        <div className="xm-hero-lights" aria-hidden="true">
          {Array.from({ length: 18 }).map((_, i) => (
            <span key={i} style={{ animationDelay: `${(i % 6) * 0.35}s` }} />
          ))}
        </div>
        <p className="xm-eyebrow">As heard on Premier Christian Radio · Breakfast Show</p>
        <h1 className="xm-title">
          Five gifts for the
          <br />
          <em>AI-curious</em>
        </h1>
        <p className="xm-lede">
          I&apos;m guest editing the breakfast show on Premier Christian Radio, and I promised a list. These are the
          five bits of tech I&apos;d wrap for anyone who wants to work a little smarter in the new year. Every one of
          them is something I actually use.
        </p>
        <p className="xm-sign">Merry Christmas, JP</p>
        <nav className="xm-jump" aria-label="Jump to a gift">
          {GIFTS.map((g) => (
            <a key={g.id} href={`#${g.id}`}>
              <span>{g.number}</span> {g.name}
            </a>
          ))}
        </nav>
      </header>

      <section className="xm-list" aria-label="Gift guide">
        {GIFTS.map((g) => (
          <GiftCard key={g.id} gift={g} />
        ))}
      </section>

      <footer className="xm-footer">
        <div className="xm-footer-star" aria-hidden="true">✦</div>
        <p className="xm-footer-cta">
          Want to see the rest of my setup?{' '}
          <a href="/">Take a tour of my desk</a> or say hello at{' '}
          <a href="https://www.jamespoulter.co.uk" target="_blank" rel="noopener noreferrer">jamespoulter.co.uk</a>.
        </p>
        <p className="xm-disclosure">
          Some links on this page are affiliate or referral links. As an Amazon Associate I earn from qualifying
          purchases, at no extra cost to you. Prices are approximate and were correct when this page was published.
        </p>
      </footer>
    </main>
  );
}
