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

**Why it fits.** DESIGO® has brought back **returnable glass bottles with colour-coded caps, delivered to the door early in the morning** (delivery timing *pending ops confirmation*). Few Indian dairies have a more authentic retro story to tell. Retro creates instant warmth, trust and memory ("the milk my grandparents had") and gives the **returnable glass** and **delivery** story its emotional reason.

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

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: Rich art direction; missing were colour roles and state colours, font packages and sizes, component states, motion tokens, image prompts and acceptance list. All added. Fonts already OFL (Fraunces, Bricolage Grotesque, Inter Tight, Rozha One). Body fix: "delivered at dawn" now marked pending ops confirmation and the "most authentic" superlative softened.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#1E6B57` | enamel-sign green: primary CTA plates, key accents | 5.3:1 vs bg (text-safe) |
| Primary ink | --c-on-primary | `#F3EAD3` | cream label on enamel green | 5.3:1 on primary |
| Secondary | --c-secondary | `#0B3B32` | deep type, footer, secondary plates | 10.4:1 vs bg (body-safe) |
| Accent | --c-accent | `#C2412D` | vintage tomato: focus ring, badges, ROOT tie (UI / ≥ 24 px text only) | 4.3:1 vs bg (large text / UI only) |
| Background | --c-bg | `#F3EAD3` | printed cream paper ground | 13.1:1 with text |
| Surface | --c-surface | `#F7F4EC` | clean milk sections, price cards | text on surface 14.2:1 |
| Text | --c-text | `#2A221A` | letterpress body text on cream | 13.1:1 vs bg (body-safe) |
| Muted text | --c-text-muted | `#5B4330` | letterpress brown: captions, small print | 7.6:1 vs bg (body-safe) |
| Line | --c-line | `rgba(91,67,48,.30)` | rules, perforations, card borders | decorative; 2 px brown at 100% for plate borders (7.6:1) |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#1E6B57` / `#D99A2B` / `#C2412D` | ok = enamel-green stamped tick; pending = 1px dotted mustard underline + small "PENDING" ticket; DEMO = tomato rubber-stamp roundel with cream text, rotated −6° | DEMO stamp cream `#F3EAD3` on `#C2412D` = 4.3:1 at ≥ 14 px bold; pending ticket text stays --c-text |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Base | Deep | Light | World in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#D9E8DF` | botanical seed-packet poster: `#1F5C45`, cream, gold, herb garland (26 *pending*) |
| ROOT 14 (V1, red cap) | `#B3202A` | `#4A0A0F` | `#F3D9D6` | railway-era travel poster of red earth and grazing: `#B3202A` toned to `#C2412D`, cream, `#4A0A0F` |
| BASE 3 (V2, amber cap) | `#E89A1C` | `#5A3304` | `#F8E4C2` | kitchen enamel sign at golden hour: `#E89A1C` / `#D99A2B`, forest |
| ESSENTIAL (V3, ivory cap) | `#CDB89A` | `#4D4130` | `#F4EDE2` | plain letterpress card: `#CDB89A`, `#4D4130` on cream, type only, one rule |

Dark-chapter inversion: Technology (ch. 11) and /technology are a deliberate time-jump to the present: the cream page "tears" to a dark modern grid: `--c-bg` → `#171918`, `--c-surface` → `#0B3B32`, `--c-text` → `#F7F4EC`, `--c-primary` → `#7FE0B8`, line → `rgba(247,244,236,.14)`, logo → white. Footer is an enamel sign in `#0B3B32` with cream type.

Additional style tokens (kept from §3): `--rt-mustard` `#D99A2B`, `--rt-teal` `#3E7C80` (sparingly), `--rt-gold` `#C8A96B` (foil cap). Max four print colours per screen. Photo grade: blacks lifted to `#1E1A16`, highlights `#FFF6E5`.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Fraunces | `@fontsource-variable/fraunces` | wght 900, SOFT 100, WONK 1, opsz 144 | `clamp(3.25rem, 2rem + 6vw, 8.5rem)` | 0.95 | −0.015em | Sentence |
| Headline H1–H2 | Fraunces | `@fontsource-variable/fraunces` | wght 700, SOFT 100, opsz 72–144 | H1 `clamp(2.5rem, 1.6rem + 3.8vw, 4.75rem)` · H2 `clamp(1.75rem, 1.3rem + 1.8vw, 2.75rem)` | 1.05 · 1.15 | −0.01em | Sentence |
| Body | Inter Tight | `@fontsource-variable/inter-tight` | 400 / 500 | `clamp(1rem, .95rem + .25vw, 1.125rem)` | 1.6 | 0 | Sentence |
| Label / UI | Bricolage Grotesque (badges, seals, plates) | `@fontsource-variable/bricolage-grotesque` | wght 700, wdth 75 (condensed) | `clamp(.75rem, .72rem + .15vw, .85rem)` | 1.1 | +0.1em | Upper |
| Data / mono | JetBrains Mono (ticket style) | `@fontsource-variable/jetbrains-mono` | 500, tabular | `.875rem` | 1.4 | +0.06em | Upper |
| Devanagari (optional) | Rozha One ("दूध वाला", "बोतल लौटाएँ") | `@fontsource/rozha-one` | 400 | display sizes only | 1.25 | 0 | — |

