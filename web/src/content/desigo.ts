/**
 * DESIGO® website content — single source of truth for the UI.
 *
 * Every claim carries a status:
 *   verified — confirmed by an official / internal source AND safe for public use
 *   pending  — appears in a DESIGO® source but is unverified or awaits approval (rendered with a dotted underline)
 *   blocked  — must never render publicly (kept here only so the team can see why it is excluded)
 *
 * Source keys refer to docs/desigo-master/00_SOURCE_REGISTER.md.
 */

export type ClaimStatus = "verified" | "pending" | "blocked";
export type Claim = { text: string; status: ClaimStatus; source: string; note?: string };

const pending = (text: string, source: string, note?: string): Claim => ({ text, status: "pending", source, note });
const verified = (text: string, source: string): Claim => ({ text, status: "verified", source });

export type VariantKey = "master-26" | "root-14" | "base-3" | "essential";

export type Variant = {
  key: VariantKey;
  name: string;
  code: string; // "DESIGO® V1+"
  numeral: string; // the large number used in typography
  price: Claim;
  size: Claim;
  render: string;
  frames360: string[]; // empty until the client supplies 360 sequences
  world: { base: string; deep: string; light: string; scene: string };
  line: string; // editorial one-liner (design copy)
  herbs: Claim;
  descriptors: Claim[];
};

const LINEUP = "S-07 lineup card (DESIGO® creative)";

export const variants: Variant[] = [
  {
    key: "master-26",
    name: "MASTER 26",
    code: "DESIGO® V1+",
    numeral: "26",
    price: pending("₹94", LINEUP, "Pack size for this price is not stated on the card"),
    size: pending("1 L glass · 900 g", "S-12 product master", "Large = 900 g net in 1000 ml bottle; half bottle 450 g / 500 ml also exists"),
    render: "/desigo/products/master-26.webp",
    frames360: [],
    world: { base: "var(--v-master)", deep: "var(--v-master-deep)", light: "var(--v-master-light)", scene: "Forest canopy" },
    line: "Twenty-six herbs. The fullest expression of the source.",
    herbs: pending("26 medicinal herbs in feed", "S-14 Q&A workbook (F21/F237)"),
    descriptors: [
      pending("MasterHerb™ grazed cows", LINEUP),
      pending("Prime service · extended cold chain", LINEUP),
      pending("Free grazed", LINEUP),
      pending("Geography & breed rotation", LINEUP),
    ],
  },
  {
    key: "root-14",
    name: "ROOT 14",
    code: "DESIGO® V1",
    numeral: "14",
    price: pending("₹76", LINEUP, "Pack size for this price is not stated on the card"),
    size: pending("1 L glass · 900 g", "S-12 product master"),
    render: "/desigo/products/root-14.webp",
    frames360: [],
    world: { base: "var(--v-root)", deep: "var(--v-root-deep)", light: "var(--v-root-light)", scene: "Red earth" },
    line: "Fourteen herbs, rooted in free grazing.",
    herbs: pending("14 medicinal herbs in feed", "S-14 Q&A workbook (F21/F237)"),
    descriptors: [
      pending("RootHerb™ grazed cows", LINEUP),
      pending("Free grazed", LINEUP),
      pending("Geography & breed rotation", LINEUP),
    ],
  },
  {
    key: "base-3",
    name: "BASE 3",
    code: "DESIGO® V2",
    numeral: "3",
    price: pending("₹69", LINEUP, "Pack size for this price is not stated on the card"),
    size: pending("1 L glass · 900 g", "S-12 product master"),
    render: "/desigo/products/base-3.webp",
    frames360: [],
    world: { base: "var(--v-base)", deep: "var(--v-base-deep)", light: "var(--v-base-light)", scene: "Golden hour" },
    line: "The everyday foundation.",
    herbs: pending("Herb count to be confirmed", "S-14 Q&A workbook (F21/F237)", "Sources say 3 and 6 — conflict"),
    descriptors: [
      pending("BaseHerb™ grazed cows", LINEUP),
      pending("Free grazed", LINEUP),
      pending("Geography & breed rotation", LINEUP),
    ],
  },
  {
    key: "essential",
    name: "ESSENTIAL",
    code: "DESIGO® V3",
    numeral: "E",
    price: pending("₹64", LINEUP, "Older brochure calls ₹76 'ESSENTIAL V-I' — naming conflict logged"),
    size: pending("1 L glass · 900 g", "S-12 product master"),
    render: "/desigo/products/essential.webp",
    frames360: [],
    world: { base: "var(--v-ess)", deep: "var(--v-ess-deep)", light: "var(--v-ess-light)", scene: "Ivory gallery" },
    line: "Simple, balanced, honest.",
    herbs: pending("Balanced diet, no herb formula", "S-07 lineup card"),
    descriptors: [
      pending("Balanced-diet fed cows", LINEUP),
      pending("Free grazed", LINEUP),
    ],
  },
];

