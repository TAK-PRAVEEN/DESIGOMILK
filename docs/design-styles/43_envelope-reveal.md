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
| `--ev-lac` | `#8E2A2A` | Lac seal red (seals, display and CTA labels ≥ 14px; 7.6:1 on milk) |
| `--ev-gold` | `#C8A96B` | Seal impression highlight, foil line |
| `--ev-forest` | `#0B3B32` | Ink, nav, footer |
| `--ev-ink` | `#1E211F` | Body text (12.9:1 on paper) |
| `--ev-ink-muted` | `#5C5A52` | Muted text (5.5:1 on paper) |

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

### Images to generate (illustration and texture only; save under `web/public/desigo/styles/envelope-reveal/`)
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

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: interaction, palette and honesty rules were complete. Missing: muted, pending and DEMO tokens, radius/shadow scale, component states, a portrait hero, one prompt per variant lining and negatives. Added. Changed: lac `#8E2A2A` now also serves CTA labels ≥ 14 px (7.6:1 on milk), §3 updated; image folder `styles/envelope/` → `styles/envelope-reveal/`. Newsreader, Caveat and Courier Prime confirmed OFL; no claim issues found.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#8E2A2A` | Lac red: seal, primary CTA label, DEMO mark in the letterhead | 7.6:1 on bg; lac: seals, letter titles, CTA labels ≥ 14 px |
| Primary ink | --c-on-primary | `#F7F4EC` | Milk on a lac fill (active CTA) | 7.6:1 on primary |
| Secondary | --c-secondary | `#0B3B32` | Forest ink: nav, links, line icons, footer | 11.3:1 on bg |
| Accent | --c-accent | `#C8A96B` | Gold seal impression highlight, foil rule | 2.0:1 on bg; gold seal highlight and foil rule; decorative only |
| Background | --c-bg | `#F7F4EC` | Milk page ground (`--ev-milk`) | — |
| Surface | --c-surface | `#EDE4D0` | Archival letter paper (`--ev-paper`); inner sheet `#F3EBDA` | text on surface 12.9:1 |
| Text | --c-text | `#1E211F` | Ink (`--ev-ink`) | 14.8:1 on bg |
| Muted text | --c-text-muted | `#5C5A52` | Captions, dates, enclosure notes (new token `--ev-ink-muted`) | 6.3:1 on bg, 5.5:1 on surface |
| Line | --c-line | `rgba(30,33,31,.14)` | Fold shadows and rules | decorative (non-text) |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#1F5C45` / `#6B4C2A` / `#8E2A2A` | Verified / pending dotted underline / lac DEMO mark + plain-text disclaimer | 7.1 / 7.1 / 7.6 :1 on `#F7F4EC` |

Focus ring: `--c-focus` `#0B3B32` (11.3:1 on bg), 2 px solid, 3 px offset.

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Base | Deep | Light | Treatment in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#D9E8DF` | Forest lining with fine leaf pattern, lac seal with gold highlight; pressed-leaf print; herb note (26 *pending*) |
| ROOT 14 (V1, red cap) | `#B3202A` | `#4A0A0F` | `#F3D9D6` | Red lining; red-earth sample card print; world `#4A0A0F` → `#F3D9D6` |
| BASE 3 (V2, amber cap) | `#E89A1C` | `#5A3304` | `#F8E4C2` | Amber lining; wheat-stalk print, herb count *to be confirmed* |
| ESSENTIAL (V3, ivory cap) | `#CDB89A` | `#4D4130` | `#F4EDE2` | Ivory lining, blind emboss (no colour), a single folded sheet |

