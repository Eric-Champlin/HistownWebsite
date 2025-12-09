# Mobile Edit Guidelines

**Date Created:** December 4, 2025  
**Purpose:** Quick reference guide for making mobile-only edits without breaking desktop

---

## 🎯 Core Principle

**NEVER TOUCH DESKTOP (1024px+)**

All mobile edits must use Tailwind's mobile-first approach with responsive prefixes to ensure desktop remains completely unchanged.

---

## ✅ The Golden Rules

### 1. Mobile-First Approach
- Base classes (no prefix) = Mobile (< 640px)
- `sm:` prefix = Small tablet (≥ 640px)
- `md:` prefix = Tablet (≥ 768px)
- `lg:` prefix = Desktop (≥ 1024px)
- `xl:` prefix = Large desktop (≥ 1280px)

### 2. How to Make Mobile-Only Changes

**✅ CORRECT - Mobile-first pattern:**
```tsx
// Changes mobile, preserves desktop
<div className="text-sm sm:text-base lg:text-lg">
  {/* Mobile gets text-sm, desktop keeps text-lg */}
</div>

<div className="px-4 sm:px-6 lg:px-8">
  {/* Mobile gets px-4, desktop keeps px-8 */}
</div>

<div className="flex-col sm:flex-row">
  {/* Mobile stacks vertically, desktop stays horizontal */}
</div>
```

**❌ WRONG - Will break desktop:**
```tsx
// DON'T DO THIS - Changes all breakpoints
<div className="text-sm">
  {/* This changes desktop too! */}
</div>

// DON'T DO THIS - Removes existing desktop styles
<div className="px-4">
  {/* Desktop loses its padding! */}
</div>
```

### 3. Shared Components Must Stay Identical

If editing shared components, the change must apply to ALL pages:
- `src/components/sections/Testimonials.tsx`
- `src/components/sections/WhyUs.tsx`
- `src/components/sections/NextSteps.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/Navigation.tsx`

**Never** make page-specific changes to shared components.

---

## 📋 Before Making Any Edit - Checklist

### Step 1: Reference Documentation
- [ ] Check `docs/CSS_PATTERNS_GUIDE.md` for approved patterns
- [ ] Check `docs/DESKTOP_PRESERVATION_STRATEGY.md` for constraints
- [ ] Check `src/constants/responsive.ts` for breakpoints and constants
- [ ] Check `docs/DESIGN_TOKENS_USAGE.md` for spacing/typography values

### Step 2: Plan the Change
- [ ] Identify what needs to change on mobile
- [ ] Verify desktop should stay the same
- [ ] Determine which responsive prefix to use
- [ ] Check if it affects a shared component

### Step 3: Make the Change
- [ ] Use mobile-first approach (base class + responsive prefixes)
- [ ] If editing shared component, update ALL pages that use it
- [ ] Keep changes minimal and focused

### Step 4: Test the Change
- [ ] Test at 375px (iPhone SE)
- [ ] Test at 390px (iPhone 12/13/14) - primary target
- [ ] Test at 428px (iPhone 14 Pro Max)
- [ ] Test at 768px (iPad portrait)
- [ ] **CRITICAL:** Test at 1024px+ (Desktop) - must be unchanged
- [ ] Run tests: `npm test -- --run`

---

## 🔍 Common Mobile Edit Scenarios

### Scenario 1: Reduce Mobile Spacing

**Goal:** Less padding on mobile, keep desktop padding

```tsx
// Before (desktop only)
<div className="py-24">

// After (mobile-first)
<div className="py-12 sm:py-16 md:py-24">
  {/* Mobile: py-12, Tablet: py-16, Desktop: py-24 */}
</div>
```

### Scenario 2: Stack Elements on Mobile

**Goal:** Vertical on mobile, horizontal on desktop

```tsx
// Before (desktop only)
<div className="flex flex-row gap-8">

// After (mobile-first)
<div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
  {/* Mobile: vertical with gap-4, Desktop: horizontal with gap-8 */}
</div>
```

### Scenario 3: Smaller Text on Mobile

**Goal:** Smaller font on mobile, keep desktop size

```tsx
// Before (desktop only)
<h2 className="text-5xl">

// After (mobile-first)
<h2 className="text-3xl sm:text-4xl md:text-5xl">
  {/* Mobile: text-3xl, Tablet: text-4xl, Desktop: text-5xl */}
</div>
```

### Scenario 4: Full Width on Mobile

