# 07 — Neo-classical · DESIGO® style build plan

Status: proposal v0.1 · 2026-10-01 · **Fit 3 / 5** · Best used for: Heritage (10), Ghee (12), Story (14) and the /about page — with an *Indian* classical vocabulary (Rajput–Mughal arches, Jodhpur sandstone, jaali), not Greco-Roman columns.

---

## 1. Style essence

Neo-classicism revives the order, symmetry and proportion of classical architecture: columns and arches, pediments, symmetrical compositions, serif inscriptions, marble and stone, restrained ornament and a sense of permanence. In digital design it appears as centred symmetrical layouts, engraved serif capitals, architectural frames, and statuary-style product presentation.

Origins: 18th-century European revival of Greek and Roman forms (Palladio, Canova), the Indo-Saracenic and Rajput architecture of Rajasthan (Umaid Bhawan Palace in Jodhpur, 1929–43, is a late Indo-Deco classical building), and luxury houses that use classical framing (Dior, Bulgari).

Three reference points:
1. **Umaid Bhawan Palace, Jodhpur** — sandstone, symmetry, domes and arches: DESIGO®'s home city in classical form.
2. **Mehrangarh Fort's jharokhas and jaali screens** — carved stone windows and lattices, light filtered through pattern.
3. **Bulgari and Dior heritage sites** — products presented like statues in architectural niches, Roman capitals, marble.

## 2. Why it fits DESIGO® (and where it fights)

DESIGO® sells continuity: indigenous breeds, bilona ghee, a Rajasthani origin. Neo-classical framing gives permanence and dignity — the bottle in a carved sandstone niche feels like heritage, not a fad. Jodhpur's own architecture offers an authentic, ownable classical language that no Western competitor can copy. It is especially right for ghee, a traditional, gifting product.

Where it fights: classicism is static and formal; DESIGO®'s story is also about technology and movement (trace, chill, deliver). Greco-Roman columns would be culturally wrong and pompous. Overuse makes a milk brand feel like a hotel or a jeweller, distancing everyday buyers.

**Fit score: 3 / 5.** Strong in heritage chapters and for ghee; too formal for the evidence and technology chapters, which should step back to minimal/Swiss. The full plan below describes a complete Indian-neo-classical site.

## 3. Art direction

### Palette — "Jodhpur sandstone"
| Token | Hex | Role |
|---|---|---|
| `--nc-marble` | `#F4F0E6` | Marble / milk ground |
| `--nc-sandstone` | `#D9B48F` | Chittar sandstone (Umaid Bhawan) — architectural surfaces |
| `--nc-sandstone-deep` | `#A9784F` | Carved shadow, relief edges |
| `--nc-stone-ink` | `#3A2E25` | Engraved text on sandstone (≥ 7:1 on marble) |
| `--forest` | `#0B3B32` | Deep niches, night chapters |
| `--gold` | `#C8A96B` | Gilding, rules, inscriptions |
| `--gold-leaf` | `#94742F` | Gold text at ≥ 24px only (3.9:1 on marble; was `#B08D45`, which measured 2.7:1) |
| `--nc-gold-ink` | `#7A5C24` | Engraved-gold text at any size (5.5:1 on marble) — the CTA colour, added in the 2026-10-03 audit |
| `--nc-blue` | `#3E5F8A` | Jodhpur "Blue City" accent — used once per page at most |
| `--ink` | `#1E211F` | Body text |
| Variant niches | MASTER 26 `#1F5C45` · ROOT 14 `#B3202A` · BASE 3 `#E89A1C` · ESSENTIAL `#CDB89A` | Inner niche colour (deep values `#0A2A20`, `#4A0A0F`, `#5A3304`, `#4D4130` for shadows) |

### Typography
- Display inscriptions: **Cormorant** (Garamond family, OFL) SC 500 / Cormorant Garamond 300 italic — engraved Roman capitals with generous tracking (+0.12em).
- Alternative inscription face: **Cinzel** 500 for short carved labels (V-codes, chapter numerals).
- Text: **EB Garamond** 400 for long reading in heritage chapters; **Inter Tight** 400 for UI and data contexts.
- Devanagari: **Tiro Devanagari Hindi** — designed by Tiro Typeworks, classical and calligraphic; perfect for bilingual inscriptions (e.g. "बिलोना घी" beside "BILONA GHEE"; the DESIGO® wordmark itself is never transliterated without brand approval).
- Numerals: Roman numerals for chapters (I–XV), Arabic oldstyle figures for years.

