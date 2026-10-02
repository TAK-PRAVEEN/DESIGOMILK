# 15 — Luxury Typography · DESIGO® build plan

**Fit score: 5 / 5** · **Best used for:** the whole site's backbone, especially chapter 01 Hero, chapter 08 *The four
milks* and every /milk/[variant] page. This is the closest single style to the "Apple product launch × luxury
editorial" brief.

---

## 1. Style essence

Luxury typography lets letterforms do the work that imagery usually does. It relies on high-contrast serifs at huge
sizes, extreme scale jumps (a 280 px numeral beside 12 px tracked capitals), disciplined negative space, very few
colours and perfect spacing. The type is the set and the product is the single actor on it. Scarcity is the signal:
fewer words, more air, exact kerning.

Three reference points:
1. **Fashion-house mastheads and fragrance launches** (the Didone tradition of Harper's Bazaar under Brodovitch):
   hairline serifs and air.
2. **Apple product pages**: one object, one sentence, one number, and a scroll that reveals them in sequence.
3. **Indian luxury print**: Sabyasachi's monograph-style lookbooks and the typographic restraint of Indian
   heritage-hotel identities, which show that Indian luxury can be quiet.

## 2. Why it fits DESIGO®

- **The product names are typographic objects.** MASTER **26**, ROOT **14**, BASE **3**, ESSENTIAL **E**. The
  numerals are begging to be set at 40vh. The `numeral` field already exists in `desigo.ts`.
- **It needs no unverified imagery.** While farm photography and 360 frames are pending, typography plus a single
  render produces a finished, premium page today.
- **It respects honesty.** Luxury typography tolerates few words, which suits a brand that may only say what is verified.
- **Pricing feels considered**, and premium positioning is set by layout rather than adjectives (no "best", no "finest").

**Where it could fight:** too cold for an agricultural, heritage brand. The remedy is Fraunces' SOFT axis, warm
milk-white paper (never pure #FFF) and real photography in the chapters that need warmth (04, 05, 10).

## 3. Art direction

### Palette: monochrome plus one colour per scene
| Token | Hex | Use |
|---|---|---|
| `--milk` | `#F7F4EC` | Canvas |
| `--milk-2` | `#EFE9DC` | Section banding |
| `--ink` | `#1E211F` | Body |
| `--charcoal` | `#171918` | Display type on light |
| `--forest` | `#0B3B32` | Dark canvas, footer |
| `--gold` | `#C8A96B` | Hairline rules only (0.5 px), never text below 24 px |
| `--green` | `#1E7A68` | Links, focus ring |
| `--hair` | `rgba(23,25,24,.14)` | Rules, dividers |

Variant scene colours (background plus display numeral):
| Variant | Background | Numeral | Text |
|---|---|---|---|
| MASTER 26 | `#0A2A20` | `#D9E8DF` at 92% | `#F7F4EC` |
| ROOT 14 | `#4A0A0F` | `#F3D9D6` | `#F7F4EC` |
| BASE 3 | `#F8E4C2` | `#5A3304` | `#1E211F` |
| ESSENTIAL | `#F4EDE2` | `#4D4130` | `#1E211F` |

### Typography
- **Display:** *Bodoni Moda* (OFL, variable opsz 6–96, weight 400–900) for the numerals and the four product names.
  Use the 96 opsz cut at display size so the hairlines hold up.
- **Editorial display:** *Fraunces* (brand display) for sentences and italics, at opsz 144, SOFT 30, weight 300.
  Bodoni names things and Fraunces speaks.
- **Labels and UI:** *Inter Tight* 500, 11–12 px, uppercase, tracking +0.22em.
- **Data:** *JetBrains Mono* 12 px for codes ("DESIGO® V1+").
- **Devanagari:** *Tiro Devanagari Hindi* (OFL), a high-contrast companion to Bodoni for any Hindi line.

Scale (fluid): numerals `clamp(12rem, 38vw, 34rem)`, line-height 0.78, tracking −0.04em · product name
`clamp(3rem, 8vw, 9rem)` tracking −0.02em · sentence `clamp(1.8rem, 3.4vw, 3.6rem)` Fraunces italic ·
label .72rem / +0.22em · body 1rem/1.65, measure 52ch (narrower than the system's 62ch).

Typographic rules: hanging punctuation, `font-feature-settings: "lnum", "kern", "liga"`, optical margin alignment by
hand on headlines, and ® set as a superscript at 0.42em with +0.04em offset everywhere ("DESIGO®"). Use non-breaking
spaces in "MASTER 26", "ROOT 14", "BASE 3" so a name never splits across lines.

### Texture, imagery, iconography
- Texture: none except a 2% grain on milk white. Luxury is *clean*.
- Imagery: the bottle render, and later full-bleed real photos at most once per chapter, with a slow 1.04→1.0 scale.
- Icons: practically none. Arrows are typographic (→ set in Inter Tight). Hairline rules (0.5 px gold or 1 px hair)
  separate content.

### Grid
24-column grid on desktop (fine control for asymmetric type), 5vw margins, a 64 px baseline for display and 8 px for
text. Asymmetry is the default: numerals bleed off the left edge (`margin-left: -0.06em`), and information sits in
columns 17–23.

## 4. Motion and interaction language

- **Letter reveals:** headlines rise from a mask line by line (`translateY(100%) → 0`, 1200 ms, `cubic-bezier(.16,1,.3,1)`,
  80 ms stagger per line, never per letter for long text). Numerals scale from 1.08 to 1.0 with opacity 0 to 1 over 1600 ms.
- **Scroll:** one typographic event per viewport. Numerals may parallax at 0.85× against the bottle at 1×, which
  creates depth with no 3D.
- **Variable-font motion:** Fraunces weight 300 → 400 and SOFT 30 → 60 as a section reaches centre (scrubbed), a
  subtle "breathing" of the type.
- **Hover:** the underline grows from 0 to 100% (240 ms) and the arrow travels 6 px. The primary button's 1 px frame
  draws clockwise (600 ms). Magnetic offset ≤ 6 px.
- **Cursor states:** default = 6 px charcoal dot · link = 40 px ring with mix-blend `difference` · drag (360) = ring
  with "DRAG" in 9 px tracked caps · view = ring with "VIEW" · text = native caret · disabled = 30% ring.
- **Transitions:** cross-fade through milk white (600 ms) and a numeral handoff between /milk and /milk/[variant]
  (shared-element transition via View Transitions API, fallback fade).

## 5. The hero bottle and the four variants

The bottle stands **in front of the numeral**, overlapping it by about 20% of the numeral's width. The layering
(type, bottle, contact shadow) creates the depth.

- Float ±10 px over 6 s, pointer tilt ±8°, sheen follows the cursor. Contact shadow: blurred ellipse at 18% charcoal.
- Before 360 frames arrive the turn is limited to ±25° with a sheen sweep. Afterwards scroll drives the frame index,
  and on /milk/[variant] the Bottle360Viewer gets drag, inertia and a frame counter set in JetBrains Mono ("036 / 072").

| Variant | Luxury-type world |
|---|---|
| **MASTER 26** | Deep forest `#0A2A20`. A 34rem Bodoni "26" in pale green, the bottle overlapping the "6". Fraunces italic line: "Twenty-six herbs. The fullest expression of the source." with herbs marked pending. |
| **ROOT 14** | Oxblood `#4A0A0F`. "14" in blush. Line: "Fourteen herbs, rooted in free grazing." |
| **BASE 3** | Pale amber `#F8E4C2`. A single enormous "3" in deep umber. Line: "The everyday foundation." |
| **ESSENTIAL** | Ivory `#F4EDE2`. An italic Bodoni "E" with a swash flourish. Line: "Simple, balanced, honest." |

Info panel on each: `DESIGO® V1+` (mono) / name (Bodoni 48 px) / price and size (pending style: dotted underline plus
a "pending approval" tooltip) / descriptors as a tracked list / `RESERVE ———→`.

## 6. Page-by-page treatment

| # | Chapter | Treatment |
|---|---|---|
| 01 | Hero | Milk white. "MILK / FROM THE / SOURCE." in Fraunces 300 at 9–17rem, left-aligned on 3 lines. The bottle sits right-of-centre over the last line. "Traceable milk from indigenous Indian cows." in tracked label caps. Two text CTAs. |
| 02 | Bottle becomes the story | The six words set as one giant line each (Bodoni 10rem) passing *behind* the pinned bottle (z-order), each with a one-line Fraunces explanation. Milk → forest. |
| 03 | Cow → bottle | Typographic journey: seven stations as huge numbered words "01 COW … 07 BOTTLE" sliding horizontally, with a thin gold rule as the milk line. |
| 04 | Where it begins | One full-bleed photo plus a single sentence. When the photo is pending, an AssetSlot styled as an elegant captioned frame. |
| 05 | Breeds | An index: six breed names in Bodoni at 6rem, stacked. Hover or focus reveals the region and portrait. Status line "Breed list client-stated · approval pending". |
| 06 | Traceability | Forest canvas. Node names in tracked caps on a hairline path, with a soft pulse dot (`--signal` at 60%). Side panel in Fraunces. "Illustrative journey — not live data". |
| 07 | Quality | A giant Bodoni "16" with the 16 parameters set as a two-column typographic list. Readouts read "— pending lab confirmation". |
| 08 | Four milks | **Signature chapter.** 4 × 120vh full-screen scenes (section 5), with a 01–04 index on the left edge. |
| 09 | Milk as material | A restrained canvas ribbon behind one Fraunces italic word: "*Material.*" |
| 10 | Heritage | Paper. A large italic statement and gold hairlines. A cow line drawing at small scale, like a colophon. |
| 11 | Technology | Charcoal. "TRADITION IS THE SOURCE. / TECHNOLOGY PROTECTS THE JOURNEY." in Inter Tight 200 caps, tracking +0.3em. Seven verbs reveal one by one. |
| 12 | Ghee | Warm gold. "Bilona" in Bodoni italic at display size, the jar, and three grades with the milk they come from. Prices are pending. |
| 13 | Trace your milk | Charcoal. A centred input in JetBrains Mono at 32 px, results revealed line by line, and a DEMO badge in tracked caps with a 1 px frame. |
| 14 | Story | Years set in Bodoni at 8rem. Verified milestones only in production. |
| 15 | Final CTA | "Know where your milk comes from." in Fraunces 300, the bottle returning, milk → forest. |

**Inner pages:** /milk is four numerals in a row (26 · 14 · 3 · E), each a link with a shared-element transition ·
/milk/[variant] is the full variant scene, then the Bottle360Viewer centred on milk white with a frame counter, a
descriptor list and a facts table with dotted-underline pending values · /ghee is a Bilona typographic page ·
/origin is a breed index and a photography essay · /trace is the hairline path plus the demo · /technology has the
seven verbs as seven 100vh typographic slides · /about is the year-led timeline of verified milestones (supporters are omitted
until written evidence exists; they are blocked in `desigo.ts`) ·
/reserve is a minimal form with a large Bodoni variant selector.

## 7. Component variants

`DisplayNumeral` (Bodoni, bleed, parallax) · `MaskedHeadline` (line reveal) · `VariableBreath` (Fraunces axis
scrub) · `TrackedLabel` · `HairlineRule` (gold/hair) · `PendingValue` (dotted underline plus tooltip, from `Claim.status`) ·
`TypeIndex` (breeds, variants) · `ProductScene.typographic` · `JourneyTrack.wordTrack` · `TraceMap.hairline` ·
`QualityPanel.numeral16` · `TypeCursor` (text-label ring) · `LinkArrow` · `FrameButton`.

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / deps | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | Bodoni/Fraunces/Inter Tight system | Type scale, specimen page, ® rule, nbsp rules | Fonts subset (Latin + ₹ + ®), ≤ 160 KB total; no FOIT | Wordmark vector (C) | 3 |
| 2 | Grid & shell | 24-col grid, nav, cursor | `TypeCursor` 6 states, nav, footer | Grid overlay toggle; nav AA contrast on every scene colour | — | 3 |
| 3 | Hero | Headline plus bottle | `MaskedHeadline`, hero | LCP ≤ 2.0 s (text LCP); bottle overlap aligned at 4 breakpoints | Render (have) | 3 |
| 4 | Bottle → story | Words behind the bottle | Pinned scene, z-order type | Readable at 360 px; reduced motion shows a static list | — | 3 |
| 5 | Cow → bottle | Word track | `JourneyTrack.wordTrack` | Horizontal on desktop, vertical on mobile | — | 3 |
| 6 | Origin / farm | Photo essay | Full-bleed frames, AssetSlot | No stock; captions approved | Photos B1, B2 | 2 |
| 7 | Breeds | Type index | `TypeIndex` with hover reveal | Keyboard focus reveals the same content | Photos B3 | 3 |
| 8 | Trace map | Hairline path | `TraceMap.hairline` | Illustrative label; node panel accessible | — | 4 |
| 9 | Quality | Numeral 16 | `QualityPanel.numeral16` | No unconfirmed values | — | 2 |
| 10 | Four worlds + 360 | Signature scenes | 4 scenes, index, viewer | Each scene ≥ 7:1 text contrast; viewer frame counter works | 360 (A) | 7 |
| 11 | Heritage | Italic statement | Paper scene, line art | — | — | 2 |
| 12 | Technology | Verb sequence | Charcoal scene | Public vocabulary | — | 2 |
| 13 | Ghee | Bilona page section | Gold scene | Prices pending-styled | Jar photo | 2 |
| 14 | Trace-your-milk | Mono lookup | Demo input/result | DEMO always visible; `aria-live` results | — | 3 |
| 15 | /milk, /milk/[variant] | Product pages | Numeral row, shared-element transition | View Transition fallback; correct pending styling | 360 (A) | 5 |
| 16 | /origin, /trace, /technology | Story pages | 3 templates | Content from `desigo.ts` only | Photos B1–B8 | 4 |
| 17 | /about, /ghee, /reserve | Remaining pages | 3 templates | Verified milestones only | Archive B11 | 4 |
| 18 | Mobile | Re-set the type for small screens | Mobile scales, numeral crops | Numerals never cause horizontal scroll; names never break | — | 3 |
| 19 | A11y + reduced motion | — | Static reveals, focus styles | WCAG 2.2 AA (AAA for body), reading order matches the visual order | — | 2 |
| 20 | Perf, QA, handover | Ship | Lighthouse ≥ 95, type QA list (widows, rags) | CLS < 0.02 (font metrics override), LCP ≤ 2.0 s | All | 4 |

**Total:** about 64 days. This is the lowest-risk, highest-premium route.

## 9. Assets needed from DESIGO®

- 360 sequences (most important here, since the bottle is the only image in key scenes).
- Wordmark vector and any brand typeface. If DESIGO® has a licensed face, it replaces Inter Tight for labels.
- Approved final wording for every variant line and descriptor, plus approved prices and pack sizes, because type-led
  pages expose every word.
- 3–5 hero-grade photographs (B1, B2, B3), even if few.

## 10. Performance, accessibility and mobile

- Text is HTML, so LCP is fast. Preload the Bodoni subset only for numerals (digits and E), about 18 KB.
- Use `size-adjust` / `ascent-override` fallback metrics to avoid layout shift.
- Giant numerals are `aria-hidden`, and the accessible name comes from the product name.
- Mobile: numerals at 70vw crop deliberately off the right edge (overflow clipped on the scene, not the page),
  names on two lines with nbsp, CTAs full-width text links.
- Reduced motion: no masks, no variable-axis scrub, instant layout.

## 11. Risks and premium guardrails

**Risks:** cold or fashion-brand pastiche; Bodoni hairlines vanishing on low-DPI screens; empty pages if the copy is weak.

**Premium guardrails**
1. Use Bodoni only at ≥ 48 px. Below that use Fraunces or Inter Tight.
2. Maximum 2 typefaces visible per viewport (plus mono for data).
3. Maximum 12 words of display copy per viewport.
4. Never write superlatives. Luxury is shown in spacing, not said in adjectives.
5. Warm milk white, never #FFFFFF. Warm charcoal, never #000.
6. Kern every display line by hand, especially "26", "14", "DESIGO®" and "V1+".
7. Pending values always look pending. Luxury must not disguise unverified numbers.
8. One accent colour per scene.
9. Real photos are used sparingly and must be of hero quality. Rather an elegant AssetSlot than a weak photo.

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: type system and variant scenes complete; missing colour roles (secondary/accent/surface/muted/ok/pending/demo), radius/shadow tokens, component states, motion-token table and all AI image prompts (had none). Added all (10 prompts with negatives). Fixed: /about "supporters (pending)" → omitted until evidence exists (blocked in `desigo.ts`). Bodoni Moda, Fraunces, Inter Tight all OFL.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | `--c-primary` | `#171918` | charcoal: display type on light, framed CTA, DEMO frame | 16.1:1 on bg |
| Primary ink | `--c-on-primary` | `#F7F4EC` | milk on charcoal / on dark scenes | 16.1:1 on primary |
| Secondary | `--c-secondary` | `#0B3B32` | forest: dark canvas, footer, traceability chapter | 11.3:1 on bg |
| Accent | `--c-accent` | `#1E7A68` | links, focus ring | 4.7:1 on bg |
| Background | `--c-bg` | `#F7F4EC` | milk canvas, never `#FFFFFF` |  |
| Surface | `--c-surface` | `#EFE9DC` | section banding, facts table rows | text on surface 13.4:1 |
| Text | `--c-text` | `#1E211F` | body (AAA) | 14.8:1 on bg |
| Muted text | `--c-text-muted` | `#5E625C` | tracked labels, captions | 5.7:1 on bg |
| Line | `--c-line` | `rgba(23,25,24,.14)` | 1 px rules, dividers | decorative only |
| Success / Pending / Demo | `--c-ok` / `--c-pending` / `--c-demo` | `#1E7A68` / `#7A5B37` / `#171918` | verified tick · dotted underline + "pending approval" tooltip · DEMO in tracked caps with a 1 px frame | ok 4.7:1 · pending 5.7:1 · demo 16.1:1 on bg; state is never colour-only (text + dotted underline / badge label) |
| Style extra | `--gold` | `#C8A96B` | 0.5 px hairline rules only; never text below 24 px | |
| Style extra | `--signal` | `#7FE0B8` | trace pulse dot at 60% on forest only | |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Code | Base | Deep | Light | How the world uses them |
|---|---|---|---|---|---|
| MASTER 26 | V1+ | `#1F5C45` | `#0A2A20` | `#D9E8DF` | scene bg = deep `#0A2A20`; Bodoni "26" in light at 92%; text milk `#F7F4EC`; bottle overlaps the "6" |
| ROOT 14 | V1 | `#B3202A` | `#4A0A0F` | `#F3D9D6` | bg = deep `#4A0A0F`; "14" in light (blush); milk text |
| BASE 3 | V2 | `#E89A1C` | `#5A3304` | `#F8E4C2` | bg = light `#F8E4C2`; a single enormous "3" in deep umber; ink text |
| ESSENTIAL | V3 | `#CDB89A` | `#4D4130` | `#F4EDE2` | bg = light `#F4EDE2`; italic Bodoni "E" with swash in deep `#4D4130`; ink text |

**Dark-chapter inversion:** dark scenes (MASTER 26, ROOT 14, ch. 06 forest, ch. 11 and 13 charcoal, footer): text → `#F7F4EC`, muted → `#C9C4BA`, line → `rgba(247,244,236,.18)`, primary frame/label → milk, accent → `#7FE0B8`, pending → `#C8A96B` (≥ 24 px or with dotted underline + text); gold hairlines unchanged; logo turns white. Every scene keeps ≥ 7:1 body contrast.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Bodoni Moda (numerals + the four product names) · Fraunces 300 for the hero sentence | `@fontsource-variable/bodoni-moda` · `@fontsource-variable/fraunces` | Bodoni 400–900 · opsz 96 (use only ≥ 48 px) · Fraunces 300 opsz 144 SOFT 30 | numerals clamp(12rem, 38vw, 34rem) · names clamp(3rem, 8vw, 9rem) · hero clamp(9rem, 14vw, 17rem) | 0.78 numerals · 0.95 names | −0.04em numerals · −0.02em names | names in caps with nbsp ("MASTER 26") |
| Headline H1–H2 | Fraunces (speaks; italic sentences) | `@fontsource-variable/fraunces` | 300 → 400 · SOFT 30 → 60 (scrubbed breath) · italic | sentence clamp(1.8rem, 3.4vw, 3.6rem) · H2 clamp(1.5rem, 2.4vw, 2.4rem) | 1.15 | −0.015em | sentence |
| Body | Inter Tight | `@fontsource-variable/inter-tight` | 400 | 1rem, measure 52ch | 1.65 | 0 | sentence |
| Label / UI | Inter Tight | `@fontsource-variable/inter-tight` | 500 (200 for the Technology statement caps) | .72rem (11–12 px) | 1.2 | +0.22em (+0.3em statement) | UPPERCASE |
| Data / mono | JetBrains Mono | `@fontsource-variable/jetbrains-mono` | 400 · `tnum` | 12 px codes; 32 px trace input | 1.3 | +0.02em | as data ("DESIGO® V1+") |
| Devanagari (optional) | Tiro Devanagari Hindi | `@fontsource/tiro-devanagari-hindi` | 400 / italic | +6% | 1.3 | 0 | — |

Licence: Bodoni Moda, Fraunces, Inter Tight, JetBrains Mono and Tiro Devanagari Hindi are SIL OFL 1.1 via @fontsource; Bodoni subset preloaded for digits + E only (~18 KB), total ≤ 160 KB. Pairing: Bodoni names things, Fraunces speaks; max two typefaces per viewport plus mono. `font-feature-settings: "lnum","kern","liga"`; ® superscript at 0.42em.

### 12.3 Layout & surfaces
- **Grid:** 24 columns on desktop (fine asymmetric control), 5vw margins, 16 px gutters, max 1600 px; information in columns 17–23; numerals bleed off the left edge (`margin-left: -0.06em`); 12 columns tablet, 4 mobile
- **Spacing scale:** 4 px base with a 64 px display baseline and 8 px text baseline: 4 · 8 · 16 · 24 · 32 · 64 · 128 · 192
- **Radius scale:** sm 0 · md 0 · lg 999 px (cursor only); luxury is square and clean
- **Border style:** 0.5 px gold hairlines or 1 px `--c-line` rules; 1 px charcoal CTA frame
- **Shadow / elevation:** UI flat; bottle contact shadow = blurred ellipse at 18% charcoal; depth comes from the type → bottle → shadow layering
- **Texture / overlay:** 2% grain on milk only; no other texture

### 12.4 Components
For each: anatomy, sizes, states (default · hover · focus-visible · active · disabled · loading), motion, a11y.

- **Primary button**: `FrameButton`: Inter Tight 500 caps .72rem +0.22em label + `———→` inside a 1 px charcoal frame, 52 px high, padding 0 32 px, radius 0. Hover: frame draws clockwise (600 ms), underline grows 0 → 100% (240 ms), arrow +6 px, magnetic ≤ 6 px · focus-visible: 2 px accent ring offset 3 px · active: fills charcoal, milk label · disabled: 40%, frame dotted · loading: arrow line extends/retracts (1200 ms). A11y: real `<button>`/`<a>` semantics, 44 px minimum target, visible focus independent of colour.
- **Secondary button**: `LinkArrow` without frame: tracked caps + underline + arrow. Hover: underline grows, arrow +6 px · focus-visible: accent ring · active: accent colour · disabled: muted · loading: underline sweep.
- **Text / arrow link**: Inter Tight 400 or Fraunces italic in running text, 1 px underline; hover: underline 0 → 100% (240 ms), arrow (Inter Tight →) +6 px · focus-visible: accent ring · active: accent · disabled: muted · loading: n/a.
- **Icon button** (incl. menu): 40 px (44 hit), typographic glyphs preferred (→, ×, ≡ set in Inter Tight); hover: 40 px ring · focus-visible: accent ring · active: 0.96 · disabled: 30% · loading: ring draws. `aria-label` required.
- **Navigation bar** (desktop + mobile menu) + how the DESIGO® black write/un-write logo loop sits in it: 72 px bar, transparent, AA contrast on every scene colour: the DESIGO® wordmark is the black write/un-write infinite loop (charcoal `#171918` on light grounds, white `#FFFFFF`/milk on dark; it never changes colour, never takes a variant hue and is never re-drawn in the style). Six links in tracked caps, RESERVE as `FrameButton`; hides on scroll down. Mobile: 56 px; menu opens a full-screen sheet listing the four milks as Bodoni names (≥ 48 px) and the pages in Fraunces; Esc closes, focus returns.
- **Cursor** (states: default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE); touch fallback: `TypeCursor`: default 6 px charcoal dot · hover: 40 px ring, `mix-blend-mode: difference` · ROTATE: ring with `DRAG` in 9 px tracked caps · EXPLORE: ring `EXPLORE` on the breed type index and journey word track · ENTER: ring `ENTER` on the /milk numeral row (shared-element transition) · VIEW: ring `VIEW` on photographs · TRACE: ring `TRACE` on hairline nodes. Disabled: 30% ring; text: native caret. Touch: none.
- **Card / panel / info block**: no cards; information sits in columns 17–23 as tracked labels + Fraunces lines separated by hairlines; side panel for trace nodes in Fraunces on `--c-surface`, padding 40 px. Focus-visible: accent ring · loading: elegant captioned AssetSlot frame.
- **Badge / tag** (incl. "pending verification" and "DEMO · not live data"): text only. Pending verification: `PendingValue` with 1 px dotted underline in `--c-pending` + tooltip "pending approval"; DEMO · not live data: tracked caps `DEMO · NOT LIVE DATA` with 1 px charcoal frame (milk on dark), always visible on demo content.
- **Input + form field** (Trace-your-milk bottle ID): centred JetBrains Mono 32 px input on charcoal, 1 px milk bottom rule, 72 px high, tracked label above, prefilled `DSG-BTL-000001-3 (sample format)`. Default · hover: rule 2 px · focus-visible: 2 px `#7FE0B8` ring · active: caret · disabled: 40% · loading: rule draws · results revealed line by line (`aria-live=polite`) · error: "No record for this ID". /reserve: Bodoni variant selector (names ≥ 48 px) + 48 px inputs.
- **Divider / ornament**: `HairlineRule`: 0.5 px gold or 1 px hair; no other ornament.
- **Section header** (chapter number + title pattern): tracked label `08 — THE FOUR MILKS` + a masked Fraunces headline (line rise 1200 ms, 80 ms stagger); numerals parallax 0.85× against the bottle.
- **Product info block** (variant name, code, price-pending, size, descriptors): columns 17–23: `DESIGO® V1+` (mono) / name in Bodoni 48 px / Fraunces italic line / code `DESIGO® V1+` / `V1` / `V2` / `V3`; price from `desigo.ts` rendered as pending (e.g. ₹94 with dotted underline + tooltip "pending approval · pack size not stated"); size "1 L glass · 900 g" pending; descriptors list with pending items dotted-underlined / descriptors as a tracked list / `RESERVE ———→`.
- **Bottle stage** (how Bottle / Bottle360Viewer is framed: plinth, glow, shadow, background): the bottle stands in front of its numeral, overlapping about 20% of the numeral's width; contact ellipse at 18% charcoal. Float ±10 px / 6 s, tilt ±8°, sheen follows the cursor. Before 360 frames: ±25° turn with sheen sweep; after: scroll drives the frame index, and on /milk/[variant] the Bottle360Viewer adds drag, inertia and a JetBrains Mono counter `036 / 072`.
- **Trace node / timeline step**: node names in tracked caps on a hairline path (forest canvas), soft pulse dot `--signal` at 60%. Default: 6 px milk dot · hover: 40 px ring · focus-visible: accent ring · active: Fraunces side panel opens · disabled: 30% · loading: pulse. "Illustrative journey — not live data" in tracked caps. Story timeline: years in Bodoni 8rem, verified milestones only.

### 12.5 Iconography & illustration
Icons: practically none; arrows are typographic (→ in Inter Tight); hairline rules (0.5 px gold or 1 px hair) separate content. Illustration: one cow line drawing at small scale as a colophon in Heritage. Photo treatment: the bottle render, and later full-bleed hero-quality real photos at most once per chapter with a slow 1.04 → 1.0 scale; warm milk grade.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | masked line reveals, numeral settle |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | cross-fade through milk |
| `--dur-micro` | `240ms` | underline grow, arrow |
| `--dur-reveal` | `1200ms` | headline mask (translateY 100% → 0), 80 ms line stagger |
| `--dur-numeral` | `1600ms` | numeral scale 1.08 → 1.0 + opacity |
| `--dur-scene` | `600ms` | cross-fade through milk; numeral shared-element handoff |
| `--axis-breath` | `wght 300→400 · SOFT 30→60` | Fraunces variable breathing, scroll-scrubbed |
| `--parallax` | `0.85×` | numerals against the bottle at 1× |

One typographic event per viewport; never per-letter for long text. Reduced motion: no masks, no variable-axis scrub, instant layout; numerals static.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

**Tail prompt (append to every prompt below):** *warm natural light, restrained premium palette of milk white #F7F4EC, deep forest green #0B3B32, earth brown #8C6A43 and warm gold #C8A96B, subtle film grain, editorial, calm, high-end, no text, no watermark, no logo, no letters, luxurious restraint, vast negative space*

| # | File path (web/public/desigo/styles/luxury-typography/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| LT-H1 | `web/public/desigo/styles/luxury-typography/hero-paper-light.png` | 3200×2000 (16:10) | no | Warm milk-white #F7F4EC fine cotton paper surface with a soft diagonal band of window light falling across it, extremely subtle, vast empty space | base negatives + window frame, objects, shadows of plants | Ch. 01 hero optional ground |
| LT-H2 | `web/public/desigo/styles/luxury-typography/hero-paper-light-portrait.png` | 1400×2400 (7:12) | no | Vertical warm milk-white cotton paper surface with a soft diagonal band of morning light near the top, extremely subtle, empty | base negatives + window frame, objects | Ch. 01 hero (mobile) |
| LT-V1 | `web/public/desigo/styles/luxury-typography/scene-forest-velvet.png` | 3200×2000 + 1400×2400 portrait | no | Deep forest green #0A2A20 matte velvet-like backdrop with a very soft pool of light at center, no folds, seamless studio ground | base negatives + fabric folds, sparkles, objects | MASTER 26 scene ground (optional, under flat colour) |
| LT-V2 | `web/public/desigo/styles/luxury-typography/scene-oxblood-lacquer.png` | 3200×2000 + 1400×2400 portrait | no | Deep oxblood #4A0A0F matte lacquer backdrop with a faint warm sheen toward the center, seamless, empty | base negatives + reflections of objects, gloss highlights, objects | ROOT 14 scene ground |
| LT-V3 | `web/public/desigo/styles/luxury-typography/scene-amber-paper.png` | 3200×2000 + 1400×2400 portrait | no | Pale amber #F8E4C2 heavyweight paper backdrop with a soft golden light from upper left, seamless, empty | base negatives + sun disc, objects, texture patterns | BASE 3 scene ground |
| LT-V4 | `web/public/desigo/styles/luxury-typography/scene-ivory-paper.png` | 3200×2000 + 1400×2400 portrait | no | Warm ivory #F4EDE2 cotton paper backdrop, perfectly even soft light, seamless, empty | base negatives + objects, vignetting | ESSENTIAL scene ground |
| LT-J1 | `web/public/desigo/styles/luxury-typography/colophon-cow.png` | 1600×1200 (4:3) | yes (real alpha) | Small elegant engraved-line colophon of a resting Indian zebu cow in profile, hump and dewlap visible, fine sepia-brown #5A4630 line on transparent background, centred, refined | base negatives + ornate frame, text banner, shading blobs, cartoon | Ch. 10 Heritage colophon, /about |
| LT-J2 | `web/public/desigo/styles/luxury-typography/thar-dawn-band.png` | 3600×1200 (3:1) | no | Ultra-wide calm band of the Thar desert edge at dawn, low khejri silhouettes far away, muted gold and sage, mostly sky | base negatives + people, buildings, dramatic clouds | Ch. 04 placeholder band until real photography (labelled illustration) |
| LT-T1 | `web/public/desigo/styles/luxury-typography/grain-overlay.png` | 1024×1024, seamless | no | Seamless monochrome photographic film grain on mid-grey, fine, even | base negatives + scratches, dust, colour noise | 2% grain on milk |
| LT-T2 | `web/public/desigo/styles/luxury-typography/paper-archival.png` | 2400×2400, seamless | no | Seamless tileable texture of aged cotton rag paper, warm ivory #EDE4D0, very subtle fibres, flat even lighting | base negatives + foxing spots, folds, stains | Ch. 10 Heritage paper |

Base negatives (apply to every prompt): *text, letters, numbers, logo, watermark, signature, label, product bottle, glass bottle, jar, packaging, Holstein or Jersey cattle, cartoon mascot, deity or religious icon, distorted anatomy, oversaturated, HDR, low resolution*. Type carries this style: generated images are optional grounds only; an elegant AssetSlot is preferred to a weak photo.

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/15_luxury-typography.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/luxury-typography/
