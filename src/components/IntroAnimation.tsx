import { useEffect, useMemo, memo } from 'react';
import './IntroAnimation.css';

interface IntroAnimationProps {
  onComplete: () => void;
}

const BrushEffect = memo(() => {
  const furElements = useMemo(() =>
    Array.from({ length: 8 }, (_, i) => (
      <span key={15 - i * 2} className={`fur-${15 - i * 2}`} />
    )),
  []);

  return <div className="effect-brush">{furElements}</div>;
});

BrushEffect.displayName = 'BrushEffect';

const LumieresEffect = memo(() => {
  const lampElements = useMemo(() =>
    Array.from({ length: 8 }, (_, i) => (
      <span key={i * 2 + 1} className={`lamp-${i * 2 + 1}`} />
    )),
  []);

  return <div className="effect-lumieres">{lampElements}</div>;
});

LumieresEffect.displayName = 'LumieresEffect';

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 4100);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div id="intro-container">
      <div className="netflix-intro" data-letter="T">
        <div className="helper-1">
          <BrushEffect />
          <LumieresEffect />
        </div>
        <div className="helper-2">
          <BrushEffect />
        </div>
      </div>
    </div>
  );
};

export default memo(IntroAnimation);
