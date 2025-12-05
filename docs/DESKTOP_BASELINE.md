# Desktop State Baseline Documentation

**Date:** December 2, 2025  
**Task:** 0.6 Document current desktop state (CRITICAL - Baseline)  
**Purpose:** Source of truth for desktop preservation during mobile optimization

---

## ⚠️ CRITICAL NOTICE

**This document represents the BASELINE desktop state that MUST be preserved.**

After EVERY code change during mobile optimization:
1. Test at 1024px, 1280px, 1920px
2. Verify all elements match this baseline
3. Confirm all animations and interactions work
4. DO NOT proceed if desktop state is broken

---

## Desktop Viewport Targets

### Primary Desktop Breakpoints
- **1024px** (lg) - Minimum desktop size
- **1280px** (xl) - Standard desktop
- **1920px** (2xl) - Large desktop/monitor

### Breakpoint Behavior
- **< 1024px**: Mobile menu (hamburger) visible
- **≥ 1024px**: Desktop navigation visible, mobile menu hidden

---

## Navigation (Desktop)

### NavBar Component

#### Logo
- **Position:** Top-left
- **Height:** 132px
- **Margins:** -35px top/bottom (extends beyond nav height)
- **Effect:** Drop shadow
- **Behavior:** Clickable, links to homepage

#### Desktop Navigation Menu
- **Visibility:** `hidden lg:flex` (shows at 1024px+)
- **Position:** Absolute center (left-1/2 transform -translate-x-1/2)
- **Layout:** Horizontal flex with space-x-6
- **Font:** Medium weight, text-lg, uppercase, tracking-wide
- **Color:** Gray-700, hover to histown-primary
- **Transition:** 300ms color transition

#### Dropdown Menus
- **Trigger:** Mouse hover (onMouseEnter)
- **Position:** Absolute, top-full, centered under parent
- **Animation:** Fade in, arrow rotates 180deg
- **Background:** White with gradient (from-white via-gray-50 to-histown-neutral-light)
- **Shadow:** shadow-lg with border-gray-100
- **Mega Menu Width:** max-w-3xl for "Classes" dropdown
- **Regular Dropdown:** min-w-48

#### Mega Menu (Classes Dropdown)
- **Layout:** 2-column grid
- **Column 1:** Dance classes
- **Column 2:** Music & Featured (with subsections)
- **Animations:** Staggered fade-in (25ms delay per item)
- **Hover Effects:** 
  - Background: white/60
  - Font weight: medium
  - Arrow icon slides right
  - Dot scales 125%

#### Right Side Elements
- **Social Icons:** Visible at md+ (768px+)
  - Instagram & Facebook
  - 40px circles with border
  - Hover: text and border change to histown-primary
- **Free Trial Button:** 
  - Gradient: from-histown-accent to-histown-primary
  - White text, px-6 py-3
  - Hover: scale-105
  - Shadow: shadow-lg
- **Parent Portal Link:**
  - Visible at sm+ (640px+)
  - Text-lg, uppercase, tracking-wide
  - Hover: color change to histown-primary

---

## Typography (Desktop)

### Heading Sizes
```css
.heading-primary {
  font-size: 3rem (48px) base
  md: 3.75rem (60px)
  lg: 4.5rem (72px)
  font-weight: bold
  color: histown-text
}

.heading-secondary {
  font-size: 1.875rem (30px)
  font-weight: bold
}

.heading-tertiary {
  font-size: 1.5rem (24px)
  font-weight: semibold
}
```

### Body Text
- **Base:** text-lg (18px)
- **Line Height:** Generous for readability
- **Color:** histown-text (dark gray)

### Uppercase Tracking
- Navigation items: tracking-wide
- Buttons: tracking-wide
- Section headings: tracking-wider

---

## Grid Layouts (Desktop)

### Homepage Grids

#### Programs Section
- **Layout:** `grid-cols-1 lg:grid-cols-2`
- **Gap:** gap-8
- **Cards:** 3 total (Dance, Music, Featured)
- **Desktop:** 2 columns at 1024px+

