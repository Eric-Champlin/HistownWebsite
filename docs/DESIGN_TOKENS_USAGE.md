# Design Tokens Usage Guide

**File:** `src/constants/responsive.ts`  
**Purpose:** Centralized responsive design constants for consistent mobile-first development

---

## Overview

The design tokens file provides a single source of truth for all responsive design values used throughout the application. This ensures consistency and makes it easy to adjust responsive behavior globally.

---

## Import Examples

### Import Specific Constants
```typescript
import { BREAKPOINTS, TOUCH_TARGETS, MOBILE_SPACING } from '@/constants/responsive';
```

### Import All Constants
```typescript
import { RESPONSIVE } from '@/constants/responsive';
// or
import RESPONSIVE from '@/constants/responsive';
```

### Import Utility Functions
```typescript
import { isMobile, isTablet, isDesktop, getCurrentBreakpoint } from '@/constants/responsive';
```

---

## Breakpoints

### Standard Breakpoints
```typescript
import { BREAKPOINTS } from '@/constants/responsive';

// Usage in JavaScript
if (window.innerWidth >= BREAKPOINTS.LG) {
  // Desktop behavior
}

// Values
BREAKPOINTS.XS   // 475px
BREAKPOINTS.SM   // 640px
BREAKPOINTS.MD   // 768px
BREAKPOINTS.LG   // 1024px
BREAKPOINTS.XL   // 1280px
BREAKPOINTS.XXL  // 1536px
```

### Mobile-Specific Breakpoints
```typescript
import { MOBILE_BREAKPOINTS } from '@/constants/responsive';

// Target specific mobile devices
MOBILE_BREAKPOINTS.SMALL   // 375px (iPhone SE)
MOBILE_BREAKPOINTS.MEDIUM  // 390px (iPhone 12/13/14)
MOBILE_BREAKPOINTS.LARGE   // 428px (iPhone 14 Pro Max)
```

### Tablet-Specific Breakpoints
```typescript
import { TABLET_BREAKPOINTS } from '@/constants/responsive';

TABLET_BREAKPOINTS.SMALL   // 640px
TABLET_BREAKPOINTS.MEDIUM  // 768px
TABLET_BREAKPOINTS.LARGE   // 1024px
```

### Desktop-Specific Breakpoints
```typescript
import { DESKTOP_BREAKPOINTS } from '@/constants/responsive';

DESKTOP_BREAKPOINTS.SMALL   // 1024px
DESKTOP_BREAKPOINTS.MEDIUM  // 1280px
DESKTOP_BREAKPOINTS.LARGE   // 1920px
```

---

## Touch Targets

### Touch Target Sizes
```typescript
import { TOUCH_TARGETS } from '@/constants/responsive';

// Minimum touch target (WCAG 2.1 Level AAA)
const buttonSize = TOUCH_TARGETS.MINIMUM; // 44px

// Recommended touch target (Apple/Material Design)
const buttonSize = TOUCH_TARGETS.RECOMMENDED; // 48px

// Comfortable touch target
const buttonSize = TOUCH_TARGETS.COMFORTABLE; // 56px

// Large touch target for primary actions
const buttonSize = TOUCH_TARGETS.LARGE; // 64px
```

### Usage in Components
```typescript
// Ensure button meets minimum touch target
<button 
  className="w-12 h-12" // 48px = TOUCH_TARGETS.RECOMMENDED
  style={{ 
    minWidth: `${TOUCH_TARGETS.RECOMMENDED}px`,
    minHeight: `${TOUCH_TARGETS.RECOMMENDED}px`
  }}
>
  Click me
</button>
```

### Touch Spacing
```typescript
import { TOUCH_SPACING } from '@/constants/responsive';

// Minimum spacing between interactive elements
TOUCH_SPACING.MINIMUM      // 8px
TOUCH_SPACING.RECOMMENDED  // 12px
TOUCH_SPACING.COMFORTABLE  // 16px
```

---

## Spacing Scale

### Mobile Spacing
```typescript
import { MOBILE_SPACING } from '@/constants/responsive';

// Use for mobile layouts
<div style={{ padding: `${MOBILE_SPACING.LG}px` }}> // 16px
  <div style={{ marginBottom: `${MOBILE_SPACING.XL}px` }}> // 24px
    Content
  </div>
</div>

// Available values
MOBILE_SPACING.XS    // 4px
MOBILE_SPACING.SM    // 8px
MOBILE_SPACING.MD    // 12px
MOBILE_SPACING.LG    // 16px
MOBILE_SPACING.XL    // 24px
MOBILE_SPACING.XXL   // 32px
MOBILE_SPACING.XXXL  // 48px
```

