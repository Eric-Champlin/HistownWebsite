import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/layout/Navigation';
import { homeContent } from '../content/home';
import { Testimonials } from '../components/sections/Testimonials';
import { WhyUs } from '../components/sections/WhyUs';
import { NextSteps } from '../components/sections/NextSteps';
import { whyUsValues } from '../data/whyUsValues';
import { Footer } from '../components/layout/Footer';

const FeaturedClasses: React.FC = () => {

  const featuredClasses = [
    { id: 'acting', name: 'Acting Classes', description: 'Develop stage presence, character work, and performance skills in a supportive Christian environment', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762908818/Acting_fauf4j.png', position: 'center center' },
    { id: 'adult', name: 'Adult Classes', description: 'Dance and fitness classes designed specifically for adults seeking creative expression and community', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762908627/Adult_wzixm0.webp', position: 'center center' },
    { id: 'company', name: 'Company Classes', description: 'Elite training for dedicated dancers committed to excellence and ministry through performance', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762908625/Company_iszsdb.png', position: 'center center' },
    { id: 'competition', name: 'Competition Teams', description: 'High-level competitive dance training with opportunities to showcase talent at regional competitions', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762908625/Competition_lvgdnb.jpg', position: 'center center' }
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
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=1600)',
            filter: 'brightness(0.7)'
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-0 sm:pt-4 md:pt-8 lg:pt-16">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-2 text-white" style={{ fontWeight: 900, textShadow: '0 4px 6px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)' }}>
            FEATURED PROGRAMS
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-white rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-white rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent rounded-full"></div>
          </div>
          <p className="text-base sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 leading-relaxed" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Elite training, performance opportunities, and specialized programs for dedicated students
          </p>
        </div>
      </section>

      {/* Featured Classes Grid Section - Mobile optimized */}
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
            
            {featuredClasses.map((featuredClass, index) => (
              <div 
                key={featuredClass.id}
                id={featuredClass.id}
                className="group rounded-3xl overflow-visible animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out scroll-mt-32 flex flex-col" 
                style={{ transitionDelay: `${(index % 2) * 200 + 200}ms` }}
              >
                <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <img 
                    src={featuredClass.image}
                    alt={featuredClass.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ objectPosition: featuredClass.position }}
                  />
                </div>
                <div className="bg-gradient-to-br from-histown-primary/40 to-histown-accent/40 p-1.5 rounded-3xl shadow-lg -mt-8 mx-2 sm:mx-4 relative z-10 flex flex-col flex-1">
                  <div className="p-4 sm:p-6 rounded-2xl flex flex-col flex-1" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                    <h3 className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-3 sm:mb-4" style={{ fontFamily: '"Rock Salt", cursive', fontWeight: 400, fontSize: 'clamp(1.125rem, 2.5vw, 1.75rem)', lineHeight: '1.2' }}>
                      {featuredClass.name}
                    </h3>
                    <div className="h-1 w-full max-w-[14rem] bg-gradient-to-r from-histown-primary via-histown-accent to-transparent rounded-full mb-3 sm:mb-4"></div>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-1 min-h-[3rem]">
                      {featuredClass.description}
                    </p>
                    <Link 
                      to={`/classes/featured/${featuredClass.id}`}
                      className="bg-gradient-to-r from-histown-accent to-histown-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold uppercase text-xs sm:text-sm hover:scale-105 transform transition-all duration-300 w-full text-center block min-h-[44px] flex items-center justify-center"
                    >
                      LEARN MORE →
                    </Link>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Why Us Section - Using shared component */}
      <WhyUs 
        description="We provide specialized training in a Christ-centered environment that nurtures each student's God-given gifts for ministry, outreach, and entertainment."
        values={whyUsValues}
        noSlant={true}
      />

      {/* Testimonials Section - Using shared component */}
      <Testimonials />

      {/* Next Steps Section - Using shared component */}
      <NextSteps noSlant={true} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FeaturedClasses;
