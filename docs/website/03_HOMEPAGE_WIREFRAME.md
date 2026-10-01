# DESIGO® Home — Wireframe & Motion Script (v0.1)

Legend: `[B]` = hero bottle (the single persistent object) · `▮` pinned section · `↕` scroll distance in viewport heights (vh)

---

## 01 HERO  ▮ ↕ 100vh · environment: MILK

```
┌──────────────────────────────────────────────────────────────┐
│ D≋SIGO®        ORIGIN TRACE MILK FARMS TECHNOLOGY ABOUT  RESERVE│
│                                                              │
│  MILK                         [B]          Traceable milk    │
│  FROM THE                   (floating,     from indigenous   │
│  SOURCE.                     contact        Indian cows.     │
│                              shadow)                         │
│                                            EXPLORE THE SOURCE→│
│  scroll ↓                                  TRACE THE JOURNEY →│
└──────────────────────────────────────────────────────────────┘
```
- Pointer: bottle tilts ±8° (rotateX/rotateY, perspective 1200px), highlight sheen follows cursor, contact shadow stretches opposite.
- Idle: 6s float cycle (translateY ±10px). Splash layer drifts at 0.6× parallax.
- Scroll 0→100%: headline letters rise out with stagger; bottle scales 1 → 0.82 and drifts toward centre.
- Mobile: bottle centred top 55% of viewport; headline below; CTAs stacked.

## 02 THE BOTTLE BECOMES THE STORY  ▮ ↕ 300vh · MILK → FOREST

- `[B]` pinned in centre. Background interpolates milk → forest (CSS var tween).
- Six words placed on an ellipse around the bottle appear one at a time (each ~45vh of scroll):
  ORIGIN · BREED · FEED · FARM · QUALITY · TRACE — each with a one-line verified explanation.
- The bottle is a 2D render, so it does **not** fake a full 360° spin. It turns ±25° with a perspective skew and
  sheen sweep. When 360 frames arrive, the same scroll value drives the frame index instead (0→N).

## 03 FROM COW TO BOTTLE  ▮ horizontal ↕ 400vh · PAPER

```
 COW ──── FARM ──── MILK ──── TEST ──── CHILL ──── PLANT ──── BOTTLE
 (line drawing of each stage; a milk line draws itself left→right as the track scrolls)
```
- Desktop: horizontal track translates with scroll. Mobile: vertical stack, the line draws downward.

## 04 WHERE IT BEGINS  ↕ 160vh · FARM GREEN
- Layered parallax: grass foreground (photo, 1.2×), subject (0.9×), text (1×). Real Desigo photographs only.
- Copy: indigenous cows, free grazing, herb-based feed concept, geography & breed rotation.
- `AssetSlot`s show which farm/cow photographs are still needed.

## 05 BREEDS  ↕ 140vh · ARCHIVAL PAPER
- Botanical-plate layout: one large engraved-style portrait + index list.
- Breeds listed only once confirmed; otherwise the card reads "Breed portrait — awaiting confirmation".

## 06 TRACEABILITY  ▮ ↕ 200vh · DEEP FOREST
```
   FARM ●───● COLLECTION ───● BATCH ───● CHILLER ───● BARREL
                                                       │
   YOU ●───● BOTTLE ───● PLANT ●───────────────────────┘
```
- A glowing pulse travels the path as you scroll. Nodes are buttons: click → side panel with the public explanation.
- Label: "Illustrative journey — not live data".

## 07 QUALITY  ↕ 140vh · LAB WHITE
- Swiss grid. Left: large numerals "16" (screen parameters on the paper test card) with the list of adulterants.
- Right: three instruments drawn as hairline diagrams: temperature, fat / SNF, adulteration screen.
- Values appear only when officially confirmed; until then the readout says `— pending lab confirmation`.

## 08 THE FOUR MILKS  ▮ ↕ 4 × 120vh · per-variant world
- Each variant takes over the screen with its own world. The bottle floats in the centre with
  its colour's splash and slowly turns. Information panel animates in on the right:
  `V-CODE · NAME · PRICE · WHAT MAKES IT DIFFERENT (official descriptors)`.
- Variant index (01–04) on the left edge is a scroll-to control.

## 09 MILK AS MATERIAL  ↕ 100vh
- Canvas 2D ribbon simulation (lightweight; pauses off-screen; static gradient in reduced-motion).

## 10 HERITAGE  ↕ 120vh · ARCHIVAL PAPER
- Big italic serif statement, gold hairline rules, hand-drawn cow line art (SVG), paper grain.

## 11 TECHNOLOGY  ↕ 140vh · DARK TECHNOLOGY
- Grid with perspective, thin data lines and nodes. Statement:
  TRADITION IS THE SOURCE. / TECHNOLOGY PROTECTS THE JOURNEY.
- Seven public verbs: ORIGIN · TRACE · TEST · CHILL · PROCESS · FILL · DELIVER.

## 12 GHEE  ↕ 120vh · WARM GOLD
- Ghee jar cutout, folk-pattern border borrowed from its label, three ghee grades tied back to the milk they come from.

## 13 TRACE YOUR MILK  ↕ 120vh · CHARCOAL
- Input "Bottle ID" (prefilled demo ID) → step-by-step journey reveal. Large DEMO badge.

## 14 STORY  ↕ 100vh · PAPER
- Horizontal timeline. Only verified milestones; unknown years are shown as "to be confirmed" in internal builds and hidden in production.

## 15 FINAL CTA  ↕ 100vh · MILK → FOREST
- The bottle comes back, floating in milk ribbons. "Know where your milk comes from."
- RESERVE DESIGO MILK · EXPLORE TRACEABILITY. Footer: contact, supporters, legal.
