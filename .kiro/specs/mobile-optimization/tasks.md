# Implementation Plan

## Phase 0: Setup & Audit

- [x] 0.0 CRITICAL: Complete codebase discovery and analysis
  - Read ALL 18 page files completely (App.tsx, DanceClasses.tsx, MusicClasses.tsx, etc.)
  - Read ALL components in src/components/common/
  - Read ALL components in src/components/layout/
  - Read src/content/home.ts and any other content files
  - Read src/index.css completely to understand global styles
  - Read tailwind.config.js to understand configuration
  - Document EVERY existing responsive class (sm:, md:, lg:) currently in use
  - Document EVERY existing mobile style
  - Identify which pages have Testimonials, Why Us, Next Steps sections
  - Document current component imports and dependencies
  - Test viewing the site at localhost:5173 in browser DevTools at different viewports
  - Document how to test mobile viewports (Chrome DevTools device emulation)
  - Create a comprehensive map of current state
  - **STOP: Ask user for confirmation before proceeding to next task**
  - _Requirements: All_

- [x] 0.1 Install required dependencies
  - Install react-swipeable for touch gesture support on carousels
  - Install fast-check for property-based testing
  - Install @testing-library/react and @testing-library/jest-dom if not present
  - Update package.json and verify installations
  - Run npm install to ensure all dependencies are installed
  - _Requirements: 11.2_

- [x] 0.1.1 Set up browser compatibility configuration
  - Check if .browserslistrc exists
  - Create or update .browserslistrc with target browsers (iOS Safari 14+, Chrome Mobile 90+, etc.)
  - Verify Vite/Babel is configured to transpile for target browsers
  - Ensure polyfills are included if needed
  - _Requirements: Browser compatibility_

- [x] 0.2 Verify current test setup and package.json
  - Check if Vitest is already installed
  - Check if there are existing tests
  - Verify test command exists in package.json
  - Document current testing setup
  - Identify what needs to be added vs what exists
  - _Requirements: 18.1, 18.2, 18.3, 18.4_

- [x] 0.2.1 Set up testing infrastructure
  - Install Vitest if not already installed
  - Configure Vitest for mobile viewport testing
  - Install @testing-library/react and @testing-library/jest-dom
  - Create test utilities for rendering at different viewport widths (375px, 390px, 428px, 640px, 768px, 1024px)
  - Set up test helpers for touch event simulation
  - Create viewport testing documentation
  - Verify tests can run with npm test or npm run test
  - _Requirements: 18.1, 18.2, 18.3, 18.4_

- [x] 0.3 Audit existing MobileMenu component
  - Review current MobileMenu.tsx implementation
  - Document current slide direction (currently RIGHT - this is correct)
  - Test current functionality across all pages
  - Confirm that RIGHT slide direction is working properly
  - Document findings - NO CHANGES needed to slide direction
  - _Requirements: 2.1, 2.2, 2.3, 2.4_

- [x] 0.4 Audit all 18 pages for current state
  - Document which pages have Testimonials sections (ALL pages should have them)
  - Document which pages have Why Us sections (ALL pages should have them)
  - Document which pages have Next Steps sections (ALL pages should have them)
  - Verify Footer is on all pages
  - Identify current mobile breakpoints and issues
  - Create priority matrix for optimization
  - Document shared component usage patterns
  - Note: ALL pages must have identical styling for shared components
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 16.1_

- [x] 0.6 Document current desktop state (CRITICAL - Baseline)
  - Take screenshots of all 18 pages at 1024px, 1280px, 1920px
  - Document all animations and transitions currently working
  - Document all hover effects and interactions
  - Create a visual baseline for comparison
  - Save screenshots to a reference folder
  - This is our "source of truth" for desktop preservation
  - **CRITICAL: We must not break anything documented here**
  - _Requirements: 1.2, 9.4_

- [x] 0.7 Create a "Desktop Preservation Checklist"
  - Create a checklist to run after EVERY code change
  - Checklist item 1: View at 1024px - does it match baseline?
  - Checklist item 2: View at 1280px - does it match baseline?
  - Checklist item 3: Test all animations - do they still work?
  - Checklist item 4: Test all hover effects - do they still work?
  - Checklist item 5: Test navigation - does it still work?
  - This checklist will be run after EVERY task
  - _Requirements: 1.2_

- [x] 0.8 Audit existing common components for conflicts
  - Review all components in src/components/common/
  - Check for any naming conflicts with new shared components
  - Document any components that might need refactoring
  - Ensure no style conflicts with new mobile-first approach
  - _Requirements: 16.1_

