import React, { useEffect, useMemo, useState } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(true);
      // Add slight delay for transition effect
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 3200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  // Memoize to prevent re-creating on every render
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
    <>
      <style>{`
        /* Intro Container */
        #intro-container {
          position: fixed;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          background-color: #000000;
          overflow: hidden;
          z-index: 9999;
          will-change: transform;
          transition: opacity 0.5s ease-out;
        }

        #intro-container.transitioning {
          opacity: 0;
        }

        .netflix-intro {
          display: block;
          position: relative;
          width: 300px;
          height: 300px;
          overflow: hidden;
          animation-name: zoom-in;
          animation-delay: 0.5s;
          animation-duration: 3.5s;
          animation-timing-function: ease-in;
          animation-fill-mode: forwards;
          will-change: transform;
          transform: translate3d(0, 0, 0);
        }

        .netflix-intro::before {
          content: "";
          position: absolute;
          display: block;
          background-color: #000000;
          width: 150%;
          height: 30%;
          left: -25%;
          bottom: -27%;
          border-radius: 50%;
          z-index: 5;
          transform-origin: left center;
        }

        /* T Letter */
        .netflix-intro[data-letter="T"] {
          transform-origin: center center;
        }

        .netflix-intro[data-letter="T"] .helper-1 {
          width: 19.5%;
          height: 100%;
          background-color: rgba(0, 119, 255, 0.5);
          left: 38%;
          top: 0;
          transform: rotate(180deg);
          animation-name: fading-lumieres-box;
          animation-duration: 2s;
          animation-delay: 0.6s;
          animation-fill-mode: forwards;
          will-change: background-color;
        }

        .netflix-intro[data-letter="T"] .helper-1 .effect-brush {
          animation-name: brush-moving;
          animation-duration: 2.5s;
          animation-fill-mode: forwards;
          animation-delay: 1s;
        }

        .netflix-intro[data-letter="T"] .helper-1 .effect-brush [class*="fur-"] {
          bottom: 0;
          height: 40%;
        }

        .netflix-intro[data-letter="T"] .helper-2 {
          width: 17.5%;
          height: 54%;
          left: 39%;
          top: -55px;
          transform: rotate(270deg);
          overflow: hidden;
        }

        .netflix-intro[data-letter="T"] .helper-2 .effect-brush {
          animation-name: brush-moving;
          animation-duration: 2s;
          animation-fill-mode: forwards;
          animation-delay: 0.5s;
        }

        /* Common Helper Styles */
        .netflix-intro [class*="helper-"] {
          position: absolute;
          transform: translate3d(0, 0, 0);
        }

        .netflix-intro [class*="helper-"] .effect-brush {
          position: absolute;
          width: 100%;
          height: 300%;
          top: 0;
          overflow: hidden;
          will-change: transform;
          transform: translate3d(0, 0, 0);
        }

        .netflix-intro [class*="helper-"] .effect-brush::before {
          display: block;
          content: "";
          position: absolute;
          background-color: #0077ff;
          width: 100%;
          height: 70%;
          box-shadow: 0px 0px 29px 24px #0077ff;
        }

        .netflix-intro [class*="helper-"] .effect-brush [class*="fur-"] {
          display: block;
          position: absolute;
          bottom: 10%;
          height: 30%;
        }

        /* Fur gradients */
        .fur-1 { left: 0%; width: 3.8%; background: linear-gradient(to bottom, #0077ff 0%, #0077ff 15%, rgba(0, 0, 0, 0) 81%, rgba(0, 0, 0, 0) 100%); }
        .fur-2 { left: 3.8%; width: 2.8%; background: linear-gradient(to bottom, #0077ff 0%, #0077ff 10%, rgba(0, 0, 0, 0) 62%, rgba(0, 0, 0, 0) 100%); }
        .fur-3 { left: 6.6%; width: 4.8%; background: linear-gradient(to bottom, #0077ff 0%, #0077ff 37%, rgba(0, 0, 0, 0) 100%); }
        .fur-4 { left: 11.4%; width: 4%; background: linear-gradient(to bottom, #0077ff 0%, #0077ff 23%, rgba(0, 0, 0, 0) 100%); }
        .fur-5 { left: 15.4%; width: 4%; background: linear-gradient(to bottom, #0077ff 0%, #0077ff 15%, rgba(0, 0, 0, 0) 86%, rgba(0, 0, 0, 0) 100%); }
        .fur-6 { left: 19.4%; width: 2.5%; background: linear-gradient(to bottom, #0077ff 0%, #0077ff 27%, rgba(0, 0, 0, 0) 89%, rgba(0, 0, 0, 0) 100%); }
        .fur-7 { left: 21.9%; width: 4%; background: linear-gradient(to bottom, #0077ff 0%, #0077ff 20%, rgba(0, 0, 0, 0) 100%); }
        .fur-8 { left: 25.9%; width: 2%; background: linear-gradient(to bottom, #0077ff 0%, #0077ff 30%, rgba(0, 0, 0, 0) 100%); }
        .fur-9 { left: 27.9%; width: 4%; background: linear-gradient(to bottom, #0077ff 0%, #0077ff 35%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0) 100%); }
        .fur-10 { left: 31.9%; width: 3.5%; background: linear-gradient(to bottom, #0077ff 0%, #0077ff 39%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0) 100%); }
        .fur-11 { left: 35.4%; width: 2%; background: linear-gradient(to bottom, #0077ff 0%, #0077ff 34%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0) 100%); }
        .fur-12 { left: 37.4%; width: 2.6%; background: linear-gradient(to bottom, #0077ff 0%, #0077ff 22%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0) 100%); }
        .fur-13 { left: 40%; width: 6%; background: linear-gradient(to bottom, #0077ff 0%, #0077ff 47%, rgba(0, 0, 0, 0) 100%); }
        .fur-14 { left: 46%; width: 2%; background: linear-gradient(to bottom, #0077ff 0%, #0077ff 36%, rgba(0, 0, 0, 0) 100%); }
        .fur-15 { left: 48%; width: 5.5%; background: linear-gradient(to bottom, #0077ff 0%, #0077ff 29%, rgba(0, 0, 0, 0) 100%); }

        /* Lumieres effect */
        .netflix-intro [class*="helper-"] .effect-lumieres {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          animation-name: showing-lumieres;
          animation-duration: 2s;
          animation-delay: 1.6s;
          animation-fill-mode: forwards;
          will-change: opacity;
        }

        .netflix-intro [class*="helper-"] .effect-lumieres [class*="lamp-"] {
          position: absolute;
          display: block;
          height: 100%;
          box-shadow: 0px 0px 10px 0px rgba(0, 119, 255, 0.75);
          background: var(--color);
          will-change: transform, opacity;
        }

        .netflix-intro [class*="helper-"] .effect-lumieres [class*="lamp-"]::before {
          position: absolute;
          content: " ";
          display: block;
          width: 100%;
          height: 100%;
          background: var(--color);
          box-shadow: 0px 0px 10px 0px rgba(0, 119, 255, 0.75);
        }

        /* Lamp styles */
        .lamp-1 { --color: #0088ff; z-index: 6; left: 0.7%; width: 1%; animation-delay: 0.96s; }
        .lamp-1::before { left: 96%; animation-delay: 0.22s; }
        .lamp-2 { --color: #00ddff; left: 2.2%; width: 1.4%; animation-delay: 0.62s; }
        .lamp-2::before { left: 35%; animation-delay: 0.64s; }
        .lamp-3 { --color: #0066ff; left: 5.8%; width: 2.1%; animation-delay: 0.32s; }
        .lamp-3::before { left: 50%; animation-delay: 0.17s; }
        .lamp-4 { --color: #04a8fd; left: 10.1%; width: 2%; animation-delay: 0.23s; }
        .lamp-4::before { left: 180%; animation-delay: 0.43s; }
        .lamp-5 { --color: #0088ff; left: 12.9%; width: 1.4%; animation-delay: 1.14s; }
        .lamp-5::before { left: 49%; animation-delay: 0.15s; }
        .lamp-6 { --color: #0099ff; left: 15.3%; width: 2.8%; animation-delay: 1.62s; }
        .lamp-6::before { left: 42%; animation-delay: 1.8s; }
        .lamp-7 { --color: #0084ff; left: 21.2%; width: 2.5%; animation-delay: 0.51s; }
        .lamp-7::before { left: 21%; animation-delay: 0.65s; }
        .lamp-8 { --color: #0077ff; left: 25%; width: 2.5%; animation-delay: 1.16s; }
        .lamp-8::before { left: 102%; animation-delay: 0.37s; }
        .lamp-9 { --color: #00aaff; left: 30.5%; width: 3%; animation-delay: 0.93s; }
        .lamp-9::before { left: 118%; animation-delay: 0.06s; }
        .lamp-10 { --color: #0088ff; left: 36.3%; width: 3%; animation-delay: 1s; }
        .lamp-10::before { left: 47%; animation-delay: 0.14s; }
        .lamp-11 { --color: #0077ff; left: 41%; width: 2.2%; animation-delay: 0.63s; }
        .lamp-11::before { left: 114%; animation-delay: 1.3s; }
        .lamp-12 { --color: #01ccff; left: 44.2%; width: 2.6%; animation-delay: 0.46s; }
        .lamp-12::before { left: 71%; animation-delay: 0.05s; }
        .lamp-13 { --color: #00aaff; left: 51.7%; width: 0.5%; animation-delay: 1.25s; }
        .lamp-13::before { left: 3%; animation-delay: 0.4s; }
        .lamp-14 { --color: #00aaff; left: 52.1%; width: 1.8%; animation-delay: 1.34s; }
        .lamp-14::before { left: 28%; animation-delay: 1.61s; }
        .lamp-15 { --color: #0078fe; left: 53.8%; width: 2.3%; animation-delay: 1.38s; }
        .lamp-15::before { left: 54%; animation-delay: 0.73s; }

        .lamp-1, .lamp-3, .lamp-5, .lamp-7, .lamp-9, .lamp-11, .lamp-13, .lamp-15 {
          animation-name: lumieres-moving-left;
          animation-duration: 2.5s;
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .lamp-1::before, .lamp-3::before, .lamp-5::before, .lamp-7::before, .lamp-9::before, .lamp-11::before, .lamp-13::before, .lamp-15::before {
          animation-name: lumieres-moving-left;
          animation-duration: 2.8s;
          animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .lamp-2, .lamp-4, .lamp-6, .lamp-8, .lamp-10, .lamp-12, .lamp-14 {
          animation-name: lumieres-moving-right;
          animation-duration: 2.5s;
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .lamp-2::before, .lamp-4::before, .lamp-6::before, .lamp-8::before, .lamp-10::before, .lamp-12::before, .lamp-14::before {
          animation-name: lumieres-moving-right;
          animation-duration: 2.8s;
          animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* Keyframes - Using translate3d for maximum GPU acceleration */
        @keyframes brush-moving {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(0, -100%, 0); }
        }

        @keyframes lumieres-moving-right {
          0% { transform: translate3d(0, 0, 0) scaleX(1); opacity: 1; }
          30% { transform: translate3d(-20px, 0, 0) scaleX(1.2); opacity: 1; }
          60% { transform: translate3d(-80px, 0, 0) scaleX(2); opacity: 0.8; }
          100% { transform: translate3d(-150px, 0, 0) scaleX(3.5); opacity: 0; }
        }

        @keyframes lumieres-moving-left {
          0% { transform: translate3d(0, 0, 0) scaleX(1); opacity: 1; }
          30% { transform: translate3d(20px, 0, 0) scaleX(1.2); opacity: 1; }
          60% { transform: translate3d(80px, 0, 0) scaleX(2); opacity: 0.8; }
          100% { transform: translate3d(150px, 0, 0) scaleX(3.5); opacity: 0; }
        }

        @keyframes zoom-in {
          0% { transform: scale3d(1, 1, 1); }
          100% { transform: scale3d(15, 15, 1); }
        }

        @keyframes showing-lumieres {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes fading-lumieres-box {
          0% { background-color: rgba(0, 119, 255, 0.5); }
          100% { background-color: rgba(0, 119, 255, 0); }
        }
      `}</style>
      <div id="intro-container" className={isTransitioning ? 'transitioning' : ''}>
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
    </>
  );
};

export default IntroAnimation;
