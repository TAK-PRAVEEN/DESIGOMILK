# 19 — Bohemian · DESIGO® build plan

**Fit score: 3 / 5** · **Best used for:** chapter 04 *Where it begins*, chapter 12 *Ghee* and the /ghee page, and
festive or seasonal campaigns (Diwali gifting of Bilona ghee), reinterpreted as **Rajasthani artisan craft**
(block print, bandhani, natural dyes) rather than Western "boho chic".

---

## 1. Style essence

Bohemian design is layered, handmade and collected: textiles, natural fibres, earthy dyes, pattern on pattern,
irregular hand-printed edges, warm light and lived-in comfort. It values craft over polish and the traveller's eye
over the corporate one. In its Western commercial form (macramé, dreamcatchers, pampas grass) it has become a cliché,
much of it borrowed *from* Indian textile traditions in the first place.

For DESIGO® the honest move is to **go to the source**. Jodhpur and the surrounding region are centres of *bandhej*
and *leheriya* tie-dye, and the Bagru, Sanganer and Dabu block-printing traditions sit within Rajasthan. Our Bohemian is
"Marwari craft-bohemian": natural indigo, madder red, turmeric and pomegranate yellows, hand-carved block repeats and
handloom texture, arranged with modern restraint.

Three reference points:
1. **Bagru and Dabu block prints (Rajasthan)**: mud-resist, natural dyes and the slight misregistration of a hand block.
2. **Good Earth and Nicobar (Indian design houses)**: proof that Indian craft can be premium, modern and calm.
3. **Jodhpur bandhej / leheriya**: the dot and wave grammar of the brand's own city, and a link to DESIGO®'s wave-"E".

## 2. Why it fits DESIGO® and where it fights

**Fits**
- **Place.** DESIGO® is from Jodhpur. A craft vocabulary rooted in Marwar ties the brand to its geography without
  needing claims.
- **The ghee jar label already uses a folk pattern** (noted in the IA for chapter 12), so the brand already speaks this
  language in packaging.
- **Warmth and hospitality.** Bohemian warmth suits gifting (ghee), the farm and the human side of the story.
- Leheriya's wave lines echo the wave in the DESIGO® "E" mark, a genuine formal link.

**Fights**
- Pattern density competes with the bottle (principle 1: "The bottle is the hero").
- "Boho" can read as lifestyle or fashion and as unserious about testing and traceability.
- There is a risk of cultural flattening: using motifs as decoration without credit to the craft communities.

**Verdict: 3/5.** Strong for origin, ghee and campaigns. For the whole site it must be heavily restrained, with pattern
only at borders and dividers, and never behind the bottle or the data chapters.

## 3. Art direction

### Palette: "Natural Dye"
| Token | Hex | Natural source | Use |
|---|---|---|---|
| `--cloth` | `#F4EEE2` | Unbleached cotton | Base (warmer than milk) |
| `--milk` | `#F7F4EC` | — | Bottle scenes, data |
| `--indigo` | `#24365A` | Indigo vat | Deep accents, text on cloth (≈ 11:1) |
| `--madder` | `#9E2F24` | Madder root (alizarin) | ROOT-adjacent accent |
| `--haldi` | `#D9A23A` | Turmeric / pomegranate | BASE-adjacent accent |
| `--dabu-clay` | `#6E5440` | Mud resist | Patterns, dividers |
| `--kattha` | `#8C6A43` | Kattha brown (brand earth) | Borders |
| `--neem` | `#4F6B3A` | Leaf green | MASTER-adjacent accent |
| `--forest` | `#0B3B32` | Brand | Headlines, footer |
| `--gold` | `#C8A96B` | Brand | Ghee, zari-like hairlines |
| `--ink` | `#1E211F` | — | Body |

Variant mapping: MASTER `#1F5C45` with neem and forest · ROOT `#B3202A` with madder · BASE `#E89A1C` with haldi ·
ESSENTIAL `#CDB89A` with unbleached cotton and clay. Variant cap colours remain exact on the bottle, and the dye
tones are the *environment*.

### Typography
- **Display:** *Fraunces* (brand) with SOFT 100 and the "WONK" axis on for warmth, weight 400, italic for craft
  captions. It remains in the brand family and gains a hand-made softness.
