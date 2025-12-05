# CSS Patterns Guide

## Date: December 4, 2025

## Overview
This guide documents the recommended CSS patterns for the HisTown Dance Studio website. All patterns follow a mobile-first approach using Tailwind CSS utilities.

## Core Principles

### 1. Mobile-First Approach
Always write base styles for mobile (< 640px) and use responsive prefixes for larger screens:
```css
/* ✅ CORRECT - Mobile-first */
<div className="text-3xl sm:text-4xl lg:text-5xl">

/* ❌ INCORRECT - Desktop-first */
<div className="text-5xl md:text-4xl sm:text-3xl">
```

### 2. Use Mobile-First Utilities
Always prefer the mobile-first utility classes over custom classes:
```css
/* ✅ CORRECT */
<div className="mobile-container mobile-section">

/* ❌ INCORRECT - Deprecated */
<div className="section-container section-padding">
```

### 3. Consistent Spacing
Use the mobile-first spacing utilities for consistency:
```css
/* ✅ CORRECT */
<div className="mobile-space-y-normal">
<div className="mobile-gap-tight">

/* ❌ INCORRECT - Inconsistent */
<div className="space-y-6 sm:space-y-10 lg:space-y-14">
```

## Typography Patterns

### Headings
```tsx
// H1 - Main page headings
<h1 className="mobile-heading-1">Main Heading</h1>
// Renders as: text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold

// H2 - Section headings
<h2 className="mobile-heading-2">Section Heading</h2>
// Renders as: text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold

// H3 - Subsection headings
<h3 className="mobile-heading-3">Subsection Heading</h3>
// Renders as: text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold

// H4 - Card/component headings
<h4 className="mobile-heading-4">Component Heading</h4>
// Renders as: text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium
```

### Body Text
```tsx
// Standard body text
<p className="mobile-body">Regular paragraph text</p>
// Renders as: text-base sm:text-lg leading-relaxed

// Small body text
<p className="mobile-body-small">Small text for captions</p>
// Renders as: text-sm sm:text-base leading-normal
```

## Layout Patterns

### Containers
```tsx
// Page container with responsive padding
<div className="mobile-container">
  {/* Content */}
</div>
// Renders as: px-4 sm:px-6 lg:px-8 max-w-full

// Section with vertical padding
<section className="mobile-section">
  {/* Content */}
</section>
// Renders as: py-12 sm:py-16 lg:py-24
```

### Stacking and Grids
```tsx
// Vertical stack on mobile, horizontal on desktop
<div className="mobile-stack-to-row mobile-gap-normal">
  {/* Items */}
</div>

// Single column on mobile, 2 on tablet, 3 on desktop
<div className="mobile-grid-1 mobile-gap-tight">
  {/* Grid items */}
</div>

// Always vertical stack
<div className="mobile-stack mobile-space-y-tight">
  {/* Stacked items */}
</div>
```

## Button Patterns

### Primary Button
```tsx
// Primary CTA button
<button className="btn-primary">
  Click Me
</button>
// Custom gradient button with hover effects
```

### Outline Button
```tsx
// Secondary/outline button
<button className="border-2 border-histown-primary text-histown-primary hover:bg-histown-primary hover:text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-histown-primary focus:ring-offset-2">
  Learn More
</button>
```

### Mobile-Optimized Buttons
```tsx
// Full-width on mobile, auto on desktop
<button className="mobile-btn">
  Submit
</button>
// Renders as: w-full sm:w-auto px-6 py-3 text-base font-medium rounded-lg min-height: 44px

// Large button with better touch target
<button className="mobile-btn-lg">
  Get Started
</button>
// Renders as: w-full sm:w-auto px-8 py-4 text-lg font-medium rounded-lg min-height: 48px
```

## Form Patterns

### Input Fields
```tsx
// Standard input
<input className="mobile-input" type="text" />
// Renders as: w-full px-4 py-3 text-base rounded-lg min-height: 44px

// Large input
<input className="mobile-input-lg" type="email" />
// Renders as: w-full px-4 py-4 text-lg rounded-lg min-height: 48px
```

