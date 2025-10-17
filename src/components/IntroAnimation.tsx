import React, { useEffect, useState } from 'react';
import './IntroAnimation.css';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [reducedElements, setReducedElements] = useState(false);

  useEffect(() => {
    const checkPerformance = () => {
      const isMobile = window.innerWidth <= 768;
      const isLowEnd = navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 4 : false;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      setReducedElements(isMobile || isLowEnd || prefersReducedMotion);
    };

    checkPerformance();
    window.addEventListener('resize', checkPerformance);

    return () => window.removeEventListener('resize', checkPerformance);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const renderBrushEffect = () => {
    const furCount = reducedElements ? 8 : 15;
    return (
      <div className="effect-brush">
        {[...Array(furCount)].map((_, i) => (
          <span key={i} className={`fur-${furCount - i}`}></span>
        ))}
      </div>
    );
  };

  const renderLumieresEffect = () => {
    const lampCount = reducedElements ? 10 : 15;
    return (
      <div className="effect-lumieres">
        {[...Array(lampCount)].map((_, i) => (
          <span key={i} className={`lamp-${i + 1}`}></span>
        ))}
      </div>
    );
  };

  return (
    <div id="intro-container">
      <div className="netflix-intro" data-letter="T">
        <div className="helper-1">
          {renderBrushEffect()}
          {renderLumieresEffect()}
        </div>
        <div className="helper-2">
          {renderBrushEffect()}
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
