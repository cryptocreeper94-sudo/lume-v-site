import React, { useState, useEffect } from 'react';

export default function HeroSlideshow({ images, children }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="hero-slideshow">
      {images.map((img, i) => (
        <div 
          key={i} 
          className={`hero-slide ${i === active ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }} 
        />
      ))}
      <div className="hero-overlay-gradient" />
      <div className="hero-content">
        {children}
      </div>
    </div>
  );
}