### Texture
Sandstone texture (photographed on site in Jodhpur, 4K, tileable) at 12% on architectural surfaces; marble veining at 5% on milk grounds; carved relief via layered shadows (no 3D engine needed).

### Imagery
Real photographs presented in arched frames; farm landscapes at golden hour with warm grading; architectural photography of Jodhpur sandstone used as framing (commissioned or licensed, never mixed up with DESIGO® farm facts).

### Iconography
Engraved line icons with serif terminals; medallions (circular frames with gold keyline) for the seven verbs.

### Grid
Symmetrical 12-column grid with a strong central axis; compositions in triads (left niche · centre arch · right niche). Proportions follow the golden ratio and the classical 1:2 arch (width:height). Outer margins 6vw, gutters 32px. Mobile: single central axis, arches narrow to 1:2.4.

## 4. Motion & interaction language

- Stately, slow: reveals 900ms `cubic-bezier(.16,1,.3,1)`; scene transitions 1400ms `cubic-bezier(.65,0,.35,1)`.
- Light is the animation: a slow sun-shaft moves through jaali screens as you scroll, casting pattern shadows across text and bottle (CSS mask + gradient, scroll-linked).
- Inscriptions reveal as if carved: letters appear with a top-down mask and a gold glint that travels across (1200ms).
- Arches open: a pair of carved doors (or a jaali screen) slides apart to reveal each chapter (1200ms).
- Cursor: a 12px gold-ringed dot; **link** → ring expands into a small arch outline; **bottle** → arch-shaped frame labelled `DRAG` / `TILT` in Cinzel; touch: off.
- Hover: underline buttons with a gilded rule that draws from the centre outward (600ms); medallions rotate their keyline 30°.
- Page transitions: a sandstone curtain wall with an arch opening scales up until the viewer passes through (1200ms).

## 5. The hero bottle and the four variant worlds

**Presence.** The bottle stands in a carved sandstone niche (jharokha) at the centre of a symmetrical façade, on a small marble plinth, like a statue. Light from the upper left through a jaali casts a soft lattice shadow over the niche wall — never over the label. Float ±6px / 7s; tilt ±5°.

**Rotation.** Single render: ±18°, with the jaali shadow shifting accordingly. With 360 frames: drag rotates the bottle on its plinth; a gilded compass ring engraved in the plinth (0°–360°, Roman numeral markers every 90°) turns with it. Keyboard: arrows 5°.

**Variant worlds** — four niches in one gallery:
- **MASTER 26** — deep green inner niche `#1F5C45`, gold-leaf inscription "MASTER · XXVI" (with Arabic "26" in the info panel for clarity), carved leaf frieze.
- **ROOT 14** — red inner niche `#B3202A` with darker `#4A0A0F` vault, carved root/earth frieze, "ROOT · XIV".
- **BASE 3** — amber niche `#E89A1C`, sun-ray carving above the arch, "BASE · III".
- **ESSENTIAL** — ivory marble niche `#F4EDE2` with fine veining, plain moulding — the plainest classical form.
Info panel: an engraved stone tablet beside the niche — V-code in Cinzel, name, line in EB Garamond italic, descriptors with pending markers (a small hollow gold diamond + dotted underline).

## 6. Page-by-page treatment