- **Accent display:** *Yeseva One* (OFL) for single words only (for example "Bilona", "Marwar"). It has a Didone
  with a folk curve.
- **Body:** *Karma* (Indian Type Foundry, OFL, Latin and Devanagari) at 17/28, a warm humanist serif that sets
  Hindi and English as a pair.
- **UI / labels:** *Inter Tight* caps.
- **Data:** *JetBrains Mono*.

### Texture, imagery, iconography
- **Handloom texture:** a subtle woven-cotton tile (scanned, 512 px, 4% multiply) on cloth sections only.
- **Block-print repeats:** SVG motifs redrawn from (a) the ghee jar label and (b) licensed or commissioned
  block designs from a named Rajasthan printer. They are used as borders (24–48 px bands) and section dividers,
  with a deliberate 1–2 px misregistration between colour layers for hand-printed authenticity.
- **Leheriya waves** as animated dividers (diagonal wave lines in 2–3 dye colours).
- **Photography:** warm, natural light. Hands, cloth, earthen pots and real people of the DESIGO® network (with
  consent). Props come from the real context, never imported "boho" props.
- **Icons:** hand-cut stamp style (slightly irregular edges) for the seven verbs, single-colour.

### Grid
12 columns with soft asymmetry: content in columns 2–8, with patterns allowed in the outer 1 and 12 columns as
"selvedge" borders. Section frames are like a textile panel with a border, field and pallu (end panel), a structure
borrowed from the sari: chapter header = border, content = field, CTA = pallu.

## 4. Motion and interaction language

- **Unhurried, tactile.** Reveals: 800 ms, `cubic-bezier(.16,1,.3,1)`, a 20 px rise plus fade. Patterns *print*
  in: each colour layer appears with a 120 ms offset, simulating successive block impressions.
- **Scroll:** leheriya dividers drift sideways at 0.3× scroll speed. Textile borders unroll (clip-path from
  centre outward, 1000 ms) when a section enters.
- **Hover:** links get a hand-stitched dashed underline (dash 4/3) that becomes solid. Buttons get a block-print
  frame that "stamps" (scale 1.02 → 1, 240 ms, no overshoot). Images warm slightly (+3% saturation, 400 ms).
- **Cursor states:** default = small indigo dot with a dye-bleed edge (8 px radial) · link = dot becomes a 32 px
  bandhani ring (12 tiny dots in a circle) · drag (360) = bandhani ring rotating slowly · view = ring with "VIEW" ·
  disabled = clay outline.
- **Transitions:** a "cloth pull", where the next page slides in from the right with a 600 ms ease-in-out like
  fabric drawn across a table.

## 5. The hero bottle and the four variants

The bottle stands on **plain milk-white or unbleached cloth with no pattern behind it**. Pattern frames the scene
(top border, bottom border) but never touches the bottle's silhouette. This rule keeps the product hero.

- Float ±10 px over 6 s, pointer tilt ±8°, and a soft contact shadow on cloth (slightly warmer, `#6E5440` at 14%).
- Until 360 frames arrive the turn is limited to ±25° with a sheen sweep. Afterwards the 360 viewer sits on a "handloom
  plinth" (a circular cloth swatch beneath, flat).

| Variant | Bohemian world |
|---|---|
| **MASTER 26** | Neem-green and indigo border. Field: unbleached cloth. A pressed-leaf print (generic leaf forms, not named herbs) along the border. |
| **ROOT 14** | Madder-red Dabu border with earth-clay ground and a "roots" block motif. |
| **BASE 3** | Haldi-yellow leheriya band with a sunlit cotton field. |
| **ESSENTIAL** | Just a single fine indigo stitch line around the frame: unbleached cotton, quiet, close to Wabi-Sabi. |

## 6. Page-by-page treatment