**Goal:** Full width on mobile, constrained on desktop

```tsx
// Before (desktop only)
<button className="w-auto">

// After (mobile-first)
<button className="w-full sm:w-auto">
  {/* Mobile: full width, Desktop: auto width */}
</button>
```

### Scenario 5: Hide on Mobile

**Goal:** Hide element on mobile, show on desktop

```tsx
// Before (always visible)
<div className="block">

// After (mobile-first)
<div className="hidden sm:block">
  {/* Hidden on mobile, visible on desktop */}
</div>
```

---

## 🚫 Forbidden Actions

### NEVER Do These:

1. **Remove responsive prefixes from existing classes**
   ```tsx
   // ❌ WRONG - Breaks desktop
   <div className="lg:text-5xl"> → <div className="text-3xl">
   ```

2. **Change base classes without adding responsive prefixes**
   ```tsx
   // ❌ WRONG - Changes all breakpoints
   <div className="px-8"> → <div className="px-4">
   
   // ✅ CORRECT - Only changes mobile
   <div className="px-8"> → <div className="px-4 lg:px-8">
   ```

3. **Modify shared components for one page only**
   ```tsx
   // ❌ WRONG - Breaks consistency
   // In Testimonials.tsx, adding page-specific logic
   {page === 'home' ? <div className="px-4"> : <div className="px-8">}
   ```

4. **Use inline styles without responsive consideration**
   ```tsx
   // ❌ WRONG - Can't be responsive
   <div style={{ padding: '16px' }}>
   
   // ✅ CORRECT - Use Tailwind classes
   <div className="p-4 lg:p-8">
   ```

5. **Change Tailwind config breakpoints**
   ```js
   // ❌ WRONG - Breaks entire system
   // In tailwind.config.js
   theme: {
     screens: {
       sm: '500px', // DON'T CHANGE THESE
     }
   }
   ```

---

## 📚 Key Reference Files

### Strategy & Constraints
- `docs/DESKTOP_PRESERVATION_STRATEGY.md` - How to NOT break desktop
- `docs/DESKTOP_PRESERVATION_CHECKLIST.md` - What to verify after changes
- `docs/CSS_PATTERNS_GUIDE.md` - Approved CSS patterns

### Design Tokens & Constants
- `src/constants/responsive.ts` - Breakpoints, touch targets, spacing
- `docs/DESIGN_TOKENS_USAGE.md` - How to use design tokens
- `tailwind.config.js` - Tailwind configuration (DO NOT MODIFY)

### Component References
- `docs/SHARED_COMPONENT_CONSISTENCY_VERIFICATION.md` - Shared component specs
- `src/components/sections/Testimonials.tsx` - Testimonials component
- `src/components/sections/WhyUs.tsx` - WhyUs component
- `src/components/sections/NextSteps.tsx` - NextSteps component

### Testing & Verification
- `docs/VIEWPORT_TESTING.md` - How to test at different viewports
- `docs/DESKTOP_BASELINE.md` - Desktop baseline for comparison
- `src/test/desktop-layout-preservation.test.tsx` - Desktop preservation tests

---

## 🧪 Testing After Edits

### Quick Test Checklist

1. **Visual Test in Browser:**
   ```bash
   # Server should already be running at http://localhost:5173/
   # Open Chrome DevTools (F12)
   # Toggle device toolbar (Ctrl+Shift+M / Cmd+Shift+M)
   # Test these widths:
   ```
   - 375px - iPhone SE
   - 390px - iPhone 12/13/14 ⭐ PRIMARY
   - 428px - iPhone 14 Pro Max
   - 768px - iPad portrait
   - 1024px - Desktop ⚠️ MUST BE UNCHANGED

2. **Run Automated Tests:**
   ```bash
   npm test -- --run
   ```
   - All 1,061 tests should pass
   - 0 tests should fail
   - If tests fail, revert changes and investigate

3. **Check for Regressions:**
   - [ ] No horizontal scrolling on mobile
   - [ ] All text readable (min 14px)
   - [ ] Touch targets adequate (min 44x44px)
   - [ ] Images don't overflow
   - [ ] Desktop looks identical to before

---

## 💡 Pro Tips

### Tip 1: Use Chrome DevTools Device Toolbar
- Press `Ctrl+Shift+M` (Windows) or `Cmd+Shift+M` (Mac)
- Select "Responsive" mode
- Drag to test different widths
- Use preset devices (iPhone 12, iPad, etc.)

