"use client";

import { useRef } from "react";
import { journey } from "@/content/desigo";
import { JourneyIcon } from "../JourneyIcons";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/motion";

/**
 * Chapter 03 — FROM COW TO BOTTLE.  Conceptual-sketch style on paper.
 * Desktop: pinned horizontal track; a milk line draws itself across the stations as you scroll.
 * Mobile / reduced motion: a vertical sequence with the line running down the left edge.
 */
export default function Journey() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 900px)", () => {
        const dist = () => track.current!.scrollWidth - innerWidth;
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom bottom", scrub: 1, invalidateOnRefresh: true },
        });
        tl.to(track.current, { x: () => -dist() }, 0).fromTo(".jr-line", { scaleX: 0 }, { scaleX: 1 }, 0);
        Array.from(root.current!.querySelectorAll<HTMLElement>(".jr-station")).forEach((s, i, arr) => {
          tl.fromTo(s.querySelector(".jr-icon"), { opacity: 0.18, y: 20 }, { opacity: 1, y: 0, duration: 0.06 }, (i / arr.length) * 0.92);
        });
      });
      mm.add("(max-width: 899px)", () => {
        gsap.fromTo(".jr-line-v", { scaleY: 0 }, { scaleY: 1, ease: "none", scrollTrigger: { trigger: root.current, start: "top 60%", end: "bottom 80%", scrub: 1 } });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="origin" className="chapter grain jr" data-tone="light" aria-labelledby="jr-title" style={{ background: "var(--paper)", color: "var(--ink)" }}>
      <div className="jr-sticky">
        <header className="wrap jr-head">
          <p className="chapter-num">03 — FROM COW TO BOTTLE</p>
          <h2 id="jr-title" className="f-display" style={{ fontSize: "var(--fs-h1)", margin: "14px 0 0", color: "var(--forest)" }}>
            Seven steps. <em>One unbroken line.</em>
          </h2>
        </header>
        <div ref={track} className="jr-track">
          <ol className="jr-list">
            <li className="jr-line" aria-hidden />
            <li className="jr-line-v" aria-hidden />
            {journey.map((s, i) => (
              <li key={s.key} className="jr-station">
                <div className="jr-icon" style={{ color: "var(--forest)" }}><JourneyIcon k={s.key} /></div>
                <span className="jr-node" aria-hidden />
                <p className="chapter-num" style={{ marginTop: 26 }}>0{i + 1}</p>
                <h3 className="f-display" style={{ fontSize: "clamp(2rem, 3.6vw, 3.6rem)", margin: "6px 0 10px", color: "var(--forest)" }}>{s.title}</h3>
                <p style={{ maxWidth: "26ch", opacity: 0.8 }}>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <style>{`
        .jr { height: 520vh; }
        .jr-sticky { position: sticky; top: 0; height: 100svh; overflow: hidden; display: grid; grid-template-rows: auto 1fr; padding-top: 120px; position: sticky; z-index: 2; }
        .jr-track { position: relative; display: flex; align-items: center; width: max-content; padding: 0 var(--gutter); }
        .jr-list { display: flex; gap: 9vw; list-style: none; margin: 0; padding: 0 8vw 0 30vw; position: relative; }
        .jr-station { width: 22vw; min-width: 260px; position: relative; }
        .jr-line { position: absolute; left: 30vw; right: 8vw; top: 159px; height: 2px; background: var(--forest); transform-origin: 0 50%; opacity: .7; }
        .jr-line-v { display: none; }
        .jr-node { display: block; width: 11px; height: 11px; border-radius: 50%; background: var(--paper); border: 2px solid var(--forest); margin-top: 14px; position: relative; z-index: 1; }
        @media (max-width: 899px), (prefers-reduced-motion: reduce) {
          .jr { height: auto; padding-bottom: var(--s-section); }
          .jr-sticky { position: relative; height: auto; overflow: visible; padding-top: var(--s-section); }
          .jr-track { width: auto; display: block; padding: 0 var(--gutter); }
          .jr-line { display: none; }
          .jr-line-v { display: block; position: absolute; left: 5px; top: 60px; bottom: 0; width: 2px; background: var(--forest); transform-origin: 50% 0; opacity: .6; }
          .jr-list { flex-direction: column; gap: 64px; padding: 60px 0 0 36px; }
          .jr-station { width: auto; min-width: 0; }
          .jr-icon svg { width: 96px; height: 96px; }
          .jr-node { position: absolute; left: -36px; top: 0; }
        }
      `}</style>
    </section>
  );
}
