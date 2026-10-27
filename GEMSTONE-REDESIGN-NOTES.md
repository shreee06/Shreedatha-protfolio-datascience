# Gemstone redesign notes

This update builds on the existing React + Vite portfolio rather than replacing it.

## Visual refinements

- Keeps amethyst as the primary identity, with sapphire for depth and moonstone for light.
- Frames the original hero SVG in an editorial-style specimen panel.
- Adds a compact three-gem key: Amethyst / Identity, Blue Sapphire / Depth, Moonstone / Clarity.
- Adds subtle coordinate labels, a quiet technical grid, and layered ambient light around the hero artwork.
- Refines the featured project surface, card hover lighting, case-study metric glow, and section field-note labels.
- Updates the favicon to include amethyst facets, a sapphire facet, and a moonstone highlight.
- Renames the remaining `--lime-ink` CSS token to `--deep-ink` to remove the leftover old-palette name.

## Preserved

- All five project case studies and their current text / repository links.
- Existing filter behavior and case-study modal / keyboard handling.
- The discount simulator and scripted agentic analytics demo.
- Existing experience, education, skills, contact links, optional CV handling, and GitHub Pages workflow.
- Reduced-motion styling and responsive breakpoints.

## Verification status

The archive was inspected and the changes were checked in source. A production build could not be rerun in this environment because `npm ci` timed out and the package cache does not contain all locked npm packages. Run `nvm use 24 && npm ci && npm run build` on the development machine before pushing. No commit or deployment was performed.