Dark-chapter inversion: footer and the Technology envelope journey use forest `#0B3B32`; text milk `#F7F4EC` (11.3:1), muted `#B9C4BE`, primary CTA labels switch to paper `#EDE4D0`, seals keep lac on a paper disc; the inland-blue format is never used on dark; the logo loop renders white.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Fraunces | `@fontsource-variable/fraunces` (Google Fonts) | wght 400, italic, opsz 72 | clamp(2.75rem, 1.4rem + 5.5vw, 7rem) | 1.0 | −0.01em | UPPERCASE (hero), salutation case in letters |
| Headline H1–H2 | Fraunces | `@fontsource-variable/fraunces` (Google Fonts) | wght 400 (italic for letter titles) | H1 clamp(2.25rem, 1.5rem + 3vw, 4.25rem) · H2 clamp(1.6rem, 1.2rem + 1.6vw, 2.5rem) | 1.05 | 0 | Sentence |
| Body | Newsreader | `@fontsource-variable/newsreader` (Google Fonts) | 400 / 500, italic; opsz auto (UI text in Inter Tight 400/500) | letters clamp(1.125rem, 1.08rem + 0.2vw, 1.1875rem); UI 1rem | 1.7 | 0 | Sentence |
| Label / UI | Inter Tight | `@fontsource-variable/inter-tight` (Google Fonts) | 500 / 600 | 0.75rem | 1.4 | +0.16em | UPPERCASE |
| Data / mono | IBM Plex Mono | `@fontsource/ibm-plex-mono` (Google Fonts) | 400 (IDs, dates); addresses and dispatch marks in Courier Prime 400 (`@fontsource/courier-prime`) | 0.8125rem | 1.5 | 0 | As data |
| Devanagari (optional) | Noto Serif Devanagari | `@fontsource-variable/noto-serif-devanagari` (Google Fonts) | 400 / 500 | matches letter body | 1.7 | 0 | — |

Licence: all fonts are SIL Open Font License 1.1 (OFL), self-hosted via Fontsource; subset Latin + Latin-ext (Devanagari subset only where used). Real scanned handwriting is used for signatures; Caveat (`@fontsource-variable/caveat`, OFL) only for small UI notes, never to fake a signature. Pairing rationale: a bookish Newsreader makes letters read like printed correspondence; Fraunces italic gives salutations warmth; Courier Prime and Plex Mono carry postal and ID detail.

### 12.3 Layout & surfaces
- **Grid:** 12 columns (gutter 24 px, 16 px mobile), margins 7vw, max-width 1440 px; letters on a narrow 60–64ch measure at columns 4–9; closed envelopes centred or at columns 3–10; mobile letters full-width with 20 px margins
- **Spacing scale:** 4 px base: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128; letter padding 56 px desktop / 24 px mobile
- **Radius scale:** sm 2 px (envelopes, cards, inputs) · md 4 px (photo prints) · lg 999 px (lac seal, dispatch mark, cursor)
- **Border style:** fold lines = 1 px light ridge `rgba(255,255,255,.6)` + 1 px shadow `rgba(30,33,31,.12)`; photo prints have an 8 px white border; one gold foil rule per page at most
- **Shadow / elevation:** envelope `0 10px 24px -10px rgba(30,33,31,.25)`; letter sheet `0 2px 6px rgba(30,33,31,.10)`; slight shading gradient across fold panels; contact shadows under bottle and envelope
- **Texture / overlay:** scanned Sanganer paper for letters, smooth kraft-cream for envelopes, inland-blue sheet only for the 'letter from the source'; tiled WebP ≤ 250 KB total

### 12.4 Components
All interactive components share: focus ring `--c-focus` 2 px / 3 px offset · touch targets ≥ 44 px · disabled = 40% opacity, no motion, `aria-disabled` (unless stated) · hover effects only on `(hover:hover)` devices · motion from §12.6.

