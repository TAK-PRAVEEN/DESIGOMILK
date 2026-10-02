# 51 — Fairy Tale · DESIGO® build plan

> **Priority style (client request, 2026-10-03)**

**Fit score: 3 / 5 for the whole site, 4 / 5 as a commissioned story layer** · **Best used for:** an illustrated
tale, *The Journey of a Bottle of Milk*, told across chapter 03 (cow → bottle), a dedicated /story page, the /about
page and printed matter (delivery inserts, school visits). It must be painted by credited artists from the Phad
and Pichwai traditions, not generated.

---

## 1. Style essence

The fairy-tale style tells the brand as a storybook: illustrated scenes, a narrator's voice, a beginning and an end,
a world slightly more wonderful than daily life but recognisably true. For DESIGO® the storybook is Indian: the
painted narrative traditions of Rajasthan, where a story unrolls across cloth and is read by lamplight.

Three reference points (all used with respect and with artists' involvement):
1. **Phad painting** of Bhilwara and Shahpura, Rajasthan: long horizontal cloth scrolls that narrate the epics of
   folk deities, traditionally unrolled at night and sung by Bhopa performers in front of a lamp. The Joshi family
   is the best-known lineage. Its visual grammar: flat colour, bold dark outlines, figures in profile, scale showing
   importance, no perspective, many episodes on one cloth.
2. **Pichwai painting** of Nathdwara, Rajasthan: devotional cloth paintings with exquisite cows, lotus ponds, trees,
   seasons and festivals, fine detail and gold. Cows are central and portrayed with great tenderness.
3. **Storybook craft**: Tara Books (Chennai), whose handmade books with Indian folk and tribal artists set the
   standard for crediting and collaborating with traditional painters.

### Respect protocol (a condition of using this style)
- **Commission, credit and pay** living artists from these traditions. Every artwork carries a credit line ("Painted
  by [artist], [place], in the Phad tradition"), approved by the artist.
- **Use no deities and no sacred narratives.** Phad and Pichwai are devotional arts. The DESIGO® tale borrows the
  visual grammar and secular motifs (cows, herders, trees, lotus, wells, seasons, the village and the town), and
  is a *new* everyday story, agreed with the artists.
- **Never generate "Phad" or "Pichwai".** Generated images may be used only as internal storyboards and are replaced
  by the painted originals before anything is published. Prompts never name living artists.
- **Explain the art forms** on a short "About the paintings" page, with the artists' own words where possible.

## 2. Why it fits DESIGO® and where it fights

- **The journey ORIGIN → TRACE → TEST → CHILL → PROCESS → FILL → DELIVER is already a story in seven episodes**,
  and the Phad scroll is literally a format of episodes arranged along a cloth.
- **Cows are treated with reverence in Pichwai.** That is the exact tone DESIGO® needs for indigenous breeds:
  dignified, cared for, never a mascot.
- **It is local.** Jodhpur, Bhilwara and Nathdwara are all in Rajasthan. Commissioning these artists is a real,
  shareable story of craft, and it supports living traditions.
- **It is honest.** A painted tale is plainly an illustration, so it can show the journey warmly without pretending
  to be documentary evidence.

**Where it fights:** a storybook can feel childish or folksy beside "Apple product launch"; it can drift into
appropriation; commissioning takes 8–12 weeks; and a painted world cannot carry prices or lab data. The remedy is to
use it as a layer, with the art framed like museum pieces on milk-white space and type that stays modern.

## 3. Art direction

### Palette: natural pigments, harmonised with the brand
| Token | Hex | Use |
|---|---|---|
| `--cloth` | `#EFE3C8` | Painted-cloth ground (warmer than `--paper`) |
| `--milk` | `#F7F4EC` | Page around the art (the "gallery wall") |
| `--phad-yellow` | `#E2B13C` | Figures, fields, the sun |
| `--phad-orange` | `#D9782D` | Turbans, accents |
| `--phad-red` | `#B3202A` | = ROOT 14 base; borders, earth |
| `--phad-green` | `#1F5C45` | = MASTER 26 base; trees, grazing land |
| `--indigo` | `#2F4F7F` | Night, wells, the blue city of Jodhpur |
| `--lamp-black` | `#171918` | Outlines (= charcoal) |
| `--pichwai-night` | `#0B3B32` | Dark grounds for night episodes (= forest) |
| `--lotus` | `#D98C8C` | Lotus, dawn sky |
| `--gold` | `#C8A96B` | Gold-leaf details, rules, ghee |
| `--green` | `#1E7A68` | Links and focus ring (UI only) |

The artists' own pigments win: tokens are adjusted to match the scanned originals, not the other way round.

### Typography
- **Storyteller voice:** *Fraunces* (OFL) 400 at opsz 72, SOFT 100, WONK 1 for the narrator's lines at
  `clamp(1.5rem, 2.6vw, 2.4rem)`. It is soft and slightly old-fashioned, like a well-set storybook.
- **Episode titles:** *Rozha One* (OFL), a high-contrast Latin and Devanagari display face with a printed-poster
  feel, at `clamp(2.4rem, 6vw, 6rem)`.
- **Hindi text:** *Tiro Devanagari Hindi* (OFL). The tale is bilingual (English and Hindi), subject to an approved
  translation.
- **UI and credits:** *Inter Tight* 500, labels at .72rem, +0.18em.
- Body `1.0625rem/1.7`, 52ch.

### Texture, imagery, iconography
- Texture: high-resolution scans of the painted cloth itself (weave, pigment variation). No artificial grain.
- Imagery: the commissioned painting is the only illustration, digitised at 600 dpi and split into episode layers
  (background, figures, foreground) by the studio, with the artists' consent, for gentle parallax.
- Icons: small motifs taken from the paintings with permission (a lotus, a lamp, a bottle) at 24 px, drawn by the
  artists or traced with their approval.

### Grid
Two modes. **Gallery mode** (most pages): 12 columns, artwork framed with 5vw milk-white margins and a thin gold
hairline, caption and credit beneath. **Scroll mode** (chapter 03 and /story): a horizontal cloth, 7 episodes long,
with fixed narration at the bottom third and a band border top and bottom like a real Phad.

### Header wordmark
The black write/un-write DESIGO® loop stays unchanged on milk white. The wordmark is never painted into the tale.

## 4. Motion and interaction language

| Motion | Spec |
|---|---|
| Unroll | In scroll mode, the cloth translates horizontally with scroll (`scrub: 1`); a soft roller shadow (24 px gradient) sits at the right edge, as if the cloth is unrolling from a rod |
| Lamplight | The cursor carries a warm lamp glow: a 220 px radial `rgba(232,154,28,.18)` added with `soft-light`, lifting the painting under it. The painting is fully readable without it; the lamp only warms. |
| Episode settle | Figure layers drift 8–16 px against the background (parallax 0.9–1.1×) and settle over 1200 ms `cubic-bezier(.16,1,.3,1)` |
| Narration | Lines fade up by phrase (600 ms, 120 ms stagger), never letter by letter |
| Page turn | None. There is no fake paper curl. Episodes cross-fade (600 ms) in gallery mode |

**Cursor states:** default 10 px gold dot · **painting**: the 220 px lamp glow with a flame dot · **link**: 40 px
gold-hairline ring · **360**: ring `DRAG` · **text**: native caret · **disabled**: 30% ring · touch: a fixed lamp
glows on the current episode.

**Hover:** links get a hand-drawn gold underline (an SVG stroke traced from the artists' border line) drawing in
over 400 ms; arrows travel 6 px; the primary button frame draws itself (600 ms).

## 5. The hero bottle and the four variants

Inside the tale, the bottle is **painted by the artists**: flat, in profile, its cap colour clear, carried by the
delivery person in the last episode. Outside the tale, at chapter edges, the painted bottle cross-fades into the
real render ("from the story to your doorstep"), a deliberate bridge between illustration and product.

- **Real render presence:** on product pages the render floats (±8 px over 6 s, tilt ±8°) on milk white inside a
  painted border (a band of lotus or leaf motif from the commission), never placed inside a painted scene, which
  would mix photography and painting awkwardly.
- **Before 360 frames:** ±25° turn with sheen. **After:** the Bottle360Viewer inside the painted border, with drag
  and the counter `036 / 072` in Inter Tight.

| Variant | Painted world (one commissioned panel each) |
|---|---|
| **MASTER 26** | A grove in deep `--phad-green` with a lotus pond and birds, painted in the Pichwai manner. Line: "Twenty-six herbs. The fullest expression of the source." Herb count pending, and the painting never shows a counted set of herbs. |
| **ROOT 14** | Red earth, a stepwell and grazing land under a pale sky in Phad red and ochre. "Fourteen herbs, rooted in free grazing." (pending). |
| **BASE 3** | A golden field at evening under a large plain sun disc (no sun-deity face). "The everyday foundation." |
| **ESSENTIAL** | A quiet courtyard with one tree, painted on mostly bare cloth. "Simple, balanced, honest." |

**Info panel** (outside the painting, on milk): `DESIGO® V1+` · the name in Rozha One · price and size with the dotted
underline and "pending approval" tooltip · descriptors · `RESERVE ———→`.

## 6. Page-by-page treatment

| # | Chapter | Treatment |
|---|---|---|
| 01 | Hero | Milk white, modern. The real bottle with a small painted vignette beside it (a cow under a khejri tree), framed like a museum piece with credit. Headline "MILK / FROM THE / SOURCE." in Fraunces. |
| 02 | Bottle becomes the story | The six words orbit the bottle; each word reveals a small painted detail (a hand at a cow, a field, a test card) as an inset. Milk → forest. |
| 03 | Cow → bottle | **Signature: the unrolling scroll.** Seven episodes on one horizontal cloth: dawn grazing (ORIGIN) · the collection recorded (TRACE) · the paper test (TEST) · cooling under stars (CHILL) · the plant (PROCESS) · glass bottles filled (FILL) · early-morning doorstep in the blue city (DELIVER), ending with the empty glass going back. Narration uses only the public lines in `journey`. |
| 04 | Where it begins | Real farm photography, not painting: the tale hands over to reality. A small painted detail sits beside each photo as a caption ornament. |
| 05 | Breeds | Six cow portraits painted in the Pichwai manner, each in a lotus border, with name, region and "Breed list client-stated · approval pending". Each artwork is checked against the real breed traits. |
| 06 | Traceability | Forest. The trace path as a painted road with eight small painted stations; nodes open plain-text panels. "Illustrative journey — not live data". |
| 07 | Quality | Not painted. A clean lab layout with one painted test-card vignette; readouts "— pending lab confirmation". |
| 08 | Four milks | Four painted panels (section 5), each beside the real render on milk. |
| 09 | Milk as material | The milk ribbon drawn as a painted river of milk (a Phad-style wave pattern), animated gently. |
| 10 | Heritage | The "About the paintings" moment: the artists, their towns, their tradition, a short video of painting in progress if they agree. |
| 11 | Technology | Charcoal, modern; the seven verbs each carry a tiny painted icon from the tale. |
| 12 | Ghee | Gold. A painted bilona churning episode (commissioned separately); three grades and pending prices outside the painting. |
| 13 | Trace your milk | Charcoal, modern input; the result appears as the matching painted episodes in a mini scroll. `DEMO` always visible. |
| 14 | Story | Verified milestones on a painted horizontal border strip; text on milk. |
| 15 | Final CTA | The last episode: the bottle at a doorstep at dawn. Then the real bottle returns. "Know where your milk comes from." |

**Inner pages:** /milk shows four painted panels with renders, leading by View Transition to /milk/[variant]
(painted world, bordered 360 viewer, plain facts table) · /origin and /trace follow chapters 04 and 06 · /about is
the artists and the team · /ghee is the bilona episode · /reserve is a plain form in one painted border ·
**/story** is the full bilingual scroll with captioned human narration.

## 7. Component variants

`ScrollCloth` (horizontal unroll with roller shadow) · `LampCursor` · `EpisodeLayers` (parallax from split artwork)
· `NarrationLine` (bilingual) · `GalleryFrame` (art + credit) · `ArtistCredit` (required prop on every artwork) ·
`PaintedBorder` (frames the 360 viewer) · `BreedPortraitPainted` · `TraceMap.paintedRoad` · `MilkRiver` (MilkFlow
variant) · `PaintedIcon` · `StoryAudio` (captions) · `PendingValue`.

## 8. 20-phase build plan

Commissioning runs in parallel: brief and artist selection (2 weeks), sketches approved by DESIGO® and the artists
(3 weeks), painting (6–8 weeks), scanning and layer separation (1 week).

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / deps | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | Pigment palette, storybook type | Tokens, bilingual specimen | Devanagari renders correctly; fonts ≤ 200 KB | Artist brief signed | 3 |
| 2 | Grid & shell | Gallery and scroll modes | Shell, `LampCursor`, `GalleryFrame` | Credit visible on every artwork | — | 3 |
| 3 | Hero | Render + vignette | Hero | LCP ≤ 2.2 s | Vignette scan | 2 |
| 4 | Bottle → story | Painted insets | Pinned scene | Reduced motion = static list | Detail scans | 3 |
| 5 | Cow → bottle | Unrolling scroll | `ScrollCloth`, 7 episodes | Copy from `journey` only; vertical on mobile | Main commission | 6 |
| 6 | Origin / farm | Photo + ornament | Scene | Real photos only | Farm photos | 2 |
| 7 | Breeds | Painted portraits | 6 portraits | Breed traits checked by a vet or breeder; status visible | Breed commission | 3 |
| 8 | Trace map | Painted road | `TraceMap.paintedRoad` | "Not live data" visible | Road panel | 4 |
| 9 | Quality | Lab + vignette | Scene | No unconfirmed values | — | 2 |
| 10 | Four worlds + 360 | Painted panels | 4 scenes, bordered viewer | Counter correct; art credits | 4 panels, 360 frames | 6 |
| 11 | Heritage | About the paintings | Artists' page | Artists approve their text | Interviews | 3 |
| 12 | Technology | Painted icons | Scene | Public vocabulary only | Icon set | 2 |
| 13 | Ghee | Bilona episode | Scene | Prices pending-styled | Ghee commission | 2 |
| 14 | Trace-your-milk | Mini scroll result | Demo | DEMO visible; `aria-live` | — | 3 |
| 15 | /milk, /milk/[variant] | Product pages | Pages | View Transition fallback | 360 frames | 4 |
| 16 | /origin, /trace, /technology | Story pages | 3 templates | Content from `desigo.ts` | Photos | 4 |
| 17 | /about, /ghee, /reserve, /story | Remaining pages | 4 templates, audio | Narration captioned; translation approved | Voice recording | 5 |
| 18 | Mobile | Vertical tale | Episodes stacked vertically | Each episode readable at 360 px | — | 3 |
| 19 | A11y + reduced motion | — | Alt text per episode, static mode | WCAG 2.2 AA; full narrative available as text | — | 3 |
| 20 | Perf, QA, handover | Ship | Image pipeline, QA | Lighthouse ≥ 92; artworks ≤ 400 KB per viewport | All | 4 |

**Total:** about 67 development days, plus 12–14 weeks of commissioning that start before phase 5.

## 9. Assets needed from DESIGO® and images to generate

**Real, from DESIGO®:** budget and contracts for the artists (fee, credit, usage licence, rights to digitise and to
split layers); an approved story script (English and Hindi); farm photographs; 360 frames; consent for any
"artist at work" video.

**Images to generate:** storyboard placeholders only, never published; plus two textures that may ship.
Save in `web/public/desigo/styles/fairytale/_storyboard/` (not deployed) and `.../textures/`.
| # | File | Size | Prompt |
|---|---|---|---|
| FT1 | `_storyboard/episode-01-dawn.png` | 3200×1200 | Storyboard sketch for an illustrated folk tale: dawn at a small Rajasthani farm, Indian zebu cows with humps grazing calmly under a khejri tree, a herder standing nearby, flat colour, bold outlines, side view, no perspective, respectful, placeholder quality, no deities, no text, no watermark, no logo, no letters |
| FT2 | `_storyboard/episode-07-doorstep.png` | 3200×1200 | Storyboard sketch: early morning in a blue-painted old town lane, a delivery person placing a glass milk bottle at a doorstep, flat colour, bold outlines, side view, calm, no deities, no text, no watermark, no logo, no letters |
| FT3 | `_storyboard/milk-river.png` | 3200×1200 | Storyboard sketch of a stylised river of milk drawn with repeated wave patterns in cream and indigo, flat, decorative, no text, no watermark, no logo, no letters |
| FT4 | `textures/cotton-cloth.png` | 2400×2400, seamless | Seamless texture of hand-woven cotton cloth primed for painting, warm cream #EFE3C8, visible weave, flat even scan lighting, no text, no watermark, no logo, no letters |
| FT5 | `textures/pigment-wash.png` | 2400×2400, seamless | Seamless subtle natural-pigment wash on cotton, faint ochre and cream variation, flat scan, no shapes, no text, no watermark, no logo, no letters |

## 10. Performance, accessibility and mobile

- Pipeline: 600 dpi masters kept private; AVIF derivatives at 1x/2x; layers lazy-loaded one episode ahead.
- Accessibility: descriptive alt text per episode, narration as real text, a plain reading view, captioned audio;
  the lamp only warms content; reduced motion turns the unroll into a vertical gallery.
- Mobile: vertical full-width episodes with narration beneath; the fixed lamp glows on the episode in view.

## 11. Risks and premium guardrails

**Risks:** cultural appropriation; depicting sacred figures in commerce; a childish tone; generated pastiche of a
living tradition; long lead time; cows drawn inaccurately.

**Premium guardrails**
1. Only commissioned, credited, fairly paid artwork is published. Generated images are storyboards only.
2. No deities, temple imagery or sacred narratives. The tale is everyday and secular, agreed with the artists.
3. Cows are portrayed with reverence: accurate zebu anatomy, calm poses, never speaking, never comic.
4. The art is framed on milk-white space like museum pieces; type and UI stay modern.
5. Narration uses only verified public lines: no health claims, no "best", no unverified numbers inside the tale.
6. Prices, codes and pending values live outside the paintings.
7. The artists approve how their tradition is described, and the "About the paintings" page exists before launch.
