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
used) and supporters (pending) · /reserve is a clean form inside a light border.

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
