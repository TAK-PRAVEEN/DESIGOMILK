# 29 · Wabi-Sabi — DESIGO® build plan

Status: design-style plan v0.1 · 2026-10-01 · documents only.
Shared rules: IA `01`, tokens `02`, motion `03`, assets `04`, copy only from `desigo.ts`. Pending claims stay marked; DESIGO® always with ®.

---

## 1. Style essence

Wabi-sabi is a Japanese aesthetic of **imperfect, impermanent and incomplete** beauty: rough clay, visible repair, weathered surfaces, muted earth tones, asymmetry, emptiness and the marks of time and hand. In design it means quiet layouts, natural textures, generous negative space and objects shown honestly with their flaws.

The client's reference image shows a **cracked clay bowl**, a **large faded kanji** in the background, a **red serif "WABI SABI" title** and **grey paper**. We keep the structure (a humble vessel, a big faded glyph, one red serif title, grey paper) and translate it to **Indian craft**: the **kulhad** (unglazed clay cup), the **matka** (clay water pot), the **bilona churn** (wooden churning stick and clay pot), lime-plastered walls and khadi cloth. The faded glyph becomes **Devanagari**.

Reference points:
1. **Leonard Koren, *Wabi-Sabi for Artists, Designers, Poets & Philosophers*** (1994): the canonical text.
2. **Indian studio pottery and Khurja / Kutch terracotta**: unglazed surfaces, finger marks, kiln blush.
3. **Aesop store interiors and Kinfolk / Cereal editorial**: the contemporary luxury translation of the same values.

## 2. Fit for DESIGO® — score 4.5 / 5

**Why it fits.** DESIGO®'s values (slow, from the source, hand-made Bilona ghee, returnable glass, breed rotation, honest records) are wabi-sabi values. Kulhad and matka are everyday Indian vessels for milk, chai and water, so the motifs belong to the product world rather than being imported. The style is calm and premium and leaves the bottle all the space it needs. It also suits the "Honest by design" principle: imperfection shown openly.

**Where it can fight.** (1) Food hygiene: cracks and dust near milk can read as "old" or "unclean". The crack belongs to the *vessel story*, never to the milk bottle. (2) Too much quiet can lose the "Apple launch" energy. Interactive moments (360 viewer, trace map) must stay crisp and confident. (3) Cultural care: avoid Japanese motifs and avoid treating Indian craft as a prop. Credit the potters.

**Recommendation.** A top-three candidate for the **whole site**. If not chosen as the lead, use it for Breeds, Heritage, Ghee and /about.

## 3. Art direction

