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
| `--ws-ink` | `#2A2723` | Body text (≥ 9:1 on `--ws-paper-2`) |

Body text is `--ws-ink` on `--ws-paper-2` or `--ws-lime`. `--ws-geru` is for display sizes (≥ 32px) only.

### Typography
- Display title (the red serif): **Cormorant Garamond** 500, uppercase, letter-spacing +0.08em, in `--ws-geru`. As an alternative, **Fraunces** 400 with SOFT 100 and WONK on gives a slightly hand-made serif that bridges to the master system.
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