### Home
| # | Chapter | Neo-classical treatment |
|---|---|---|
| I (01) | Hero | Symmetrical sandstone façade; bottle in central niche; "Milk from the source." as an inscription above the arch; CTAs as gilded underlines either side. |
| II (02) | Bottle becomes the story | Six words carved into six medallions around the arch; each lights up with a sun-shaft as you scroll; ground darkens to forest night. |
| III (03) | Cow to bottle | A frieze: seven carved relief panels (cow, farm, milk, test, chill, plant, bottle) in a horizontal band; the milk line is a gilded channel through the frieze. |
| IV (04) | Where it begins | Real farm photographs in arched frames along a colonnade (arcade of jharokhas); parallax between arches and images. |
| V (05) | Breeds | A portrait gallery: six arched frames with engraved name plates and region; pending plates read "Awaiting confirmation". |
| VI (06) | Traceability | Step back to restraint: forest ground, the trace path as a gilded line with medallion nodes; plain text panels; "Illustrative journey — not live data". |
| VII (07) | Quality | A marble tablet listing the 16 parameters in two columns, engraved; values "— pending lab confirmation". Very legible. |
| VIII (08) | Four milks | The four niches in a gallery. |
| IX (09) | Milk as material | Milk flowing down marble steps like a stepwell (baori) — a slow, real-time ribbon; references Toorji ka Jhalra stepwell in Jodhpur. |
| X (10) | Heritage | **Signature chapter**: full jaali screen with moving light, one sentence inscribed in Cormorant italic, cow drawn as a carved relief. |
| XI (11) | Technology | The façade fades to a blueprint: classical proportion lines and the seven verbs as medallions — "Tradition is the source. Technology protects the journey." |
| XII (12) | Ghee | **Signature chapter**: three jars in three gilded niches, warm gold light, jar-label folk pattern as carved frieze; each linked to its source milk. |
| XIII (13) | Trace your milk | A plain charcoal console set into a stone frame; DEMO label clear. |
| XIV (14) | Story | Milestones as inscriptions on a long stone wall; verified only. |
| XV (15) | Final CTA | The façade again at dusk; "Know where your milk comes from."; footer in sandstone band. |

### Inner pages
- **/milk** — a gallery corridor with four niches. **/milk/[variant]** — single niche + tablet + compass-ring viewer.
- **/ghee** — gilded triad, bilona process as a five-panel frieze with real photographs.
- **/origin** — colonnade photo essay; breed portrait gallery.
- **/trace** — restrained gilded map + console. **/technology** — blueprint façade.
- **/about** — inscription wall timeline; no supporters tablet until written evidence is on file (KB Q34).
- **/reserve** — form on a marble panel, centred, single column.

## 7. Component variants

`Facade` (symmetrical SVG architecture) · `Niche` (jharokha mask) · `JaaliLight` (scroll-linked light mask) · `Inscription` (carved reveal) · `Medallion` · `Frieze` (horizontal relief track) · `CompassRingViewer` · `StoneTablet` (spec/info) · `ArchFrame` (photo) · `StepwellRibbon` · `ArchCurtainTransition` · `GildedUnderlineButton` · `ClaimText` · `AssetSlot` (empty niche with engraved label).

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | Classical type system | Cormorant/Cinzel/EB Garamond/Tiro Devanagari, tokens | Engraved text ≥ 4.5:1 on sandstone | Brand colours | 2 |
| 2 | Shell | Façade shell, nav, cursor | Sandstone nav band, arch cursor, curtain transition | Symmetric on all widths; nav keyboard-ready | Wordmark | 4 |
| 3 | Hero | Bottle in niche | Facade, Niche, jaali shadow | Shadow never crosses label; LCP ≤ 2.2s | Renders, sandstone texture | 4 |
| 4 | Story sequence | Medallion ring | 6 medallions, sun-shaft | Reduced motion = list of inscriptions | — | 3 |
| 5 | Cow → bottle | Relief frieze | 7 relief illustrations, gilded channel | Reliefs commissioned; vertical on mobile | Illustrator (relief style) | 6 |
| 6 | Origin | Colonnade photo essay | ArchFrames, parallax | Photos uncropped in key areas | B1, B2 | 3 |
| 7 | Breeds | Portrait gallery | 6 frames + plates | Pending plates visible | B3, approval | 2 |
| 8 | Trace map | Gilded restrained map | Medallion nodes, panels | DEMO label; keyboard | Trace wording | 3 |
| 9 | Quality | Marble tablet | 16-parameter tablet | No invented values | Lab approval | 2 |
| 10 | Four worlds + 360 | Gallery of niches | 4 niches, CompassRingViewer | Viewer sync; fallback single render | **360 sequences (A)** | 5 |
| 11 | Heritage | Jaali chapter | Jaali screen, carved cow | Light mask ≤ 2ms/frame | Jaali pattern drawing | 3 |
| 12 | Technology | Blueprint façade | Proportion lines, verb medallions | Public verbs | — | 3 |
| 13 | Ghee | Gilded triad | 3 niches, frieze from jar label | Mapping correct | Jar cutouts, label vector | 3 |
| 14 | Trace demo | Console in stone | TraceYourMilk | Demo flagged | — | 2 |
| 15 | /milk pages | Corridor + variant pages | Pages | Shared transitions smooth | A, pricing | 4 |
| 16 | /origin, /trace, /technology | Inner pages | Colonnade, map, blueprint | ≤ 2 MB first load | B1–B8 | 4 |
| 17 | /about, /ghee, /reserve | Remaining | Inscription wall, ghee frieze, marble form | Form usable; no ornament in inputs | Milestones | 4 |
| 18 | Mobile pass | Single axis | Tall arches, vertical frieze | No horizontal scroll | — | 3 |
| 19 | A11y + reduced motion | AA | Static light, no curtain | axe clean; inscriptions as real text | — | 2 |
| 20 | Perf, QA, handover | Ship | SVG architecture sprite, docs | LCP ≤ 2.2s, INP ≤ 180ms | Approvals | 4 |

