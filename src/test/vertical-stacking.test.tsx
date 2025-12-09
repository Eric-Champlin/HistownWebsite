import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import fc from 'fast-check';
import App from '../App';

/**
 * Property-Based Tests for Vertical Stacking on Mobile
 * 
 * Feature: mobile-optimization, Property 13: Vertical stacking of multi-column layouts
 * Validates: Requirements 1.4, 5.2, 7.3
 */

describe('Property 13: Vertical stacking of multi-column layouts', () => {
  const mobileWidths = [375, 390, 428];
  
  /**
   * Test that multi-column layouts stack vertically on mobile viewports
   * For any mobile viewport width, elements that are in a multi-column layout
   * should be stacked vertically (flex-direction: column or grid with 1 column)
   */
  it('should stack multi-column layouts vertically on mobile viewports', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...mobileWidths),
        (viewportWidth) => {
          // Set viewport width
          Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: viewportWidth,
          });

          const { container } = render(
            <BrowserRouter>
              <App />
            </BrowserRouter>
          );

          // Find the programs section (Dance, Music, Featured)
          const programsSection = container.querySelector('main');
          expect(programsSection).toBeTruthy();

          // Find all program card containers (grid containers)
          const programCards = programsSection?.querySelectorAll('.grid');
          
          programCards?.forEach((card) => {
            const computedStyle = window.getComputedStyle(card);
            
            // Check if it's a grid layout
            if (computedStyle.display === 'grid') {
              const gridTemplateColumns = computedStyle.gridTemplateColumns;
              
              // On mobile, should be single column
              // This means gridTemplateColumns should resolve to a single column
              // (e.g., "1fr" or a single pixel value, not multiple values)
              const columnCount = gridTemplateColumns.split(' ').filter(col => col && col !== 'none').length;
              
              // Property: On mobile viewports, grid layouts should have 1 column
              expect(columnCount).toBeLessThanOrEqual(1);
            }
            
            // Check if it's a flex layout
            if (computedStyle.display === 'flex') {
              const flexDirection = computedStyle.flexDirection;
              
              // Property: On mobile viewports, flex layouts should be column direction
              expect(flexDirection).toBe('column');
            }
          });
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Test that program cards stack vertically on mobile
   * Specifically tests the Dance, Music, and Featured program cards
   */
  it('should stack program cards (Dance, Music, Featured) vertically on mobile', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...mobileWidths),
        (viewportWidth) => {
          // Set viewport width
          Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: viewportWidth,
          });

          const { container } = render(
            <BrowserRouter>
              <App />
            </BrowserRouter>
          );

          // Find the programs section
          const programsSection = container.querySelector('main');
          expect(programsSection).toBeTruthy();

          // Find all grid containers in the programs section
          const gridContainers = programsSection?.querySelectorAll('.grid');
          
          gridContainers?.forEach((grid) => {
            const computedStyle = window.getComputedStyle(grid);
            
            if (computedStyle.display === 'grid') {
              // Check grid-template-columns
              const gridCols = computedStyle.gridTemplateColumns;
              
              // On mobile, should be "grid-cols-1" which means single column
              // The computed style should show only one column definition
              const hasMultipleColumns = gridCols.includes(' ') && 
                                        gridCols.split(' ').filter(col => col && col !== 'none').length > 1;
              
              // Property: Multi-column grids should collapse to single column on mobile
              expect(hasMultipleColumns).toBe(false);
            }
          });
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Test that images stack vertically on mobile
   * Validates that image galleries or image-text layouts stack vertically
   */
  it('should stack images vertically on mobile viewports', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...mobileWidths),
        (viewportWidth) => {
          // Set viewport width
          Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: viewportWidth,
          });

          const { container } = render(
            <BrowserRouter>
              <App />
            </BrowserRouter>
          );

          // Find the programs section
          const programsSection = container.querySelector('main');
          
          // Find all images in the programs section
          const images = programsSection?.querySelectorAll('img');
          
          images?.forEach((img) => {
            const parent = img.closest('.grid');
            
            if (parent) {
              const computedStyle = window.getComputedStyle(parent);
              
              // If parent is a grid, check it's single column
              if (computedStyle.display === 'grid') {
                const gridCols = computedStyle.gridTemplateColumns;
                const columnCount = gridCols.split(' ').filter(col => col && col !== 'none').length;
                
                // Property: Images in grid layouts should be in single column on mobile
                expect(columnCount).toBeLessThanOrEqual(1);
              }
            }
          });
        }
      ),
      { numRuns: 10 }
    );
  });
});
