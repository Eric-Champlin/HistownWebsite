# Desktop Preservation Checklist

**Purpose:** Run this checklist after EVERY code change during mobile optimization  
**Reference:** See DESKTOP_BASELINE.md for detailed baseline documentation

---

## ⚠️ CRITICAL RULE

**DO NOT proceed to the next task if ANY item on this checklist fails.**

Fix the issue immediately before continuing with mobile optimization.

---

## Quick Verification (Run After Every Change)

### ✅ Step 1: View at 1024px (lg breakpoint)

Open browser DevTools, set viewport to **1024px × 768px**

- [ ] Desktop navigation visible (NOT hamburger menu)
- [ ] Logo properly sized (132px height)
- [ ] Navigation items horizontally centered
- [ ] Hover over "Classes" - mega menu opens correctly
- [ ] Hover over other nav items - dropdowns work
- [ ] Social icons visible in top-right
- [ ] "Free Trial" button visible and styled correctly
- [ ] No horizontal scrolling
- [ ] No layout shifts or jumps

**If ANY item fails:** STOP and fix before proceeding ❌

---

### ✅ Step 2: View at 1280px (xl breakpoint)

Set viewport to **1280px × 1024px**

- [ ] All 1024px checks still pass
- [ ] Content properly centered (max-w-7xl)
- [ ] Grids show correct number of columns:
  - [ ] Programs: 2 columns
  - [ ] Why Us: 3 columns
  - [ ] Team: 3 columns
  - [ ] Classes: 3 columns
- [ ] Testimonials carousel shows 3 cards
- [ ] Footer shows 3 columns
- [ ] No excessive whitespace
- [ ] Images properly sized

**If ANY item fails:** STOP and fix before proceeding ❌

---

### ✅ Step 3: View at 1920px (2xl breakpoint)

Set viewport to **1920px × 1080px**

- [ ] All 1280px checks still pass
- [ ] Content doesn't stretch too wide
- [ ] Background images/colors cover full width
- [ ] Text remains readable (not too wide)
- [ ] Sections properly centered
- [ ] No layout breaks

**If ANY item fails:** STOP and fix before proceeding ❌

---

## Detailed Verification (Run After Major Changes)

### Navigation Testing

#### Desktop Navigation Bar
- [ ] Logo clickable, links to homepage
- [ ] Logo has proper drop shadow
- [ ] All navigation items visible
- [ ] Text is uppercase with proper tracking
- [ ] Hover changes color to histown-primary (blue)
- [ ] Transition is smooth (300ms)

#### Dropdown Menus
- [ ] Hover over "Classes" opens mega menu
- [ ] Mega menu is centered under "Classes"
- [ ] Mega menu shows 2 columns (Dance | Music & Featured)
- [ ] All dropdown items visible
- [ ] Hover on dropdown items:
  - [ ] Background changes to white/60
  - [ ] Font weight increases to medium
  - [ ] Arrow icon appears and slides right
  - [ ] Dot scales to 125%
- [ ] Click on dropdown item navigates correctly
- [ ] Dropdown closes when mouse leaves

#### Right Side Elements
- [ ] Social icons visible (Instagram, Facebook)
- [ ] Social icons are 40px circles with border
- [ ] Hover on social icons changes color
- [ ] "Free Trial" button has gradient background
- [ ] "Free Trial" button scales on hover (105%)
- [ ] "Parent Portal" link visible
- [ ] "Parent Portal" link changes color on hover

---

### Grid Layout Testing

#### Homepage Grids
- [ ] Programs section: 2 columns at 1024px+
- [ ] Why Us section: 3 columns at 768px+
- [ ] Team section: 3 columns at 768px+
- [ ] All grids have proper gap spacing (gap-8)
- [ ] Cards are evenly distributed

#### Class Pages Grids
- [ ] Dance classes: 3 columns at 1024px+
- [ ] Music classes: 3 columns at 1024px+
- [ ] Featured classes: 3 columns at 1024px+
- [ ] Cards have proper spacing
- [ ] Images maintain aspect ratio

#### Contact Page Grid
- [ ] Contact info: 4 columns at 1024px+
- [ ] Icons centered above text
- [ ] Proper spacing between items

---

### Testimonials Carousel Testing

- [ ] 3 cards visible at desktop
- [ ] Cards are evenly spaced (gap-8)
- [ ] Left arrow visible and clickable
- [ ] Right arrow visible and clickable
- [ ] Click left arrow - carousel slides left
- [ ] Click right arrow - carousel slides right
- [ ] Transition is smooth (300ms)
- [ ] Dots visible at bottom center
- [ ] Active dot is highlighted (histown-primary)
- [ ] Click on dot - carousel jumps to that slide
- [ ] Cards have proper shadow (shadow-lg)
- [ ] Quote icon visible in each card
- [ ] Text is italic and readable
- [ ] Author name is bold

---

