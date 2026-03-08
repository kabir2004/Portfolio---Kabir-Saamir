# Portfolio Architecture Documentation

## Overview

This portfolio is built following the architectural patterns and principles of [rauno.me](https://rauno.me), emphasizing performance, polish, and purposeful design.

## Design System

### Color System (Radix Colors)

We use the Radix Gray scale for semantic color tokens:

**Dark Mode (Default)**
- `--gray-1` to `--gray-12`: HSL-based grayscale from darkest to lightest
- `--bg`: Pure black (#000000)
- `--text-primary`: High contrast text (gray-12)
- `--text-secondary`: Medium contrast (gray-11)
- `--text-tertiary`: Low contrast (gray-9)
- `--yellow`: Accent color (#fbfc43)

**Light Mode**
- Same scale inverted for light backgrounds
- Seamless theme switching without FOUC

### Spacing Scale

8px base unit system:
- `--spacing-1`: 8px
- `--spacing-2`: 16px
- `--spacing-3`: 24px
- ...up to `--spacing-10`: 80px

### Typography

- **Font Stack**: System fonts (-apple-system, BlinkMacSystemFont, ...)
- **Font Sizes**: 10px to 48px scale
- **Line Heights**: Matching scale for vertical rhythm
- **Letter Spacing**: Tight (-0.01em to -0.04em) for display text

### Layout Constants

- `--frame-width`: 1200px
- `--frame-height`: 720px
- `--frame-gap`: 240px (space between frames)
- `--line-gap`: 9px (for minimap lines)

## Animation Principles

### Entrance Animations

1. **Staggered Reveal**: Text lines animate in sequence
2. **Spring Physics**: Framer Motion springs for natural feel
3. **Timing**: 0.2s initial delay, 0.08s stagger between elements
4. **Easing**: Custom cubic-bezier(0.2, 0.8, 0.2, 1)

### Scroll Behavior

- **Vertical → Horizontal**: Trackpad vertical scroll converted to horizontal
- **1:1 Momentum**: Pure native scrolling feel preserved
- **No Snap Points**: Smooth continuous scroll

### Hover States

- Duration: 200ms
- Custom easing: `var(--transition-snappy)`
- Subtle scale transforms (1.01x on cards)

## Components

### Minimap (`/components/ui/Minimap.tsx`)

Navigation indicator at bottom of viewport:
- 20 static lines with 9px gap
- 30px wide tracker block
- Spring physics (stiffness: 400, damping: 40)
- Mix-blend-mode for visibility on all backgrounds
- Entrance animation with stagger

### Frame System

Each "frame" is:
- 85vw wide (max 1240px)
- 80vh tall (max 720px)
- 240px horizontal gap
- Centered vertically
- Can be white "sheets" or transparent

### Theme System (`/lib/theme.ts`)

- Script injection to prevent FOUC
- localStorage persistence
- System preference detection
- Seamless dark/light switching

## Performance Optimizations

### 1. Bundle Optimization

```typescript
experimental: {
  optimizePackageImports: ["framer-motion", "lucide-react"]
}
```

### 2. React Compiler

```typescript
reactCompiler: true
```

### 3. Image Optimization

- AVIF/WebP formats
- Responsive sizes
- Lazy loading

### 4. Code Splitting

- Route-based splitting (Next.js default)
- Dynamic imports for heavy components

### 5. Font Loading

- System fonts (instant load)
- Preload strategy for custom fonts (if added)

### 6. CSS Architecture

- Minimal runtime CSS-in-JS
- CSS variables for theming
- Tailwind for utilities

## Accessibility

### Semantic HTML

- `<h1>` with `.vh` class for SEO (visually hidden)
- Proper heading hierarchy
- `aria-hidden` on decorative elements
- `aria-label` on icon-only buttons

### Keyboard Navigation

- All interactive elements focusable
- Visible focus states
- Tab order follows visual order

### Screen Readers

- Hidden h1 for page title
- Descriptive link text
- Proper landmarks (`<main>`, `<section>`)

## File Structure

```
/app
  ├── globals.css          # Design system, theme tokens
  ├── layout.tsx           # Root layout, metadata, theme script
  └── page.tsx             # Home page with horizontal scroll

/components
  └── ui
      ├── Minimap.tsx      # Navigation indicator
      └── CopyEmail.tsx    # Email copy button

/lib
  └── theme.ts             # Theme management utilities

next.config.ts             # Performance configuration
```

## Key Differences from "Vibecoded" Approach

### ❌ What We Avoid

1. **Arbitrary values without system**: Use design tokens
2. **Inconsistent spacing**: 8px base unit system
3. **Generic animations**: Custom timings, spring physics
4. **Poor performance**: Optimized bundle, minimal runtime JS
5. **Accessibility afterthought**: Built-in from start
6. **No design system**: Comprehensive token system
7. **Inline styles everywhere**: Structured CSS architecture

### ✅ What We Do

1. **Design tokens for everything**: Colors, spacing, typography
2. **Consistent 8px spacing scale**: Mathematical precision
3. **Purposeful animations**: Rauno-style entrance sequences
4. **Performance-first**: Bundle optimization, React compiler
5. **Accessibility-first**: Semantic HTML, ARIA, keyboard nav
6. **Radix color system**: Professional grayscale palette
7. **Structured architecture**: Documented, maintainable

## Future Enhancements

### Custom Font

To add a custom typeface like Rauno's "DD" font:

1. Add `.woff2` file to `/public`
2. Preload in layout.tsx:
   ```html
   <link rel="preload" href="/custom.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
   ```
3. Add @font-face in globals.css
4. Update `--font-sans` token

### Static Export

For even better performance:

```typescript
// next.config.ts
export const output = 'export';
```

### Analytics

Already integrated with @vercel/analytics. Consider adding:
- Performance monitoring (web-vitals)
- Error tracking (Sentry)
- Custom event tracking

## Resources

- [Rauno's Site](https://rauno.me)
- [Radix Colors](https://www.radix-ui.com/colors)
- [Framer Motion](https://www.framer.com/motion/)
- [Next.js Docs](https://nextjs.org/docs)

---

**Last Updated**: March 2026
**Architecture Inspired By**: Rauno Freiberg's rauno.me
