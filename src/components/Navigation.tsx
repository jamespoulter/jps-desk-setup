'use client';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
    );

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: '#setup', label: 'Setup' },
    { href: '#gear', label: 'Gear' },
    { href: '#software', label: 'Software' },
    { href: '#reels', label: 'Reels' },
    { href: '#book', label: 'AI at Work' },
  ];

  return (
    <>
      <nav className="nav" id="nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo">JP<span>&apos;</span>s Desk Setup</a>
          <ul className="nav-links">
            {navItems.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={activeSection === item.href.slice(1) ? 'active' : ''}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://www.jamespoulter.co.uk"
                target="_blank"
                rel="noopener"
                className="nav-external"
              >
                jamespoulter.co.uk ↗
              </a>
            </li>
          </ul>
          <button
            className={`hamburger${isMenuOpen ? ' open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${isMenuOpen ? ' open' : ''}`}>
        {navItems.map(item => (
          <a
            key={item.href}
            href={item.href}
            className="mobile-link"
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
        <a
          href="https://www.jamespoulter.co.uk"
          target="_blank"
          rel="noopener"
        >
          jamespoulter.co.uk ↗
        </a>
      </div>
    </>
  );
}
