'use client';
import { useEffect } from 'react';
import { useLightbox } from '@/components/LightboxContext';

export default function Lightbox() {
  const { isOpen, currentIndex, closeLightbox, next, prev, items } = useLightbox();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeLightbox, next, prev]);

  const currentItem = items[currentIndex];

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  return (
    <div
      className={`lightbox${isOpen ? ' active' : ''}`}
      onClick={handleBackgroundClick}
    >
      <button className="lightbox-close" onClick={closeLightbox}>
        &#x2715;
      </button>
      <button className="lightbox-nav lightbox-prev" onClick={prev}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button className="lightbox-nav lightbox-next" onClick={next}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
      <div className="lightbox-content">
        {currentItem?.src && (
          <img src={currentItem.src} alt={currentItem.alt} />
        )}
        <p className="lightbox-caption">{currentItem?.caption}</p>
      </div>
    </div>
  );
}
