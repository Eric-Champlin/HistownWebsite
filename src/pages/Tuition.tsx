import React, { useEffect } from 'react';
import Navigation from '../components/layout/Navigation';
import { homeContent } from '../content/home';
import { Testimonials } from '../components/sections/Testimonials';
import { WhyUs } from '../components/sections/WhyUs';
import { NextSteps } from '../components/sections/NextSteps';
import { whyUsValues } from '../data/whyUsValues';
import { Footer } from '../components/layout/Footer';

const Tuition: React.FC = () => {

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
            backgroundImage: 'url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1920&q=80)',
            filter: 'brightness(0.7)'
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-0 sm:pt-4 lg:pt-16">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase mb-2 text-white" style={{ fontWeight: 900, textShadow: '0 4px 6px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)' }}>
            TUITION & FEES
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-white rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-white rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent rounded-full"></div>
          </div>
          <p className="text-base sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 leading-relaxed" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Transparent pricing and flexible payment options for all programs
          </p>
        </div>
      </section>

      {/* Tuition Content Section - Mobile optimized */}
      <section 
        className="py-12 sm:py-20 md:py-32 relative overflow-hidden section-divider-mobile"
        style={{
          marginTop: '-4rem sm:-8rem',
          paddingTop: '6rem sm:10rem',
          marginBottom: '-4rem',
          paddingBottom: '16rem sm:20rem md:20rem',
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 20%, #dbeafe 40%, #bae6fd 60%, #7dd3fc 80%, #38bdf8 100%)'
        }}
      >
        <div className="absolute inset-0 bg-white opacity-70"></div>
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 15% 25%, rgba(14, 116, 144, 0.25) 0%, transparent 45%), radial-gradient(circle at 85% 75%, rgba(6, 182, 212, 0.25) 0%, transparent 45%), radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.15) 0%, transparent 55%)' }}></div>
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230891b2\' fill-opacity=\'0.08\'%3E%3Cpath d=\'M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z\' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-12 lg:px-20">
          
          {/* Monthly Tuition Overview */}
          <div className="max-w-5xl mx-auto mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <div className="bg-gradient-to-br from-histown-primary/40 to-histown-accent/40 p-1.5 rounded-3xl shadow-lg">
              <div className="p-8 rounded-2xl" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                <div className="flex flex-col items-center mb-6">
                  <h2 className="text-3xl md:text-4xl text-center mb-4 text-gray-800" style={{ fontFamily: '"Rock Salt", cursive', fontWeight: 400 }}>
                    Monthly Tuition
                  </h2>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="h-1 w-16 bg-gradient-to-r from-transparent to-histown-primary rounded-full"></div>
                    <div className="w-2 h-2 bg-histown-accent rounded-full"></div>
                    <div className="h-1 w-32 bg-gradient-to-r from-histown-primary via-histown-accent to-histown-primary rounded-full"></div>
                    <div className="w-2 h-2 bg-histown-accent rounded-full"></div>
                    <div className="h-1 w-16 bg-gradient-to-r from-histown-primary to-transparent rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Tuition is calculated based on the number of classes in any given semester (August – December and January – May) and is broken into five even payments per semester. We do not base tuition on the number of classes in any given month, so whether a month has less or more classes than others, the monthly payments stay the same.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We make the assumption that you are signing up for the entire year (August 2025 – May 2026). However, at the end of the fall semester in December, you can notify us if there are any class changes you want to make for the spring semester, including dropping some or all classes and adding new ones.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Chart - Mobile optimized with horizontal scroll */}
          <div className="max-w-5xl mx-auto mb-12 sm:mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '200ms' }}>
            <div className="bg-gradient-to-br from-histown-primary/40 to-histown-accent/40 p-1.5 rounded-3xl shadow-2xl">
              <div className="rounded-2xl overflow-x-auto" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                
                {/* Table - Minimum width on mobile to enable horizontal scroll */}
                <div className="min-w-[500px]">
                  {/* Table Header */}
                  <div className="grid grid-cols-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-center py-3 sm:py-4">
                    <div className="text-sm sm:text-lg uppercase">Class</div>
                    <div className="text-sm sm:text-lg uppercase">Per Month</div>
                    <div className="text-sm sm:text-lg uppercase">Sibling</div>
                  </div>

                  {/* Table Rows */}
                  <div className="divide-y divide-gray-200">
                    <div className="grid grid-cols-3 text-center py-3 sm:py-4 hover:bg-blue-50 transition-colors">
                      <div className="text-gray-700 font-medium text-sm sm:text-base">1st hour</div>
                      <div className="text-gray-900 font-bold text-base sm:text-lg">$95</div>
                      <div className="text-gray-700 text-sm sm:text-base">—</div>
                    </div>
                    
                    <div className="grid grid-cols-3 text-center py-3 sm:py-4 hover:bg-blue-50 transition-colors bg-gray-50">
                      <div className="text-gray-700 font-medium text-sm sm:text-base">2nd hour</div>
                      <div className="text-gray-900 font-bold text-base sm:text-lg">$75</div>
                      <div className="text-gray-900 font-bold text-base sm:text-lg">$95</div>
                    </div>
                    
                    <div className="grid grid-cols-3 text-center py-3 sm:py-4 hover:bg-blue-50 transition-colors">
                      <div className="text-gray-700 font-medium text-sm sm:text-base">3rd hour</div>
                      <div className="text-gray-900 font-bold text-base sm:text-lg">$60</div>
                      <div className="text-gray-900 font-bold text-base sm:text-lg">$75</div>
                    </div>
                    
                    <div className="grid grid-cols-3 text-center py-3 sm:py-4 hover:bg-blue-50 transition-colors bg-gray-50">
                      <div className="text-gray-700 font-medium text-sm sm:text-base">Each additional hour</div>
                      <div className="text-gray-900 font-bold text-base sm:text-lg">$35</div>
                      <div className="text-gray-900 font-bold text-base sm:text-lg">$60</div>
                    </div>
                  </div>

                  {/* Caps Notice */}
                  <div className="bg-gradient-to-r from-histown-primary/10 to-histown-accent/10 p-4 sm:p-6 border-t-2 border-histown-primary/30">
                    <p className="text-center text-gray-800 font-semibold text-sm sm:text-base">
                      Per Student Cap: <span className="text-histown-primary font-black">$425/month</span> | 
                      Family Cap: <span className="text-histown-primary font-black">$605/month</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile scroll hint */}
            <p className="text-center text-gray-600 text-sm mt-2 sm:hidden">← Swipe to see all columns →</p>
          </div>

          {/* Sibling Discount Explanation */}
          <div className="max-w-5xl mx-auto mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '300ms' }}>
            <div className="bg-gradient-to-br from-histown-accent/40 to-histown-secondary/40 p-1.5 rounded-3xl shadow-lg">
              <div className="p-8 rounded-2xl" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                <h3 className="text-2xl font-black uppercase mb-4 text-gray-800 text-center">Sibling Discount</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Unlike many studios that only offer you a small discount (usually around 10%) off the student with the lesser tuition, at HisTown siblings get to directly piggyback off the first dancer's discounted tuition rate.
                </p>
                <div className="bg-histown-primary/10 p-6 rounded-xl border-l-4 border-histown-primary">
                  <p className="text-gray-800 font-semibold mb-2">Example:</p>
                  <p className="text-gray-700 leading-relaxed">
                    One student taking 2 hours of dance per week would be <span className="font-bold text-histown-primary">$170 per month</span>. If a sibling also wanted to take one hour of dance per week, that would only be an additional <span className="font-bold text-histown-primary">$60 per month</span> for a total of <span className="font-bold text-histown-primary">$230 per month</span> for the family.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    If you have more than one child interested in dancing, this can be a considerable savings for your family!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Fees Grid - Mobile optimized */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">
            
            {/* Registration Fees */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '400ms' }}>
              <div className="bg-gradient-to-br from-histown-primary/40 to-histown-accent/40 p-1.5 rounded-3xl shadow-lg h-full">
                <div className="p-6 rounded-2xl h-full" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                  <h3 className="text-xl font-black uppercase mb-4 text-gray-800">Registration Fees</h3>
                  <p className="text-3xl font-black text-histown-primary mb-2">$50 <span className="text-lg text-gray-600 font-normal">per student</span></p>
                  <p className="text-2xl font-bold text-histown-accent mb-4">$125 <span className="text-base text-gray-600 font-normal">family cap</span></p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Annual registration fee (non-refundable and non-transferable) reserves placement in classes the student has enrolled in. Deducted when you first enroll.
                  </p>
                </div>
              </div>
            </div>

            {/* Recital Fees */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '500ms' }}>
              <div className="bg-gradient-to-br from-histown-accent/40 to-histown-secondary/40 p-1.5 rounded-3xl shadow-lg h-full">
                <div className="p-6 rounded-2xl h-full" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                  <h3 className="text-xl font-black uppercase mb-4 text-gray-800">Recital Fees</h3>
                  <p className="text-3xl font-black text-histown-primary mb-2">$60 <span className="text-lg text-gray-600 font-normal">per dancer</span></p>
                  <p className="text-2xl font-bold text-histown-accent mb-4">$135 <span className="text-base text-gray-600 font-normal">family cap</span></p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    HisTown has Spring (mid-May) and Winter (mid-December) performances. Fees help pay for auditorium rental, stage director, and backstage help.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <span className="font-semibold">Video streaming:</span> $15 per family for professionally produced recital performances.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mt-2">
                    <span className="font-semibold">Tickets:</span> $15 each (children 3 and under free on lap)
                  </p>
                </div>
              </div>
            </div>

            {/* Costume Fees */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '600ms' }}>
              <div className="bg-gradient-to-br from-histown-secondary/40 to-histown-primary/40 p-1.5 rounded-3xl shadow-lg h-full">
                <div className="p-6 rounded-2xl h-full" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                  <h3 className="text-xl font-black uppercase mb-4 text-gray-800">Costume Fees</h3>
                  <p className="text-3xl font-black text-histown-primary mb-4">$46-$65 <span className="text-lg text-gray-600 font-normal">per costume</span></p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    HisTown strives to keep costume costs down. A non-refundable deposit of $25 per costume is due in early October (Fall) and March (Spring).
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Final costume fees announced via email. Balance due end of October (Fall) and April (Spring).
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '700ms' }}>
              <div className="bg-gradient-to-br from-histown-primary/40 to-histown-secondary/40 p-1.5 rounded-3xl shadow-lg h-full">
                <div className="p-6 rounded-2xl h-full" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                  <h3 className="text-xl font-black uppercase mb-4 text-gray-800">Payment Information</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    <span className="font-semibold">Auto-pay:</span> Tuition automatically drafted on the 1st of each month from credit card, debit card, or checking account.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    <span className="font-semibold">August tuition:</span> Deducted on or after August 4th.
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mb-3">
                    <p className="text-gray-800 text-sm font-semibold mb-1">Credit Card Surcharge</p>
                    <p className="text-gray-700 text-xs leading-relaxed">
                      3.5% surcharge on credit/debit card payments. Avoid by using checking account payment.
                    </p>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <span className="font-semibold">Late fee:</span> $15 if tuition not paid by first week of month.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Policies */}
          <div className="max-w-5xl mx-auto mb-24 sm:mb-0 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '800ms' }}>
            <div className="bg-gradient-to-br from-histown-accent/40 to-histown-primary/40 p-1.5 rounded-3xl shadow-lg">
              <div className="p-8 rounded-2xl" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                <h3 className="text-2xl font-black uppercase mb-6 text-gray-800 text-center">Refunds & Withdrawals</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border-l-4 border-histown-primary">
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-semibold">No refunds</span> for missed classes or canceled classes. You may take a make-up class at the same level or one level below.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border-l-4 border-histown-accent">
                    <p className="text-gray-700 leading-relaxed mb-2">
                      <span className="font-semibold">Semester commitment:</span> We ask for a semester commitment from each dancer.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      If you need to withdraw early, you will be expected to pay the remainder of the month, following month, and costume fees if costumes have already been purchased.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border-l-4 border-histown-secondary">
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-semibold">Written notice:</span> At least two weeks prior to the end of any given month is required, or you may be charged for an extra month. If you give us written notice at least 30 days in advance, you will not be charged that additional month.
                    </p>
                  </div>
                </div>
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
        description="Ready to join the HisTown family?"
        noSlant={true}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Tuition;