Total ≈ 66 days.

## 9. Assets needed from DESIGO®

1. 360 sequences (A).
2. Ghee jar label in vector (frieze source) and jar cut-outs.
3. Permission to photograph or license Jodhpur sandstone, jaali and stepwell textures (or a commissioned shoot) — and clarity that architecture is atmosphere, not a claim about DESIGO® premises.
4. Real farm and breed photos B1–B3; archive material B11 for the inscription timeline.
5. Brand approval of any Hindi inscriptions and of the Roman-numeral chapter system.

## 10. Performance, accessibility and mobile

- Performance: architecture as inline SVG (≤ 40 KB per façade), textures as AVIF tiles (≤ 80 KB). Jaali light is a CSS mask, not WebGL.
- Accessibility: engraved/low-contrast text is the main risk — inscriptions use `--nc-stone-ink` or gold only at ≥ 24px. Roman numerals always have an accessible Arabic equivalent (`aria-label="Chapter 8"`). Symmetrical centred text is limited to short lines; body copy stays left-aligned.
- Reduced motion: doors/curtains replaced by fades; light static.
- Mobile: one niche per screen; frieze becomes vertical panels; façade simplified to a single arch.

## 11. Risks and premium guardrails

Risks: pompous or hotel-like; culturally confused (Greek columns in Rajasthan); static and slow; distancing everyday customers; implied religious or royal associations.

**Premium guardrails**
1. Indian classical, not Greco-Roman: jharokha, jaali, sandstone, stepwell — rooted in Jodhpur.
2. Restraint in ornament: one carved element per viewport; flat milk space around it.
3. No palace or royal claims; architecture is setting, not heritage the brand claims to own.
4. Avoid religious iconography and temple imagery; cows are shown naturally, not deified.
5. Gold is matte, engraved, small — never shiny gradients or "gold foil" effects.
6. Evidence chapters (trace, quality, demo) drop to plain, legible layouts.
7. Typography carries the class: proper small caps, oldstyle numerals, generous tracking.
8. Real materials: photographed sandstone and marble, not procedural textures.
9. Copy stays modern and plain inside a classical frame: "Traceable milk from indigenous Indian cows."
10. Test with Jodhpur customers for cultural tone — proud, not touristy.

## 12. Build-ready spec sheet

