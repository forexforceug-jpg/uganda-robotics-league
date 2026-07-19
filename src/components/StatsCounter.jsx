import React, { useState, useEffect, useRef } from 'react';

const StatsCounter = ({ icon: Icon, endValue, label, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const countRef = useRef(null);

  // Parse end value to get the number
  const parseEndValue = (val) => {
    if (typeof val === 'string') {
      return parseInt(val.replace(/,/g, '').replace(/\+/g, '')) || 0;
    }
    return val;
  };

  // Check if end value has a plus sign
  const hasPlus = typeof endValue === 'string' && endValue.includes('+');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount();
        }
      },
      { threshold: 0.3 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCount = () => {
    const end = parseEndValue(endValue);
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(end * easeOutQuart);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  };

  // Format number with commas
  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <div className="stat-item" ref={countRef}>
      <Icon className="stat-icon" />
      <div className="stat-number">
        {formatNumber(count)}
        {hasPlus && '+'}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export default StatsCounter;