"use client";

import { useRef } from "react";
import Bottle from "../Bottle";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/motion";

const words = [
  { k: "ORIGIN", t: "Every bottle begins at a known farm.", x: -34, y: -26 },
  { k: "BREED", t: "Milk from indigenous Indian cows.", x: 33, y: -30 },
  { k: "FEED", t: "Free grazing, with herb-based feed.", x: -38, y: 4 },
  { k: "FARM", t: "Small farms, linked to a central hub.", x: 37, y: 2 },
  { k: "QUALITY", t: "Tested at the source — and again at the plant.", x: -31, y: 31 },
  { k: "TRACE", t: "Recorded at every hand-off.", x: 31, y: 33 },
];

/**
 * Chapter 01 + 02 — HERO → "the bottle becomes the story".
 * One pinned stage (CSS sticky, no scroll-jacking). Scroll drives a single scrubbed timeline:
 * headline exits · bottle travels to centre and turns · milk → forest · six words arrive in sequence.
 */
export default function HeroStory() {
  const root = useRef<HTMLElement>(null);
  const bottle = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add({ desktop: "(min-width: 900px)", mobile: "(max-width: 899px)" }, (c) => {
        const desktop = c.conditions?.desktop;
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: root.current, start: "top top", end: "bottom bottom", scrub: 1,
            onUpdate: (st) => { root.current!.dataset.tone = st.progress > 0.22 ? "dark" : "light"; },
          },
        });

        // intro letters (on load, not scroll)
        gsap.from(".hs-line > span", { yPercent: 110, duration: 1.4, ease: "expo.out", stagger: 0.08, delay: 0.15 });
        gsap.from(".hs-fade", { opacity: 0, y: 16, duration: 1.2, ease: "power3.out", stagger: 0.08, delay: 0.6 });
        gsap.from(bottle.current, { opacity: 0, y: 60, scale: 0.94, duration: 1.8, ease: "expo.out", delay: 0.2 });

        tl.to(".hs-line > span", { yPercent: -110, stagger: 0.02, duration: 0.12 }, 0.02)
          .to(".hs-fade", { opacity: 0, y: -20, duration: 0.08 }, 0.02)
          .fromTo(bottle.current, { xPercent: desktop ? 62 : 0, scale: 1 }, { xPercent: 0, scale: desktop ? 0.86 : 0.8, duration: 0.2, ease: "power2.inOut" }, 0.02)
          .fromTo(bottle.current, { rotationY: 0 }, { rotationY: 26, duration: 0.5, ease: "sine.inOut" }, 0.15)
          .to(bottle.current, { rotationY: -18, duration: 0.33, ease: "sine.inOut" }, 0.65)
          .to(".hs-bg", { backgroundColor: "#0B3B32", duration: 0.14 }, 0.14)
          .to(".hs-halo", { opacity: 1, scale: 1, duration: 0.2 }, 0.16)
          .to(".hs-ghost", { opacity: 0.07, duration: 0.2 }, 0.18);

        const ws = Array.from(root.current!.querySelectorAll<HTMLElement>(".hs-word > .hs-wi"));
        ws.forEach((w, i) => {
          const at = 0.26 + i * 0.11;
          tl.fromTo(w, { opacity: 0, y: 24, filter: "blur(6px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.06 }, at);
          if (desktop) tl.to(w, { opacity: 0.32, duration: 0.05 }, at + 0.1);
          else if (i < ws.length - 1) tl.to(w, { opacity: 0, y: -16, duration: 0.05 }, at + 0.09);
        });
        tl.to(".hs-wi", { opacity: 1, duration: 0.04 }, 0.95);
        return () => tl.kill();
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="top" className="chapter" data-tone="light" style={{ height: "430vh" }} aria-label="Introduction">
      <div style={{ position: "sticky", top: 0, height: "100svh", overflow: "hidden" }}>
        <div className="hs-bg" aria-hidden style={{ position: "absolute", inset: 0, background: "var(--milk)" }} />
        <div className="hs-halo" aria-hidden style={{ position: "absolute", left: "calc(50% - 60vmin)", top: "calc(50% - 60vmin)", width: "120vmin", height: "120vmin", borderRadius: "50%", background: "radial-gradient(closest-side, rgba(127,224,184,.16), rgba(30,122,104,.10) 45%, transparent 70%)", opacity: 0, scale: 0.6 }} />
        <div className="hs-ghost f-display" aria-hidden style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", fontSize: "34vw", color: "var(--milk)", opacity: 0, letterSpacing: "-0.06em", fontStyle: "italic" }}>
          desi
        </div>

        {/* headline */}
        <div className="wrap hs-head" style={{ position: "absolute", inset: 0, display: "grid", alignContent: "center", zIndex: 2, pointerEvents: "none" }}>
          <p className="label hs-fade" style={{ color: "var(--green)", marginBottom: 22 }}>DESIGO® · Jodhpur, India</p>
          <h1 className="f-display" style={{ fontSize: "var(--fs-display)", color: "var(--forest)", margin: 0 }}>
            <span className="hs-line" style={{ display: "block", overflow: "hidden" }}><span style={{ display: "inline-block" }}>Milk</span></span>
            <span className="hs-line" style={{ display: "block", overflow: "hidden" }}><span style={{ display: "inline-block" }}><em>from the</em></span></span>
            <span className="hs-line" style={{ display: "block", overflow: "hidden" }}><span style={{ display: "inline-block" }}>source.</span></span>
          </h1>
          <p className="lead hs-fade" style={{ marginTop: 28, color: "var(--ink)", maxWidth: "26ch" }}>
            Traceable milk from indigenous Indian cows.
          </p>
          <div className="hs-fade" style={{ display: "flex", gap: 28, flexWrap: "wrap", marginTop: 26, pointerEvents: "auto" }}>
            <a href="#origin" className="dbtn" data-cursor="ENTER"><span>Explore the source</span><span className="arrow" /></a>
            <a href="#trace" className="dlink" style={{ color: "var(--forest)" }} data-cursor="TRACE"><span>Trace the journey</span><span className="arrow" /></a>
          </div>
        </div>

        {/* bottle */}
        <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", zIndex: 3, pointerEvents: "none" }}>
          <div className="hs-bottle-size" style={{ pointerEvents: "auto" }} data-cursor="ROTATE">
            <Bottle ref={bottle} src="/desigo/products/master-26.webp" alt="DESIGO MASTER 26 milk bottle in a green milk splash" priority strength={10} />
          </div>
        </div>

        {/* orbiting words */}
        <ul className="hs-words on-dark" style={{ listStyle: "none", margin: 0, padding: 0, position: "absolute", inset: 0, zIndex: 4, pointerEvents: "none", color: "var(--milk)" }}>
          {words.map((w, i) => (
            <li key={w.k} className="hs-word" style={{ ["--x" as string]: `${w.x}vw`, ["--y" as string]: `${w.y}vh` }}>
              <span className="hs-wi" style={{ display: "block", opacity: 0 }}>
              <span className="chapter-num" style={{ color: "var(--signal)" }}>0{i + 1}</span>
              <span className="f-display" style={{ display: "block", fontSize: "clamp(1.9rem, 3.3vw, 3.3rem)", letterSpacing: "-0.02em", lineHeight: 1 }}>{w.k.charAt(0) + w.k.slice(1).toLowerCase()}</span>
              <span style={{ display: "block", fontSize: 14, opacity: 0.78, marginTop: 8, maxWidth: "24ch" }}>{w.t}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="hs-fade label" aria-hidden style={{ position: "absolute", bottom: 26, left: "50%", translate: "-50% 0", color: "var(--forest)", opacity: 0.6, zIndex: 5 }}>
          Scroll
        </div>
      </div>
      <style>{`
        .hs-bottle-size { width: min(30vw, 46vh); }
        .hs-word { position: absolute; left: calc(50% + var(--x)); top: calc(50% + var(--y)); translate: -50% -50%; }
        @media (max-width: 899px) {
          .hs-bottle-size { width: min(54vw, 36vh); margin-top: -40svh; }
          .hs-head { align-content: end !important; padding-bottom: 9svh; }
          .hs-head h1 { font-size: clamp(2.8rem, 13vw, 4.2rem) !important; }
          .hs-word { left: 50%; top: auto; bottom: 9svh; translate: -50% 0; text-align: center; width: 86vw; }
          .hs-wi { position: absolute; bottom: 0; left: 0; right: 0; }
          .hs-word span { margin-inline: auto; }
        }
        @media (prefers-reduced-motion: reduce) {
          #top { height: auto !important; }
          #top > div { position: relative !important; height: auto !important; min-height: 100svh; overflow: visible !important; }
          .hs-word { position: static; translate: none; } .hs-wi { opacity: 1 !important; position: static !important; }
          .hs-words { position: static !important; display: grid; gap: 24px; padding: 40px var(--gutter) !important; background: var(--forest); }
        }
      `}</style>
    </section>
  );
}