Licence: all fonts must be open-licence (OFL/Apache). Fraunces, Bricolage Grotesque, Inter Tight, JetBrains Mono and Rozha One are OFL 1.1; Lobster, Pacifico and Cooper Black clones stay out. Pairing: soft wonky Fraunces is the 1970s serif, condensed Bricolage is the enamel badge, Inter Tight keeps the site current.

### 12.3 Layout & surfaces
- Grid: 12 columns, centred symmetric compositions (headline · bottle/illustration · copy · badge), content max-width 1200 px, gutters 24 px / 16 px mobile.
- Spacing (4 px base): 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 160; section padding 120–160 px desktop, 72 px mobile.
- Radius: `sm 2px` · `md 6px` (enamel plates, price cards) · `lg 12px` (poster frames); badges are circles; pill for cursor only.
- Border: 2 px brown/forest on plates; price cards have a perforated edge (SVG mask, 6 px holes).
- Shadow: crisp offset `3px 3px 0 #0B3B32` on lifted plates; bottle gets a crisp low-sun morning shadow (long, 20° angle, 0.3 opacity) plus contact shadow.
- Texture: one paper-fibre tile + 1–2% halftone speckle on cream panels; 1 px misregistration on badges only; no fake scratches or sepia filters.

### 12.4 Components
For each: anatomy, sizes, states (default · hover · focus-visible · active · disabled · loading), motion, a11y.
- **Primary button**: EnamelButton: enamel-green plate `#1E6B57`, cream Bricolage label + arrow, 2 px forest border, radius 6 px, 52 px, padding 16 px 26 px. States: default · hover plate lifts 2 px with `3px 3px 0 #0B3B32` shadow (240 ms) · focus-visible 3 px `#C2412D` ring offset 3 px · active pressed flat · disabled 40%, no shadow · loading arrow replaced by a turning foil-cap disc. 44 px target.
- **Secondary button**: cream plate with 2 px forest border and forest label + arrow; same lift on hover; focus tomato ring; active flat; disabled 40%; loading foil-cap disc.
- **Text / arrow link**: Inter Tight with 1.5 px forest underline offset 3 px; arrow travels 4 px; hover underline turns enamel green; focus tomato ring.
- **Icon button (incl. menu)**: 44 px two-colour badge circle (cream on enamel green) with 2 px outline and slight print texture. Menu = three letterpress bars → X. Hover lift 2 px · focus ring · active pressed · disabled 40%. `aria-label`, `aria-expanded`.
- **Navigation bar (desktop + mobile menu) + DESIGO® logo loop**: cream bar 76 px (60 px mobile) with a 2 px brown rule, logo left, links Bricolage upper, RESERVE as enamel plate. Must read modern (no kitsch ornaments). Mobile: menu as a full-height printed card sliding up with links 30 px Fraunces, focus trapped, Esc closes. Logo loop: DESIGO® wordmark (vector SVG, never redrawn) runs the house black write / un-write loop: D · waves · S · I · G · O draw on (0–1.2 s, 480 ms each, 95 ms stagger) → hold to 3.0 s → un-write in reverse 3.0–4.2 s → rest to 4.6 s → repeat, infinite. Charcoal `#171918` on light grounds, white `#FFFFFF` on dark grounds, swapped by section theme only; never a colour change inside the loop. Reduced motion: static full wordmark. `aria-label="DESIGO® home"`; the animation is `aria-hidden`.
- **Cursor (default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE; touch fallback)**: default 14 px foil-cap circle (`#C8A96B`, 1 px highlight) · hover press-down scale 0.9 · ROTATE `TURN` over the bottle · EXPLORE `LOOK` cap 44 px over posters · ENTER `ENTER →` over variant posters · VIEW `VIEW` over photos · TRACE cap shrinks to a ring with dotted crosshair over route stations; badges rotate +8° under the cursor. Touch / coarse pointer: custom cursor not rendered; native behaviour, and the ROTATE / EXPLORE hint appears once as a static chip beside the bottle and fades after the first drag.
- **Card / panel / info block**: printed card: milk surface, 2 px brown border at 30%, radius 6 px, padding 28 px; price-card variant with perforated edge; CollectibleCard flips by button (`aria-pressed`). Hover lift 2 px; focus tomato ring.
- **Badge / tag (incl. "pending verification" and "DEMO · not live data")**: BadgeSeal circles (facts only, e.g. "RETURNABLE GLASS", "SINCE 2019"), Bricolage 700 condensed, 88–120 px. Pending verification: dotted mustard underline + "PENDING" ticket; "JODHPUR, RAJASTHAN" badge carries it. DEMO · not live data: tomato rubber-stamp roundel (−6°), cream text. Never "100% PURE", never invented "SINCE" dates.
- **Input + form field (Trace-your-milk bottle ID)**: TicketLookup: a printed milk-token ticket with a real input: 56 px, 2 px forest border, radius 6 px, mono 16 px, placeholder `DSG-BTL-000001-3 (sample format)`, perforated left edge. States: hover lift · focus-visible tomato ring · error `#B3202A` border + note · disabled 40% · loading foil disc. Visible `<label>`, DEMO stamp beside.
- **Divider / ornament**: letterpress double rule (2 px + 1 px) with a small foil-cap circle at centre; sections can end with a perforation line.
- **Section header (chapter number + title pattern)**: badge-style chapter number (`No. 08` in a circle) + Fraunces 900 soft title + one Inter Tight lead line; centred.
- **Product info block (variant name, code, price-pending, size, descriptors)**: price-card panel with perforated edge: V-CODE ticket (mono), name Fraunces 700, size `1 L glass · 900 g` and price from `desigo.ts` with dotted pending underline, descriptors pending-marked, CTA enamel plate `Trace this bottle →`.
- **Bottle stage (Bottle / Bottle360Viewer framing)**: the bottle stands on a doorstep (real photo or drawn step) with a crisp low-sun shadow; no float, a 2 px "settle" on arrival; sometimes a wire crate of the four caps beside it (real photo only). Tilt ±6°. Bottle360Viewer inside a cream showcase card with badge "Turn the bottle".
- **Trace node / timeline step**: RouteMapPoster: dotted route, stations as numbered enamel discs (20 px), pulse along the route; timeline step = letterpress line with badge date (verified 2019 only). States idle · hover disc lifts · focus tomato ring · active panel as printed card · pending dashed disc.