export const ghee = [
  { name: "Bilona Ghee V1", from: "MASTER 26 milk (V1+)", price: pending("₹2,204", "S-09 ghee card"), size: pending("800 ml jar", "S-09 ghee card", "Product master says 760 g; blueprint says 780 g") },
  { name: "Bilona Ghee V2", from: "ROOT 14 milk (V1)", price: pending("₹1,681", "S-09 ghee card"), size: pending("800 ml", "S-09 ghee card") },
  { name: "Bilona Ghee V3", from: "BASE 3 milk (V2)", price: pending("₹1,206", "S-09 ghee card"), size: pending("800 ml", "S-09 ghee card") },
];

/** Breeds: client states six breeds in rotation every 3–4 months (Q&A F5, F252). Public use awaits approval. */
const BREED_SRC = "S-14 Q&A workbook F5/F252";
export const breeds: { name: string; region: string; claim: Claim }[] = [
  { name: "Gir", region: "Gir hills & forests, Saurashtra, Gujarat", claim: pending("In DESIGO® rotation", BREED_SRC, "Client-stated · approval pending") },
  { name: "Tharparkar", region: "Thar desert — Barmer, Jaisalmer, Jodhpur", claim: pending("In DESIGO® rotation", BREED_SRC, "Client-stated · approval pending") },
  { name: "Red Sindhi", region: "Sindh; maintained in organised herds across India", claim: pending("In DESIGO® rotation", BREED_SRC, "Absent from one internal draft list") },
  { name: "Sahiwal", region: "Montgomery (Sahiwal) region, Punjab", claim: pending("In DESIGO® rotation", BREED_SRC, "Client-stated · approval pending") },
  { name: "Rathi", region: "Bikaner, Ganganagar & Hanumangarh, Rajasthan", claim: pending("In DESIGO® rotation", BREED_SRC, "Client-stated · approval pending") },
  { name: "Kankrej", region: "Banaskantha & Kutch, Gujarat; Barmer & Jalore, Rajasthan", claim: pending("In DESIGO® rotation", BREED_SRC, "Client-stated · approval pending") },
];

export const qualityScreen = [
  "pH", "Salicylic acid", "Hydrogen peroxide", "Salt", "Urea", "Sucrose", "Boric acid", "Neutralizers",
  "Sodium hypochlorite", "Freshness", "Formalin", "Glucose", "Starch", "Maltodextrin", "Detergent", "Nitrite",
];

export const journey = [
  { key: "cow", title: "Cow", body: "Indigenous Indian cows on DESIGO® partner farms." },
  { key: "farm", title: "Farm", body: "Every farm is a known, mapped source." },
  { key: "milk", title: "Milk", body: "Each collection is recorded with where and when it happened." },
  { key: "test", title: "Test", body: "Screened at source on a 16-point paper test, then again at the plant." },
  { key: "chill", title: "Chill", body: "Cooled close to the source to protect freshness." },
  { key: "plant", title: "Plant", body: "Received, re-tested and composed into each variant." },
  { key: "bottle", title: "Bottle", body: "Filled into returnable glass, each with its own identity." },
] as const;