### Shared Sections Testing

#### Why Us Section
- [ ] Blue texture background visible
- [ ] Gradient overlay applied
- [ ] 3 cards visible (His Heart, His Glory, HisTown)
- [ ] Cards have backdrop-blur effect
- [ ] Cards have white/10 background
- [ ] Icons are 64px with gradient background
- [ ] Text is white and readable
- [ ] Hover on card:
  - [ ] Scales to 105%
  - [ ] Shadow increases
  - [ ] Background changes to white/20
  - [ ] Transition is smooth (300ms)

#### Next Steps Section
- [ ] Blue texture background with gradient
- [ ] Content centered (max-w-4xl)
- [ ] CTA buttons visible
- [ ] Buttons are horizontal at md+
- [ ] Primary button has gradient
- [ ] Secondary button has white background
- [ ] Email form visible
- [ ] Input and button are in a row at md+
- [ ] Hover on button scales to 105%

#### Footer
- [ ] Dark background (gray-900)
- [ ] White text
- [ ] 3 columns at lg+ (1024px+)
- [ ] Column 1: Logo, address, phone, email
- [ ] Column 2: Quick links
- [ ] Column 3: Social media icons
- [ ] Social icons are 40px circles
- [ ] Hover on social icons scales to 110%
- [ ] All links are clickable
- [ ] Phone and email are clickable (tel: and mailto:)

---

### Animation Testing

#### Scroll Animations
- [ ] Scroll down the page slowly
- [ ] Elements fade in as they enter viewport
- [ ] Fade-in is smooth (600ms ease-out)
- [ ] No janky animations
- [ ] No layout shifts during animation

#### Hover Animations
- [ ] Hover on buttons - scale to 105%
- [ ] Hover on cards - scale to 102-105%
- [ ] Hover on navigation - color changes
- [ ] Hover on social icons - color and border change
- [ ] All transitions are smooth (300ms)
- [ ] No flickering or jumps

#### Dropdown Animations
- [ ] Dropdown fades in smoothly
- [ ] Arrow icon rotates 180deg
- [ ] Dropdown items have staggered fade-in
- [ ] Hover on dropdown items is smooth (200ms)

---

### Typography Testing

#### Heading Sizes
- [ ] H1 headings are large (48px-72px depending on breakpoint)
- [ ] H2 headings are medium (30px)
- [ ] H3 headings are smaller (24px)
- [ ] Hierarchy is clear and readable
- [ ] Font weights are correct (bold for H1, semibold for H3)

#### Body Text
- [ ] Body text is 18px (text-lg)
- [ ] Line height is comfortable for reading
- [ ] Color is dark gray (histown-text)
- [ ] No text is cut off or overflowing

#### Uppercase Text
- [ ] Navigation items are uppercase with tracking-wide
- [ ] Button text is uppercase with tracking-wide
- [ ] Section headings have proper tracking

---

### Color Testing

