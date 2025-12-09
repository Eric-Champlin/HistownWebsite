import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/layout/Navigation';
import { Footer } from '../components/layout/Footer';
import { Testimonials } from '../components/sections/Testimonials';
import { WhyUs } from '../components/sections/WhyUs';
import { NextSteps } from '../components/sections/NextSteps';
import { whyUsValues } from '../data/whyUsValues';
import { homeContent } from '../content/home';

const PastEvents: React.FC = () => {

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
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1920&q=80)',
            backgroundPosition: 'center center',
            filter: 'brightness(0.7)'
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-0 sm:pt-4 lg:pt-16">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase mb-2 text-white" style={{ fontWeight: 900, textShadow: '0 4px 6px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)' }}>
            K-LOVE FAN AWARDS
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-white rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-white rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent rounded-full"></div>
          </div>
          <p className="text-base sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 leading-relaxed" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Celebrating faith, music, and community at one of Christian entertainment's biggest nights
          </p>
        </div>
      </section>

      {/* K-LOVE Awards Content Section - Mobile optimized */}
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
          {/* YouTube Video Embed - Full width on mobile */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <div className="bg-gradient-to-br from-histown-primary/40 to-histown-accent/40 p-1 sm:p-1.5 rounded-2xl sm:rounded-3xl shadow-2xl">
              <div className="rounded-xl sm:rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-xl sm:rounded-2xl"
                    src="https://www.youtube.com/embed/Gu_9v9EdvzM"
                    title="HisTown at K-LOVE Fan Awards"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Description Container - Mobile optimized */}
          <div className="max-w-4xl mx-auto animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '200ms' }}>
            <div className="bg-gradient-to-br from-histown-primary/40 to-histown-accent/40 p-1 sm:p-1.5 rounded-2xl sm:rounded-3xl shadow-lg">
              <div className="p-4 sm:p-8 rounded-xl sm:rounded-2xl" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-3 sm:mb-4" style={{ fontFamily: '"Rock Salt", cursive', fontWeight: 400 }}>
                    K-Love Fan Awards
                  </h3>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-transparent to-cyan-600 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-cyan-600 rounded-full"></div>
                    <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-cyan-600 rounded-full"></div>
                    <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-cyan-600 to-transparent rounded-full"></div>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-700 text-center leading-relaxed mb-3 sm:mb-4">
                  HisTown had the incredible honor of performing at the K-LOVE Fan Awards, sharing our passion for faith-centered dance and music on one of Christian entertainment's biggest stages.
                </p>
                <p className="text-base sm:text-lg text-gray-700 text-center leading-relaxed">
                  Beyond the K-LOVE stage, HisTown dancers are a beloved part of the Franklin community, performing at Franklin holiday festivals every year. From Dickens of a Christmas to other seasonal celebrations, our students bring joy and inspiration to our local community through dance, sharing the light of Christ during the most wonderful time of the year.
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

      {/* Footer - Shared Component */}
      <Footer />
    </div>
  );
};

export default PastEvents;
