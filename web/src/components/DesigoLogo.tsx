"use client";

import { useEffect, useRef, useState } from "react";

/**
 * DESIGO® wordmark as vector SVG (paths from the approved "stop page" animation sheet, idea #4).
 *
 * animate=true → "Stroke-draw, then fill green":
 *   D · three waves · S · I · G · O write themselves (480 ms each, 95 ms stagger),
 *   the arrowhead and ® fade in at 900 ms, then the mark turns DESIGO® green with a small pop at 1150 ms.
 *   No ring, no sound. Replays on hover. Static for reduced-motion users.
 * After the intro: DESIGO® green when `stayGreen` (light chapters), otherwise it follows `color` (milk on dark chapters).
 */
const wave = (y: number) =>
  `M398 ${y}C455 ${y} 490 ${y - 42} 548 ${y - 42}C606 ${y - 42} 632 ${y} 690 ${y}C712 ${y} 728 ${y - 6} 742 ${y - 18}`;

const STROKES: { d: string; w: number; order: number; cap?: "round" }[] = [
  { d: "M84 198V476H190C300 476 334 400 334 337C334 270 300 198 190 198Z", w: 52, order: 0 },
  { d: wave(240), w: 44, order: 1, cap: "round" },
  { d: wave(352), w: 44, order: 2, cap: "round" },
  { d: wave(464), w: 44, order: 3, cap: "round" },
  { d: "M1032 275C1025 215 980 190 922 190C858 190 812 222 812 275C812 330 860 342 922 354C990 367 1040 385 1040 425C1040 470 995 488 925 488C855 488 808 460 806 398", w: 50, order: 4 },
  { d: "M1128 172V502", w: 56, order: 5 },
  { d: "M1493 288A147 147 0 1 0 1475 422", w: 50, order: 6 },
  { d: "M1355 359H1528", w: 38, order: 6 },
  { d: "M1503 340V502", w: 50, order: 6 },
  { d: "M1874 249A138 138 0 1 1 1768 200", w: 50, order: 7 },
];

export default function DesigoLogo({
  animate = false,
  stayGreen = false,
  title = "DESIGO®",
  className,
  style,
}: {
  animate?: boolean;
  stayGreen?: boolean;
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [run, setRun] = useState(0);
  const [phase, setPhase] = useState<"idle" | "draw" | "done">(animate ? "idle" : "done");
  const timer = useRef<number[]>([]);

  useEffect(() => {
    if (!animate) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { const t = window.setTimeout(() => setPhase("done"), 0); return () => clearTimeout(t); }
    timer.current.forEach(clearTimeout);
    let cancelled = false;
    // start only once the page is painted and fonts are ready, so the draw is actually seen
    const start = () => {
      if (cancelled) return;
      setPhase("draw");
      timer.current = [window.setTimeout(() => setPhase("done"), 2600)];
    };
    if (run > 0) start();
    else (document.fonts?.ready ?? Promise.resolve()).then(() => { timer.current = [window.setTimeout(start, 350)]; });
    return () => { cancelled = true; timer.current.forEach(clearTimeout); };
  }, [animate, run]);

  const replay = () => { if (animate && phase === "done") setRun((r) => r + 1); };

  return (
    <svg
      key={run}
      className={`dlogo ${animate && phase === "draw" ? "dlogo-draw" : ""} ${phase === "idle" ? "dlogo-idle" : ""} ${stayGreen && phase === "done" ? "dlogo-green" : ""} ${className ?? ""}`}
      viewBox="40 100 1950 425"
      role="img"
      aria-label={title}
      onMouseEnter={replay}
      style={{ display: "block", width: "100%", height: "auto", overflow: "visible", ...style }}
    >
      <g fill="none" stroke="currentColor">
        {STROKES.map((s, i) => (
          <path
            key={i}
            className="dlogo-s"
            pathLength={1}
            d={s.d}
            strokeWidth={s.w}
            strokeLinecap={s.cap}
            style={{ ["--i" as string]: s.order }}
          />
        ))}
        <polygon className="dlogo-f" fill="currentColor" stroke="none" points="1768,114 1862,184 1768,254" style={{ opacity: animate && phase !== "done" ? 0 : 1 }} />
        <g className="dlogo-f" style={{ opacity: animate && phase !== "done" ? 0 : 1 }}>
          <circle cx="1928" cy="478" r="29" strokeWidth="6" />
          <text x="1928" y="491" textAnchor="middle" fontFamily="Archivo, Arial, sans-serif" fontWeight={800} fontSize={38} fill="currentColor" stroke="none">R</text>
        </g>
      </g>
      <style>{`
        .dlogo { transform-origin: center; transition: color .5s ease; }
        .dlogo-green { color: #1E7A68; }
        .dlogo-idle .dlogo-s { stroke-dasharray: 1 2; stroke-dashoffset: 1.02; }
        .dlogo-draw .dlogo-s { stroke-dasharray: 1 2; stroke-dashoffset: 1.02; animation: dlogoDraw 480ms ease-in-out forwards; animation-delay: calc(var(--i) * 95ms); }
        .dlogo-draw .dlogo-f { opacity: 0; animation: dlogoFade 200ms ease-out 900ms forwards; }
        .dlogo-draw { animation: dlogoGreen 2600ms linear forwards, dlogoPop 420ms cubic-bezier(.16,1,.3,1) 1150ms; }
        @keyframes dlogoDraw { to { stroke-dashoffset: 0; } }
        @keyframes dlogoFade { to { opacity: 1; } }
        @keyframes dlogoGreen { 44% { color: currentColor; } 50%, 100% { color: #1E7A68; } }
        @keyframes dlogoPop { 50% { transform: scale(1.07); } }
        @media (prefers-reduced-motion: reduce) { .dlogo-idle .dlogo-s, .dlogo-draw, .dlogo-draw * { animation: none !important; stroke-dashoffset: 0 !important; opacity: 1 !important; } }
      `}</style>
    </svg>
  );
}
