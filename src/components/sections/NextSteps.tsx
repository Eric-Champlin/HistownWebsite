import { Link } from 'react-router-dom';
import { useState } from 'react';
import { BREAKPOINTS } from '../../constants/responsive';
import { FormLoadingOverlay } from '../common/LoadingStates';

export interface CTAButton {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface NextStepsProps {
  title?: string;
  description?: string;
  ctaButtons?: CTAButton[];
  emailSignupForm?: boolean;
  backgroundImage?: string;
  noSlant?: boolean;
}

/**
 * Shared NextSteps component
 * Displays call-to-action buttons and email signup form
 * Mobile: Stacks vertically with full-width buttons and inputs
 * Desktop: Side-by-side layout with appropriate sizing
 * Features loading states for form submission
 */
export function NextSteps({
  title = "NEXT STEPS",
  description = "Take your first step with a free trial class!",
  ctaButtons = [
    { label: "REQUEST A TRIAL CLASS", href: "/free-trial", variant: "primary" },
    { label: "CONTACT US", href: "/contact", variant: "secondary" }
  ],
  emailSignupForm = true,
  backgroundImage = "https://res.cloudinary.com/dxqzby6fc/image/upload/w_2400,q_100,f_jpg,e_sharpen:100/v1762365784/blue-texture_yyysa2",
  noSlant = false
}: NextStepsProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        (e.target as HTMLFormElement).reset();
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      data-component="NextSteps"
      className="py-12 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden" 
      style={{ 
        clipPath: noSlant ? 'none' : 'polygon(0 0%, 100% 4%, 100% 100%, 0% 96%)', 
        marginTop: noSlant ? '0' : '-4rem', 
        paddingTop: noSlant ? '3rem' : '6rem', 
        marginBottom: noSlant ? '0' : '-4rem', 
        paddingBottom: noSlant ? '3rem' : '6rem',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        imageRendering: 'crisp-edges',
        filter: 'contrast(1.1) saturate(1.05)'
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-12 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center justify-items-center">
          
          {/* Left Side - Next Steps CTAs */}
          <div className="text-white blue-section-text animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out text-center w-full max-w-md">
            <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-black uppercase mb-2 relative inline-block text-white blue-section-text" style={{ fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
              {title}
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-4" style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))' }}>
              <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-white rounded-full"></div>
              <div className="w-3 h-3 bg-white/80 rounded-full"></div>
              <div className="h-1 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-white rounded-full"></div>
              <div className="w-3 h-3 bg-white/80 rounded-full"></div>
              <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent rounded-full"></div>
            </div>
            <p className="text-base sm:text-lg text-white max-w-4xl mx-auto leading-relaxed blue-section-text mb-8 sm:mb-12">
              {description}
            </p>
            
            {/* CTA Buttons - Full width on mobile, auto width on desktop */}
            <div className="space-y-4">
              {ctaButtons.map((button, index) => (
                <Link key={index} to={button.href} className="block">
                  {button.variant === 'primary' ? (
                    <button className="w-full sm:w-auto min-w-[280px] bg-white text-histown-primary hover:bg-white/95 hover:text-histown-accent active:bg-white/90 active:text-histown-accent font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                      {button.label}
                    </button>
                  ) : (
                    <button className="w-full sm:w-auto min-w-[280px] bg-transparent border-2 border-white text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-white hover:text-histown-primary active:bg-white/90 active:text-histown-primary transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                      {button.label}
                    </button>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side - Email Signup Form */}
          {emailSignupForm && (
            <div className="bg-white/10 blue-section-card backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out w-full max-w-md" style={{ transitionDelay: '300ms' }}>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 uppercase blue-section-text">
                SIGN UP FOR EMAIL UPDATES
              </h3>
              <p className="text-sm sm:text-base text-white/90 mb-4 sm:mb-6 leading-relaxed blue-section-text">
                If you're not ready to start yet, simply fill out this form to sign up for our email list, and we'll keep you updated on what's happening at HisTown.
              </p>
              
              <form className="space-y-4 relative" onSubmit={handleEmailSubmit}>
                {/* Loading overlay */}
                <FormLoadingOverlay isLoading={isSubmitting} message="Signing you up..." />
                
                {/* Success message */}
                {submitStatus === 'success' && (
                  <div className="mb-4 p-3 bg-green-500/90 text-white rounded-lg" role="alert">
                    <p className="font-medium text-sm">Successfully subscribed!</p>
                  </div>
                )}
                
                {/* Error message */}
                {submitStatus === 'error' && (
                  <div className="mb-4 p-3 bg-red-500/90 text-white rounded-lg" role="alert">
                    <p className="font-medium text-sm">Failed to subscribe. Please try again.</p>
                  </div>
                )}
                <div>
                  <label htmlFor="next-steps-first-name" className="block text-white text-sm font-medium mb-2 blue-section-text">First name*</label>
                  <input 
                    id="next-steps-first-name"
                    type="text" 
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Your first name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="next-steps-email" className="block text-white text-sm font-medium mb-2 blue-section-text">Email*</label>
                  <input 
                    id="next-steps-email"
                    type="email" 
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg mt-4 sm:mt-6 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
