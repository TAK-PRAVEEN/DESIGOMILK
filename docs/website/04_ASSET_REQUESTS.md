# DESIGO® — Assets Needed From the Client

Status 2026-10-01. Nothing below will be substituted with stock or AI imagery. Until an asset arrives, the site shows
a labelled `AssetSlot` in its place.

## A. 360° bottle sequences (highest priority)

One folder per variant: `web/public/desigo/360/{master-26|root-14|base-3|essential}/`

| Spec | Requirement |
|---|---|
| Frames | **72 frames** per full turn (5° steps). 36 is the minimum; 120 for hero-only use |
| Naming | `frame-001.png … frame-072.png` — zero-padded, frame 001 = label facing camera, **clockwise when seen from above** |
| Resolution | 1600 px tall minimum (2400 px preferred), identical canvas size for every frame |
| Background | **Transparent PNG** (or pure white #FFFFFF that we can key, as a second choice) |
| Camera | Locked: same height, distance, focal length (85–105 mm equivalent), lens centred on the bottle's mid-height |
| Lighting | Identical in every frame — the light must not move with the bottle. Soft key light from the upper left plus a rim light |
| Bottle | The *real* production bottle, filled, with the current cap colour and the current label. No splash (we add the world in code) |
| Optional | A second pass of the same 72 frames **with** the variant's milk-splash, for the hero |

When frames arrive we check frame count, size consistency, alpha edges, orientation and lighting drift, then convert them to
WebP (~40–70 KB each). The viewer already supports drag, touch, scroll, auto-spin, inertia, keyboard and zoom.
Future path: a GLB/GLTF model per bottle (the viewer has a `model` source slot).

## B. Photography (real DESIGO® only)

| # | Shot | Where used | Format |
|---|---|---|---|
| 1 | Farm landscape, golden hour | 04 Origin, hero background options | 3:2, ≥ 2400 px |
| 2 | Cows grazing (indigenous breeds) | 04 Origin | 4:5, ≥ 1600 px |
| 3 | One portrait per breed in rotation (Gir, Tharparkar, Red Sindhi, Sahiwal, Rathi, Kankrej) — same background and angle for all | 05 Breeds | 4:5, ≥ 1600 px |
| 4 | Hands milking / collection moment | 03 Journey, 04 Origin | 4:5 |
| 5 | Feed / herbs used in MasterHerb™ / RootHerb™ / BaseHerb™ (flat-lay) | 08 Milks, 04 Origin | 1:1 |
| 6 | Testing at the farm (person + card, no third-party logo visible) | 07 Quality | 3:2 |
| 7 | Chilling / barrels at the hub | 06 Trace | 3:2 |
| 8 | Plant: filling glass bottles | 06 Trace, 03 Journey | 3:2 |
| 9 | Early-morning delivery at a doorstep (no customer faces without consent) | 13 Trace your milk | 3:2 |
| 10 | Founders / team (only if they want it public) | 14 Story | 4:5 |
| 11 | Archive material: earliest bottles, labels, documents, first farm photos | 14 Story | any |

## C. Brand files
- DESIGO® wordmark as **vector** (SVG/AI/PDF). We currently trace from a 2172×724 PNG.
- Brand colour codes and fonts, if they've been defined (current values are sampled from photos).
- Confirmation of the cap colours now in use for each variant.

## D. Approvals needed (see docs/desigo-master/19_OPEN_QUESTIONS.md)
Variant naming, prices & pack sizes, herb counts, breed list, farm counts, supporters/awards wording, and the public
wording for traceability.
