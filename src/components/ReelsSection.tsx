'use client';
import { REELS } from '@/data/reels';
import ScrollAnimator from '@/components/ScrollAnimator';
import SectionHeader from '@/components/SectionHeader';

export default function ReelsSection() {
  return (
    <section className="section" id="reels">
      <ScrollAnimator>
        <SectionHeader number="04" label="Content" title="The Reels" />
      </ScrollAnimator>
      <ScrollAnimator stagger className="reels-grid">
        {REELS.map((reel) => (
          <div key={reel.id} className="reel-item">
            <iframe
              src={reel.embedUrl}
              title={reel.caption}
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
        ))}
      </ScrollAnimator>
    </section>
  );
}