| # | Chapter | Treatment |
|---|---|---|
| 01 | Hero | Milk white and calm. A thin block-print band at the very top of the viewport (24 px, under the nav). The bottle and "Milk from the source." in Fraunces. Bohemian is a whisper here. |
| 02 | Bottle becomes the story | The six words revealed as stamped labels, each with a small block-print glyph. Background milk → forest, and the border band changes to indigo. |
| 03 | Cow → bottle | Journey stations as panels of a printed textile scroll (kalamkari-inspired *structure*, not imagery). The milk line is a running stitch. |
| 04 | Where it begins | **Signature.** Warm documentary photos framed by a cloth border, Karma body, handloom texture and a pull quote from a farmer (consented, when supplied). |
| 05 | Breeds | Portraits on unbleached cloth cards with indigo borders. Region names from `breeds[]`. Status chip "Client-stated · approval pending". |
| 06 | Traceability | **Restrained.** Forest field, a stitched path (dashed line that becomes solid as you scroll) and stamp-style nodes. "Illustrative journey — not live data". |
| 07 | Quality | **Pattern-free.** A clean lab layout. Credibility needs silence. Readouts "— pending lab confirmation". |
| 08 | Four milks | Four textile-framed worlds (section 5). |
| 09 | Milk as material | Milk ribbons flowing like a dupatta in wind (canvas), white on indigo. |
| 10 | Heritage | Paper and cloth layered, a leheriya divider, Fraunces italic, a cow line drawing in an indigo border panel. |
| 11 | Technology | A deliberate shift to dark UI with a single indigo-to-signal border thread linking craft to tech. "Tradition is the source. Technology protects the journey." |
| 12 | Ghee | **Signature.** The jar's own folk pattern scaled up as a frame, warm gold and haldi, the bilona vessel photographed with real cloth, three grades. Gifting-ready. |
| 13 | Trace your milk | A charcoal panel with a stitched-border input and step results like stamped ledger entries. DEMO stamp. |
| 14 | Story | A timeline as a fabric selvedge strip, verified milestones only. |
| 15 | Final CTA | Back to milk white with a pallu-style closing border (the richest pattern band on the page) and two CTAs. |

**Inner pages:** /milk shows four framed panels · /milk/[variant] is the textile-framed world, 360 on the handloom
plinth and facts on clean milk · /ghee is the full Bohemian treatment and gift-box presentation · /origin is the
signature documentary with craft frames and breed cards · /trace has the stitched path · /technology is dark with
the single thread · /about has the selvedge timeline, a craft-credit note (naming the printers whose blocks were
used) (no supporters listed until written evidence is on file, KB Q34) · /reserve is a clean form inside a light border.

## 7. Component variants

`BlockBorder` (multi-layer SVG with misregistration) · `LeheriyaDivider` · `HandloomTexture` · `StitchLine`
(dashed → solid) · `StampLabel` · `TextilePanel` (border / field / pallu) · `BandhaniCursor` · `ClothPull`
transition · `ProductScene.textile` · `TraceMap.stitched` · `JourneyTrack.scroll` · `GheeScene.gift` ·
`CraftCredit` (artisan credit block) · `AssetSlot.cloth`.

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / deps | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | Natural Dye palette, Fraunces WONK, Karma | Tokens, specimen with Devanagari | Text ≥ 4.5:1 on cloth; dye tones never used for small text | — | 2 |
| 2 | Grid & shell | Textile panel grid, cursor, cloth-pull | `TextilePanel`, `BandhaniCursor`, nav band | Pattern never under nav text | — | 3 |
| 3 | Hero | Calm hero with top band | Hero | Pattern ≥ 120 px from the bottle silhouette | Render | 2 |
| 4 | Bottle → story | Stamped words | Pinned scene | Reduced motion static | — | 3 |
| 5 | Cow → bottle | Textile scroll journey | 7 panels, running stitch | Stitch progress scrubbed; mobile vertical | B4, B6–B8 | 5 |
| 6 | Origin / farm | Signature documentary | Framed photos, quote | Quotes consented; no imported props | B1, B2, farmer quote | 4 |
| 7 | Breeds | Cloth cards | Breed cards | Status chips | B3 | 2 |
| 8 | Trace map | Stitched path | `TraceMap.stitched` | Illustrative label | — | 4 |
| 9 | Quality | Pattern-free lab | Panel | No unconfirmed values | B6 | 2 |
| 10 | Four worlds + 360 | Textile worlds, plinth | 4 worlds, viewer | No pattern touching the bottle; viewer frames | 360 (A) | 6 |
| 11 | Heritage | Layered paper and cloth | Scene | Motifs credited | Craft partner | 2 |
| 12 | Technology | Dark plus thread | Scene | Public vocabulary | — | 2 |
| 13 | Ghee | Signature gift scene | Jar pattern frame, bilona | Pattern traced from the real label; claims reviewed | Label vector, jar and bilona photos | 4 |
| 14 | Trace-your-milk | Ledger stamps | Demo | DEMO per step | — | 3 |
| 15 | /milk, /milk/[variant] | Product pages | 2 templates | Pending styling | 360 (A) | 4 |
| 16 | /origin, /trace, /technology | Story pages | 3 templates | — | B1–B8 | 5 |
| 17 | /about, /ghee, /reserve | Remaining pages | 3 templates, `CraftCredit` | Artisan credit approved | B11, craft partner names | 4 |
| 18 | Mobile | Borders thin to 12–16 px | Mobile pass | Pattern total ≤ 15% of mobile viewport | — | 3 |
| 19 | A11y + reduced motion | Calm patterns | Static borders, `aria-hidden` patterns | WCAG 2.2 AA; no moving pattern near text in reduced motion | — | 2 |
| 20 | Perf, QA, handover | Ship | SVG pattern library, perf report | Pattern SVGs ≤ 120 KB total; LCP ≤ 2.5 s | All | 4 |

