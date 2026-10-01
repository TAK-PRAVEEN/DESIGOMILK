"use client";

import { useEffect, useRef, useState } from "react";
import { variants, type Variant } from "@/content/desigo";
import Bottle360Viewer from "../Bottle360Viewer";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/motion";

/**
 * Chapter 08 — THE FOUR MILKS. One pinned stage, four completely different worlds.
 * Scroll crossfades world → world: the outgoing bottle turns away and sinks, the incoming one rises
 * and turns in; the environment, the giant numeral and the information all change together.
 * The bottle itself never changes — only its world does.
 */
export default function ProductWorlds() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const n = variants.length;
  // let the nav re-read the section tone after it flips (ivory world needs dark ink)
  useEffect(() => { window.dispatchEvent(new Event("scroll")); }, [active]);

  useIsoLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const scenes = Array.from(root.current!.querySelectorAll<HTMLElement>(".pw-scene"));
      gsap.set(scenes.slice(1), { autoAlpha: 0 });
      scenes.forEach((s, i) => { if (i) gsap.set(s.querySelector(".pw-bottle"), { yPercent: 40, rotationY: -40, scale: 0.9 }); });

      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        scrollTrigger: {
          trigger: root.current, start: "top top", end: "bottom bottom", scrub: 1,
          onUpdate: (st) => setActive(Math.min(n - 1, Math.round(st.progress * (n - 1)))),
        },
      });
      for (let i = 1; i < n; i++) {
        const out = scenes[i - 1], inn = scenes[i];
        const at = i - 1 + 0.32;
        tl.to(out.querySelector(".pw-bottle"), { yPercent: -30, rotationY: 40, scale: 0.92, autoAlpha: 0, duration: 0.3 }, at)
          .to(out.querySelectorAll(".pw-info > *, .pw-lead > *"), { y: -30, autoAlpha: 0, stagger: 0.02, duration: 0.2 }, at)
          .to(out.querySelector(".pw-num"), { yPercent: -20, autoAlpha: 0, duration: 0.3 }, at)
          .to(inn, { autoAlpha: 1, duration: 0.3 }, at + 0.06)
          .set(out, { autoAlpha: 0 }, at + 0.36)
          .to(inn.querySelector(".pw-bottle"), { yPercent: 0, rotationY: 0, scale: 1, duration: 0.36 }, at + 0.06)
          .from(inn.querySelectorAll(".pw-info > *, .pw-lead > *"), { y: 40, autoAlpha: 0, stagger: 0.025, duration: 0.24 }, at + 0.14)
          .from(inn.querySelector(".pw-num"), { yPercent: 30, autoAlpha: 0, duration: 0.34 }, at + 0.06);
      }
      // hold the last world
      tl.to({}, { duration: 0.3 });
      // idle drift inside each world while it is on screen
      scenes.forEach((s) => gsap.to(s.querySelectorAll(".pw-mote"), { y: "-=60", x: "+=20", opacity: 0.1, duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut", stagger: 0.4 }));
    }, root);
    return () => ctx.revert();
  }, []);

  const go = (i: number) => {
    const el = root.current!;
    const top = el.offsetTop + (i / (n - 1)) * (el.offsetHeight - innerHeight) * 0.94 + 2;
    const lenis = (window as unknown as { __lenis?: { scrollTo: (y: number, o?: object) => void } }).__lenis;
    if (lenis) lenis.scrollTo(top, { duration: 1.8 }); else scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section ref={root} id="milk" className={`chapter pw ${active === n - 1 ? "" : "on-dark"}`} data-tone={active === n - 1 ? "light" : "dark"} aria-labelledby="pw-title" style={{ ["--n" as string]: n }}>
      <h2 id="pw-title" className="sr-only">The four DESIGO milks</h2>
      <div className="pw-stage">
        {variants.map((v, i) => <Scene key={v.key} v={v} i={i} n={n} />)}

        <nav className="pw-rail" aria-label="Choose a milk" style={{ color: active === n - 1 ? "var(--v-ess-deep)" : "var(--milk)", transition: "color .6s" }}>
          {variants.map((v, i) => (
            <button key={v.key} onClick={() => go(i)} aria-current={active === i} data-cursor="VIEW">
              <span className="f-mono">0{i + 1}</span><span className="pw-rail-name">{v.name}</span>
            </button>
          ))}
        </nav>
        <p className="chapter-num pw-chapter" style={{ color: active === n - 1 ? "var(--v-ess-deep)" : "var(--milk)", transition: "color .6s" }}>08 — THE MILK</p>
      </div>
      <style>{`
        .sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
        .pw { height: calc(var(--n) * 115vh); background: var(--charcoal); color: var(--milk); }
        .pw-stage { position: sticky; top: 0; height: 100svh; overflow: hidden; }
        .pw-scene { position: absolute; inset: 0; display: grid; grid-template-columns: 1fr minmax(260px, 30vw) 1fr; align-items: center; padding: 90px var(--gutter) 40px; }
        .pw-env { position: absolute; inset: 0; z-index: 0; overflow: hidden; }
        .pw-num { position: absolute; z-index: 1; left: 50%; top: 50%; translate: -50% -52%; font-size: min(62vw, 92vh); line-height: .8; font-weight: 200; letter-spacing: -.06em; color: transparent; -webkit-text-stroke: 1px color-mix(in oklab, currentColor 24%, transparent); pointer-events: none; white-space: nowrap; }
        .pw-bottle { grid-column: 2; position: relative; z-index: 3; width: min(30vw, 50vh); justify-self: center; transform-style: preserve-3d; }
        .pw-info { grid-column: 3; z-index: 4; position: relative; max-width: 380px; justify-self: end; }
        .pw-lead { grid-column: 1; z-index: 4; position: relative; align-self: end; padding-bottom: 6vh; }
        .pw-desc { list-style: none; margin: 18px 0 0; padding: 0; font-size: 14px; }
        .pw-desc li { padding: 10px 0; border-top: 1px solid color-mix(in oklab, currentColor 18%, transparent); text-decoration: underline dotted color-mix(in oklab, currentColor 45%, transparent); text-underline-offset: 4px; text-decoration-thickness: 1px; }
        .pw-herbs { margin: 16px 0 0; font-family: var(--font-fraunces); font-style: italic; font-size: 1.25rem; text-decoration: underline dotted color-mix(in oklab, currentColor 45%, transparent); text-underline-offset: 5px; }
        .pw-rail { position: absolute; left: var(--gutter); top: 50%; translate: 0 -50%; z-index: 6; display: grid; gap: 4px; }
        .pw-rail button { display: flex; gap: 12px; align-items: baseline; background: none; border: 0; color: inherit; opacity: .45; padding: 6px 0; cursor: pointer; text-align: left; transition: opacity .4s; }
        .pw-rail button[aria-current="true"] { opacity: 1; }
        .pw-rail .f-mono { font-size: 11px; }
        .pw-rail-name { font-size: 11px; letter-spacing: .2em; font-weight: 600; max-width: 0; overflow: hidden; white-space: nowrap; transition: max-width .7s var(--ease-out); }
        .pw-rail button[aria-current="true"] .pw-rail-name, .pw-rail:hover .pw-rail-name { max-width: 140px; }
        .pw-chapter { position: absolute; top: 96px; left: var(--gutter); z-index: 6; }
        .pw-mote { position: absolute; border-radius: 50%; pointer-events: none; }
        @media (max-width: 899px) {
          .pw-scene { grid-template-columns: 1fr; grid-template-rows: 1fr auto; padding: 120px var(--gutter) 28px; align-items: end; }
          .pw-bottle { grid-column: 1; grid-row: 1; width: min(62vw, 40vh); align-self: center; }
          .pw-info { grid-column: 1; grid-row: 2; justify-self: start; max-width: none; }
          .pw-lead { display: none; }
          .pw-desc { display: none; }
          .pw-rail { top: auto; bottom: auto; top: 120px; translate: none; left: auto; right: var(--gutter); }
          .pw-num { font-size: 120vw; }
        }
        @media (prefers-reduced-motion: reduce) {
          .pw { height: auto; }
          .pw-stage { position: relative; height: auto; }
          .pw-scene { position: relative; min-height: 100svh; }
          .pw-rail { display: none; }
        }
      `}</style>
    </section>
  );
}

