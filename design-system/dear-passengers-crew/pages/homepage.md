# Homepage Override — Flight Deck Briefing

This file overrides the generic Master recommendations for the homepage.

## Direction

- Pattern: immersive hero → proof strip → editorial chapters → asymmetric status bento → official media → tools and directory.
- Visual voice: cinematic flight deck, not a generic gaming portal and not a copy of a competitor.
- Brand cues: official game imagery, airline manifest labels, cockpit status lights, boarding-pass notches, restrained HUD grid.
- Density: 4/10. Keep the homepage detailed but divide it into scannable chapters.
- Motion: 5/10. Use short scroll reveals and ambient background depth only; never animate body copy continuously.

## Tokens

- Deep background: `#050B12`
- Elevated navy: `#071523`
- Card surface: `#0C1C2B`
- Primary text: `#F7F9FC`
- Muted text: `#A6B3C0`
- Action orange: `#FF9F0A`
- Hot orange: `#FF6B19`
- Verified cyan: `#45E0D0`
- Reading paper: `#F3EDE2`
- Reading ink: `#0A1725`
- Border: `rgba(255,255,255,.13)`
- Standard card radius: `18–22px`
- Motion easing: `cubic-bezier(.16,1,.3,1)`

## Responsive Rules

- Desktop: asymmetric 12-column status bento; hero copy left and official media/status console right.
- Tablet: full-screen menu drawer, 2-column status layout, single-column media and tool sections.
- Mobile: 44px minimum targets, four-item in-page bottom dock, stacked CTA below 430px, hero facts move into document flow, no horizontal carousels.
- Chinese, Japanese and Arabic display headings use Manrope/system fallbacks and smaller fluid sizing to avoid broken line wraps.

## Accessibility and Performance

- Visible skip link and `:focus-visible` ring.
- Menu and language selectors expose `aria-expanded` and close with Escape.
- Text contrast meets WCAG AA; cyan/orange are not used as the only status signal.
- `prefers-reduced-motion` disables reveals, ticker motion and decorative animation.
- Official screenshots use lazy loading outside the hero; mobile keeps native vertical scrolling.
