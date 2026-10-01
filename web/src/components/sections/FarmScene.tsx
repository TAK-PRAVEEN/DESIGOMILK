"use client";

import { useRef } from "react";
import AssetSlot from "../AssetSlot";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/motion";

const facts = [
  { k: "Indigenous cows", t: "DESIGO® milk comes from indigenous Indian (desi) cows.", pending: false },
  { k: "Hub & linked farms", t: "A central farm hub works with smaller linked farms — and each small farm stays the recorded source of its milk.", pending: false },
  { k: "Free grazing", t: "Cows graze freely, with herb-based feed formulas.", pending: true },
  { k: "Geography & breed rotation", t: "Sourcing rotates across geography and breed.", pending: true },
];

/**
 * Chapter 04 — WHERE IT BEGINS. Documentary editorial on farm green.
 * Real DESIGO® photographs only; layered parallax (scroll + pointer). Missing shots are shown as AssetSlots.
 */
export default function FarmScene() {
  const root = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      Array.from(root.current!.querySelectorAll<HTMLElement>("[data-depth]")).forEach((el) => {
        const d = parseFloat(el.dataset.depth!);
        gsap.fromTo(el, { yPercent: d * 18 }, { yPercent: -d * 18, ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: 1 } });
      });
      const qx = Array.from(root.current!.querySelectorAll<HTMLElement>("[data-depth]")).map((el) => ({ d: parseFloat(el.dataset.depth!), q: gsap.quickTo(el, "x", { duration: 1.4, ease: "power3.out" }) }));
      const onMove = (e: PointerEvent) => { const nx = e.clientX / innerWidth - 0.5; qx.forEach(({ d, q }) => q(nx * d * -26)); };
      root.current!.addEventListener("pointermove", onMove);
      gsap.from(".fs-title > span", { yPercent: 105, stagger: 0.08, duration: 1.4, ease: "expo.out", scrollTrigger: { trigger: ".fs-title", start: "top 80%" } });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="farms" className="chapter on-dark grain" data-tone="dark" aria-labelledby="fs-title" style={{ background: "linear-gradient(180deg, #0f3a2c 0%, #1d4a33 55%, #2e5a35 100%)", color: "var(--milk)", padding: "var(--s-section) 0", overflow: "hidden" }}>
      <div className="wrap fs-grid">
        <div className="fs-copy">
          <p className="chapter-num">04 — ORIGIN</p>
          <h2 id="fs-title" className="f-display fs-title" style={{ fontSize: "var(--fs-display)", margin: "16px 0 32px" }}>
            <span style={{ display: "block", overflow: "hidden" }}><span style={{ display: "inline-block" }}>Where it</span></span>
            <span style={{ display: "block", overflow: "hidden" }}><span style={{ display: "inline-block" }}><em>begins.</em></span></span>
          </h2>
          <dl style={{ margin: 0 }}>
            {facts.map((f) => (
              <div key={f.k} style={{ borderTop: "1px solid rgba(247,244,236,.18)", padding: "18px 0", display: "grid", gridTemplateColumns: "minmax(120px, 0.8fr) 1.4fr", gap: 18 }}>
                <dt className="label" style={{ color: "var(--gold)", paddingTop: 4 }}>{f.k}</dt>
                <dd style={{ margin: 0, opacity: 0.88 }}>
                  <span className={f.pending ? "claim-pending" : undefined} title={f.pending ? "Pending verification" : undefined}>{f.t}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="fs-collage" aria-label="DESIGO® in the field">
          <figure data-depth="1.1" className="fs-a" style={{ margin: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/desigo/farms/bottle-in-grass.webp" alt="A DESIGO® glass bottle resting in tall green grass" loading="lazy" />
          </figure>
          <figure data-depth="0.5" className="fs-b" style={{ margin: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/desigo/cows/ghee-with-cows.webp" alt="A jar of DESIGO® ghee held up in front of cows at the farm" loading="lazy" />
          </figure>
          <figure data-depth="1.6" className="fs-c" style={{ margin: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/desigo/farms/bottle-in-hand.webp" alt="A DESIGO® milk bottle held up outdoors against trees" loading="lazy" />
          </figure>
        </div>
      </div>

      <div className="wrap fs-needs">
        <AssetSlot name="Farm landscape" spec="Wide 3:2 · ≥ 2400px · golden hour · real DESIGO® farm" ratio="3 / 2" />
        <AssetSlot name="Cows grazing" spec="Portrait 4:5 · ≥ 1600px · indigenous breeds at a DESIGO® farm" />
        <AssetSlot name="Hands & milking" spec="Portrait 4:5 · documentary, natural light" />
      </div>

      <style>{`
        .fs-grid { display: grid; grid-template-columns: 1fr 1.1fr; gap: 6vw; align-items: center; }
        .fs-collage { position: relative; height: min(110vh, 980px); }
        .fs-collage figure { position: absolute; overflow: hidden; }
        .fs-collage img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .fs-a { left: 6%; top: 4%; width: 52%; aspect-ratio: 9/14; }
        .fs-b { right: 0; top: 28%; width: 40%; aspect-ratio: 9/14; }
        .fs-c { left: 30%; bottom: 0; width: 30%; aspect-ratio: 3/4; box-shadow: 0 30px 60px rgba(0,0,0,.35); }
        .fs-needs { display: grid; grid-template-columns: 1.4fr 1fr 1fr; gap: 20px; margin-top: 80px; opacity: .8; }
        .claim-pending { text-decoration: underline dotted rgba(200,169,107,.8); text-underline-offset: 5px; }
        @media (max-width: 899px) {
          .fs-grid { grid-template-columns: 1fr; }
          .fs-collage { height: 120vw; margin-top: 30px; }
          .fs-needs { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