**Total:** about 66 days. Ghee and origin accent only: about 16 days.

## 9. Assets needed from DESIGO®

- **Ghee jar label in vector** (or a high-resolution scan): the source of the brand's own folk pattern.
- Confirmation of whether DESIGO® wants to **commission or license** block designs from a named Rajasthan printing
  family or workshop. This is strongly recommended over inventing motifs, and it allows a truthful craft credit.
- Warm documentary photography: hands, cloth, earthen vessels, the bilona churn, farm life (consented).
- 360 sequences, wordmark vector.

## 10. Performance, accessibility and mobile

- Patterns are SVG `<pattern>` fills or tiled background images (≤ 12 KB each), and colour layers are separate
  `<g>` elements so misregistration is a transform, not extra artwork.
- The handloom texture is one tiled WebP, applied to cloth sections only.
- All patterns are `aria-hidden`. Craft descriptions live in text where relevant.
- Moving dividers stop in reduced motion and never sit behind body text.
- Mobile: borders become 12–16 px, panels stack, and the cloth-pull becomes a fade.

## 11. Risks and premium guardrails

**Risks:** cultural appropriation or flattening of craft; tourist-shop kitsch; pattern noise fighting the bottle;
an unserious tone in the quality chapters.

**Premium guardrails**
1. Pattern never touches the bottle. Keep a minimum of 120 px clear space around it.
2. Patterns are derived from DESIGO®'s own label or from credited Rajasthan artisans, never from stock "ethnic" packs.
3. No Western boho props: no dreamcatchers, macramé, pampas grass or mandala clip-art.
4. No religious symbols as decoration (no Om, no deities, no swastika motif), and no sacred-cow imagery used as ornament.
5. At most 3 dye colours per pattern and a single pattern family per page.
6. Data chapters (quality, trace, technology) stay pattern-free. Credibility comes before charm.
7. Natural-dye *colours* do not imply natural-dye *claims*: never write "naturally dyed" or similar about packaging unless true.
8. Gifting copy for ghee stays factual (variant, milk source, size), with no health or ritual-benefit claims.

## 12. Build-ready spec sheet

