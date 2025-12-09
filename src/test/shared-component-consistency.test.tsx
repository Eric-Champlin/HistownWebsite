import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import fc from 'fast-check';
import { Testimonials } from '../components/sections/Testimonials';
import { WhyUs } from '../components/sections/WhyUs';
import { NextSteps } from '../components/sections/NextSteps';
import { whyUsValues } from '../data/whyUsValues';

/**
 * Feature: mobile-optimization, Property 17: Shared component style consistency
 * Validates: Requirements 6.1, 6.2, 6.3, 6.5
 * 
 * Property: For any shared component (Testimonials, WhyUs, NextSteps, Footer) 
 * rendered on different pages, the computed styles should be identical, 
 * ensuring consistent user experience.
 */

describe('Property 17: Shared Component Style Consistency', () => {
  /**
   * Property: Testimonials component should have identical styling regardless of where it's rendered
   * 
   * This property tests that the Testimonials component maintains consistent:
   * - Padding and margin values
   * - Font sizes and weights
   * - Color schemes
   * - Border and shadow styles
   * - Responsive breakpoint behavior
   */
  it('should render Testimonials with identical styles across multiple renders', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 10 }), // Number of times to render
        (renderCount) => {
          const renders = [];
          
          // Render the component multiple times
          for (let i = 0; i < renderCount; i++) {
            const { container } = render(<Testimonials />);
            const component = container.querySelector('[data-component="Testimonials"]');
            
            if (component) {
              // Extract key style properties
              const styles = {
                className: component.className,
                tagName: component.tagName,
              };
              
              // Extract container styles
              const containerDiv = component.querySelector('.max-w-6xl');
              const containerStyles = containerDiv ? {
                className: containerDiv.className,
              } : null;
              
              // Extract title styles
              const title = component.querySelector('h2');
              const titleStyles = title ? {
                className: title.className,
                textContent: title.textContent,
              } : null;
              
              renders.push({
                component: styles,
                container: containerStyles,
                title: titleStyles,
              });
            }
          }
          
          // Property: All renders should have identical structure and classes
          if (renders.length > 1) {
            const firstRender = renders[0];
            
            for (let i = 1; i < renders.length; i++) {
              const currentRender = renders[i];
              
              // Verify component classes are identical
              expect(currentRender.component.className).toBe(firstRender.component.className);
              expect(currentRender.component.tagName).toBe(firstRender.component.tagName);
              
              // Verify container classes are identical
              if (firstRender.container && currentRender.container) {
                expect(currentRender.container.className).toBe(firstRender.container.className);
              }
              
              // Verify title classes are identical
              if (firstRender.title && currentRender.title) {
                expect(currentRender.title.className).toBe(firstRender.title.className);
                expect(currentRender.title.textContent).toBe(firstRender.title.textContent);
              }
            }
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: Testimonials component should maintain consistent padding across renders
   */
  it('should have consistent padding classes across all renders', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2, max: 5 }),
        (renderCount) => {
          const paddingClasses = [];
          
          for (let i = 0; i < renderCount; i++) {
            const { container } = render(<Testimonials />);
            const section = container.querySelector('section[data-component="Testimonials"]');
            
            if (section) {
              // Extract padding-related classes
              const classes = section.className.split(' ');
              const padding = classes.filter(c => 
                c.startsWith('py-') || 
                c.startsWith('px-') || 
                c.includes(':py-') || 
                c.includes(':px-')
              );
              paddingClasses.push(padding.sort().join(' '));
            }
          }
          
          // Property: All padding classes should be identical
          const firstPadding = paddingClasses[0];
          for (let i = 1; i < paddingClasses.length; i++) {
            expect(paddingClasses[i]).toBe(firstPadding);
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: Testimonials component should maintain consistent font sizes across renders
   */
  it('should have consistent font size classes across all renders', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2, max: 5 }),
        (renderCount) => {
          const fontSizes = [];
          
          for (let i = 0; i < renderCount; i++) {
            const { container } = render(<Testimonials />);
            const title = container.querySelector('h2');
            
            if (title) {
              // Extract font-size related classes
              const classes = title.className.split(' ');
              const fontSize = classes.filter(c => 
                c.startsWith('text-') && 
                (c.includes('xl') || c.includes('lg') || c.includes('md') || c.includes('sm'))
              );
              fontSizes.push(fontSize.sort().join(' '));
            }
          }
          
          // Property: All font sizes should be identical
          const firstFontSize = fontSizes[0];
          for (let i = 1; i < fontSizes.length; i++) {
            expect(fontSizes[i]).toBe(firstFontSize);
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: Testimonials component should maintain consistent color classes across renders
   */
  it('should have consistent color classes across all renders', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2, max: 5 }),
        (renderCount) => {
          const colorClasses = [];
          
          for (let i = 0; i < renderCount; i++) {
            const { container } = render(<Testimonials />);
            const section = container.querySelector('section[data-component="Testimonials"]');
            
            if (section) {
              // Extract color-related classes
              const classes = section.className.split(' ');
              const colors = classes.filter(c => 
                c.startsWith('bg-') || 
                c.startsWith('text-') ||
                c.includes(':bg-') ||
                c.includes(':text-')
              );
              colorClasses.push(colors.sort().join(' '));
            }
          }
          
          // Property: All color classes should be identical
          const firstColors = colorClasses[0];
          for (let i = 1; i < colorClasses.length; i++) {
            expect(colorClasses[i]).toBe(firstColors);
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: Testimonials component cards should have consistent styling across renders
   */
  it('should have consistent card styling across all renders', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2, max: 5 }),
        (renderCount) => {
          const cardStyles = [];
          
          for (let i = 0; i < renderCount; i++) {
            const { container } = render(<Testimonials />);
            const cards = container.querySelectorAll('.rounded-2xl.shadow-lg');
            
            if (cards.length > 0) {
              const firstCard = cards[0];
              // Extract key card classes
              const classes = firstCard.className.split(' ');
              const relevantClasses = classes.filter(c => 
                c.includes('rounded') || 
                c.includes('shadow') || 
                c.includes('border') ||
                c.includes('bg-') ||
                c.includes('p-') ||
                c.includes('min-h')
              );
              cardStyles.push(relevantClasses.sort().join(' '));
            }
          }
          
          // Property: All card styles should be identical
          if (cardStyles.length > 1) {
            const firstCardStyle = cardStyles[0];
            for (let i = 1; i < cardStyles.length; i++) {
              expect(cardStyles[i]).toBe(firstCardStyle);
            }
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: Testimonials component should maintain consistent responsive classes
   */
  it('should have consistent responsive breakpoint classes across all renders', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2, max: 5 }),
        (renderCount) => {
          const responsiveClasses = [];
          
          for (let i = 0; i < renderCount; i++) {
            const { container } = render(<Testimonials />);
            const section = container.querySelector('section[data-component="Testimonials"]');
            
            if (section) {
              // Extract responsive classes (sm:, md:, lg:, xl:)
              const classes = section.className.split(' ');
              const responsive = classes.filter(c => 
                c.includes('sm:') || 
                c.includes('md:') || 
                c.includes('lg:') || 
                c.includes('xl:')
              );
              responsiveClasses.push(responsive.sort().join(' '));
            }
          }
          
          // Property: All responsive classes should be identical
          const firstResponsive = responsiveClasses[0];
          for (let i = 1; i < responsiveClasses.length; i++) {
            expect(responsiveClasses[i]).toBe(firstResponsive);
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: Testimonials component structure should be deterministic
   * (same input always produces same output)
   */
  it('should produce identical DOM structure for identical props', () => {
    fc.assert(
      fc.property(
        fc.array(
          fc.record({
            author: fc.string({ minLength: 1, maxLength: 50 }),
            text: fc.string({ minLength: 10, maxLength: 200 }),
          }),
          { minLength: 1, maxLength: 10 }
        ),
        (testimonials) => {
          // Render twice with same props
          const { container: container1 } = render(<Testimonials testimonials={testimonials} />);
          const { container: container2 } = render(<Testimonials testimonials={testimonials} />);
          
          const section1 = container1.querySelector('[data-component="Testimonials"]');
          const section2 = container2.querySelector('[data-component="Testimonials"]');
          
          // Property: Both renders should have identical structure
          if (section1 && section2) {
            expect(section1.className).toBe(section2.className);
            expect(section1.tagName).toBe(section2.tagName);
            
            // Check that both have the same number of cards
            const cards1 = container1.querySelectorAll('.rounded-2xl.shadow-lg');
            const cards2 = container2.querySelectorAll('.rounded-2xl.shadow-lg');
            expect(cards1.length).toBe(cards2.length);
            expect(cards1.length).toBe(testimonials.length);
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });
});


describe('Property 17: WhyUs Component Style Consistency', () => {
  /**
   * Property: WhyUs component should have identical styling regardless of where it's rendered
   * 
   * This property tests that the WhyUs component maintains consistent:
   * - Padding and margin values
   * - Font sizes and weights
   * - Color schemes
   * - Background image and overlay
   * - Responsive breakpoint behavior
   */
  it('should render WhyUs with identical styles across multiple renders', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 10 }), // Number of times to render
        (renderCount) => {
          const renders = [];
          
          // Render the component multiple times
          for (let i = 0; i < renderCount; i++) {
            const { container } = render(<WhyUs values={whyUsValues} />);
            const component = container.querySelector('[data-component="WhyUs"]');
            
            if (component) {
              // Extract key style properties
              const styles = {
                className: component.className,
                tagName: component.tagName,
              };
              
              // Extract container styles
              const containerDiv = component.querySelector('.max-w-7xl');
              const containerStyles = containerDiv ? {
                className: containerDiv.className,
              } : null;
              
              // Extract title styles
              const title = component.querySelector('h2');
              const titleStyles = title ? {
                className: title.className,
                textContent: title.textContent,
              } : null;
              
              renders.push({
                component: styles,
                container: containerStyles,
                title: titleStyles,
              });
            }
          }
          
          // Property: All renders should have identical structure and classes
          if (renders.length > 1) {
            const firstRender = renders[0];
            
            for (let i = 1; i < renders.length; i++) {
              const currentRender = renders[i];
              
              // Verify component classes are identical
              expect(currentRender.component.className).toBe(firstRender.component.className);
              expect(currentRender.component.tagName).toBe(firstRender.component.tagName);
              
              // Verify container classes are identical
              if (firstRender.container && currentRender.container) {
                expect(currentRender.container.className).toBe(firstRender.container.className);
              }
              
              // Verify title classes are identical
              if (firstRender.title && currentRender.title) {
                expect(currentRender.title.className).toBe(firstRender.title.className);
                expect(currentRender.title.textContent).toBe(firstRender.title.textContent);
              }
            }
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: WhyUs component should maintain consistent padding across renders
   */
  it('should have consistent padding classes across all renders', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2, max: 5 }),
        (renderCount) => {
          const paddingClasses = [];
          
          for (let i = 0; i < renderCount; i++) {
            const { container } = render(<WhyUs values={whyUsValues} />);
            const section = container.querySelector('section[data-component="WhyUs"]');
            
            if (section) {
              // Extract padding-related classes
              const classes = section.className.split(' ');
              const padding = classes.filter(c => 
                c.startsWith('py-') || 
                c.startsWith('px-') || 
                c.includes(':py-') || 
                c.includes(':px-')
              );
              paddingClasses.push(padding.sort().join(' '));
            }
          }
          
          // Property: All padding classes should be identical
          const firstPadding = paddingClasses[0];
          for (let i = 1; i < paddingClasses.length; i++) {
            expect(paddingClasses[i]).toBe(firstPadding);
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: WhyUs component should maintain consistent font sizes across renders
   */
  it('should have consistent font size classes across all renders', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2, max: 5 }),
        (renderCount) => {
          const fontSizes = [];
          
          for (let i = 0; i < renderCount; i++) {
            const { container } = render(<WhyUs values={whyUsValues} />);
            const title = container.querySelector('h2');
            
            if (title) {
              // Extract font-size related classes
              const classes = title.className.split(' ');
              const fontSize = classes.filter(c => 
                c.startsWith('text-') && 
                (c.includes('xl') || c.includes('lg') || c.includes('md') || c.includes('sm'))
              );
              fontSizes.push(fontSize.sort().join(' '));
            }
          }
          
          // Property: All font sizes should be identical
          const firstFontSize = fontSizes[0];
          for (let i = 1; i < fontSizes.length; i++) {
            expect(fontSizes[i]).toBe(firstFontSize);
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: WhyUs component should maintain consistent color classes across renders
   */
  it('should have consistent color classes across all renders', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2, max: 5 }),
        (renderCount) => {
          const colorClasses = [];
          
          for (let i = 0; i < renderCount; i++) {
            const { container } = render(<WhyUs values={whyUsValues} />);
            const section = container.querySelector('section[data-component="WhyUs"]');
            
            if (section) {
              // Extract color-related classes
              const classes = section.className.split(' ');
              const colors = classes.filter(c => 
                c.startsWith('bg-') || 
                c.startsWith('text-') ||
                c.includes(':bg-') ||
                c.includes(':text-')
              );
              colorClasses.push(colors.sort().join(' '));
            }
          }
          
          // Property: All color classes should be identical
          const firstColors = colorClasses[0];
          for (let i = 1; i < colorClasses.length; i++) {
            expect(colorClasses[i]).toBe(firstColors);
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: WhyUs component value cards should have consistent styling across renders
   */
  it('should have consistent value card styling across all renders', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2, max: 5 }),
        (renderCount) => {
          const cardStyles = [];
          
          for (let i = 0; i < renderCount; i++) {
            const { container } = render(<WhyUs values={whyUsValues} />);
            const cards = container.querySelectorAll('.rounded-2xl.shadow-lg');
            
            if (cards.length > 0) {
              const firstCard = cards[0];
              // Extract key card classes
              const classes = firstCard.className.split(' ');
              const relevantClasses = classes.filter(c => 
                c.includes('rounded') || 
                c.includes('shadow') || 
                c.includes('bg-') ||
                c.includes('p-')
              );
              cardStyles.push(relevantClasses.sort().join(' '));
            }
          }
          
          // Property: All card styles should be identical
          if (cardStyles.length > 1) {
            const firstCardStyle = cardStyles[0];
            for (let i = 1; i < cardStyles.length; i++) {
              expect(cardStyles[i]).toBe(firstCardStyle);
            }
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: WhyUs component should maintain consistent responsive classes
   */
  it('should have consistent responsive breakpoint classes across all renders', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2, max: 5 }),
        (renderCount) => {
          const responsiveClasses = [];
          
          for (let i = 0; i < renderCount; i++) {
            const { container } = render(<WhyUs values={whyUsValues} />);
            const section = container.querySelector('section[data-component="WhyUs"]');
            
            if (section) {
              // Extract responsive classes (sm:, md:, lg:, xl:)
              const classes = section.className.split(' ');
              const responsive = classes.filter(c => 
                c.includes('sm:') || 
                c.includes('md:') || 
                c.includes('lg:') || 
                c.includes('xl:')
              );
              responsiveClasses.push(responsive.sort().join(' '));
            }
          }
          
          // Property: All responsive classes should be identical
          const firstResponsive = responsiveClasses[0];
          for (let i = 1; i < responsiveClasses.length; i++) {
            expect(responsiveClasses[i]).toBe(firstResponsive);
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: WhyUs component should maintain consistent background image across renders
   */
  it('should have consistent background image across all renders', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2, max: 5 }),
        (renderCount) => {
          const backgroundImages = [];
          
          for (let i = 0; i < renderCount; i++) {
            const { container } = render(<WhyUs values={whyUsValues} />);
            const section = container.querySelector('section[data-component="WhyUs"]') as HTMLElement;
            
            if (section) {
              backgroundImages.push(section.style.backgroundImage);
            }
          }
          
          // Property: All background images should be identical
          const firstBg = backgroundImages[0];
          for (let i = 1; i < backgroundImages.length; i++) {
            expect(backgroundImages[i]).toBe(firstBg);
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: WhyUs component should have consistent dark overlay across renders
   */
  it('should have consistent dark overlay across all renders', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2, max: 5 }),
        (renderCount) => {
          const overlayClasses = [];
          
          for (let i = 0; i < renderCount; i++) {
            const { container } = render(<WhyUs values={whyUsValues} />);
            const overlay = container.querySelector('.bg-black\\/20');
            
            if (overlay) {
              overlayClasses.push(overlay.className);
            }
          }
          
          // Property: All overlay classes should be identical
          const firstOverlay = overlayClasses[0];
          for (let i = 1; i < overlayClasses.length; i++) {
            expect(overlayClasses[i]).toBe(firstOverlay);
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: WhyUs component structure should be deterministic
   * (same input always produces same output)
   */
  it('should produce identical DOM structure for identical props', () => {
    fc.assert(
      fc.property(
        fc.array(
          fc.record({
            icon: fc.constant(<svg />),
            title: fc.string({ minLength: 1, maxLength: 50 }),
            description: fc.string({ minLength: 10, maxLength: 200 }),
          }),
          { minLength: 1, maxLength: 5 }
        ),
        (values) => {
          // Render twice with same props
          const { container: container1 } = render(<WhyUs values={values} />);
          const { container: container2 } = render(<WhyUs values={values} />);
          
          const section1 = container1.querySelector('[data-component="WhyUs"]');
          const section2 = container2.querySelector('[data-component="WhyUs"]');
          
          // Property: Both renders should have identical structure
          if (section1 && section2) {
            expect(section1.className).toBe(section2.className);
            expect(section1.tagName).toBe(section2.tagName);
            
            // Check that both have the same number of value cards
            const cards1 = container1.querySelectorAll('.rounded-2xl.shadow-lg');
            const cards2 = container2.querySelectorAll('.rounded-2xl.shadow-lg');
            expect(cards1.length).toBe(cards2.length);
            expect(cards1.length).toBe(values.length);
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: WhyUs component grid should maintain consistent layout classes
   */
  it('should have consistent grid layout classes across all renders', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2, max: 5 }),
        (renderCount) => {
          const gridClasses = [];
          
          for (let i = 0; i < renderCount; i++) {
            const { container } = render(<WhyUs values={whyUsValues} />);
            const grid = container.querySelector('.grid');
            
            if (grid) {
              // Extract grid-related classes
              const classes = grid.className.split(' ');
              const gridRelated = classes.filter(c => 
                c.includes('grid') || 
                c.includes('gap-')
              );
              gridClasses.push(gridRelated.sort().join(' '));
            }
          }
          
          // Property: All grid classes should be identical
          const firstGrid = gridClasses[0];
          for (let i = 1; i < gridClasses.length; i++) {
            expect(gridClasses[i]).toBe(firstGrid);
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });
});


describe('Property 17: NextSteps Component Style Consistency', () => {
  /**
   * Property: NextSteps component should have identical styling regardless of where it's rendered
   * 
   * This property tests that the NextSteps component maintains consistent:
   * - Padding and margin values
   * - Font sizes and weights
   * - Color schemes
   * - Background image and overlay
   * - Button and form styling
   * - Responsive breakpoint behavior
   */
  it('should render NextSteps with identical styles across multiple renders', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 10 }), // Number of times to render
        (renderCount) => {
          const renders = [];
          
          // Render the component multiple times
          for (let i = 0; i < renderCount; i++) {
            const { container } = render(<BrowserRouter><NextSteps /></BrowserRouter>);
            const component = container.querySelector('[data-component="NextSteps"]');
            
            if (component) {
              // Extract key style properties
              const styles = {
                className: component.className,
                tagName: component.tagName,
              };
              
              // Extract container styles
              const containerDiv = component.querySelector('.max-w-7xl');
              const containerStyles = containerDiv ? {
                className: containerDiv.className,
              } : null;
              
              // Extract title styles
              const title = component.querySelector('h2');
              const titleStyles = title ? {
                className: title.className,
                textContent: title.textContent,
              } : null;
              
              renders.push({
                component: styles,
                container: containerStyles,
                title: titleStyles,
              });
            }
          }
          
          // Property: All renders should have identical structure and classes
          if (renders.length > 1) {
            const firstRender = renders[0];
            
            for (let i = 1; i < renders.length; i++) {
              const currentRender = renders[i];
              
              // Verify component classes are identical
              expect(currentRender.component.className).toBe(firstRender.component.className);
              expect(currentRender.component.tagName).toBe(firstRender.component.tagName);
              
              // Verify container classes are identical
              if (firstRender.container && currentRender.container) {
                expect(currentRender.container.className).toBe(firstRender.container.className);
              }
              
              // Verify title classes are identical
              if (firstRender.title && currentRender.title) {
                expect(currentRender.title.className).toBe(firstRender.title.className);
                expect(currentRender.title.textContent).toBe(firstRender.title.textContent);
              }
            }
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: NextSteps component should maintain consistent padding across renders
   */
  it('should have consistent padding classes across all renders', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2, max: 5 }),
        (renderCount) => {
          const paddingClasses = [];
          
          for (let i = 0; i < renderCount; i++) {
            const { container } = render(<BrowserRouter><NextSteps /></BrowserRouter>);
            const section = container.querySelector('section[data-component="NextSteps"]');
            
            if (section) {
              // Extract padding-related classes
              const classes = section.className.split(' ');
              const padding = classes.filter(c => 
                c.startsWith('py-') || 
                c.startsWith('px-') || 
                c.includes(':py-') || 
                c.includes(':px-')
              );
              paddingClasses.push(padding.sort().join(' '));
            }
          }
          
          // Property: All padding classes should be identical
          const firstPadding = paddingClasses[0];
          for (let i = 1; i < paddingClasses.length; i++) {
            expect(paddingClasses[i]).toBe(firstPadding);
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: NextSteps component should maintain consistent font sizes across renders
   */
  it('should have consistent font size classes across all renders', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2, max: 5 }),
        (renderCount) => {
          const fontSizes = [];
          
          for (let i = 0; i < renderCount; i++) {
            const { container } = render(<BrowserRouter><NextSteps /></BrowserRouter>);
            const title = container.querySelector('h2');
            
            if (title) {
              // Extract font-size related classes
              const classes = title.className.split(' ');
              const fontSize = classes.filter(c => 
                c.startsWith('text-') && 
                (c.includes('xl') || c.includes('lg') || c.includes('md') || c.includes('sm'))
              );
              fontSizes.push(fontSize.sort().join(' '));
            }
          }
          
          // Property: All font sizes should be identical
          const firstFontSize = fontSizes[0];
          for (let i = 1; i < fontSizes.length; i++) {
            expect(fontSizes[i]).toBe(firstFontSize);
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: NextSteps component should maintain consistent color classes across renders
   */
  it('should have consistent color classes across all renders', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2, max: 5 }),
        (renderCount) => {
          const colorClasses = [];
          
          for (let i = 0; i < renderCount; i++) {
            const { container } = render(<BrowserRouter><NextSteps /></BrowserRouter>);
            const section = container.querySelector('section[data-component="NextSteps"]');
            
            if (section) {
              // Extract color-related classes
              const classes = section.className.split(' ');
              const colors = classes.filter(c => 
                c.startsWith('bg-') || 
                c.startsWith('text-') ||
                c.includes(':bg-') ||
                c.includes(':text-')
              );
              colorClasses.push(colors.sort().join(' '));
            }
          }
          
          // Property: All color classes should be identical
          const firstColors = colorClasses[0];
          for (let i = 1; i < colorClasses.length; i++) {
            expect(colorClasses[i]).toBe(firstColors);
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: NextSteps component buttons should have consistent styling across renders
   */
  it('should have consistent button styling across all renders', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2, max: 5 }),
        (renderCount) => {
          const buttonStyles = [];
          
          for (let i = 0; i < renderCount; i++) {
            const { container } = render(<BrowserRouter><NextSteps /></BrowserRouter>);
            const buttons = container.querySelectorAll('button');
            
            if (buttons.length > 0) {
              const firstButton = buttons[0];
              // Extract key button classes
              const classes = firstButton.className.split(' ');
              const relevantClasses = classes.filter(c => 
                c.includes('rounded') || 
                c.includes('shadow') || 
                c.includes('bg-') ||
                c.includes('text-') ||
                c.includes('py-') ||
                c.includes('px-') ||
                c.includes('w-') ||
                c.includes('font-')
              );
              buttonStyles.push(relevantClasses.sort().join(' '));
            }
          }
          
          // Property: All button styles should be identical
          if (buttonStyles.length > 1) {
            const firstButtonStyle = buttonStyles[0];
            for (let i = 1; i < buttonStyles.length; i++) {
              expect(buttonStyles[i]).toBe(firstButtonStyle);
            }
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: NextSteps component form inputs should have consistent styling across renders
   */
  it('should have consistent form input styling across all renders', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2, max: 5 }),
        (renderCount) => {
          const inputStyles = [];
          
          for (let i = 0; i < renderCount; i++) {
            const { container } = render(<BrowserRouter><NextSteps /></BrowserRouter>);
            const inputs = container.querySelectorAll('input');
            
            if (inputs.length > 0) {
              const firstInput = inputs[0];
              // Extract key input classes
              const classes = firstInput.className.split(' ');
              const relevantClasses = classes.filter(c => 
                c.includes('rounded') || 
                c.includes('bg-') ||
                c.includes('border') ||
                c.includes('text-') ||
                c.includes('py-') ||
                c.includes('px-') ||
                c.includes('w-') ||
                c.includes('placeholder')
              );
              inputStyles.push(relevantClasses.sort().join(' '));
            }
          }
          
          // Property: All input styles should be identical
          if (inputStyles.length > 1) {
            const firstInputStyle = inputStyles[0];
            for (let i = 1; i < inputStyles.length; i++) {
              expect(inputStyles[i]).toBe(firstInputStyle);
            }
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: NextSteps component should maintain consistent responsive classes
   */
  it('should have consistent responsive breakpoint classes across all renders', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2, max: 5 }),
        (renderCount) => {
          const responsiveClasses = [];
          
          for (let i = 0; i < renderCount; i++) {
            const { container } = render(<BrowserRouter><NextSteps /></BrowserRouter>);
            const section = container.querySelector('section[data-component="NextSteps"]');
            
            if (section) {
              // Extract responsive classes (sm:, md:, lg:, xl:)
              const classes = section.className.split(' ');
              const responsive = classes.filter(c => 
                c.includes('sm:') || 
                c.includes('md:') || 
                c.includes('lg:') || 
                c.includes('xl:')
              );
              responsiveClasses.push(responsive.sort().join(' '));
            }
          }
          
          // Property: All responsive classes should be identical
          const firstResponsive = responsiveClasses[0];
          for (let i = 1; i < responsiveClasses.length; i++) {
            expect(responsiveClasses[i]).toBe(firstResponsive);
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: NextSteps component should maintain consistent background image across renders
   */
  it('should have consistent background image across all renders', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2, max: 5 }),
        (renderCount) => {
          const backgroundImages = [];
          
          for (let i = 0; i < renderCount; i++) {
            const { container } = render(<BrowserRouter><NextSteps /></BrowserRouter>);
            const section = container.querySelector('section[data-component="NextSteps"]') as HTMLElement;
            
            if (section) {
              backgroundImages.push(section.style.backgroundImage);
            }
          }
          
          // Property: All background images should be identical
          const firstBg = backgroundImages[0];
          for (let i = 1; i < backgroundImages.length; i++) {
            expect(backgroundImages[i]).toBe(firstBg);
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: NextSteps component should have consistent dark overlay across renders
   */
  it('should have consistent dark overlay across all renders', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2, max: 5 }),
        (renderCount) => {
          const overlayClasses = [];
          
          for (let i = 0; i < renderCount; i++) {
            const { container } = render(<BrowserRouter><NextSteps /></BrowserRouter>);
            const overlay = container.querySelector('.bg-black\\/20');
            
            if (overlay) {
              overlayClasses.push(overlay.className);
            }
          }
          
          // Property: All overlay classes should be identical
          const firstOverlay = overlayClasses[0];
          for (let i = 1; i < overlayClasses.length; i++) {
            expect(overlayClasses[i]).toBe(firstOverlay);
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: NextSteps component structure should be deterministic
   * (same input always produces same output)
   */
  it('should produce identical DOM structure for identical props', () => {
    fc.assert(
      fc.property(
        fc.record({
          title: fc.string({ minLength: 1, maxLength: 50 }),
          description: fc.string({ minLength: 10, maxLength: 200 }),
          emailSignupForm: fc.boolean(),
        }),
        (props) => {
          // Render twice with same props
          const { container: container1 } = render(<BrowserRouter><NextSteps {...props} /></BrowserRouter>);
          const { container: container2 } = render(<BrowserRouter><NextSteps {...props} /></BrowserRouter>);
          
          const section1 = container1.querySelector('[data-component="NextSteps"]');
          const section2 = container2.querySelector('[data-component="NextSteps"]');
          
          // Property: Both renders should have identical structure
          if (section1 && section2) {
            expect(section1.className).toBe(section2.className);
            expect(section1.tagName).toBe(section2.tagName);
            
            // Check that both have the same number of buttons
            const buttons1 = container1.querySelectorAll('button');
            const buttons2 = container2.querySelectorAll('button');
            expect(buttons1.length).toBe(buttons2.length);
            
            // Check that both have the same form presence
            const form1 = container1.querySelector('form');
            const form2 = container2.querySelector('form');
            if (props.emailSignupForm) {
              expect(form1).toBeInTheDocument();
              expect(form2).toBeInTheDocument();
            } else {
              expect(form1).not.toBeInTheDocument();
              expect(form2).not.toBeInTheDocument();
            }
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: NextSteps component grid should maintain consistent layout classes
   */
  it('should have consistent grid layout classes across all renders', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2, max: 5 }),
        (renderCount) => {
          const gridClasses = [];
          
          for (let i = 0; i < renderCount; i++) {
            const { container } = render(<BrowserRouter><NextSteps /></BrowserRouter>);
            const grid = container.querySelector('.grid');
            
            if (grid) {
              // Extract grid-related classes
              const classes = grid.className.split(' ');
              const gridRelated = classes.filter(c => 
                c.includes('grid') || 
                c.includes('gap-')
              );
              gridClasses.push(gridRelated.sort().join(' '));
            }
          }
          
          // Property: All grid classes should be identical
          const firstGrid = gridClasses[0];
          for (let i = 1; i < gridClasses.length; i++) {
            expect(gridClasses[i]).toBe(firstGrid);
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });
});
