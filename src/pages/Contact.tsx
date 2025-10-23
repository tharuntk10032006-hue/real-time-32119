import { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Instagram, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import netflixBackground from '@/assets/netflix_background.png';

interface Coordinator {
  name: string;
  designation?: string;
  image: string;
  phone?: string;
}

interface CoordinatorSection {
  title: string;
  coordinators: Coordinator[];
}

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = netflixBackground;
    img.onload = () => {
      setImagesLoaded(true);
    };
  }, []);

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

  const coordinatorSections: CoordinatorSection[] = [
    {
      title: "Symposium Coordinators",
      coordinators: [
        { name: "Gomathi M", phone: "+91 9361918960", image: "/coordinators/symposium/Gomathi M.jpg" },
        { name: "Priyadharshini M", phone: "+91 9363606104", image: "/coordinators/symposium/Priyadharshini M.jpg" },
        { name: "Yogesh Odayar\nP S", phone: "+91 8072137815", image: "/coordinators/symposium/Yogesh Odayar P S.jpg" },
        { name: "Yogeshwaran Kumar", phone: "+91 8270380071", image: "/coordinators/symposium/Yogeshwaran Kumar.jpg" },
      ]
    },
    {
      title: "Brand O Vation Coordinators",
      coordinators: [
        { name: "Akshitha Jyothi D", phone: "+91 6382982045", image: "/coordinators/brandovation/Akshitha Jyothi D .jpg" },
        { name: "Kamalika N M", phone: "+91 9042887720", image: "/coordinators/brandovation/Kamalika N M.jpg" },
        { name: "Lalith JR", phone: "+91 9791382086", image: "/coordinators/brandovation/Lalith JR.jpg" },
      ]
    },
    {
      title: "Paradox Protocol Coordinators",
      coordinators: [
        { name: "Harsha Nandhini K", phone: "+91 9840335963", image: "/coordinators/paradox/Harsha Nandhini K.jpg" },
        { name: "Surya", phone: "+91 7904461620", image: "/coordinators/paradox/SURYA.JPG" },
        { name: "Varshini Elumalai Palani", phone: "+91 8667801807", image: "/coordinators/paradox/Varshini Elumalai Palani .jpg" },
      ]
    },
    {
      title: "Capitalyze Coordinators",
      coordinators: [
        { name: "Bhagavadgitan", phone: "+91 9047900060", image: "/coordinators/capitalyze/Bhagavadgitan.jpg" },
        { name: "Keerthana V", phone: "+91 9047563090", image: "/coordinators/capitalyze/keerthana V_.jpg" },
        { name: "Manodharani", phone: "+91 8438616965", image: "/coordinators/capitalyze/Manodharani.jpg" },
      ]
    },
    {
      title: "Ventura Coordinators",
      coordinators: [
        { name: "Sanjay V", phone: "+91 8610315770", image: "/coordinators/ventura/SANJAY V.jpg" },
        { name: "Shaheen", phone: "+91 7845588146", image: "/coordinators/ventura/shaheen.jpg" },
        { name: "Vetri Chelva R S", phone: "+91 9344016363", image: "/coordinators/ventura/VETRI CHELVA R S_.png" },
      ]
    },
    {
      title: "Staff Coordinator",
      coordinators: [
        { 
          name: "Mr. Prabhu D", 
          designation: "Assistant Professor, Department of Computer Science & Business Systems",
          image: "/coordinators/staff/Prabhu D - Staff Coordinator.jpg" 
        },
      ]
    },
    {
      title: "Chapter Advisor",
      coordinators: [
        { 
          name: "Dr. C. R. Rene Robin", 
          designation: "IEEE TEMS Chapter Advisor & Dean of Innovation @ Sairam",
          image: "/coordinators/staff/Rene Robin - IEEE TEMS Chapter Advisor.jpg" 
        },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
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
      
      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6">
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
              Contact <span className="text-primary text-glow">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet our amazing team of coordinators and get in touch with us
            </p>
          </div>
        </div>

        {/* Coordinators Section */}
        <section ref={sectionRef} className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-16">
            {coordinatorSections.slice(0, -2).map((section, sectionIndex) => (
              <div 
                key={section.title}
                className={`transition-all duration-700 delay-${sectionIndex * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <h2 className="text-3xl font-bold text-center mb-8 text-primary">
                  {section.title}
                </h2>
                
                <div className="flex justify-center px-4">
                  <div className="w-full max-w-7xl">
                    <div className="flex flex-wrap justify-center gap-6 lg:flex-nowrap lg:gap-4 xl:gap-6 items-center">
                    {section.coordinators.map((coordinator, index) => (
                      <div
                        key={coordinator.name}
                        className="bg-card rounded-xl p-4 shadow-card hover:shadow-glow transition-all duration-300 border border-border group w-40 sm:w-48 md:w-56 lg:flex-1 lg:max-w-[200px] xl:max-w-[240px] flex-shrink-0"
                      >
                        <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                          <img
                            src={coordinator.image}
                            alt={coordinator.name}
                            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                              coordinator.name === 'Priyadharshini M' ? 'object-top' : 'object-center'
                            }`}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/placeholder.svg';
                            }}
                          />
                        </div>
                        
                        <div className="text-center">
                          <h3 className="text-sm font-semibold mb-2 leading-tight min-h-[2.5rem] flex items-center justify-center whitespace-pre-line text-center">{coordinator.name}</h3>
                          {coordinator.designation && (
                            <p className="text-xs text-muted-foreground mb-2 leading-tight min-h-[3rem] flex items-center justify-center">{coordinator.designation}</p>
                          )}
                          {coordinator.phone && (
                            <a 
                              href={`tel:${coordinator.phone}`}
                              className="text-primary hover:underline text-xs block"
                            >
                              {coordinator.phone}
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Staff Coordinator and Chapter Advisor Side by Side */}
            <div className={`transition-all duration-700 delay-${(coordinatorSections.length - 2) * 100} ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {coordinatorSections.slice(-2).map((section, index) => (
                  <div key={section.title} className="text-center">
                    <h2 className="text-3xl font-bold text-center mb-8 text-primary">
                      {section.title}
                    </h2>
                    
                    <div className="flex justify-center">
                      {section.coordinators.map((coordinator, coordIndex) => (
                        <div
                          key={coordinator.name}
                          className="bg-card rounded-xl p-4 shadow-card hover:shadow-glow transition-all duration-300 border border-border group w-64 flex-shrink-0"
                        >
                          <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                            <img
                              src={coordinator.image}
                              alt={coordinator.name}
                              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = '/placeholder.svg';
                              }}
                            />
                          </div>
                          
                          <div className="text-center">
                            <h3 className="text-sm font-semibold mb-2 leading-tight min-h-[2.5rem] flex items-center justify-center whitespace-pre-line text-center">{coordinator.name}</h3>
                            {coordinator.designation && (
                              <p className="text-xs text-muted-foreground mb-2 leading-tight min-h-[3rem] flex items-center justify-center">{coordinator.designation}</p>
                            )}
                            {coordinator.phone && (
                              <a 
                                href={`tel:${coordinator.phone}`}
                                className="text-primary hover:underline text-xs block"
                              >
                                {coordinator.phone}
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get In <span className="text-primary text-glow">Touch</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-card hover:shadow-glow transition-all duration-500 border border-border">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      Sai Leo Nagar, West Tambaram,<br />
                      Chennai – 600 044.<br />
                      Tamil Nadu, India.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-card hover:shadow-glow transition-all duration-500 border border-border">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Contact</h3>
                    <p className="text-muted-foreground">
                      Chairperson: Sathish Kumar<br />
                      <a href="tel:+919344805365" className="text-primary hover:underline">
                        +91 93448 05365
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-card hover:shadow-glow transition-all duration-500 border border-border">
                <div className="flex items-start gap-4">
                  <Instagram className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Social Media</h3>
                    <Button
                      asChild
                      variant="link"
                      className="text-primary hover:text-primary/80 p-0 h-auto"
                    >
                      <a
                        href="https://www.instagram.com/intemstellar/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @intemstellar
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d248847.9142688746!2d80.090366!3d12.955934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f596c7fb72c9%3A0x8e7a30529f9ef227!2sSri%20Sairam%20Engineering%20College!5e0!3m2!1sen!2sus!4v1760532783108!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '450px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sri Sairam Engineering College Location"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;