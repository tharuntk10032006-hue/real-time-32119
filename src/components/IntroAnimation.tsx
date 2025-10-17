import { useEffect, useState } from 'react';
import './IntroAnimation.css';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const checkReducedMotion = () => {
      setIsReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };

    checkMobile();
    checkReducedMotion();

    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const duration = isReducedMotion ? 1500 : (isMobile ? 2800 : 4100);
    const timer = setTimeout(() => {
      onComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [onComplete, isMobile, isReducedMotion]);

  const renderBrushEffect = () => (
    <div className="effect-brush">
      {[...Array(10)].map((_, i) => (
        <span key={`fur-${i}`} className={`fur-${i + 1}`} />
      ))}
    </div>
  );

  const renderLumieresEffect = () => {
    const lampCount = isMobile ? 20 : 40;
    return (
      <div className="effect-lumieres">
        {[...Array(lampCount)].map((_, i) => (
          <span key={`lamp-${i}`} className={`lamp-${i + 1}`} />
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
