# Viewport Testing Guide

## Overview

This guide explains how to test responsive behavior across different viewport sizes in the HisTown Dance Studio website.

## Test Viewports

### Mobile Viewports
- **375px** - iPhone SE (minimum target)
- **390px** - iPhone 12/13/14 (primary mobile target)
- **428px** - iPhone 14 Pro Max (maximum mobile)

### Tablet Viewports
- **640px** - Small tablet (sm breakpoint)
- **768px** - Tablet (md breakpoint)

### Desktop Viewports
- **1024px** - Desktop (lg breakpoint)
- **1280px** - Large desktop (xl breakpoint)

## Test Utilities

### Setting Viewport Size

```typescript
import { setViewportSize, VIEWPORTS } from '@/test/utils'

// Set specific viewport
setViewportSize(VIEWPORTS.MOBILE_MEDIUM, 844)

// Or use helper functions
setMobileViewport()   // 390px × 844px
setTabletViewport()   // 768px × 1024px
setDesktopViewport()  // 1024px × 768px
```

### Testing Responsive Components

```typescript
import { render, screen, setMobileViewport, setDesktopViewport } from '@/test/utils'
import MyComponent from './MyComponent'

describe('MyComponent responsive behavior', () => {
  it('should display mobile layout on small screens', () => {
    setMobileViewport()
    render(<MyComponent />)
    
    // Test mobile-specific behavior
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()
  })
  
  it('should display desktop layout on large screens', () => {
    setDesktopViewport()
    render(<MyComponent />)
    
    // Test desktop-specific behavior
    expect(screen.getByTestId('desktop-nav')).toBeInTheDocument()
  })
})
```

### Testing Touch Gestures

```typescript
import { render, simulateSwipe } from '@/test/utils'

it('should respond to swipe gestures', () => {
  const { container } = render(<Carousel />)
  const carousel = container.querySelector('.carousel')
  
  // Simulate swipe left
  simulateSwipe(carousel, 'left', 100)
  
  // Assert carousel moved
  expect(carousel).toHaveStyle({ transform: 'translateX(-100px)' })
})
```

### Testing Media Queries

```typescript
import { mockMatchMedia } from '@/test/utils'

it('should apply mobile styles when media query matches', () => {
  mockMatchMedia(true) // Simulate mobile media query match
  
  render(<MyComponent />)
  
  // Test behavior when media query matches
})
```

## Testing Patterns

### Pattern 1: Mobile-First Testing

Test mobile layout first, then verify desktop enhancements:

```typescript
describe('Navigation', () => {
  it('should show hamburger menu on mobile', () => {
    setMobileViewport()
    render(<Navigation />)
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })
  
  it('should show full navigation on desktop', () => {
    setDesktopViewport()
    render(<Navigation />)
    expect(screen.getByRole('navigation')).toHaveClass('desktop-nav')
  })
})
```

### Pattern 2: Breakpoint Testing

Test behavior at each breakpoint:

```typescript
describe('Grid layout', () => {
  it.each([
    [VIEWPORTS.MOBILE_SMALL, 1],
    [VIEWPORTS.TABLET, 2],
    [VIEWPORTS.DESKTOP, 3],
  ])('should show %i columns at %ipx', (width, expectedColumns) => {
    setViewportSize(width)
    render(<Grid />)
    
    const items = screen.getAllByTestId('grid-item')
    // Assert column count based on layout
  })
})
```

### Pattern 3: Touch vs Mouse Testing

```typescript
describe('Interactive elements', () => {
  it('should have larger touch targets on mobile', () => {
    setMobileViewport()
    render(<Button />)
    
    const button = screen.getByRole('button')
    const { width, height } = button.getBoundingClientRect()
    
    // Minimum 44x44px touch target
    expect(width).toBeGreaterThanOrEqual(44)
    expect(height).toBeGreaterThanOrEqual(44)
  })
})
```

## Property-Based Testing for Viewports

Use fast-check to test across random viewport sizes:

```typescript
import * as fc from 'fast-check'

describe('Responsive component', () => {
  it('should never overflow at any viewport width', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 375, max: 1920 }), // Random viewport width
        (width) => {
          setViewportSize(width)
          const { container } = render(<MyComponent />)
          
          // Assert no horizontal overflow
          const scrollWidth = container.scrollWidth
          const clientWidth = container.clientWidth
          expect(scrollWidth).toBeLessThanOrEqual(clientWidth)
        }
      ),
      { numRuns: 100 } // Test 100 random viewports
    )
  })
})
```

## Common Test Scenarios

### 1. Mobile Menu
```typescript
it('should open mobile menu from right on mobile', () => {
  setMobileViewport()
  render(<MobileMenu />)
  
  const menuButton = screen.getByLabelText('Open menu')
  fireEvent.click(menuButton)
  
  const menu = screen.getByRole('navigation')
  expect(menu).toHaveClass('translate-x-0')
})
```

### 2. Responsive Images
```typescript
it('should load appropriate image size for viewport', () => {
  setMobileViewport()
  render(<LazyImage src="test.jpg" />)
  
  const img = screen.getByRole('img')
  expect(img.src).toContain('w_800') // Mobile size
})
```

### 3. Grid Layouts
```typescript
it('should stack cards vertically on mobile', () => {
  setMobileViewport()
  render(<CardGrid />)
  
  const grid = screen.getByTestId('card-grid')
  expect(grid).toHaveClass('grid-cols-1')
})
```

### 4. Typography
```typescript
it('should use smaller font sizes on mobile', () => {
  setMobileViewport()
  render(<Heading>Test</Heading>)
  
  const heading = screen.getByText('Test')
  const fontSize = getComputedStyleValue(heading, 'font-size')
  expect(parseInt(fontSize)).toBeLessThan(48) // Less than desktop size
})
```

## Running Viewport Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test -- Navigation.test.tsx

# Run tests matching pattern
npm test -- --grep "viewport"
```

## Best Practices

1. **Test Mobile First**: Always test mobile viewport before desktop
2. **Test All Breakpoints**: Verify behavior at 375px, 640px, 768px, 1024px
3. **Test Touch Targets**: Ensure minimum 44x44px on mobile
4. **Test Overflow**: Verify no horizontal scrolling at any viewport
5. **Test Animations**: Ensure animations work smoothly on mobile
6. **Use Property-Based Testing**: Test random viewport sizes to catch edge cases
7. **Mock Media Queries**: Use mockMatchMedia for CSS media query testing
8. **Test Real Devices**: Supplement automated tests with manual device testing

## Debugging Tips

### View Test Output
```typescript
import { screen, debug } from '@/test/utils'

// Debug entire document
debug()

// Debug specific element
debug(screen.getByRole('button'))
```

### Check Computed Styles
```typescript
import { getComputedStyleValue } from '@/test/utils'

const element = screen.getByTestId('my-element')
console.log(getComputedStyleValue(element, 'display'))
```

### Verify Viewport Size
```typescript
console.log(`Viewport: ${window.innerWidth}x${window.innerHeight}`)
```

## Integration with CI/CD

Tests run automatically on:
- Every commit (pre-commit hook)
- Pull requests (GitHub Actions)
- Before deployment (CI pipeline)

Viewport tests ensure responsive behavior is maintained across all code changes.
