import React, { useEffect, useState } from 'react';
import Navigation from '../components/layout/Navigation';
import { homeContent } from '../content/home';
import { Testimonials } from '../components/sections/Testimonials';
import { WhyUs } from '../components/sections/WhyUs';
import { NextSteps } from '../components/sections/NextSteps';
import { whyUsValues } from '../data/whyUsValues';
import { Footer } from '../components/layout/Footer';

const DressCode: React.FC = () => {
  const [selectedDressCode, setSelectedDressCode] = useState<string | null>(null);

  const dressCodeCategories = [
    { 
      id: 'acro', 
      name: 'Acro',
      image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762825371/Acro_vmmyyu.png',
      position: 'center 100%',
      requirements: '1. Dancers may wear dance shorts or leggings. Dance shorts must be fitted (no athletic shorts or butterfly shorts)\n\n2. Leotards are required. Level 2A and up must wear black leotards. No mesh cut outs or low cut leotards. If sports bra is worn underneath it must be all black. Shirts are not allowed.\n\n3. Bare feet or foot undies may be worn.\n\n4. Hair must be securely pulled up away from face, long hair needs to be all the way up in a pony-tail.'
    },
    { 
      id: 'ballet', 
      name: 'Ballet / Creative Movement',
      image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762825370/Ballet_zgvpjm.jpg',
      position: 'center 30%',
      requirements: '1. Creative Movement through Level 1B dancers are to wear pink ballet tights (not footless) and leotards of any color. No leggings or shorts. Level 2A through 5 dancers are to wear pink ballet tights (not footless). Black leotards level 2 and up no mesh cut outs or low cut leotards if sports bra is worn it must be all black. If sports bra is worn underneath it must be all black.\n\n2. Ballet skirt is optional and must be worn around the waist.\n\n3. Ballet shoes may be leather or canvas. Ballet shoes may be split sole or full sole. (No ballet slippers.)\n\n4. Hair must be securely up in a bun using bobby pins. If it comes down in class it was not secured well enough.'
    },
    { 
      id: 'contemporary', 
      name: 'Contemporary',
      image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762825366/Contemporary_doscju.png',
      position: 'center 5%',
      requirements: '1. Dancers may wear dance shorts, leggings or jazz pants. Dance shorts must be fitted (no athletic shorts or butterfly shorts)\n\n2. Leotards are required. Level 2A and up must wear black leotards. No mesh cut outs or low cut leotards. If sports bra is worn underneath it must be all black. No shirts are allowed.\n\n3. Bare feet or foot undies may be worn.\n\n4. Hair must be securely pulled up away from face, long hair needs to be up.'
    },
    { 
      id: 'hip-hop', 
      name: 'Hip-Hop',
      image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762825372/HipHop_yzzsxu.png',
      position: 'center center',
      requirements: '1. Sweat pants are preferred, but dancers may wear dance shorts, biker shorts, dance pants, along with shirts, t-shirts and/or anything comfortable you can move in and dance freely. No inappropriate, vulgar or offensive wording or symbols allowed.\n\n2. Dancers must wear tennis shoes/sneakers to class.\n\n3. Keep it modest. No half-shirts or clothing that bares the mid-driff. Dressing appropriate for class is respectful of the teacher and the class.'
    },
    { 
      id: 'jazz', 
      name: 'Jazz',
      image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762825363/Jazz_hwekyw.png',
      position: 'center 5%',
      requirements: '1. Dancers may wear dance shorts, leggings or jazz pants. Dance shorts must be fitted (no athletic shorts or butterfly shorts)\n\n2. Must wear leotards. Level 2A and up must wear black leotards with no mesh cut outs or low cut leotards. If sports bra is worn underneath it must be all black. No shirts are allowed.\n\n3. Jazz shoes are necessary for jazz class. Tan shoes are preferred and used in performances, but black shoes may be worn during class.\n\n4. Hair must be securely pulled up away from face, long hair needs to be all the way up in a pony-tail.'
    },
    { 
      id: 'modern', 
      name: 'Modern',
      image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762825358/Modern_gnrpmd.png',
      position: 'center center',
      requirements: '1. Dancers may wear dance shorts, leggings or jazz pants. Dance shorts must be fitted (no athletic shorts or butterfly shorts)\n\n2. Leotards are required. Level 3A and up must wear black leotards. If sports bra is worn underneath it must be all black.\n\n3. Bare feet are necessary for modern class.\n\n4. Hair must be securely pulled up away from face, long hair needs to be all the way up.'
    },
    { 
      id: 'musical-theater', 
      name: 'Musical Theater',
      image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762825360/Musical_Theater_om16de.png',
      position: 'center center',
      requirements: '1. Dancers may wear dance shorts, leggings or jazz pants. Dance shorts must be fitted (no athletic shorts or butterfly shorts)\n\n2. Leotards are required. Level 2A and up must wear black leotards. No mesh cut outs or low cut leotards. Shirts are not allowed. If sports bra is worn underneath it must be all black.\n\n3. Jazz shoes are necessary for musical theater. Tan shoes are preferred and used in performances, but black shoes are allowed in class.\n\n4. Hair must be securely pulled up away from face, long hair needs to be all the way up in a pony-tail.'
    },
    { 
      id: 'tap', 
      name: 'Tap',
      image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762825362/Tap_dnxfal.jpg',
      position: 'center 35%',
      requirements: '1. Dancers may wear dance shorts, leggings or jazz pants. Dance shorts must be fitted (no athletic shorts or butterfly shorts)\n\n2. Leotards are required. Level 2A and up must wear black leotards. No mesh cut outs or low cut leotards. If sports bra is worn underneath it must be all black. No shirts are allowed.\n\n3. Tap shoes are necessary. Black shoes are preferred and used in performances.\n\n4. Hair must be securely pulled up away from face, long hair needs to be all the way up in a pony-tail.'
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Mobile optimized */}
      <section className="relative h-[40vh] min-h-[350px] sm:h-[45vh] sm:min-h-[400px] md:h-[50vh] md:min-h-[450px] flex items-start lg:items-center justify-center overflow-hidden section-divider-mobile pt-12 sm:pt-20 lg:pt-28">
        <div 
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=1920&q=80)',
            backgroundPosition: 'center center',
            filter: 'brightness(0.7)'
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-0 sm:pt-4 md:pt-8 lg:pt-16">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-2 text-white" style={{ fontWeight: 900, textShadow: '0 4px 6px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)' }}>
            DRESS CODE
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-white rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-white rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent rounded-full"></div>
          </div>
          <p className="text-base sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 leading-relaxed" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Proper attire for each dance style to ensure safety and optimal learning
          </p>
        </div>
      </section>

      {/* Dress Code Categories Section - Mobile optimized */}
      <section 
        className="py-12 sm:py-20 md:py-32 relative overflow-hidden section-divider-mobile"
        style={{
          marginTop: '-4rem sm:-6rem',
          paddingTop: '6rem sm:10rem',
          marginBottom: '-4rem sm:-6rem',
          paddingBottom: '6rem sm:8rem',
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 20%, #dbeafe 40%, #bae6fd 60%, #7dd3fc 80%, #38bdf8 100%)'
        }}
      >
        <div className="absolute inset-0 bg-white opacity-70"></div>
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 15% 25%, rgba(14, 116, 144, 0.25) 0%, transparent 45%), radial-gradient(circle at 85% 75%, rgba(6, 182, 212, 0.25) 0%, transparent 45%), radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.15) 0%, transparent 55%)' }}></div>
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230891b2\' fill-opacity=\'0.08\'%3E%3Cpath d=\'M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z\' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto mb-24 sm:mb-0">
            {dressCodeCategories.map((category, index) => (
              <div 
                key={category.id}
                className="group rounded-3xl overflow-visible animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out"
                style={{ transitionDelay: `${(index % 2) * 100 + 200}ms` }}
              >
                <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <img 
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ objectPosition: category.position }}
                  />
                </div>
                <div className="bg-gradient-to-br from-histown-primary/40 to-histown-accent/40 p-1.5 rounded-3xl shadow-lg -mt-6 sm:-mt-8 mx-2 sm:mx-4 relative z-10">
                  <div className="p-4 sm:p-6 rounded-2xl" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                    <h3 className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-3 sm:mb-4" style={{ fontFamily: '"Rock Salt", cursive', fontWeight: 400, fontSize: category.id === 'ballet' ? 'clamp(1rem, 2vw, 1.4rem)' : 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
                      {category.name}
                    </h3>
                    <div className="h-1 w-full max-w-[14rem] bg-gradient-to-r from-histown-primary via-histown-accent to-transparent rounded-full mb-3 sm:mb-4"></div>
                    <button
                      onClick={() => setSelectedDressCode(category.id)}
                      className="w-full sm:w-auto bg-gradient-to-r from-histown-accent to-histown-primary text-white px-6 py-3 sm:py-2 rounded-lg font-bold uppercase text-sm hover:scale-105 transform transition-all duration-300 inline-block min-h-[44px]"
                    >
                      LEARN MORE →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Dress Code Details - Mobile optimized */}
      {selectedDressCode && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDressCode(null)}
        >
          <div className="bg-gradient-to-br from-histown-primary/80 to-histown-accent/80 p-1.5 rounded-3xl shadow-2xl max-w-2xl w-full">
            <div 
              className="rounded-3xl max-h-[80vh] overflow-y-auto"
              style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 p-4 sm:p-8 rounded-t-3xl relative" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                <button 
                  onClick={() => setSelectedDressCode(null)}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-colors z-10 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="text-center pr-8">
                  <h2 
                    className="text-2xl sm:text-4xl md:text-5xl text-gray-900 mb-3 sm:mb-4" 
                    style={{ 
                      fontFamily: '"Rock Salt", cursive',
                      fontWeight: 400, 
                      fontSize: selectedDressCode === 'ballet' ? 'clamp(1.5rem, 3.5vw, 2rem)' : 'clamp(2.25rem, 4.5vw, 3rem)' 
                    }}
                  >
                    {dressCodeCategories.find(c => c.id === selectedDressCode)?.name}
                  </h2>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="h-1 w-12 sm:w-24 bg-gradient-to-r from-transparent to-cyan-600 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-cyan-600 rounded-full"></div>
                    <div className="h-1 w-24 sm:w-48 bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-cyan-600 rounded-full"></div>
                    <div className="h-1 w-12 sm:w-24 bg-gradient-to-r from-cyan-600 to-transparent rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="px-4 sm:px-8 pb-4 sm:pb-6 pt-2">
                <div className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                  {dressCodeCategories.find(c => c.id === selectedDressCode)?.requirements}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Why Us Section - Using shared component */}
      <WhyUs 
        values={whyUsValues}
        description="We provide arts education in a Christ-centered environment that nurtures each student's God-given gifts for ministry, outreach, and entertainment."
        noSlant={true}
      />

      {/* Testimonials Section - Using shared component */}
      <Testimonials />

      {/* Next Steps Section - Using shared component */}
      <NextSteps 
        description="Join the HisTown family today!"
        noSlant={true}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DressCode;