> Audit 2026-10-03: Section 12 was missing. Added Natural Dye tokens and state colours, Fraunces WONK/Yeseva/Karma packages, all 14 components, motion tokens and 11 image prompts (motifs flagged as placeholders until artisan blocks are licensed). Fonts already OFL. Body: supporters no longer listed as pending on /about (blocked claim, KB Q34).

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#24365A` | indigo vat: primary button, deep accents, headings on cloth | 10.4:1 vs bg. AAA. |
| Primary ink | --c-on-primary | `#F4EEE2` | unbleached-cotton text on indigo | 10.4:1 on primary. |
| Secondary | --c-secondary | `#9E2F24` | madder: ROOT-adjacent accent, stamped labels, DEMO stamp | 6.3:1 vs bg. AA for text. |
| Accent | --c-accent | `#D9A23A` | haldi: leheriya bands, highlights, focus halo | 2.0:1 vs bg. 2.0:1, never text; focus ring is indigo 2 px + 3 px haldi halo. |
| Background | --c-bg | `#F4EEE2` | unbleached cotton base (warmer than milk) |  |
| Surface | --c-surface | `#F7F4EC` | milk: bottle scenes, data and quality chapters (pattern-free) |  |
| Text | --c-text | `#1E211F` | ink body text | 14.1:1 on bg · 14.8:1 on surface (≥ 7:1 met) |
| Muted text | --c-text-muted | `#6E5440` | dabu clay: captions, credits | 6.0:1 on bg · 6.4:1 on surface (≥ 4.5:1 met) |
| Line | --c-line | `#8C6A43` | kattha brown: borders, stitch lines, dividers | 4.3:1, used for borders and stitches only. |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#4F6B3A` / `#D9A23A` / `#9E2F24` | neem = recorded step; haldi dotted underline + chip = pending; madder stamp = DEMO | Pending chip text is indigo on haldi (5.2:1); DEMO stamp text madder on cotton 6.3:1. |

**Variant worlds in this style** (base / deep / light are the brand variant tokens; the right-hand column is how this style stages them):

| Variant | Base | Deep | Light | World in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#D9E8DF` | neem-green `#4F6B3A` and indigo border, unbleached field, pressed-leaf print of generic leaf forms (no named herbs) |
| ROOT 14 (V1, red cap) | `#B3202A` | `#4A0A0F` | `#F3D9D6` | madder `#9E2F24` Dabu border on earth-clay ground with a "roots" block motif |
| BASE 3 (V2, amber cap) | `#E89A1C` | `#5A3304` | `#F8E4C2` | haldi `#D9A23A` leheriya band over a sunlit cotton field |
| ESSENTIAL (V3, ivory cap) | `#CDB89A` | `#4D4130` | `#F4EDE2` | a single fine indigo stitch line around an unbleached-cotton frame: quiet, close to Wabi-Sabi |

**Dark-chapter inversion:** Technology and trace chapters (11, 13) and the footer: bg → `#1E211F` / forest `#0B3B32`, surface → `#24365A` at 30%, text → `#F4EEE2`, muted → `#D8CBB4`, primary → haldi `#D9A23A` fill with ink label, a single indigo-to-signal thread `#24365A → #7FE0B8` is the only ornament; no block-print patterns.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Fraunces (variable) | `@fontsource-variable/fraunces` (Google Fonts: Fraunces) | opsz auto, wght 400, SOFT 100, WONK 1, italic for craft captions | clamp(3.5rem, 8vw, 8rem) | 0.98 | -0.02em | Sentence |
| Headline H1–H2 | Fraunces (variable) | `@fontsource-variable/fraunces` (Google Fonts: Fraunces) | SOFT 100, WONK 1, wght 400–500 | H1 clamp(2.6rem, 5vw, 5rem) · H2 clamp(1.8rem, 3vw, 3rem) | 1.06 / 1.15 | -0.015em | Sentence |
| Body | Karma | `@fontsource/karma` (Google Fonts: Karma) | 300–700 static (use 400, 500) | clamp(1.0625rem, 1rem + 0.2vw, 1.125rem) (17–18 px) | 1.65 (28 px) | 0 | Sentence |
| Label / UI | Inter Tight (variable) | `@fontsource-variable/inter-tight` (Google Fonts: Inter Tight) | wght 600 | 0.72rem | 1.2 | +0.18em | UPPER |
| Data / mono | JetBrains Mono (variable) | `@fontsource-variable/jetbrains-mono` (Google Fonts: JetBrains Mono) | wght 400 | 0.8125rem | 1.4 | 0 | IDs as issued |
| Devanagari (optional) | Karma | `@fontsource/karma` (Google Fonts: Karma) | 300–700 static (Latin + Devanagari in one family) | matches body / H2 | 1.65 | 0 | n/a |
| Accent display (style-specific) | Yeseva One | `@fontsource/yeseva-one` (Google Fonts: Yeseva One) | 400 | clamp(2.4rem, 6vw, 6rem) | 1.0 | 0 | single words only ("Bilona", "Marwar") |

