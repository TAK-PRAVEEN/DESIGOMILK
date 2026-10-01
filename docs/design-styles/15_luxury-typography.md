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
seven verbs as seven 100vh typographic slides · /about is the year-led timeline and supporters (pending) ·
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
