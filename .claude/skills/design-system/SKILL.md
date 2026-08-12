---
name: design-system-senthora-ai-language-tutor-app
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.
---

<!-- TYPEUI_SH_MANAGED_START -->

# Senthora — AI Language Tutor App

## Mission
Deliver implementation-ready design-system guidance for Senthora — AI Language Tutor App that can be applied consistently across marketing site interfaces.

## Brand
- Product/brand: Senthora — AI Language Tutor App
- URL: https://senthora.ai/
- Audience: buyers, teams, and decision-makers
- Product surface: marketing site

## Style Foundations
- Visual style: structured, accessible, implementation-first
- Main font style: `font.family.primary=Nohemi`, `font.family.stack=Nohemi, Segoe UI, system-ui, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=normal`
- Typography scale: `font.size.xs=12px`, `font.size.sm=12.5px`, `font.size.md=13px`, `font.size.lg=14px`, `font.size.xl=14.5px`, `font.size.2xl=15px`, `font.size.3xl=16px`, `font.size.4xl=17.5px`
- Color palette: `color.text.primary=#eaeaf0`, `color.text.secondary=#c2bcd2`, `color.border.strong=#9a8afb`, `color.text.inverse=#a49db5`, `color.surface.base=#000000`, `color.surface.raised=#110f14`
- Spacing scale: `space.1=6px`, `space.2=7px`, `space.3=8px`, `space.4=9px`, `space.5=10px`, `space.6=12px`, `space.7=14px`, `space.8=16px`
- Radius/shadow/motion tokens: `radius.xs=14px`, `radius.sm=20px`, `radius.md=32px`, `radius.lg=100px` | `shadow.1=rgba(0, 0, 0, 0.45) 0px 12px 40px 0px`, `shadow.2=rgba(154, 138, 251, 0.4) 0px 0px 24px 0px`, `shadow.3=rgba(154, 138, 251, 0.12) 0px 0px 80px 0px` | `motion.duration.instant=300ms`, `motion.duration.fast=400ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
concise, confident, implementation-focused

## Rules: Do
- Use semantic tokens, not raw hex values in component guidance.
- Every component must define required states: default, hover, focus-visible, active, disabled, loading, error.
- Responsive behavior and edge-case handling should be specified for every component family.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and tokens.
3. Define component anatomy, variants, and interactions.
4. Add accessibility acceptance criteria.
5. Add anti-patterns and migration notes.
6. End with QA checklist.

## Required Output Structure
- Context and goals
- Design tokens and foundations
- Component-level rules (anatomy, variants, states, responsive behavior)
- Accessibility requirements and testable acceptance criteria
- Content and tone standards with examples
- Anti-patterns and prohibited implementations
- QA checklist

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Prefer system consistency over local visual exceptions.

<!-- TYPEUI_SH_MANAGED_END -->
