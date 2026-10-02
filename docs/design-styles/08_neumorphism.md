# 08 — Neumorphism · DESIGO® style build plan

Status: proposal v0.1 · 2026-10-01 · **Fit 2 / 5 for the whole site** · Best used for: tactile controls only — the Trace-your-milk input (13), the 360 viewer controls, and the /reserve configurator (variant, size, frequency) — set inside a minimal site.

---

## 1. Style essence

Neumorphism ("new skeuomorphism", "soft UI") makes interface elements look extruded from or pressed into the same soft surface, using paired light and dark shadows on a single background colour. Buttons feel like soft plastic or moulded ceramic; toggles and dials appear physical. Its signature is low contrast and monochrome softness.

Origins: Alexander Plyuto's 2019 Dribbble banking shot, popularised by Michal Malewicz; descends from Apple's pre-2013 skeuomorphism and Dieter Rams' Braun product surfaces.

Three reference points:
1. **Braun appliances (Dieter Rams, 1960s–70s)** — soft moulded controls, a single body colour, tactile dials.
2. **Teenage Engineering OP-1 and Nothing Phone UI** — physical-feeling controls, restrained colour accents.
3. **Michal Malewicz's neumorphism studies (2019–20)** — the canonical digital form, and its accessibility critique.

## 2. Why it fits DESIGO® (and where it fights)

Milk white is a soft, matte, single-colour surface — exactly what neumorphism needs. A soft moulded milk-white surface with gently pressed controls can feel like a premium kitchen appliance or a chilled dairy counter: clean, tactile, cool. For interactive tools (turn the bottle, enter a bottle ID, choose a delivery frequency) the physicality is pleasant.

Where it fights: neumorphism's low contrast fails accessibility and hides hierarchy; content pages (story, farm, breeds, heritage) gain nothing from extruded panels; and the design system explicitly says **"No card-heavy UI. UI elements stay flat."** Neumorphism is also a 2020 trend that already looks dated when used for whole pages.

**Fit score: 2 / 5 for the whole site.** Recommendation: a *neumorphic control layer* only — dials, toggles, the bottle-ID input, the reserve configurator — on milk-white, inside a minimal site, with accessibility-corrected contrast. The full plan is still given.

## 3. Art direction

### Palette — "chilled milk surface"
| Token | Hex | Role |
|---|---|---|
| `--neu-surface` | `#EEEAE0` | The single moulded surface (slightly deeper than milk so highlights show) |
| `--neu-light` | `#FFFFFF` at 85% | Top-left highlight shadow |
| `--neu-dark` | `#C9C2B2` at 70% | Bottom-right shadow |
| `--neu-ink` | `#1E211F` | Text (≥ 12:1 on surface) |
| `--neu-label` | `#4D504C` | Secondary labels (≥ 6:1) |
| `--neu-green` | `#1E7A68` | Active state fill, focus ring, selected toggle |
| `--neu-cool` | `#DDE7E3` | "Chilled" tint for CHILL contexts |
| `--forest` | `#0B3B32` | Dark sections (neumorphism off) |
| `--charcoal-surface` | `#1F2321` with `#2A2F2C`/`#141716` shadows | Dark neumorphic variant (Trace console) |
| Variant LEDs | `#1F5C45` · `#B3202A` · `#E89A1C` · `#CDB89A` | Small indicator lights / selected ring only |

### Typography
- Display: **Manrope** 300/600 — rounded geometric, harmonises with soft surfaces; display tracking −0.03em.
- Editorial accent: **Fraunces** 300 italic for single phrases (kept from the brand system).
- UI: **Manrope** 500; Data: **JetBrains Mono** 500 on "LCD" insets.
- Labels engraved: uppercase Manrope 600, 11px, +0.14em, with a 1px white text-shadow below (debossed look) — only on ≥ 6:1 colours.

### Texture
Matte, slightly velvety surface: 1.5% noise; no gloss. Insets (pressed areas) have a 2% darker gradient.

