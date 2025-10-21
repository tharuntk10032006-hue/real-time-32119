import React, { useEffect, useMemo } from 'react';
import './IntroAnimation.css';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const brushEffect = useMemo(() => (
    <div className="effect-brush">
      {[...Array(15)].map((_, i) => (
        <span key={i} className={`fur-${15 - i}`}></span>
      ))}
    </div>
  ), []);

  const lumieresEffect = useMemo(() => (
    <div className="effect-lumieres">
      {[...Array(15)].map((_, i) => (
        <span key={i} className={`lamp-${i + 1}`}></span>
      ))}
    </div>
  ), []);

  return (
    <div id="intro-container">
      <div className="netflix-intro" data-letter="T">
        <div className="helper-1">
          {brushEffect}
          {lumieresEffect}
        </div>
        <div className="helper-2">
          {brushEffect}
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
