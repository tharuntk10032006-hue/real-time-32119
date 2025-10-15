import { useEffect } from 'react';
import './IntroAnimation.css';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4100);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const renderBrushEffect = () => (
    <div className="effect-brush">
      {[...Array(10)].map((_, i) => (
        <span key={`fur-${i}`} className={`fur-${i + 1}`} />
      ))}
    </div>
  );

  const renderLumieresEffect = () => (
    <div className="effect-lumieres">
      {[...Array(10)].map((_, i) => (
        <span key={`lamp-${i}`} className={`lamp-${i + 1}`} />
      ))}
    </div>
  );

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
