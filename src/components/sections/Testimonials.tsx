import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { testimonials as testimonialsData, Testimonial } from '../../data/testimonials';
import { BREAKPOINTS, TOUCH_TARGETS, TABLET_BREAKPOINTS } from '../../constants/responsive';
import { TestimonialSkeleton } from '../common/LoadingStates';

interface TestimonialsProps {
  testimonials?: Testimonial[];
  variant?: 'carousel' | 'grid';
}

/**
 * Shared Testimonials component
 * Displays testimonials in a mobile-optimized carousel
 * Mobile: Single card visible at a time with swipe support
 * Desktop: Multiple cards visible with navigation arrows
 * Features progressive loading for slow connections
 */
export function Testimonials({ 
  testimonials = testimonialsData, 
  variant = 'carousel' 
}: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCount, setLoadedCount] = useState(0);

  // Detect mobile and tablet viewports
  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;
      setIsMobile(width < BREAKPOINTS.MD);
      setIsTablet(width >= BREAKPOINTS.MD && width < BREAKPOINTS.LG);
    };
    
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Progressive loading simulation for slow connections
  useEffect(() => {
    // Simulate progressive loading of testimonials
    const loadTestimonials = async () => {
      // Start with showing skeletons
      setIsLoading(true);
      
      // Simulate network delay (remove in production or use actual data fetching)
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Load testimonials progressively
      for (let i = 0; i <= testimonials.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setLoadedCount(i);
      }
      
      setIsLoading(false);
    };

    loadTestimonials();
  }, [testimonials.length]);

  const handlePrev = () => {
    if (isTablet) {
      // Tablet: Move back by 2 testimonials at a time
      const maxTabletIndex = testimonials.length - 2; // 22 for 24 testimonials
      if (currentIndex <= 0) {
        setCurrentIndex(maxTabletIndex); // Go to last position (shows testimonials 22-23)
      } else {
        setCurrentIndex(Math.max(0, currentIndex - 2));
      }
    } else {
      setCurrentIndex(Math.max(0, currentIndex - 1));
    }
  };

  const handleNext = () => {
    if (isMobile) {
      if (currentIndex >= testimonials.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    } else if (isTablet) {
      // Tablet: Advance by 2 testimonials at a time (since we show 2)
      // With 24 testimonials, max valid index is 22 (shows testimonials 22-23)
      const maxTabletIndex = testimonials.length - 2; // 22 for 24 testimonials
      if (currentIndex >= maxTabletIndex) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(Math.min(currentIndex + 2, maxTabletIndex));
      }
    } else {
      if (currentIndex >= testimonials.length - 3) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  // Swipe handlers for mobile
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    trackMouse: false,
    trackTouch: true,
  });

  // Calculate card width based on viewport
  const getCardWidth = () => {
    if (isMobile) {
      // Mobile: Full width minus padding
      return window.innerWidth - 64; // Account for container padding
    } else if (isTablet) {
      // Tablet: Cards are w-1/2 (50% width) with px-2 padding on each side
      // Container has px-4 sm:px-12 md:px-16 lg:px-20
      // At tablet (md), container padding is 64px total (32px each side)
      const containerWidth = window.innerWidth - 64; // md:px-16 = 64px total
      return containerWidth / 2; // Each card is 50% of container
    }
    return 352; // Desktop: w-80 (320px) + mx-4 (32px)
  };

  const cardWidth = getCardWidth();
  
  // Calculate translateX with bounds checking
  let safeCurrentIndex = currentIndex;
  if (isTablet) {
    // On tablet, ensure we never go beyond the last valid pair position
    const maxTabletIndex = testimonials.length - 2; // 22 for 24 testimonials
    safeCurrentIndex = Math.min(currentIndex, maxTabletIndex);
  } else if (isMobile) {
    safeCurrentIndex = Math.min(currentIndex, testimonials.length - 1);
  } else {
    safeCurrentIndex = Math.min(currentIndex, testimonials.length - 3);
  }
  
  const translateX = -safeCurrentIndex * cardWidth;

  return (
    <section 
      className="bg-white py-12 sm:py-16 md:py-24 mb-20 sm:mb-24 md:mb-32" 
      style={{ marginTop: '-4rem', paddingTop: '6rem', marginBottom: '-4rem', paddingBottom: '10rem' }}
      data-component="Testimonials"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-12 md:px-16 lg:px-20">
        {/* Title - "AWARDS" on tablet, "TESTIMONIALS" on mobile and desktop */}
        <div className="text-center mb-6 sm:mb-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <h2 className="text-4xl sm:text-4xl md:text-5xl font-black uppercase mb-2 relative inline-block" style={{ fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
            {isTablet ? 'AWARDS' : 'TESTIMONIALS'}
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-histown-primary rounded-full"></div>
            <div className="w-3 h-3 bg-histown-accent rounded-full"></div>
            <div className="h-1 w-40 bg-gradient-to-r from-histown-primary via-histown-accent to-histown-primary rounded-full"></div>
            <div className="w-3 h-3 bg-histown-accent rounded-full"></div>
            <div className="h-1 w-20 bg-gradient-to-r from-histown-primary to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Images - Stack on mobile, side by side on desktop */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-3 mb-6 sm:mb-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '200ms' }}>
          <img 
            src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762302377/2yG3qAq_nzcotl.png" 
            alt="Williamson's Best 2025 Winner" 
            className="h-40 sm:h-48 w-auto object-contain rounded-2xl mx-auto sm:mx-0"
          />
          <img 
            src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762304027/ChatGPT_Image_Nov_4_2025_at_06_53_22_PM_w3why3.png" 
            alt="Best of Parenting 2025 Winner" 
            className="h-40 sm:h-48 w-auto object-contain rounded-2xl mx-auto sm:mx-0"
          />
        </div>

        {/* Testimonials Carousel - Hidden on tablet */}
        {!isTablet && (
          <div className="relative px-4 sm:px-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '400ms' }}>
            {/* Left Arrow - Hidden on mobile, visible on desktop */}
            <button 
              onClick={handlePrev}
              className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 z-10 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
              style={{ minWidth: `${TOUCH_TARGETS.MINIMUM}px`, minHeight: `${TOUCH_TARGETS.MINIMUM}px` }}
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-histown-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow - Hidden on mobile, visible on desktop */}
            <button 
              onClick={handleNext}
              className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 z-10 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
              style={{ minWidth: `${TOUCH_TARGETS.MINIMUM}px`, minHeight: `${TOUCH_TARGETS.MINIMUM}px` }}
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-histown-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Testimonials Container with Swipe Support */}
            <div className="overflow-hidden py-4" {...swipeHandlers}>
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(${translateX}px)` }}
              >
                {testimonials.map((testimonial, index) => {
                  // Show skeleton for testimonials that haven't loaded yet
                  const isTestimonialLoaded = index < loadedCount;
                  
                  if (!isTestimonialLoaded && isLoading) {
                    return (
                      <div 
                        key={`skeleton-${index}`}
                        className={`flex-none ${isMobile ? 'w-full' : isTablet ? 'w-1/2' : 'w-80'} ${isMobile ? 'px-2' : isTablet ? 'px-2' : 'mx-4'}`}
                      >
                        <TestimonialSkeleton />
                      </div>
                    );
                  }
                  
                  return (
                    <div 
                      key={index}
                      className={`flex-none ${isMobile ? 'w-full' : isTablet ? 'w-1/2' : 'w-80'} ${isMobile ? 'px-2' : isTablet ? 'px-2' : 'mx-4'} bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 min-h-64 sm:min-h-80 flex flex-col transition-opacity duration-300 ${isTestimonialLoaded ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <div className="flex items-center mb-3 sm:mb-4">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3">
                          <svg viewBox="0 0 24 24" className="w-full h-full">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                        </div>
                        <h4 className="font-bold text-base sm:text-lg text-gray-800">{testimonial.author}</h4>
                      </div>
                      <div className="flex mb-3 sm:mb-4">
                        {Array(5).fill(0).map((_, i) => (
                          <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed flex-1">{testimonial.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile and Tablet Navigation Dots */}
            {(isMobile || isTablet) && (
              <div className="flex justify-center gap-2 mt-4">
                {Array.from({ 
                  length: isMobile ? testimonials.length : Math.ceil(testimonials.length / 2)
                }, (_, index) => {
                  const position = isTablet ? index * 2 : index;
                  // On tablet, ensure we don't create a dot for an invalid position
                  const maxTabletIndex = testimonials.length - 2;
                  if (isTablet && position > maxTabletIndex) {
                    return null;
                  }
                  return (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(position)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        position === currentIndex ? 'bg-histown-primary w-6' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
