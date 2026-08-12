# Home

## Mission
Create implementation-ready, token-driven UI guidance for Home that is optimized for consistency, accessibility, and fast delivery across dashboard web app.

## Brand
- Product/brand: Home
- URL: https://neoconda.com/
- Audience: authenticated users and operators
- Product surface: dashboard web app

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Main font style: `font.family.primary=system-ui`, `font.family.stack=system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=24px`
- Typography scale: `font.size.xs=14.4px`, `font.size.sm=15.52px`, `font.size.md=16px`, `font.size.lg=16.45px`, `font.size.xl=20.96px`, `font.size.2xl=21.45px`, `font.size.3xl=22.08px`, `font.size.4xl=52px`
- Color palette: `color.surface.base=#000000`, `color.text.secondary=#959595`, `color.text.tertiary=#ffffff`, `color.text.inverse=#989898`, `color.surface.raised=#2d2d2d`, `color.surface.strong=#0e0e0e`
- Spacing scale: `space.1=0.96px`, `space.2=9px`, `space.3=12.96px`, `space.4=15px`, `space.5=18.08px`, `space.6=19.52px`, `space.7=28px`, `space.8=28.5px`
- Radius/shadow/motion tokens: `radius.xs=12px` | `motion.duration.instant=200ms`, `motion.duration.fast=250ms`, `motion.duration.normal=500ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: cards (294), inputs (88), buttons (35), links (27), navigation (1).


## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