- [x] 0.5 Verify Tailwind configuration
  - Check tailwind.config.js for current breakpoint configuration
  - Verify default breakpoints are: sm: 640px, md: 768px, lg: 1024px, xl: 1280px
  - Check if purge/content configuration is correct
  - Document any custom Tailwind configuration
  - Ensure configuration supports mobile-first approach
  - _Requirements: 1.5_

- [x] 0.5.1 Create design tokens and constants file
  - Create src/constants/responsive.ts with breakpoint definitions
  - Define mobile breakpoints: xs (< 375px), sm (375-428px), md (428-640px)
  - Define tablet breakpoints: tablet (640-1023px)
  - Define desktop breakpoints: desktop (1024px+)
  - Define touch target constants (44px minimum, 48px recommended)
  - Define mobile spacing scale
  - Define mobile and tablet typography scales
  - Export all constants for use across components
  - _Requirements: 1.3, 3.1, 3.2, 5.1_

## Phase 1: Foundation - Shared Components & Global Styles

- [x] 1. Create desktop preservation strategy document
  - Document the exact strategy for NOT touching desktop
  - Strategy: ONLY add new classes with mobile-first approach, NEVER modify existing classes
  - Strategy: Use Tailwind responsive prefixes to override mobile styles at desktop breakpoints
  - Strategy: Test at 1024px+ after EVERY change
  - Create a checklist for every component modification
  - Document forbidden actions (e.g., changing base classes without responsive prefixes)
  - **This document is our safety net**
  - _Requirements: 1.2_

