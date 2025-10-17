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

  useEffect(() => {
    // Prevent scrolling during intro
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
    // Trigger fade-in animation shortly after intro completes
    setTimeout(() => setFadeIn(true), 50);
  };

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      
      {!showIntro && (
        <div className={`min-h-screen bg-background relative transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          {/* Global Netflix-style Background Carousel */}
          <div className="fixed inset-0 overflow-hidden z-0">
            <div className="absolute inset-0 flex animate-[scroll_60s_linear_infinite]">
              <img 
                src={netflixBackground} 
                alt="Background" 
                className="w-full h-full object-cover opacity-70 flex-shrink-0"
              />
              <img 
                src={netflixBackground} 
                alt="Background" 
                className="w-full h-full object-cover opacity-70 flex-shrink-0"
              />
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
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
