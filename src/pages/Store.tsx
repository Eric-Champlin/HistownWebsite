import React, { useEffect } from 'react';
import Navigation from '../components/layout/Navigation';
import { homeContent } from '../content/home';
import { Testimonials } from '../components/sections/Testimonials';
import { WhyUs } from '../components/sections/WhyUs';
import { NextSteps } from '../components/sections/NextSteps';
import { whyUsValues } from '../data/whyUsValues';
import { Footer } from '../components/layout/Footer';

const Store: React.FC = () => {

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
            backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80)',
            filter: 'brightness(0.7)'
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-0 sm:pt-4 lg:pt-16">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase mb-2 text-white" style={{ fontWeight: 900, textShadow: '0 4px 6px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)' }}>
            STORE
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-white rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-white rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent rounded-full"></div>
          </div>
          <p className="text-base sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 leading-relaxed" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Shop HisTown merchandise, dancewear, and accessories
          </p>
        </div>
      </section>

      {/* Store Coming Soon Section - Mobile optimized */}
      <section 
        className="py-12 sm:py-20 md:py-32 relative overflow-hidden section-divider-mobile mt-[-4rem] lg:mt-0"
        style={{
          paddingTop: '6rem',
          marginBottom: '-6rem',
          paddingBottom: '8rem',
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 20%, #dbeafe 40%, #bae6fd 60%, #7dd3fc 80%, #38bdf8 100%)'
        }}
      >
        <div className="absolute inset-0 bg-white opacity-70"></div>
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 15% 25%, rgba(14, 116, 144, 0.25) 0%, transparent 45%), radial-gradient(circle at 85% 75%, rgba(6, 182, 212, 0.25) 0%, transparent 45%), radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.15) 0%, transparent 55%)' }}></div>
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230891b2\' fill-opacity=\'0.08\'%3E%3Cpath d=\'M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z\' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-8 sm:mb-16">
            <div className="bg-gradient-to-br from-histown-primary/40 to-histown-accent/40 p-1.5 rounded-3xl shadow-lg">
              <div className="p-6 sm:p-12 rounded-2xl" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-histown-primary to-histown-accent rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div className="flex flex-col items-center mb-4 sm:mb-6">
                  <h2 className="text-2xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 text-gray-800" style={{ fontFamily: '"Rock Salt", cursive', fontWeight: 400 }}>
                    Coming Soon!
                  </h2>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="h-1 w-8 sm:w-16 bg-gradient-to-r from-transparent to-histown-primary rounded-full"></div>
                    <div className="w-2 h-2 bg-histown-accent rounded-full"></div>
                    <div className="h-1 w-16 sm:w-32 bg-gradient-to-r from-histown-primary via-histown-accent to-histown-primary rounded-full"></div>
                    <div className="w-2 h-2 bg-histown-accent rounded-full"></div>
                    <div className="h-1 w-8 sm:w-16 bg-gradient-to-r from-histown-primary to-transparent rounded-full"></div>
                  </div>
                </div>
                <p className="text-base sm:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  Our online store is currently under construction. Soon you'll be able to shop for HisTown branded merchandise, dancewear, accessories, and more!
                </p>
                <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                  In the meantime, please contact us if you have any questions about purchasing studio merchandise or required dancewear for classes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section - Shared Component */}
      <WhyUs 
        values={whyUsValues}
        description="We provide arts education in a Christ-centered environment that nurtures each student's God-given gifts for ministry, outreach, and entertainment."
        noSlant={true}
      />


      {/* Testimonials Section - Shared Component */}
      <Testimonials />

      {/* Next Steps Section - Shared Component */}
      <NextSteps 
        description="Join the HisTown family today!"
        noSlant={true}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Store;
