# 24 — Cybercore · DESIGO® build plan

**Fit score: 1 / 5 for the whole site** · **Best used for:** one "open the source" experience, `/trace/source`, a
playful raw-data view of a **demo** bottle journey (windows, logs, wireframes) that celebrates transparency, plus
youth social content. It can also be a hidden easter egg reached from the footer ("view the system"). It must never
be used for the product, the farm or heritage.

---

## 1. Style essence

Cybercore is an internet-born aesthetic (named and spread through Tumblr and TikTok around 2019–2022) that
romanticises *the computer itself*: early-web interfaces (Windows 95/98 dialogs, pop-ups, pixel cursors), wireframe
globes and grids, binary and hex streams, loading bars, glitter and holographic textures, digital collage and
information overload. Where Y2K is optimistic consumer design and Cyberpunk is dystopian fiction, Cybercore is
**nostalgic screen culture**: the joy of windows, files and data as objects.

Three reference points:
1. **Windows 95/98 and early-web UI** (bevelled buttons, title bars, "Loading… 47%"). Instantly recognisable,
   warm for millennials and ironic for Gen Z.
2. **Net art**: JODI.org, Olia Lialina's *My Boyfriend Came Back from the War*, which treat the browser as material.
3. **Wireframe data imagery**: rotating vector globes, terrain meshes and the "Matrix rain" vernacular.

## 2. Why it fits DESIGO® and where it fights

**Fits (very narrowly)**
- **Radical transparency.** "Open the hood" is on-message: DESIGO® records collection, batch, chiller, barrel, plant
  and bottle. A playful "view source" of a demo journey makes the claim *every hand-off is recorded* feel concrete.
- The QR identity on every bottle and the recorded hand-offs give the brand genuine digital substance to celebrate.
- It works as youth social content ("POV: your milk has a log file").

**Fights (almost everywhere)**
- Information overload contradicts principle 2 ("every effect must earn its place") and the calm luxury target.
- Pop-ups, fake dialogs and loading bars mimic *bad* UX and malware tropes, which erodes trust on a commerce site.
- Exposing "raw data" aesthetics risks implying that internal operational detail is public (forbidden by IA §3).
- Glitter and holographic textures cheapen food.

**Verdict: 1/5.** A single, bounded, clearly-labelled DEMO experience at most. The full 20-phase plan is still
specified as requested, with "bounded scope" markers.

## 3. Art direction

