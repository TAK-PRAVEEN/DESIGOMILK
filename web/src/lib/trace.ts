/**
 * Customer traceability — provider interface.
 * The UI only talks to a TraceProvider. Today: demoProvider (clearly flagged).
 * Later: apiProvider calling the public RTCOM trace endpoint (read-only, no personal data).
 */
export type TraceStep = { key: string; title: string; detail: string; at?: string };
export type TraceResult = { bottleId: string; variant: string; isDemo: boolean; steps: TraceStep[] };

export interface TraceProvider {
  lookup(bottleId: string): Promise<TraceResult | null>;
}

/** Bottle ID format used on DESIGO® QR stickers: DSG-BTL-NNNNNN-C */
export const BOTTLE_ID = /^DSG-BTL-\d{6}-\d$/i;

export const demoProvider: TraceProvider = {
  async lookup(raw) {
    const bottleId = raw.trim().toUpperCase();
    if (!BOTTLE_ID.test(bottleId)) return null;
    await new Promise((r) => setTimeout(r, 650));
    return {
      bottleId,
      variant: "MASTER 26",
      isDemo: true,
      steps: [
        { key: "origin", title: "Origin", detail: "Demo farm · linked to a central hub", at: "05:42" },
        { key: "breed", title: "Breed", detail: "Indigenous breed rotation (demo)" },
        { key: "collection", title: "Collection", detail: "Quantity, place and time recorded", at: "05:58" },
        { key: "quality", title: "Quality", detail: "16-point screen · passed (demo)", at: "06:10" },
        { key: "chilling", title: "Chilling", detail: "Cooled near the source", at: "06:25" },
        { key: "plant", title: "Plant", detail: "Received, re-tested, composed", at: "09:40" },
        { key: "production", title: "Production", detail: "Filled into returnable glass", at: "14:05" },
        { key: "delivery", title: "Delivery", detail: "Early-morning delivery", at: "Next day · 05:30" },
      ],
    };
  },
};

export const traceProvider: TraceProvider = demoProvider;
