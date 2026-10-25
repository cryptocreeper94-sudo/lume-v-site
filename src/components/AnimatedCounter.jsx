import React, { useRef, useState, useEffect } from 'react';

// Easing function for smooth animation
const easeOutExpo = (t) => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

// Root cause of the old "0 Safety Invariants" bug: the count started at 0 and only
// moved when an IntersectionObserver fired. Anything that rendered the stats bar
// without scrolling it into view (crawlers, link previews, full-page screenshots,
// reduced-motion users, slow observers) saw 0. The real value now renders first;
// the count-up is a decoration that only runs once the bar is actually on screen.
// `text` shows a fixed non-numeric value (e.g. "Ed25519") with no animation.
export default function AnimatedCounter({ target, text, suffix = '', prefix = '', label, duration = 2000 }) {
  const [count, setCount] = useState(target);
  const containerRef = useRef(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || text != null || typeof target !== 'number') return;
    if (typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          observer.disconnect();

          let startTime = null;
          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(progress < 1 ? Math.floor(easeOutExpo(progress) * target) : target);
            if (progress < 1) frame = requestAnimationFrame(animate);
          };
          frame = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => { observer.disconnect(); cancelAnimationFrame(frame); setCount(target); };
  }, [target, text, duration]);

  return (
    <div className="stat-item" ref={containerRef}>
      <div className="stat-number">
        {text != null ? text : <>{prefix}{count}{suffix}</>}
      </div>
      {label && <div className="stat-label">{label}</div>}
    </div>
  );
}