> Audit 2026-10-03: section 12 was missing and has been added. Fixed in the body: `--gold-leaf #B08D45` measured 2.7:1 on marble (fails even large text) → `#94742F` (3.9:1, ≥ 24 px only) and a new engraved-gold text token `#7A5C24` (5.5:1) is the primary; 'the purest classical form' → 'the plainest' (no 'pure' superlatives near the product); /about no longer shows supporters (KB Q34). Fonts already OFL. Added states, cursor map, motion tokens and 11 image prompts.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | `--c-primary` | `#7A5C24` | engraved gold (new token `--nc-gold-ink`): gilded-underline CTA label, filled CTA, V-codes, key inscriptions | 5.5:1 on bg |
| Primary ink | `--c-on-primary` | `#F4F0E6` | marble text on engraved-gold fill | 5.5:1 on primary |
| Secondary | `--c-secondary` | `#0B3B32` | forest (`--forest`): deep niches, night chapters, trace map ground | 10.9:1 on bg |
| Accent | `--c-accent` | `#3E5F8A` | Jodhpur blue (`--nc-blue`): focus ring and one accent per page at most | 5.8:1 on bg |
| Background | `--c-bg` | `#F4F0E6` | marble / milk ground (`--nc-marble`) | text 14.3:1 |
| Surface | `--c-surface` | `#D9B48F` | Chittar sandstone (`--nc-sandstone`): façades, tablets, nav band — small text on it is stone-ink `#3A2E25` (6.8:1) | text on surface 8.4:1 |
| Text | `--c-text` | `#1E211F` | ink body (`--ink`); inscriptions in stone-ink `#3A2E25` (11.6:1) | 14.3:1 on bg |
| Muted text | `--c-text-muted` | `#5A4A3C` | captions, region labels on marble | 7.4:1 on bg; 4.4:1 on sandstone → use stone-ink there |
| Line | `--c-line` | `#C8A96B` | matte gold (`--gold`) rules, keylines, medallion rings; carved edges `#A9784F` | 2.0:1 on bg; decorative; controls also carry a stone-ink edge |
| Success / Pending / Demo | `--c-ok` / `--c-pending` / `--c-demo` | `#1F5C45` / `#8A5A1F` / `#171918` | ok = leaf green (verified only); pending = hollow gold diamond ◇ + dotted underline + 'Awaiting confirmation' in sienna; DEMO = plain charcoal console plate, no carving | ok 6.9:1 · pending 5.2:1 · demo 15.5:1 on bg |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Code | Base | Deep | Light | How the world uses it |
|---|---|---|---|---|---|
| MASTER 26 | V1+ · green cap | `#1F5C45` | `#0A2A20` | `#D9E8DF` | green inner niche, `#0A2A20` vault shadow, carved leaf frieze, inscription 'MASTER · XXVI' (Arabic 26 in the tablet) |
| ROOT 14 | V1 · red cap | `#B3202A` | `#4A0A0F` | `#F3D9D6` | red inner niche, `#4A0A0F` vault, root/earth frieze, 'ROOT · XIV' |
| BASE 3 | V2 · amber cap | `#E89A1C` | `#5A3304` | `#F8E4C2` | amber niche, sun-ray carving above the arch, 'BASE · III' in deep |
| ESSENTIAL | V3 · ivory cap | `#CDB89A` | `#4D4130` | `#F4EDE2` | ivory marble niche with fine veining and plain moulding — the plainest form |

Dark-chapter inversion: night chapters (02 end, 06 Traceability, 15 Final CTA at dusk) swap `--c-bg` → `#0B3B32`, `--c-text` → `#F4F0E6`, `--c-text-muted` → `#CFC6B4`, `--c-primary` → gold `#C8A96B` (5.5:1 on forest), `--c-line` stays gold; sandstone darkens to `#A9784F` for architecture only, and text panels become forest-2 `#0F4A3F` with marble text.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Cormorant (variable) + Cormorant SC | `@fontsource-variable/cormorant` · `@fontsource/cormorant-sc` · Google Fonts | SC 500 for inscriptions; Cormorant 300 italic for the heritage line | clamp(3rem, 7.5vw, 8rem) | 1.0 | +0.12em (SC) / -0.01em (italic) | SMALL CAPS / Sentence |
| Headline H1–H2 | Cormorant (variable) | `@fontsource-variable/cormorant` | H1 500 / H2 500 italic | H1 clamp(2.4rem, 4.8vw, 4.75rem) · H2 clamp(1.75rem, 3vw, 2.75rem) | 1.05 / 1.15 | +0.02em | Title / Sentence |
| Body | EB Garamond (variable) — heritage reading; Inter Tight — UI/data contexts | `@fontsource-variable/eb-garamond` · `@fontsource-variable/inter-tight` | 400, oldstyle figures (`onum`) | clamp(1.0625rem, 1rem + 0.25vw, 1.25rem) | 1.6 | 0 | Sentence, left-aligned |
| Label / UI | Cinzel (variable) | `@fontsource-variable/cinzel` · Google Fonts | 500 | 0.75rem (V-codes, chapter numerals I–XV) | 1.3 | +0.14em | UPPERCASE |
| Data / mono | JetBrains Mono (variable) | `@fontsource-variable/jetbrains-mono` | 400 | 0.875rem | 1.5 | 0 | As data (trace console only) |
| Devanagari (optional) | Tiro Devanagari Hindi | `@fontsource/tiro-devanagari-hindi` · Google Fonts | 400 / 400 italic | matches display (inscriptions) or body | 1.3 / 1.6 | 0 | — |

