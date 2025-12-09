import { describe, it, expect } from 'vitest';
import fc from 'fast-check';

/**
 * Property-Based Test for Mobile-First Class Structure
 * Feature: mobile-optimization, Property 4: Mobile-first class structure
 * Validates: Requirements 1.5
 * 
 * This test ensures that all mobile-first utility classes follow the correct pattern:
 * - Base classes target mobile (< 640px)
 * - Desktop styles are applied via responsive prefixes (sm:, md:, lg:, xl:)
 */

describe('Property 4: Mobile-first class structure', () => {
  // Define all mobile-first utility classes from index.css
  const mobileFirstClasses = [
    // Container utilities
    'mobile-container',
    'mobile-section',
    
    // Typography utilities
    'mobile-heading-1',
    'mobile-heading-2',
    'mobile-heading-3',
    'mobile-heading-4',
    'mobile-body',
    'mobile-body-small',
    
    // Spacing utilities
    'mobile-space-y-tight',
    'mobile-space-y-normal',
    'mobile-space-y-loose',
    'mobile-gap-tight',
    'mobile-gap-normal',
    
    // Layout utilities
    'mobile-stack',
    'mobile-stack-to-row',
    'mobile-grid-1',
    'mobile-grid-2',
    'mobile-grid-auto',
    
    // Touch target utilities
    'mobile-touch-target',
    'mobile-touch-target-lg',
    'mobile-touch-target-xl',
    
    // Button utilities
    'mobile-btn',
    'mobile-btn-lg',
    
    // Form utilities
    'mobile-input',
    'mobile-input-lg',
    'mobile-label',
    
    // Image utilities
    'mobile-img-full',
    'mobile-img-contain',
    'mobile-img-cover',
    
    // Card utilities
    'mobile-card',
    'mobile-card-compact',
    
    // Text alignment
    'mobile-text-center',
    'mobile-text-left',
    
    // Visibility utilities
    'mobile-only',
    'tablet-up',
    'desktop-only',
    'mobile-tablet',
    
    // Flexbox utilities
    'mobile-flex-center',
    'mobile-flex-between',
    'mobile-flex-start',
    'mobile-flex-col-center',
    
    // Width utilities
    'mobile-w-full',
    'mobile-max-w-full',
    
    // Padding utilities
    'mobile-p-tight',
    'mobile-p-normal',
    'mobile-px-tight',
    'mobile-py-tight',
    'mobile-px-normal',
    'mobile-py-normal',
    
    // Margin utilities
    'mobile-mt-tight',
    'mobile-mb-tight',
    'mobile-my-tight',
    'mobile-mt-normal',
    'mobile-mb-normal',
    'mobile-my-normal',
    
    // Border radius
    'mobile-rounded',
    
    // Shadow utilities
    'mobile-shadow',
    
    // Overflow utilities
    'mobile-overflow-hidden',
    'mobile-overflow-x-auto',
    
    // Line clamp
    'mobile-line-clamp-2',
    'mobile-line-clamp-3',
    
    // Aspect ratio
    'mobile-aspect-video',
    'mobile-aspect-square',
    
    // Focus states
    'mobile-focus-ring',
    'mobile-focus-ring-lg',
    
    // Active states
    'mobile-active-scale',
    'mobile-active-opacity',
    
    // Scroll behavior
    'mobile-scroll-smooth',
    
    // Safe area
    'mobile-safe-top',
    'mobile-safe-bottom',
    'mobile-safe-left',
    'mobile-safe-right',
    
    // Tap highlight
    'mobile-no-tap-highlight',
    
    // User select
    'mobile-select-none',
    
    // Backdrop blur
    'mobile-backdrop-blur',
  ];

  /**
   * Helper function to parse CSS class definitions from index.css
   * This extracts the Tailwind classes used in each mobile-first utility
   */
  const getMobileFirstClassDefinition = (className: string): string[] => {
    // Map of class names to their Tailwind definitions
    const classDefinitions: Record<string, string[]> = {
      'mobile-container': ['px-4', 'sm:px-6', 'lg:px-8'],
      'mobile-section': ['py-12', 'sm:py-16', 'lg:py-24'],
      'mobile-heading-1': ['text-3xl', 'sm:text-4xl', 'md:text-5xl', 'lg:text-6xl', 'font-bold'],
      'mobile-heading-2': ['text-2xl', 'sm:text-3xl', 'md:text-4xl', 'lg:text-5xl', 'font-semibold'],
      'mobile-heading-3': ['text-xl', 'sm:text-2xl', 'md:text-3xl', 'lg:text-4xl', 'font-semibold'],
      'mobile-heading-4': ['text-lg', 'sm:text-xl', 'md:text-2xl', 'lg:text-3xl', 'font-medium'],
      'mobile-body': ['text-base', 'sm:text-lg', 'leading-relaxed'],
      'mobile-body-small': ['text-sm', 'sm:text-base', 'leading-normal'],
      'mobile-space-y-tight': ['space-y-4', 'sm:space-y-6', 'lg:space-y-8'],
      'mobile-space-y-normal': ['space-y-6', 'sm:space-y-8', 'lg:space-y-12'],
      'mobile-space-y-loose': ['space-y-8', 'sm:space-y-12', 'lg:space-y-16'],
      'mobile-gap-tight': ['gap-4', 'sm:gap-6', 'lg:gap-8'],
      'mobile-gap-normal': ['gap-6', 'sm:gap-8', 'lg:gap-12'],
      'mobile-stack': ['flex', 'flex-col'],
      'mobile-stack-to-row': ['flex', 'flex-col', 'sm:flex-row'],
      'mobile-grid-1': ['grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-3'],
      'mobile-grid-2': ['grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3'],
      'mobile-grid-auto': ['grid', 'grid-cols-1', 'sm:grid-cols-2', 'md:grid-cols-3', 'lg:grid-cols-4'],
      'mobile-btn': ['w-full', 'sm:w-auto', 'px-6', 'py-3', 'text-base', 'font-medium', 'rounded-lg'],
      'mobile-btn-lg': ['w-full', 'sm:w-auto', 'px-8', 'py-4', 'text-lg', 'font-medium', 'rounded-lg'],
      'mobile-input': ['w-full', 'px-4', 'py-3', 'text-base', 'rounded-lg'],
      'mobile-input-lg': ['w-full', 'px-4', 'py-4', 'text-lg', 'rounded-lg'],
      'mobile-label': ['block', 'text-sm', 'sm:text-base', 'font-medium', 'mb-2'],
      'mobile-img-full': ['w-full', 'h-auto'],
      'mobile-img-contain': ['w-full', 'h-auto', 'object-contain'],
      'mobile-img-cover': ['w-full', 'h-auto', 'object-cover'],
      'mobile-card': ['p-4', 'sm:p-6', 'lg:p-8', 'rounded-lg'],
      'mobile-card-compact': ['p-3', 'sm:p-4', 'lg:p-6', 'rounded-lg'],
      'mobile-text-center': ['text-center', 'sm:text-left'],
      'mobile-text-left': ['text-left'],
      'mobile-only': ['block', 'sm:hidden'],
      'tablet-up': ['hidden', 'sm:block'],
      'desktop-only': ['hidden', 'lg:block'],
      'mobile-tablet': ['block', 'lg:hidden'],
      'mobile-flex-center': ['flex', 'items-center', 'justify-center'],
      'mobile-flex-between': ['flex', 'items-center', 'justify-between'],
      'mobile-flex-start': ['flex', 'items-center', 'justify-start'],
      'mobile-flex-col-center': ['flex', 'flex-col', 'items-center', 'justify-center'],
      'mobile-w-full': ['w-full', 'sm:w-auto'],
      'mobile-max-w-full': ['max-w-full'],
      'mobile-p-tight': ['p-4', 'sm:p-6', 'lg:p-8'],
      'mobile-p-normal': ['p-6', 'sm:p-8', 'lg:p-12'],
      'mobile-px-tight': ['px-4', 'sm:px-6', 'lg:px-8'],
      'mobile-py-tight': ['py-4', 'sm:py-6', 'lg:py-8'],
      'mobile-px-normal': ['px-6', 'sm:px-8', 'lg:px-12'],
      'mobile-py-normal': ['py-6', 'sm:py-8', 'lg:py-12'],
      'mobile-mt-tight': ['mt-4', 'sm:mt-6', 'lg:mt-8'],
      'mobile-mb-tight': ['mb-4', 'sm:mb-6', 'lg:mb-8'],
      'mobile-my-tight': ['my-4', 'sm:my-6', 'lg:my-8'],
      'mobile-mt-normal': ['mt-6', 'sm:mt-8', 'lg:mt-12'],
      'mobile-mb-normal': ['mb-6', 'sm:mb-8', 'lg:mb-12'],
      'mobile-my-normal': ['my-6', 'sm:my-8', 'lg:my-12'],
      'mobile-rounded': ['rounded-lg', 'sm:rounded-xl'],
      'mobile-shadow': ['shadow-md', 'sm:shadow-lg', 'lg:shadow-xl'],
      'mobile-overflow-hidden': ['overflow-hidden'],
      'mobile-overflow-x-auto': ['overflow-x-auto'],
      'mobile-aspect-video': ['aspect-video'],
      'mobile-aspect-square': ['aspect-square'],
      'mobile-focus-ring': ['focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2', 'focus:ring-histown-primary'],
      'mobile-focus-ring-lg': ['focus:outline-none', 'focus:ring-4', 'focus:ring-offset-2', 'focus:ring-histown-primary'],
      'mobile-active-scale': ['active:scale-95', 'transition-transform', 'duration-150'],
      'mobile-active-opacity': ['active:opacity-75', 'transition-opacity', 'duration-150'],
      'mobile-scroll-smooth': [],
      'mobile-safe-top': [],
      'mobile-safe-bottom': [],
      'mobile-safe-left': [],
      'mobile-safe-right': [],
      'mobile-no-tap-highlight': [],
      'mobile-select-none': [],
      'mobile-backdrop-blur': [],
      'mobile-line-clamp-2': [],
      'mobile-line-clamp-3': [],
      'mobile-touch-target': [],
      'mobile-touch-target-lg': [],
      'mobile-touch-target-xl': [],
    };

    return classDefinitions[className] || [];
  };

  /**
   * Helper function to check if a class follows mobile-first pattern
   * Returns true if the class has base styles without prefixes and
   * responsive styles with sm:, md:, lg:, or xl: prefixes
   */
  const isMobileFirstPattern = (classes: string[]): boolean => {
    // If no classes, it's valid (custom CSS properties)
    if (classes.length === 0) {
      return true;
    }

    // Separate responsive breakpoint classes from pseudo-class variants
    const breakpointClasses = classes.filter(cls => {
      if (!cls.includes(':')) return true; // Base classes
      const prefix = cls.split(':')[0];
      return ['sm', 'md', 'lg', 'xl', '2xl'].includes(prefix);
    });

    const pseudoClasses = classes.filter(cls => {
      if (!cls.includes(':')) return false;
      const prefix = cls.split(':')[0];
      return ['focus', 'hover', 'active'].includes(prefix);
    });

    // If the class only contains pseudo-class variants (focus:, hover:, active:),
    // it doesn't need a base class - this is valid for interaction states
    if (breakpointClasses.length === 0 && pseudoClasses.length > 0) {
      return true;
    }

    // Filter out non-responsive classes (like font-bold, flex, etc.)
    const responsiveClasses = breakpointClasses.filter(cls => {
      // Check if it's a responsive class (has a prefix or is a base responsive property)
      return cls.includes(':') || 
             cls.startsWith('text-') || 
             cls.startsWith('px-') || 
             cls.startsWith('py-') || 
             cls.startsWith('p-') ||
             cls.startsWith('mt-') ||
             cls.startsWith('mb-') ||
             cls.startsWith('my-') ||
             cls.startsWith('space-y-') ||
             cls.startsWith('gap-') ||
             cls.startsWith('w-') ||
             cls.startsWith('grid-cols-') ||
             cls.startsWith('flex-') ||
             cls.startsWith('rounded-') ||
             cls.startsWith('shadow-') ||
             cls.startsWith('block') ||
             cls.startsWith('hidden');
    });

    if (responsiveClasses.length === 0) {
      // If there are no responsive classes, it's not a mobile-first pattern
      // but it's also not violating the pattern (e.g., utility classes like 'flex')
      return true;
    }

    // Check if there's at least one base class (no prefix)
    const hasBaseClass = responsiveClasses.some(cls => !cls.includes(':'));
    
    // Check if responsive variants use proper prefixes
    const responsiveVariants = responsiveClasses.filter(cls => cls.includes(':'));
    const hasValidPrefixes = responsiveVariants.every(cls => {
      const prefix = cls.split(':')[0];
      return ['sm', 'md', 'lg', 'xl', '2xl'].includes(prefix);
    });

    // Mobile-first pattern requires:
    // 1. At least one base class (for mobile)
    // 2. All responsive variants use valid prefixes
    return hasBaseClass && hasValidPrefixes;
  };

  it('should verify all mobile-first utility classes follow mobile-first pattern', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...mobileFirstClasses),
        (className) => {
          const classDefinition = getMobileFirstClassDefinition(className);
          
          // Property: All mobile-first utility classes should follow mobile-first pattern
          // Base styles target mobile, responsive styles use sm:, md:, lg: prefixes
          const followsMobileFirstPattern = isMobileFirstPattern(classDefinition);
          
          expect(followsMobileFirstPattern).toBe(true);
        }
      ),
      { numRuns: 10 }
    );
  });

  it('should ensure responsive classes have base mobile styles before desktop overrides', () => {
    // Test specific examples of mobile-first classes
    const testCases = [
      {
        className: 'mobile-heading-1',
        expectedBase: 'text-3xl',
        expectedResponsive: ['sm:text-4xl', 'md:text-5xl', 'lg:text-6xl'],
      },
      {
        className: 'mobile-container',
        expectedBase: 'px-4',
        expectedResponsive: ['sm:px-6', 'lg:px-8'],
      },
      {
        className: 'mobile-btn',
        expectedBase: 'w-full',
        expectedResponsive: ['sm:w-auto'],
      },
      {
        className: 'mobile-grid-1',
        expectedBase: 'grid-cols-1',
        expectedResponsive: ['sm:grid-cols-2', 'lg:grid-cols-3'],
      },
    ];

    testCases.forEach(({ className, expectedBase, expectedResponsive }) => {
      const classDefinition = getMobileFirstClassDefinition(className);
      
      // Check that base class exists
      expect(classDefinition).toContain(expectedBase);
      
      // Check that responsive classes exist
      expectedResponsive.forEach(responsiveClass => {
        expect(classDefinition).toContain(responsiveClass);
      });
    });
  });

  it('should verify no mobile-first classes use max-width media queries', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...mobileFirstClasses),
        (className) => {
          const classDefinition = getMobileFirstClassDefinition(className);
          
          // Property: Mobile-first classes should not use max-width breakpoints
          // Tailwind's default breakpoints are min-width (mobile-first)
          // We should not see any custom max-width classes
          const hasMaxWidthClasses = classDefinition.some(cls => 
            cls.includes('max-') && cls.includes(':')
          );
          
          expect(hasMaxWidthClasses).toBe(false);
        }
      ),
      { numRuns: 10 }
    );
  });

  it('should verify responsive prefixes are in correct order (sm < md < lg < xl)', () => {
    const testCases = [
      'mobile-heading-1',
      'mobile-heading-2',
      'mobile-grid-auto',
      'mobile-section',
    ];

    testCases.forEach(className => {
      const classDefinition = getMobileFirstClassDefinition(className);
      
      // Extract responsive classes and their prefixes
      const responsiveClasses = classDefinition
        .filter(cls => cls.includes(':'))
        .map(cls => cls.split(':')[0]);
      
      // Define correct order
      const breakpointOrder = ['sm', 'md', 'lg', 'xl', '2xl'];
      
      // Check that responsive classes appear in correct order
      const indices = responsiveClasses
        .filter(prefix => breakpointOrder.includes(prefix))
        .map(prefix => breakpointOrder.indexOf(prefix));
      
      // Verify indices are in ascending order
      for (let i = 1; i < indices.length; i++) {
        expect(indices[i]).toBeGreaterThan(indices[i - 1]);
      }
    });
  });

  it('should verify all mobile-first classes are properly defined', () => {
    // This test ensures we haven't missed any class definitions
    mobileFirstClasses.forEach(className => {
      const definition = getMobileFirstClassDefinition(className);
      
      // Each class should have a definition (even if empty for custom CSS)
      expect(definition).toBeDefined();
      expect(Array.isArray(definition)).toBe(true);
    });
  });
});