Licence: Fraunces, Yeseva One, Karma (Indian Type Foundry), Inter Tight and JetBrains Mono are all SIL OFL 1.1.
Pairing: Fraunces with SOFT and WONK gives hand-made warmth inside the brand family; Karma sets Hindi and English as a matched pair; Yeseva One is a once-per-page folk Didone.

### 12.3 Layout & surfaces
- **Grid:** 12 columns, 24 px gutter, 5vw margin, max-width 1440 px; content in cols 2–8 (soft asymmetry), outer cols 1 and 12 are "selvedge" pattern borders. Chapter = textile panel: border (header) · field (content) · pallu (CTA).
- **Spacing:** 8-px base: 8 · 16 · 24 · 32 · 48 · 64 · 96 · 128; 120 px minimum clear space around the bottle.
- **Radius:** sm 0 · md 2px · lg 999px (bandhani cursor ring and the circular handloom plinth only).
- **Border:** Block-print bands 24–48 px desktop / 12–16 px mobile; 1.5 px kattha running-stitch line (dash 4/3) for frames.
- **Shadow / elevation:** None on UI. Bottle: warm contact shadow `#6E5440` at 14% on cloth.
- **Texture / overlay:** Handloom woven-cotton tile (512 px, 4% multiply) on cloth sections only; block motifs as SVG with 1–2 px misregistration between colour layers. Data chapters pattern-free.

### 12.4 Components
All interactive components: `focus-visible` = 2 px indigo `#24365A` outline, offset 3 px, with a 3 px haldi `#D9A23A` halo; disabled = 40% opacity, `cursor: not-allowed`, `aria-disabled`; loading = label kept, `aria-busy="true"`.
- **Primary button**: Indigo `#24365A` block, cotton Inter Tight 600 caps label + arrow, radius 2, 48 px, padding 14×24, with a hand-block frame (2 px kattha, slightly irregular SVG). Hover: frame "stamps" (scale 1.02 → 1, 240 ms, no overshoot), arrow +8 px. Active: fill darkens to `#1B2946`. Disabled: clay outline, muted label. Loading: three bandhani dots fill in sequence (900 ms loop).
- **Secondary button**: No fill; indigo label + arrow and a dashed running-stitch underline (dash 4/3). Hover: stitch becomes solid (240 ms). Active: madder underline. Disabled / loading as primary.
- **Text / arrow link**: Karma 500 indigo with a dashed stitch underline that becomes solid on hover (240 ms), arrow +6 px. Disabled: clay, no underline.
- **Icon button** (incl. menu): 44×44, 24 px stamp-style icon (slightly irregular edges, single colour). Menu = three stitch lines that redraw into ×. Hover: icon gets a bandhani dot ring. `aria-label` always.
- **Navigation bar** (desktop + mobile menu) + how the DESIGO® black write/un-write logo loop sits in it: Desktop: 72 px cotton bar with a 24 px block-print band under it on the home hero only, Inter Tight caps links, active = solid stitch underline. Mobile: full-screen cotton sheet with Fraunces 36 px links and a pallu band at the bottom; opens with the cloth pull (600 ms from the right; fade in reduced motion). Logo: the DESIGO® wordmark (approved vector, never redrawn or recoloured) sits at the left of the bar, 112 px wide desktop / 92 px mobile, running the black write / un-write infinite loop of `DesigoLogo` (strokes draw 0–1.2 s, hold to 3.0 s, un-draw 3.0–4.2 s, pause to 4.6 s). Single colour: charcoal `#171918` on light chapters, milk-white `#F7F4EC` on dark chapters; the colour switches with the chapter theme and never animates. No ring, glow, hover trigger or style effect is applied to it. Reduced motion: static, fully written wordmark.
- **Cursor** (states: default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE); touch fallback: default = 8 px indigo dot with a dye-bleed edge · hover = 32 px bandhani ring (12 tiny dots) · ROTATE = bandhani ring rotating slowly · EXPLORE = ring with a leheriya wave stroke · ENTER = ring with → · VIEW = ring with "VIEW" (Inter Tight 9 px) · TRACE = ring with a running-stitch arc that completes. Touch: native; tapped cards warm +3% saturation.
- **Card / panel / info block**: Textile panel: milk or cotton field, 1.5 px kattha stitch frame, optional 24 px border band at the top, 24–32 px padding. Hover (clickable): image warms +3% saturation (400 ms), stitch turns solid.
- **Badge / tag** (incl. "pending verification" and "DEMO · not live data"): Stamped label: Inter Tight 11 px caps in a slightly irregular stamp outline, 24 px. Verified: neem outline. Pending verification: claim text with haldi `#D9A23A` 2 px dotted underline + chip "PENDING VERIFICATION" (indigo on haldi). DEMO: madder `#9E2F24` stamp "DEMO · NOT LIVE DATA", rotated −2°, printed in with a 120 ms layer offset. Static after reveal.
- **Input + form field** (Trace-your-milk bottle ID): Charcoal panel (trace chapter) or milk field: label "BOTTLE ID" Inter Tight caps, 56 px field with a stitched 1.5 px border (dash 4/3), JetBrains Mono 18 px, placeholder `DSG-BTL-000001-3 (sample format)`. Focus: stitch becomes solid indigo + ring token. Error: madder solid border + message. Loading: stitch runs around the border (1200 ms loop).
- **Divider / ornament**: Leheriya wave divider (2–3 dye colours, drifting at 0.3× scroll) or a 24 px block-print band from the ghee-label pattern; one pattern family per page, never behind text or the bottle.
- **Section header** (chapter number + title pattern): Chapter number in Inter Tight caps + Fraunces italic kicker, title in Fraunces H2; the border band above unrolls from centre (clip-path, 1000 ms).
- **Product info block** (variant name, code, price-pending, size, descriptors): On milk (pattern-free): Fraunces variant name, mono code, size and price in Karma with haldi dotted pending underline + chip, descriptors as stamped labels each with status; ghee version adds the gift note in plain factual copy.
- **Bottle stage** (how Bottle / Bottle360Viewer is framed: plinth, glow, shadow, background): Plain milk or unbleached field with no pattern behind the bottle; borders frame the scene top and bottom only; warm contact shadow on cloth; 360 viewer on a flat circular handloom swatch plinth. Float ±10 px / 6 s, tilt ±8°; before 360 frames ±25° + sheen.
- **Trace node / timeline step**: Stitched path (dashed → solid as you scroll) with stamp-style nodes; active node = filled indigo stamp + label; demo values mono with the DEMO stamp; ordered-list equivalent. No block patterns in this chapter.