### Labels
```tsx
// Form label
<label className="mobile-label">
  Email Address
</label>
// Renders as: block text-sm sm:text-base font-medium mb-2
```

### Complete Form Example
```tsx
<form className="mobile-space-y-tight">
  <div>
    <label className="mobile-label" htmlFor="email">
      Email Address
    </label>
    <input 
      id="email"
      type="email" 
      className="mobile-input mobile-focus-ring" 
      placeholder="you@example.com"
    />
  </div>
  <button type="submit" className="mobile-btn btn-primary">
    Submit
  </button>
</form>
```

## Image Patterns

### Responsive Images
```tsx
// Full-width image
<img src="..." alt="..." className="mobile-img-full" />
// Renders as: w-full h-auto

// Cover image (fills container)
<img src="..." alt="..." className="mobile-img-cover" />
// Renders as: w-full h-auto object-cover

// Contain image (fits within container)
<img src="..." alt="..." className="mobile-img-contain" />
// Renders as: w-full h-auto object-contain
```

### Lazy Loading
```tsx
// Always use lazy loading for images below the fold
<img 
  src="..." 
  alt="..." 
  loading="lazy"
  className="mobile-img-full"
/>
```

## Card Patterns

### Standard Card
```tsx
<div className="mobile-card mobile-shadow mobile-rounded">
  <h3 className="mobile-heading-3">Card Title</h3>
  <p className="mobile-body">Card content</p>
</div>
// Renders with: p-4 sm:p-6 lg:p-8 rounded-lg shadow-md sm:shadow-lg lg:shadow-xl
```

### Compact Card
```tsx
<div className="mobile-card-compact mobile-shadow">
  <h4 className="mobile-heading-4">Compact Card</h4>
  <p className="mobile-body-small">Less padding</p>
</div>
// Renders with: p-3 sm:p-4 lg:p-6 rounded-lg
```

## Spacing Patterns

### Vertical Spacing
```tsx
// Tight spacing (4/6/8)
<div className="mobile-space-y-tight">
  {/* Items with tight spacing */}
</div>

// Normal spacing (6/8/12)
<div className="mobile-space-y-normal">
  {/* Items with normal spacing */}
</div>

// Loose spacing (8/12/16)
<div className="mobile-space-y-loose">
  {/* Items with loose spacing */}
</div>
```

### Padding
```tsx
// Tight padding
<div className="mobile-p-tight">Content</div>
// Renders as: p-4 sm:p-6 lg:p-8

// Normal padding
<div className="mobile-p-normal">Content</div>
// Renders as: p-6 sm:p-8 lg:p-12

// Horizontal only
<div className="mobile-px-tight">Content</div>

// Vertical only
<div className="mobile-py-normal">Content</div>
```

## Touch Target Patterns

### Minimum Touch Targets
```tsx
// Standard touch target (44x44px minimum)
<button className="mobile-touch-target">
  Tap Me
</button>

// Large touch target (48x48px)
<button className="mobile-touch-target-lg">
  Tap Me
</button>

// Extra large touch target (56x56px)
<button className="mobile-touch-target-xl">
  Tap Me
</button>
```

## Interactive Patterns

### Focus States
```tsx
// Standard focus ring
<button className="mobile-focus-ring">
  Click Me
</button>
// Renders as: focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-histown-primary

// Large focus ring
<button className="mobile-focus-ring-lg">
  Click Me
</button>
// Renders as: focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-histown-primary
```

### Active States
```tsx
// Scale on tap
<button className="mobile-active-scale">
  Press Me
</button>
// Renders as: active:scale-95 transition-transform duration-150

// Opacity on tap
<button className="mobile-active-opacity">
  Press Me
</button>
// Renders as: active:opacity-75 transition-opacity duration-150
```

## Visibility Patterns

