# Architecture Mode Feature

## Overview

The **Architecture Mode** is a design visualization feature inspired by [rauno.me](https://rauno.me) that transforms the entire website into a **wireframe/outline view** when clicking the central crosshair. Everything becomes white outlines on a black background, revealing the underlying structure and layout system.

---

## How It Works

### User Interaction

1. **Click the central crosshair** (the `+` in the middle of the screen)
2. The entire page transforms into **wireframe mode**:
   - Background becomes pure black
   - All elements show as white outlines/borders
   - Text appears as outlined strokes
   - Colors become transparent
3. The crosshair **rotates 45°** and **scales up 15%** to indicate active state
4. An "ARCHITECTURE" label appears below the crosshair
5. Click again to toggle back to normal mode

---

## Technical Implementation

### 1. State Management

```typescript
// In app/page.tsx
const [architectureMode, setArchitectureMode] = useState(false);

const toggleArchitectureMode = () => {
  setArchitectureMode(!architectureMode);
};
```

### 2. CSS Wireframe Styling

```css
/* In app/globals.css */

/* Black background */
[data-architecture="true"] {
  background: #000 !important;
  transition: all 400ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

/* All elements get white outlines */
[data-architecture="true"] * {
  background: transparent !important;
  color: transparent !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
  box-shadow: none !important;
}

/* Text becomes outlined strokes */
[data-architecture="true"] h1,
[data-architecture="true"] p,
[data-architecture="true"] a,
[data-architecture="true"] span {
  color: transparent !important;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.8);
  background: transparent !important;
}

/* SVGs get white strokes */
[data-architecture="true"] svg * {
  stroke: rgba(255, 255, 255, 0.8) !important;
  fill: transparent !important;
}

/* Frame borders are thicker/more visible */
[data-architecture="true"] [data-sheet="true"] {
  background: transparent !important;
  border: 1.5px solid rgba(255, 255, 255, 0.6) !important;
}
```

**How It Works:**
- **Background**: Pure black (#000)
- **All elements**: Transparent with white borders
- **Text**: Transparent fill with white stroke outline
- **SVGs**: White strokes, transparent fill
- **Frames**: Thicker borders (1.5px) for visibility
- **Result**: Complete wireframe view showing structure

### 3. Crosshair Animation

```typescript
<motion.svg
  animate={{
    opacity: architectureMode ? 1 : 0.2,
    scale: architectureMode ? 1.15 : 1,
    rotate: architectureMode ? 45 : 0,
  }}
  transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
>
```

**Animation States:**

| State | Opacity | Scale | Rotation |
|-------|---------|-------|----------|
| Normal | 0.2 | 1.0 | 0° |
| Active | 1.0 | 1.15 | 45° |

### 4. Label Animation

```typescript
<AnimatePresence>
  {architectureMode && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 0.8, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      ARCHITECTURE
    </motion.div>
  )}
</AnimatePresence>
```

---

## Visual States

### Normal Mode
```
Background: Black (#000000)
Text: Solid fills, light gray (#ededed)
Elements: Filled backgrounds, solid colors
Borders: Subtle gray borders
Crosshair: 20% opacity, 0° rotation
Label: Hidden
```

### Architecture Mode (Wireframe)
```
Background: Pure black (#000)
Text: Transparent with white outlines (-webkit-text-stroke)
Elements: All transparent with white borders
Frames: 1.5px white borders (60% opacity)
Text stroke: 1px white (80% opacity)
Element borders: 1px white (30% opacity)
Crosshair: 100% opacity, 45° rotation, 115% scale
Label: "ARCHITECTURE" visible (80% opacity)
Transition: 400ms cubic-bezier(0.2, 0.8, 0.2, 1)
```

---

## Accessibility

### Keyboard Support
- Crosshair button is fully keyboard accessible
- Press `Tab` to focus, `Enter` or `Space` to toggle
- Clear visual focus state (browser default outline)

### ARIA Labels
```tsx
aria-label={architectureMode
  ? "Exit architecture mode"
  : "Enter architecture mode"
}
```

### Screen Reader Announcements
Screen readers will announce:
- "Enter architecture mode, button" (when focused, normal state)
- "Exit architecture mode, button" (when focused, active state)

---

## Performance Considerations

### CSS Performance

**Pros:**
- Pure CSS implementation (no JavaScript calculation)
- Instant toggle with CSS transitions
- Minimal re-paint (mostly border/stroke changes)
- Works on all modern browsers

**Cons:**
- Heavy use of `!important` (necessary to override all styles)
- Text stroke can look pixelated on low-DPI screens
- Many nested elements means many border calculations

**Why It's Fast:**
- No filter effects (unlike inversion)
- No DOM manipulation
- Simple CSS property changes
- Hardware-accelerated transitions

---

## Text Rendering

### `-webkit-text-stroke` Property

This creates the outlined text effect:

```css
color: transparent !important;
-webkit-text-stroke: 1px rgba(255, 255, 255, 0.8);
```

**Browser Support:**
- ✅ Chrome/Edge: Full support
- ✅ Safari: Full support
- ✅ Firefox: Supported since Firefox 49

**Rendering Notes:**
- Works best on high-DPI displays (Retina, 4K)
- May appear slightly jagged on 1x displays
- Thicker strokes (2px) can help on low-DPI screens

---

## Frame Spacing

All frames have perfectly even 240px spacing using CSS `gap`:

```tsx
<div style={{ gap: `${FRAME_GAP}px` }}>
  <section style={{
    width: "min(85vw, 1240px)",
    height: "min(80vh, 720px)",
  }}>
```

**In Architecture Mode:**
- Frame outlines become more visible (1.5px borders)
- Spacing remains exactly 240px
- Layout structure is clearly visible

---

## Browser Support

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| `-webkit-text-stroke` | ✅ 1+ | ✅ 49+ | ✅ 3+ | ✅ 15+ |
| CSS `gap` property | ✅ 84+ | ✅ 63+ | ✅ 14.1+ | ✅ 84+ |
| CSS `min()` function | ✅ 79+ | ✅ 75+ | ✅ 11.1+ | ✅ 79+ |
| `data-*` attributes | ✅ All | ✅ All | ✅ All | ✅ All |

**Fallback:** Modern browsers only (2020+). No polyfill needed.

---

## Comparison: Your Site vs Rauno.me

| Feature | Rauno.me | Your Site |
|---------|----------|-----------|
| **Trigger** | Click center crosshair | ✅ Same |
| **Effect** | Wireframe/outline mode | ✅ Same |
| **Background** | Pure black | ✅ Same |
| **Text** | White outlined strokes | ✅ Same |
| **Elements** | White borders | ✅ Same |
| **Crosshair Animation** | Rotate + scale | ✅ Same |
| **Label** | "ARCHITECTURE" appears | ✅ Same |
| **Transition** | ~400ms cubic-bezier | ✅ Same |
| **Frame Spacing** | Even gap property | ✅ Same |

---

## Testing Checklist

- [x] Click crosshair toggles wireframe mode
- [x] Background becomes pure black
- [x] All elements show white outlines
- [x] Text appears as outlined strokes
- [x] Crosshair rotates 45° in active state
- [x] Crosshair scales to 115% in active state
- [x] "ARCHITECTURE" label appears/disappears
- [x] Transition is 400ms with correct easing
- [x] SVGs show white strokes
- [x] Keyboard navigation works (Tab + Enter)
- [x] ARIA labels update correctly
- [x] Frame spacing remains even
- [x] Build completes without errors

---

## Code Locations

**State & Logic:**
- [app/page.tsx:25](app/page.tsx#L25) - Architecture mode state
- [app/page.tsx:31](app/page.tsx#L31) - Toggle function
- [app/page.tsx:67](app/page.tsx#L67) - Crosshair button component

**Styling:**
- [app/globals.css:221](app/globals.css#L221) - Wireframe CSS
- [app/globals.css:227](app/globals.css#L227) - Element outlines
- [app/globals.css:235](app/globals.css#L235) - Text stroke styling
- [app/globals.css:253](app/globals.css#L253) - SVG styling

**Frame Spacing:**
- [app/page.tsx:20](app/page.tsx#L20) - `FRAME_GAP` constant
- [app/page.tsx:99](app/page.tsx#L99) - Container gap property

---

## Summary

Architecture mode is now **production-ready** with the correct wireframe/outline implementation matching rauno.me:

✅ Click crosshair to toggle wireframe mode
✅ Pure black background with white outlines
✅ Text appears as outlined strokes (-webkit-text-stroke)
✅ All elements show white borders
✅ Smooth 400ms transition with proper easing
✅ Crosshair rotates 45° and scales 115%
✅ "ARCHITECTURE" label appears
✅ Frame spacing perfectly even (240px gaps)
✅ Fully accessible (keyboard + ARIA)
✅ Build passes cleanly

**Try it:** Click the center crosshair (`+`) to see the wireframe architecture view.

---

**Feature Updated**: March 6, 2026
**Inspired By**: [rauno.me](https://rauno.me) wireframe toggle
**Status**: Production-Ready ✅
