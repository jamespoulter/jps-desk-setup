'use client';
import { useState, useRef, useCallback } from 'react';
import { PRODUCTS } from '@/data/products';
import { CATEGORIES } from '@/data/categories';
import { ICONS } from '@/data/icons';
import ScrollAnimator from '@/components/ScrollAnimator';
import SectionHeader from '@/components/SectionHeader';

export default function GearSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const hiddenCards = useRef<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleFilter = useCallback((category: string) => {
    setActiveFilter(category);

    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const match = category === 'all' || PRODUCTS[i].category === category;

      if (match) {
        hiddenCards.current.delete(i);
        card.style.display = '';
        card.style.opacity = '';
        card.style.transform = '';
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
          if (card) {
            card.style.display = 'none';
            hiddenCards.current.add(i);
          }
        }, 300);
      }
    });
  }, []);

  const getCategoryClass = (category: string) => {
    return `cat-${category}`;
  };

  return (
    <section className="section" id="gear">
      <ScrollAnimator>
        <SectionHeader number="02" label="Hardware" title="The Gear" />
      </ScrollAnimator>
      <ScrollAnimator>
        <div className="filter-bar">
          {CATEGORIES.map(c => (
            <button
              key={c.id}
              className={`filter-pill${activeFilter === c.id ? ' active' : ''}`}
              onClick={() => handleFilter(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </ScrollAnimator>
      <div className="product-grid">
        {PRODUCTS.map((p, i) => {
          const catLabel = CATEGORIES.find(c => c.id === p.category)?.label || p.category;
          const IconComponent = ICONS[p.category];

          return (
            <div
              key={i}
              ref={el => { cardRefs.current[i] = el; }}
              className="product-card"
              data-category={p.category}
              style={{ transition: 'opacity 0.3s ease, transform 0.4s var(--ease), border-color 0.4s, box-shadow 0.4s' }}
            >
              <div className="product-image">
                {p.image ? (
                  <img src={p.image} alt={p.name} loading="lazy" />
                ) : (
                  <div className={`product-image-placeholder ${getCategoryClass(p.category)}`}>
                    {IconComponent && <IconComponent />}
                  </div>
                )}
                <span className="product-badge">{catLabel}</span>
              </div>
              <div className="product-info">
                <h3 className="product-name">{p.name}</h3>
                <p className="product-desc">{p.description}</p>
                <div className="product-links">
                  <a
                    href={p.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="btn-affiliate"
                  >
                    Amazon UK
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                  {p.brandUrl && (
                    <a
                      href={p.brandUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-brand"
                    >
                      Brand ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
