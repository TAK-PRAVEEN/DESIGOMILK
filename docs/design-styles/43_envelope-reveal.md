# 43 · Envelope Reveal — DESIGO® build plan

**Priority style (client request, 2026-10-03)**

Status: design-style plan v0.1 · 2026-10-03 · documents only.
Shared rules: IA `01`, tokens `02`, motion `03`, assets `04`, copy only from `desigo.ts`. Pending claims stay marked; DESIGO® always with ®.

---

## 1. Style essence

Envelope Reveal is an interaction style built on **paper correspondence**: envelopes that open, flaps that lift, letters that slide out and unfold panel by panel, seals that break, folded maps and tickets that open into full content. Its appeal is anticipation and intimacy: content is *delivered* to you, not simply shown. It is popular in digital invitations, luxury unboxing pages and personal-brand sites, often with paper physics in 3D (folding planes) or 2.5D (layered SVG).

For DESIGO® the idea is precise: **"a letter from the farm" travels with every bottle.** Traceability is a story about where something comes from; a letter is the most human form of provenance. The site opens letters (from the founder, from the source, from the plant) and the Trace-your-milk result arrives as a letter that unfolds, step by step, from farm to door.

Reference points:
1. **The Indian inland letter card** (the folded blue aerogramme that is its own envelope): a beloved, very Indian format, folded in three and sealed by its own flaps.
2. **Luxury unboxing and digital invitation design** (e.g., Paperless Post's animated envelopes, Hermès and Aesop seasonal microsites): paper, ceremony and restraint.
3. **Lac-seal craft**: lac (lakh) is a traditional Rajasthani material, used in Jaipur lac bangles. A DESIGO® lac seal is a local, authentic replacement for European wax seals.

## 2. Fit for DESIGO® — score 3.5 / 5 (4.5 as a layer)

**Why it fits.** A letter means personal, accountable and traceable: someone wrote this, from somewhere, on a date. That is exactly the brand promise. The format suits home delivery (milk arriving at the door like the morning post), the founder's story, the trace result and the reservation confirmation. It is calm and premium, and it gives the site a memorable signature without heavy 3D.

**Where it fights.** (1) **Fabrication risk**: a "letter from the farm" must be written by a real person, with consent, or clearly labelled as an illustration. Invented farmer letters would be fake testimonials. (2) Repeated envelope openings become slow and tiresome; the visitor must never have to open an envelope to read important information. (3) It is weaker for product worlds and the 360 viewer, which need open space.

**Recommendation.** Use it as a **layer** for: the Trace-your-milk result, /about (founder letter), the Story chapter, the /reserve confirmation, and a "letter from the source" block on each /milk/[variant] page. Not as the whole-site visual language.

## 3. Art direction

### Palette ("post and paper")
| Token | Hex | Role |
|---|---|---|
| `--ev-milk` | `#F7F4EC` | Page ground |
| `--ev-paper` | `#EDE4D0` | Letter paper (archival) |
| `--ev-paper-2` | `#F3EBDA` | Inner letter, lighter |
| `--ev-envelope` | `#E3D5B8` | Kraft-cream envelope |
| `--ev-envelope-shade` | `#CDBB98` | Flap underside and fold shadow |
| `--ev-inland` | `#A9C3D6` | Inland-letter blue (used for the "letter from the source" format only) |
| `--ev-inland-deep` | `#5B7E99` | Inland-letter rule lines |
| `--ev-lac` | `#8E2A2A` | Lac seal red (display only) |
| `--ev-gold` | `#C8A96B` | Seal impression highlight, foil line |
| `--ev-forest` | `#0B3B32` | Ink, nav, footer |
| `--ev-ink` | `#1E211F` | Body text (≥ 10:1 on paper) |

### Typography
- Display: **Fraunces** 400 italic for letter titles and salutations, opsz 72.
- Letter body: **Newsreader** (OFL) 400, 18–19px, line-height 1.7: a warm, bookish text face that reads like a printed letter.
- Handwritten signatures and notes: **scanned real handwriting** of the actual writer (strongly preferred). Fallback for UI notes only: **Caveat** (OFL); never use a script font to fake a person's signature.
- Envelope addresses and postmarks: **Courier Prime** (OFL) and **IBM Plex Mono** for bottle IDs and dates.
- UI: **Inter Tight**.

### Texture and imagery
- Paper: scanned Sanganer handmade paper for letters (A2 texture), smooth kraft-cream for envelopes, the inland-blue sheet with its printed-looking rule lines (drawn, not copied from India Post).
- **Folds**: each fold line has a 1px light ridge and a 1px shadow, with a slight shading gradient across panels to sell the paper.
- **Lac seal**: a real lac seal made for DESIGO® (an embossed wave-E mark or a simple monogram from the approved wordmark), photographed in macro, with 3–4 variants for natural variation. Breaking the seal is a 2-frame crack image.
- **DESIGO® dispatch mark**: a circular date mark designed for the brand ("DESIGO® · dispatched · date"). **It must not imitate India Post postmarks, stamps or logos.**
- Enclosures: small real-photo prints (farm, cows, the plant) tucked into letters, with white borders.

### Iconography
Thin 1.25px line icons in `--ev-forest` drawn like pen marks: an envelope, a fold, a seal, a bottle and a route.

### Grid
12 columns, margins 7vw. Letters are set on a **narrow measure** (60–64ch, columns 4–9) centred on the page. Envelopes sit centred or at columns 3–10 when closed. On mobile, letters are full-width with 20px margins.

## 4. Motion & interaction language
- **Tempo.** Ceremonial but brief. Flap open 600ms `cubic-bezier(.65,0,.35,1)` (3D rotateX 0 → −180°, perspective 1400px). Letter slide out 700ms `cubic-bezier(.16,1,.3,1)`. Each unfold panel 500ms with a 120ms stagger. **A whole reveal never exceeds 1.8s**, and is skippable.
- **Scroll-driven reveals.** In chapters, the reveal is scrubbed by scroll (flap, then slide, then unfold), so the visitor controls the pace. Scroll back to refold.
- **Seal.** On the trace result and the reserve confirmation, the seal breaks on click or Enter (crack frame 120ms, then the halves part 6px and fade). Elsewhere, letters arrive already open; ceremony is rationed.
- **Cursor.** Default: a 14px forest dot. Over a closed envelope: a small paper-knife icon with "open". Over a sealed letter: a 36px ring around the seal with "break seal". Over the bottle: "drag · turn". Over links in a letter: an ink-blot dot that spreads 4px.
- **Hover.** Envelopes lift 4px with a lengthened shadow, and the flap opens 8° as a hint. Text links in letters get a hand-drawn ink underline (SVG, 280ms). Buttons: the brand underlined label and travelling arrow.
- **Reduced motion.** All letters are presented open and flat; no flaps, no seals; a fade of 200ms.

### The bottle
The bottle is **never inside an envelope**, since glass is not posted. It stands beside the letter, as a bottle stands beside the morning post on a doorstep. In the hero, it stands on a milk ground with a closed envelope leaning against its base, the envelope's corner slightly lifted. Idle float ±6px over 6s; pointer tilt ±6°; contact shadow under both bottle and envelope. When 360 frames arrive, the viewer sits on the left of the variant page, with the variant's letter on the right.

## 5. Variant worlds — four envelopes

Each variant has its own envelope colour (the cap colour on the flap lining) and its own letter, written by a real person connected to that variant's source (with consent), or carrying an editorial note marked as an illustration until real letters exist.

| Variant | Envelope lining | Seal | Paper | Enclosure | World behind |
|---|---|---|---|---|---|
| MASTER 26 (V1+) | Forest-green lining `#1F5C45` with a fine leaf pattern | Lac seal with gold highlight | Cream Sanganer | A pressed leaf (photo) and the herb note (26 herbs, *pending*) | Soft forest gradient `#0A2A20` → `#D9E8DF` |
| ROOT 14 (V1) | Red lining `#B3202A` | Lac seal | Cream | A small red-earth sample card (photo) | Red earth `#4A0A0F` → `#F3D9D6` |
| BASE 3 (V2) | Amber lining `#E89A1C` | Lac seal | Cream | A wheat stalk (photo), herb count *to be confirmed* | Amber `#5A3304` → `#F8E4C2` |
| ESSENTIAL (V3) | Ivory lining `#CDB89A` | Plain blind emboss, no colour | Ivory | None: a single folded sheet | Ivory gallery `#F4EDE2` |

The letter's opening paragraph uses only the variant's approved line (e.g. "Simple, balanced, honest." for ESSENTIAL). Below the letter, the facts sit as a printed "enclosure card": V-CODE, price *pending*, descriptors *pending*.

## 6. Page-by-page treatment

1. **Hero.** Milk ground; the bottle with a closed envelope at its base. "MILK FROM THE SOURCE." in Fraunces; "Traceable milk from indigenous Indian cows." CTAs. Scrolling lifts the envelope's flap slightly, a hint of what is to come.
2. **The bottle becomes the story.** An **inland letter** unfolds in three panels beside the pinned bottle. The six words (ORIGIN · BREED · FEED · FARM · QUALITY · TRACE) are its six short paragraphs, each revealed as the next fold opens.
3. **From cow to bottle.** A **concertina-folded route card** pulls open horizontally with scroll: seven panels (cow, farm, milk, test, chill, plant, bottle), each with an ink drawing and the verified one-line text from `journey`.
4. **Where it begins.** Real farm photographs as prints tucked into a letter from the founder or farm team (real text, consented). `AssetSlot` prints show what is missing.
5. **Breeds.** Six small cards in a paper sleeve, fanned out; each card has a breed plate, region and "*pending approval*".
6. **Traceability.** A folded map opens (four quadrants unfolding) to reveal the route with eight nodes; the pulse travels at 1.5s per hop. "Illustrative journey, not live data" printed in the map's corner.
7. **Quality.** A plain, crisp **test certificate-style sheet**, but clearly not a certificate: titled "What we screen for", the 16 parameters in two columns, values "— pending lab confirmation". No seals or signatures on this page, so it cannot be mistaken for an official document.
8. **The four milks.** §5 envelopes, one per screen; each opens with scroll.
9. **Milk as material.** A pause from paper: the milk ribbon canvas over milk ground, with a single letter edge visible at the bottom.
10. **Heritage.** An archival letterbox: a short, approved heritage text set as a printed letter, with a gold foil rule and a lac seal.
11. **Technology.** The envelope as a metaphor for a protected journey: a sealed envelope travels along seven stamps (ORIGIN · TRACE · TEST · CHILL · PROCESS · FILL · DELIVER), each a DESIGO® dispatch mark. "Tradition is the source. Technology protects the journey."
12. **Ghee.** A gift envelope in gold-lined paper opens to show the three ghee grades and their source milks; prices *pending*.
13. **Trace your milk.** **The style's signature.** Enter the bottle ID; a sealed envelope arrives addressed to that ID. Break the seal: the letter unfolds into the journey, node by node, with the DEMO mark printed large in the letterhead. The letter states clearly: "This is a demonstration with illustrative data."
14. **Story.** A bundle of dated letters on a string; only the verified 2019 letter is open in production; others remain hidden.
15. **Final CTA.** The hero envelope returns and opens on its own to one line: "Know where your milk comes from." The RESERVE and EXPLORE TRACEABILITY actions sit below.

### Inner pages
- **/milk**: four closed envelopes in a row, each with its cap-colour lining peeking out; click to open the variant.
- **/milk/[variant]**: 360 viewer on the left, the variant letter on the right, the enclosure card of facts, "Trace this bottle".
- **/ghee**: the gold gift-envelope hero, then the bilona process as a five-page letter.
- **/origin**: long-form letters from the source with photo prints.
- **/trace**: the folded map, full screen.
- **/technology**: the envelope's journey through the seven stamps.
- **/about**: **the founder's letter**, in real handwriting with a typeset transcript beside it.
- **/reserve**: a calm form styled as a reply card; on submit, the confirmation arrives as a sealed envelope that opens to the summary (clearly "reservation request received", not an invoice). The glass-return promise sits on the envelope's back flap.

## 7. Component variants
`Envelope` (3D flap, lining colour, hover hint) · `LetterSheet` (unfold panels, scroll-scrubbed) · `InlandLetter` (three-panel fold) · `LacSeal` (break interaction, keyboard accessible) · `ConcertinaCard` (JourneyTrack) · `FoldedMap` (TraceMap) · `DispatchMark` (DESIGO® date mark) · `EnclosureCard` (facts) · `PhotoPrint` · `LetterBundle` (StoryTimeline) · `PaperKnifeCursor` · `AssetSlot` as an empty photo print naming the missing image.

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Style tokens & type | Post-and-paper palette, letter type | Tokens, specimen | Letter body ≥ 18px, ≥ 10:1 | none | 3 |
| 2 | Shell (nav, footer, cursor) | Narrow-measure grid, paper-knife cursor | Shell components | Skip-reveal control on every envelope | Scanned papers | 3 |
| 3 | Hero + bottle | Bottle with envelope | Hero | Envelope never covers the label | Bottle renders | 4 |
| 4 | Bottle → story | Inland letter unfolds | `InlandLetter` | Text present in DOM before unfolding | Copy | 3 |
| 5 | Cow → bottle | Concertina card | `ConcertinaCard` | Mobile vertical accordion | E1–E7 | 4 |
| 6 | Origin / farm | Letter with prints | Chapter 04 | **Real, consented letter text only** | Letter from the source | 2 |
| 7 | Breeds | Card sleeve | Chapter 05 | Pending labels | D1–D6 | 2 |
| 8 | Traceability map | Folded map | `FoldedMap` | Keyboard nodes; DEMO label | `traceNodes` | 3 |
| 9 | Quality | Plain screening sheet | Chapter 07 | No seal, signature or certificate styling | Lab approval | 2 |
| 10 | Four worlds + 360 | Four envelopes | Chapter 08 | Letters real or labelled illustrative | A, variant letters | 5 |
| 11 | Heritage | Archival letter | Chapter 10 | Approved text only | Copy approval | 3 |
| 12 | Technology | Seven dispatch marks | Chapter 11 | Marks never resemble India Post | none | 2 |
| 13 | Ghee | Gold gift envelope | Chapter 12 | Prices pending | Jar renders | 3 |
| 14 | Trace-your-milk demo | Sealed-letter result | Chapter 13 | DEMO in letterhead; seal keyboard-operable | demoProvider | 4 |
| 15 | /milk, /milk/[variant] | Product pages | 5 routes | Facts readable without opening anything | A | 4 |
| 16 | /origin, /trace, /technology | Inner pages | 3 routes | Long letters paginated sensibly | Letters, photos | 3 |
| 17 | /about, /ghee, /reserve | Founder letter, reply card | 3 routes | Handwriting has typed transcript; confirmation not an invoice | Founder's handwritten letter | 4 |
| 18 | Mobile pass | Flat letters | Mobile layouts | Envelopes open on tap; no 3D on low-end | none | 3 |
| 19 | A11y + reduced motion | Open letters | Static versions | No ceremony required to read anything | none | 2 |
| 20 | Perf, QA, handover | Ship | Reports, handover | Paper textures ≤ 250 KB total; LCP < 2.5s | all | 3 |

Total ≈ 62 days.

## 9. Assets needed from DESIGO®
- 360 sequences (A) and the vector wordmark (C).
- **Real letters**: a handwritten founder letter; short letters or notes from people at the source (farm partners), written by them, with written consent to publish their words and names (or first name only).
- A **lac seal** made for DESIGO® (a brass die of an approved mark), plus macro photographs of 3–4 seals and one cracked seal.
- Scanned Sanganer paper (600 dpi) and a kraft-cream envelope stock.
- Approval of every letter text, since letters can easily drift into claims.

### Images to generate (illustration and texture only; save under `web/public/desigo/styles/envelope/`)
Append the house-style tail. No text, no handwriting, no letters or numerals, no postal logos, no stamps of real postal services.

| # | File | Size | Prompt |
|---|---|---|---|
| EV1 | `hero.png` | 3200×2000 + 1400×2400 | A closed cream kraft envelope with a lifted corner lying on a milk-white linen surface, soft morning window light, gentle shadows, lots of empty space at centre, no writing, no stamps |
| EV2 | `envelope-open.png` (transparent) | 2400×2000 | Front view of an open cream envelope with its triangular flap raised and an empty plain lining, soft light, transparent background, no writing |
| EV3 | `inland-letter.png` | 3000×2000 | A pale blue folded aerogramme-style letter sheet, three panels partly unfolded, blank with faint ruled lines, top-down, soft light, no printing, no logos |
| EV4 | `paper-letter.png` | 2400×3200 | A blank sheet of cream handmade Indian paper with soft deckled edges and two gentle fold lines, top-down flat light, no writing |
| EV5 | `lining-master-26.png` | 2400×1600, seamless | Envelope lining paper with a fine delicate leaf pattern in deep green #1F5C45 on dark green #0A2A20, seamless |
| EV6 | `linings-set.png` | 3200×1600 | Four small plain envelope lining papers laid side by side in crimson #B3202A, amber #E89A1C, ivory #CDB89A and deep green #1F5C45, fine paper texture, top-down |
| EV7 | `folded-map.png` | 3200×2000 | A blank folded paper map in four quadrants half-open on a milk-white surface, soft shadows on folds, no lines or text |
| EV8 | `gift-envelope-gold.png` | 3200×2000 | A cream envelope with a warm gold foil-lined flap half-open, soft warm light, empty centre |

## 10. Performance, accessibility and mobile
- Envelopes and folds are CSS 3D transforms on layered elements (no WebGL). Paper textures are small tiled WebPs.
- **All letter text is real HTML** present in the DOM from load; the reveal is visual only, so screen readers and search engines read everything immediately.
- Every envelope has a visible "Read now" control that opens it instantly; the seal is a `<button>` with a label ("Open letter").
- Reduced motion: letters open and flat.
- Mobile: letters full-width, folds become simple vertical reveals; envelopes open on tap, with no scroll-scrubbed 3D on devices that report low memory.

## 11. Risks, guardrails and premium

**Premium guardrails**
1. **No invented letters.** Every letter is written by the named real person with consent, or labelled "Illustrative letter: real letters coming soon".
2. **No fake documents.** Nothing resembles an official certificate, an invoice, India Post stationery, postmarks or stamps.
3. **Ceremony is rationed:** seals only on the trace result and the reserve confirmation; everything else arrives open or opens by scroll.
4. **Nothing important hides behind an envelope.** Prices (*pending*), facts and actions are always reachable without opening anything.
5. Real handwriting always comes with a typed transcript.
6. Letters follow the claims rules: no health claims, no superlatives, no unapproved numbers.
7. One paper, one envelope stock and one seal design. Consistency makes it feel like stationery, not scrapbooking.

**Risks**: fake-testimonial perception, slow interactions and a wedding-invitation feel. Mitigation: consent and labels, a 1.8s reveal cap with skip controls, and a restrained forest-and-gold palette.

**Best used for:** the Trace-your-milk result, the founder letter on /about, the Story chapter, the /reserve confirmation and a "letter from the source" block on each variant page.
