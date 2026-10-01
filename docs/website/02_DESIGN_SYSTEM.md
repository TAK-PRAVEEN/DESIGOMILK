# DESIGO® Design System — v0.1

Implemented in `web/src/app/globals.css` (CSS custom properties) and `web/src/lib/tokens.ts`.

## 1. Principles

1. **The bottle is the hero.** Everything else gives it space, light and context.
2. **Every effect must earn its place.** Motion is slow, physical and caused by the user (scroll, pointer, drag).
3. **A different world for each chapter, one family overall.** We change the environment between chapters,
   but keep the type, spacing, line weight and motion curves the same, so the styles never become a collage.
4. **Honest by design.** Demo data is labelled. Unverified claims never ship. 2D images are never shown as fake 3D.

## 2. Colour

Brand-derived: the DESIGO wordmark is deep green on white (lineup card), the variant caps are green / red / amber / ivory.

| Token | Hex | Use |
|---|---|---|
| `--milk` | `#F7F4EC` | Default background, "milk white" |
| `--milk-2` | `#EFE9DC` | Raised surface on milk |
| `--paper` | `#EDE4D0` | Archival / heritage chapters |
| `--forest` | `#0B3B32` | Deep forest — brand dark, traceability, footer |
| `--forest-2` | `#0F4A3F` | Raised on forest |
| `--green` | `#1E7A68` | DESIGO green — links, accents |
| `--earth` | `#8C6A43` | Farm / soil accent |
| `--gold` | `#C8A96B` | Warm gold — heritage rules, ghee |
| `--charcoal` | `#171918` | Text on light; dark tech background |
| `--ink` | `#1E211F` | Body text |
| `--signal` | `#7FE0B8` | Data glow (technology chapter only) |

Variant worlds (taken from the bottle caps in the supplied renders):

| Variant | Code | Base | Deep | Light |
|---|---|---|---|---|
| MASTER 26 | V1+ | `#1F5C45` | `#0A2A20` | `#D9E8DF` |
| ROOT 14 | V1 | `#B3202A` | `#4A0A0F` | `#F3D9D6` |
| BASE 3 | V2 | `#E89A1C` | `#5A3304` | `#F8E4C2` |
| ESSENTIAL | V3 | `#CDB89A` | `#4D4130` | `#F4EDE2` |

Contrast: body text is always `--ink` on light or `--milk` on dark (≥ 7:1). Variant colours are for
environment, never for small text on similar backgrounds.

## 3. Typography

The new wordmark is a geometric, monoline sans with the wave-"E" mark. We pair it with an editorial serif.

| Role | Family | Notes |
|---|---|---|
| Display | **Fraunces** (variable, opsz + SOFT) | Editorial, warm, tactile; italics for heritage |
| Text / UI | **Inter Tight** | Neutral grotesk; uppercase tracking for labels |
| Data | **JetBrains Mono** | Bottle IDs, batch IDs, temperatures |

Scale (fluid, `clamp`): `--fs-mega` 9–17rem · `--fs-display` 4–9rem · `--fs-h1` 2.6–5rem · `--fs-h2` 1.8–3rem ·
`--fs-lead` 1.15–1.45rem · `--fs-body` 1rem · `--fs-label` .72rem (uppercase, +0.18em).

## 4. Space, radius, shadow, z

- Spacing: 4px base. `--s-1 4 · --s-2 8 · --s-3 12 · --s-4 16 · --s-6 24 · --s-8 32 · --s-12 48 · --s-16 64 · --s-24 96 · --s-32 128`
- Gutter: 16px mobile → 5vw desktop. Max text measure 62ch.
- Radius: `--r-0 0` (editorial default) · `--r-1 2px` · `--r-pill 999px` only for the cursor and tags. **No card-heavy UI.**
- Shadows: bottles get a *contact shadow* (blurred ellipse beneath) plus a soft ambient drop shadow. UI elements stay flat.
- Z: `base 0 · scene 10 · content 20 · nav 50 · cursor 90 · overlay 80 · noise 100(pointer-events:none)`

## 5. Motion

| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | Reveals |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | Scene transitions |
| `--ease-milk` | `cubic-bezier(.22,.9,.24,1)` | Bottle travel |
| Durations | 240 / 600 / 1200 ms | micro / reveal / scene |

Rules: no bounce, no overshoot; one primary motion per viewport; scroll-linked motion uses `scrub: 1` (lag gives weight).
`prefers-reduced-motion`: all scroll-scrubbed motion is disabled, content becomes a normal readable page, auto-rotation stops.

## 6. Breakpoints

`sm 360 · md 768 · lg 1024 · xl 1440 · 2xl 1920 · ultra 2560` — mobile is designed separately: the bottle is smaller and
centred, orbiting words become a vertical list, the horizontal journey becomes vertical cards, the trace map becomes a vertical line.

## 7. Components (demo)

`DesigoNav · DesigoCursor · SmoothScroll · ScrollProgress · AmbientBackground · Bottle (2.5D) · Bottle360Viewer ·
MilkFlow · JourneyTrack · FarmScene · BreedExplorer · TraceMap · QualityPanel · ProductScene · TechnologyGrid ·
GheeScene · TraceYourMilk · StoryTimeline · CTASection · AssetSlot (visible placeholder that names the missing asset)`

## 8. Buttons

Not pills. A DESIGO button is **an underlined label with an arrow that travels**:
`EXPLORE THE SOURCE ———→`. The primary has a 1px frame that draws itself on hover; magnetic offset ≤ 6px.
