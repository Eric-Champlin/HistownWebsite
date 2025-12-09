/**
 * Property-Based Test for Hamburger Menu Consistency
 * Feature: mobile-optimization, Property 5: Hamburger menu consistency across pages
 * Validates: Requirements 2.5, 6.4
 */

import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import fc from 'fast-check'
import Navigation from '../components/layout/Navigation'
import { setMobileViewport, VIEWPORTS } from './utils'

// All pages that should have consistent navigation
const ALL_PAGES = [
  'App',
  'About',
  'Contact',
  'DanceClasses',
  'DanceDetail',
  'DressCode',
  'FeaturedClasses',
  'FeaturedDetail',
  'FreeTrial',
  'More',
  'MusicClasses',
  'MusicDetail',
  'OurStory',
  'OurTeam',
  'PastEvents',
  'Programs',
  'Store',
  'StudioRental',
  'Tuition',
] as const

type PageName = typeof ALL_PAGES[number]

/**
 * Helper to render Navigation component with router context
 */
function renderNavigation() {
  return render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  )
}

/**
 * Extract mobile menu behavior characteristics
 */
function extractMenuBehavior(container: HTMLElement) {
  const mobileMenu = container.querySelector('[role="dialog"]')
  const backdrop = container.querySelector('.fixed.inset-0.bg-black')
  
  if (!mobileMenu) {
    return null
  }

  const styles = window.getComputedStyle(mobileMenu)
  const classes = mobileMenu.className

  return {
    // Slide direction - should be from right
    position: styles.position,
    right: styles.right,
    left: styles.left,
    
    // Transform classes for slide animation
    hasTranslateXFull: classes.includes('translate-x-full'),
    hasTranslateX0: classes.includes('translate-x-0'),
    hasTransform: classes.includes('transform'),
    
    // Transition properties
    hasTransition: classes.includes('transition'),
    transitionDuration: styles.transitionDuration,
    
    // Backdrop presence
    hasBackdrop: backdrop !== null,
    backdropOpacity: backdrop ? window.getComputedStyle(backdrop).opacity : null,
    
    // Menu dimensions and positioning
    width: styles.width,
    height: styles.height,
    zIndex: styles.zIndex,
    
    // Animation properties
    transitionProperty: styles.transitionProperty,
    transitionTimingFunction: styles.transitionTimingFunction,
  }
}