- **Primary button** — Lac label (Inter Tight 600, 13 px, +0.16em, uppercase) with a 1 px underline and travelling arrow; 48 px tall, padding 14 px 0. **States:** default lac label + underline · hover a 1 px frame draws itself around the label (400 ms), arrow +6 px · focus-visible 2 px `#0B3B32` ring, 3 px offset · active frame fills lac, label milk · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading arrow replaced by a softly pulsing seal dot, `aria-busy`. **Motion:** 280 ms `--ease-out`. **A11y:** native `<a>`/`<button>`, hit area ≥ 44 px, label ≥ 4.5:1.
- **Secondary button** — Forest label, hand-drawn ink underline (SVG), arrow. **States:** default ink underline · hover underline redraws (280 ms), arrow +6 px · focus-visible 2 px `#0B3B32` ring, 3 px offset · active label sinks 1 px · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading seal-dot pulse. **Motion:** 280 ms. **A11y:** native `<a>`/`<button>`, hit area ≥ 44 px, label ≥ 4.5:1.
- **Text / arrow link** — Forest link inside letters with 1 px underline. **States:** default hairline · hover hand-drawn ink underline draws (280 ms) · focus-visible 2 px `#0B3B32` ring, 3 px offset · active lac · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading n/a (static element). **Motion:** 280 ms. **A11y:** underline always present (never colour alone); arrow is `aria-hidden`.
- **Icon button (incl. menu)** — 44 px hit area, 1.25 px forest pen-mark icon; menu icon = a folded sheet that unfolds into ×. **States:** default pen icon · hover ink-blot dot spreads behind (4 px) · focus-visible 2 px `#0B3B32` ring, 3 px offset · active scale 0.96 · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading n/a (static element). **Motion:** fold morph 300 ms. **A11y:** `aria-label` required; 44×44 px hit area; menu button carries `aria-expanded` + `aria-controls`; Esc closes the menu and returns focus.
- **Navigation bar** (desktop + mobile menu) — 64 px milk bar; links Inter Tight 500 13 px uppercase forest; RESERVE as a lac text button; a fold line appears beneath after scroll. Mobile: the menu opens as a single sheet unfolding downward (600 ms) with Fraunces italic links at 2.25rem. **States:** default forest links · hover ink underline · focus-visible 2 px `#0B3B32` ring, 3 px offset · active current page: lac dot beneath · disabled n/a · loading n/a. **Motion:** unfold 600 ms `--ease-inout`. **A11y:** `<nav>` landmark after a skip link; logo is a link to `/` with `aria-label="DESIGO® home"`; the animated SVG is `aria-hidden`. **Logo:** The DESIGO® wordmark sits top-left (cap height 22 px desktop, 18 px mobile) and runs the brand's **black write / un-write loop** (charcoal `#171918` on light grounds, white `#FFFFFF` on dark grounds; the colour never changes during the loop). The loop pauses while the menu is open, when the tab is hidden, and under reduced motion (the full wordmark is shown static).
- **Cursor** — 14 px forest dot; labels Inter Tight 500 11 px uppercase. **States:** default 14 px dot · hover an ink-blot dot that spreads 4 px over links in letters · ROTATE "drag · turn" over the bottle · EXPLORE small folded-map icon reading "explore" over the folded map · ENTER paper-knife icon reading "open" over a closed envelope · VIEW ring reading "read" over letters and photo prints · TRACE 36 px ring around the seal reading "break seal" on the trace result. **Touch fallback:** no cursor; envelopes open on tap; every envelope shows a visible "Read now" control; no scroll-scrubbed 3D on low-memory devices. **A11y:** decorative (`aria-hidden`, `pointer-events:none`); off for coarse pointers and reduced motion, where the system cursor returns; never the only cue.
- **Card / panel / info block** — LetterSheet: paper `#EDE4D0`, 60–64ch measure, Newsreader 18–19 px, fold lines, radius 2 px, padding 56/24 px; EnclosureCard: printed inner card `#F3EBDA` for facts. All letter text is real HTML in the DOM from load. **States:** default open letter or closed envelope · hover envelope lifts 4 px and its flap opens 8° as a hint · focus-visible 2 px `#0B3B32` ring, 3 px offset · active opens: flap 600 ms → slide 700 ms → unfold 500 ms per panel (120 ms stagger), never over 1.8 s, skippable · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading envelope slides up 24 px into place (500 ms). **Motion:** CSS 3D, perspective 1400 px. **A11y:** real heading inside; one primary action per card; text never sits on texture below 4.5:1.
- **Badge / tag** — Printed DESIGO® dispatch-style circular mark or a small printed tag (Inter Tight 600 11 px uppercase), never resembling India Post. **Pending verification**: earth-ink + dotted underline on the claim. **DEMO · not live data**: lac mark printed large in the trace letter's letterhead plus the sentence "This is a demonstration with illustrative data.". **States:** default printed mark · hover none · focus-visible 2 px `#0B3B32` ring, 3 px offset · active n/a · disabled n/a · loading n/a (static element). **Motion:** ink-in 280 ms. **A11y:** status is real text ("Pending verification", "DEMO · not live data"); colour and shape are never the only signal.
- **Input + form field (Trace-your-milk bottle ID)** — Reply-card field: 56 px on `#F3EBDA`, 1 px forest underline, bottle ID in IBM Plex Mono 18 px, label in Courier Prime ("Bottle ID"); demo ID prefilled; error earth-ink + icon. **States:** default ruled field · hover underline darkens · focus-visible 2 px `#0B3B32` ring, 3 px offset · active 2 px forest underline · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading a sealed envelope arrives addressed to that ID; the LacSeal is a `<button>` labelled "Open letter" (Enter or click cracks it in 120 ms). **Motion:** arrival 500 ms, crack 120 ms, halves part 6 px. **A11y:** visible `<label>`, hint and error linked with `aria-describedby`, error shown as text + icon, `autocomplete=off`, `spellcheck=false`.
- **Divider / ornament** — a fold line (1 px ridge + 1 px shadow) or a 1 px gold foil rule, once per page. **States:** default static · hover none · focus-visible 2 px `#0B3B32` ring, 3 px offset · active n/a · disabled n/a · loading n/a (static element). **Motion:** none. **A11y:** `aria-hidden` (decorative) or `role=separator` between landmark sections.
- **Section header** — Courier Prime date-style chapter line ("03 · from cow to bottle"), Fraunces italic title set like a salutation, one-line intro in Newsreader. **States:** default static · hover none · focus-visible 2 px `#0B3B32` ring, 3 px offset · active n/a · disabled n/a · loading n/a (static element). **Motion:** title settles 12 px in 700 ms. **A11y:** real `<h2>`; the chapter number is read as "Chapter 03"; decorative glyphs `aria-hidden`.
- **Product info block** — EnclosureCard under the variant letter: V-code (Plex Mono), name in Fraunces, the approved `desigo.ts` line, price *pending* (hidden in production), size, descriptors *pending*; always visible without opening anything. **States:** default printed card · hover descriptor shows its source note · focus-visible 2 px `#0B3B32` ring, 3 px offset · active n/a · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading skeleton rules. **Motion:** slides out of the envelope 700 ms (skippable). **A11y:** facts in a `<dl>`; pending values carry visually-hidden "(pending verification)"; price hidden in production until approved.
- **Bottle stage** — Bottle beside the letter, never inside an envelope: a closed envelope leans against its base with a corner lifted; contact shadows under both; on variant pages the viewer sits left, the letter right. **States:** default idle float ±6 px over 6 s · hover pointer tilt ±6° · focus-visible 2 px `#0B3B32` ring, 3 px offset · active drag turns the 360 viewer · disabled n/a · loading static render + empty photo-print `AssetSlot`. **Motion:** `--ease-inout` float. **A11y:** Bottle360Viewer is `role=img` with an `aria-label`; ←/→ rotate 5°, Home resets; reduced motion stops idle float and auto-turn.
- **Trace node / timeline step** — FoldedMap node: 14 px forest ring that takes a lac centre when reached; the route is a 1 px ink line across four unfolding quadrants; in the trace letter each node is also a paragraph. **States:** default ring · hover ring thickens to 2 px · focus-visible 2 px `#0B3B32` ring, 3 px offset · active pulse travels 1500 ms per hop; node panel opens · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading quadrants unfold (500 ms each). **Motion:** hop 1500 ms. **A11y:** route is an ordered list `<ol>`; each node a `<button>` opening its panel; `aria-current="step"` on the active node.