### Responsive Visibility
```tsx
// Show only on mobile
<div className="mobile-only">Mobile content</div>
// Renders as: block sm:hidden

// Show on tablet and up
<div className="tablet-up">Tablet+ content</div>
// Renders as: hidden sm:block

// Show only on desktop
<div className="desktop-only">Desktop content</div>
// Renders as: hidden lg:block

// Show on mobile and tablet only
<div className="mobile-tablet">Mobile/Tablet content</div>
// Renders as: block lg:hidden
```

## Animation Patterns

### Scroll Animations
```tsx
// Slide in from left
<div className="animate-on-scroll">
  <div className="animate-slide-in-left">
    Content slides in from left
  </div>
</div>

// Slide in from right
<div className="animate-on-scroll">
  <div className="animate-slide-in-right">
    Content slides in from right
  </div>
</div>

// Hero fade-in
<div className="hero-fade-in opacity-0 translate-y-8">
  Hero content fades in
</div>
```

### Reduced Motion
All animations automatically respect `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  /* Animations are disabled automatically */
}
```

## Accessibility Patterns

### Keyboard Navigation
```tsx
// Always include focus states
<button className="mobile-focus-ring mobile-active-scale">
  Accessible Button
</button>
```

### Screen Reader Support
```tsx
// Use semantic HTML
<nav aria-label="Main navigation">
  <ul>
    <li><a href="...">Link</a></li>
  </ul>
</nav>

// Add ARIA labels where needed
<button aria-label="Close menu">
  <span aria-hidden="true">×</span>
</button>
```

### Form Accessibility
```tsx
// Always associate labels with inputs
<label htmlFor="email" className="mobile-label">
  Email
</label>
<input 
  id="email" 
  type="email" 
  className="mobile-input mobile-focus-ring"
  aria-required="true"
/>
```

## Performance Patterns

### Lazy Loading
```tsx
// Images
<img loading="lazy" src="..." alt="..." />

// Components (React)
const LazyComponent = React.lazy(() => import('./Component'));
```

### Optimized Backgrounds
```tsx
// Use enhanced-bg-pattern for complex backgrounds
<div className="enhanced-bg-pattern">
  {/* Background is optimized for performance */}
</div>
```

## Common Mistakes to Avoid

### ❌ Don't Use Deprecated Classes
```tsx
// ❌ WRONG
<div className="section-container section-padding">
<h1 className="heading-primary">
<p className="text-body">

// ✅ CORRECT
<div className="mobile-container mobile-section">
<h1 className="mobile-heading-1">
<p className="mobile-body">
```

### ❌ Don't Mix Old and New Patterns
```tsx
// ❌ WRONG - Mixing patterns
<div className="section-container mobile-section">

// ✅ CORRECT - Use one pattern
<div className="mobile-container mobile-section">
```

### ❌ Don't Forget Touch Targets
```tsx
// ❌ WRONG - Too small for touch
<button className="px-2 py-1 text-xs">Tap</button>

// ✅ CORRECT - Adequate touch target
<button className="mobile-btn">Tap</button>
```

### ❌ Don't Ignore Accessibility
```tsx
// ❌ WRONG - No focus state
<button className="bg-blue-500">Click</button>

// ✅ CORRECT - Includes focus state
<button className="bg-blue-500 mobile-focus-ring">Click</button>
```

## Quick Reference

### Most Common Utilities
```tsx
// Layout
mobile-container, mobile-section, mobile-stack, mobile-grid-1

// Typography
mobile-heading-1, mobile-heading-2, mobile-body

// Spacing
mobile-space-y-normal, mobile-gap-tight, mobile-p-tight

// Buttons
mobile-btn, mobile-btn-lg, btn-primary

// Forms
mobile-input, mobile-label, mobile-focus-ring

// Images
mobile-img-full, mobile-img-cover

// Cards
mobile-card, mobile-shadow, mobile-rounded

// Touch
mobile-touch-target, mobile-active-scale

// Visibility
mobile-only, tablet-up, desktop-only
```

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Mobile Touch Target Sizes](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)

## Changelog

### December 4, 2025
- Initial CSS patterns guide created
- Documented all mobile-first utilities
- Added examples for common patterns
- Included accessibility guidelines
- Added performance best practices