### Tablet Spacing
```typescript
import { TABLET_SPACING } from '@/constants/responsive';

TABLET_SPACING.XS    // 8px
TABLET_SPACING.SM    // 12px
TABLET_SPACING.MD    // 16px
TABLET_SPACING.LG    // 24px
TABLET_SPACING.XL    // 32px
TABLET_SPACING.XXL   // 48px
TABLET_SPACING.XXXL  // 64px
```

### Desktop Spacing
```typescript
import { DESKTOP_SPACING } from '@/constants/responsive';

DESKTOP_SPACING.XS    // 12px
DESKTOP_SPACING.SM    // 16px
DESKTOP_SPACING.MD    // 24px
DESKTOP_SPACING.LG    // 32px
DESKTOP_SPACING.XL    // 48px
DESKTOP_SPACING.XXL   // 64px
DESKTOP_SPACING.XXXL  // 96px
```

### Responsive Spacing Example
```typescript
import { MOBILE_SPACING, TABLET_SPACING, DESKTOP_SPACING, getCurrentBreakpoint } from '@/constants/responsive';

const getResponsiveSpacing = () => {
  const breakpoint = getCurrentBreakpoint();
  
  switch (breakpoint) {
    case 'mobile':
      return MOBILE_SPACING.LG;
    case 'tablet':
      return TABLET_SPACING.LG;
    case 'desktop':
      return DESKTOP_SPACING.LG;
  }
};
```

---

## Typography Scale

### Mobile Typography
```typescript
import { MOBILE_TYPOGRAPHY } from '@/constants/responsive';

// Use for mobile text sizes
<h1 style={{ fontSize: `${MOBILE_TYPOGRAPHY.H1}px` }}>Heading</h1> // 32px
<p style={{ fontSize: `${MOBILE_TYPOGRAPHY.BASE}px` }}>Body text</p> // 16px

// Available values
MOBILE_TYPOGRAPHY.XS       // 12px
MOBILE_TYPOGRAPHY.SM       // 14px
MOBILE_TYPOGRAPHY.BASE     // 16px
MOBILE_TYPOGRAPHY.LG       // 18px
MOBILE_TYPOGRAPHY.XL       // 20px
MOBILE_TYPOGRAPHY.H3       // 24px
MOBILE_TYPOGRAPHY.H2       // 28px
MOBILE_TYPOGRAPHY.H1       // 32px
MOBILE_TYPOGRAPHY.DISPLAY  // 40px
```

### Tablet Typography
```typescript
import { TABLET_TYPOGRAPHY } from '@/constants/responsive';

TABLET_TYPOGRAPHY.XS       // 12px
TABLET_TYPOGRAPHY.SM       // 14px
TABLET_TYPOGRAPHY.BASE     // 16px
TABLET_TYPOGRAPHY.LG       // 18px
TABLET_TYPOGRAPHY.XL       // 22px
TABLET_TYPOGRAPHY.H3       // 28px
TABLET_TYPOGRAPHY.H2       // 36px
TABLET_TYPOGRAPHY.H1       // 48px
TABLET_TYPOGRAPHY.DISPLAY  // 56px
```

### Desktop Typography
```typescript
import { DESKTOP_TYPOGRAPHY } from '@/constants/responsive';

DESKTOP_TYPOGRAPHY.XS       // 12px
DESKTOP_TYPOGRAPHY.SM       // 14px
DESKTOP_TYPOGRAPHY.BASE     // 18px
DESKTOP_TYPOGRAPHY.LG       // 20px
DESKTOP_TYPOGRAPHY.XL       // 24px
DESKTOP_TYPOGRAPHY.H3       // 30px
DESKTOP_TYPOGRAPHY.H2       // 48px
DESKTOP_TYPOGRAPHY.H1       // 72px
DESKTOP_TYPOGRAPHY.DISPLAY  // 96px
```

### Line Heights
```typescript
import { LINE_HEIGHTS } from '@/constants/responsive';

// For headings
<h1 style={{ lineHeight: LINE_HEIGHTS.TIGHT }}>Heading</h1> // 1.25

// For body text
<p style={{ lineHeight: LINE_HEIGHTS.NORMAL }}>Body</p> // 1.5

// Available values
LINE_HEIGHTS.TIGHT    // 1.25
LINE_HEIGHTS.NORMAL   // 1.5
LINE_HEIGHTS.RELAXED  // 1.75
LINE_HEIGHTS.LOOSE    // 2
```

