# 31 · Retro — DESIGO® build plan

Status: design-style plan v0.1 · 2026-10-01 · documents only.
Shared rules: IA `01`, tokens `02`, motion `03`, assets `04`, copy only from `desigo.ts`. Pending claims stay marked; DESIGO® always with ®.

---

## 1. Style essence

Retro design revives the look of a past era (usually 1950s–1980s) through warm desaturated colour, rounded "soft" display type, printed textures, badges and seals, and the confident optimism of mid-century advertising. Done well it is not costume. It recalls a time when products were made locally and delivered by people you knew.

For DESIGO® the right era is **India, 1955–1980**: the doorstep milkman with his bicycle and cans, **glass milk bottles with foil caps** from state milk schemes (Delhi Milk Scheme booths and tokens), enamel shop signs, letterpress dairy cards and railway-era printing.

Reference points:
1. **Indian state-dairy glass bottles and DMS booths (1960s–80s)**: returnable glass, coloured caps by milk type. This is DESIGO®'s exact model, rediscovered.
2. **Mid-century Indian enamel signage and letterpress labels**: two-colour printing, cream paper, rounded serifs.
3. **Contemporary premium retro food packaging (Bonne Maman, early Mast Brothers wrappers)**: nostalgia without kitsch, where print craft does the work and no props are needed.

## 2. Fit for DESIGO® — score 3.5 / 5

**Why it fits.** DESIGO® has literally brought back **returnable glass bottles with colour-coded caps delivered at dawn**. That is the most authentic retro story any Indian dairy can tell. Retro creates instant warmth, trust and memory ("the milk my grandparents had") and gives the **returnable glass** and **delivery** story its emotional reason.

**Where it fights.** The brief also asks for "Apple product launch" and "interactive 3D exhibition". Pure retro feels backward-looking and can make the **technology and traceability** promise look quaint. Overused, it becomes a theme-restaurant look.

**Recommendation.** A strong option for the **delivery, glass-return and Story chapters**, and for /reserve and /about. As a whole site it works only as "**retro-modern**": a 1960s dairy visual language with modern spacing, real photography and crisp interactive tech. Chapter 11 Technology deliberately breaks to the present.

## 3. Art direction

### Palette ("dairy-booth enamel")
| Token | Hex | Role |
|---|---|---|
| `--rt-cream` | `#F3EAD3` | Printed paper ground |
| `--rt-milk` | `#F7F4EC` | Clean milk sections |
| `--rt-enamel-green` | `#1E6B57` | Enamel sign green (brand green, slightly deeper) |
| `--rt-forest` | `#0B3B32` | Deep type, footer |
| `--rt-tomato` | `#C2412D` | Vintage red (ROOT world tie) |
| `--rt-mustard` | `#D99A2B` | Vintage amber (BASE world tie) |
| `--rt-teal` | `#3E7C80` | Faded secondary (sparingly) |
| `--rt-gold` | `#C8A96B` | Foil cap, rules |
| `--rt-brown` | `#5B4330` | Letterpress ink for body on cream |

Body text: `#2A221A` on cream (≥ 11:1). Print colours never exceed four per screen (like real two- or three-colour printing).

### Typography
- Display: **Fraunces** 700–900 with SOFT 100 and WONK on, which produces exactly the soft 1970s serif. Optical size 144 for headlines.
- Badges and labels: **Bricolage Grotesque** 700 condensed widths (OFL), uppercase, for "SINCE 2019" style seals (only verified facts).
- Body and UI: **Inter Tight** 400 (modern, keeps the site current). Alternatively **Work Sans** for a softer old-print feel.
- Data: **JetBrains Mono**, rendered in a "ticket" style for IDs.
- Devanagari: **Rozha One** (OFL) for occasional Hindi display ("दूध वाला" [milkman], "बोतल लौटाएँ" [return the bottle]).
- Avoid: Lobster, Pacifico, Cooper Black clones, Shrikhand overuse.

### Texture and imagery
- Print texture: subtle paper fibre plus a 1–2% halftone speckle on cream panels; **misregistered** second colour by 1px on badges only.
- **Badges and seals**: circular stamps (e.g. "RETURNABLE GLASS", "TRACEABLE MILK", "JODHPUR, RAJASTHAN" *pending*). Every badge states a fact we may say. No "100% PURE", no "SINCE 19XX" unless verified (2019 founding is verified).
- Photography: real DESIGO® photos, graded warm (lifted blacks to `#1E1A16`, highlights `#FFF6E5`), never with fake scratches or sepia filters.
- Illustration: commissioned mid-century-style illustrations (flat, two-colour, gouache texture): a milkman on a bicycle, a cow, a doorstep with a crate of bottles.

### Iconography
Two-colour badge-style icons in circles, with 2px outline and slight print texture.

