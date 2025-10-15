import { useState, useEffect } from 'react';
import IntroAnimation from '@/components/IntroAnimation';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FeaturedEvents from '@/components/FeaturedEvents';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

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
  };

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      
      {!showIntro && (
        <div className="min-h-screen bg-background">
          <Navbar />
          <Hero />
          <About />
          <FeaturedEvents />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