#### Testimonials Carousel
- **Visible Cards:** 3 at desktop
- **Layout:** Horizontal flex
- **Navigation:** Left/right arrows
- **Dots:** Bottom center
- **Animation:** Smooth slide transition

#### Why Us Section
- **Layout:** `grid-cols-1 md:grid-cols-3`
- **Cards:** 3 (His Heart, His Glory, HisTown)
- **Desktop:** 3 columns at 768px+
- **Background:** Blue texture with clip-path

#### Team Section
- **Layout:** `grid-cols-1 md:grid-cols-3`
- **Cards:** Multiple team members
- **Desktop:** 3 columns at 768px+
- **Images:** Circular with hover effects

### Class Pages Grids

#### Dance/Music/Featured Classes
- **Layout:** `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Desktop:** 3 columns at 1024px+
- **Cards:** Image + title + description
- **Hover:** Scale and shadow effects

#### Contact Page
- **Info Grid:** `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
- **Desktop:** 4 columns at 1024px+
- **Icons:** Large, centered above text

---

## Animations & Transitions (Desktop)

### Scroll Animations
```javascript
IntersectionObserver with threshold: 0.1
Classes: .animate-on-scroll
Effect: Fade in + slide up
Duration: 600ms
Easing: ease-out
```

**Animated Elements:**
- Section headings
- Card grids
- Images
- Text blocks

### Hover Animations

#### Buttons
- **Scale:** hover:scale-105
- **Duration:** 300ms
- **Easing:** ease-in-out

#### Cards
- **Shadow:** Increases on hover
- **Transform:** Slight scale (1.02-1.05)
- **Duration:** 300ms

#### Navigation Links
- **Color:** Gray-700 → histown-primary
- **Duration:** 300ms
- **Underline:** None (color change only)

#### Dropdown Items
- **Background:** Transparent → white/60
- **Font Weight:** Normal → medium
- **Icon:** Opacity 0 → 100, translate-x
- **Duration:** 200ms

### Page Transitions
- **Hero Fade In:** .hero-fade-in class
- **Slide In Left:** .animate-slide-in-left
- **Slide In Right:** .animate-slide-in-right

---

## Shared Sections (Desktop)

### Testimonials Section

#### Layout
- **Container:** section-container (max-w-7xl mx-auto)
- **Padding:** section-padding (py-16 lg:py-24)
- **Carousel:** 3 cards visible
- **Card Width:** ~33% each
- **Gap:** gap-8

#### Card Design
- **Background:** White
- **Shadow:** shadow-lg
- **Padding:** p-8
- **Border Radius:** rounded-lg
- **Quote Icon:** Large, histown-primary
- **Text:** Italic, gray-700
- **Author:** Bold, histown-text
- **Role:** Text-sm, gray-500

#### Navigation
- **Arrows:** Left/right, absolute positioned
- **Size:** 48px circles
- **Color:** White background, histown-primary icon
- **Hover:** Scale 110%, shadow increases
- **Dots:** Bottom center, 12px circles
- **Active Dot:** histown-primary, larger

### Why Us Section

#### Layout
- **Background:** Blue texture image with clip-path
- **Overlay:** Gradient overlay
- **Grid:** 3 columns at md+
- **Gap:** gap-8
- **Padding:** py-20 lg:py-32

#### Card Design
- **Background:** White/10 backdrop-blur
- **Border:** White/20
- **Padding:** p-8
- **Border Radius:** rounded-xl
- **Icon:** 64px, gradient background
- **Title:** text-2xl, bold, white
- **Text:** text-lg, white/90

#### Hover Effects
- **Transform:** scale-105
- **Shadow:** Increases
- **Background:** White/20
- **Duration:** 300ms

### Next Steps Section

#### Layout
- **Background:** Blue texture with gradient
- **Padding:** py-16 lg:py-24
- **Content:** Centered, max-w-4xl

#### CTA Buttons
- **Layout:** Horizontal flex at md+
- **Gap:** gap-4
- **Buttons:** Full width on mobile, auto on desktop
- **Primary:** Gradient background, white text
- **Secondary:** White background, primary text