### 12.5 Iconography & illustration
- **Icons:** Hand-cut stamp style, single colour, slightly irregular 1.5–2 px edges, 24 px; seven verbs drawn as block stamps.
- **Illustration:** Block-print repeats redrawn from the ghee jar label and from licensed / commissioned blocks of a named Rajasthan printer (credited via `CraftCredit`); max 3 dye colours per pattern.
- **Photo treatment:** Warm natural light, hands, cloth, earthen vessels, real people (consented); real props only; +3% warmth on hover, no filters.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | reveals (20 px rise + fade) |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | cloth-pull page transition |
| `--dur-micro` | `240ms` | stamp hover, stitch solidify |
| `--dur-reveal` | `800ms` | content reveals |
| `--dur-scene` | `600ms` | cloth pull |
| `--dur-unroll` | `1000ms` | border bands unroll from centre |
| `--print-offset` | `120ms` | delay between block colour layers |
| `--float` | `translateY ±10px / 6000ms` | bottle float |

- **Signature:** patterns "print" in layer by layer; leheriya dividers drift; stitched trace path.
- **Scroll:** dividers 0.3× scroll parallax; borders unroll on enter.
- **Reduced motion:** patterns appear printed, dividers static, cloth pull = fade, logo static.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

**Tail prompt (append to every prompt below):** *Rajasthani hand block-printed and handloom cotton craft, natural-dye palette of indigo #24365A, madder #9E2F24, haldi #D9A23A, dabu clay #6E5440 and neem #4F6B3A on unbleached cotton #F4EEE2, slight hand-printed misregistration, warm natural daylight, calm modern restraint, no text, no watermark, no logo, no letters*

