'use client';
import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useIntersectionObserver';

interface ScrollAnimatorProps {
  children: ReactNode;
  stagger?: boolean;
  className?: string;
}

export default function ScrollAnimator({ children, stagger = false, className }: ScrollAnimatorProps) {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      {...(stagger ? { 'data-animate-stagger': '' } : { 'data-animate': '' })}
      className={className}
    >
      {children}
    </div>
  );
}