function Scene({ v, i, n }: { v: Variant; i: number; n: number }) {
  return (
    <article className="pw-scene" aria-label={`${v.name}, ${v.code}`} data-ink={v.key === "essential" ? "dark" : "light"} style={{ color: v.key === "essential" ? "var(--v-ess-deep)" : "var(--milk)" }}>
      <Environment v={v} />
      <span className="pw-num f-display" aria-hidden>{v.numeral}</span>

      <div className="pw-lead">
        <p className="f-display" style={{ fontSize: "clamp(1.6rem, 2.4vw, 2.4rem)", maxWidth: "14ch", fontStyle: "italic", opacity: 0.9 }}>{v.line}</p>
        <p className="label" style={{ opacity: 0.55, marginTop: 14 }}>World · {v.world.scene}</p>
      </div>

      <div className="pw-bottle" data-cursor="ROTATE">
        <Bottle360Viewer source={v.frames360.length ? { type: "sequence", frames: v.frames360 } : { type: "image", src: v.render }} alt={`DESIGO ${v.name} milk bottle`} />
      </div>

      <div className="pw-info">
        <p className="f-mono" style={{ fontSize: 12, letterSpacing: ".14em", opacity: 0.75 }}>{String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")} · {v.code}</p>
        <h3 className="f-display" style={{ fontSize: "clamp(3rem, 5.6vw, 5.6rem)", margin: "8px 0 6px", lineHeight: 0.9 }}>{v.name}</h3>
        <div style={{ display: "flex", gap: 28, alignItems: "baseline", marginTop: 14 }}>
          <span className="f-display" style={{ fontSize: "2.4rem" }} title={v.price.note}>{v.price.text}</span>
          <span className="label" style={{ opacity: 0.7 }} title={v.size.note}>{v.size.text} · returnable glass</span>
        </div>
        <p className="pw-herbs" title={v.herbs.note ?? "Pending verification"}>{v.herbs.text}</p>
        <ul className="pw-desc" aria-label="What makes it different (pending verification)">
          {v.descriptors.map((d) => <li key={d.text} title="Pending verification">{d.text}</li>)}
        </ul>
        <a href="#reserve" className="dlink" style={{ marginTop: 18, color: "inherit" }} data-cursor="ENTER"><span>Reserve {v.name.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())}</span><span className="arrow" /></a>
      </div>
    </article>
  );
}