#### Email Form
- **Layout:** Flex row at md+
- **Input:** Flex-1, rounded-l
- **Button:** Rounded-r, gradient
- **Hover:** Button scales 105%

### Footer

#### Layout
- **Background:** Dark (gray-900)
- **Text:** White
- **Grid:** 3 columns at lg+
- **Padding:** py-12 lg:py-16

#### Columns
1. **Logo & Info:** Logo, address, phone, email
2. **Quick Links:** Navigation links
3. **Social Media:** Icon links

#### Social Icons
- **Size:** 40px circles
- **Border:** White/20
- **Hover:** Scale 110%, border white

---

## Colors (Desktop)

### Primary Colors
```css
--histown-primary: #4A90E2 (blue)
--histown-accent: #E94B3C (coral/red)
--histown-secondary: #F5A623 (gold/yellow)
```

### Text Colors
```css
--histown-text: #2C3E50 (dark gray)
--histown-text-muted: #7F8C8D (medium gray)
```

### Background Colors
```css
--histown-neutral: #F8F9FA (light gray)
--histown-neutral-light: #FFFFFF (white)
```

### Gradients
- **Primary Gradient:** from-histown-accent to-histown-primary
- **Blue Gradient:** from-blue-500 to-blue-700
- **Overlay Gradient:** from-black/50 to-transparent

---

## Shadows (Desktop)

### Shadow Levels
```css
.shadow-sm: 0 1px 2px rgba(0,0,0,0.05)
.shadow: 0 1px 3px rgba(0,0,0,0.1)
.shadow-md: 0 4px 6px rgba(0,0,0,0.1)
.shadow-lg: 0 10px 15px rgba(0,0,0,0.1)
.shadow-xl: 0 20px 25px rgba(0,0,0,0.1)
.shadow-strong: 0 4px 15px rgba(0,0,0,0.1)
```

### Usage
- **Cards:** shadow-lg
- **Buttons:** shadow-lg
- **Dropdowns:** shadow-lg
- **NavBar:** shadow-sm
- **Hover:** Increase shadow level

---

## Spacing (Desktop)

### Section Padding
```css
.section-padding {
  padding-top: 4rem (64px)
  padding-bottom: 4rem (64px)
  lg: 6rem (96px)
}
```

### Container
```css
.section-container {
  max-width: 80rem (1280px)
  margin: 0 auto
  padding-left: 1rem (16px)
  padding-right: 1rem (16px)
  sm: 1.5rem (24px)
  lg: 2rem (32px)
}
```

### Grid Gaps
- **Small:** gap-4 (16px)
- **Medium:** gap-6 (24px)
- **Large:** gap-8 (32px)

---

## Images (Desktop)

### LazyImage Component
- **Loading:** Lazy with IntersectionObserver
- **Placeholder:** Blur effect while loading
- **Optimization:** content-visibility: auto
- **Transform:** translateZ(0) for GPU acceleration

### Image Sizes
- **Hero Images:** Full width, h-96 to h-screen
- **Card Images:** h-64 to h-80
- **Team Photos:** Circular, w-48 h-48
- **Logo:** h-32 (132px with negative margins)

### Cloudinary URLs
- **Base:** res.cloudinary.com/dxqzby6fc
- **Transformations:** None currently (opportunity for optimization)

---

## Interactions (Desktop)

### Click Interactions
- **Buttons:** Immediate response, scale animation
- **Links:** Color change, no underline
- **Cards:** Navigate to detail page
- **Dropdown Toggles:** Expand/collapse with rotation

### Hover Interactions
- **Navigation:** Color change (300ms)
- **Buttons:** Scale 105% (300ms)
- **Cards:** Scale 102-105%, shadow increase (300ms)
- **Social Icons:** Color + border change (300ms)
- **Dropdown Items:** Background + font weight (200ms)

### Focus Interactions
- **Keyboard Navigation:** Visible focus rings
- **Tab Order:** Logical, top to bottom
- **Skip Links:** Available for accessibility

---

## Performance Optimizations (Desktop)

### CSS
- **GPU Acceleration:** transform: translateZ(0)
- **Will Change:** On animated elements
- **Content Visibility:** auto on images
- **Backdrop Filter:** Optimized blur values

