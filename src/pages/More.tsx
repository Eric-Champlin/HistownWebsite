import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/layout/Navigation';
import { Testimonials } from '../components/sections/Testimonials';
import { WhyUs } from '../components/sections/WhyUs';
import { NextSteps } from '../components/sections/NextSteps';
import { Footer } from '../components/layout/Footer';
import { whyUsValues } from '../data/whyUsValues';
import { homeContent } from '../content/home';

const More: React.FC = () => {

  const moreSections = [
    { id: 'dress-code', name: 'Dress Code', description: 'Learn about our studio dress code requirements and guidelines for all classes and performances', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762912992/dress_code_scrkip.avif', position: 'center center' },
    { id: 'studio-rental', name: 'Studio Rental', description: 'Rent our beautiful studio space for your events, rehearsals, or private lessons', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762912996/rental.jpg_bvo1cv.webp', position: 'center center' },
    { id: 'tuition-fees', name: 'Tuition & Fees', description: 'View our transparent pricing structure and flexible payment options for all programs', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762913016/Tutiion_s28dl5.avif', position: 'center center' },
    { id: 'https://app.thestudiodirector.com/histown/portal.sd?page=Enroll&meth=search&SEASON=Fall+2017+-+Spring+2018', name: 'Class Schedule', description: 'Browse our complete class schedule and find the perfect time for your family', image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800', position: 'center center' }
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
      <section className="relative h-[40vh] min-h-[350px] sm:h-[45vh] sm:min-h-[400px] flex items-start lg:items-center justify-center overflow-hidden section-divider-mobile pt-12 sm:pt-20 lg:pt-28">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600)',
            filter: 'brightness(0.7)'
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-0 sm:pt-4 lg:pt-16">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase mb-2 text-white" style={{ fontWeight: 900, textShadow: '0 4px 6px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)' }}>
            MORE INFO
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-white rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-white rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent rounded-full"></div>
          </div>
          <p className="text-base sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 leading-relaxed" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Everything you need to know about policies, pricing, and scheduling at HisTown
          </p>
        </div>
      </section>

      {/* More Sections Grid - Mobile optimized */}
      <section 
        className="py-12 sm:py-20 md:py-32 relative overflow-hidden section-divider-mobile mt-[-4rem] lg:mt-0"
        style={{
          paddingTop: '6rem',
          marginBottom: '-4rem',
          paddingBottom: '6rem',
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 20%, #dbeafe 40%, #bae6fd 60%, #7dd3fc 80%, #38bdf8 100%)'
        }}
      >
        <div className="absolute inset-0 bg-white opacity-70"></div>
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 15% 25%, rgba(14, 116, 144, 0.25) 0%, transparent 45%), radial-gradient(circle at 85% 75%, rgba(6, 182, 212, 0.25) 0%, transparent 45%), radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.15) 0%, transparent 55%)' }}></div>
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230891b2\' fill-opacity=\'0.08\'%3E%3Cpath d=\'M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z\' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
            
            {moreSections.map((section, index) => (
              <div 
                key={section.id}
                id={section.id}
                className="group rounded-3xl overflow-visible animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out scroll-mt-32 flex flex-col" 
                style={{ transitionDelay: `${(index % 2) * 200 + 200}ms` }}
              >
                <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <img 
                    src={section.image}
                    alt={section.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ objectPosition: section.position }}
                  />
                </div>
                <div className="bg-gradient-to-br from-histown-primary/40 to-histown-accent/40 p-1.5 rounded-3xl shadow-lg -mt-8 mx-4 relative z-10 flex flex-col flex-1">
                  <div className="p-4 sm:p-6 rounded-2xl flex flex-col flex-1" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                    <h3 className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-3 sm:mb-4" style={{ fontFamily: '"Rock Salt", cursive', fontWeight: 400, fontSize: 'clamp(1.125rem, 2.5vw, 1.75rem)', lineHeight: '1.2' }}>
                      {section.name}
                    </h3>
                    <div className="h-1 w-full max-w-[14rem] bg-gradient-to-r from-histown-primary via-histown-accent to-transparent rounded-full mb-3 sm:mb-4"></div>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-1 min-h-[3rem]">
                      {section.description}
                    </p>
                    {section.id === 'dress-code' ? (
                      <Link to="/dress-code" className="block">
                        <button className="bg-gradient-to-r from-histown-accent to-histown-primary text-white px-4 sm:px-6 py-3 sm:py-2 rounded-lg font-bold uppercase text-xs sm:text-sm hover:scale-105 transform transition-all duration-300 w-full min-h-[44px]">
                          LEARN MORE →
                        </button>
                      </Link>
                    ) : section.id === 'studio-rental' ? (
                      <Link to="/studio-rental" className="block">
                        <button className="bg-gradient-to-r from-histown-accent to-histown-primary text-white px-4 sm:px-6 py-3 sm:py-2 rounded-lg font-bold uppercase text-xs sm:text-sm hover:scale-105 transform transition-all duration-300 w-full min-h-[44px]">
                          LEARN MORE →
                        </button>
                      </Link>
                    ) : section.id === 'tuition-fees' ? (
                      <Link to="/tuition-fees" className="block">
                        <button className="bg-gradient-to-r from-histown-accent to-histown-primary text-white px-4 sm:px-6 py-3 sm:py-2 rounded-lg font-bold uppercase text-xs sm:text-sm hover:scale-105 transform transition-all duration-300 w-full min-h-[44px]">
                          LEARN MORE →
                        </button>
                      </Link>
                    ) : section.id.startsWith('http') ? (
                      <a href={section.id} target="_blank" rel="noopener noreferrer" className="block">
                        <button className="bg-gradient-to-r from-histown-accent to-histown-primary text-white px-4 sm:px-6 py-3 sm:py-2 rounded-lg font-bold uppercase text-xs sm:text-sm hover:scale-105 transform transition-all duration-300 w-full min-h-[44px]">
                          LEARN MORE →
                        </button>
                      </a>
                    ) : (
                      <button className="bg-gradient-to-r from-histown-accent to-histown-primary text-white px-4 sm:px-6 py-3 sm:py-2 rounded-lg font-bold uppercase text-xs sm:text-sm hover:scale-105 transform transition-all duration-300 w-full min-h-[44px]">
                        LEARN MORE →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Why Us Section - Using shared component */}
      <WhyUs 
        title="WHY US?"
        description="We provide comprehensive information and support to make your HisTown experience seamless and enjoyable."
        values={whyUsValues}
        noSlant={true}
      />

      {/* Testimonials Section - Using shared component */}
      <Testimonials />

      {/* Next Steps Section - Using shared component */}
      <NextSteps 
        description="Ready to join the HisTown family?"
        noSlant={true}
      />

      {/* Footer - Using shared component */}
      <Footer />
    </div>
  );
};

export default More;