### Grid
12 columns with **centred, symmetric** compositions typical of mid-century ads: big headline, illustration or bottle, short copy, badge. Content max 1200px. Generous 120–160px section padding. Mobile: centred stack.

## 4. Motion and interaction language
- **Tempo.** Friendly, unhurried. Reveals 700ms `cubic-bezier(.25,.8,.25,1)`. No bounce. "Retro" is in the visuals, not in cartoon motion.
- **Print-in effect.** Two-colour illustrations appear colour by colour (the first plate, then the second at +180ms, landing with a 1px offset).
- **Cursor.** A small foil-cap circle (14px, `#C8A96B` with a 1px highlight). Over links it gains a tiny press-down (scale 0.9). Over the bottle: `TURN`. Over badges: they rotate slowly (+8°, 600ms).
- **Hover.** Buttons are **enamel-sign plates**: label plus arrow on a cream plate with a 2px border; on hover, the plate lifts 2px with a crisp offset shadow (`3px 3px 0 #0B3B32`).
- **Transitions.** A "page turn" of a printed card: the next section slides up over the previous with a 4px paper edge shadow (900ms).

### The bottle
The bottle stands on a **doorstep** (a real photographed stone step or a drawn step), with a crisp morning shadow from low sun. Next to it, sometimes, a **wire crate** of four bottles in the four cap colours. No floating; float is replaced by a gentle "settle" (2px drop on arrival). Tilt ±6°. The 360 viewer appears inside a cream "showcase" card with a badge: "Turn the bottle".

## 5. Variant worlds — four vintage labels

| Variant | Poster world | Colours | Motif |
|---|---|---|---|
| MASTER 26 (V1+) | Botanical seed-packet poster | `#1F5C45`, cream, gold | Herb illustrations in a garland (26 *pending*) |
| ROOT 14 (V1) | Railway-era travel poster of red earth and grazing | `#B3202A` toned to `#C2412D`, cream, `#4A0A0F` | Grazing field, sun rays |
| BASE 3 (V2) | Kitchen enamel sign at golden hour | `#E89A1C` / `#D99A2B`, forest | A kitchen shelf, morning light |
| ESSENTIAL (V3) | Plain letterpress card | `#CDB89A`, `#4D4130` on cream | Type only, one rule |

The info panel is a printed price-card style panel (V-CODE, name, price *pending*, descriptors *pending*), with a perforated edge.

## 6. Page-by-page treatment

1. **Hero.** Cream ground, centred: the bottle on a doorstep in early light, "Milk from the source." in soft Fraunces 900, a small badge "RETURNABLE GLASS". Two enamel-plate CTAs.
2. **Bottle becomes the story.** Six words as six round badges orbiting the bottle, each stamping in (scale 1.1 → 1, 300ms, no bounce).
3. **Cow to bottle.** A horizontal **illustrated route**, like a mid-century map poster: cow → farm → milk → test → chill → plant → bottle, with real photos inset in round frames.
4. **Farm.** Warm-graded real photographs with a cream border and a small caption label.
5. **Breeds.** Six "cigarette-card" style collectible cards (front: portrait; back on hover/tap: region and status *pending*).
6. **Traceability.** A vintage **route map** (dotted lines, numbered stations) with modern interaction: nodes clickable, pulse along the route. DEMO stamp.
7. **Quality.** Present-day clean milk-white section (retro off): "16" and the list. Values pending.
8. **Four milks.** Four posters (§5).
9. **Milk as material.** A flat two-colour milk pour illustration that animates plate by plate.
10. **Heritage.** The **milkman and the glass bottle**. Illustration plus a short text on how milk used to arrive in glass at the door, and how DESIGO® brings the returnable bottle back (approved copy).
11. **Technology.** **Deliberate time-jump**: the cream page "tears" to a dark modern grid. "Tradition is the source. Technology protects the journey." The contrast tells the story: retro bottle, modern record.
12. **Ghee.** A vintage tin-label-style panel using the real jar's folk border, three grades.
13. **Trace your milk.** A **milk token / ticket** UI: enter the bottle ID on a printed ticket; result shown as a stamped route card (DEMO).
14. **Story.** Letterpress timeline; 2019 founding badge (verified).
15. **Final CTA.** Morning doorstep, crate of four bottles. "Know where your milk comes from." Footer as an enamel sign.

### Inner pages
- **/milk**: four posters in a row, like a shop window.
- **/milk/[variant]**: the poster hero, then a modern 360 viewer and facts.
- **/ghee**: tin-label hero, process in four illustrated steps.
- **/origin**: warm documentary with a map poster.
- **/trace**: route map.
- **/technology**: modern dark (retro off), with a retro intro card.
- **/about**: letterpress story page; verified milestones.
- **/reserve**: the **milk-card subscription** UI (a punch-card of days, *pending commercial model*), glass return explained with the crate illustration.