### Tip 2: Test Shared Components on Multiple Pages
If you edit a shared component, test it on at least 3 different pages:
- Homepage (App.tsx)
- A class page (DanceClasses.tsx)
- An info page (About.tsx)

### Tip 3: Use the Existing Patterns
Don't invent new patterns. Copy from existing mobile-optimized components:
```tsx
// Look at these for examples:
src/components/sections/Testimonials.tsx
src/components/sections/WhyUs.tsx
src/components/sections/NextSteps.tsx
```

### Tip 4: When in Doubt, Ask
If you're unsure whether a change will break desktop:
1. Check `docs/DESKTOP_PRESERVATION_STRATEGY.md`
2. Look for similar patterns in existing code
3. Test at 1024px before and after the change

---

## 🎨 Common Tailwind Classes for Mobile Edits

### Spacing (Mobile → Desktop)
```
py-8 sm:py-12 lg:py-16    // Vertical padding
px-4 sm:px-6 lg:px-8      // Horizontal padding
gap-4 sm:gap-6 lg:gap-8   // Gap between flex/grid items
space-y-4 sm:space-y-6    // Vertical spacing between children
```

### Typography (Mobile → Desktop)
```
text-2xl sm:text-3xl lg:text-4xl    // Headings
text-base sm:text-lg                // Body text
text-sm sm:text-base                // Small text
leading-relaxed sm:leading-normal   // Line height
```

### Layout (Mobile → Desktop)
```
flex-col sm:flex-row              // Stack → Horizontal
grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  // Grid columns
w-full sm:w-auto                  // Full width → Auto
hidden sm:block                   // Hide → Show
block sm:hidden                   // Show → Hide
```

### Sizing (Mobile → Desktop)
```
h-48 sm:h-64 lg:h-80             // Height
max-w-full sm:max-w-xl lg:max-w-4xl  // Max width
min-h-screen sm:min-h-0          // Min height
```

---

## 📞 Emergency: I Broke Desktop!

### If Desktop Looks Wrong After Your Edit:

1. **Immediately revert your changes:**
   ```bash
   git diff  # See what you changed
   git checkout -- <filename>  # Revert the file
   ```

2. **Identify what went wrong:**
   - Did you remove a responsive prefix? (e.g., `lg:text-5xl` → `text-3xl`)
   - Did you change a base class without adding responsive prefixes?
   - Did you modify a shared component incorrectly?

3. **Fix it properly:**
   - Add back the responsive prefix
   - Use mobile-first approach: `text-3xl lg:text-5xl`
   - Test at 1024px to verify desktop is restored

4. **Run tests to confirm:**
   ```bash
   npm test -- --run src/test/desktop-layout-preservation.test.tsx
   ```

---

## 📝 Example: Complete Mobile Edit Workflow

### Scenario: Make hero section heading smaller on mobile

**Step 1: Identify the element**
```tsx
// In src/App.tsx
<h1 className="text-5xl font-black">
  Welcome to HisTown
</h1>
```

**Step 2: Plan the change**
- Current: `text-5xl` (applies to all breakpoints)
- Goal: `text-3xl` on mobile, keep `text-5xl` on desktop
- Solution: Use mobile-first with responsive prefix

**Step 3: Make the change**
```tsx
// After
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-black">
  Welcome to HisTown
</h1>
```

**Step 4: Test**
- ✅ 375px: Shows text-3xl
- ✅ 390px: Shows text-3xl
- ✅ 640px: Shows text-4xl
- ✅ 1024px: Shows text-5xl (unchanged!)

**Step 5: Run tests**
```bash
npm test -- --run
# All tests pass ✅
```

**Step 6: Done!**
Desktop preserved, mobile optimized. 🎉

---

## 🔗 Related Documentation

- [Desktop Preservation Strategy](./DESKTOP_PRESERVATION_STRATEGY.md)
- [CSS Patterns Guide](./CSS_PATTERNS_GUIDE.md)
- [Design Tokens Usage](./DESIGN_TOKENS_USAGE.md)
- [Viewport Testing Guide](./VIEWPORT_TESTING.md)
- [Final Verification Report](./FINAL_MOBILE_OPTIMIZATION_VERIFICATION.md)

---

**Remember:** When in doubt, preserve desktop. Mobile edits should be additive, not destructive. Always test at 1024px+ after making changes.

---

*Last Updated: December 4, 2025*  
*Mobile Optimization Project - HisTown Dance Studio*
