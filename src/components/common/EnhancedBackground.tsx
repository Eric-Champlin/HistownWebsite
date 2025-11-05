import { useEffect, useState } from 'react';

interface EnhancedBackgroundProps {
  variant: 'programs' | 'whyus';
  className?: string;
  children: React.ReactNode;
}

export function EnhancedBackground({ 
  variant, 
  className = '', 
  children 
}: EnhancedBackgroundProps) {
  const [supportsBackdropFilter, setSupportsBackdropFilter] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for backdrop-filter support
    const testElement = document.createElement('div');
    testElement.style.backdropFilter = 'blur(1px)';
    setSupportsBackdropFilter(testElement.style.backdropFilter !== '');

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const getBackgroundStyles = () => {
    const baseGradient = variant === 'programs' 
      ? 'from-histown-primary via-histown-accent to-histown-accent-dark'
      : 'from-cyan-400 via-cyan-600 to-cyan-800';

    return `bg-gradient-to-br ${baseGradient}`;
  };

  const getPatternStyles = () => {
    if (prefersReducedMotion) {
      return 'opacity-10'; // Reduced opacity for reduced motion
    }

    return variant === 'programs' ? 'opacity-20' : 'opacity-15';
  };

  const renderPatterns = () => {
    if (prefersReducedMotion) {
      // Simplified patterns for reduced motion
      return (
        <div className={`absolute inset-0 ${getPatternStyles()}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
      );
    }

    if (variant === 'programs') {
      return (
        <div className={`absolute inset-0 ${getPatternStyles()} enhanced-bg-pattern`}>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-transparent via-white to-transparent transform skew-y-12"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-y-6"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-transparent transform skew-y-6"></div>
        </div>
      );
    }

    // Why Us patterns
    return (
      <div className={`absolute inset-0 ${getPatternStyles()} enhanced-bg-pattern`}>
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: supportsBackdropFilter 
              ? `conic-gradient(from 45deg at 50% 50%, transparent 0deg, rgba(255, 255, 255, 0.2) 90deg, transparent 180deg),
                 radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`
              : 'linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)'
          }}
        />
      </div>
    );
  };

  return (
    <section className={`relative ${getBackgroundStyles()} overflow-hidden ${className}`}>
      {renderPatterns()}
      <div className="relative">
        {children}
      </div>
    </section>
  );
}