/** Four art-directed environments, all CSS/SVG (no WebGL), each derived from the variant cap colour. */
function Environment({ v }: { v: Variant }) {
  const motes = Array.from({ length: 14 }, (_, k) => ({
    left: `${(k * 37) % 100}%`, top: `${(k * 53) % 100}%`, size: 3 + ((k * 7) % 9),
  }));
  const base: React.CSSProperties = { position: "absolute", inset: 0 };
  return (
    <div className="pw-env" aria-hidden>
      {v.key === "master-26" && (
        <>
          <div style={{ ...base, background: `radial-gradient(ellipse 60% 70% at 50% 55%, ${v.world.base} 0%, ${v.world.deep} 70%)` }} />
          {/* canopy light — leaf-dappled */}
          <div style={{ ...base, opacity: 0.35, background: "radial-gradient(circle at 20% 15%, rgba(190,230,170,.35), transparent 22%), radial-gradient(circle at 75% 10%, rgba(190,230,170,.25), transparent 18%), radial-gradient(circle at 85% 70%, rgba(190,230,170,.18), transparent 20%)", filter: "blur(10px)" }} />
          {motes.map((m, k) => <span key={k} className="pw-mote" style={{ left: m.left, top: m.top, width: m.size, height: m.size, background: "rgba(214,240,200,.5)" }} />)}
        </>
      )}
      {v.key === "root-14" && (
        <>
          <div style={{ ...base, background: `linear-gradient(180deg, ${v.world.deep} 0%, #7a1218 55%, ${v.world.base} 100%)` }} />
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ ...base, width: "100%", height: "100%", opacity: 0.22 }}>
            {Array.from({ length: 12 }).map((_, k) => (
              <path key={k} d={`M0 ${55 + k * 4} C 25 ${52 + k * 4 + (k % 3)}, 60 ${58 + k * 4 - (k % 2) * 3}, 100 ${54 + k * 4}`} fill="none" stroke="#f3d9d6" strokeWidth="0.15" />
            ))}
          </svg>
          {motes.map((m, k) => <span key={k} className="pw-mote" style={{ left: m.left, top: m.top, width: m.size * 0.7, height: m.size * 0.7, background: "rgba(255,200,190,.35)" }} />)}
        </>
      )}
      {v.key === "base-3" && (
        <>
          <div style={{ ...base, background: `linear-gradient(180deg, #3a2104 0%, ${v.world.deep} 30%, #b56a0c 75%, ${v.world.base} 100%)` }} />
          <div style={{ position: "absolute", left: "50%", top: "60%", width: "70vmin", height: "70vmin", translate: "-50% -50%", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,214,140,.85), rgba(232,154,28,.25) 45%, transparent 70%)" }} />
          <div style={{ ...base, background: "repeating-conic-gradient(from 0deg at 50% 60%, rgba(255,220,160,.07) 0 4deg, transparent 4deg 12deg)", maskImage: "radial-gradient(circle at 50% 60%, #000 10%, transparent 60%)" }} />
        </>
      )}
      {v.key === "essential" && (
        <>
          <div style={{ ...base, background: `linear-gradient(180deg, #e9e0d0 0%, ${v.world.light} 60%, #d9ccb6 100%)` }} />
          {/* gallery wall light + stone plinth */}
          <div style={{ position: "absolute", left: "50%", top: 0, width: "60vw", height: "80vh", translate: "-50% 0", background: "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(255,255,255,.9), transparent 70%)" }} />
          <div style={{ position: "absolute", left: "50%", bottom: 0, width: "min(36vw, 420px)", height: "17vh", translate: "-50% 0", background: "linear-gradient(180deg, #cfc3ad, #b9ab92)", boxShadow: "inset 0 1px 0 rgba(255,255,255,.6)" }} />
          <div style={{ ...base, background: "linear-gradient(180deg, transparent 60%, rgba(77,65,48,.25))" }} />
        </>
      )}
    </div>
  );
}