export type TraceNodeKey = "farm" | "collection" | "batch" | "chiller" | "barrel" | "plant" | "bottle" | "you";
export const traceNodes: { key: TraceNodeKey; title: string; verb: string; body: string; demo: string[] }[] = [
  { key: "farm", title: "Farm", verb: "ORIGIN", body: "DESIGO® works with a central farm hub and the smaller farms linked to it. Each small farm stays the true source in the record.", demo: ["Source farm · DEMO-FARM-02", "Hub · DEMO-HUB"] },
  { key: "collection", title: "Collection", verb: "ORIGIN", body: "When milk is collected, its quantity, place and time are recorded on the spot.", demo: ["12.0 kg · 05:42", "GPS + timestamp recorded"] },
  { key: "batch", title: "Batch", verb: "TRACE", body: "Collections are grouped into a batch. The batch remembers exactly which collections it contains.", demo: ["Batch · DEMO-B-0417", "3 collections"] },
  { key: "chiller", title: "Chiller", verb: "CHILL", body: "Batches are chilled near the source. When milk from different farms is combined, each farm's share is recorded by quantity.", demo: ["Share: 20% farm A · 80% farm B", "Kept cold"] },
  { key: "barrel", title: "Barrel", verb: "TRACE", body: "Milk travels to the plant in identified barrels; every hand-off is recorded.", demo: ["Barrel · DEMO-BRL-07", "Sealed at hub"] },
  { key: "plant", title: "Plant", verb: "TEST · PROCESS", body: "At the plant, milk is weighed, tested again and composed into its variant.", demo: ["Re-tested on arrival", "Composed into MASTER 26"] },
  { key: "bottle", title: "Bottle", verb: "FILL", body: "Each returnable glass bottle carries its own QR identity, linking it back through the chain.", demo: ["Bottle · DSG-BTL-000001-3 (sample format)"] },
  { key: "you", title: "You", verb: "DELIVER", body: "Delivered cold, early morning. The empty glass goes back into the loop.", demo: ["Delivered · early morning"] },
];

/** Supporters: no written evidence on file → excluded from the public site until documents are provided (KB Q34). */
export const supporters: Claim[] = [];

/** Claims excluded from the public site (kept for the team's visibility). */
export const blockedClaims: Claim[] = [
  { text: "World's best milk", status: "blocked", source: "Legacy logo / brochure", note: "Superlative, unverifiable" },
  { text: "World's first real-time control and monitoring system", status: "blocked", source: "S-11 infographic", note: "'World's first' claim" },
  { text: "Strength, immunity & protect your DNA", status: "blocked", source: "S-10 brochure", note: "Health claim (FSSAI risk)" },
  { text: "Justice with the one in womb", status: "blocked", source: "S-10 brochure", note: "Health / pregnancy claim" },
  { text: "Organic & certified a2", status: "blocked", source: "S-10 brochure", note: "No certificate on file" },
  { text: "NIAM / Govt. of India / UK aid as supporters", status: "blocked", source: "S-10 brochure", note: "No supporting letters on file (KB Q34)" },
  { text: "RTCOMC™ technology", status: "blocked", source: "S-07 lineup card", note: "Internal rule: RTCOM is not shown to customers" },
  { text: "RFID based end-to-end traceback", status: "blocked", source: "S-11 infographic", note: "Current system uses QR; RFID unconfirmed" },
];

/** Timeline — only dated items that appear in sources. Everything else stays "to be confirmed". */
export const timeline: { year: string; title: string; claim: Claim }[] = [
  { year: "2019", title: "The company is founded", claim: verified("Bhairaj Organics Pvt. Ltd. incorporated on 1 March 2019 (ROC Jaipur)", "W-04 MCA-derived company records") },
  { year: "2025", title: "Krishi Mangal 3.0", claim: pending("Selected as one of seven startups in the Cisco × Social Alpha Krishi Mangal 3.0 cohort (Oct 2025)", "W-06 published coverage", "Verified externally · approval to publish pending") },
  { year: "2025", title: "TiE Women, Rajasthan", claim: pending("First prize at the TiE Women Rajasthan Chapter pitch (Oct 2025)", "W-06 published coverage", "Verified externally · approval to publish pending") },
  { year: "2026", title: "Women on Wings", claim: pending("Partnership with Women on Wings announced (Mar 2026)", "W-06 published coverage", "Verified externally · approval to publish pending") },
  { year: "2026", title: "Every bottle gets an identity", claim: pending("QR identities for returnable glass bottles; farm, plant and delivery apps in pilot", "S-16 QR sheets / RTCOM builds") },
];

export const contact = {
  phone: pending("+91 76666 05000", "S-10 brochure"),
  email: pending("info@desigomilk.com", "S-10 brochure"),
  city: pending("Jodhpur, Rajasthan", "S-01 blueprint / S-14 Q&A"),
};