### Palette: "System Milk" (Win98 grey is replaced by brand milk tones)
| Token | Hex | Use |
|---|---|---|
| `--sys-desktop` | `#0B3B32` | "Desktop" background (brand forest, instead of teal #008080) |
| `--sys-window` | `#EFE9DC` | Window body (brand milk-2) |
| `--sys-face` | `#E3DCCB` | Button face |
| `--sys-hilite` | `#F7F4EC` | Bevel highlight (brand milk) |
| `--sys-shadow` | `#8E8778` | Bevel shadow |
| `--sys-dark` | `#171918` | Bevel outer, text (brand charcoal) |
| `--sys-title` | `#1E7A68` | Active title bar (DESIGO green, instead of navy) |
| `--sys-title-2` | `#7FE0B8` | Title gradient end (brand signal) |
| `--sys-terminal` | `#0E100F` | Log windows |
| `--sys-phosphor` | `#7FE0B8` | Terminal text (≈ 12:1 on terminal) |
| `--sys-amber` | `#E89A1C` | Warnings, "DEMO" (BASE cap) |
| `--sys-select` | `#C8A96B` | Selection highlight (brand gold) |

Variant "file icons": MASTER `#1F5C45`, ROOT `#B3202A`, BASE `#E89A1C`, ESSENTIAL `#CDB89A`, each as a 32×32 icon
of the bottle with its cap colour.

### Typography
- **System UI:** *W95FA*-style bitmap fonts are not freely licensed for commercial web, so use *Pixelify Sans* (OFL)
  for title bars and *VT323* (OFL) for terminal logs.
- **Readable text inside windows:** *Inter Tight* 15/24, because nobody should read paragraphs in pixel type.
- **Data:** *Space Mono* (OFL) for hex, IDs and JSON-like views.
- **Display (wireframe moments):** *Major Mono Display* (OFL), used sparingly for words like "SOURCE".
- **Brand anchor:** the DESIGO® wordmark (vector) appears unaltered in the "taskbar".

### Texture, imagery, iconography
- **Bevels:** 2 px inset/outset borders using the token set. These are built in CSS, not images.
- **Wireframe globe and terrain:** an SVG or lightweight canvas wireframe of *India / Rajasthan* (not a fake 3D
  farm), with breed homeland regions as vertices (labelled "breed homelands", not farm locations).
- **Data rain:** not Matrix katakana. It uses the *public verbs* and demo IDs streaming slowly
  (ORIGIN · TRACE · TEST …), at 20% opacity, as background only.
- **Pop-ups:** at most one at a time, user-triggered only, never auto-opening.
- **Glitter / holographic:** **excluded** (cheapens food).
- **Icons:** 32×32 desktop icons for "Farm.dir", "Batch.log", "Chiller.tmp", "Bottle.qr", "You.home": these are
  playful file metaphors of the trace nodes.

### Grid
The "desktop" is a free canvas (windows are draggable on desktop), but the default layout snaps windows to a
12-column grid at 8 px increments so the composition is designed, not random. Mobile ignores the desktop metaphor:
windows become stacked full-width cards.

## 4. Motion and interaction language

- **Instant like a real OS:** windows open with a 120 ms scale 0.96 → 1 plus outline-rectangle "zoom" (the Win95
  minimise trail), using `cubic-bezier(.16,1,.3,1)`.
- **Loading bars** are used *only* where something actually loads (360 frames), and they show real progress
  (frames loaded / total). There are no fake progress bars.
- **Scroll:** on the home chapter, scroll opens windows in sequence (one per trace node). On /trace/source the page is
  a desktop and scroll is disabled within it, replaced by clicks.
- **Hover:** buttons invert their bevel (pressed state), icons get a gold selection box, and title bars brighten.
- **Cursor states:** default = classic arrow (pixel sprite, 2× scaled) · link = pointing hand · drag (window/360) =
  four-way move cursor · busy (only during real loading) = hourglass rendered as a *milk bottle* filling up ·
  text = I-beam · disabled = "not-allowed" sprite.
- **Sound:** off by default. An optional "startup" chime, behind a visible speaker icon in the taskbar.
- **Transitions:** windows minimise into the taskbar when leaving the chapter.

## 5. The hero bottle and the four variants

The bottle is opened **as a file in a viewer window**: "MASTER_26.bottle". Inside the window, the real render (later
the 360 sequence) floats on milk white, untouched by retro effects. The window chrome is the joke and the product is
serious.

- Float ±10 px over 6 s inside the window, pointer tilt ±8°, contact shadow on the window's milk background.
- Until 360 frames arrive the turn is limited to ±25° with a sheen sweep. Afterwards the "Bottle Viewer.exe" window
  has a real frame-loading progress bar, a slider ("Rotate: 0°–355°"), ◀ ▶ step buttons (5° steps = 1 frame of 72)
  and an "Auto-rotate" checkbox. These map directly to Bottle360Viewer props.

| Variant | Cybercore window |
|---|---|
| **MASTER 26** | `MASTER_26.bottle` with a forest title bar, the "Properties" tab listing code V1+ and descriptors (pending chips). |
| **ROOT 14** | `ROOT_14.bottle` with a red title bar. |
| **BASE 3** | `BASE_3.bottle` with an amber title bar. |
| **ESSENTIAL** | `ESSENTIAL.bottle` with an ivory title bar and almost-empty properties: "Simple, balanced, honest." |

The **Properties** dialog shows `size` and `price` with a "Status: pending approval" field, a literal rendering of
the `Claim.status` model.

## 6. Page-by-page treatment

(Full-site version. In the **bounded scope**, only `/trace/source` and an optional chapter-13 variant use this style.)

| # | Chapter | Treatment |
|---|---|---|
| 01 | Hero | A forest "desktop" with one open window, "Milk from the source.", containing the bottle. The taskbar shows the DESIGO® wordmark and the nav as "Start" menu items. |
| 02 | Bottle becomes the story | Six desktop icons (ORIGIN, BREED, FEED, FARM, QUALITY, TRACE) appear around the bottle window, and each opens a small dialog with its one-line explanation. |
| 03 | Cow → bottle | **Style break to daylight paper**: real journey content. The cow is never a "file". |
| 04 | Where it begins | Base style (documentary). |
| 05 | Breeds | Base style (portraits). |
| 06 | Traceability | A "File Explorer" tree: Farm.dir → Collection.log → Batch.log → Chiller.tmp → Barrel.dat → Plant.sys → Bottle.qr → You.home. Each opens the public explanation from `traceNodes[]`. The address bar reads "C:\DEMO\illustrative-journey". |
| 07 | Quality | A "System Check" window listing the 16 parameters as checkboxes with status "— pending lab confirmation". Nothing is ticked until confirmed. |
| 08 | Four milks | Four `.bottle` files (section 5) in a folder view, which open as viewer windows. |
| 09 | Milk as material | A "screensaver": milk ribbons as a slow, elegant canvas animation (a nod to the old Windows "Mystify" screensaver). |
| 10 | Heritage | Base style. Paper. No cybercore. |
| 11 | Technology | A terminal window prints the seven verbs as a boot sequence: `> ORIGIN ... ok`. A wireframe India map rotates slowly. "Tradition is the source. Technology protects the journey." |
| 12 | Ghee | Base style. |
| 13 | Trace your milk | **Signature (bounded scope).** A terminal: `trace DSG-BTL-000001-3` (sample format) prints a demo log, one line per node, each prefixed `[DEMO]`, next to a File Explorer view of the same journey. |
| 14 | Story | Base style, or a "changelog.txt" of verified milestones only. |
| 15 | Final CTA | Windows close one by one, leaving milk white, the bottle and "Know where your milk comes from." The style dissolves into the brand. |

**Inner pages:** `/trace/source` is the complete desktop experience (Explorer, Terminal, Bottle Viewer, Properties),
the only page fully in this style · /milk and /milk/[variant] are optional `.bottle` windows in campaign scope, base
style otherwise · /trace, /technology, /origin, /ghee and /about stay in base style · /reserve is **never**
cybercore: commerce must not look like a 1998 dialog box.

## 7. Component variants

`Desktop` (canvas, snap grid) · `Window` (title bar, bevel, minimise/close, drag) · `Taskbar` (wordmark, nav as Start
menu, sound toggle) · `DesktopIcon` · `FileExplorer` (trace tree) · `Terminal` (typed log, `[DEMO]` prefixes) ·
`PropertiesDialog` (claims with status) · `BottleViewerWindow` (wraps Bottle360Viewer with real progress) ·
`SystemCheck` (quality) · `WireframeIndia` (SVG) · `Screensaver` (MilkFlow) · `PixelCursor.system` ·
`AssetSlot.missingFile` ("File not found: farm-landscape.jpg. Requested from DESIGO®").

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / deps | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | System Milk palette, bevel recipe | Tokens, Pixelify/VT323/Space Mono specimen | No Win-teal/navy; window body text in Inter Tight; AA contrast | — | 2 |
| 2 | Grid & shell | Desktop, window, taskbar, cursors | `Desktop`, `Window`, `Taskbar`, cursor set | Windows keyboard-operable (focus, Esc closes, arrow-move); snap grid | Wordmark vector | 5 |
| 3 | Hero | Bottle in a window | Hero desktop | Bottle untouched by effects; LCP ≤ 2.5 s | Render | 3 |
| 4 | Bottle → story | Desktop icons and dialogs | 6 icons, dialogs | Dialogs user-triggered only; static list in reduced motion | — | 3 |
| 5 | Cow → bottle | Daylight base journey | Base-style chapter | Cow never framed as a file | B4 | 2 |
| 6 | Origin / farm | Base style | — | — | B1, B2 | 1 |
| 7 | Breeds | Base style | — | — | B3 | 1 |
| 8 | Trace map | File Explorer trace | `FileExplorer` | Path "C:\DEMO\illustrative-journey"; public vocabulary only; no internal schema | — | 5 |
| 9 | Quality | System Check | `SystemCheck` | Nothing ticked without confirmed data | — | 2 |
| 10 | Four worlds + 360 | `.bottle` viewer windows | `BottleViewerWindow`, `PropertiesDialog` | Progress bar reflects real frame loading; slider maps 72 frames | 360 (A) | 6 |
| 11 | Heritage | Base style | — | — | — | 1 |
| 12 | Technology | Boot-sequence terminal, wireframe India | `Terminal`, `WireframeIndia` | Breed-homeland labels correct; not presented as farm map | — | 4 |
| 13 | Ghee | Base style | — | — | — | 1 |
| 14 | Trace-your-milk | Terminal demo | Terminal plus Explorer sync | `[DEMO]` on every line; screen-reader log (`role="log"`) | — | 4 |
| 15 | /milk, /milk/[variant] | Optional file views | Folder view template | Base-style fallback ready | 360 (A) | 3 |
| 16 | /origin, /trace, /technology | `/trace/source` page plus base pages | Full desktop page | Works fully with keyboard; mobile card mode | — | 6 |
| 17 | /about, /ghee, /reserve | Base style; optional changelog | Templates | /reserve has no cybercore | B11 | 3 |
| 18 | Mobile | Windows to cards | Stacked card mode | No draggable windows on touch; no horizontal scroll | — | 3 |
| 19 | A11y + reduced motion | Usable OS metaphor | ARIA dialogs, focus management, static rain | WCAG 2.2 AA; no auto-opening dialogs; no fake system warnings | — | 3 |
| 20 | Perf, QA, handover | Ship | Perf report, copy QA (no malware tropes) | JS for desktop ≤ 40 KB gz; LCP ≤ 2.5 s | All | 3 |

**Total:** about 61 days (full). **Bounded scope** (`/trace/source` plus chapter 13: phases 1, 2, 8, 10, 14, 16, 18–20):
about 30 days.

## 9. Assets needed from DESIGO®

- Approval of a **public demo journey** (which fields may be shown, in public vocabulary), because a "source view"
  must not leak real internal data or formats.
- The real bottle ID *format* approval (currently "DSG-BTL-000001-3 (sample format)").
- 360 sequences (the viewer window is the centrepiece) and the wordmark vector.
- Optional: real (anonymised) screenshots of the internal tracking apps, only if DESIGO® explicitly approves them for public use.

## 10. Performance, accessibility and mobile

- Windows are real HTML dialogs (`<dialog>` or ARIA `role="dialog"`) with focus trap, Esc to close and
  keyboard move (arrow keys while the title bar is focused).
- Data rain and the wireframe pause off-screen. Rain is disabled in reduced motion and on Save-Data.
- Pixel fonts only in title bars and short logs, with all content in Inter Tight.
- Terminal output uses `role="log"` with `aria-live="polite"` and throttled lines (≥ 300 ms apart).
- Mobile: no desktop metaphor. Windows become stacked cards with title-bar headers, and the terminal is full-width.

## 11. Risks and premium guardrails

**Risks:** looks like malware or spam pop-ups; information overload; cheap glitter aesthetics; implying internal data
is public; trivialising food safety ("System Check" looking like a joke).

**Premium guardrails**
1. Bounded: one page (plus optionally chapter 13). Never on hero commerce, /reserve, farm, breeds or heritage.
2. No fake system warnings, no "virus detected", no auto pop-ups and no fake progress bars.
3. The bottle and milk are never retro-filtered. Windows frame real, high-quality renders.
4. No glitter, holographic stickers or GIF clutter.
5. Every data surface says DEMO, uses public vocabulary only and never shows internal IDs, locus codes or staff info.
6. The quality "System Check" stays serious: no jokes about adulterants, only the list and pending status.
7. Brand colours replace the Windows teal/navy, so the nostalgia is quoted, not copied (no Microsoft trade dress).
8. The style dissolves back into milk-white DESIGO® at the end of every experience.

## 12. Build-ready spec sheet

> Audit 2026-10-03: Section 12 was missing. Added System Milk tokens (muted text and contrast notes newly defined), Pixelify/VT323/Space Mono packages, all 14 components, motion tokens, 10 image prompts. Body: two RTCOM app references reworded to public vocabulary. Fonts already OFL.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#1E7A68` | active title bar (DESIGO green instead of navy), default button | 4.3:1 vs bg. Fill only on window body (4.3:1 as text there, so never used as small text); milk on green 4.7:1. |
| Primary ink | --c-on-primary | `#F7F4EC` | milk title text and labels on green | 4.7:1 on primary. |
| Secondary | --c-secondary | `#0B3B32` | "desktop" canvas behind windows (brand forest instead of teal #008080) | 10.3:1 vs bg. Desktop icon labels on forest use milk `#F7F4EC` (11.3:1). |
| Accent | --c-accent | `#7FE0B8` | phosphor: terminal text on `#0E100F`, title-bar gradient end, focus on dark | 1.3:1 vs bg. Phosphor on terminal `#0E100F` 12:1; not used on light. |
| Background | --c-bg | `#EFE9DC` | window body (brand milk-2): where all reading happens |  |
| Surface | --c-surface | `#E3DCCB` | button face |  |
| Text | --c-text | `#171918` | charcoal: text and outer bevel | 14.6:1 on bg · 12.9:1 on surface (≥ 7:1 met) |
| Muted text | --c-text-muted | `#55584F` | secondary window text, status-bar text (added in audit) | 6.0:1 on bg · 5.3:1 on surface (≥ 4.5:1 met) |
| Line | --c-line | `#8E8778` | bevel shadow; bevel highlight is milk `#F7F4EC` | Bevel shadow 3:1, structural only. |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#1E7A68` / `#E89A1C` / `#E89A1C` | green tick = recorded; amber = pending ("Status: pending approval") and `[DEMO]` prefixes; selection = gold `#C8A96B` | Amber is a fill with charcoal text (7.6:1), never amber text on milk. |

**Variant worlds in this style** (base / deep / light are the brand variant tokens; the right-hand column is how this style stages them):

| Variant | Base | Deep | Light | World in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#D9E8DF` | `MASTER_26.bottle`: forest title bar, Properties tab with code V1+ and descriptors as pending chips; 32×32 file icon with green cap |
| ROOT 14 (V1, red cap) | `#B3202A` | `#4A0A0F` | `#F3D9D6` | `ROOT_14.bottle`: red title bar; file icon with red cap |
| BASE 3 (V2, amber cap) | `#E89A1C` | `#5A3304` | `#F8E4C2` | `BASE_3.bottle`: amber title bar (charcoal title text); file icon with amber cap |
| ESSENTIAL (V3, ivory cap) | `#CDB89A` | `#4D4130` | `#F4EDE2` | `ESSENTIAL.bottle`: ivory title bar, almost-empty properties: "Simple, balanced, honest." |

**Dark-chapter inversion:** Terminal and technology windows: bg → `#0E100F`, text → phosphor `#7FE0B8`, muted → `#8A867C`, line → `#1F2220`, `[DEMO]` prefix in amber. The experience ends by closing every window into milk-white base DESIGO® (`#F7F4EC`, ink `#1E211F`). Mobile drops the desktop: stacked full-width window cards on milk.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Major Mono Display | `@fontsource/major-mono-display` (Google Fonts: Major Mono Display) | 400 | clamp(2.5rem, 7vw, 7rem) | 1.0 | 0.04em | lower/upper mix as designed; single words ("SOURCE") only |
| Headline H1–H2 | Inter Tight (variable) | `@fontsource-variable/inter-tight` (Google Fonts: Inter Tight) | wght 600–700 | H1 clamp(2rem, 4vw, 3.5rem) · H2 clamp(1.4rem, 2.4vw, 2rem) | 1.1 / 1.2 | -0.01em | Sentence |
| Body | Inter Tight (variable) | `@fontsource-variable/inter-tight` (Google Fonts: Inter Tight) | wght 400–500 | 0.9375rem (15 px) | 1.6 (24 px) | 0 | Sentence |
| Label / UI | Pixelify Sans (variable) | `@fontsource-variable/pixelify-sans` (Google Fonts: Pixelify Sans) | wght 400–700 (use 500) | 16 px (integer, title bars and icon labels) | 1.0 | 0 | File_Names.bottle / Title Case |
| Data / mono | Space Mono | `@fontsource/space-mono` (Google Fonts: Space Mono) | 400, 700 static | 0.8125rem | 1.45 | 0 | hex, IDs, JSON-like views |
| Devanagari (optional) | Mukta | `@fontsource/mukta` (Google Fonts: Mukta) | 200–800 static (use 400, 600) | matches body | 1.6 | 0 | n/a |
| Terminal log (style-specific) | VT323 | `@fontsource/vt323` (Google Fonts: VT323) | 400 | 20 px (integer) | 1.2 | 0 | log lines, `[DEMO]` prefix |

Licence: Major Mono Display, Inter Tight, Pixelify Sans, Space Mono, VT323 and Mukta are SIL OFL 1.1. W95FA-style bitmap fonts are excluded (not licensed for commercial web).
Pairing: Pixelify Sans and VT323 quote the 1998 desktop only in title bars and logs; Inter Tight carries every readable sentence; Space Mono shows the data.

### 12.3 Layout & surfaces
- **Grid:** Desktop canvas (forest) with windows snapped to a 12-column grid at 8 px increments; windows draggable on desktop; max-width 1440 px; mobile = stacked full-width cards. Bounded scope: `/trace/source` + optional ch. 13.
- **Spacing:** 8-px base: 8 · 16 · 24 · 32 · 48 · 64.
- **Radius:** 0 everywhere (sm 0 · md 0 · lg 0).
- **Border:** 2 px CSS bevels: outset = top/left `#F7F4EC`, bottom/right `#171918` + inner `#8E8778`; inset (pressed / fields) reversed.
- **Shadow / elevation:** No soft shadows; z-order by window focus (active title bar green → `#7FE0B8` gradient, inactive `#8E8778`).
- **Texture / overlay:** Data rain of public verbs and demo IDs at 20% (background only, paused off-screen); no glitter, no holographic stickers, no scan-lines on the bottle.

### 12.4 Components
All interactive components: `focus-visible` = 1 px dotted charcoal focus rectangle inside the control (Win98 idiom) + 2 px forest `#0B3B32` outer outline; disabled = 40% opacity, `cursor: not-allowed`, `aria-disabled`; loading = label kept, `aria-busy="true"`.
- **Primary button**: Default push button: button face `#E3DCCB` with outset bevel, charcoal Pixelify 16 px label; the default action carries a 1 px charcoal outer rim and a green `#1E7A68` left marker. 32 px tall, min 96 px wide. Hover: face lightens to `#EFE9DC`. Active: inset bevel, label shifts 1 px down-right. Disabled: embossed grey label (`#8E8778` + milk 1 px offset). Loading: label kept + a real progress segment bar beside it (never fake).
- **Secondary button**: Same push button without the default rim; Hover / active / disabled identical.
- **Text / arrow link**: Inter Tight 500 forest with 1 px underline; hover: gold `#C8A96B` selection background behind the text; disabled muted.
- **Icon button** (incl. menu): Title-bar controls 22×20 px (minimise, close) and 32×32 desktop icons; outset bevel; pressed = inset. Menu = "Start" button in the taskbar opening a Start menu of nav links. `aria-label` always.
- **Navigation bar** (desktop + mobile menu) + how the DESIGO® black write/un-write logo loop sits in it: The taskbar: 40 px bar at the bottom of the desktop (top on mobile cards view), Start button with nav as menu items, open windows as buttons, sound toggle (off by default). On base-style pages the normal DESIGO® bar is used. Mobile: Start menu becomes a full-width list. Logo: the DESIGO® wordmark (approved vector, never redrawn or recoloured) sits at the left of the bar, 112 px wide desktop / 92 px mobile, running the black write / un-write infinite loop of `DesigoLogo` (strokes draw 0–1.2 s, hold to 3.0 s, un-draw 3.0–4.2 s, pause to 4.6 s). Single colour: charcoal `#171918` on light chapters, milk-white `#F7F4EC` on dark chapters; the colour switches with the chapter theme and never animates. No ring, glow, hover trigger or style effect is applied to it. Reduced motion: static, fully written wordmark.
- **Cursor** (states: default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE); touch fallback: Pixel sprites (2× scaled): default = classic arrow · hover = pointing hand · ROTATE = four-way move cursor over the 360 viewer · EXPLORE = arrow with a small folder · ENTER = pointing hand with ↵ · VIEW = magnifier · TRACE = arrow with a dotted path. Busy (only during real loading) = hourglass drawn as a milk bottle filling up. Touch: native, no sprites.
- **Card / panel / info block**: Window: title bar (Pixelify 16 px, green active / grey inactive), 2 px outset bevel, milk-2 body with Inter Tight 15/24, status bar at the bottom in muted text. Real `<dialog>`/`role="dialog"`, focus trap, Esc closes, arrow keys move while the title bar is focused. Opens 120 ms scale .96 → 1 with outline zoom.
- **Badge / tag** (incl. "pending verification" and "DEMO · not live data"): Inset-bevel field label. Verified: green ✓ in a checkbox. Pending verification: Properties field "Status: pending approval" on an amber fill with charcoal text + earth dotted underline on the claim. DEMO: amber `[DEMO]` prefix on every log line and an amber title-bar badge "DEMO · NOT LIVE DATA"; address bar reads `C:\DEMO\illustrative-journey`. Static.
- **Input + form field** (Trace-your-milk bottle ID): Terminal window: prompt `trace ` then an inset-bevel field (VT323 20 px phosphor on `#0E100F`), placeholder `DSG-BTL-000001-3 (sample format)`, Enter runs. Focus: dotted focus rectangle + forest outline. Error: `Error: ID not recognised (demo only).` line (no alarming dialogs). Loading: real progress; output `role="log"` `aria-live="polite"`, lines ≥ 300 ms apart.
- **Divider / ornament**: Etched separator (1 px `#8E8778` + 1 px `#F7F4EC` below) inside windows; between chapters the windows minimise into the taskbar.
- **Section header** (chapter number + title pattern): Window title "03_cow-to-bottle.txt"-style file name in Pixelify + Inter Tight H2 inside the window body; on base-style chapters the base header is used.
- **Product info block** (variant name, code, price-pending, size, descriptors): `Properties` dialog for `MASTER_26.bottle`: tabs General / Descriptors; fields Name (Inter Tight), Code (Space Mono), Size and Price with "Status: pending approval", descriptors as a checklist each with its status. Commerce actions link out to the clean base /reserve page (never in a dialog).
- **Bottle stage** (how Bottle / Bottle360Viewer is framed: plinth, glow, shadow, background): "Bottle Viewer.exe" window: milk body, untouched render with contact shadow, float ±10 px / 6 s, tilt ±8°; real frame-loading progress bar, slider "Rotate: 0°–355°", ◀ ▶ buttons (5° = 1 of 72 frames) and an "Auto-rotate" checkbox mapped to Bottle360Viewer props. Before 360 frames ±25° + sheen.
- **Trace node / timeline step**: File Explorer tree: Farm.dir → Collection.log → Batch.log → Chiller.tmp → Barrel.dat → Plant.sys → Bottle.qr → You.home; selected node = gold selection; detail pane shows `traceNodes[]` public text; tree is a real `role="tree"` with arrow-key navigation.

### 12.5 Iconography & illustration
- **Icons:** 32×32 pixel desktop icons (2× for retina), 1 px charcoal outline, palette-only fills: Farm.dir, Batch.log, Chiller.tmp, Bottle.qr (bottle glyph with variant cap colour), You.home.
- **Illustration:** Wireframe visuals in phosphor on forest; the India / Rajasthan outline must come from Survey-of-India-compliant vector data, never generated.
- **Photo treatment:** Photos appear inside window bodies unfiltered (no dithering, no CRT effects); the bottle and milk are never retro-filtered.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | window open |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | minimise into taskbar |
| `--dur-micro` | `120ms` | window open (scale .96 → 1), button press |
| `--dur-reveal` | `300ms` | terminal line interval (minimum) |
| `--dur-scene` | `400ms` | minimise trail, closing sequence per window |
| `--float` | `translateY ±10px / 6000ms` | bottle float inside the viewer window |

- **Signature:** windows opening one per trace node with scroll; terminal boot sequence `> ORIGIN ... ok`; windows closing one by one into milk-white DESIGO® at the final CTA.
- **Rules:** no fake progress bars, no auto pop-ups, no fake warnings; one user-triggered pop-up at a time.
- **Reduced motion:** windows appear open without zoom trails, data rain off, terminal prints all lines at once, logo static.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

**Tail prompt (append to every prompt below):** *late-1990s screen-culture aesthetic quoted with restraint, clean vector wireframes and flat computer-desktop colour, deep forest green #0B3B32 desktop, phosphor mint #7FE0B8 lines, milk #EFE9DC and charcoal #171918, crisp, calm, no glitter, no holographic stickers, no malware tropes, no text, no watermark, no logo, no letters*

**Base negative prompt (append to every negative below):** *text, letters, words, numbers, logo, watermark, signature, label, signage, brand name, milk bottle, glass bottle, ghee jar, packaging, Holstein cow, Jersey cow, black-and-white spotted cow, cartoon cow face, cow wearing clothes, anthropomorphic animal, religious iconography, deity, people's faces*

| # | File path (web/public/desigo/styles/cybercore/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| 1 | `desktop-landscape.png` | 3200×2000 (16:10) | no | Calm desktop wallpaper: a slowly curving phosphor-mint wireframe terrain mesh of low dunes on deep forest green, horizon in the lower third, large empty upper area for windows | windows, icons, cursor, maps of countries, Matrix katakana, glitch (+ base negative) | `/trace/source` desktop, ch. 01 bounded hero |
| 2 | `desktop-portrait.png` | 1400×2400 (7:12) | no | Same wireframe dune terrain wallpaper as a tall portrait, mesh in the lowest quarter, empty above | windows, icons, map outlines (+ base negative) | Mobile backdrop |
| 3 | `wallpapers/master-26.png` | 2400×1500 (16:10) | no | Wireframe mesh of a forest canopy in green #1F5C45 lines on deep green #0A2A20, minimal, empty centre | windows, text, neon (+ base negative) | MASTER_26.bottle window background |
| 4 | `wallpapers/root-14.png` | 2400×1500 (16:10) | no | Wireframe mesh of layered earth strata in crimson #B3202A lines on oxblood #4A0A0F, minimal, empty centre | windows, text, glitch (+ base negative) | ROOT_14.bottle window background |
| 5 | `wallpapers/base-3.png` | 2400×1500 (16:10) | no | Wireframe mesh of dunes at sunset in amber #E89A1C lines on umber #5A3304, a low wireframe sun disc behind the centre | windows, text, glitch (+ base negative) | BASE_3.bottle window background |
| 6 | `wallpapers/essential.png` | 2400×1500 (16:10) | no | Almost empty ivory #F4EDE2 surface with a very faint warm-grey #4D4130 square grid, calm | mesh clutter, text (+ base negative) | ESSENTIAL.bottle window background |
| 7 | `trace/node-network.png` | 3000×2000 (3:2) | yes | Abstract wireframe network of eight small nodes connected in a single chain on a faint isometric grid, phosphor mint lines, transparent background | country outlines, map labels, file names (+ base negative) | Ch. 06 Explorer side panel, ch. 13 |
| 8 | `screensaver/milk-ribbons.png` | 3000×2000 (3:2) | yes | Several slow elegant milk-white ribbons looping in space like a classic screensaver, smooth and glossy, isolated on transparent background | rainbow trails, neon, polygons with colour cycling (+ base negative) | Ch. 09 screensaver (MilkFlow) |
| 9 | `textures/desktop-dither.png` | 512×512 seamless | no | Seamless tileable very subtle two-tone ordered dither pattern in deep forest green #0B3B32 and #0F4A3F | noise, glitter, objects (+ base negative) | Desktop pattern |
| 10 | `technology/wireframe-globe.png` | 2400×2400 (1:1) | yes | A clean rotating-style wireframe sphere of latitude and longitude lines in phosphor mint, no continents drawn, transparent background | continents, country borders, text (+ base negative) | Ch. 11 terminal boot backdrop |

The India / Rajasthan wireframe map (breed homelands) is built from Survey-of-India-compliant vector boundaries in code; never generate maps. Desktop icons and cursors are hand-drawn pixel sprites.

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/24_cybercore.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/cybercore/
- [ ] Bounded to `/trace/source` (+ optional ch. 13); never on /reserve, farm, breeds, heritage or ghee
- [ ] No fake warnings, pop-ups or progress; every data surface shows DEMO and public vocabulary only
