'use client';
import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { GalleryItem } from '@/data/gallery';

interface LightboxContextType {
  isOpen: boolean;
  currentIndex: number;
  openLightbox: (index: number) => void;
  closeLightbox: () => void;
  next: () => void;
  prev: () => void;
  items: GalleryItem[];
}

const LightboxContext = createContext<LightboxContextType | null>(null);

export function useLightbox() {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
}

interface LightboxProviderProps {
  items: GalleryItem[];
  children: ReactNode;
}

export function LightboxProvider({ items, children }: LightboxProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    if (items[index]?.src) {
      setCurrentIndex(index);
      setIsOpen(true);
    }
  }, [items]);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
  }, []);

  const next = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  return (
    <LightboxContext.Provider value={{ isOpen, currentIndex, openLightbox, closeLightbox, next, prev, items }}>
      {children}
    </LightboxContext.Provider>
  );
}
