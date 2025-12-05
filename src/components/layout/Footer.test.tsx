import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer Component - Mobile Optimization', () => {
  it('should have data-component attribute for testing', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('[data-component="Footer"]')
    expect(footer).toBeTruthy()
  })

  it('should render with vertical stacking on mobile', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('[data-component="Footer"]')
    const mainContainer = footer?.querySelector('.flex')
    
    // Should have flex-col for mobile (vertical stacking)
    expect(mainContainer?.classList.contains('flex-col')).toBe(true)
    // Should have md:grid for desktop
    expect(mainContainer?.classList.contains('md:grid')).toBe(true)
  })

  it('should center-align content on mobile', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('[data-component="Footer"]')
    const mainContainer = footer?.querySelector('.flex')
    
    // Should have items-center for mobile
    expect(mainContainer?.classList.contains('items-center')).toBe(true)
    // Should have text-center for mobile, md:text-left for desktop
    expect(mainContainer?.classList.contains('text-center')).toBe(true)
  })

  it('should have tel: link for phone number (tap-to-call)', () => {
    const { container } = render(<Footer />)
    const telLink = container.querySelector('a[href^="tel:"]')
    
    expect(telLink).toBeTruthy()
    expect(telLink?.getAttribute('href')).toBe('tel:+16156408349')
  })

  it('should have adequate touch targets for phone link (min 44x44px)', () => {
    const { container } = render(<Footer />)
    const telLink = container.querySelector('a[href^="tel:"]')
    
    // Should have min-h-[44px] for adequate touch target on mobile
    expect(telLink?.classList.contains('min-h-[44px]')).toBe(true)
    // Block-level link with flex centering provides adequate width
    expect(telLink?.classList.contains('block')).toBe(true)
  })

  it('should have adequate touch targets for all footer links', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('[data-component="Footer"]')
    const quickLinks = footer?.querySelectorAll('a[href^="/"]')
    
    quickLinks?.forEach(link => {
      // Each link should have min-h-[44px] for mobile touch targets
      expect(link.classList.contains('min-h-[44px]')).toBe(true)
    })
  })

  it('should have social media icons sized for touch (min 44x44px)', () => {
    const { container } = render(<Footer />)
    const socialIcons = container.querySelectorAll('a[href*="instagram"], a[href*="facebook"]')
    
    socialIcons.forEach(icon => {
      // Should have w-12 h-12 (48px) which exceeds minimum 44px
      expect(icon.classList.contains('w-12')).toBe(true)
      expect(icon.classList.contains('h-12')).toBe(true)
    })
  })

  it('should have aria-labels for social media links', () => {
    const { container } = render(<Footer />)
    const instagramLink = container.querySelector('a[href*="instagram"]')
    const facebookLink = container.querySelector('a[href*="facebook"]')
    
    expect(instagramLink?.getAttribute('aria-label')).toBeTruthy()
    expect(facebookLink?.getAttribute('aria-label')).toBeTruthy()
  })

  it('should render logo with proper styling', () => {
    const { container } = render(<Footer />)
    const logo = container.querySelector('img[alt="HisTown Dance Studio"]')
    
    expect(logo).toBeTruthy()
    // Mobile-first: h-24 on mobile, h-32 on larger screens
    expect(logo?.classList.contains('h-24')).toBe(true)
    expect(logo?.classList.contains('sm:h-32')).toBe(true)
  })

  it('should have three main sections (logo/info, quick links, social)', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('[data-component="Footer"]')
    const mainContainer = footer?.querySelector('.flex')
    const sections = mainContainer?.children
    
    expect(sections?.length).toBe(3)
  })

  it('should have copyright section at bottom', () => {
    const { container } = render(<Footer />)
    const copyright = container.querySelector('.border-t')
    
    expect(copyright).toBeTruthy()
    expect(copyright?.textContent).toContain('HisTown Dance Studio')
  })

  it('should have proper mobile padding (px-4)', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('[data-component="Footer"]')
    const innerContainer = footer?.querySelector('.max-w-7xl')
    
    // Should have px-4 for mobile
    expect(innerContainer?.classList.contains('px-4')).toBe(true)
    // Should have sm:px-6 for small screens
    expect(innerContainer?.classList.contains('sm:px-6')).toBe(true)
    // Should have lg:px-8 for large screens
    expect(innerContainer?.classList.contains('lg:px-8')).toBe(true)
  })

  it('should render email as mailto link', () => {
    const { container } = render(<Footer />)
    const emailLink = container.querySelector('a[href^="mailto:"]')
    
    expect(emailLink).toBeTruthy()
    expect(emailLink?.getAttribute('href')).toBe('mailto:info@histown.com')
  })

  it('should have hover states for all interactive elements', () => {
    const { container } = render(<Footer />)
    const links = container.querySelectorAll('a')
    
    links.forEach(link => {
      const hasHoverClass = Array.from(link.classList).some(cls => 
        cls.includes('hover:')
      )
      expect(hasHoverClass).toBe(true)
    })
  })

  it('should maintain consistent styling across renders', () => {
    const { container: container1 } = render(<Footer />)
    const { container: container2 } = render(<Footer />)
    
    const footer1 = container1.querySelector('[data-component="Footer"]')
    const footer2 = container2.querySelector('[data-component="Footer"]')
    
    expect(footer1?.className).toBe(footer2?.className)
  })
})