### 12.5 Iconography & illustration
- **Icon style:** thin 1.25 px forest line icons drawn like pen marks (envelope, fold, seal, bottle, route), 24 px grid
- **Illustration technique:** real stationery: scanned papers, a real DESIGO® lac seal photographed in macro (3–4 variants + one cracked), ink drawings on concertina panels; DESIGO® dispatch mark designed for the brand
- **Photo treatment:** real photographs as small prints with 8 px white borders tucked into letters, warm natural grade; letters are written by real, consenting people or labelled "Illustrative letter: real letters coming soon"

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | letter slide-out |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | flap open (rotateX 0 → −180°) |
| `--dur-micro` | 280 ms | hover, ink underline |
| `--dur-reveal` | 700 ms | letter slide |
| `--dur-scene` | 1800 ms (hard cap) | complete envelope reveal |
| `--flap` | 600 ms | flap open |
| `--unfold` | 500 ms per panel, 120 ms stagger | letter panels |
| `--seal` | 120 ms crack, halves part 6 px + fade | trace result and reserve confirmation only |
| `--float` | ±6 px / 6000 ms | bottle idle |
| `--hop` | 1500 ms | folded-map pulse |
| `--scrub` | 1 | scroll-scrubbed reveals in chapters |

- **Signature transition:** flap → slide → unfold, scrubbed by scroll in chapters (scroll back to refold); ceremony is rationed: seals only on the trace result and the reserve confirmation
- **Scroll behaviour:** the visitor controls the pace; nothing important is hidden behind an envelope
- **Reduced-motion fallback:** all letters presented open and flat; no flaps or seals; 200 ms fades

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