### 12.5 Iconography & illustration
- Icons: two-colour badge style, 2 px outline, round joins, 24 px glyph inside 44 px circles, slight print texture.
- Illustration: commissioned mid-century two-colour gouache (milkman on a bicycle, cow, doorstep with crate), consistent and credited; two-plate print-in.
- Photography: real, warm grade (lifted blacks, warm highlights), cream border + small caption label; no fake ageing.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.25,.8,.25,1)` | friendly reveals (no bounce) |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | page-turn transitions |
| `--ease-milk` | `cubic-bezier(.22,.9,.24,1)` | bottle settle |
| `--dur-micro / reveal / scene` | 240 / 700 / 900 ms | hover · reveal · page turn |
| `--rt-print` | plate 2 at +180 ms, 1 px offset | two-plate print-in |
| `--rt-stamp` | 300 ms scale 1.1 → 1 | badge stamp-in |
| `--rt-badge-turn` | 600 ms, +8° | badge rotate on hover |

- Retro is in the visuals, not in cartoon motion: unhurried, no bounce.
- Signature: the printed-card page turn (next section slides up with a 4 px paper edge shadow).
- Reduced motion (`prefers-reduced-motion: reduce`): all scroll-scrubbed motion off, content becomes a normal readable page, logo shows static, 360 auto-rotation stops, transitions become ≤ 200 ms opacity fades. Here also: no print-in, no page turn, no badge spin; collectible cards show both sides.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

Style tail prompt (append to every prompt below): *retro-modern Indian dairy print aesthetic 1955–1980, mid-century two-colour gouache, cream paper #F3EAD3, enamel green #1E6B57, deep forest #0B3B32, tomato #C2412D, mustard #D99A2B, gold foil #C8A96B, warm morning light, subtle paper texture, no fake scratches, calm, premium, no text, no watermark, no logo, no letters*

Base negative prompt (prefix to every negative below): *text, letters, words, numbers, logo, watermark, signature, label, packaging, milk bottle, glass bottle, jar, Holstein, Jersey, black-and-white dairy cow, cartoon mascot, people's faces, blurry, low resolution, oversaturated*

| # | File path (web/public/desigo/styles/<slug>/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| 1 | `web/public/desigo/styles/retro/hero-landscape.png` | 3200×2000 (16:10) | no | Mid-century two-colour gouache illustration of a quiet Indian home doorstep in early morning light, a clean stone step and a painted wooden door, long crisp low-sun shadows, cream and enamel-green tones, empty space on the step at the centre | bottles, crates with bottles, people, signboards, sepia filter, scratches | Hero (ch. 01) |
| 2 | `web/public/desigo/styles/retro/hero-portrait.png` | 1400×2400 (7:12) | no | Tall mid-century gouache illustration of a doorstep and door in morning light, step centred and empty, cream and enamel green | bottles, people, text | Hero mobile |
| 3 | `web/public/desigo/styles/retro/world-master-26.png` | 3200×2000 + 1400×2400 crop | no | Mid-century botanical seed-packet style poster illustration, a garland of Indian herb sprigs around an empty oval centre, flat gouache in bottle green #1F5C45, cream and gold, subtle print texture | lettering, seed names, numbers, photos | Four milks ch. 08, /milk/master-26 |
| 4 | `web/public/desigo/styles/retro/world-root-14.png` | 3200×2000 + 1400×2400 crop | no | 1960s Indian railway-era travel poster illustration of red earth fields with grazing zebu cows and broad sun rays, flat gouache in tomato #C2412D, cream and oxblood #4A0A0F, empty space at the centre | trains, lettering, Holstein cows, people | Four milks ch. 08, /milk/root-14 |
| 5 | `web/public/desigo/styles/retro/world-base-3.png` | 3200×2000 + 1400×2400 crop | no | Mid-century kitchen enamel-sign style illustration of a simple kitchen shelf and window in golden morning light, flat two-colour print in amber #E89A1C, mustard #D99A2B and forest, empty shelf centre | bottles, jars with labels, lettering | Four milks ch. 08, /milk/base-3 |
| 6 | `web/public/desigo/styles/retro/world-essential.png` | 3200×2000 + 1400×2400 crop | no | Plain cream letterpress card with one thin taupe rule and a subtle deep impression texture, sand #CDB89A and taupe #4D4130 on cream, almost empty | letters, numbers, ornaments | Four milks ch. 08, /milk/essential |
| 7 | `web/public/desigo/styles/retro/journey-route-poster.png` | 3600×1200 (3:1) | no | Mid-century illustrated route-map poster: a dotted route winding across a flat two-colour Rajasthan landscape through seven empty round frames, a small zebu cow, a farm hut, khejri trees and a dairy building along the way | place names, numbers, bottles, people | Cow → bottle ch. 03, /trace |
| 8 | `web/public/desigo/styles/retro/heritage-milkman.png` | 2400×2400 | yes (real alpha) | Mid-century two-colour gouache illustration of an Indian milkman on a bicycle carrying steel milk cans on a quiet lane at dawn, respectful, flat shapes, enamel green and cream, isolated on transparent background | bottles, caricature, text, brand marks | Heritage ch. 10 |
| 9 | `web/public/desigo/styles/retro/texture-print-paper.png` | 2048×2048, seamless | no | Seamless tileable cream printed-paper texture #F3EAD3 with faint fibres and very light halftone speckle, flat even light | stains, scratches, folds, text, vignette | Cream panels |
| 10 | `web/public/desigo/styles/retro/ghee-tin-label.png` | 3200×2000 | no | Vintage Indian tin-label style ornamental panel with a folk border of leaves and dots in mustard, tomato and cream, an empty plain centre panel, flat print texture | lettering, numbers, jars, brand names | Ghee ch. 12, /ghee |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/31_retro.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/retro/
- [ ] Badges state verified facts only ("SINCE 2019" allowed, never "100% PURE")
- [ ] Technology chapter reads clearly contemporary (time-jump verified)
