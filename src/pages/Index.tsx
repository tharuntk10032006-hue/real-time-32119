import { useState, useEffect } from 'react';
import IntroAnimation from '@/components/IntroAnimation';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FeaturedEvents from '@/components/FeaturedEvents';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import netflixBackground from '@/assets/netflix_background.png';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = netflixBackground;
    img.onload = () => {
      setImagesLoaded(true);
    };
  }, []);

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showIntro]);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setTimeout(() => setFadeIn(true), 50);
  };

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      
      {!showIntro && (
        <div className={`min-h-screen bg-background relative transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          {/* Global Netflix-style Background Carousel */}
          <div className="fixed inset-0 overflow-hidden z-0" style={{ backgroundColor: '#000' }}>
            {imagesLoaded && (
              <div className="absolute inset-0 flex animate-[scroll_60s_linear_infinite]" style={{ willChange: 'transform' }}>
                <img
                  src={netflixBackground}
                  alt="Background"
                  className="w-full h-full object-cover opacity-40 flex-shrink-0"
                  style={{ willChange: 'transform' }}
                />
                <img
                  src={netflixBackground}
                  alt="Background"
                  className="w-full h-full object-cover opacity-40 flex-shrink-0"
                  style={{ willChange: 'transform' }}
                />
              </div>
            )}
            {/* Subtle Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/70" style={{
              background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.7) 100%)'
            }} />
            {/* Top fade for header */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <Navbar />
            <Hero />
            <About />
            <FeaturedEvents />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
