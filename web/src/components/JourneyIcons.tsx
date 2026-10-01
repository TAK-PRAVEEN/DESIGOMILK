/** Hand-drawn style line icons (stroke only, inherit colour). Conceptual-sketch language for the journey. */
const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export function JourneyIcon({ k, size = 140 }: { k: string; size?: number }) {
  const common = { width: size, height: size, viewBox: "0 0 120 120", "aria-hidden": true };
  switch (k) {
    case "cow":
      return (
        <svg {...common}><g {...S}>
          <path d="M22 58c4-10 14-15 26-15h28c8 0 14 3 18 9l6 3c3 1 4 4 3 7l-2 4c-1 2-3 3-5 3h-4" />
          <path d="M94 52c2-6 6-9 11-10M90 50c-1-6 1-11 6-14" />
          <path d="M30 60c-6 2-9 8-9 14v4M35 78v22M46 80v20M80 80v20M90 76v24" />
          <path d="M33 78c10 4 40 4 58-2" />
          <path d="M46 43c4-6 10-8 18-8M22 58c-4 4-6 10-4 18" />
          <path d="M62 80c0 5 4 8 8 8s7-3 7-7" />
          <circle cx="98" cy="60" r="1" />
        </g></svg>
      );
    case "farm":
      return (
        <svg {...common}><g {...S}>
          <path d="M14 92h92M24 92V58l20-16 20 16v34M38 92V74h12v18" />
          <path d="M64 70h30v22M70 70V60h18v10" />
          <path d="M14 100c18-4 34-4 46 0s28 4 46 0M18 108c20-3 42-3 64 0" />
          <circle cx="92" cy="28" r="8" /><path d="M92 12v4M92 40v4M76 28h4M104 28h4" />
        </g></svg>
      );
    case "milk":
      return (
        <svg {...common}><g {...S}>
          <path d="M44 22h32M47 22v10c0 4-9 8-9 18v44c0 4 3 6 7 6h30c4 0 7-2 7-6V50c0-10-9-14-9-18V22" />
          <path d="M38 60c10-4 22 4 44-2" />
          <path d="M34 50c-6 0-10 4-10 10M86 50c6 0 10 4 10 10" />
        </g></svg>
      );
    case "test":
      return (
        <svg {...common}><g {...S}>
          <rect x="24" y="24" width="72" height="72" rx="2" />
          {Array.from({ length: 16 }).map((_, i) => {
            const a = (i / 16) * Math.PI * 2;
            return <circle key={i} cx={60 + Math.cos(a) * 24} cy={60 + Math.sin(a) * 24} r="3.2" />;
          })}
          <circle cx="60" cy="60" r="7" />
        </g></svg>
      );
    case "chill":
      return (
        <svg {...common}><g {...S}>
          <rect x="34" y="20" width="52" height="80" rx="26" />
          <path d="M60 36v48M46 46l28 28M74 46L46 74M40 60h40" />
          <path d="M60 36l-5 5M60 36l5 5M60 84l-5-5M60 84l5-5" />
        </g></svg>
      );
    case "plant":
      return (
        <svg {...common}><g {...S}>
          <path d="M14 96h92M20 96V60l18 10V60l18 10V60l18 10V44h14v52" />
          <path d="M92 44V24h8v20" />
          <path d="M96 18c4-4 10-4 12 0" />
          <path d="M30 84h8M48 84h8M66 84h8" />
        </g></svg>
      );
    case "bottle":
      return (
        <svg {...common}><g {...S}>
          <path d="M52 14h16v8c0 4 12 12 12 26v50c0 5-4 8-9 8H49c-5 0-9-3-9-8V48c0-14 12-22 12-26z" />
          <path d="M52 22h16M40 62h40M40 82h40" />
          <rect x="52" y="66" width="16" height="12" />
        </g></svg>
      );
    default:
      return null;
  }
}
