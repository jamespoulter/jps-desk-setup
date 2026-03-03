'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import { SOFTWARE, SOFTWARE_ICONS, SOFTWARE_COLORS, SOFTWARE_STROKE } from '@/data/software';
import { ICONS } from '@/data/icons';
import ScrollAnimator from '@/components/ScrollAnimator';
import SectionHeader from '@/components/SectionHeader';

export default function SoftwareSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const updateIndicator = useCallback(() => {
    const btn = tabRefs.current[activeTab];
    if (btn) {
      setIndicatorStyle({
        left: btn.offsetLeft,
        width: btn.offsetWidth,
      });
    }
  }, [activeTab]);

  useEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  useEffect(() => {
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [updateIndicator]);

  const cat = SOFTWARE[activeTab];
  const iconKey = SOFTWARE_ICONS[cat.tab];
  const bgColor = SOFTWARE_COLORS[cat.tab];
  const strokeColor = SOFTWARE_STROKE[cat.tab];
  const IconComponent = ICONS[iconKey];

  return (
    <section className="section" id="software">
      <ScrollAnimator>
        <SectionHeader number="03" label="Apps &amp; Tools" title="The Software Stack" />
      </ScrollAnimator>
      <ScrollAnimator>
        <div className="software-tabs">
          {SOFTWARE.map((s, i) => (
            <button
              key={i}
              ref={el => { tabRefs.current[i] = el; }}
              className={`tab-btn${activeTab === i ? ' active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {s.tab}
            </button>
          ))}
          <div
            className="tab-indicator"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
            }}
          />
        </div>
      </ScrollAnimator>
      <ScrollAnimator>
        <div className="software-grid">
          {cat.items.map((item, i) => (
            <div key={i} className="software-card">
              <div
                className="software-icon"
                style={{ background: bgColor, color: strokeColor }}
              >
                {IconComponent && <IconComponent />}
              </div>
              <div className="software-info">
                <div className="software-header">
                  <span className="software-name">{item.name}</span>
                  <span className={`tag tag-${item.tag}`}>{item.tagLabel}</span>
                </div>
                <p className="software-desc">{item.description}</p>
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="software-link"
              >
                Visit ↗
              </a>
            </div>
          ))}
        </div>
      </ScrollAnimator>
    </section>
  );
}