## 7. Component variants
`BadgeSeal` (facts-only) · `EnamelButton` · `PrintIn` (two-plate reveal) · `DoorstepBottle` · `BottleCrate` (four caps) · `PosterScene` (ProductScene) · `RouteMapPoster` (TraceMap) · `CollectibleCard` (BreedExplorer) · `TicketLookup` (TraceYourMilk) · `PunchCard` (reserve) · `FoilCapCursor` · `AssetSlot` as a printed card "Photograph to come — farm landscape".

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens and type | Enamel palette, soft Fraunces | Tokens, specimen, badge kit | ≤ 4 print colours per screen; AA | Brand colours | 2 |
| 2 | Shell | Centred grid, enamel nav, cursor | Shell | Nav reads modern; no kitsch | none | 2 |
| 3 | Hero and bottle | Doorstep bottle | Hero | Real light, crisp shadow; badge copy approved | Doorstep photo or illustration, renders | 3 |
| 4 | Bottle → story | Badge orbit | Chapter 02 | Badges facts-only | Copy | 2 |
| 5 | Cow → bottle | Illustrated route poster | Chapter 03 | Illustration brief approved | Illustrator, B4, B8 | 5 |
| 6 | Origin | Warm documentary | Chapter 04 | No fake ageing | B1, B2 | 2 |
| 7 | Breeds | Collectible cards | `CollectibleCard` | Flip accessible (button) | B3 | 3 |
| 8 | Trace map | Route-map poster | `RouteMapPoster` | Keyboard; DEMO stamp | traceNodes | 4 |
| 9 | Quality | Modern clean | Chapter 07 | Retro off | Lab approval | 2 |
| 10 | Four worlds + 360 | Four posters | Chapter 08 | Viewer modern; posters coherent | A, illustrations | 5 |
| 11 | Heritage | Milkman story | Chapter 10 | Approved history copy | Illustration, archive (B11) | 3 |
| 12 | Technology | Time-jump | Chapter 11 | Clear contrast moment | none | 3 |
| 13 | Ghee | Tin-label panel | Chapter 12 | Prices pending | Jar label art | 2 |
| 14 | Trace demo | Ticket lookup | `TicketLookup` | DEMO stamp always | demoProvider | 3 |
| 15 | /milk pages | Shop window + variant | 5 routes | Viewer works on all inputs | A | 4 |
| 16 | /origin, /trace, /technology | Inner | 3 routes | Tech page modern | B1–B8 | 4 |
| 17 | /about, /ghee, /reserve | Inner + punch card | 3 routes | Punch card marked "subscription model pending" | Commercial model | 4 |
| 18 | Mobile | Centred stacks | Mobile pass | Posters crop safely at 360px | none | 3 |
| 19 | A11y + reduced motion | Static print | No print-in, no badge spin | AA; badge text real text | none | 2 |
| 20 | Perf, QA, handover | Ship | Reports, handover | Illustrations SVG/AVIF; LCP < 2.5s | all | 3 |

Total ≈ 61 days.

## 9. Assets needed from DESIGO®
- 360 sequences (A), vector wordmark (C), confirmed cap colours.
- **Archive material** (B11): old bottles, early labels, the first delivery crates.
- Photographs: doorstep delivery at dawn (B9), the crate of four bottles, the glass return.
- Budget for a mid-century-style illustrator (6–10 illustrations).
- Approval for any historical statement about Indian milk schemes (keep it general and factual).

## 10. Performance, accessibility and mobile
- Illustrations as SVG where flat; gouache-textured ones as AVIF ≤ 150 KB.
- Print texture is one tile plus CSS, not per-image.
- Collectible-card flips use buttons with `aria-pressed` and show both sides in reduced motion.
- Reduced motion: no print-in, no page-turn, no badge rotation.
- Mobile: posters reframed (separate crops), badges max 3 visible per screen.

## 11. Risks, guardrails and premium

**Premium guardrails**
1. Real Indian dairy history (glass, caps, doorstep), not generic American diner retro.
2. No fake scratches, sepia filters, "Est. 18XX" or invented heritage dates.
3. Badges state verified facts only. "Since 2019" is allowed (verified incorporation), and "100% pure" is never allowed.
4. Modern spacing, modern body font, modern interaction. Retro is the costume, the craft is current.
5. The Technology and Trace chapters stay contemporary, so the brand reads as forward.
6. Max four print colours per screen; lots of cream space.
7. Illustrations are commissioned, consistent and credited.

**Risks**: kitsch, looking backward, inventing heritage. Mitigation: retro-modern rules, verified dates only, deliberate time-jump chapter.

**Best used for:** the returnable-glass and doorstep-delivery story (Heritage, Story, /reserve, /about), as a "retro-modern" dairy look.
