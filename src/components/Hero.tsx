import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import brandovationCard from '@/assets/brandovation_card.jpeg';
import paradiseCard from '@/assets/paradise_card.jpeg';
import capitalyzeCard from '@/assets/capitalyze_card.jpeg';
import venturaCard from '@/assets/ventura_card.jpeg';

const events = [
  {
    id: 'brandovation',
    image: brandovationCard,
    title: 'Brand-o-Vation',
  },
  {
    id: 'paradox',
    image: paradiseCard,
    title: 'The Paradox Protocol',
  },
  {
    id: 'capitalyze',
    image: capitalyzeCard,
    title: 'Capitalyze',
  },
  {
    id: 'ventura',
    image: venturaCard,
    title: 'Ventura',
  },
];

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isHovered) return;

    const scrollSpeed = 1; // pixels per frame
    let animationFrameId: number;

    const autoScroll = () => {
      if (scrollContainer && !isHovered) {
        scrollContainer.scrollLeft += scrollSpeed;
        
        // Reset to start when reaching end for infinite loop
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isHovered]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const scrollToEvents = () => {
    const element = document.getElementById('events');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />
      <div className="absolute inset-0" style={{ background: 'var(--gradient-glow)' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 animate-fade-in font-cinematic tracking-wide px-4">
          Welcome to{' '}
          <span className="block mt-1 sm:mt-2">
            IN<span className="text-primary text-glow">TEMS</span>TELLAR 2025
          </span>
        </h1>
        <p className="text-lg sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-12 animate-fade-in px-4">
          An IEEE TEMS Symposium Experience
        </p>

        {/* Event Carousel */}
        <div className="relative max-w-6xl mx-auto mt-8 sm:mt-12 md:mt-16">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-6 md:mb-8 px-4">Featured Events</h2>
          
          <div className="relative">
            <Button
              variant="outline"
              size="icon"
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 glass hover:bg-primary/20"
              onClick={() => scroll('left')}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div
              ref={scrollRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide px-4 sm:px-12"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Duplicate events for infinite loop effect */}
              {[...events, ...events].map((event, index) => (
                <div
                  key={`${event.id}-${index}`}
                  onClick={scrollToEvents}
                  className="flex-shrink-0 w-full sm:w-72 md:w-80 lg:w-96 cursor-pointer group"
                >
                  <div className="relative overflow-hidden rounded-lg shadow-card hover:shadow-glow transition-all duration-300 transform group-hover:scale-105">
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="eager"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 glass hover:bg-primary/20"
              onClick={() => scroll('right')}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
        <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
};

export default Hero;