---

## Container Widths

```typescript
import { CONTAINER_WIDTHS, CONTAINER_PADDING } from '@/constants/responsive';

// Maximum container widths
CONTAINER_WIDTHS.MOBILE   // '100%'
CONTAINER_WIDTHS.TABLET   // 720px
CONTAINER_WIDTHS.DESKTOP  // 1024px
CONTAINER_WIDTHS.LARGE    // 1280px
CONTAINER_WIDTHS.XLARGE   // 1536px

// Container padding
CONTAINER_PADDING.MOBILE   // 16px
CONTAINER_PADDING.TABLET   // 24px
CONTAINER_PADDING.DESKTOP  // 32px
```

---

## Grid System

### Grid Columns
```typescript
import { GRID_COLUMNS } from '@/constants/responsive';

GRID_COLUMNS.MOBILE   // 1 column
GRID_COLUMNS.TABLET   // 2 columns
GRID_COLUMNS.DESKTOP  // 3 columns
GRID_COLUMNS.LARGE    // 4 columns
```

### Grid Gaps
```typescript
import { GRID_GAPS } from '@/constants/responsive';

GRID_GAPS.MOBILE   // 16px
GRID_GAPS.TABLET   // 24px
GRID_GAPS.DESKTOP  // 32px
```

---

## Z-Index Scale

```typescript
import { Z_INDEX } from '@/constants/responsive';

// Use consistent z-index values
<div style={{ zIndex: Z_INDEX.DROPDOWN }}>Dropdown</div>
<div style={{ zIndex: Z_INDEX.MOBILE_MENU }}>Mobile Menu</div>
<div style={{ zIndex: Z_INDEX.MODAL }}>Modal</div>

// Available values
Z_INDEX.BASE           // 0
Z_INDEX.DROPDOWN       // 10
Z_INDEX.STICKY         // 20
Z_INDEX.FIXED          // 30
Z_INDEX.CHAT_BUTTON    // 40
Z_INDEX.CHAT_POPUP     // 45
Z_INDEX.MOBILE_MENU    // 50
Z_INDEX.MODAL_BACKDROP // 60
Z_INDEX.MODAL          // 70
Z_INDEX.TOOLTIP        // 80
Z_INDEX.TOAST          // 90
Z_INDEX.MAX            // 100
```

---

## Animation Constants

### Animation Durations
```typescript
import { ANIMATION_DURATION } from '@/constants/responsive';

// Use for consistent animation timing
<div style={{ 
  transition: `all ${ANIMATION_DURATION.NORMAL}ms ease-out` 
}}>
  Animated element
</div>

// Available values
ANIMATION_DURATION.INSTANT    // 0ms
ANIMATION_DURATION.FAST       // 150ms
ANIMATION_DURATION.NORMAL     // 300ms
ANIMATION_DURATION.SLOW       // 500ms
ANIMATION_DURATION.VERY_SLOW  // 1000ms
```

### Animation Easing
```typescript
import { ANIMATION_EASING } from '@/constants/responsive';

// Use for consistent easing functions
<div style={{ 
  transition: `all 300ms ${ANIMATION_EASING.EASE_OUT}` 
}}>
  Animated element
</div>

// Available values
ANIMATION_EASING.LINEAR           // 'linear'
ANIMATION_EASING.EASE_IN          // 'ease-in'
ANIMATION_EASING.EASE_OUT         // 'ease-out'
ANIMATION_EASING.EASE_IN_OUT      // 'ease-in-out'
ANIMATION_EASING.EASE_OUT_CUSTOM  // 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
```

---

## Viewport Detection Utilities

### Check Current Viewport
```typescript
import { isMobile, isTablet, isDesktop, getCurrentBreakpoint } from '@/constants/responsive';

// Boolean checks
if (isMobile()) {
  // Mobile-specific code
}

if (isTablet()) {
  // Tablet-specific code
}

if (isDesktop()) {
  // Desktop-specific code
}

// Get current breakpoint name
const breakpoint = getCurrentBreakpoint(); // 'mobile' | 'tablet' | 'desktop'
```

### Usage in React Components
```typescript
import { useState, useEffect } from 'react';
import { isMobile } from '@/constants/responsive';

function MyComponent() {
  const [mobile, setMobile] = useState(isMobile());
  
  useEffect(() => {
    const handleResize = () => setMobile(isMobile());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div>
      {mobile ? <MobileView /> : <DesktopView />}
    </div>
  );
}
```

