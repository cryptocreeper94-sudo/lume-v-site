import React, { useRef, useState, useEffect } from 'react';

// Easing function for smooth animation
const easeOutExpo = (t) => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

export default function AnimatedCounter({ target, suffix = '', prefix = '', label, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

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
            
            const currentCount = Math.floor(easeOutExpo(progress) * target);
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div className="stat-item" ref={containerRef}>
      <div className="stat-number">
        {prefix}{count}{suffix}
      </div>
      {label && <div className="stat-label">{label}</div>}
    </div>
  );
}