Licence: Cormorant, Cormorant SC, Cinzel, EB Garamond, Inter Tight, JetBrains Mono and Tiro Devanagari Hindi are SIL OFL 1.1. Pairing: carved Roman capitals and a Garamond reading face give permanence; Tiro Devanagari Hindi matches their calligraphic contrast for bilingual inscriptions.

### 12.3 Layout & surfaces
- **Grid:** symmetrical 12 columns with a strong central axis; triads (left niche · centre arch · right niche); 6vw outer margins, 32 px gutters, max-width 1520 px; arches 1:2 (mobile 1:2.4); golden-ratio vertical rhythm. Mobile: single central axis, 4 columns.
- **Spacing scale:** 4 · 8 · 16 · 24 · 40 · 64 · 104 · 168 px (Fibonacci-leaning for classical rhythm).
- **Radius:** 0 for tablets and panels; arches use `border-radius: 50% 50% 0 0 / 25% 25% 0 0` masks; `--r-pill` for tags and medallions.
- **Borders:** 1 px gold rule with 1 px `#A9784F` inner carved line 2 px apart; medallions 1 px gold keyline.
- **Elevation:** carved relief via layered inset shadows (`inset 0 2px 0 rgba(255,255,255,.35), inset 0 -2px 0 rgba(58,46,37,.25)`); the bottle sits on a marble plinth with contact shadow and a soft jaali-lattice light pattern on the niche wall (never over the label).
- **Texture/overlay:** photographed sandstone at 12% on architecture; marble veining at 5% on milk grounds. One carved element per viewport.

### 12.4 Components
States are listed as default · hover · focus-visible · active · disabled · loading. Focus-visible is never removed.

- **Primary button** — gilded-underline button: label Cinzel 500 uppercase in engraved gold `#7A5C24` on marble, 1 px gold rule beneath and a travelling arrow; 48 px tall, padding 0 8 px; a filled variant (`#7A5C24` fill, marble label) for Reserve · hover the gilded rule draws from the centre outward (600 ms), arrow travels 6 px · focus-visible 2 px Jodhpur-blue `#3E5F8A` ring, 3 px offset · active rule 2 px · disabled label `#A9A08F`, no rule animation · loading a small medallion keyline rotates 30° steps.
- **Secondary button** — outline arch-top button: 1 px gold frame with a shallow arched top, stone-ink label; same sizes · hover frame fills sandstone 20% · focus-visible blue ring · active 30% · disabled 40% · loading as primary.
- **Text / arrow link** — EB Garamond italic or Cinzel label with 1 px gold underline and a fine arrow; hover underline thickens and arrow travels 8 px; focus-visible blue outline.
- **Icon button (incl. menu)** — 48 px medallion: circle with gold keyline, engraved line icon (serif terminals); menu = three engraved rules; hover keyline rotates 30°; focus-visible blue ring; active fill sandstone 20%; disabled 40%; `aria-label` / `aria-expanded`.
- **Navigation bar** — sandstone band `#D9B48F` (72 px) with a 1 px gold rule and carved inner line beneath; symmetrical: links split left and right of the centred logo, Reserve at far right; Cinzel 500 labels in stone-ink. Mobile: logo centred, medallion menu right; menu = a marble panel opening like carved doors (reduced motion: fade). Logo: the DESIGO® header logo is the black wordmark drawn as SVG strokes that write and un-write in an infinite loop (4.6 s cycle: write 0–1.2 s · hold to 3.0 s · un-write 3.0–4.2 s · rest to 4.6 s, as built in `DesigoLogo.tsx`); charcoal `#171918` on light grounds, white (milk `#F7F4EC`) on dark grounds; one colour only — never gilded, tinted, outlined, patterned or recoloured by this style; no hover trigger; reduced motion shows the static wordmark; the logo is a link to / with `aria-label="DESIGO® home"`.
- **Cursor** — default 12 px gold-ringed dot · hover (link): ring expands into a small arch outline · ROTATE (bottle): arch-shaped frame + `ROTATE` in Cinzel · EXPLORE (façade/colonnade): ring + `EXPLORE` · ENTER (niche/door): doorway outline + `ENTER` · VIEW (arched photo frame): arch + `VIEW` · TRACE (medallion node): medallion + `TRACE`. Touch: off; tap hints as Cinzel captions.
- **Card / panel / info block** — `StoneTablet`: marble or sandstone tablet, radius 0, 1 px gold rule + carved inner line, padding 32 px, heading Cormorant SC, body EB Garamond · hover (if interactive) gold glint travels across the rule (1200 ms) · focus-visible blue ring · active · disabled n/a · loading engraved placeholder lines in `#E7DFCF`.
- **Badge / tag** — Cinzel 500 0.68rem uppercase, pill, 26 px: neutral marble with gold keyline; variant = light fill + deep text; **pending verification** = hollow gold diamond ◇ + 'Awaiting confirmation' in sienna `#8A5A1F` + dotted underline on the claim + popover; **DEMO · not live data** = plain charcoal `#171918` plate with marble text, never carved or gilded.
- **Input + form field** — a plain charcoal console set into a stone frame: label Cinzel above, 56 px input, 1 px marble edge, JetBrains Mono, placeholder `DSG-BTL-000001-3 (sample format)` · hover edge 2 px · focus-visible 2 px gold ring · invalid `#E36B6B` edge + message · disabled 40% · loading medallion rotate; reserve forms on a marble panel, centred single column, same field rules in ink.
- **Divider / ornament** — gold hairline; double rule (gold + carved line); one small carved lotus/leaf rosette at the centre (max one per viewport, `aria-hidden`).
- **Section header** — Roman numeral chapter (`VIII`) in Cinzel with `aria-label="Chapter 8"`, centred above a short gold rule, title in Cormorant SC, optional Tiro Devanagari line beneath.
- **Product info block** — engraved tablet beside the niche: V-code Cinzel (`DESIGO® V1+`), name Cormorant SC, inscription numeral (XXVI) + Arabic 26, line in EB Garamond italic, size `1 L glass · 900 g` with pending ◇, price 'Price pending confirmation' until approved, descriptors each with pending marker.
- **Bottle stage** — carved sandstone jharokha niche at the centre of a symmetrical façade; marble plinth; contact shadow; jaali light from upper-left across the niche wall (scroll-linked mask), never over the label; float ±6 px / 7 s, tilt ±5°; with 360 frames a gilded compass ring engraved in the plinth (Roman numerals every 90°) turns with the bottle; arrows step 5°.
- **Trace node / timeline step** — gold medallion 28 px (keyline + engraved verb icon) on a forest ground, joined by a 1.5 px gilded line; states upcoming (keyline only) · active (gold fill, plain text panel) · visited (gold 60%) · hover keyline rotates 30° · focus-visible blue ring. 'Illustrative journey — not live data' plate first.