- [x] 1.1 Set up mobile-first CSS utilities and global styles
  - Update index.css with NEW mobile-first utility classes (don't modify existing)
  - Add responsive breakpoint utilities following Tailwind's mobile-first approach
  - Ensure all NEW base styles target mobile (< 640px) with desktop styles using sm:, md:, lg: prefixes
  - Test that existing desktop styles are NOT affected
  - _Requirements: 1.5, 3.1, 3.2, 3.4, 5.1_

- [x] 1.2 VALIDATION: Test desktop after CSS changes
  - Open site at 1024px, 1280px, 1920px
  - Compare against baseline screenshots
  - Verify ZERO visual changes
  - If ANY changes detected, STOP and fix immediately
  - _Requirements: 1.2_

- [x] 1.3 Write property test for mobile-first class structure
  - **Property 4: Mobile-first class structure**
  - **Validates: Requirements 1.5**

- [x] 2. Verify Navigation component mobile menu (NO CHANGES NEEDED)
  - Confirm MobileMenu.tsx slides in from right (current behavior is correct)
  - Verify transform classes translate-x-full (right) are working properly
  - Ensure backdrop overlay displays correctly
  - Verify smooth transition animations for slide-in/out
  - Test menu open/close functionality across all breakpoints
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 8.1_

- [x] 2.1 Write property test for hamburger menu consistency
  - **Property 5: Hamburger menu consistency across pages**
  - **Validates: Requirements 2.5, 6.4**

- [x] 3. Optimize NavBar component for mobile
  - Add mobile-specific styling for logo sizing
  - Ensure hamburger icon has adequate touch target (min 44x44px)
  - Hide desktop navigation items on mobile (< 640px)
  - Ensure social icons and buttons are appropriately sized for mobile
  - Test responsive behavior at 375px, 390px, 428px, 640px
  - _Requirements: 1.3, 2.1, 6.4_

- [x] 3.2 Decide and implement tablet navigation (640px-1023px)
  - Test if desktop horizontal navigation fits at 768px and 1024px
  - If it fits: show desktop navigation on tablet
  - If it doesn't fit: show hamburger menu on tablet
  - Ensure navigation is usable with touch on tablet
  - Document decision for consistency
  - _Requirements: Edge cases - tablet_

- [x] 3.1 Write property test for touch target dimensions
  - **Property 3: Touch target minimum dimensions**
  - **Validates: Requirements 1.3, 4.3, 10.4, 13.3, 15.2, 15.4, 17.4**


- [x] 4. Create testimonials data file
  - Create src/data/testimonials.ts file
  - Move all 24 testimonials from App.tsx to this file
  - Export testimonials array with proper TypeScript types
  - This ensures all pages use the exact same testimonials data
  - _Requirements: 6.1_

- [x] 4.1 Create shared Testimonials component (Step 1: Component file)
  - Create src/components/sections/Testimonials.tsx file
  - Define TypeScript interfaces for props (testimonials array, variant)
  - Set up component structure with data-component="Testimonials" attribute
  - Import design tokens from constants file
  - Import testimonials data from src/data/testimonials.ts
  - _Requirements: 6.1_

- [x] 4.2 Extract testimonials logic from homepage (Step 2: Logic extraction)
  - Copy testimonials data and carousel logic from App.tsx
  - Implement mobile-optimized carousel (one card visible at a time)
  - Add react-swipeable for touch gesture support
  - Implement navigation arrows with proper mobile positioning
  - Ensure cards fit within viewport without overflow
  - Apply mobile-first responsive classes
  - _Requirements: 6.1, 11.1, 11.2, 11.3, 11.4, 11.5_

- [x] 4.3 Test Testimonials component in isolation (Step 3: Isolated testing)
  - Create Testimonials.test.tsx
  - Test rendering at mobile breakpoints (375px, 390px, 428px)
  - Test rendering at tablet breakpoint (768px)
  - Test rendering at desktop breakpoint (1024px)
  - Test swipe gesture functionality
  - Test navigation arrow clicks
  - Verify card dimensions and overflow
  - _Requirements: 6.1, 11.1, 11.2, 11.3, 11.4_

- [x] 4.4 Create Testimonials consistency verification utility
  - Create test utility to compare Testimonials styling across pages
  - Verify padding, margin, font-size, colors are identical
  - Create snapshot tests for visual consistency
  - Document expected styles for future reference
  - _Requirements: 6.1_

- [x] 4.1 Write property test for shared component consistency
  - **Property 17: Shared component style consistency**
  - **Validates: Requirements 6.1, 6.2, 6.3, 6.5**

- [x] 5. Create shared WhyUs component (Step 1: Component file)
  - Create src/components/sections/WhyUs.tsx file
  - Define TypeScript interfaces for props (values array, backgroundImage)
  - Set up component structure with data-component="WhyUs" attribute
  - Import design tokens from constants file
  - _Requirements: 6.2_

- [x] 5.1 Extract WhyUs logic from homepage (Step 2: Logic extraction)
  - Copy "Why Us" section data and structure from App.tsx
  - Stack three value cards vertically on mobile
  - Ensure icons are appropriately sized for mobile and tablet
  - Maintain blue texture background across all breakpoints
  - Ensure text is readable with proper spacing
  - Apply mobile-first responsive classes
  - _Requirements: 6.2, 12.1, 12.2, 12.3, 12.4, 12.5_

- [x] 5.2 Test WhyUs component in isolation (Step 3: Isolated testing)
  - Create WhyUs.test.tsx
  - Test rendering at mobile breakpoints (375px, 390px, 428px)
  - Test rendering at tablet breakpoint (768px)
  - Test rendering at desktop breakpoint (1024px)
  - Verify vertical stacking on mobile
  - Verify icon sizing across breakpoints
  - Verify background image rendering
  - _Requirements: 6.2, 12.1, 12.2, 12.5_

- [x] 5.3 Create WhyUs consistency verification utility
  - Create test utility to compare WhyUs styling across pages
  - Verify padding, margin, font-size, colors, background are identical
  - Create snapshot tests for visual consistency
  - Document expected styles for future reference
  - _Requirements: 6.2_

- [x] 6. Create shared NextSteps component (Step 1: Component file)
  - Create src/components/sections/NextSteps.tsx file
  - Define TypeScript interfaces for props (ctaButtons, emailSignupForm, backgroundImage)
  - Set up component structure with data-component="NextSteps" attribute
  - Import design tokens from constants file
  - _Requirements: 6.3_

- [x] 6.1 Extract NextSteps logic from homepage (Step 2: Logic extraction)
  - Copy "Next Steps" section data and structure from App.tsx
  - Stack CTA buttons and email form vertically on mobile
  - Make buttons full-width on mobile for easy tapping
  - Make form inputs full-width on mobile
  - Set appropriate input types (email) for mobile keyboards
  - Maintain blue texture background across all breakpoints
  - Apply mobile-first responsive classes
  - _Requirements: 6.3, 14.1, 14.2, 14.3, 14.4, 14.5_

- [x] 6.2 Test NextSteps component in isolation (Step 3: Isolated testing)
  - Create NextSteps.test.tsx
  - Test rendering at mobile breakpoints (375px, 390px, 428px)
  - Test rendering at tablet breakpoint (768px)
  - Test rendering at desktop breakpoint (1024px)
  - Verify vertical stacking on mobile
  - Verify button and input full-width on mobile
  - Verify input types trigger correct keyboards
  - Verify background image rendering
  - _Requirements: 6.3, 14.1, 14.2, 14.3, 14.4_

- [x] 6.3 Create NextSteps consistency verification utility
  - Create test utility to compare NextSteps styling across pages
  - Verify padding, margin, font-size, colors, background are identical
  - Create snapshot tests for visual consistency
  - Document expected styles for future reference
  - _Requirements: 6.3_

- [x] 6.4 Write property test for form field widths
  - **Property 9: Full-width form fields on mobile**
  - **Validates: Requirements 4.1, 14.3**

- [x] 6.5 Write property test for input types
  - **Property 10: Appropriate input types for mobile keyboards**
  - **Validates: Requirements 4.2, 14.4**

- [x] 7. Update Footer component for mobile optimization
  - Stack three footer columns vertically on mobile
  - Center-align all content on mobile
  - Ensure phone numbers use tel: links for tap-to-call
  - Increase social media icon size for touch (min 44x44px)
  - Ensure all footer links have adequate touch targets
  - Add data-component="Footer" attribute for testing
  - _Requirements: 6.5, 15.1, 15.2, 15.3, 15.4, 15.5_

- [x] 8. Checkpoint - Verify shared components work correctly
  - Ensure all tests pass, ask the user if questions arise.

## Phase 2: Homepage Mobile Optimization

- [x] 9. Optimize homepage hero section for mobile
  - Reduce headline font size for mobile (text-3xl on mobile, sm:text-5xl on desktop)
  - Stack CTA buttons vertically on mobile with adequate spacing
  - Ensure all text is readable without horizontal scrolling
  - Maintain visual hierarchy from desktop
  - Ensure background images scale appropriately
  - Test at 375px, 390px, 428px widths
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_

- [x] 9.1 Write property test for no horizontal scrolling
  - **Property 1: No horizontal scrolling on mobile viewports**
  - **Validates: Requirements 1.1, 9.3, 16.3**

- [x] 9.2 Write property test for typography hierarchy
  - **Property 6: Typography hierarchy preservation**
  - **Validates: Requirements 3.1, 3.3, 9.4, 13.5**

- [x] 10. Optimize programs section (Dance, Music, Featured) for mobile
  - Stack each program card vertically on mobile
  - Display images at full width within containers on mobile
  - Ensure text is readable with appropriate line lengths
  - Ensure CTA buttons have adequate touch targets (min 44x44px)
  - Maintain alternating image-text layout pattern on mobile
  - Test responsive behavior at all mobile breakpoints
  - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5_

- [x] 10.1 Write property test for vertical stacking
  - **Property 13: Vertical stacking of multi-column layouts**
  - **Validates: Requirements 1.4, 5.2, 7.3**

- [x] 11. Integrate shared components into homepage (Step 4: Integration)
  - Replace inline testimonials section with Testimonials component
  - Replace inline "Why Us" section with WhyUs component
  - Replace inline "Next Steps" section with NextSteps component
  - Pass correct props to each component
  - Ensure all shared components render correctly on homepage
  - Verify consistent styling and behavior
  - Test at all breakpoints (375px, 390px, 428px, 768px, 1024px)
  - _Requirements: 6.1, 6.2, 6.3_

- [x] 11.1 Verify homepage shared components match original exactly
  - Compare new component-based homepage with original at 1024px+
  - Ensure zero visual regression on desktop
  - Verify mobile optimizations work correctly
  - Fix any discrepancies
  - _Requirements: 1.2, 6.1, 6.2, 6.3_

- [x] 12. Optimize "Meet Our Team" section for mobile
  - Stack team member cards vertically on mobile
  - Display team images at appropriate size for mobile
  - Ensure cards have adequate touch targets for navigation
  - Ensure text is readable with proper spacing
  - Maintain visual hierarchy from desktop
  - _Requirements: 13.1, 13.2, 13.3, 13.4, 13.5_

- [x] 12.1 Write property test for minimum readable font size
  - **Property 7: Minimum readable font size**
  - **Validates: Requirements 3.4**

- [x] 13. Optimize homepage images for mobile
  - Implement lazy loading for images below the fold
  - Ensure images stack vertically with appropriate spacing
  - Verify images scale properly without distortion
  - Add explicit dimensions or aspect-ratio CSS to prevent layout shift
  - Test image loading performance on mobile
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

- [x] 13.1 Write property test for lazy loading implementation
  - **Property 18: Lazy loading implementation**
  - **Validates: Requirements 7.1**

- [x] 13.2 Write property test for image aspect ratio preservation
  - **Property 20: Image aspect ratio preservation**
  - **Validates: Requirements 7.4, 7.5**

- [x] 14. Accessibility audit for homepage
  - Run axe DevTools on homepage at mobile viewport
  - Check keyboard navigation works correctly
  - Verify all interactive elements are accessible
  - Check color contrast ratios
  - Verify form labels and ARIA attributes
  - Fix any accessibility issues found
  - _Requirements: 4.5, 15.2, 17.4_

- [x] 14.1 Compare homepage against desktop baseline
  - Load homepage at 1024px, 1280px, 1920px
  - Compare against baseline screenshots from task 0.6
  - Verify NO visual regressions on desktop
  - Verify all animations still work
  - Verify all hover effects still work
  - Document any differences (should be ZERO)
  - Fix any regressions immediately
  - _Requirements: 1.2_

- [x] 14.2 Checkpoint - Verify homepage mobile optimization
  - Ensure all tests pass, ask the user if questions arise.

## Phase 3: Class Pages Mobile Optimization

- [x] 15. Optimize DanceClasses page for mobile
  - Apply mobile-first responsive classes to all sections
  - Stack class cards vertically on mobile (grid-cols-1)
  - Ensure images display at full width on mobile
  - Integrate shared components (Testimonials, WhyUs, NextSteps) if page uses them
  - Verify shared components match homepage exactly (use consistency utility)
  - Ensure all text is readable without horizontal scrolling
  - Test at 375px, 390px, 428px, 768px widths
  - _Requirements: 16.1, 16.2, 16.3, 16.5_

- [x] 15.1 Write property test for single column grid
  - **Property 14: Single column grid on mobile**
  - **Validates: Requirements 5.3**

- [x] 16. Optimize MusicClasses page for mobile
  - Apply mobile-first responsive classes to all sections
  - Stack class cards vertically on mobile
  - Ensure images display at full width on mobile
  - Integrate shared components if page uses them
  - Verify shared components match homepage exactly (use consistency utility)
  - Ensure all text is readable without horizontal scrolling
  - Test at 375px, 390px, 428px, 768px widths
  - _Requirements: 16.1, 16.2, 16.3, 16.5_

- [x] 17. Optimize FeaturedClasses page for mobile
  - Apply mobile-first responsive classes to all sections
  - Stack class cards vertically on mobile
  - Ensure images display at full width on mobile
  - Integrate shared components if page uses them
  - Verify shared components match homepage exactly (use consistency utility)
  - Ensure all text is readable without horizontal scrolling
  - Test at 375px, 390px, 428px, 768px widths
  - _Requirements: 16.1, 16.2, 16.3, 16.5_

- [x] 18. Optimize DanceDetail page for mobile
  - Apply mobile-first responsive classes to content sections
  - Stack detail content vertically on mobile
  - Ensure images scale appropriately
  - Optimize any forms or CTAs for mobile
  - Ensure all content is readable without horizontal scrolling
  - Test at all mobile breakpoints
  - _Requirements: 16.1, 16.3, 16.5_

- [x] 19. Optimize MusicDetail page for mobile
  - Apply mobile-first responsive classes to content sections
  - Stack detail content vertically on mobile
  - Ensure images scale appropriately
  - Optimize any forms or CTAs for mobile
  - Ensure all content is readable without horizontal scrolling
  - Test at all mobile breakpoints
  - _Requirements: 16.1, 16.3, 16.5_

- [x] 20. Optimize FeaturedDetail page for mobile
  - Apply mobile-first responsive classes to content sections
  - Stack detail content vertically on mobile
  - Ensure images scale appropriately
  - Optimize any forms or CTAs for mobile
  - Ensure all content is readable without horizontal scrolling
  - Test at all mobile breakpoints
  - _Requirements: 16.1, 16.3, 16.5_

- [x] 21. Accessibility audit for class pages
  - Run axe DevTools on DanceClasses, MusicClasses, FeaturedClasses pages
  - Run axe DevTools on detail pages (DanceDetail, MusicDetail, FeaturedDetail)
  - Check keyboard navigation on all class pages
  - Verify all interactive elements are accessible
  - Fix any accessibility issues found
  - _Requirements: 4.5, 15.2, 17.4_

- [x] 21.1 Checkpoint - Verify class pages mobile optimization
  - Ensure all tests pass, ask the user if questions arise.

## Phase 4: Information Pages Mobile Optimization

- [x] 22. Optimize About page for mobile
  - Apply mobile-first responsive classes to all sections
  - Stack content vertically on mobile
  - Integrate shared components
  - Ensure images scale appropriately
  - Ensure all text is readable without horizontal scrolling
  - Test at all mobile breakpoints
  - _Requirements: 16.1, 16.3, 16.5_

- [x] 23. Optimize OurTeam page for mobile
  - Apply mobile-first responsive classes to team member sections
  - Stack team member cards vertically on mobile
  - Ensure team photos display at appropriate size
  - Ensure bios are readable with proper spacing
  - Integrate shared components
  - Test at all mobile breakpoints
  - _Requirements: 16.1, 16.3, 16.5_

- [x] 24. Optimize OurStory page for mobile
  - Apply mobile-first responsive classes to story sections
  - Stack content vertically on mobile
  - Ensure images scale appropriately
  - Integrate shared components
  - Ensure all text is readable without horizontal scrolling
  - Test at all mobile breakpoints
  - _Requirements: 16.1, 16.3, 16.5_

- [x] 25. Optimize PastEvents page for mobile
  - Apply mobile-first responsive classes to event sections
  - Stack event cards vertically on mobile
  - Ensure event images display at full width
  - Integrate shared components
  - Ensure all text is readable without horizontal scrolling
  - Test at all mobile breakpoints
  - _Requirements: 16.1, 16.3, 16.5_

- [x] 26. Accessibility audit for information pages
  - Run axe DevTools on About, OurTeam, OurStory, PastEvents pages
  - Check keyboard navigation on all information pages
  - Verify all interactive elements are accessible
  - Fix any accessibility issues found
  - _Requirements: 4.5, 15.2, 17.4_

- [x] 26.1 Checkpoint - Verify information pages mobile optimization
  - Ensure all tests pass, ask the user if questions arise.

## Phase 5: Utility Pages Mobile Optimization

- [x] 27. Optimize Contact page for mobile
  - Apply mobile-first responsive classes to contact form
  - Make all form fields full-width on mobile
  - Set appropriate input types (email, tel) for mobile keyboards
  - Ensure form labels are visible and associated with inputs
  - Make submit button full-width with adequate touch target
  - Stack contact information vertically on mobile
  - Integrate shared components
  - Test form submission on mobile
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 16.1, 16.4, 16.5_

- [x] 27.1 Write property test for form label accessibility
  - **Property 11: Form label accessibility**
  - **Validates: Requirements 4.5**

- [x] 28. Optimize FreeTrial page for mobile
  - Apply mobile-first responsive classes to trial form
  - Make all form fields full-width on mobile
  - Set appropriate input types for mobile keyboards
  - Ensure adequate touch targets for all form elements
  - Stack form sections vertically on mobile
  - Integrate shared components
  - Test form submission on mobile
  - _Requirements: 4.1, 4.2, 4.3, 16.1, 16.5_

- [x] 29. Optimize DressCode page for mobile
  - Apply mobile-first responsive classes to content sections
  - Stack dress code information vertically on mobile
  - Ensure images scale appropriately
  - Integrate shared components
  - Ensure all text is readable without horizontal scrolling
  - Test at all mobile breakpoints
  - _Requirements: 16.1, 16.3, 16.5_

- [x] 30. Optimize StudioRental page for mobile
  - Apply mobile-first responsive classes to rental information
  - Stack rental details vertically on mobile
  - Ensure images scale appropriately
  - Optimize any booking forms for mobile
  - Integrate shared components
  - Test at all mobile breakpoints
  - _Requirements: 16.1, 16.3, 16.5_

- [x] 31. Optimize Tuition page for mobile
  - Apply mobile-first responsive classes to pricing tables
  - Make pricing tables scroll horizontally or stack on mobile
  - Ensure all pricing information is readable
  - Integrate shared components
  - Test at all mobile breakpoints
  - _Requirements: 16.1, 16.3, 16.5_

- [x] 32. Optimize Store page for mobile
  - Apply mobile-first responsive classes to product sections
  - Stack product cards vertically on mobile
  - Ensure product images display at full width
  - Optimize any purchase forms for mobile
  - Integrate shared components
  - Test at all mobile breakpoints
  - _Requirements: 16.1, 16.3, 16.5_

- [x] 33. Optimize More page for mobile
  - Apply mobile-first responsive classes to content sections
  - Stack content vertically on mobile
  - Ensure all links have adequate touch targets
  - Integrate shared components
  - Test at all mobile breakpoints
  - _Requirements: 16.1, 16.3, 16.5_

- [x] 34. Optimize Programs page for mobile
  - Apply mobile-first responsive classes to program sections
  - Stack program cards vertically on mobile
  - Ensure images display at full width
  - Integrate shared components
  - Test at all mobile breakpoints
  - _Requirements: 16.1, 16.3, 16.5_

- [x] 35. Accessibility audit for utility pages
  - Run axe DevTools on Contact, FreeTrial, DressCode, StudioRental, Tuition, Store, More, Programs pages
  - Check keyboard navigation on all utility pages
  - Verify all forms are accessible with proper labels
  - Verify all interactive elements are accessible
  - Fix any accessibility issues found
  - _Requirements: 4.5, 15.2, 17.4_

- [x] 35.1 Checkpoint - Verify utility pages mobile optimization
  - Ensure all tests pass, ask the user if questions arise.

## Phase 6: Cross-Page Consistency & Testing

- [x] 36. Verify shared component consistency across all pages
  - Test Testimonials component on all pages that use it
  - Test WhyUs component on all pages that use it
  - Test NextSteps component on all pages that use it
  - Test Footer component on all pages
  - Test Navigation component on all pages
  - Ensure identical styling and behavior across all pages
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

- [x] 36.1 Write property test for consistent spacing across pages
  - **Property 15: Consistent spacing across pages**
  - **Validates: Requirements 5.4**

- [x] 36.2 Write property test for minimum section spacing
  - **Property 16: Minimum section spacing**
  - **Validates: Requirements 5.5**

- [x] 37. Verify desktop layout preservation at 640px and above
  - Test all pages at 640px, 768px, 1024px, 1280px widths
  - Compare rendered output against original desktop implementation
  - Ensure no visual regressions on desktop
  - Verify all desktop functionality remains intact
  - Document any necessary adjustments
  - _Requirements: 1.2_

- [x] 37.1 Write property test for desktop layout preservation
  - **Property 2: Desktop layout preservation**
  - **Validates: Requirements 1.2**

- [x] 38. Test mobile navigation across all pages
  - Verify hamburger menu opens from right on all pages
  - Test menu close on backdrop click
  - Test menu close on link click
  - Verify body scroll lock when menu is open
  - Test accordion-style sub-navigation
  - Ensure all menu items have adequate touch targets
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 17.1, 17.2, 17.3, 17.4, 17.5_

- [x] 38.1 Write property test for typography scaling
  - **Property 8: Typography scaling across mobile range**
  - **Validates: Requirements 3.5**

- [x] 39. Test at all target mobile breakpoints
  - Test all pages at 375px width (iPhone SE)
  - Test all pages at 390px width (iPhone 12/13/14)
  - Test all pages at 428px width (iPhone 14 Pro Max)
  - Verify smooth transitions between breakpoints
  - Document any layout issues
  - _Requirements: 18.1, 18.2, 18.3, 18.4, 18.5_

- [x] 39.1 Write property test for reduced spacing on mobile
  - **Property 12: Reduced spacing on mobile**
  - **Validates: Requirements 5.1**

- [x] 39.2 Write property test for interactive element visual feedback
  - **Property 21: Interactive element visual feedback**
  - **Validates: Requirements 8.2**

- [x] 40. Performance optimization and testing
  - Run Lighthouse CI on all pages at mobile viewport
  - Verify FCP < 1.8s, LCP < 2.5s, CLS < 0.1
  - Optimize any performance bottlenecks
  - Test on slow 3G network with CPU throttling
  - Verify lazy loading is working correctly
  - _Requirements: 7.1, 7.2, 8.5_

- [x] 40.1 Write property test for appropriate image sizing
  - **Property 19: Appropriate image sizing for mobile**
  - **Validates: Requirements 7.2**

- [x] 41. Accessibility audit and fixes
  - Run axe DevTools on all pages at mobile viewport
  - Verify WCAG 2.1 Level AA compliance
  - Test keyboard navigation on mobile
  - Test with screen reader (VoiceOver)
  - Verify color contrast ratios
  - Fix any accessibility issues found
  - _Requirements: 4.5, 15.2, 17.4_

- [x] 41.1 Write property test for consistent mobile optimization
  - **Property 22: Consistent mobile optimization across all pages**
  - **Validates: Requirements 16.1, 16.5**
  - **Status: PASSED** ✅
  - All 9 tests passing
  - Validates vertical stacking, typography, interactive elements, spacing, no horizontal scroll, and shared component consistency across all pages

- [x] 42. Final cross-browser testing
  - Test on iOS Safari 14+
  - Test on Chrome Mobile 90+
  - Test on Samsung Internet 14+
  - Test on Firefox Mobile 90+
  - Document any browser-specific issues
  - Implement necessary fallbacks
  - _Requirements: All_

- [x] 43. Test and optimize for landscape orientation on mobile
  - Test all pages in landscape mode (844px x 390px, 926px x 428px)
  - Ensure navigation works correctly in landscape
  - Verify content doesn't overflow or break
  - Adjust spacing and layout for landscape if needed
  - Test form inputs and touch targets in landscape
  - _Requirements: Edge cases_

- [x] 44. Optimize for tablet viewports (640px - 1023px)
  - Test all pages at 768px (iPad portrait) and 1024px (iPad landscape)
  - Adjust grid layouts for tablet (2 columns where appropriate)
  - Ensure touch targets remain adequate for tablet
  - Verify shared components look good on tablet
  - Test navigation on tablet (should show desktop nav or tablet-optimized version)
  - Apply tablet-specific responsive classes where needed
  - _Requirements: Edge cases_

- [x] 45. Test and optimize for very small devices (< 375px)
  - Test all pages at 320px width (iPhone SE 1st gen, small Android phones)
  - Ensure no horizontal overflow at 320px
  - Adjust font sizes if needed for readability
  - Verify touch targets remain accessible
  - Test forms and inputs at 320px
  - _Requirements: Edge cases_

- [x] 46. Test and optimize for very large phones (> 428px)
  - Test all pages at 480px and 540px widths (large Android phones, foldables)
  - Ensure layouts scale appropriately
  - Verify content doesn't look too stretched
  - Test that mobile optimizations still apply
  - Ensure smooth transition to tablet breakpoint at 640px
  - _Requirements: Edge cases_

- [x] 47. Create real device testing checklist
  - Document testing procedure for physical devices
  - Create checklist for iOS devices (iPhone SE, 12, 14, 14 Pro Max)
  - Create checklist for Android devices (various sizes)
  - Create checklist for tablets (iPad, Android tablets)
  - Test on actual devices if available, or use BrowserStack/similar
  - Document any device-specific issues found
  - _Requirements: 18.1, 18.2, 18.3_

- [x] 48. Verify shared component consistency one final time
  - Render Testimonials on all pages that use it and compare
  - Render WhyUs on all pages that use it and compare
  - Render NextSteps on all pages that use it and compare
  - Take screenshots at 390px for visual comparison
  - Verify pixel-perfect consistency
  - Fix any inconsistencies found
  - _Requirements: 6.1, 6.2, 6.3_

- [x] 49. Create Cloudinary responsive image utility
  - Create src/utils/cloudinaryImage.ts utility function
  - Implement function to generate responsive Cloudinary URLs with transformations
  - Support different sizes for mobile (375px, 390px, 428px), tablet (768px), desktop (1024px+)
  - Add quality optimization (q_auto, f_auto)
  - Add lazy loading support
  - Create TypeScript types for image configurations
  - Document usage examples
  - _Requirements: 7.1, 7.2, 7.4, 7.5_

- [x] 49.1 Audit and optimize all images for mobile
  - Audit all images across all 18 pages
  - Replace hardcoded Cloudinary URLs with responsive image utility
  - Identify images that are too large for mobile viewports
  - Implement responsive image loading with srcset using Cloudinary utility
  - Ensure all images have proper alt text for accessibility
  - Verify lazy loading is working on all images
  - Test image loading performance on slow 3G
  - _Requirements: 7.1, 7.2, 7.4, 7.5_

- [x] 50. CSS cleanup and optimization
  - Audit all CSS for unused styles
  - Remove any conflicting styles between mobile and desktop
  - Ensure no duplicate styles across components
  - Verify Tailwind purge is working correctly
  - Optimize CSS bundle size
  - Document any CSS patterns for future reference
  - _Requirements: Performance_

- [x] 51. Preserve all desktop animations and transitions on mobile
  - Audit all animations on desktop version
  - Ensure scroll-based animations work on mobile
  - Ensure hover states are adapted to touch (active/focus states)
  - Verify transition smoothness on mobile devices
  - Test animations on low-end devices for performance
  - Respect prefers-reduced-motion for accessibility
  - _Requirements: 8.1, 8.2, 8.3, 8.4_

- [x] 52. Add loading states for mobile
  - Create skeleton screens for slow-loading sections
  - Add loading indicators for images
  - Implement progressive loading for testimonials carousel
  - Add loading states for form submissions
  - Test loading states on slow 3G connection
  - Ensure loading states are accessible
  - _Requirements: Performance, UX_

- [x] 53. Final checkpoint - Complete mobile optimization verification
  - Ensure all tests pass, ask the user if questions arise.
  - Verify all 18 pages are fully mobile-optimized
  - Verify desktop version remains unchanged (animations, transitions, effects preserved)
  - Verify all shared components are IDENTICAL across all pages
  - Verify all edge cases are handled (landscape, tablet, small/large devices)
  - Verify all images are optimized
  - Verify CSS is clean and optimized
  - Verify all animations and transitions work on mobile
  - Verify all acceptance criteria are met
  - Document any remaining issues or future improvements
