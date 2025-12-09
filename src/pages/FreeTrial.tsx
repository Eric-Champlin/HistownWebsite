import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/layout/Navigation';
import { Footer } from '../components/layout/Footer';
import { homeContent } from '../content/home';
import { Testimonials } from '../components/sections/Testimonials';
import { WhyUs } from '../components/sections/WhyUs';
import { NextSteps } from '../components/sections/NextSteps';
import { whyUsValues } from '../data/whyUsValues';

const FreeTrial: React.FC = () => {

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
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80)',
            filter: 'brightness(0.7)'
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-0 sm:pt-4 lg:pt-16">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase mb-2 text-white" style={{ fontWeight: 900, textShadow: '0 4px 6px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)' }}>
            FREE TRIAL
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-white rounded-full"></div>
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-white rounded-full"></div>
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent rounded-full"></div>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 leading-relaxed" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Try a week of classes with no obligation
          </p>
        </div>
      </section>

      {/* Free Trial Info Section - Mobile optimized */}
      <section 
        className="py-12 sm:py-20 md:py-32 relative overflow-hidden section-divider-mobile"
        style={{
          marginTop: '-6rem',
          paddingTop: '8rem',
          marginBottom: '-4rem',
          paddingBottom: '6rem',
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 20%, #dbeafe 40%, #bae6fd 60%, #7dd3fc 80%, #38bdf8 100%)'
        }}
      >
        <div className="absolute inset-0 bg-white opacity-70"></div>
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 15% 25%, rgba(14, 116, 144, 0.25) 0%, transparent 45%), radial-gradient(circle at 85% 75%, rgba(6, 182, 212, 0.25) 0%, transparent 45%), radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.15) 0%, transparent 55%)' }}></div>
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230891b2\' fill-opacity=\'0.08\'%3E%3Cpath d=\'M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z\' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-12 lg:px-20">
          <div className="bg-gradient-to-br from-histown-primary/40 to-histown-accent/40 p-2 rounded-3xl shadow-2xl animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <div className="p-6 sm:p-8 md:p-12 rounded-2xl" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
              <div className="flex flex-col items-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-4 text-center" style={{ fontFamily: '"Rock Salt", cursive', fontWeight: 400 }}>
                  A Week Of Free Trial Classes!
                </h2>
                <div className="flex items-center justify-center space-x-2">
                  <div className="h-1 w-16 sm:w-32 bg-gradient-to-r from-transparent to-histown-primary rounded-full"></div>
                  <div className="w-2 h-2 bg-histown-accent rounded-full"></div>
                  <div className="h-1 w-32 sm:w-64 bg-gradient-to-r from-histown-primary via-histown-accent to-histown-primary rounded-full"></div>
                  <div className="w-2 h-2 bg-histown-accent rounded-full"></div>
                  <div className="h-1 w-16 sm:w-32 bg-gradient-to-r from-histown-primary to-transparent rounded-full"></div>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                <p>
                  HisTown is offering a week of free trial classes! New students are welcome to try out as many classes as you want in one week in order to get an idea of which ones make the best fit for your dancers.
                </p>
                <p className="font-bold text-histown-primary">
                  No obligation. No strings attached.
                </p>
                <p>
                  Then at the end of the week, you only pay for the classes you decide to enroll in for the semester. You don't pay for any of the other classes you tried out that week.
                </p>
                <p className="text-sm sm:text-base italic text-gray-600">
                  Please note that our free trial offer does not apply to our summer dance camps and workshops.
                </p>
                <p className="font-semibold text-gray-800 mt-6">
                  To ensure there's space for your dancer to attend these classes, please register below. After entering your information, look for the link "Request Trial Class/Drop-In Class" to select the free trial classes you'd like to take.
                </p>
              </div>

              {/* Stack buttons vertically on mobile, horizontal on desktop */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8">
                <a
                  href="https://app.thestudiodirector.com/histown/portal.sd?page=Enroll&meth=search&SEASON=Fall+2017+-+Spring+2018"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 bg-gradient-to-r from-histown-accent to-histown-primary text-white font-bold py-4 px-4 rounded-xl hover:scale-105 transform transition-all duration-300 shadow-lg text-center text-sm min-h-[44px]"
                  style={{ minHeight: '44px' }}
                >
                  VIEW CLASS SCHEDULE
                </a>
                <a
                  href="https://app.thestudiodirector.com/histown/portal.sd?page=Register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 bg-gradient-to-r from-histown-accent to-histown-primary text-white font-bold py-4 px-4 rounded-xl hover:scale-105 transform transition-all duration-300 shadow-lg text-center text-sm min-h-[44px]"
                  style={{ minHeight: '44px' }}
                >
                  REGISTER FOR FREE TRIAL
                </a>
                <Link
                  to="/contact"
                  className="w-full sm:flex-1 bg-gradient-to-r from-histown-accent to-histown-primary text-white font-bold py-4 px-4 rounded-xl hover:scale-105 transform transition-all duration-300 shadow-lg text-center text-sm min-h-[44px]"
                  style={{ minHeight: '44px' }}
                >
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Why Us Component */}
      <WhyUs 
        values={whyUsValues}
        description="We provide arts education in a Christ-centered environment that nurtures each student's God-given gifts for ministry, outreach, and entertainment."
        noSlant={true}
      />

      {/* Shared Testimonials Component */}
      <Testimonials />

      {/* Shared Next Steps Component */}
      <NextSteps 
        description="Ready to get started? Register for your free trial today!"
        ctaButtons={[
          { label: "REQUEST A TRIAL CLASS", href: "/free-trial", variant: "primary" },
          { label: "CONTACT US", href: "/contact", variant: "secondary" }
        ]}
        noSlant={true}
      />

      {/* Shared Footer Component */}
      <Footer />
    </div>
  );
};

export default FreeTrial;
