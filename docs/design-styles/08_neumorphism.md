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
- Accessibility: the core risk of this style. Mitigations: every interactive element has a visible boundary (1px `#B8B0A0` stroke or a shadow edge ≥ 3:1), text never relies on emboss, focus rings in green, `forced-colors` media query restores system outlines, state shown with text and LED, not LED alone.
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
