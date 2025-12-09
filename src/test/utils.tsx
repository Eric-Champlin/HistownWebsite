import { render, RenderOptions } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ReactElement, ReactNode } from 'react'

/**
 * Mobile viewport sizes for testing
 */
export const VIEWPORTS = {
  MOBILE_SMALL: 375,    // iPhone SE
  MOBILE_MEDIUM: 390,   // iPhone 12/13/14
  MOBILE_LARGE: 428,    // iPhone 14 Pro Max
  TABLET_SMALL: 640,    // sm breakpoint
  TABLET: 768,          // md breakpoint
  DESKTOP: 1024,        // lg breakpoint
  DESKTOP_LARGE: 1280,  // xl breakpoint
} as const

/**
 * Set viewport size for testing
 */
export function setViewportSize(width: number, height: number = 768) {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  })
  
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: height,
  })
  
  // Trigger resize event
  window.dispatchEvent(new Event('resize'))
}

/**
 * Set mobile viewport (390px - iPhone 12/13/14)
 */
export function setMobileViewport() {
  setViewportSize(VIEWPORTS.MOBILE_MEDIUM, 844)
}

/**
 * Set tablet viewport (768px)
 */
export function setTabletViewport() {
  setViewportSize(VIEWPORTS.TABLET, 1024)
}

/**
 * Set desktop viewport (1024px)
 */
export function setDesktopViewport() {
  setViewportSize(VIEWPORTS.DESKTOP, 768)
}

/**
 * Mock window.matchMedia for specific breakpoint
 */
export function mockMatchMedia(matches: boolean) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true,
    }),
  })
}

/**
 * Wrapper component that provides Router context
 */
interface WrapperProps {
  children: ReactNode
}

function Wrapper({ children }: WrapperProps) {
  return <BrowserRouter>{children}</BrowserRouter>
}

/**
 * Custom render function that includes Router
 */
export function renderWithRouter(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(ui, { wrapper: Wrapper, ...options })
}

/**
 * Simulate touch event
 */
export function createTouchEvent(
  type: string,
  touches: Array<{ clientX: number; clientY: number }>
) {
  const touchEvent = new Event(type, { bubbles: true, cancelable: true })
  Object.defineProperty(touchEvent, 'touches', {
    value: touches.map((touch) => ({
      clientX: touch.clientX,
      clientY: touch.clientY,
      screenX: touch.clientX,
      screenY: touch.clientY,
      pageX: touch.clientX,
      pageY: touch.clientY,
      identifier: 0,
      target: null,
    })),
  })
  return touchEvent
}

/**
 * Simulate swipe gesture
 */
export function simulateSwipe(
  element: HTMLElement,
  direction: 'left' | 'right' | 'up' | 'down',
  distance: number = 100
) {
  const startX = direction === 'left' ? distance : 0
  const startY = direction === 'up' ? distance : 0
  const endX = direction === 'right' ? distance : 0
  const endY = direction === 'down' ? distance : 0

  const touchStart = createTouchEvent('touchstart', [
    { clientX: startX, clientY: startY },
  ])
  const touchEnd = createTouchEvent('touchend', [
    { clientX: endX, clientY: endY },
  ])

  element.dispatchEvent(touchStart)
  element.dispatchEvent(touchEnd)
}

/**
 * Wait for animations to complete
 */
export function waitForAnimation(duration: number = 300) {
  return new Promise((resolve) => setTimeout(resolve, duration))
}

/**
 * Check if element is visible in viewport
 */
export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= window.innerHeight &&
    rect.right <= window.innerWidth
  )
}

/**
 * Get computed style value
 */
export function getComputedStyleValue(
  element: HTMLElement,
  property: string
): string {
  return window.getComputedStyle(element).getPropertyValue(property)
}

// Re-export everything from @testing-library/react
export * from '@testing-library/react'