---

## Media Query Strings

### Usage with matchMedia
```typescript
import { MEDIA_QUERIES } from '@/constants/responsive';

// Check if media query matches
const isMobileOnly = window.matchMedia(MEDIA_QUERIES.MOBILE_ONLY).matches;
const isDesktopUp = window.matchMedia(MEDIA_QUERIES.DESKTOP_UP).matches;

// Listen for media query changes
const mediaQuery = window.matchMedia(MEDIA_QUERIES.TABLET_UP);
mediaQuery.addEventListener('change', (e) => {
  if (e.matches) {
    // Tablet or larger
  }
});

// Available queries
MEDIA_QUERIES.MOBILE_ONLY    // '(max-width: 767px)'
MEDIA_QUERIES.TABLET_ONLY    // '(min-width: 768px) and (max-width: 1023px)'
MEDIA_QUERIES.DESKTOP_ONLY   // '(min-width: 1024px)'
MEDIA_QUERIES.TABLET_UP      // '(min-width: 768px)'
MEDIA_QUERIES.DESKTOP_UP     // '(min-width: 1024px)'
MEDIA_QUERIES.REDUCED_MOTION // '(prefers-reduced-motion: reduce)'
MEDIA_QUERIES.DARK_MODE      // '(prefers-color-scheme: dark)'
MEDIA_QUERIES.RETINA         // High resolution displays
```

---

## Best Practices

### 1. Always Use Constants
❌ **DON'T:**
```typescript
if (window.innerWidth < 768) { ... }
<button style={{ minWidth: '44px' }}>
```

✅ **DO:**
```typescript
import { BREAKPOINTS, TOUCH_TARGETS } from '@/constants/responsive';

if (window.innerWidth < BREAKPOINTS.MD) { ... }
<button style={{ minWidth: `${TOUCH_TARGETS.MINIMUM}px` }}>
```

### 2. Use Viewport Detection Utilities
❌ **DON'T:**
```typescript
const isMobile = window.innerWidth < 768;
```

✅ **DO:**
```typescript
import { isMobile } from '@/constants/responsive';

const mobile = isMobile();
```

### 3. Use Z-Index Scale
❌ **DON'T:**
```typescript
<div style={{ zIndex: 9999 }}>
```

✅ **DO:**
```typescript
import { Z_INDEX } from '@/constants/responsive';

<div style={{ zIndex: Z_INDEX.MODAL }}>
```

### 4. Use Animation Constants
❌ **DON'T:**
```typescript
<div style={{ transition: 'all 0.3s ease-out' }}>
```

✅ **DO:**
```typescript
import { ANIMATION_DURATION, ANIMATION_EASING } from '@/constants/responsive';

<div style={{ 
  transition: `all ${ANIMATION_DURATION.NORMAL}ms ${ANIMATION_EASING.EASE_OUT}` 
}}>
```

---

## TypeScript Support

All constants are fully typed with TypeScript:

```typescript
// Type-safe access
const breakpoint: number = BREAKPOINTS.LG; // ✅ number
const touchTarget: number = TOUCH_TARGETS.MINIMUM; // ✅ number
const easing: string = ANIMATION_EASING.EASE_OUT; // ✅ string

// Readonly constants (cannot be modified)
BREAKPOINTS.LG = 1000; // ❌ Error: Cannot assign to 'LG' because it is a read-only property
```

---

## Testing with Constants

```typescript
import { BREAKPOINTS, TOUCH_TARGETS } from '@/constants/responsive';
import { setViewportSize } from '@/test/utils';

describe('Responsive component', () => {
  it('should render mobile layout', () => {
    setViewportSize(BREAKPOINTS.SM - 1);
    // Test mobile layout
  });
  
  it('should have proper touch targets', () => {
    const button = screen.getByRole('button');
    const { width, height } = button.getBoundingClientRect();
    
    expect(width).toBeGreaterThanOrEqual(TOUCH_TARGETS.MINIMUM);
    expect(height).toBeGreaterThanOrEqual(TOUCH_TARGETS.MINIMUM);
  });
});
```

---

## Summary

The design tokens file provides:
- ✅ Consistent breakpoints across the application
- ✅ WCAG-compliant touch target sizes
- ✅ Mobile-first spacing and typography scales
- ✅ Organized z-index scale
- ✅ Standard animation durations and easing
- ✅ Viewport detection utilities
- ✅ Media query strings
- ✅ Full TypeScript support

Use these constants throughout the application for consistent, maintainable responsive design.
