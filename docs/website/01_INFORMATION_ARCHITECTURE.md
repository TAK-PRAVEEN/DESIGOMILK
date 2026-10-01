# DESIGO® — Website Information Architecture

Status: DRAFT v0.1 · 2026-10-01 · Design demo stage (mock data, no backend)

## 1. Sitemap

```
/                     Home — cinematic flagship (single long scroll, 14 chapters)
/milk                 The four milk variants (MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL)
/milk/[variant]       Variant detail — ProductScene + Bottle360Viewer + facts
/ghee                 Bilona ghee (V1 · V2 · V3)
/origin               Cows, breeds, farms, feed  (FARMS in nav)
/trace                Traceability story + "Trace your milk" (demo → live API later)
/technology           RTCOM in public language (ORIGIN · TRACE · TEST · CHILL · PROCESS · FILL · DELIVER)
/about                Story, timeline, supporters (only verified milestones)
/reserve              Reservation / subscription (later: real commerce)
/legal/*              Privacy, terms, claims disclaimer
```

Navigation (minimal): `DESIGO® | ORIGIN · TRACE · MILK · FARMS · TECHNOLOGY · ABOUT | RESERVE`

## 2. Home — chapter order and narrative logic

The home page follows the physical journey of the milk. The **bottle is the protagonist**: it is
introduced, examined, sent back to its origin, follows the milk back to you, and returns at the end.

| # | Chapter | Story job | Style (from the 20+ style palette) | Environment |
|---|---------|-----------|------------------------------------|-------------|
| 01 | Hero | Stop the scroll. One bottle, almost nothing else. | Minimalism + Luxury Typography | Milk white |
| 02 | The bottle becomes the story | Six words orbit the bottle: ORIGIN · BREED · FEED · FARM · QUALITY · TRACE | Swiss + Ethereal | Milk → Forest |
| 03 | From cow to bottle | Horizontal, pinned journey of 7 stations | Conceptual Sketch / hand-drawn line | Paper |
| 04 | Where it begins (farm) | Real Desigo photographs, layered parallax | Documentary Editorial + Bohemian | Farm green |
| 05 | Breeds | Breed explorer (only confirmed breeds) | Victorian botanical plate + Wabi-Sabi | Archival paper |
| 06 | Traceability | Living trace map with a glowing path, clickable nodes | Futuristic Swiss data-viz | Deep forest |
| 07 | Quality | The lab page: 16-point adulterant screen, temperature, fat/SNF | Swiss / Minimal laboratory | Clinical milk white |
| 08 | The four milks | Four completely different product worlds | Luxury Typography per-variant | Green / Red / Amber / Ivory |
| 09 | Milk as material | Cinematic milk ribbon transition | Ethereal / Aurora (restrained) | Milk |
| 10 | Heritage | Indian agricultural heritage, linework, paper | Victorian + Wabi-Sabi + Editorial | Archival paper |
| 11 | Technology | Heritage → future. "Tradition is the source. Technology protects the journey." | Dark UI + Cyber-inspired grid | Dark technology |
| 12 | Ghee | Bilona ghee, from the milk it is made from | Editorial + Indian folk pattern (from the jar label) | Warm gold |
| 13 | Trace your milk | Demo bottle lookup — clearly labelled DEMO | Futuristic / Swiss | Charcoal |
| 14 | Story | Timeline (verified milestones only) | Editorial / archival | Paper |
| 15 | Final CTA | "Know where your milk comes from." | Minimalism | Milk → Forest |

## 3. Public vocabulary for internal RTCOM concepts

The site never exposes internal operating detail. Mapping:

| Internal (RTCOM) | Public concept | Public description (draft — needs approval) |
|---|---|---|
| Major / Minor Locus, GPS, timestamp | **ORIGIN** | Every collection is recorded with where and when it happened. |
| Batch, barrel IDs, custody | **TRACE** | Milk moves in identified lots; each hand-off is recorded. |
| Milkofit / Milk-O-Mak card, fat/SNF, plant tests | **TEST** | Milk is screened at source and again at the plant. |
| Chiller / RTCooler, temperature logs | **CHILL** | Milk is chilled close to the source. |
| Plant receiving, chiller composition | **PROCESS** | Each variant is composed from its own traced milk. |
| Filling, bottle QR | **FILL** | Every bottle carries its own identity. |
| Cold room, dispatch, rider app, empty return | **DELIVER** | Cold to your door; glass comes back. |

## 4. Data architecture for the website (demo → live)

```
src/content/*.ts        Verified, approved copy & product data (typed) — single source for UI
src/lib/trace/          TraceProvider interface
   demoProvider.ts      Returns clearly-flagged DEMO journeys (isDemo: true)
   apiProvider.ts       (future) calls the RTCOM public trace endpoint
public/desigo/360/<variant>/frame-###.webp   360 sequences (pending from client)
public/desigo/models/<variant>.glb           (future) real 3D model; viewer swaps source type
```
