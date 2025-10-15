import { useState } from 'react';
import { Button } from '@/components/ui/button';
import brandovationPoster from '@/assets/brandovation_poster.jpeg';
import paradisePoster from '@/assets/paradiseprotocol_poster.jpeg';
import capitalyzePoster from '@/assets/capitalyze_poster.jpeg';
import venturaPoster from '@/assets/ventura_poster.jpeg';

interface EventCard {
  id: string;
  name: string;
  tagline: string;
  poster: string;
  coordinators: {
    name: string;
    phone: string;
    year: string;
  }[];
}

const events: EventCard[] = [
  {
    id: 'brandovation',
    name: 'Brand-o-Vation: The Last Ad-pocalypse',
    tagline: 'Go Viral or Go Dead 🧟‍♂️',
    poster: brandovationPoster,
    coordinators: [
      { name: 'Lalith J', phone: '9791382086', year: '2nd yr' },
      { name: 'Kamalika N M', phone: '9042887720', year: '2nd yr' },
      { name: 'Akshitha Jyothi D', phone: '6382982045', year: '3rd yr' },
    ],
  },
  {
    id: 'paradox',
    name: 'The Paradox Protocol',
    tagline: 'Reimagine. Rebuild. Redefine Reality.',
    poster: paradisePoster,
    coordinators: [
      { name: 'Varshini', phone: '8667801807', year: '2nd yr' },
      { name: 'Harsha Nandhini', phone: '9840335963', year: '2nd yr' },
      { name: 'Surya', phone: '7904461620', year: '3rd yr' },
    ],
  },
  {
    id: 'ventura',
    name: 'Ventura',
    tagline: 'Play. Survive. Conquer.',
    poster: venturaPoster,
    coordinators: [
      { name: 'Sanjay V', phone: '8610315770', year: '2nd yr' },
      { name: 'Vetrichelva RS', phone: '9344016363', year: '2nd yr' },
      { name: 'Shaheen', phone: '7845588146', year: '3rd yr' },
    ],
  },
  {
    id: 'capitalyze',
    name: 'Capitalyze',
    tagline: 'Strategize the Business, Seize the Throne.',
    poster: capitalyzePoster,
    coordinators: [
      { name: 'Manodharani', phone: '8438616965', year: '2nd yr' },
      { name: 'Bhagavadgitan', phone: '9047900060', year: '2nd yr' },
      { name: 'Keerthana', phone: '9047563090', year: '3rd yr' },
    ],
  },
];

const EventFlipCard = ({ event }: { event: EventCard }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative perspective-1000 cursor-pointer grid"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full col-start-1 row-start-1 transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front */}
        <div className="backface-hidden rounded-xl overflow-hidden shadow-card hover:shadow-glow transition-shadow">
          <img
            src={event.poster}
            alt={event.name}
            loading="lazy"
            className="w-full h-auto object-contain bg-black"
          />
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden glass shadow-card p-4 sm:p-6 md:p-8 flex flex-col justify-between min-h-full">
          <div className="flex-1 overflow-y-auto">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">{event.name}</h3>
            <p className="text-primary text-base sm:text-lg md:text-xl mb-3 sm:mb-6 italic">{event.tagline}</p>
            
            <div className="space-y-2 sm:space-y-4">
              <h4 className="text-base sm:text-lg font-semibold text-muted-foreground">Coordinators:</h4>
              {event.coordinators.map((coord, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-sm sm:text-base font-medium">
                    {coord.name} <span className="text-muted-foreground">({coord.year})</span>
                  </p>
                  <p className="text-primary text-sm sm:text-base">📞 {coord.phone}</p>
                </div>
              ))}
            </div>
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-glow mt-4 flex-shrink-0">
            Register Now
          </Button>
        </div>
      </div>
    </div>
  );
};

const FeaturedEvents = () => {
  return (
    <section id="events" className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Featured <span className="text-primary text-glow">Events</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">Click any card to see event details</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {events.map((event) => (
            <EventFlipCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
