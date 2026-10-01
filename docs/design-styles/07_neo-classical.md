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
| `--gold-leaf` | `#B08D45` | Gold text at large sizes |
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
- **ESSENTIAL** — ivory marble niche `#F4EDE2` with fine veining, plain moulding — the purest classical form.
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
- **/about** — inscription wall timeline; supporters on a plain tablet (pending).
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
