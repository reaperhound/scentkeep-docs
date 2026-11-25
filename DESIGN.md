---
name: Scentkeep
description: "A tactile Sakuga-inspired system for a desktop fragrance journal website."
colors:
  paper: "#fff"
  paper-2: "#f4f3fc"
  paper-3: "#e9e7ff"
  ink: "#1d1a4a"
  ink-2: "#3d386b"
  muted: "#625d84"
  rule: "#dcdaf0"
  rule-2: "#b8b3e3"
  accent: "#6554c0"
  primary: "#b8b3ff"
  focus: "#b42370"
  action: "#ff5fa8"
  pink: "#ffe1ef"
typography:
  display:
    fontFamily: "Nunito, 'Avenir Next', sans-serif"
    fontSize: "clamp(2.75rem, 5.9vw, 5rem)"
    fontWeight: 850
    lineHeight: 1.08
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Nunito, 'Avenir Next', sans-serif"
    fontSize: "clamp(2rem, 3.5vw, 3.2rem)"
    fontWeight: 850
    lineHeight: 1.08
    letterSpacing: "-.035em"
  guide-display:
    fontFamily: "Nunito, 'Avenir Next', sans-serif"
    fontSize: "clamp(2.5rem, 4.5vw, 3.7rem)"
    fontWeight: 850
    lineHeight: 1.08
    letterSpacing: "-.035em"
  title:
    fontFamily: "Nunito, 'Avenir Next', sans-serif"
    fontSize: "1.5rem"
    fontWeight: 850
    lineHeight: 1.25
    letterSpacing: "-.035em"
  body:
    fontFamily: "Nunito, 'Avenir Next', sans-serif"
    fontSize: "1rem"
    fontWeight: 550
    lineHeight: 1.65
  label:
    fontFamily: "Nunito, 'Avenir Next', sans-serif"
    fontSize: ".9375rem"
    fontWeight: 750
    lineHeight: 1.65
  code:
    fontFamily: "ui-monospace, monospace"
    fontSize: ".9375rem"
    fontWeight: 400
    lineHeight: 1.8
rounded:
  tab: "10px"
  field: "12px"
  button: "13px"
  card: "16px"
spacing:
  3xs: "2px"
  2xs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "10px 22px"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "10px 22px"
  search-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "10px 14px"
  guide-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  feature-tab:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tab}"
    padding: "7px 18px"
  feature-tab-selected:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tab}"
    padding: "7px 18px"
  guide-note:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "{spacing.lg}"
---

# Design System: Scentkeep

## Overview

**Creative North Star: "The Sakuga Collection Playground"**

Scentkeep adopts the user-pinned Sakuga VFX language: white and lilac stages, deep violet outlines, rounded Nunito lettering and springy controls. The mood is approachable and tactile. Real desktop application captures supply the product imagery.

Outlined panels organize product demonstrations and documentation. Play concentrates in deliberate control feedback: squash, overshoot and drawn impact effects. Guide reading surfaces keep the same palette and shapes with a calmer, legible article rhythm.

**Key Characteristics:**

- White and lilac surfaces with deep violet ink.
- Bold rounded type and softly rounded outlined controls.
- Real application captures inside restrained frames.
- Squash and overshoot with reduced-motion support.

## Colors

Lavender actions and violet ink anchor white, lilac and soft pink stages. Frontmatter values are normative; repeated CSS aliases are consolidated here.

### Primary

- **Primary Lavender** (`primary`): action fills, selected demonstration tabs and structural control shadows.
- **Violet Accent** (`accent`): emphasized heading words, links, icons and step numbers.

### Secondary

- **Interaction Pink** (`action`): drawn Sakuga effects.
- **Soft Pink Stage** (`pink`): the secondary feature screenshot surround.
- **Focus Berry** (`focus`): keyboard focus and the input caret.

### Neutral

- **White Paper** (`paper`): page, cards and unselected controls.
- **Lilac Paper** (`paper-2`): quiet panels, guide sections and screenshot surrounds.
- **Lavender Paper** (`paper-3`): selected guide links and download panel.
- **Deep Violet Ink** (`ink`): headings, body and strong outlines.
- **Secondary Violet Ink** (`ink-2`): introductory and article copy.
- **Muted Violet** (`muted`): supporting copy and metadata.
- **Pale Rule** (`rule`): dividers and quiet outlines.
- **Strong Lilac Rule** (`rule-2`): screenshot stage, notes and selected guide navigation outlines.

**The Outlined Action Rule.** Use deep ink outlines and lavender fills to identify primary actions; pale rules delimit reading and image surfaces.

## Typography

**Display Font:** Nunito (Avenir Next, sans-serif fallback).
**Body Font:** Nunito (same fallback).
**Label/Mono Font:** Nunito for labels; ui-monospace, monospace for literal prompts and code.

The variable Nunito face gives headings and controls a rounded, energetic voice. Body copy remains substantial, while weight and size create hierarchy within one family.

### Hierarchy