**Base negative prompt (append to every negative below):** *text, letters, words, numbers, logo, watermark, signature, label, signage, brand name, milk bottle, glass bottle, ghee jar, packaging, Holstein cow, Jersey cow, black-and-white spotted cow, cartoon cow face, cow wearing clothes, anthropomorphic animal, religious iconography, deity, people's faces*

| # | File path (web/public/desigo/styles/bohemian/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| 1 | `hero-landscape.png` | 3200×2000 (16:10) | no | Sunlit plain unbleached cotton cloth filling the frame, a narrow hand block-printed border band only along the top edge, soft fold shadows, the whole centre plain and empty | mandala, dreamcatcher, macramé, pampas grass, busy pattern in centre (+ base negative) | Ch. 01 hero |
| 2 | `hero-portrait.png` | 1400×2400 (7:12) | no | Same plain unbleached cotton as a tall portrait, thin block-print band at the top and bottom edges only, plain centre | mandala, pattern in centre (+ base negative) | Mobile hero |
| 3 | `worlds/master-26.png` | 3200×2000 (16:10) | no | Unbleached cotton field framed by a neem-green and indigo hand block-printed border of pressed generic leaf forms, plain empty centre | named herbs, flowers, mandala (+ base negative) | Ch. 08 / /milk/master-26 |
| 4 | `worlds/root-14.png` | 3200×2000 (16:10) | no | Earth-clay cotton ground framed by a madder-red Dabu mud-resist border with a simple roots motif, plain empty centre | mandala, religious motifs (+ base negative) | Ch. 08 / /milk/root-14 |
| 5 | `worlds/base-3.png` | 3200×2000 (16:10) | no | Sunlit cotton field with one diagonal haldi-yellow leheriya wave band across the lower third, plain empty centre | tie-dye rainbow, mandala (+ base negative) | Ch. 08 / /milk/base-3 |
| 6 | `worlds/essential.png` | 3200×2000 (16:10) | no | Plain unbleached cotton with a single fine indigo running-stitch line forming a rectangular frame, nothing else | pattern, embroidery flowers (+ base negative) | Ch. 08 / /milk/essential |
| 7 | `journey/textile-scroll.png` | 4800×1400 (24:7) | no | A long hand block-printed cotton scroll divided into seven panels, each with a simple folk block motif: a zebu cow with hump, a thatched farm shed with khejri tree, a milk can, a round dotted test card, a chiller tank, a small plant building, a doorstep, joined by a running-stitch line | deities, Krishna, religious scenes, people's faces (+ base negative) | Ch. 03 journey scroll |
| 8 | `textures/handloom-cotton.png` | 2048×2048 seamless | no | Seamless tileable handloom woven cotton texture in unbleached cream #F4EEE2, visible irregular weave, flat even light | pattern, stains, folds (+ base negative) | HandloomTexture (512 px tile, 4% multiply) |
| 9 | `textures/leheriya-band.png` | 3000×240 tileable horizontally | yes | Seamless horizontal leheriya tie-dye diagonal wave band in indigo, haldi and madder with soft dye-bleed edges, on transparent background | rainbow, neon (+ base negative) | LeheriyaDivider |
| 10 | `textures/bandhani-dots.png` | 1024×1024 seamless | yes | Seamless bandhani tie-dye dot pattern of tiny white resist dots in small square clusters on indigo, flat textile scan, transparent background around the dots | mandala, flowers (+ base negative) | Cursor ring source, small fills |
| 11 | `ghee/courtyard.png` | 3200×2000 (16:10) | no | Sunlit Rajasthani courtyard corner with block-printed cotton textiles, brass vessels and earthen pots softly out of focus at the edges, warm and layered, empty plain centre | jar, bottle, deities, lamps, marigold garlands on idols (+ base negative) | Ch. 12 ghee, /ghee gifting |

Generated motifs are placeholders only: final borders must come from the ghee-label vector or from blocks licensed from a named Rajasthan printer (credited on /about).

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/19_bohemian.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/bohemian/
- [ ] Pattern never within 120 px of the bottle; quality, trace and technology chapters pattern-free
- [ ] No "naturally dyed" or ritual / health copy; craft credit block present
