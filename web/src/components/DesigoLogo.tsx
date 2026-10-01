/**
 * DESIGO® wordmark as vector SVG (paths from the approved animation sheet, idea #4).
 *
 * loop=true → an endless "write, then un-write" cycle, like a looping GIF:
 *   0.0–1.2 s  D · three waves · S · I · G · O draw themselves in order (480 ms each, 95 ms stagger)
 *   0.9 s      arrowhead + ® fade in
 *   1.2–3.0 s  hold — the full wordmark rests
 *   2.9 s      arrowhead + ® fade out
 *   3.0–4.2 s  the same strokes un-draw in reverse order (O first, D last)
 *   4.2–4.6 s  brief empty pause, then it starts again
 * Single colour (follows `color`: charcoal on light chapters, milk on dark ones). No ring, no green,
 * no pop, no hover trigger. Reduced-motion users see the static wordmark.
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

const CYCLE = 4600; // ms
const STEP = 95;
const DRAW = 480;
const UNDRAW_AT = 3000;
const LAST = 7;
const pct = (ms: number) => `${((ms / CYCLE) * 100).toFixed(2)}%`;

// One keyframe track per stroke position: draw forward, hold, un-draw in reverse order, rest.
const keyframes = Array.from({ length: LAST + 1 }, (_, i) => {
  const a = i * STEP;
  const b = UNDRAW_AT + (LAST - i) * STEP;
  return `@keyframes dlogoLoop${i} {
    0%, ${pct(a)} { stroke-dashoffset: 1.02; }
    ${pct(a + DRAW)}, ${pct(b)} { stroke-dashoffset: 0; }
    ${pct(b + DRAW)}, 100% { stroke-dashoffset: 1.02; }
  }`;
}).join("\n");

const css = `
  .dlogo-loop .dlogo-s { stroke-dasharray: 1 2; stroke-dashoffset: 1.02; animation-duration: ${CYCLE}ms; animation-iteration-count: infinite; animation-timing-function: ease-in-out; }
  ${Array.from({ length: LAST + 1 }, (_, i) => `.dlogo-loop .dlogo-s[data-o="${i}"] { animation-name: dlogoLoop${i}; }`).join("\n")}
  .dlogo-loop .dlogo-f { animation: dlogoFill ${CYCLE}ms ease-in-out infinite; }
  @keyframes dlogoFill { 0%, ${pct(900)} { opacity: 0; } ${pct(1100)}, ${pct(2800)} { opacity: 1; } ${pct(2950)}, 100% { opacity: 0; } }
  ${keyframes}
  @media (prefers-reduced-motion: reduce) {
    .dlogo-loop .dlogo-s, .dlogo-loop .dlogo-f { animation: none !important; stroke-dashoffset: 0 !important; opacity: 1 !important; }
  }
`;

export default function DesigoLogo({
  loop = false,
  title = "DESIGO®",
  className,
  style,
}: {
  loop?: boolean;
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={`dlogo ${loop ? "dlogo-loop" : ""} ${className ?? ""}`}
      viewBox="40 100 1950 425"
      role="img"
      aria-label={title}
      style={{ display: "block", width: "100%", height: "auto", overflow: "visible", transition: "color .5s ease", ...style }}
    >
      <g fill="none" stroke="currentColor">
        {STROKES.map((s, i) => (
          <path key={i} className="dlogo-s" data-o={s.order} pathLength={1} d={s.d} strokeWidth={s.w} strokeLinecap={s.cap} />
        ))}
        <polygon className="dlogo-f" fill="currentColor" stroke="none" points="1768,114 1862,184 1768,254" />
        <g className="dlogo-f">
          <circle cx="1928" cy="478" r="29" strokeWidth="6" />
          <text x="1928" y="491" textAnchor="middle" fontFamily="Archivo, Arial, sans-serif" fontWeight={800} fontSize={38} fill="currentColor" stroke="none">R</text>
        </g>
      </g>
      {loop && <style>{css}</style>}
    </svg>
  );
}
