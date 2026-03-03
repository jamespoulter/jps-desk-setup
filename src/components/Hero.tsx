export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
      </div>
      <div className="hero-content">
        <span className="hero-label">Content Creator &bull; Speaker &bull; AI Futurist</span>
        <h1 className="hero-title">JP&apos;s Desk<br /><span className="accent">Setup</span></h1>
        <p className="hero-subtitle">The tools, tech &amp; software powering my content creation, live streaming and AI workflow.</p>
        <a href="#gear" className="hero-cta">
          Explore the Kit
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
        </a>
      </div>
      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