### 12.5 Iconography & illustration
- **Icons:** engraved line icons, 1.5 px stroke with small serif terminals, 24 px grid, set inside 28–48 px gold-keyline medallions for the seven verbs.
- **Illustration:** carved-relief frieze panels and jaali patterns (SVG for UI, AI plates below for prototype backdrops; final relief art commissioned or photographed in Jodhpur).
- **Photo treatment:** real photographs in arched frames, warm golden-hour grade; architectural photography is atmosphere only, never a claim about DESIGO® premises.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | reveals (900 ms) |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | scene transitions, doors |
| `--dur-micro` | `300ms` | hover, medallion rotation |
| `--dur-reveal` | `900ms` | content reveals |
| `--dur-scene` | `1400ms` | scene transitions |
| `--carve` | `1200ms` | inscription top-down mask + gold glint |
| `--doors` | `1200ms` | carved doors / jaali slide apart, arch curtain transition |
| `--rule-draw` | `600ms` | gilded rule draws from centre |

Light is the animation: a slow sun-shaft moves through jaali screens with scroll (CSS mask, scroll-linked). Stately and slow; no bounce. Reduced motion: doors and curtains become 200 ms fades, light static, inscriptions appear complete, logo static.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

Architecture is setting, not a claim: prompts say 'inspired by Jodhpur sandstone architecture' and never reproduce a named palace. Niches stay empty for the composited bottle/jars.

**Tail prompt (append to every prompt):** *Indian neo-classical architecture inspired by Jodhpur Chittar sandstone, jharokha arches and jaali lattices, symmetrical, warm low sun, marble #F4F0E6, sandstone #D9B48F and #A9784F, matte gold #C8A96B, forest #0B3B32 in deep shadows, photographic realism, calm, dignified, premium, no text, no watermark, no logo, no letters*