### Imagery
Photography is not neumorphic: images sit in clean, flat rectangular frames *set into* the surface with a thin inset edge, like a display window. The bottle is a cut-out standing on the surface with a real contact shadow.

### Iconography
Soft rounded 2px icons; icons on buttons are embossed (light top, dark bottom stroke).

### Grid
12 columns, 5vw margins, 32px gutters (neumorphic shadows need room: min 24px between raised elements). Radii: 28px panels, 18px buttons, 999px dials/toggles. Shadow scale: raised `8px 8px 20px --neu-dark, -8px -8px 20px --neu-light`; pressed `inset 6px 6px 12px --neu-dark, inset -6px -6px 12px --neu-light`. Mobile: 4 columns, shadows reduced to 5px/12px.

## 4. Motion & interaction language

- Physical press: raised → flat → pressed in 160ms `cubic-bezier(.2,.8,.2,1)`; release 240ms.
- Dials rotate with inertia (friction 0.9) and detents every 5° (subtle haptic via `navigator.vibrate(5)` on supported mobiles, optional).
- Scroll: calm reveals, panels rise from the surface (shadow grows from 0 to full over 600ms `--ease-out`) — the "emerging from milk" effect.
- Cursor: soft 16px pressed-in circle (inset shadow) that follows with 0.15 lag; **link** → raised circle; **bottle** → ring dial `DRAG` / `TILT`; **control** → hidden (control gives its own feedback); touch: off.
- Hover on raised controls: shadow distance +2px and highlight brightens; focus: 3px `#1E7A68` ring with 3px offset (always visible — neumorphism's biggest a11y fix).
- Page transitions: the surface "smooths" — all raised elements flatten (300ms), page swaps, new elements rise (600ms).

## 5. The hero bottle and the four variant worlds

**Presence.** The bottle stands on a slightly raised circular pedestal moulded from the surface (a soft disc 1.6× bottle width). A real contact shadow under the glass; the pedestal's own soft shadow beneath. Float ±6px / 6s, tilt ±6°; the pedestal stays still — the bottle levitates just above it.

**Rotation.** The signature control: a **neumorphic dial** below the pedestal. Turning the dial (drag, wheel, arrow keys) rotates the bottle through its 360 frames; the dial has 72 tick detents (one per frame) and a small green LED marking 0°. Dragging the bottle itself also works and turns the dial. Without frames, the dial range is limited to ±20° with a visible end-stop — honest.

**Variant worlds** — a soft "appliance" with a variant selector:
- The page surface tints subtly toward the variant's light colour (`#D9E8DF`, `#F3D9D6`, `#F8E4C2`, `#F4EDE2`), still single-colour neumorphic.
- A four-position rotary selector (MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL) with an indicator LED in the cap colour.
- Each world has an inset "LCD" panel (pressed area) with V-code, name, line and descriptors; pending items show a hollow LED and dotted underline.
- MASTER 26 adds a deep-green LED ring; ROOT 14 a red LED; BASE 3 amber; ESSENTIAL ivory with a dark outline.
Information text is never on a raised surface at low contrast — always ink on surface or on inset.

## 6. Page-by-page treatment

### Home
| # | Chapter | Neumorphic treatment |
|---|---|---|
| 01 | Hero | Flat minimal headline "Milk from the source."; bottle on moulded pedestal; two raised pill-free buttons (18px radius rectangles). |
| 02 | Bottle becomes the story | Pinned bottle; six raised word-tiles around it press in as each becomes active; background shifts to forest (neumorphism switches to the dark charcoal variant). |
| 03 | Cow to bottle | A long inset channel (pressed groove) along which a milk drop travels through seven raised station buttons. |
| 04 | Where it begins | Flat full-bleed photography — neumorphism off. |
| 05 | Breeds | Six raised tabs (breed names) select a flat portrait window; pending LEDs. |
| 06 | Traceability | Dark surface; nodes as raised buttons on an inset groove path; the pulse travels the groove. DEMO LED + text label. |
| 07 | Quality | 16 parameters as an inset checklist panel with LED indicators — LEDs stay grey ("pending") until approved values exist. |
| 08 | Four milks | Rotary selector + LCD panel; dial viewer. |
| 09 | Milk as material | The surface itself ripples like milk (a slow displacement on the background, CSS/WebGL light) — the most poetic use of a single-colour surface. |
| 10 | Heritage | Flat paper chapter — neumorphism off. |
| 11 | Technology | Dark neumorphic control panel: seven raised keys (ORIGIN … DELIVER) that light green when pressed, revealing their description. |
| 12 | Ghee | Flat warm-gold chapter with three raised jar pedestals. |
| 13 | Trace your milk | **Signature tool**: inset input field (pressed), raised TRACE key, results on an LCD-style inset strip with step LEDs; large DEMO label. |
| 14 | Story | Flat timeline — neumorphism off. |
| 15 | Final CTA | Bottle on pedestal; two raised buttons; footer flat. |

### Inner pages
- **/milk** — four pedestals; pressing one opens its variant.
- **/milk/[variant]** — pedestal + dial viewer + LCD info panel.
- **/ghee** — pedestal jars, flat editorial process.
- **/origin**, **/about** — flat editorial pages (no neumorphism).
- **/trace** — dark groove map + the inset tool.
- **/technology** — dark control panel page.
- **/reserve** — **best use**: a configurator — rotary variant selector, size toggle, frequency stepper (daily / alternate / custom), delivery-time slider, summary on inset panel.

## 7. Component variants

`SoftSurface` · `Pedestal` · `DialViewer` (72 detents) · `RotarySelector` · `RaisedButton` · `InsetInput` · `LCDPanel` · `LEDIndicator` (with text label, never colour-only) · `GrooveTrack` (journey/trace) · `ControlKeys` (technology) · `ToggleSwitch` · `Stepper` · `RippleSurface` (Ch. 09) · `ClaimText` · `AssetSlot` (inset empty well with label).

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | Soft surface system | Shadow scale, radii, Manrope/Fraunces/JetBrains Mono | Every control has ≥ 3:1 boundary contrast (outline or shadow-edge) | Brand colours | 3 |
| 2 | Shell | Nav, cursor, focus | Flat nav, soft cursor, flatten/rise transition | Focus ring always visible; nav not neumorphic | Wordmark | 3 |
| 3 | Hero | Pedestal bottle | Pedestal, tilt, contact shadow | LCP ≤ 2.0s | Renders | 2 |
| 4 | Story sequence | Pressing word tiles | Tiles, dark variant switch | Reduced motion = list | — | 3 |
| 5 | Cow → bottle | Groove journey | Inset channel, 7 stations | Vertical on mobile | — | 3 |
| 6 | Origin | Flat photo chapter | Photo layout | No neumorphism on content | B1, B2 | 1 |
| 7 | Breeds | Raised tabs | Tabs + portrait | Tabs follow ARIA tab pattern | B3, approval | 2 |
| 8 | Trace map | Dark groove map | Nodes, pulse, panel | DEMO text label; keyboard | Trace wording | 3 |
| 9 | Quality | LED checklist | Inset panel | Grey LEDs + "pending" text, no fake greens | Lab approval | 2 |
| 10 | Four worlds + 360 | Rotary + dial viewer | RotarySelector, DialViewer, LCD | Dial = accessible slider (role="slider", aria-valuenow in degrees) | **360 sequences (A)** | 5 |
| 11 | Heritage | Flat paper | Statement | — | Heritage line | 1 |
| 12 | Technology | Control keys | 7 keys | Keys are toggle buttons with aria-pressed | — | 3 |
| 13 | Ghee | Jar pedestals | 3 pedestals | Mapping correct | Jar cutouts | 2 |
| 14 | Trace demo | Inset tool | InsetInput, LCD strip, LEDs | Demo flagged; error states in text | — | 3 |
| 15 | /milk pages | Pedestals + variant pages | Pages | Consistent dial behaviour | A, pricing | 3 |
| 16 | /origin, /trace, /technology | Inner pages | Flat origin, dark trace/tech | ≤ 1.5 MB first load | B1–B8 | 3 |
| 17 | /about, /ghee, /reserve | Remaining + configurator | Configurator with selector/toggles/stepper | All controls keyboard + screen-reader usable; no fake checkout | Pricing, pack sizes, frequencies | 5 |
| 18 | Mobile pass | Thumb controls | Smaller shadows, larger dials | Dial operable one-handed; tap ≥ 48px | — | 3 |
| 19 | A11y + reduced motion | Fix soft-UI contrast | High-contrast mode adds 1px outlines | axe clean; Windows High Contrast works (forced-colors) | — | 3 |
| 20 | Perf, QA, handover | Ship | Shadow perf audit, docs | INP ≤ 150ms; no jank from box-shadow animation | Approvals | 3 |

Total ≈ 56 days.

## 9. Assets needed from DESIGO®

1. 360 sequences (A) — the dial is pointless without frames.
2. Confirmed pack sizes, delivery frequencies and time windows for the reserve configurator.
3. Approved prices (or explicit permission to show "price on confirmation").
4. Ghee jar cut-outs; photography B1–B8 for the flat chapters.
5. Approved trace wording; lab parameter status.

## 10. Performance, accessibility and mobile

- Performance: animating `box-shadow` is expensive — animate a pseudo-element's opacity between pre-rendered raised and pressed shadows instead. Ripple surface pauses off-screen.
- Accessibility: the core risk of this style. Mitigations: every interactive element has a visible boundary (1px `#857D70` stroke, 3.4:1 on the surface — the earlier `#B8B0A0` measured only 1.8:1), text never relies on emboss, focus rings in green, `forced-colors` media query restores system outlines, state shown with text and LED, not LED alone.
- Reduced motion: no press translation (colour change only), no ripple, dial without inertia.
- Mobile: neumorphic controls are thumb-friendly; reduce shadows to keep layouts light; the configurator becomes a single-column sequence.

## 11. Risks and premium guardrails

Risks: washed-out, low-contrast pages; dated 2020 Dribbble look; card-heavy UI contradicting the design system; hard-to-see buttons.

**Premium guardrails**
1. Neumorphism is for controls, not content: never put paragraphs, photos or the story on extruded cards.
2. One surface colour per section; never neumorphism on photographs or gradients.
3. Visible boundaries and focus rings on every control — accessibility first.
4. The bottle never becomes "soft UI"; it stays a real glass object with real light.
5. Shadows soft but short (≤ 20px blur); oversized blurry shadows look cheap.
6. Use the chilled-milk metaphor sparingly — the surface is calm, not a gimmick.
7. LEDs never show green "passed" states for unconfirmed tests.
8. Pair with editorial typography (Fraunces accents) so the site stays a brand, not an app.
9. No skeuomorphic gimmicks (fake brushed metal, fake screws).
10. Review in grayscale and at 125% zoom: if a control disappears, add an outline.

## 12. Build-ready spec sheet

> Audit 2026-10-03: section 12 was missing and has been added. Fixed in the body: the control-boundary stroke `#B8B0A0` was claimed ≥ 3:1 but measures 1.8:1 on the surface → `#857D70` (3.4:1). Fonts already OFL (Manrope, Fraunces, JetBrains Mono). Added page vs. moulded-surface tokens, every control state, cursor map, dark console tokens, motion tokens and 10 image prompts.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | `--c-primary` | `#1E7A68` | DESIGO® green (`--neu-green`): active fill, selected toggle, focus ring, primary key | 4.7:1 on bg; 4.3:1 on the moulded surface → large labels/fills only; small text stays ink |
| Primary ink | `--c-on-primary` | `#F7F4EC` | milk label on active green | 4.7:1 on primary |
| Secondary | `--c-secondary` | `#1F2321` | charcoal surface (`--charcoal-surface`) for the dark neumorphic Trace console and Technology panel; shadows `#2A2F2C` / `#141716` | 14.5:1 on bg |
| Accent | `--c-accent` | `#7FE0B8` | signal mint: LED glow and focus ring on the dark console | 1.4:1 on bg; decorative on light; 10.0:1 on `#1F2321` |
| Background | `--c-bg` | `#F7F4EC` | milk page (minimal site around the controls) | text 14.8:1 |
| Surface | `--c-surface` | `#EEEAE0` | the single moulded surface (`--neu-surface`) for control zones; highlight `#FFFFFF` 85%, shadow `#C9C2B2` 70% | text on surface 13.5:1 |
| Text | `--c-text` | `#1E211F` | ink (`--neu-ink`), 13.5:1 on surface | 14.8:1 on bg |
| Muted text | `--c-text-muted` | `#4D504C` | engraved labels (`--neu-label`), 6.8:1 on surface | 7.4:1 on bg |
| Line | `--c-line` | `#857D70` | visible control boundary (was `#B8B0A0`): 1 px stroke on every interactive element | 3.7:1 on bg; 3.4:1 on surface (non-text ≥ 3:1) |
| Success / Pending / Demo | `--c-ok` / `--c-pending` / `--c-demo` | `#1F5C45` / `#7A5A12` / `#171918` | ok = green LED + text 'Verified' (verified only); pending = hollow LED + dotted underline + 'pending verification' in dark amber; DEMO = large charcoal label with milk text on the console — LEDs never show green for unconfirmed tests | ok 7.1:1 · pending 5.8:1 · demo 16.1:1 on bg |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Code | Base | Deep | Light | How the world uses it |
|---|---|---|---|---|---|
| MASTER 26 | V1+ · green cap | `#1F5C45` | `#0A2A20` | `#D9E8DF` | surface tints toward light; green LED ring around the selector position |
| ROOT 14 | V1 · red cap | `#B3202A` | `#4A0A0F` | `#F3D9D6` | surface tints toward light; red LED |
| BASE 3 | V2 · amber cap | `#E89A1C` | `#5A3304` | `#F8E4C2` | surface tints toward light; amber LED |
| ESSENTIAL | V3 · ivory cap | `#CDB89A` | `#4D4130` | `#F4EDE2` | surface tints toward light; ivory LED with a 1 px `#4D4130` outline |

Dark-chapter inversion: Traceability (06), Technology (11) and Trace your milk (13) use the dark neumorphic variant: `--c-surface` → `#1F2321` (highlight `#2A2F2C`, shadow `#141716`), `--c-text` → `#F7F4EC`, `--c-text-muted` → `#B9BFBB`, `--c-line` → `#6E7671`, focus ring → signal `#7FE0B8`. Forest `#0B3B32` sections are flat (neumorphism off).

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Manrope (variable) | `@fontsource-variable/manrope` · Google Fonts | 300 | clamp(3rem, 8vw, 8rem) | 1.0 | -0.03em | Sentence |
| Headline H1–H2 | Manrope (variable) | `@fontsource-variable/manrope` | H1 600 / H2 600 | H1 clamp(2.4rem, 4.6vw, 4.5rem) · H2 clamp(1.6rem, 2.6vw, 2.5rem) | 1.05 / 1.15 | -0.02em | Sentence |
| Body | Manrope (variable) | `@fontsource-variable/manrope` | 400 / 500 | clamp(1rem, 0.95rem + 0.2vw, 1.125rem) | 1.6 | 0 | Sentence |
| Label / UI | Manrope (variable) | `@fontsource-variable/manrope` | 600 (engraved) | 0.6875rem (11 px) | 1.3 | +0.14em | UPPERCASE |
| Data / mono | JetBrains Mono (variable) | `@fontsource-variable/jetbrains-mono` | 500 | 0.9375rem on LCD insets | 1.4 | +0.02em | As data |
| Devanagari (optional) | Noto Sans Devanagari (variable) | `@fontsource-variable/noto-sans-devanagari` | 400 / 600 | matches body | 1.6 | 0 | — |

Licence: Manrope, Fraunces (editorial accent, 300 italic, `@fontsource-variable/fraunces`), JetBrains Mono and Noto Sans Devanagari are SIL OFL 1.1. Pairing: rounded geometric Manrope matches soft moulded controls; a Fraunces italic phrase keeps the brand editorial, not an app.

### 12.3 Layout & surfaces
- **Grid:** 12 columns, 5vw margins, 32 px gutters, max-width 1440 px; ≥ 24 px between raised elements. Mobile: 4 columns, 16 px margins.
- **Spacing scale:** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 px.
- **Radius:** `sm 18px` (buttons, inputs) · `md 28px` (panels) · `lg 999px` (dials, toggles, pedestal).
- **Borders:** 1 px `#857D70` boundary on every interactive control (forced-colors restores system outlines).
- **Elevation:** raised `8px 8px 20px rgba(201,194,178,.70), -8px -8px 20px rgba(255,255,255,.85)`; pressed `inset 6px 6px 12px rgba(201,194,178,.70), inset -6px -6px 12px rgba(255,255,255,.85)`; mobile 5 px / 12 px. Animate pseudo-element opacity between pre-rendered shadows, never `box-shadow` itself.
- **Texture/overlay:** 1.5% noise on the surface; insets 2% darker gradient. Content (story, photos) stays flat — neumorphism is for controls only.

### 12.4 Components
States are listed as default · hover · focus-visible · active · disabled · loading. Focus-visible is never removed.

- **Primary button** — raised key: surface fill, radius 18 px, raised shadow, 1 px `#857D70` boundary, Manrope 600 label in ink + 16 px embossed icon; 52 px tall, padding 0 28 px; the main CTA (TRACE, Reserve) is an active-green key with milk label · hover shadow distance +2 px, highlight brighter · focus-visible 3 px `#1E7A68` ring, 3 px offset · active pressed inset shadow (160 ms), release 240 ms · disabled flat (no shadow), label `#8B8E8A`, boundary dashed · loading the key stays pressed and a small LED blinks in steps.
- **Secondary button** — flat-on-surface key: no raised shadow, 1 px boundary, ink label; hover gains a soft raised shadow; focus-visible green ring; active pressed; disabled 40%; loading LED.
- **Text / arrow link** — design-system underlined label + travelling arrow in ink; hover arrow travels 8 px and underline turns green; focus-visible 2 px green outline. Links are never neumorphic.
- **Icon button (incl. menu)** — 48 px raised circle, 1 px boundary, 22 px rounded 2 px icon embossed; menu = two lines; hover +2 px shadow; focus-visible green ring; active pressed; disabled flat 40%; `aria-label`, `aria-expanded`.
- **Navigation bar** — flat (not neumorphic): 64 px milk bar `#F7F4EC`, 1 px `#E3DED2` rule below; logo left, Manrope 500 links, Reserve as the green key. Mobile: logo + raised menu button; menu = flat milk sheet with large Manrope links. Logo: the DESIGO® header logo is the black wordmark drawn as SVG strokes that write and un-write in an infinite loop (4.6 s cycle: write 0–1.2 s · hold to 3.0 s · un-write 3.0–4.2 s · rest to 4.6 s, as built in `DesigoLogo.tsx`); charcoal `#171918` on light grounds, white (milk `#F7F4EC`) on dark grounds; one colour only — never gilded, tinted, outlined, patterned or recoloured by this style; no hover trigger; reduced motion shows the static wordmark; the logo is a link to / with `aria-label="DESIGO® home"`.
- **Cursor** — default 16 px pressed-in circle (inset shadow) with 0.15 lag · hover (link): raised circle · ROTATE (bottle): ring dial 64 px with `ROTATE` · EXPLORE: soft ring + `EXPLORE` · ENTER (pedestal/variant): raised ring + `ENTER` · VIEW (inset photo window): square inset + `VIEW` · TRACE (groove node): small LED + `TRACE`; over controls the cursor hides (the control gives its own feedback). Touch: off; controls carry visible labels.
- **Card / panel / info block** — `LCDPanel` (pressed inset, radius 28 px, padding 24–32 px) for information; content panels on the page are flat milk · hover none for info, +2 px for interactive panels · focus-visible ring · active pressed · disabled flat · loading LCD shows a stepped `- - -` mono placeholder.
- **Badge / tag** — small inset pill (radius 999, 26 px) with LED dot + Manrope 600 uppercase label: neutral grey LED; **pending verification** = hollow LED + 'PENDING' in `#7A5A12` + dotted underline on the qualified text + popover; **DEMO · not live data** = flat charcoal pill with milk text, larger than other badges on the console.
- **Input + form field** — inset well (pressed shadow), radius 18 px, 60 px, 1 px boundary, JetBrains Mono 1.125rem, placeholder `DSG-BTL-000001-3 (sample format)`; raised TRACE key attached · hover boundary darkens · focus-visible 3 px green ring + inset deepens · invalid 2 px `#B3202A` boundary + message · disabled flat · loading TRACE key stays pressed, step LEDs light one by one on the LCD strip.
- **Divider / ornament** — a 2 px engraved groove (1 px shadow line + 1 px highlight line); no ornament.
- **Section header** — chapter number on a small inset LCD chip (JetBrains Mono `08`), title Manrope 600, optional Fraunces italic phrase beneath; flat.
- **Product info block** — inset LCD panel beside the pedestal: V-code mono, name Manrope 600, line in Fraunces italic, size `1 L glass · 900 g` with pending LED, price 'Price on confirmation' until approved, descriptors with hollow LEDs where pending; rotary selector (MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL) with LED in cap colour + text label.
- **Bottle stage** — the real glass bottle (never soft UI) levitates above a raised circular pedestal moulded from the surface (1.6× bottle width); real contact shadow under the glass + the pedestal's own soft shadow; float ±6 px / 6 s, tilt ±6°; the signature neumorphic dial (72 detents, green LED at 0°, arrow keys 5°) drives the 360 frames; without frames ±20° with a visible end-stop.
- **Trace node / timeline step** — raised round button 36 px on an inset groove path (dark console in trace chapters); states upcoming (raised, grey LED) · active (pressed + signal LED + text panel) · visited (flat, dim LED) · hover +2 px · focus-visible signal ring · disabled flat. LED states always paired with text.

### 12.5 Iconography & illustration
- **Icons:** soft rounded 2 px icons on a 24 px grid, round caps; on buttons they are embossed (1 px highlight top, 1 px shadow bottom).
- **Illustration:** none — the moulded surface is the illustration; AI plates below are surface/backdrop studies only.
- **Photo treatment:** photographs are flat rectangles set *into* the surface with a thin inset edge, like a display window; natural grade.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | panels rise from the surface (shadow 0 → full) |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | page flatten/rise transition |
| `--ease-press` | `cubic-bezier(.2,.8,.2,1)` | raised → pressed |
| `--dur-micro` | `160ms` | press |
| `--dur-release` | `240ms` | release |
| `--dur-reveal` | `600ms` | rise from surface |
| `--dur-scene` | `900ms` | flatten (300) + swap + rise (600) |
| `--dial-friction` | `0.9, detent every 5°` | dial inertia; optional `navigator.vibrate(5)` |

Reduced motion: no press translation (colour change only), no ripple surface, dial without inertia, panels appear without rising, logo static.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

Surfaces and backdrops only; the bottle and jars are real renders composited onto the pedestal.

**Tail prompt (append to every prompt):** *soft neumorphic moulded matte surface, single-colour ceramic-like material in chilled milk #EEEAE0, soft top-left key light with paired light and dark soft shadows, velvety 1.5 percent noise, Braun-like restraint, calm, clean, premium product-render quality, no text, no watermark, no logo, no letters*

**Base negative prompt (prepend to every negative prompt):** text, letters, words, numbers, typography, logo, watermark, signature, label, brand mark, milk bottle, glass bottle, ghee jar, product packaging, Holstein cow, Jersey cow, cartoon cow face, anthropomorphic animal, people's faces, religious idols, deity imagery, halo, glowing body, medical imagery, plastic sheen, oversaturated neon, lowres, blurry, jpeg artefacts, distorted anatomy, extra limbs, checkerboard background

| # | File path (web/public/desigo/styles/neumorphism/...) | Size / ratio | Transparent? | Prompt | Negative prompt (+ base) | Used in |
|---|---|---|---|---|---|---|
| 1 | `hero.png` | 3200×2000 (16:10) | no | Seamless matte milk-coloured moulded surface with a single softly raised circular pedestal in the centre, empty, gentle top-left light and soft paired shadows, vast calm space | objects, buttons, devices | 01 Hero, 15 Final CTA |
| 2 | `hero-portrait.png` | 1400×2400 (7:12) | no | Vertical matte milk-coloured moulded surface with one softly raised circular pedestal at 60 percent height and a small circular dial shape moulded below it, empty | objects, markings | 01 Hero mobile |
| 3 | `worlds/master-26.png` | 3200×2000 + 1400×2400 | no | Matte moulded surface tinted pale green #D9E8DF with a softly raised empty circular pedestal, a tiny deep green #1F5C45 indicator light glowing at its edge | objects, text | 08 Four milks · /milk/master-26 |
| 4 | `worlds/root-14.png` | 3200×2000 + 1400×2400 | no | Matte moulded surface tinted pale rose #F3D9D6 with a softly raised empty circular pedestal, a tiny red #B3202A indicator light at its edge | objects, text | 08 Four milks · /milk/root-14 |
| 5 | `worlds/base-3.png` | 3200×2000 + 1400×2400 | no | Matte moulded surface tinted pale amber #F8E4C2 with a softly raised empty circular pedestal, a tiny amber #E89A1C indicator light at its edge | objects, text | 08 Four milks · /milk/base-3 |
| 6 | `worlds/essential.png` | 3200×2000 + 1400×2400 | no | Matte moulded surface in ivory #F4EDE2 with a softly raised empty circular pedestal, a tiny ivory indicator light with a thin dark ring at its edge | objects, text | 08 Four milks · /milk/essential |
| 7 | `journey/groove.png` | 4800×1200 (horizontal) | no | Top-down view of a matte milk-coloured surface with one long softly pressed-in groove channel running left to right and seven small raised round buttons along it, soft light | icons, labels, objects | 03 Cow to bottle |
| 8 | `trace/console.png` | 3600×2000 | no | Dark charcoal #1F2321 matte moulded control surface with a pressed-in winding groove path and eight small raised round buttons, one tiny mint #7FE0B8 indicator light, soft paired shadows | screens, numbers, labels | 06 Traceability, 13 Trace your milk |
| 9 | `material/ripple.png` | 3200×2000 | no | Top-down macro of a still milk surface with one slow concentric ripple, matte, soft overcast light, creamy white | splash, droplets, containers | 09 Milk as material (ripple surface poster) |
| 10 | `textures/velvet-noise.png` | 1024×1024, seamless | no | Seamless tileable extremely fine velvety matte noise on neutral warm light grey, even | patterns, banding | surface noise overlay (1.5%) |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/08_neumorphism.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/neumorphism/
- [ ] Grayscale + 125% zoom review: no control disappears; `forced-colors` restores outlines
- [ ] Neumorphism only on controls; story, photos and paragraphs stay flat
