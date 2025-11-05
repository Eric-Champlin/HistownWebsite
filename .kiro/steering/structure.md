# Project Structure

## Organization Principles
- Component-based architecture with clear separation of concerns
- Feature-based organization where appropriate
- Shared utilities and common components in dedicated directories
- Clear distinction between pages, components, and utilities

## Expected Directory Structure
```
src/
├── components/          # Reusable UI components
│   ├── common/         # Shared components (buttons, forms, etc.)
│   ├── layout/         # Layout components (header, footer, nav)
│   └── sections/       # Page-specific sections
├── pages/              # Main page components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions and helpers
├── types/              # TypeScript type definitions
├── styles/             # Global styles and Tailwind config
└── assets/             # Images, icons, and static assets
```

## Naming Conventions
- Components: PascalCase (e.g., `ClassSchedule.tsx`)
- Files and directories: kebab-case or camelCase consistently
- TypeScript interfaces: PascalCase with descriptive names
- CSS classes: Tailwind utility classes preferred

## Component Guidelines
- Each component in its own file with clear, descriptive names
- Props interfaces defined for all components
- Responsive design considerations in all UI components
- Accessibility attributes included where appropriate