**Base negative prompt (prepend to every negative prompt):** text, letters, words, numbers, typography, logo, watermark, signature, label, brand mark, milk bottle, glass bottle, ghee jar, product packaging, Holstein cow, Jersey cow, cartoon cow face, anthropomorphic animal, people's faces, religious idols, deity imagery, halo, glowing body, medical imagery, plastic sheen, oversaturated neon, lowres, blurry, jpeg artefacts, distorted anatomy, extra limbs, checkerboard background

| # | File path (web/public/desigo/styles/neo-classical/...) | Size / ratio | Transparent? | Prompt | Negative prompt (+ base) | Used in |
|---|---|---|---|---|---|---|
| 1 | `hero.png` | 3200×2000 (16:10) | no | Symmetrical carved sandstone façade with a tall central jharokha niche, empty, a small marble plinth inside it, two smaller niches either side, soft jaali lattice shadows on the walls, warm morning light from the upper left | people, flags, named palace, temple, idols, signage | 01 Hero, 15 Final CTA |
| 2 | `hero-portrait.png` | 1400×2400 (7:12) | no | Vertical view of a single tall carved sandstone arch niche, empty marble plinth, jaali shadow pattern on the side wall, warm light | people, idols | 01 Hero mobile |
| 3 | `worlds/master-26.png` | 3200×2000 + 1400×2400 | no | Empty carved sandstone niche whose inner walls are deep green #1F5C45 lime plaster deepening to #0A2A20 in the vault, a carved leaf frieze around the arch, marble plinth, soft lattice light | idols, counted leaves, people | 08 Four milks · /milk/master-26 |
| 4 | `worlds/root-14.png` | 3200×2000 + 1400×2400 | no | Empty carved sandstone niche with deep red #B3202A lime plaster inner walls and an oxblood #4A0A0F vault, a carved frieze of roots and earth layers around the arch, marble plinth | idols, blood, people | 08 Four milks · /milk/root-14 |
| 5 | `worlds/base-3.png` | 3200×2000 + 1400×2400 | no | Empty carved sandstone niche with warm amber #E89A1C lime plaster inner walls, sun-ray carving above the arch, golden late-afternoon light, marble plinth | sun with face, idols | 08 Four milks · /milk/base-3 |
| 6 | `worlds/essential.png` | 3200×2000 + 1400×2400 | no | Empty ivory marble niche #F4EDE2 with fine grey veining and plain moulding, soft skylight, marble plinth, very restrained | ornament overload, idols | 08 Four milks · /milk/essential |
| 7 | `journey/frieze.png` | 6000×1200 (horizontal) | no | Long horizontal carved sandstone relief frieze in seven framed panels: an Indian zebu cow with hump and dewlap, a farm with khejri tree, a milk can, a round test card with sixteen dots, a chiller, a small dairy building, and a final empty panel; a gilded channel runs through all panels | bottle, people's faces, deities, inscriptions | 03 Cow to bottle |
| 8 | `textures/sandstone.png` | 2048×2048, seamless | no | Seamless tileable Jodhpur Chittar sandstone surface, fine grain, faint chisel marks, warm pink-buff, flat light | cracks, stains, seams | façades, nav band (12%) |
| 9 | `textures/jaali-shadow.png` | 2400×2400 | yes (real alpha) | Soft geometric jaali lattice shadow pattern of interlocking stars and hexagons, as cast by sunlight through a carved stone screen, isolated on transparent background | hard edges, text | JaaliLight mask, hero niche wall |
| 10 | `material/stepwell.png` | 3200×2000 | no | Symmetrical sandstone stepwell (baori) seen from above at an angle, descending stepped tiers, warm light, the lowest pool empty and still, calm | people, litter, named landmark | 09 Milk as material |
| 11 | `ghee/gilded-triad.png` | 3200×2000 + 1400×2400 | no | Three empty carved sandstone niches side by side with gilded inner edges and warm gold light, a folk-pattern carved frieze above, marble shelves | jars, idols, diyas | 12 Ghee · /ghee |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/07_neo-classical.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/neo-classical/
- [ ] Roman numerals always carry an Arabic `aria-label`; centred text limited to short lines
- [ ] Gold text only ≥ 24 px (`#94742F`) or engraved gold `#7A5C24` for small text