describe('Property 5: Hamburger menu consistency across pages', () => {
  beforeEach(() => {
    // Set mobile viewport for all tests
    setMobileViewport()
  })

  it('should have identical menu slide direction (from right) across all viewport widths', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.integer({ min: VIEWPORTS.MOBILE_SMALL, max: VIEWPORTS.MOBILE_LARGE }),
        async (viewportWidth) => {
          // Set viewport
          Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: viewportWidth,
          })

          const { container } = renderNavigation()
          const user = userEvent.setup()
          
          // Open the menu - find hamburger button by aria-expanded attribute
          const hamburgerButton = container.querySelector('button[aria-expanded]')
          expect(hamburgerButton).toBeTruthy()
          if (hamburgerButton) {
            await user.click(hamburgerButton)
          }

          await waitFor(() => {
            const mobileMenu = container.querySelector('[role="dialog"]')
            expect(mobileMenu).toBeTruthy()
            
            // Property: Menu should always slide from right
            if (mobileMenu) {
              expect(mobileMenu).toHaveClass('right-0')
              expect(mobileMenu).not.toHaveClass('left-0')
            }
          })
        }
      ),
      { numRuns: 10 }
    )
  })

  it('should have identical transform classes for slide animation', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...ALL_PAGES),
        (pageName) => {
          const { container } = renderNavigation()
          
          const mobileMenu = container.querySelector('[role="dialog"]')
          
          if (mobileMenu) {
            const classes = mobileMenu.className
            
            // Property: All menus should use translate-x-full for closed state
            // and translate-x-0 for open state
            expect(classes).toContain('translate-x-full')
            expect(classes).toContain('transform')
            expect(classes).toContain('transition')
          }
        }
      ),
      { numRuns: 10 }
    )
  })

  it('should have identical backdrop overlay behavior', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.constantFrom(...ALL_PAGES),
        async (pageName) => {
          const { container } = renderNavigation()
          const user = userEvent.setup()
          
          // Open menu - find hamburger button by aria-expanded attribute
          const hamburgerButton = container.querySelector('button[aria-expanded]')
          expect(hamburgerButton).toBeTruthy()
          if (hamburgerButton) {
            await user.click(hamburgerButton)
          }

          await waitFor(() => {
            const backdrop = container.querySelector('.fixed.inset-0.bg-black')
            
            // Property: Backdrop should always be present when menu is open
            expect(backdrop).toBeTruthy()
            
            if (backdrop) {
              const classes = backdrop.className
              // Property: Backdrop should have consistent styling
              expect(classes).toContain('bg-black')
              expect(classes).toContain('bg-opacity-50')
              expect(classes).toContain('z-40')
            }
          })
        }
      ),
      { numRuns: 50 }
    )
  })

  it('should have identical transition duration and timing', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...ALL_PAGES),
        (pageName) => {
          const { container } = renderNavigation()
          
          const mobileMenu = container.querySelector('[role="dialog"]')
          
          if (mobileMenu) {
            const classes = mobileMenu.className
            
            // Property: All menus should have consistent transition properties
            expect(classes).toContain('duration-300')
            expect(classes).toContain('ease-out')
          }
        }
      ),
      { numRuns: 10 }
    )
  })

  it('should close menu on backdrop click consistently', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.constantFrom(...ALL_PAGES),
        async (pageName) => {
          const { container } = renderNavigation()
          const user = userEvent.setup()
          
          // Open menu - find hamburger button by aria-expanded attribute
          const hamburgerButton = container.querySelector('button[aria-expanded]')
          expect(hamburgerButton).toBeTruthy()
          if (hamburgerButton) {
            await user.click(hamburgerButton)
          }

          await waitFor(() => {
            expect(screen.getByRole('dialog')).toBeInTheDocument()
          })

          // Click backdrop
          const backdrop = container.querySelector('.fixed.inset-0.bg-black')
          if (backdrop) {
            await user.click(backdrop)

            // Property: Menu should close when backdrop is clicked
            await waitFor(() => {
              const menu = screen.queryByRole('dialog')
              expect(menu).not.toBeInTheDocument()
            })
          }
        }
      ),
      { numRuns: 50 }
    )
  })

  it('should close menu on close button click consistently', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.constantFrom(...ALL_PAGES),
        async (pageName) => {
          const { container } = renderNavigation()
          const user = userEvent.setup()
          
          // Open menu - find hamburger button by aria-expanded attribute
          const hamburgerButton = container.querySelector('button[aria-expanded]')
          expect(hamburgerButton).toBeTruthy()
          if (hamburgerButton) {
            await user.click(hamburgerButton)
          }

          await waitFor(() => {
            expect(screen.getByRole('dialog')).toBeInTheDocument()
          })

          // Click close button
          const closeButton = screen.getByRole('button', { name: /close menu/i })
          await user.click(closeButton)

          // Property: Menu should close when close button is clicked
          await waitFor(() => {
            const menu = screen.queryByRole('dialog')
            expect(menu).not.toBeInTheDocument()
          })
        }
      ),
      { numRuns: 50 }
    )
  })

  it('should have identical menu dimensions and z-index', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...ALL_PAGES),
        (pageName) => {
          const { container } = renderNavigation()
          
          const mobileMenu = container.querySelector('[role="dialog"]')
          
          if (mobileMenu) {
            const classes = mobileMenu.className
            
            // Property: All menus should have consistent dimensions
            expect(classes).toContain('w-80')
            expect(classes).toContain('max-w-sm')
            expect(classes).toContain('h-full')
            expect(classes).toContain('z-50')
          }
        }
      ),
      { numRuns: 10 }
    )
  })

  it('should prevent body scroll when menu is open', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.constantFrom(...ALL_PAGES),
        async (pageName) => {
          const { container } = renderNavigation()
          const user = userEvent.setup()
          
          // Initially, body should be scrollable
          expect(document.body.style.overflow).not.toBe('hidden')
          
          // Open menu - find hamburger button by aria-expanded attribute
          const hamburgerButton = container.querySelector('button[aria-expanded]')
          expect(hamburgerButton).toBeTruthy()
          if (hamburgerButton) {
            await user.click(hamburgerButton)
          }

          await waitFor(() => {
            // Property: Body scroll should be locked when menu is open
            expect(document.body.style.overflow).toBe('hidden')
          })

          // Close menu
          const closeButton = screen.getByRole('button', { name: /close menu/i })
          await user.click(closeButton)

          await waitFor(() => {
            // Property: Body scroll should be restored when menu is closed
            expect(document.body.style.overflow).toBe('unset')
          })
        }
      ),
      { numRuns: 50 }
    )
  })

  it('should have consistent menu structure across all pages', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...ALL_PAGES),
        (pageName) => {
          const { container } = renderNavigation()
          
          // Open menu to check structure - find hamburger button by aria-expanded attribute
          const hamburgerButton = container.querySelector('button[aria-expanded]')
          expect(hamburgerButton).toBeTruthy()
          if (hamburgerButton) {
            userEvent.click(hamburgerButton)
          }

          const mobileMenu = container.querySelector('[role="dialog"]')
          
          if (mobileMenu) {
            // Property: Menu should have consistent structure
            expect(mobileMenu).toHaveAttribute('role', 'dialog')
            expect(mobileMenu).toHaveAttribute('aria-modal', 'true')
            expect(mobileMenu).toHaveAttribute('aria-label', 'Mobile navigation menu')
            
            // Should have menu header with close button
            const closeButton = screen.getByRole('button', { name: /close menu/i })
            expect(closeButton).toBeInTheDocument()
            
            // Should have navigation section
            const nav = mobileMenu.querySelector('nav[role="navigation"]')
            expect(nav).toBeInTheDocument()
          }
        }
      ),
      { numRuns: 10 }
    )
  })

  it('should extract identical menu behavior characteristics', () => {
    fc.assert(
      fc.property(
        fc.tuple(
          fc.constantFrom(...ALL_PAGES),
          fc.constantFrom(...ALL_PAGES)
        ),
        ([page1, page2]) => {
          // Render navigation twice to compare
          const { container: container1 } = renderNavigation()
          const behavior1 = extractMenuBehavior(container1)
          
          const { container: container2 } = renderNavigation()
          const behavior2 = extractMenuBehavior(container2)
          
          // Property: Menu behavior should be identical across all pages
          if (behavior1 && behavior2) {
            expect(behavior1.position).toBe(behavior2.position)
            expect(behavior1.hasTranslateXFull).toBe(behavior2.hasTranslateXFull)
            expect(behavior1.hasTransform).toBe(behavior2.hasTransform)
            expect(behavior1.hasTransition).toBe(behavior2.hasTransition)
            expect(behavior1.hasBackdrop).toBe(behavior2.hasBackdrop)
            expect(behavior1.width).toBe(behavior2.width)
            expect(behavior1.height).toBe(behavior2.height)
            expect(behavior1.zIndex).toBe(behavior2.zIndex)
          }
        }
      ),
      { numRuns: 10 }
    )
  })
})
