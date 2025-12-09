import React, { useEffect } from 'react';
import Navigation from '../components/layout/Navigation';
import { Testimonials } from '../components/sections/Testimonials';
import { WhyUs } from '../components/sections/WhyUs';
import { NextSteps } from '../components/sections/NextSteps';
import { Footer } from '../components/layout/Footer';
import { whyUsValues } from '../data/whyUsValues';
import { FormLoadingOverlay } from '../components/common/LoadingStates';

const Contact: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, '');
    const phoneNumberLength = phoneNumber.length;
    
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedPhone);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        (e.target as HTMLFormElement).reset();
        setPhoneNumber('');
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <section className="relative h-[45vh] min-h-[400px] sm:h-[50vh] sm:min-h-[450px] flex items-start lg:items-center justify-center overflow-hidden section-divider-mobile pt-12 sm:pt-20 lg:pt-28">
        <div 
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/dxqzby6fc/image/upload/v1762910868/Contact_vjskho.avif)',
            backgroundPosition: 'center 70%',
            filter: 'brightness(0.7)'
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-0 sm:pt-0 lg:pt-8">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase mb-2 text-white" style={{ fontWeight: 900, textShadow: '0 4px 6px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)' }}>
            CONTACT US
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-white rounded-full"></div>
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-white rounded-full"></div>
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent rounded-full"></div>
          </div>
          <p className="text-base sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 leading-relaxed" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Get in touch with our team - we'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        className="py-20 md:py-32 relative overflow-hidden section-divider-mobile"
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
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-12 lg:px-20">
          <div className="space-y-8">
            
            {/* Contact Information - Full Width */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="bg-gradient-to-br from-histown-primary/40 to-histown-accent/40 p-2 rounded-3xl shadow-2xl">
                <div className="p-8 rounded-2xl" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                  <div className="flex flex-col items-center mb-8">
                    <h2 className="text-3xl md:text-4xl text-gray-800 mb-4 text-center" style={{ fontFamily: '"Rock Salt", cursive', fontWeight: 400 }}>
                      Get In Touch
                    </h2>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="h-1 w-16 bg-gradient-to-r from-transparent to-histown-primary rounded-full"></div>
                      <div className="w-2 h-2 bg-histown-accent rounded-full"></div>
                      <div className="h-1 w-32 bg-gradient-to-r from-histown-primary via-histown-accent to-histown-primary rounded-full"></div>
                      <div className="w-2 h-2 bg-histown-accent rounded-full"></div>
                      <div className="h-1 w-16 bg-gradient-to-r from-histown-primary to-transparent rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Stack vertically on mobile, 2 columns on tablet, 4 columns on desktop */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-histown-primary to-histown-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-2 uppercase">Address</h3>
                      <p className="text-sm sm:text-base text-gray-600">1010 Perrone Way, Suite 200</p>
                      <p className="text-sm sm:text-base text-gray-600">Franklin, TN 37069</p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-histown-primary to-histown-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-2 uppercase">Phone</h3>
                      {/* Mobile-optimized tel: link for tap-to-call */}
                      <p className="text-sm sm:text-base text-gray-600">
                        <a 
                          href="tel:+16156408349" 
                          className="hover:text-histown-primary transition-colors inline-block min-h-[44px] flex items-center justify-center"
                        >
                          (615) 640-8349
                        </a>
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-histown-primary to-histown-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-2 uppercase">Email</h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        <a 
                          href="mailto:info@histown.com"
                          className="hover:text-histown-primary transition-colors inline-block min-h-[44px] flex items-center justify-center"
                        >
                          info@histown.com
                        </a>
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-histown-primary to-histown-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-2 uppercase">Hours</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">Monday - Friday: 3:00 PM - 9:00 PM</p>
                      <p className="text-gray-600 text-xs sm:text-sm">Saturday: 9:00 AM - 2:00 PM</p>
                      <p className="text-gray-600 text-xs sm:text-sm">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Full Width */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '200ms' }}>
              <div className="bg-gradient-to-br from-histown-accent/40 to-histown-secondary/40 p-2 rounded-3xl shadow-2xl">
                <div className="p-8 md:p-12 rounded-2xl" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                  <div className="flex flex-col items-center mb-8">
                    <h2 className="text-3xl md:text-4xl text-gray-800 mb-4 text-center" style={{ fontFamily: '"Rock Salt", cursive', fontWeight: 400 }}>
                      Send Us a Message
                    </h2>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="h-1 w-16 bg-gradient-to-r from-transparent to-histown-primary rounded-full"></div>
                      <div className="w-2 h-2 bg-histown-accent rounded-full"></div>
                      <div className="h-1 w-32 bg-gradient-to-r from-histown-primary via-histown-accent to-histown-primary rounded-full"></div>
                      <div className="w-2 h-2 bg-histown-accent rounded-full"></div>
                      <div className="h-1 w-16 bg-gradient-to-r from-histown-primary to-transparent rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Mobile-optimized form with full-width fields and proper input types */}
                  <form className="max-w-4xl mx-auto relative" onSubmit={handleSubmit}>
                    {/* Loading overlay */}
                    <FormLoadingOverlay isLoading={isSubmitting} message="Sending your message..." />
                    
                    {/* Success message */}
                    {submitStatus === 'success' && (
                      <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg" role="alert">
                        <p className="font-medium">Message sent successfully!</p>
                        <p className="text-sm">We'll get back to you soon.</p>
                      </div>
                    )}
                    
                    {/* Error message */}
                    {submitStatus === 'error' && (
                      <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg" role="alert">
                        <p className="font-medium">Failed to send message</p>
                        <p className="text-sm">Please try again later.</p>
                      </div>
                    )}
                    
                    {/* Stack vertically on mobile, horizontal on desktop */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                      <div className="flex-1">
                        <label htmlFor="contact-name" className="block text-gray-700 font-medium mb-2">Name*</label>
                        <input 
                          id="contact-name"
                          type="text" 
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-histown-primary focus:outline-none transition-colors min-h-[48px]"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      
                      <div className="flex-1 sm:flex-[1.5]">
                        <label htmlFor="contact-email" className="block text-gray-700 font-medium mb-2">Email*</label>
                        <input 
                          id="contact-email"
                          type="email" 
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-histown-primary focus:outline-none transition-colors min-h-[48px]"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                      
                      <div className="flex-1">
                        <label htmlFor="contact-phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                        <input 
                          id="contact-phone"
                          type="tel" 
                          value={phoneNumber}
                          onChange={handlePhoneChange}
                          maxLength={14}
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-histown-primary focus:outline-none transition-colors min-h-[48px]"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="contact-message" className="block text-gray-700 font-medium mb-2">Message*</label>
                      <textarea 
                        id="contact-message"
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-histown-primary focus:outline-none transition-colors resize-none"
                        placeholder="Tell us how we can help you..."
                        required
                      ></textarea>
                    </div>
                    
                    {/* Full-width button with adequate touch target */}
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-histown-accent to-histown-primary text-white font-bold py-4 px-8 rounded-xl uppercase tracking-wide hover:scale-105 transform transition-all duration-300 shadow-lg min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      aria-busy={isSubmitting}
                    >
                      {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                    </button>
                  </form>
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
        description="Join the HisTown family today!"
        noSlant={true}
      />

      {/* Footer - Shared Component */}
      <Footer />
    </div>
  );
};

export default Contact;
