"use client";

import { useEffect, useRef, useState } from "react";
import { traceNodes, type TraceNodeKey } from "@/content/desigo";
import { gsap, ScrollTrigger, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/motion";

// Node positions in a 1000 × 520 drawing (a serpentine route: field → road → plant → home)
const POS: Record<TraceNodeKey, [number, number]> = {
  farm: [70, 110], collection: [270, 110], batch: [470, 110], chiller: [670, 110], barrel: [900, 170],
  plant: [800, 390], bottle: [520, 410], you: [180, 410],
};
const ORDER = traceNodes.map((n) => n.key);
const PATH =
  "M70 110 L670 110 C760 110 860 110 900 170 C950 240 920 330 800 390 C720 430 620 410 520 410 L180 410";

/**
 * Chapter 06 — TRACEABILITY. Futuristic Swiss data-viz on deep forest.
 * A pulse travels the chain as you scroll; every node is a real button that opens its explanation.
 * Labelled as an illustrative journey — never presented as live data.
 */
export default function TraceMap() {
  const root = useRef<HTMLElement>(null);
  const path = useRef<SVGPathElement>(null);
  const pulse = useRef<SVGCircleElement>(null);
  const [active, setActive] = useState<TraceNodeKey>("farm");
  const [pinned, setPinned] = useState(false); // user clicked → stop auto-follow
  const pinnedRef = useRef(false);
  useEffect(() => { pinnedRef.current = pinned; }, [pinned]);

  useIsoLayoutEffect(() => {
    const p = path.current!;
    const len = p.getTotalLength();
    p.style.strokeDasharray = `${len}`;
    if (prefersReducedMotion()) { p.style.strokeDashoffset = "0"; return; }
    // nearest path-length for each node, to sync the auto-selected node to the pulse
    const nodeAt = ORDER.map((k) => {
      let best = 0, bd = Infinity;
      for (let l = 0; l <= len; l += 4) { const pt = p.getPointAtLength(l); const d = Math.hypot(pt.x - POS[k][0], pt.y - POS[k][1]); if (d < bd) { bd = d; best = l; } }
      return best;
    });
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: root.current, start: "top top", end: "bottom bottom", scrub: 1,
        onUpdate: (st) => {
          const l = st.progress * len;
          p.style.strokeDashoffset = `${len - l}`;
          const pt = p.getPointAtLength(l);
          pulse.current!.setAttribute("cx", `${pt.x}`); pulse.current!.setAttribute("cy", `${pt.y}`);
          if (!pinnedRef.current) {
            let idx = 0; nodeAt.forEach((nl, i) => { if (l >= nl - 6) idx = i; });
            setActive(ORDER[idx]);
          }
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  useEffect(() => { if (pinned) { const t = setTimeout(() => setPinned(false), 9000); return () => clearTimeout(t); } }, [pinned, active]);

  const node = traceNodes.find((n) => n.key === active)!;
  const idx = ORDER.indexOf(active);

  return (
    <section ref={root} id="trace" className="chapter on-dark tm" data-tone="dark" aria-labelledby="tm-title" style={{ background: "var(--forest)", color: "var(--milk)" }}>
      <div className="tm-sticky">
        <div className="tm-grid-bg" aria-hidden />
        <header className="wrap tm-head">
          <div>
            <p className="chapter-num" style={{ color: "var(--signal)" }}>06 — TRACE</p>
            <h2 id="tm-title" className="f-display" style={{ fontSize: "var(--fs-h1)", margin: "12px 0 0" }}>
              Every hand-off, <em>remembered.</em>
            </h2>
          </div>
          <span className="demo-badge">Illustrative journey · not live data</span>
        </header>

        <div className="wrap tm-body">
          <div className="tm-map">
            <svg viewBox="0 0 1000 520" role="group" aria-label="Traceability chain from farm to you">
              <defs>
                <filter id="tm-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6" /></filter>
              </defs>
              <path d={PATH} fill="none" stroke="rgba(247,244,236,.14)" strokeWidth="1.5" strokeDasharray="3 7" />
              <path ref={path} d={PATH} fill="none" stroke="var(--signal)" strokeWidth="2" />
              <circle ref={pulse} cx={70} cy={110} r="14" fill="var(--signal)" opacity=".55" filter="url(#tm-glow)" />
              {traceNodes.map((n, i) => {
                const [x, y] = POS[n.key];
                const on = n.key === active;
                const passed = i <= idx;
                return (
                  <g key={n.key} transform={`translate(${x} ${y})`} className="tm-node">
                    <circle r={on ? 13 : 8} fill={on ? "var(--signal)" : passed ? "var(--forest)" : "var(--forest)"} stroke={passed ? "var(--signal)" : "rgba(247,244,236,.4)"} strokeWidth="1.5" style={{ transition: "r .5s var(--ease-out)" }} />
                    {on && <circle r="24" fill="none" stroke="var(--signal)" strokeOpacity=".35"><animate attributeName="r" from="14" to="34" dur="1.8s" repeatCount="indefinite" /><animate attributeName="stroke-opacity" from=".5" to="0" dur="1.8s" repeatCount="indefinite" /></circle>}
                    <text y={y > 300 ? 46 : -26} textAnchor="middle" fill="currentColor" style={{ font: "500 13px var(--font-inter-tight)", letterSpacing: ".18em", textTransform: "uppercase", opacity: on ? 1 : 0.7 }}>{n.title}</text>
                    <foreignObject x="-30" y="-30" width="60" height="60">
                      <button
                        aria-label={`${n.title}: ${n.verb}`}
                        aria-pressed={on}
                        data-cursor="EXPLORE"
                        onClick={() => { setActive(n.key); setPinned(true); }}
                        style={{ width: 60, height: 60, borderRadius: "50%", background: "transparent", border: 0, cursor: "pointer" }}
                      />
                    </foreignObject>
                  </g>
                );
              })}
            </svg>
          </div>

          <aside className="tm-panel" aria-live="polite">
            <p className="f-mono" style={{ fontSize: 11, color: "var(--signal)", letterSpacing: ".14em" }}>{String(idx + 1).padStart(2, "0")} / {String(ORDER.length).padStart(2, "0")} · {node.verb}</p>
            <h3 key={node.key} className="f-display tm-in" style={{ fontSize: "clamp(2.4rem, 4vw, 3.8rem)", margin: "8px 0 14px" }}>{node.title}</h3>
            <p key={node.key + "b"} className="tm-in" style={{ opacity: 0.85, maxWidth: "36ch" }}>{node.body}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "22px 0 0", display: "grid", gap: 8 }}>
              {node.demo.map((d) => (
                <li key={d} className="f-mono tm-in" style={{ fontSize: 12, padding: "10px 12px", border: "1px solid rgba(127,224,184,.28)", color: "var(--signal)" }}>{d}</li>
              ))}
            </ul>
            <p className="label" style={{ marginTop: 18, opacity: 0.45 }}>Sample values for illustration</p>
          </aside>
        </div>
      </div>
      <style>{`
        .tm { height: 300vh; }
        .tm-sticky { position: sticky; top: 0; height: 100svh; overflow: hidden; display: grid; grid-template-rows: auto 1fr; padding-top: 110px; }
        .tm-grid-bg { position: absolute; inset: 0; opacity: .5; background-image: linear-gradient(rgba(127,224,184,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(127,224,184,.06) 1px, transparent 1px); background-size: 56px 56px; mask-image: radial-gradient(ellipse at 50% 55%, #000 30%, transparent 75%); }
        .tm-head { display: flex; justify-content: space-between; align-items: end; gap: 20px; position: relative; flex-wrap: wrap; }
        .tm-body { display: grid; grid-template-columns: 1fr 340px; gap: 4vw; align-items: center; position: relative; }
        .tm-map svg { width: 100%; height: auto; max-height: 64vh; overflow: visible; }
        .tm-in { animation: tmIn .8s var(--ease-out); }
        @keyframes tmIn { from { opacity: 0; transform: translateY(10px); } }
        @media (max-width: 899px), (prefers-reduced-motion: reduce) {
          .tm { height: auto; }
          .tm-sticky { position: relative; height: auto; padding: var(--s-section) 0; }
          .tm-body { grid-template-columns: 1fr; }
          .tm-map svg text { font-size: 22px !important; }
        }
      `}</style>
    </section>
  );
}
