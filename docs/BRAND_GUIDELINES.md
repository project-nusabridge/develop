# Brand Guidelines

**Project:** NusaBridge

**Document:** BRAND_GUIDELINES.md

**Version:** 1.0

**Last Updated:** July 2026

---

## 1. Introduction

This document defines the visual and verbal identity for NusaBridge. It is intended for designers, developers, marketers and partners to ensure consistent application of the brand across products, marketing and communications.

Please replace placeholder assets, colors and font names with the official files and values when they are available.

---

## 2. Logo

- Primary logo: Use the full logo (symbol + wordmark) on light backgrounds.
- Secondary logo: Use the symbol-only mark for small sizes or tight spaces.
- Clear space: Maintain a minimum clear space around the logo equal to the height of the symbol.
- Minimum size: Do not render the full logo smaller than 40px in height; symbol-only should not be smaller than 24px.

Do not:
- Stretch, distort or recolor the logo.
- Place the logo on low-contrast backgrounds without a protective container.

---

## 3. Color Palette

Primary colors (examples — replace with official values):

- NusaBlue: #0B5FFF
- NusaGreen: #00A86B
- NusaDark: #0A0A0A
- NusaLight: #F7F9FC

Accent colors:

- Accent Yellow: #FFC107
- Accent Red: #E53935

Usage:
- Primary colors: UI, wordmark, primary CTA
- Accent colors: highlights, alerts, badges
- Background: use NusaLight or white for content areas

Accessible contrast:
- Ensure text on colored backgrounds meets WCAG AA (4.5:1 for normal text) or AAA where required.

---

## 4. Typography

Primary typeface (replace with chosen web/font files):
- Heading: Inter or system sans-serif (e.g., `Inter`, `Helvetica Neue`, `Arial`)
- Body: Inter / `Noto Sans` (for multilingual support)

Styles:
- H1 — 48px / 700
- H2 — 32px / 600
- H3 — 24px / 600
- Body — 16px / 400
- Caption — 12px / 400

Fallbacks:
- Use system fallbacks for performance. Example CSS stack: `font-family: 'Inter', 'Noto Sans', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;`

---

## 5. Iconography & Illustration

- Icons should be simple, geometric, and consistent in stroke weight.
- Prefer a single icon set for UI (SVG format) and provide 16/24/32px sizes.
- Illustrations should use the brand color palette and maintain a friendly, professional tone.

---

## 6. Photography

- Style: Authentic, documentary-style photos showing real people and real business scenarios in China and Indonesia.
- Tone: Professional, helpful, and optimistic.
- Treatment: Use slight desaturation and warm tones to keep imagery consistent.

---

## 7. Voice & Tone

- Voice: Professional, clear, and practical.
- Tone: Helpful and execution-oriented. Avoid overly technical jargon when addressing business owners.

Writing tips:
- Use active voice and short sentences.
- Lead with the value proposition: what the reader can do or achieve.
- Localize content appropriately for Chinese and Indonesian audiences.

---

## 8. UI Patterns

- Buttons: Primary (filled, NusaBlue), Secondary (outline), Destructive (red).
- Forms: Clear labels, inline validation, helpful error messages.
- Navigation: Use a simple top navigation for desktop and a bottom or hamburger navigation for mobile.

---

## 9. Accessibility

- Follow WCAG 2.1 AA as a baseline.
- Ensure keyboard focus states, sufficient color contrast, and accessible labels for interactive elements.

---

## 10. Brand Assets & File Naming

- Store official logos, icons, fonts and source files in the `assets/brand/` directory in the design repo.
- File naming examples:
  - `logo_nusabridge_primary.svg`
  - `logo_nusabridge_symbol.svg`
  - `color_palette_sketch.png`

---

## 11. Legal & Trademarks

- Use the brand only for approved projects and marketing materials.
- Trademark and legal notices should be added where required; consult legal for the correct phrasing.

---

## 12. Contact

For brand questions or asset requests, contact:

- Brand Lead: [Name] — email@example.com
- Design Lead: [Name] — design@example.com

---

## Appendix — Sample CSS

```css
:root {
  --nusa-blue: #0B5FFF;
  --nusa-green: #00A86B;
  --nusa-dark: #0A0A0A;
  --nusa-light: #F7F9FC;
}

body {
  font-family: 'Inter', 'Noto Sans', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: var(--nusa-dark);
  background-color: var(--nusa-light);
}
```

---

End of Document
