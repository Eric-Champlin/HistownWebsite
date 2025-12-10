import React, { useEffect } from 'react';
import Navigation from '../components/layout/Navigation';
import { Testimonials } from '../components/sections/Testimonials';
import { WhyUs } from '../components/sections/WhyUs';
import { NextSteps } from '../components/sections/NextSteps';
import { whyUsValues } from '../data/whyUsValues';
import { Footer } from '../components/layout/Footer';

const Programs: React.FC = () => {

  useEffect(() => {
    // Scroll animation observer
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
    <div className="min-h-screen bg-histown-neutral">
      <Navigation />

      {/* Hero Section - Mobile optimized */}
      <section className="relative h-[40vh] min-h-[350px] sm:h-[45vh] sm:min-h-[400px] md:h-[50vh] md:min-h-[450px] flex items-start lg:items-center justify-center overflow-hidden section-divider-mobile pt-12 sm:pt-20 lg:pt-28">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/dxqzby6fc/image/upload/v1762554824/27.JPG_n4ksuo.webp)',
            filter: 'brightness(0.7)'
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-0 sm:pt-4 md:pt-8 lg:pt-16">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-2 text-white" style={{ fontWeight: 900, textShadow: '0 4px 6px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)' }}>
            OUR PROGRAMS
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-white rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-white rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent rounded-full"></div>
          </div>
          <p className="text-base sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 leading-relaxed" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Discover your passion through dance, music, and creative expression in a Christ-centered environment
          </p>
        </div>
      </section>

      {/* Programs Grid Section - Mobile optimized */}
      <section 
        className="pt-12 pb-14 sm:py-20 md:py-32 relative overflow-hidden section-divider-mobile mobile-programs-spacing mt-[-4rem] lg:mt-0"
        style={{
          paddingTop: '6rem',
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 20%, #dbeafe 40%, #bae6fd 60%, #7dd3fc 80%, #38bdf8 100%)'
        }}
      >
        <div className="absolute inset-0 bg-white opacity-70"></div>
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 15% 25%, rgba(14, 116, 144, 0.25) 0%, transparent 45%), radial-gradient(circle at 85% 75%, rgba(6, 182, 212, 0.25) 0%, transparent 45%), radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.15) 0%, transparent 55%)' }}></div>
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230891b2\' fill-opacity=\'0.08\'%3E%3Cpath d=\'M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z\' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-12 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            
            {/* Dance Classes Card - Mobile optimized */}
            <div className="group rounded-3xl overflow-visible animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '200ms' }}>
              <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <img 
                  src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762554824/30.JPG_o65mkj.webp"
                  alt="Dance Classes"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="bg-gradient-to-br from-histown-primary/40 to-histown-accent/40 p-1.5 rounded-3xl shadow-lg -mt-8 mx-2 sm:mx-4 relative z-10">
                <div className="p-4 sm:p-6 rounded-2xl" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                  <h3 className="text-lg sm:text-xl md:text-3xl text-gray-800 mb-3 sm:mb-4" style={{ fontFamily: '"Rock Salt", cursive', letterSpacing: '0.05em', fontWeight: 400 }}>
                    Dance Classes
                  </h3>
                  <div className="h-1 w-full max-w-[14rem] bg-gradient-to-r from-histown-primary via-histown-accent to-transparent rounded-full mb-3 sm:mb-4"></div>
                  <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm">
                    From ballet to contemporary, discover the joy of movement in a Christ-centered environment
                  </p>
                  <a href="/classes/dance" className="bg-gradient-to-r from-histown-accent to-histown-primary text-white px-4 sm:px-6 py-2 rounded-lg font-bold uppercase text-xs sm:text-sm hover:scale-105 transform transition-all duration-300 inline-block w-full sm:w-auto text-center">
                    MORE INFO →
                  </a>
                </div>
              </div>
            </div>

            {/* Music Classes Card - Mobile optimized */}
            <div className="group rounded-3xl overflow-visible animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '400ms' }}>
              <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <img 
                  src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762554824/bora-sozuer-dGYIWKq7rxg-unsplash_jcc38l.jpg"
                  alt="Music Classes"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="bg-gradient-to-br from-histown-accent/40 to-histown-secondary/40 p-1.5 rounded-3xl shadow-lg -mt-8 mx-2 sm:mx-4 relative z-10">
                <div className="p-4 sm:p-6 rounded-2xl" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                  <h3 className="text-lg sm:text-xl md:text-3xl text-gray-800 mb-3 sm:mb-4" style={{ fontFamily: '"Rock Salt", cursive', letterSpacing: '0.05em', fontWeight: 400 }}>
                    Music Classes
                  </h3>
                  <div className="h-1 w-full max-w-[14rem] bg-gradient-to-r from-histown-primary via-histown-accent to-transparent rounded-full mb-3 sm:mb-4"></div>
                  <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm">
                    Unlock your musical potential with personalized instruction from gifted teachers
                  </p>
                  <a href="/classes/music" className="bg-gradient-to-r from-histown-accent to-histown-primary text-white px-4 sm:px-6 py-2 rounded-lg font-bold uppercase text-xs sm:text-sm hover:scale-105 transform transition-all duration-300 inline-block w-full sm:w-auto text-center">
                    MORE INFO →
                  </a>
                </div>
              </div>
            </div>

            {/* Featured Programs Card - Mobile optimized */}
            <div className="group rounded-3xl overflow-visible animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '600ms' }}>
              <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <img 
                  src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762554959/IMG_783.JPG_tqbci4.webp"
                  alt="Featured Programs"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="bg-gradient-to-br from-histown-secondary/40 to-histown-primary/40 p-1.5 rounded-3xl shadow-lg -mt-8 mx-2 sm:mx-4 relative z-10">
                <div className="p-4 sm:p-6 rounded-2xl" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                  <h3 className="text-lg sm:text-xl md:text-3xl text-gray-800 mb-3 sm:mb-4" style={{ fontFamily: '"Rock Salt", cursive', letterSpacing: '0.05em', fontWeight: 400 }}>
                    Featured
                  </h3>
                  <div className="h-1 w-full max-w-[14rem] bg-gradient-to-r from-histown-primary via-histown-accent to-transparent rounded-full mb-3 sm:mb-4"></div>
                  <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm">
                    Elite training, performance opportunities, and specialized programs for advanced students
                  </p>
                  <a href="/classes/featured" className="bg-gradient-to-r from-histown-accent to-histown-primary text-white px-4 sm:px-6 py-2 rounded-lg font-bold uppercase text-xs sm:text-sm hover:scale-105 transform transition-all duration-300 inline-block w-full sm:w-auto text-center">
                    MORE INFO →
                  </a>
                </div>
              </div>
            </div>

            {/* Tuition & Fees Card - Mobile optimized */}
            <div className="group rounded-3xl overflow-visible animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '800ms' }}>
              <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <img 
                  src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762555046/micheile-henderson-ZVprbBmT8QA-unsplash_gttpbq.jpg"
                  alt="Tuition & Fees"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="bg-gradient-to-br from-histown-primary/40 to-histown-secondary/40 p-1.5 rounded-3xl shadow-lg -mt-8 mx-2 sm:mx-4 relative z-10">
                <div className="p-4 sm:p-6 rounded-2xl" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                  <h3 className="text-lg sm:text-xl md:text-3xl text-gray-800 mb-3 sm:mb-4" style={{ fontFamily: '"Rock Salt", cursive', letterSpacing: '0.05em', fontWeight: 400 }}>
                    Tuition & Fees
                  </h3>
                  <div className="h-1 w-full max-w-[14rem] bg-gradient-to-r from-histown-primary via-histown-accent to-transparent rounded-full mb-3 sm:mb-4"></div>
                  <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm">
                    Transparent pricing and flexible payment options to make quality instruction accessible
                  </p>
                  <a href="/tuition-fees" className="bg-gradient-to-r from-histown-accent to-histown-primary text-white px-4 sm:px-6 py-2 rounded-lg font-bold uppercase text-xs sm:text-sm hover:scale-105 transform transition-all duration-300 inline-block w-full sm:w-auto text-center">
                    VIEW PRICING →
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Us Section - Using shared component */}
      <div className="-mt-16 sm:-mt-0">
        <WhyUs values={whyUsValues} noSlant={true} />
      </div>

      {/* Testimonials Section - Using shared component */}
      <Testimonials />

      {/* Next Steps Section - Using shared component */}
      <NextSteps noSlant={true} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Programs;
