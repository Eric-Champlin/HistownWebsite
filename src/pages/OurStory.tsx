import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/layout/Navigation';
import { homeContent } from '../content/home';
import { Testimonials } from '../components/sections/Testimonials';
import { WhyUs } from '../components/sections/WhyUs';
import { NextSteps } from '../components/sections/NextSteps';
import { whyUsValues } from '../data/whyUsValues';
import { Footer } from '../components/layout/Footer';

const OurStory: React.FC = () => {

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
            backgroundImage: 'url(https://res.cloudinary.com/dxqzby6fc/image/upload/v1762910672/Our_Story.jpg_gcfdgd.webp)',
            backgroundPosition: 'center center',
            filter: 'brightness(0.7)'
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-0 sm:pt-4 md:pt-8 lg:pt-16">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-2 text-white" style={{ fontWeight: 900, textShadow: '0 4px 6px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)' }}>
            OUR STORY
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-white rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-white rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent rounded-full"></div>
          </div>
          <p className="text-base sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 leading-relaxed px-2" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Discover the journey of how HisTown became a beacon of faith-centered arts education
          </p>
        </div>
      </section>

      {/* Content Section - Mobile optimized */}
      <section 
        className="py-12 sm:py-20 md:py-32 relative" 
        style={{ 
          marginTop: '-4rem', 
          paddingTop: '6rem',
          marginBottom: '-4rem',
          paddingBottom: '6rem',
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 20%, #dbeafe 40%, #bae6fd 60%, #7dd3fc 80%, #38bdf8 100%)'
        }}
      >
        <div className="absolute inset-0 bg-white opacity-70"></div>
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 15% 25%, rgba(14, 116, 144, 0.25) 0%, transparent 45%), radial-gradient(circle at 85% 75%, rgba(6, 182, 212, 0.25) 0%, transparent 45%), radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.15) 0%, transparent 55%)' }}></div>
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230891b2\' fill-opacity=\'0.08\'%3E%3Cpath d=\'M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z\' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-12 lg:px-20">
          <div className="group rounded-3xl overflow-visible">
            {/* Story Image - Mobile optimized height */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762910672/Our_Story.jpg_gcfdgd.webp"
                alt="Our Story"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center center' }}
              />
            </div>
            
            {/* Description Card with Blue Border - Mobile optimized */}
            <div className="bg-gradient-to-br from-histown-primary/40 to-histown-accent/40 p-2 rounded-3xl shadow-lg -mt-8 mx-2 sm:mx-4 relative z-10">
              <div className="p-4 sm:p-6 md:p-8 rounded-2xl" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-3 sm:mb-4" style={{ fontFamily: '"Rock Salt", cursive', fontWeight: 400 }}>
                    Our Story
                  </h3>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="h-1 w-8 sm:w-16 bg-gradient-to-r from-transparent to-histown-primary rounded-full"></div>
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-histown-accent rounded-full"></div>
                    <div className="h-1 w-20 sm:w-32 bg-gradient-to-r from-histown-primary via-histown-accent to-histown-primary rounded-full"></div>
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-histown-accent rounded-full"></div>
                    <div className="h-1 w-8 sm:w-16 bg-gradient-to-r from-histown-primary to-transparent rounded-full"></div>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  HisTown Dance Studio was founded with a vision to create a space where students could develop their artistic talents while growing in their faith. What began as a small studio with a handful of passionate instructors has blossomed into a thriving community of dancers, musicians, and families united by a common purpose: to glorify God through the arts.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  Our founders, Ken and Teresa, felt called to establish a studio that would be different from traditional dance schools. They envisioned a place where technical excellence would be paired with spiritual growth, where students would learn not just to perform, but to worship through movement. This vision has guided every decision, from the classes we offer to the instructors we hire.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                  Today, HisTown continues to grow and evolve, but our core mission remains unchanged: to provide exceptional arts education in a Christ-centered environment. We are grateful for every family that has trusted us with their children, every instructor who has poured their heart into teaching, and every student who has discovered their God-given gifts within our walls. This is His town, and we are honored to be part of His story.
                </p>
                
                {/* Back to About Button - Mobile optimized */}
                <div className="text-center">
                  <Link 
                    to="/about"
                    className="inline-block w-full sm:w-auto bg-gradient-to-r from-histown-accent to-histown-primary text-white font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-xl uppercase tracking-wide hover:scale-105 transform transition-all duration-300 shadow-lg"
                  >
                    Back to About
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


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
        ctaButtons={[
          { label: "REQUEST A TRIAL CLASS", href: "/free-trial", variant: "primary" },
          { label: "CONTACT US", href: "/contact", variant: "secondary" }
        ]}
        noSlant={true}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OurStory;
