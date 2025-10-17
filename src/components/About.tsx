import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className={`relative py-12 sm:py-16 md:py-20 overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="space-y-8">
          {/* Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              About IEEE <span className="text-primary text-glow">TEMS</span> Sairam Chapter
            </h2>
            
            <div className={`glass rounded-2xl p-8 sm:p-12 shadow-card hover:shadow-glow transition-all duration-500 delay-300 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <div className="space-y-6 text-muted-foreground">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Our Story</h3>
                <p className="text-base sm:text-lg leading-relaxed">
                  The IEEE Technology and Engineering Management Society provides information and services to practitioners and researchers engaged in management sciences.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  IEEE TEMS helps members maintain vital engineering management skills, ensuring they stay current in an evolving field. The society supports the leadership career paths of IEEE members by providing resources and development opportunities.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  It also fosters active knowledge transfer between academia and industry, promoting collaboration and innovation across both communities.
                </p>
              </div>

              <div className="mt-8 flex justify-center md:justify-start">
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-white shadow-glow"
                >
                  <a
                    href="https://edu.ieee.org/in-sairamtems"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    View TEMS
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