- **Display:** frontmatter `display`, homepage headline. Medium screens use 3.5rem; phones use a clamp from 2.65rem to 4rem.
- **Headline:** frontmatter `headline`, homepage section headings. Guide section headings use the smaller implemented clamp from 1.7rem to 2.2rem.
- **Guide display:** frontmatter `guide-display`, article title; tablet clamp reduces to 2.4rem–3.5rem, then 2.5rem on phones.
- **Title:** frontmatter `title`, cards and next-guide headings. Guide cards use 1.375rem; feature stories use 1.7rem.
- **Body:** frontmatter `body`. Guide introduction measure is 65ch; article paragraphs cap at 70ch.
- **Label:** frontmatter `label`, sentence-case navigation. Strong controls use weight 800–850; metadata commonly uses .8125rem.

**The Rounded Voice Rule.** Use Nunito throughout the interface; distinguish hierarchy through weight, size and spacing rather than a second display face.

## Layout

The centered container caps at 1280px including padding. Gutters step from 48px to 28px below 60rem, then 20px below 40rem. Main section spacing steps from 100px to 76px to 64px; compact section spacing from 64px to 48px to 40px. The reusable component rhythm emphasizes 16px, 24px, 32px and 48px.

Product stories use paired columns; capabilities and guide cards use three columns. Guide pages pair a sticky 220px index with a flexible reading column and 48px gap. At 70rem the index becomes 190px with a 32px gap. Below 60rem guide cards become two columns, homepage navigation uses a toggle panel, and the article index moves above the reading column in three columns. Below 40rem content grids stack and guide navigation uses two columns. The sticky header changes from 82px to 74px on phones.

## Elevation & Depth

Flat tonal panels coexist with graphic control extrusion. The offset shadows belong to the explicitly pinned Sakuga world and communicate tactile interaction.

### Shadow Vocabulary

- **Control rest:** `4px 5px 0 var(--color-control-shadow)`.
- **Control hover:** `5px 6px 0 var(--color-control-shadow)`.
- **Control press:** `1px 2px 0 var(--color-control-shadow)`.
- **Selected tab:** `2px 3px 0 var(--color-control-shadow)`.
- **Search field:** `3px 4px 0 var(--color-control-shadow)`.

**The Tactile Control Rule.** Reserve hard lavender offset shadows for interactive controls and selected tabs. Reading cards and article surfaces remain flat.

## Shapes

Soft rectangular silhouettes dominate. Cards and screenshot stages use the card radius; fields, article notes and code use the field radius; tabs and guide navigation use the tab radius. Actions use their dedicated button radius. Nested screenshots have smaller corners. Quiet outlines are typically 1.5px, action outlines 2.5px and selected tabs 2px. Outlines provide hierarchy without ambient blur.

## Components

### Buttons

Tactile lavender actions have a white secondary counterpart. Both share an ink outline, heavy rounded type, button radius, 48px minimum height and the frontmatter padding. Header controls are more compact. Hover lightens the fill to the implemented lavender tint and extends the shadow; active compresses the extrusion. The global focus ring is 2px berry with 5px offset. Copy controls reuse this family.

### Cards / Containers

Guide cards are flat white outlined surfaces with card radius and 24px padding. Hover changes the outline to accent violet and surface to almost-white lilac. Product story cards clip screenshot surrounds within rounded outlines. Reading notes and local contents use lilac paper and smaller radii.

### Inputs / Fields

Search uses white paper, a 2px ink outline, field radius and frontmatter padding. Focus within adds a 3px berry ring with 4px offset; the inner input delegates focus treatment to its wrapper. Placeholder text uses muted violet. Error and disabled visual treatments are not established by the shipped site.

### Navigation

The sticky white masthead has a pale bottom rule and bold sentence-case links. Hover uses accent violet. The homepage mobile menu is a rounded ink-outlined panel. Guide navigation is a native disclosure, expanded on desktop and collapsed by the script below 60rem. Its compact summary identifies the current page, uses a 48px minimum target and pale lilac rounded frame, and remains natively operable without JavaScript (open by default). Documentation links use rounded rows; the current page has lavender paper, a strong lilac outline and heavy ink type. Preserve semantic `aria-current` and tab `aria-selected` states.

### Application stage and tabs

A rounded outlined lilac stage frames a real application capture with a white toolbar and footer. Unselected tabs have white fills and quiet outlines; selected tabs use primary lavender, ink outlines and a small offset shadow. On phones, the toolbar stacks and tabs divide available width. The captured app is product evidence, not a source of website tokens.

### Interaction feedback

The shipped easing is cubic-bezier(.16,1,.3,1). Button press squashes over 110ms, primary release overshoots over 420ms, and other supported releases settle over 290ms. Primary clicks add drawn ticks, a puff and shards via SakugaFX; other supported controls use lighter ticks. Animations cancel when hidden and are suppressed for reduced motion. CSS state transitions are generally 180ms. Sidecar previews retain CSS states; runtime motion still requires the website engine.

## Do's and Don'ts

### Do:

- **Do** use the pinned Sakuga palette, rounded Nunito hierarchy and outlined controls together.
- **Do** use real Scentkeep application captures for product screenshots.
- **Do** preserve visible focus, semantic selected/current states and reduced-motion behavior.
- **Do** keep long guide paragraphs near the implemented 65–70ch reading measure.

### Don't:

- **Don't** restore the superseded editorial visual direction.
- **Don't** make every surface bounce; feedback belongs to the implemented controls.
- **Don't** replace real product screenshots with generated application interfaces.
