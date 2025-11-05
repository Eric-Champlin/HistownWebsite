# HisTown Dance Studio Homepage

A modern, faith-centered website for HisTown Dance Studio built with React, TypeScript, and Tailwind CSS.

## Project Structure

```
src/
├── components/          # Reusable UI components (to be created)
├── content/            # Centralized content management
│   └── home.ts         # Homepage content configuration
├── types/              # TypeScript type definitions
│   └── content.ts      # Content type interfaces
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## Content Management

All homepage content is centralized in `src/content/home.ts` for easy editing without touching component code. This structure is designed for future CMS integration.

### Editing Content

To update homepage content:

1. Open `src/content/home.ts`
2. Modify the relevant section in the `homeContent` object
3. Save the file - changes will be reflected automatically

### Content Sections

- **Navigation**: Logo, menu items, external login link
- **Hero**: Main headline, subheadline, background image, CTA buttons
- **Programs**: Quick links to different program pages
- **Reviews**: Customer testimonials
- **Why Us**: Key value propositions
- **Team**: Staff member information
- **Free Trial**: Call-to-action section
- **Social**: Social media links
- **Contact**: Address, phone, email information
- **Footer**: Copyright and legal links

## Design System

### Colors (HisTown Brand Palette)

- **Primary**: `#8B5A3C` (Warm brown)
- **Secondary**: `#F4E4BC` (Cream)
- **Accent**: `#6B8E23` (Olive green)
- **Neutral**: `#F8F6F0` (Off-white background)
- **Text**: `#2D2D2D` (Dark gray)

### Typography

- **Sans-serif**: Inter (body text)
- **Display**: Montserrat (headings)
- **Serif**: Playfair Display (decorative)

### Animations

All animations respect `prefers-reduced-motion` settings and use subtle fade/slide effects with 300-500ms durations.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run type checking
npm run type-check

# Run linting
npm run lint
```

## Requirements Addressed

This setup addresses the following requirements from the specification:

- **2.1**: Content centralized in `src/content/home.ts` with TypeScript interfaces
- **2.2**: Dynamic content import with type safety
- **7.1**: Brand colors and design tokens in `tailwind.config.js`
- **7.5**: Consistent Tailwind utility patterns and shared design tokens

## Next Steps

The project structure is now ready for component implementation. The next tasks will involve creating individual components that consume the centralized content configuration.