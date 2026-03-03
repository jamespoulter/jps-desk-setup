'use client';
import { GALLERY } from '@/data/gallery';
import { useLightbox } from '@/components/LightboxContext';
import ScrollAnimator from '@/components/ScrollAnimator';
import SectionHeader from '@/components/SectionHeader';

export default function GallerySection() {
  const { openLightbox } = useLightbox();

  return (
    <section className="section" id="setup">
      <ScrollAnimator>
        <SectionHeader number="01" label="Gallery" title="The Setup" />
      </ScrollAnimator>
      <ScrollAnimator stagger className="gallery-grid">
        {GALLERY.map((item, i) => (
          <div
            key={i}
            className="gallery-item"
            onClick={() => openLightbox(i)}
          >
            {item.src ? (
              <img src={item.src} alt={item.alt} loading="lazy" />
            ) : (
              <div className="gallery-placeholder">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <span>{item.caption}</span>
              </div>
            )}
          </div>
        ))}
      </ScrollAnimator>
    </section>
  );
}
