import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Carousel({ children, cardWidth = 400, cardsToShow = 3 }) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const childrenArray = React.Children.toArray(children);

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      {
        root: track,
        threshold: 0.6,
      }
    );

    const items = track.querySelectorAll('.carousel-item');
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, [childrenArray.length]);

  return (
    <div className={`carousel-container show-${cardsToShow}`}>
      <button className="carousel-arrow carousel-arrow-left" onClick={scrollLeft} aria-label="Scroll left">
        <ChevronLeft size={24} />
      </button>

      <div className="carousel-track" ref={trackRef}>
        {childrenArray.map((child, index) => (
          <div key={index} className="carousel-item" data-index={index}>
            {child}
          </div>
        ))}
      </div>

      <button className="carousel-arrow carousel-arrow-right" onClick={scrollRight} aria-label="Scroll right">
        <ChevronRight size={24} />
      </button>

      <div className="carousel-dots">
        {childrenArray.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => {
              if (trackRef.current) {
                const item = trackRef.current.children[index];
                if (item) {
                  item.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
                }
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}