**Tail prompt (append to every prompt below):** _soft morning window light, cream kraft envelope #E3D5B8 and archival paper #EDE4D0 on milk-white #F7F4EC linen, restrained lac-red #8E2A2A and gold #C8A96B accents, gentle paper texture, calm, stationery-grade, premium, no text, no watermark, no logo, no letters_

**Base negative prompt (add to every row's negative):** _text, letters, words, numbers, typography, logo, watermark, signature, label, packaging, milk bottle, glass bottle, ghee jar, Holstein cow, Jersey cow, cartoon mascot, comic pose, religious symbols, deity, faces in close-up, dirt, stains, clutter, oversaturated, plastic CGI look_

| # | File path (web/public/desigo/styles/<slug>/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| EV1 | `web/public/desigo/styles/envelope-reveal/hero.png` | 3200×2000 (16:10) | No | A closed cream kraft envelope with a lifted corner lying on a milk-white linen surface at lower right, soft morning window light, gentle shadows, lots of empty space at centre | writing, postal stamps, postmarks, wax crest, flowers, ribbons | Hero desktop |
| EV2 | `web/public/desigo/styles/envelope-reveal/hero-portrait.png` | 1400×2400 (7:12) | No | Portrait view of milk-white linen with a closed cream envelope at the bottom edge, corner lifted, soft morning light, empty upper two-thirds | writing, stamps, postmarks | Hero mobile |
| EV3 | `web/public/desigo/styles/envelope-reveal/lining-master-26.png` | 2400×1600, seamless | No | Envelope lining paper with a fine delicate leaf pattern in deep green #1F5C45 on dark green #0A2A20, seamless | flowers, gold glitter | MASTER 26 envelope lining |
| EV4 | `web/public/desigo/styles/envelope-reveal/lining-root-14.png` | 2400×1600, seamless | No | Plain envelope lining paper in crimson #B3202A with a very fine laid-paper texture, seamless | pattern, glitter | ROOT 14 envelope lining |
| EV5 | `web/public/desigo/styles/envelope-reveal/lining-base-3.png` | 2400×1600, seamless | No | Plain envelope lining paper in amber #E89A1C with a very fine laid-paper texture, seamless | pattern, neon | BASE 3 envelope lining |
| EV6 | `web/public/desigo/styles/envelope-reveal/lining-essential.png` | 2400×1600, seamless | No | Ivory #CDB89A envelope lining paper with a faint blind-embossed texture, no colour pattern, seamless | pattern, print | ESSENTIAL envelope lining |
| EV7 | `web/public/desigo/styles/envelope-reveal/folded-map.png` | 3200×2000 | No | A blank folded paper map in four quadrants half-open on a milk-white surface, soft shadows on the folds, no lines or text | roads, labels, compass, real map | Traceability (ch. 06), /trace |
| EV8 | `web/public/desigo/styles/envelope-reveal/paper-letter.png` | 2400×3200 | No | A blank sheet of cream handmade Indian paper #EDE4D0 with soft deckled edges and two gentle fold lines, top-down flat light | writing, ruled lines, stains | LetterSheet texture |
| EV9 | `web/public/desigo/styles/envelope-reveal/inland-letter.png` | 3000×2000 | No | A pale blue #A9C3D6 folded aerogramme-style letter sheet, three panels partly unfolded, blank with faint ruled lines, top-down, soft light | printing, India Post marks, stamps, logos | Chapter 02 inland letter |
| EV10 | `web/public/desigo/styles/envelope-reveal/envelope-open.png` | 2400×2000, transparent | Yes (real alpha) | Front view of an open cream envelope with its triangular flap raised and an empty plain lining, soft light, transparent background | writing, letters inside | Envelope component |
| EV11 | `web/public/desigo/styles/envelope-reveal/gift-envelope-gold.png` | 3200×2000 | No | A cream envelope with a warm gold foil-lined flap half-open, soft warm light, empty centre | jar, glitter, ribbons, festive symbols | Ghee (ch. 12) |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/43_envelope-reveal.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/envelope-reveal/
- [ ] Every letter is real and consented, or labelled "Illustrative letter: real letters coming soon"
- [ ] Nothing resembles a certificate, invoice, India Post stationery, postmarks or stamps
- [ ] Whole reveal ≤ 1.8 s with a visible "Read now" skip; all letter text in the DOM from load