### JavaScript
- **IntersectionObserver:** For scroll animations
- **Debouncing:** On scroll events
- **Lazy Loading:** Images below fold
- **Code Splitting:** Vendor chunk separation

---

## Browser Compatibility (Desktop)

### Tested Browsers
- ✅ Chrome 90+ (primary)
- ✅ Safari 14+ (Mac)
- ✅ Firefox 88+
- ✅ Edge 90+

### CSS Features
- ✅ CSS Grid
- ✅ Flexbox
- ✅ CSS Transforms
- ✅ CSS Transitions
- ✅ Backdrop Filter
- ✅ Clip Path

---

## Critical Elements to Preserve

### ✅ MUST NOT BREAK
1. **Navigation dropdown menus** - Hover to open, proper positioning
2. **Testimonials carousel** - 3 cards visible, smooth transitions
3. **Grid layouts** - 2-3 columns at desktop breakpoints
4. **Hover effects** - All scale and color transitions
5. **Scroll animations** - Fade in on scroll
6. **Blue texture backgrounds** - Clip-path and gradients
7. **Logo positioning** - Negative margins, proper size
8. **Footer layout** - 3 columns with proper spacing
9. **Button gradients** - Color transitions intact
10. **Typography hierarchy** - Size relationships maintained

### ✅ MUST STILL WORK
1. **All navigation links** - Internal and external
2. **Smooth scrolling** - Anchor links
3. **Form submissions** - Contact and email forms
4. **External links** - Open in new tab
5. **Carousel navigation** - Arrows and dots
6. **Dropdown toggles** - Expand/collapse
7. **Mobile menu trigger** - Hidden at desktop
8. **Social media links** - All functional
9. **CTA buttons** - All clickable
10. **Image lazy loading** - Performance maintained

---

## Testing Checklist

After EVERY code change, verify:

### At 1024px (lg breakpoint)
- [ ] Desktop navigation visible (not hamburger)
- [ ] Logo properly sized and positioned
- [ ] Dropdowns open on hover
- [ ] Grids show 2-3 columns
- [ ] Testimonials show 3 cards
- [ ] All hover effects work
- [ ] Scroll animations trigger
- [ ] Footer shows 3 columns

### At 1280px (xl breakpoint)
- [ ] All 1024px checks pass
- [ ] Content properly centered
- [ ] Max-width containers working
- [ ] No layout shifts
- [ ] Images properly sized

### At 1920px (2xl breakpoint)
- [ ] All 1280px checks pass
- [ ] Content doesn't stretch too wide
- [ ] Backgrounds cover full width
- [ ] Text remains readable
- [ ] No excessive whitespace

### Interactions
- [ ] All buttons clickable
- [ ] All links work
- [ ] Hover effects smooth
- [ ] Animations complete
- [ ] No console errors
- [ ] No layout shifts

---

## Screenshot Reference

**Note:** Since automated screenshots cannot be taken, manual verification is required.

### Required Screenshots (Manual)
For each of 18 pages, capture at:
1. **1024px width** - Minimum desktop
2. **1280px width** - Standard desktop
3. **1920px width** - Large desktop

### Screenshot Checklist
- [ ] Homepage (App.tsx)
- [ ] About page
- [ ] Contact page
- [ ] Programs page
- [ ] Dance Classes page
- [ ] Music Classes page
- [ ] Featured Classes page
- [ ] All other 11 pages

### Storage Location
```
docs/screenshots/desktop-baseline/
├── 1024px/
│   ├── homepage.png
│   ├── about.png
│   └── ...
├── 1280px/
│   └── ...
└── 1920px/
    └── ...
```

---

## Conclusion

This document serves as the **source of truth** for desktop state preservation. Any deviation from this baseline during mobile optimization must be:

1. **Identified immediately**
2. **Documented as intentional** (if approved)
3. **Fixed immediately** (if unintentional)

**DO NOT proceed with mobile optimization if desktop state is broken.**

---

**Document Status:** ✅ Complete  
**Last Updated:** December 2, 2025  
**Next Review:** After Phase 1 completion