### Palette ("matti and chuna": clay and lime)
| Token | Hex | Role |
|---|---|---|
| `--ws-paper` | `#D8D4CB` | Grey paper ground (from the reference) |
| `--ws-paper-2` | `#E6E2D9` | Lighter paper, panels |
| `--ws-lime` | `#F2EFE7` | Lime-plaster white; close to milk `#F7F4EC` |
| `--ws-kulhad` | `#A8603F` | Terracotta (unglazed kulhad) |
| `--ws-kulhad-deep` | `#6E3A24` | Fired clay shadow |
| `--ws-geru` | `#9E2B25` | Red-ochre serif title (the reference's red), close to ROOT `#B3202A` muted |
| `--ws-ash` | `#8A867E` | Faded glyph, secondary text on paper (decoration only) |
| `--ws-earth` | `#8C6A43` | Brand earth, rules |
| `--ws-forest` | `#0B3B32` | Brand anchor: nav, footer, links |
| `--ws-ink` | `#2A2723` | Body text (11.5:1 on `--ws-paper-2`, 10.0:1 on `--ws-paper`) |
| `--ws-ash-ink` | `#5E5950` | Muted text: captions, labels (4.7:1 on `--ws-paper`) |

Body text is `--ws-ink` on `--ws-paper-2` or `--ws-lime`. `--ws-geru` is for display sizes (≥ 32px), CTA labels (≥ 14px uppercase; 5.0:1 on `--ws-paper`) and the DEMO seal; never body text. `--ws-ash` is decoration only (2.5:1).

### Typography
- Display title (the red serif): **Cormorant Garamond** 500, uppercase, letter-spacing +0.08em, in `--ws-geru`. (Fraunces SOFT/WONK was considered as an alternative; Cormorant Garamond is the chosen face, see §12.2.)
- Faded glyph: **Tiro Devanagari Hindi** or **Noto Serif Devanagari** at 40–60vw, colour `--ws-ash` at 14–20% opacity, partially cropped off-canvas, with a subtle paper-grain mask so it looks printed and worn. Words (always meaningful, never decorative gibberish): **दूध** (milk) for the hero, **मिट्टी** (soil) for Origin, **नस्ल** (breed) for Breeds, **बिलोना** (bilona) for Ghee, **स्रोत** (source) for the final CTA. Have a native reader approve every glyph.
- Text and UI: **Inter Tight** 400, 16–17px, line-height 1.7; labels in uppercase +0.18em.
- Data: **JetBrains Mono** in `--ws-kulhad-deep`, small and quiet.

### Texture and imagery
- Grey paper: a real scanned handmade paper (Sanganer, Jaipur, is nearby and fitting), 3% visible fibre.
- Vessels: studio photographs of a **cracked kulhad**, a **matka** with a lime-wash rim, a **bilona churn** (wooden madhani in a clay pot). Shot on grey paper, soft north light, one hard edge shadow. These are commissioned photographs, never AI.
- Repair: where a crack appears, it may be shown **mended with a thin gold line** (`--gold #C8A96B`), the Indian echo of kintsugi. Use sparingly, as a metaphor for care.
- Farm photography: muted, slightly desaturated (−12%), warm, with natural grain. Never filtered to fake age.

### Iconography
Brush-ink icons (variable stroke, 1.5–2.5px, rounded) in `--ws-ink`, drawn by hand and vectorised. Imperfect, but consistent in weight.

### Grid
An **asymmetric 12-column** grid with large intentional emptiness. A typical composition: the vessel or bottle at columns 6–9 slightly below centre (the "settled" point, ~58% height), the red title at columns 2–5 top-left, the faded glyph bleeding off the right edge, body text at columns 2–5 low. Margins 8vw desktop, 20px mobile. One idea per screen.

## 4. Motion and interaction language
- **Tempo.** Slow and settled. Reveals 1000ms `cubic-bezier(.22,.9,.24,1)`; scenes 1400ms `cubic-bezier(.65,0,.35,1)`. Nothing snaps.
- **Scroll.** The faded glyph drifts at 0.3× scroll speed and slowly gains opacity (10% → 20%) as its chapter settles, like ink soaking into paper. Text "settles" (translateY 16px → 0 with opacity), never flies.
- **Cursor.** A soft 18px circle in `--ws-ink` at 60% opacity with a slight irregular edge (an SVG blob that morphs ±1px over 3s). Over links: it fills with `--ws-geru` at 12%. Over the bottle: a small brush-written "घुमाएँ / turn" label. Over vessels: none (let them be).
- **Hover.** Underlines drawn as a single brush stroke (SVG, 350ms). Buttons: label plus a brush arrow that lengthens 8px.
- **Transitions.** Paper-to-paper: a slow "wash" (a radial lime-white bloom from the centre, 1400ms) as if water has passed over the page.

### The bottle
The glass bottle is clean, clear and modern. That contrast is the point: **ancient vessel beside honest glass**. It stands on a lime-plaster plinth or a flat river stone on grey paper, with a soft contact shadow and one directional shadow. Idle float is reduced to ±4px over 8s (it should feel *placed*, not hovering). Tilt ±5°. In the hero, a **cracked kulhad** sits beside and slightly behind the bottle, out of focus (f/2 look via 6px blur). When 360 frames arrive, the viewer turns slowly (8°/s) with no inertia overshoot.

## 5. Variant worlds — four vessels, four earths

| Variant | Vessel companion | Ground | Glyph | Title colour |
|---|---|---|---|---|
| MASTER 26 (V1+) | A wooden bowl of dried herbs (26 *pending*) | Moss-grey paper `#C9CEC6` with `#1F5C45` cloth | **वन** (forest) | `#1F5C45` |
| ROOT 14 (V1) | A cracked kulhad with gold mend | Red-earth wash `#E7CFC8`, `#B3202A` muted to `#8E2A2A` title | **मूल** (root) | `#8E2A2A` |
| BASE 3 (V2) | A matka with lime rim | Warm sand `#E8DCC5`, `#E89A1C` toned to `#B8741A` | **आधार** (base / foundation) | `#7A4A12` (accessible amber) |
| ESSENTIAL (V3) | Nothing. Just the bottle on stone | Lime white `#F2EFE7` | **सरल** (simple) | `#4D4130` |

The glyphs translate each variant's *name idea*, not a claim. The info panel: V-CODE in mono, the name in the red serif, price (*pending*), descriptors (*pending*) as a short list with brush-dash bullets.

## 6. Page-by-page treatment

1. **Hero.** Grey paper. A faded **दूध** at 55vw on the right, cropped. The bottle settled at 58% height with a cracked kulhad behind it. Title in geru serif: "MILK FROM THE SOURCE." Below in Inter Tight: "Traceable milk from indigenous Indian cows." CTAs as brush-underlined labels.
2. **Bottle becomes the story.** Instead of orbiting, the six words appear **one per screen**, written vertically along the left margin like a stamp, with a single line of explanation. The ground warms from grey paper to lime white to deep forest by the end.
3. **Cow to bottle.** A horizontal scroll of seven **hand-made paper cards** (deckle edges, subtle) with brush-ink drawings of each station and a single real photo. The milk line is a brush stroke that thins and thickens.
4. **Farm.** Full-bleed muted farm photographs with lots of paper margin, and the glyph **मिट्टी**.
5. **Breeds.** The style's best page: one breed per screen, a portrait on grey paper, the breed name in the red serif, the region in small text, glyph **नस्ल**. Pending breeds read "Portrait awaiting confirmation".
6. **Traceability.** A brush-drawn route on paper (ink nodes like seal impressions). The pulse is a slow ink drop travelling the line (1.8s per hop). DEMO label as a red seal stamp ("DEMO · illustrative").
7. **Quality.** Clean lime-white page. The numeral "16" in large geru serif, the 16 parameters set as a calm two-column list. Values pending. Imperfection is not allowed here: crisp alignment signals rigour.
8. **Four milks.** §5 worlds, one per screen.
9. **Milk as material.** Milk poured from a matka into a kulhad (film, client-supplied) or a still photograph, with the canvas ribbon as fallback in milk white on lime.
10. **Heritage.** The reference composition in full: the cracked kulhad mended with gold, a large faded Devanagari word, a red serif title. Quote from the brand (approved copy only).
11. **Technology.** Contrast chapter: forest-green ground, crisp hairlines, seven verbs. "Tradition is the source. Technology protects the journey." Wabi-sabi here means *quiet* tech, not dashboards.
12. **Ghee.** **बिलोना**. The wooden churn in its clay pot, the ghee jar beside it on stone, three grades linked to their source milks. The second-best page of the style.
13. **Trace your milk.** A paper card with an input. The result unfolds as a vertical brush line with seal-stamp nodes, all DEMO.
14. **Story.** A paper ledger; only verified 2019 in production.
15. **Final CTA.** The glyph **स्रोत** fades in; "Know where your milk comes from." in geru; the page washes into forest for the footer.

### Inner pages
- **/milk**: four vessels in a row on one long paper strip.
- **/milk/[variant]**: vessel-world hero, 360 viewer on stone, facts, "Trace this bottle".
- **/ghee**: the bilona process in five quiet steps (photo + one line each).
- **/origin**: farm essays with photographs.
- **/trace**: the brush route full screen.
- **/technology**: forest ground, the seven verbs.
- **/about**: letter-like page and the potter / craft credits.
- **/reserve**: a calm form on lime paper; glass-return explained as a cycle drawn in one brush stroke.

## 7. Component variants
`PaperScene` (grey paper + grain) · `FadedGlyph` (Devanagari, scroll-linked opacity) · `SerifTitle` (geru) · `VesselCompanion` (photo layer, depth blur) · `SettledBottle` · `BrushUnderline` · `BrushRoute` (TraceMap) · `SealStamp` (DEMO / pending badge) · `PaperCardTrack` (JourneyTrack) · `BreedSheet` · `WashTransition` · `BlobCursor` · `AssetSlot` as an empty paper card with a pencil note naming the missing photo.

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens and type | Clay-and-lime palette, serif + Devanagari | Tokens, specimen, glyph list approved by a Hindi reader | Body ≥ 7:1; geru only ≥ 32px | Hindi proofreader | 3 |
| 2 | Shell | Asymmetric grid, nav, blob cursor, paper scene | Shell components | Paper texture ≤ 120 KB; cursor 60fps | Scanned Sanganer paper | 3 |
| 3 | Hero and bottle | Bottle + kulhad + दूध | Hero | Settled at 58%; kulhad never overlaps the label | Vessel photography | 4 |
| 4 | Bottle → story | One word per screen | Chapter 02 | Ground transition smooth, no banding | Copy | 2 |
| 5 | Cow → bottle | Paper-card journey | `PaperCardTrack` | Brush line synced; mobile vertical | B4, B8, ink drawings | 5 |
| 6 | Origin / farm | Muted documentary | Chapter 04 | Desaturation ≤ 12%; no fake ageing | B1, B2 | 2 |
| 7 | Breeds | Breed sheets | `BreedSheet` | Pending labels; one per screen | B3 | 3 |
| 8 | Trace map | Brush route + seals | `BrushRoute` | Keyboard nodes; DEMO seal | traceNodes | 4 |
| 9 | Quality | Crisp lime page | Chapter 07 | No texture, perfect alignment | Lab approval | 2 |
| 10 | Four worlds + 360 | Vessel worlds | Chapter 08 | Each glyph approved; viewer slow-turn | A, vessel photos | 5 |
| 11 | Heritage | The reference composition | Chapter 10 | Gold mend rendered from a real photo | Cracked kulhad photo | 3 |
| 12 | Technology | Quiet tech | Chapter 11 | Public vocabulary | none | 2 |
| 13 | Ghee | Bilona page | Chapter 12 | Prices pending; process-only language | Bilona churn photos, jar | 3 |
| 14 | Trace demo | Paper card lookup | Chapter 13 | DEMO seal always visible | demoProvider | 3 |
| 15 | /milk pages | Product pages | 5 routes | Viewer on stone; facts | A | 4 |
| 16 | /origin, /trace, /technology | Inner | 3 routes | Consistent quiet tone | B1–B8 | 4 |
| 17 | /about, /ghee, /reserve | Inner | 3 routes | Verified milestones; craft credits | Potter names / consent | 3 |
| 18 | Mobile | Vertical calm | Mobile layouts | Glyph 90vw, cropped; no horizontal scroll | none | 3 |
| 19 | A11y + reduced motion | Static calm | No drift, no wash | Glyphs `aria-hidden` with translation available in text | none | 2 |
| 20 | Perf, QA, handover | Ship | Reports, handover | Devanagari font subset ≤ 40 KB; LCP < 2.5s | all | 3 |

Total ≈ 63 days.

## 9. Assets needed from DESIGO®
- 360 sequences (A) and the vector wordmark (C).
- **Vessel photography** (commissioned): a cracked kulhad, the same kulhad mended (or digitally mended from that photo), a matka, the bilona churn in use, river stone / lime plinth, all on grey paper, consistent light.
- Names and consent of potters or craftspeople whose pieces are shown (for credits).
- A scanned sheet of handmade paper (Sanganer) at 600 dpi.
- Approval of each Devanagari word and its meaning.
- AI-generated images are backdrops and textures only, never vessels (see §12.7).

## 10. Performance, accessibility and mobile
- The faded glyph is live text (not an image), subset to the five or six words used. Decorative, so `aria-hidden="true"`, with its meaning in visible English nearby.
- Paper grain is one 512px tile (WebP) repeated, plus CSS noise, not a large image.
- Desaturated photos are graded at export, not with CSS filters (faster paint).
- Reduced motion: glyph static at 18%, no wash, no float.
- Mobile: the bottle at 50% viewport height, the kulhad hidden below 400px wide, title above, body below. One idea per screen holds on mobile naturally.

## 11. Risks, guardrails and premium

**Premium guardrails**
1. **Imperfection lives in vessels and paper, never in the milk, the bottle, the label or the lab.**
2. No Japanese motifs (kanji, enso, bonsai, tatami). Indian craft only, credited.
3. One red serif title per screen; one faded glyph per chapter.
4. Every Devanagari word is meaningful, approved and spelled correctly.
5. Photography is real and commissioned; no AI vessels, no stock pottery.
6. Desaturation is gentle. Milk is always rendered a fresh, clean white.
7. Interactive parts (viewer, map, form) are crisp and precise. Quiet does not mean vague.
8. No spiritual or health language ("pure", "sacred", "healing" are out). Describe craft and process only.

**Risks**: an "old" or "dusty" association with milk, appropriation of craft, lost energy. Mitigation: crisp glass and lab moments, credited makers, the 360 viewer and trace map as confident interactive peaks.

**Best used for:** the whole site as a calm luxury-craft direction, and especially Breeds, Heritage, Ghee (bilona) and /about.

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: art direction was complete, but the doc had no image prompts, no radius/shadow/spacing scale, no muted-text, pending or DEMO tokens and no component states. All added. Fixes: display font fixed to Cormorant Garamond (Fraunces dropped as alternative); geru allowed for CTA labels ≥ 14 px (5.0:1 on paper); `--ws-ash` kept decorative only (2.5:1) and a new muted `#5E5950` added; AI prompts never include vessels (§3 says vessels are commissioned photographs), which overrides the kulhad in the shared G-set prompt.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#9E2B25` | Geru red-ochre: the one red serif title per screen, primary CTA label + brush underline, DEMO seal | 5.0:1 on bg; geru `--ws-geru`: red serif titles and CTA labels ≥ 14 px uppercase only; never body text |
| Primary ink | --c-on-primary | `#F2EFE7` | Lime white on a geru seal fill | 6.5:1 on primary |
| Secondary | --c-secondary | `#0B3B32` | Forest: nav links, body links, footer and Technology ground | 8.4:1 on bg |
| Accent | --c-accent | `#6E3A24` | Kulhad-deep: JetBrains Mono data, active trace node, chapter numbers | 6.2:1 on bg; kulhad-deep `--ws-kulhad-deep`: data, active marks; terracotta `#A8603F` (3.2:1) stays illustration-only |
| Background | --c-bg | `#D8D4CB` | Grey Sanganer paper (`--ws-paper`) | — |
| Surface | --c-surface | `#E6E2D9` | Lighter paper panels and cards (`--ws-paper-2`); `#F2EFE7` lime for raised forms | text on surface 11.5:1 |
| Text | --c-text | `#2A2723` | Body ink (`--ws-ink`) | 10.0:1 on bg |
| Muted text | --c-text-muted | `#5E5950` | Captions, labels, region names (new token `--ws-ash-ink`) | 4.7:1 on bg, 5.4:1 on surface |
| Line | --c-line | `rgba(42,39,35,.18)` | Hairlines, card edges, brush dividers at 40% | decorative (non-text) |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#1F5C45` / `#6B4C2A` / `#9E2B25` | Verified dot / pending dotted underline + earth-ink stamp / geru DEMO seal | 5.3 / 5.3 / 5.0 :1 on `#D8D4CB` |

Focus ring: `--c-focus` `#0B3B32` (8.4:1 on bg), 2 px solid, 3 px offset.

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Base | Deep | Light | Treatment in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#C9CEC6` | Moss-grey paper ground, forest cloth, title `#1F5C45`, glyph वन; herb bowl photo (26 herbs *pending*) |
| ROOT 14 (V1, red cap) | `#8E2A2A` | `#4A0A0F` | `#E7CFC8` | Red-earth wash, title `#8E2A2A` (muted ROOT red), glyph मूल; gold-mended kulhad photo |
| BASE 3 (V2, amber cap) | `#B8741A` | `#7A4A12` | `#E8DCC5` | Warm sand ground, title `#7A4A12` (accessible amber), glyph आधार; matka photo |
| ESSENTIAL (V3, ivory cap) | `#CDB89A` | `#4D4130` | `#F2EFE7` | Lime-white ground, title `#4D4130`, glyph सरल; bottle on stone only |

Dark-chapter inversion: Technology chapter and footer use forest `#0B3B32` as `--c-bg`; text becomes lime `#F2EFE7` (10.8:1), muted `#B9B4A8`, line `rgba(242,239,231,.18)`; geru titles switch to lime (geru is never used on forest); the logo loop renders white; paper grain off.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Cormorant Garamond | `@fontsource/cormorant-garamond` (Google Fonts) | 500 (600 below 40 px) | clamp(3rem, 1.6rem + 6vw, 7.5rem) | 0.95 | +0.08em | UPPERCASE |
| Headline H1–H2 | Cormorant Garamond | `@fontsource/cormorant-garamond` (Google Fonts) | 500, 500 italic for quotes | H1 clamp(2.4rem, 1.6rem + 3vw, 4.5rem) · H2 clamp(1.75rem, 1.3rem + 1.6vw, 2.75rem) | 1.05 | +0.04em | Title case |
| Body | Inter Tight | `@fontsource-variable/inter-tight` (Google Fonts) | 400 / 500 | clamp(1rem, 0.96rem + 0.2vw, 1.0625rem) | 1.7 | 0 | Sentence |
| Label / UI | Inter Tight | `@fontsource-variable/inter-tight` (Google Fonts) | 500 / 600 | 0.75rem (12 px) | 1.4 | +0.18em | UPPERCASE |
| Data / mono | JetBrains Mono | `@fontsource-variable/jetbrains-mono` (Google Fonts) | 400 | 0.8125rem (13 px) | 1.5 | +0.02em | As data |
| Devanagari (optional) | Tiro Devanagari Hindi | `@fontsource/tiro-devanagari-hindi` (Google Fonts) | 400 (glyphs); body fallback Noto Serif Devanagari 400 | Faded glyph clamp(12rem, 50vw, 60vw); inline 1.1em | 1 | 0 | — |

Licence: all fonts are SIL Open Font License 1.1 (OFL), self-hosted via Fontsource; subset Latin + Latin-ext (Devanagari subset only where used). Devanagari glyph font subset to the six approved words (≤ 40 KB). Pairing rationale: a calligraphic high-contrast serif for the red title against a neutral grotesk keeps the page quiet; Tiro's brush-like Devanagari carries the faded glyph.

### 12.3 Layout & surfaces
- **Grid:** asymmetric 12 columns, gutter 24 px (16 px mobile), margins 8vw desktop / 20 px mobile, content max-width 1440 px, text measure 58ch; bottle at columns 6–9, ~58% height; red title columns 2–5 top; glyph bleeds off the right edge
- **Spacing scale:** 4 px base: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 192 (the 192 'ma' gap is used between chapter blocks)
- **Radius scale:** sm 2 px (inputs) · md 4 px (paper cards, with deckle mask) · lg 999 px only for seal stamps and the cursor
- **Border style:** 1 px `rgba(42,39,35,.18)` hairline, or a hand-brushed SVG stroke (1.5–3 px variable) for emphasis; never double borders
- **Shadow / elevation:** UI is flat (paper on paper: 1 px top light edge `rgba(255,255,255,.5)` only). Bottle: contact ellipse + one directional shadow to the lower right (see JSON `shadow.bottle`)
- **Texture / overlay:** scanned Sanganer paper tile 512 px WebP at 3% (multiply) + CSS noise; faded Devanagari glyph as live text at 14–20% opacity, `aria-hidden`; Quality chapter has no texture

### 12.4 Components
All interactive components share: focus ring `--c-focus` 2 px / 3 px offset · touch targets ≥ 44 px · disabled = 40% opacity, no motion, `aria-disabled` (unless stated) · hover effects only on `(hover:hover)` devices · motion from §12.6.

- **Primary button** — Geru label (Inter Tight 600, 13 px, +0.18em, uppercase) over a hand-brushed 2 px SVG underline with a brush arrow →; 48 px tall, padding 14 px 0, no box and no pill (brand rule). **States:** default geru label + brush underline · hover underline re-brushes left→right (350 ms) and the arrow lengthens 8 px; magnetic offset ≤ 4 px · focus-visible 2 px `#0B3B32` ring, 3 px offset · active label sinks 1 px, underline darkens to `#6E3A24` · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading arrow replaced by three ink dots filling in turn (900 ms loop), `aria-busy="true"`. **Motion:** `--dur-micro` 240 ms with `--ease-settle`; no bounce. **A11y:** native `<a>`/`<button>`, hit area ≥ 44 px, label ≥ 4.5:1.
- **Secondary button** — Ink `#2A2723` label, same type, 1 px hairline underline and a short arrow; 48 px tall. **States:** default ink label + hairline · hover hairline becomes a brush stroke (350 ms), arrow +6 px · focus-visible 2 px `#0B3B32` ring, 3 px offset · active label sinks 1 px · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading ink-dot loader as primary. **Motion:** 240 ms `--ease-settle`. **A11y:** native `<a>`/`<button>`, hit area ≥ 44 px, label ≥ 4.5:1.
- **Text / arrow link** — Inline body link in forest `#0B3B32`, 1 px underline at 0.2em offset; arrow links ('Trace this bottle →') add a brush arrow. **States:** default forest + hairline · hover underline replaced by a single brush stroke (SVG, 350 ms) · focus-visible 2 px `#0B3B32` ring, 3 px offset · active colour shifts to geru · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading n/a (static element). **Motion:** 350 ms stroke draw. **A11y:** underline always present (never colour alone); arrow is `aria-hidden`.
- **Icon button (incl. menu)** — 40 px visual / 44 px hit circle, 1.75 px brush-ink icon, no fill; menu icon = two uneven brush strokes that cross into an × when open. **States:** default ink icon on transparent · hover lime `#F2EFE7` wash blooms from the centre (240 ms) · focus-visible 2 px `#0B3B32` ring, 3 px offset · active scale 0.96 · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading n/a (static element). **Motion:** stroke morph 300 ms `--ease-settle`. **A11y:** `aria-label` required; 44×44 px hit area; menu button carries `aria-expanded` + `aria-controls`; Esc closes the menu and returns focus.
- **Navigation bar** (desktop + mobile menu) — 72 px bar: transparent over the hero, then paper `#D8D4CB` at 92% + 8 px backdrop blur after 80 px of scroll; links Inter Tight 500 13 px uppercase +0.14em in ink; RESERVE as a geru text button at the right. Mobile (< 768 px): logo + menu icon; the menu is a full-screen lime-paper sheet, links in Cormorant 2.25rem stacked, the faded glyph दूध behind at 12%. **States:** default ink links · hover brush underline draws under the link · focus-visible 2 px `#0B3B32` ring, 3 px offset · active current page marked by a short geru brush dash · disabled n/a · loading n/a. **Motion:** mobile sheet opens with the 600 ms wash bloom; links settle 16 px with 60 ms stagger. **A11y:** `<nav>` landmark after a skip link; logo is a link to `/` with `aria-label="DESIGO® home"`; the animated SVG is `aria-hidden`. **Logo:** The DESIGO® wordmark sits top-left (cap height 22 px desktop, 18 px mobile) and runs the brand's **black write / un-write loop** (charcoal `#171918` on light grounds, white `#FFFFFF` on dark grounds; the colour never changes during the loop). The loop pauses while the menu is open, when the tab is hidden, and under reduced motion (the full wordmark is shown static).
- **Cursor** — 18 px soft ink blob (`#2A2723` at 60%) with an irregular SVG edge morphing ±1 px over 3 s; labels in Inter Tight 500 11 px uppercase. **States:** default 18 px ink blob · hover grows to 36 px and fills with geru at 12% · ROTATE blob + brush-written label "घुमाएँ · turn" (over the bottle) · EXPLORE 56 px ink ring with "explore" · ENTER 28 px ring with a brush arrow → · VIEW 44 px lime disc with "view" · TRACE small geru seal circle with "trace". **Touch fallback:** no custom cursor; a tap leaves a 300 ms ink-spread ring at the touch point (decorative); the bottle shows a visible "Drag to turn" hint once. **A11y:** decorative (`aria-hidden`, `pointer-events:none`); off for coarse pointers and reduced motion, where the system cursor returns; never the only cue.
- **Card / panel / info block** — Hand-made paper card: `#E6E2D9` with a deckle-edge mask, 1 px line, radius 4 px, padding 32 px (24 px mobile), no shadow; heading in Cormorant 500, body Inter Tight. **States:** default flat paper · hover lifts 2 px and the paper darkens 2% · focus-visible 2 px `#0B3B32` ring, 3 px offset · active returns to rest · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading skeleton = pale ash bars `#C9C4BA`, no shimmer. **Motion:** reveal 1000 ms settle 16 px. **A11y:** real heading inside; one primary action per card; text never sits on texture below 4.5:1.
- **Badge / tag** — Seal-stamp badge, 22 px tall, Inter Tight 600 11 px uppercase +0.14em inside a 1.5 px stamped irregular outline, rotated −2°. **Pending verification**: earth-ink `#6B4C2A` stamp and a dotted 1 px underline on the claim text itself. **DEMO · not live data**: geru `#9E2B25` seal, always visible on trace map and Trace-your-milk. **States:** default stamped outline · hover none (static) · focus-visible 2 px `#0B3B32` ring, 3 px offset · active n/a · disabled n/a · loading n/a (static element). **Motion:** stamps press in once per session (scale 1.06 → 1, 160 ms). **A11y:** status is real text ("Pending verification", "DEMO · not live data"); colour and shape are never the only signal.
- **Input + form field (Trace-your-milk bottle ID)** — Paper field 56 px tall on lime `#F2EFE7`, no box: a 1 px ink line beneath; bottle ID in JetBrains Mono 18 px; label Inter Tight 12 px uppercase above; hint below ("The ID is printed on the cap"); the demo ID is prefilled; error = earth-ink text + brush ×. **States:** default hairline beneath · hover line thickens to 2 px · focus-visible 2 px `#0B3B32` ring, 3 px offset · active while typing the line turns geru · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading submit arrow becomes ink dots; result area reads "Reading the route…". **Motion:** result unfolds as a vertical brush line, 1000 ms. **A11y:** visible `<label>`, hint and error linked with `aria-describedby`, error shown as text + icon, `autocomplete=off`, `spellcheck=false`.
- **Divider / ornament** — One horizontal brush stroke (120–240 px, variable 1.5–3 px, ink at 40%) or a full 1 px hairline; ornament = a thin kintsugi-gold `#C8A96B` mend line, once per page at most. **States:** default static · hover none · focus-visible 2 px `#0B3B32` ring, 3 px offset · active n/a · disabled n/a · loading n/a (static element). **Motion:** brush stroke draws once on enter (600 ms). **A11y:** `aria-hidden` (decorative) or `role=separator` between landmark sections.
- **Section header** — Chapter number in JetBrains Mono 12 px ("03 —") in kulhad-deep, title in Cormorant 500 uppercase geru, one English line beneath; the chapter's faded Devanagari glyph sits behind, cropped off-canvas. **States:** default static · hover none · focus-visible 2 px `#0B3B32` ring, 3 px offset · active n/a · disabled n/a · loading n/a (static element). **Motion:** title settles 16 px over 1000 ms; glyph opacity 10% → 20% with scroll. **A11y:** real `<h2>`; the chapter number is read as "Chapter 03"; decorative glyphs `aria-hidden`.
- **Product info block** — Columns 9–12: V-code (mono 12 px), variant name in Cormorant 500 at H2 in the variant title colour, the `desigo.ts` line, price with a pending stamp (hidden in production), size (pending), descriptors as brush-dash bullets each with a dotted pending underline, then "Trace this bottle →". **States:** default static facts · hover a descriptor shows its source note in a small paper tooltip · focus-visible 2 px `#0B3B32` ring, 3 px offset · active n/a · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading skeleton bars. **Motion:** fact rows settle with 60 ms stagger. **A11y:** facts in a `<dl>`; pending values carry visually-hidden "(pending verification)"; price hidden in production until approved.
- **Bottle stage** — Bottle settled at 58% height on a lime-plaster plinth or a flat river stone, soft contact shadow + one directional shadow; a cracked kulhad photo behind at 6 px blur (never overlapping the label); the faded glyph behind both. **States:** default idle float ±4 px over 8 s · hover pointer tilt ±5° · focus-visible 2 px `#0B3B32` ring, 3 px offset · active drag turns the 360 viewer at up to 8°/s, no inertia overshoot · disabled n/a · loading static render + paper `AssetSlot` note "360 frames pending". **Motion:** `--ease-settle`; float pauses off-screen. **A11y:** Bottle360Viewer is `role=img` with an `aria-label`; ←/→ rotate 5°, Home resets; reduced motion stops idle float and auto-turn.
- **Trace node / timeline step** — Seal-impression node: 14 px ink circle that gains a geru stamped centre when visited; nodes joined by a brush line that thins and thickens; node label Inter Tight 13 px + mono ID beneath. **States:** default unvisited at 30% ink · hover node ring expands 4 px and the label darkens · focus-visible 2 px `#0B3B32` ring, 3 px offset · active an ink drop travels to the node (1800 ms per hop) and the panel opens · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading nodes fade in one by one. **Motion:** hop 1800 ms `--ease-inout`. **A11y:** route is an ordered list `<ol>`; each node a `<button>` opening its panel; `aria-current="step"` on the active node.

### 12.5 Iconography & illustration
- **Icon style:** hand-drawn brush-ink icons, variable stroke 1.5–2.5 px, rounded caps and joins, no fill, 24 px grid, ink `#2A2723`; vectorised from real brush drawings, consistent weight
- **Illustration technique:** brush-ink drawings of the seven journey stations on paper; one real photograph per station; kintsugi-gold mend lines only as a care metaphor
- **Photo treatment:** vessels (kulhad, matka, bilona) are commissioned studio photographs on grey paper, soft north light, one hard edge shadow, never AI; farm photos −12% saturation, warm, natural grain, graded at export; framed with a 24 px paper mat

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | UI micro-interactions |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | scenes, wash transition, trace hops |
| `--ease-settle` | `cubic-bezier(.22,.9,.24,1)` | text settling, bottle placement (signature) |
| `--dur-micro` | 240 ms | hover, press, icon morph |
| `--dur-reveal` | 1000 ms | text settle (translateY 16 px → 0 + opacity) |
| `--dur-scene` | 1400 ms | paper-to-paper wash |
| `--float` | ±4 px / 8000 ms | bottle idle (placed, not hovering) |
| `--glyph-drift` | 0.3× scroll, opacity 10% → 20% | faded Devanagari glyph |
| `--hop` | 1800 ms | ink drop per trace node |
| `--scrub` | 1 | GSAP ScrollTrigger scrub lag |

- **Signature transition:** the wash: a radial lime-white bloom from the centre over 1400 ms, as if water passed over the page
- **Scroll behaviour:** slow and settled; one primary motion per viewport; text settles, never flies; no snapping
- **Reduced-motion fallback:** glyph static at 18%, no wash (200 ms cross-fade), no float, no drift; trace nodes appear complete

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

**Tail prompt (append to every prompt below):** _soft north window light, muted clay-and-lime palette of grey paper #D8D4CB, lime white #F2EFE7, terracotta #A8603F and ink #2A2723, gentle handmade-paper grain, quiet wabi-sabi restraint, vast negative space, editorial, calm, high-end, no text, no watermark, no logo, no letters_

**Base negative prompt (add to every row's negative):** _text, letters, words, numbers, typography, logo, watermark, signature, label, packaging, milk bottle, glass bottle, ghee jar, Holstein cow, Jersey cow, cartoon mascot, comic pose, religious symbols, deity, faces in close-up, dirt, stains, clutter, oversaturated, plastic CGI look_

| # | File path (web/public/desigo/styles/<slug>/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| WS1 | `web/public/desigo/styles/wabi-sabi/hero.png` | 3200×2000 (16:10) | No | Sheet of grey handmade Sanganer cotton paper filling the frame, visible soft fibres, a faint diagonal fold, soft north side light falling from the left, one long soft shadow at the lower right, very large empty area at centre and left for a bottle and live type | kanji, Japanese motifs, enso, pottery, vessels, objects, calligraphy | Hero (ch. 01) desktop |
| WS2 | `web/public/desigo/styles/wabi-sabi/hero-portrait.png` | 1400×2400 (7:12) | No | Same grey handmade paper composition in portrait, light from upper left, fibres visible, soft shadow pooling at the bottom edge, empty upper two-thirds | kanji, Japanese motifs, pottery, vessels, objects | Hero mobile |
| WS3 | `web/public/desigo/styles/wabi-sabi/world-master-26.png` | 3200×2000 + 1400×2400 | No | Moss-grey handmade paper #C9CEC6 with a folded deep-green #1F5C45 khadi cloth lying along the right edge, soft natural folds, quiet light, empty centre | herbs, bowls, pottery, bright green, objects at centre | MASTER 26 world (ch. 08, /milk/master-26) |
| WS4 | `web/public/desigo/styles/wabi-sabi/world-root-14.png` | 3200×2000 + 1400×2400 | No | Red-earth lime wash #E7CFC8 on a rough plaster wall, faint trowel marks, a soft muted-red #8E2A2A shadow band low on the right, empty centre | pottery, cracks on centre, saturated red, blood-like stains | ROOT 14 world |
| WS5 | `web/public/desigo/styles/wabi-sabi/world-base-3.png` | 3200×2000 + 1400×2400 | No | Warm sand-coloured handmade paper #E8DCC5 with a soft amber #B8741A light patch at the right as from a low sun, gentle fibre texture, empty centre | orange cast, wheat, pottery, objects | BASE 3 world |
| WS6 | `web/public/desigo/styles/wabi-sabi/world-essential.png` | 3200×2000 + 1400×2400 | No | Lime-plaster white #F2EFE7 wall meeting a pale floor, a single flat grey river stone plinth at centre-bottom, soft skylight, nothing else | objects, decorations, colour | ESSENTIAL world; bottle stage plinth |
| WS7 | `web/public/desigo/styles/wabi-sabi/trace-brush-route.png` | 4000×1600, transparent | Yes (real alpha) | One continuous hand-brushed ink line in warm black #2A2723 meandering left to right with eight small round ink seal impressions along it, line thickening and thinning naturally, isolated on transparent background | map labels, numbers, arrows, colour fills | Traceability (ch. 06), /trace, Trace-your-milk result |
| WS8 | `web/public/desigo/styles/wabi-sabi/journey-ink-cow.png` | 1600×1600, transparent | Yes (real alpha) | Single loose brush-ink drawing of an Indian zebu cow grazing, visible hump, dewlap and long ears, calm and respectful, few confident strokes, warm black ink, isolated on transparent background | Holstein, spots, cartoon eyes, smiling, mascot | Journey station 1 (ch. 03); breed intro |
| WS9 | `web/public/desigo/styles/wabi-sabi/paper-grain.png` | 1024×1024, seamless | No | Seamless tileable macro scan of grey handmade cotton rag paper, soft fibres, even flat lighting, no shadows, no folds | seams, vignette, stains | Page texture sitewide (3% multiply) |
| WS10 | `web/public/desigo/styles/wabi-sabi/deckle-card.png` | 1600×1200, transparent | Yes (real alpha) | A single rectangular card of light grey handmade paper #E6E2D9 with soft torn deckle edges on all sides, flat top-down, isolated on transparent background | writing, folds, shadow box | Card / AssetSlot paper card |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/29_wabi-sabi.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/wabi-sabi/
- [ ] Every Devanagari glyph approved by a native reader; glyph font subset ≤ 40 KB
- [ ] No vessel (kulhad, matka, bilona) is AI-generated: commissioned photographs only, potters credited
- [ ] Geru appears only as one title per screen, CTA labels and the DEMO seal