#### Primary Colors
- [ ] Primary blue (#4A90E2) used correctly
- [ ] Accent coral (#E94B3C) used correctly
- [ ] Secondary gold (#F5A623) used correctly

#### Gradients
- [ ] Free Trial button has gradient (accent to primary)
- [ ] Next Steps section has gradient background
- [ ] Why Us cards have gradient icons
- [ ] All gradients render smoothly

#### Hover Colors
- [ ] Navigation hover changes to primary blue
- [ ] Button hover maintains gradient
- [ ] Card hover effects work
- [ ] Social icon hover changes to primary blue

---

### Shadow Testing

- [ ] Cards have shadow-lg
- [ ] Buttons have shadow-lg
- [ ] Dropdowns have shadow-lg
- [ ] NavBar has shadow-sm
- [ ] Hover increases shadow depth
- [ ] Shadows are subtle and professional

---

### Image Testing

#### LazyImage Component
- [ ] Images load as you scroll
- [ ] Placeholder blur effect shows while loading
- [ ] Images are sharp when loaded
- [ ] No layout shift when images load

#### Image Sizes
- [ ] Hero images are full width
- [ ] Card images are properly sized (h-64 to h-80)
- [ ] Team photos are circular
- [ ] Logo is 132px height
- [ ] No images are stretched or distorted

---

### Interaction Testing

#### Click Interactions
- [ ] All buttons are clickable
- [ ] All navigation links work
- [ ] All dropdown items work
- [ ] All CTA buttons work
- [ ] All social media links work
- [ ] All footer links work
- [ ] External links open in new tab

#### Hover Interactions
- [ ] All hover effects work smoothly
- [ ] No hover effects are broken
- [ ] Cursor changes to pointer on interactive elements

#### Keyboard Navigation
- [ ] Tab key moves through interactive elements
- [ ] Focus indicators are visible
- [ ] Enter key activates buttons/links
- [ ] Tab order is logical

---

### Performance Testing

#### Page Load
- [ ] Page loads quickly (< 3 seconds)
- [ ] No console errors
- [ ] No console warnings (except known issues)

#### Animations
- [ ] Animations are smooth (60fps)
- [ ] No janky scrolling
- [ ] No layout thrashing

#### Images
- [ ] Images load progressively
- [ ] Lazy loading works
- [ ] No excessive image sizes

---

## Browser Compatibility Check

Test in each browser after major changes:

### Chrome (Primary)
- [ ] All checks pass in Chrome 90+
- [ ] No console errors
- [ ] All features work

### Safari (Mac)
- [ ] All checks pass in Safari 14+
- [ ] Backdrop-filter works
- [ ] All animations smooth

### Firefox
- [ ] All checks pass in Firefox 88+
- [ ] All features work
- [ ] No rendering issues

### Edge
- [ ] All checks pass in Edge 90+
- [ ] All features work

---

## Regression Testing (After Each Phase)

Run this extended checklist after completing each phase:

### Phase 1 Completion (Shared Components)
- [ ] All shared components render identically across all 18 pages
- [ ] Testimonials section identical on all pages
- [ ] Why Us section identical on all pages
- [ ] Next Steps section identical on all pages
- [ ] Footer identical on all pages
- [ ] Desktop layout unchanged from baseline

### Phase 2 Completion (Mobile-First Foundation)
- [ ] Desktop still works at 1024px+
- [ ] No desktop styles broken
- [ ] Typography hierarchy maintained
- [ ] Spacing consistent with baseline

### Phase 3 Completion (Page Optimization)
- [ ] All 18 pages tested at desktop breakpoints
- [ ] Desktop layout matches baseline
- [ ] No regressions introduced

### Phase 4 Completion (Component Optimization)
- [ ] All components work at desktop
- [ ] No performance regressions
- [ ] All interactions still work

### Phase 5 Completion (Testing & Polish)
- [ ] Final desktop verification
- [ ] All baseline checks pass
- [ ] Ready for production

---

## Quick Reference: Breakpoints

```
< 640px   (xs/mobile)  - Mobile menu visible
640px+    (sm)         - Small tablet
768px+    (md)         - Tablet, some grids go to 2-3 columns
1024px+   (lg)         - DESKTOP STARTS HERE ← Critical breakpoint
1280px+   (xl)         - Standard desktop
1920px+   (2xl)        - Large desktop
```

---

## Troubleshooting

### If Desktop Navigation Doesn't Show at 1024px
1. Check for `lg:hidden` on hamburger button
2. Check for `hidden lg:flex` on desktop nav
3. Verify no mobile-first classes override desktop styles

### If Grids Don't Show Correct Columns
1. Check grid-cols classes have proper breakpoint prefixes
2. Verify `md:grid-cols-3` or `lg:grid-cols-3` present
3. Check for conflicting mobile-first grid classes

### If Hover Effects Don't Work
1. Check transition classes are present
2. Verify hover: prefixes on color/scale changes
3. Check for conflicting mobile touch styles

### If Animations Are Broken
1. Check IntersectionObserver is still initialized
2. Verify .animate-on-scroll classes present
3. Check CSS transition durations not overridden

### If Layout Shifts Occur
1. Check for missing width/height on images
2. Verify no conflicting mobile padding/margins
3. Check for proper container max-widths

---

## Emergency Rollback

If desktop is completely broken:

1. **STOP all work immediately**
2. **Identify the last working commit**
3. **Review changes since that commit**
4. **Revert problematic changes**
5. **Re-run this checklist**
6. **Document what went wrong**
7. **Plan fix before proceeding**

---

## Sign-Off Template

Use this template after completing each task:

```
Task: [Task Number and Name]
Date: [Date]
Tested By: [Your Name]

Desktop Preservation Checklist:
- [ ] 1024px verification: PASS / FAIL
- [ ] 1280px verification: PASS / FAIL
- [ ] 1920px verification: PASS / FAIL
- [ ] Navigation: PASS / FAIL
- [ ] Grids: PASS / FAIL
- [ ] Animations: PASS / FAIL
- [ ] Interactions: PASS / FAIL

Issues Found: [None / List issues]
Issues Fixed: [N/A / List fixes]

Status: ✅ READY TO PROCEED / ❌ NEEDS FIXES

Notes: [Any additional observations]
```

---

## Checklist Maintenance

This checklist should be updated:
- When new desktop features are added
- When baseline changes are approved
- When new issues are discovered
- After each phase completion

**Last Updated:** December 2, 2025  
**Version:** 1.0  
**Status:** Active

---

## Summary

**Remember:** This checklist is your safety net. Use it religiously after every change to ensure desktop functionality is preserved during mobile optimization.

**Golden Rule:** When in doubt, test at 1024px, 1280px, and 1920px. If it looks different from the baseline, investigate immediately.

**Success Metric:** 100% of checklist items pass = Safe to proceed ✅
