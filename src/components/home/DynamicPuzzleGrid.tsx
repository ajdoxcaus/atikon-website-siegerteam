import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

export type DynamicPuzzleItem = {
  label: string;
  icon: LucideIcon;
  desc: string;
  to: string;
  example?: string;
  contentOffsetX?: number;
  contentOffsetY?: number;
};

const ANIMATION_SLOTS = [
  { delay: "100ms",  from: "translate(-60px, -40px)" },
  { delay: "300ms",  from: "translate(0, -70px)" },
  { delay: "500ms",  from: "translate(60px, -40px)" },
  { delay: "700ms",  from: "translate(-60px, 40px)" },
  { delay: "850ms",  from: "translate(0, 70px)" },
  { delay: "1000ms", from: "translate(60px, 40px)" },
] as const;

const PIECE_PATHS = [
  "M0,0 L200,0 L200,76 C200,76 224,80 224,100 C224,120 200,124 200,124 L200,200 L124,200 C124,200 120,224 100,224 C80,224 76,200 76,200 L0,200 Z",
  "M200,0 L400,0 L400,76 C400,76 424,80 424,100 C424,120 400,124 400,124 L400,200 L324,200 C324,200 320,176 300,176 C280,176 276,200 276,200 L200,200 L200,124 C200,124 224,120 224,100 C224,80 200,76 200,76 Z",
  "M400,0 L600,0 L600,200 L524,200 C524,200 520,224 500,224 C480,224 476,200 476,200 L400,200 L400,124 C400,124 424,120 424,100 C424,80 400,76 400,76 Z",
  "M0,200 L76,200 C76,200 80,224 100,224 C120,224 124,200 124,200 L200,200 L200,276 C200,276 176,280 176,300 C176,320 200,324 200,324 L200,400 L0,400 Z",
  "M200,200 L276,200 C276,200 280,176 300,176 C320,176 324,200 324,200 L400,200 L400,276 C400,276 376,280 376,300 C376,320 400,324 400,324 L400,400 L200,400 L200,324 C200,324 176,320 176,300 C176,280 200,276 200,276 Z",
  "M400,200 L476,200 C476,200 480,224 500,224 C520,224 524,200 524,200 L600,200 L600,400 L400,400 L400,324 C400,324 376,320 376,300 C376,280 400,276 400,276 Z",
];

const PIECE_CENTERS: [number, number][] = [
  [100, 100], [300, 100], [500, 100],
  [100, 300], [300, 300], [500, 300],
];

const GRADIENTS: [string, string][] = [
  ["#410098", "#5B18B5"],
  ["#5B18B5", "#410098"],
  ["#FA4616", "#FD7A55"],
  ["#2E006B", "#410098"],
  ["#410098", "#2E006B"],
  ["#D93A10", "#FA4616"],
];

/*
 * The SVG viewBox is "0 0 600 400" = the coloured board.
 * overflow="visible" lets the background tiles bleed outside.
 * The hero section's own overflow:hidden clips cleanly at the page edge.
 *
 * Background tile rect covers:
 *   x: -1200 … 1800  (2 board-widths left + 3 board-widths right)
 *   y:  -800 … 1200  (2 board-heights above + 3 board-heights below)
 * This is more than enough to fill any viewport, including the hero
 * bottom-padding area where tiles must be visible below the board.
 */
const BG_X = -1200;
const BG_Y = -800;
const BG_W = 3000;
const BG_H = 2000;

export function DynamicPuzzleGrid({ items }: { items: DynamicPuzzleItem[] }) {
  const pieces = items.slice(0, 6);

  return (
    <div
      className="puzzle-glow relative mx-auto w-full"
      aria-label="taxHub Plattform – 6 Module setzen sich als Puzzle zusammen"
    >
      <svg
        viewBox="0 0 600 400"
        /* overflow="visible" is the SVG attribute; style ensures browsers honour it */
        overflow="visible"
        style={{ overflow: "visible" }}
        className="block h-auto w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/*
           * patternUnits="userSpaceOnUse" + x=0 y=0 pins the tile grid to the
           * board's own coordinate system, so seams always match perfectly.
           */}
          <pattern
            id="puzzle-bg-repeat"
            x={0} y={0}
            width={600} height={400}
            patternUnits="userSpaceOnUse"
          >
            {PIECE_PATHS.map((d, i) => (
              <path
                key={i}
                d={d}
                fill="none"
                stroke="rgba(65,0,152,0.07)"
                strokeWidth={1.25}
              />
            ))}
          </pattern>

          {/* rounded clip for the coloured board */}
          <clipPath id="board-clip">
            <rect x={0} y={0} width={600} height={400} rx={12} />
          </clipPath>

          {pieces.map((_, i) => (
            <clipPath key={`clip-${i}`} id={`puzzle-clip-${i}`}>
              <path d={PIECE_PATHS[i]} />
            </clipPath>
          ))}

          {GRADIENTS.map(([from, to], i) => (
            <linearGradient
              key={`grad-${i}`}
              id={`puzzle-grid-grad-${i}`}
              x1="0" y1="0" x2="1" y2="1"
            >
              <stop offset="0%"   stopColor={from} />
              <stop offset="100%" stopColor={to}   />
            </linearGradient>
          ))}
        </defs>

        {/* ── Background tiles (spill outside viewBox via overflow:visible) ── */}
        <rect
          x={BG_X} y={BG_Y}
          width={BG_W} height={BG_H}
          fill="url(#puzzle-bg-repeat)"
        />

        {/* ── Coloured board ── */}
        <g clipPath="url(#board-clip)">
          <PuzzleGridLines />
          {pieces.map((item, i) => (
            <PuzzlePieceSVG key={item.label} item={item} index={i} />
          ))}
        </g>
      </svg>

      {/* Link overlays sit over the coloured board only */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 overflow-hidden rounded-2xl">
        {pieces.map((item) => (
          <Link
            key={`link-${item.label}`}
            to={item.to}
            className="block transition-colors duration-200 hover:bg-white/10"
            aria-label={`${item.label} – ${item.desc}`}
          />
        ))}
      </div>
    </div>
  );
}

function PuzzlePieceSVG({ item, index }: { item: DynamicPuzzleItem; index: number }) {
  const Icon = item.icon;
  const slot = ANIMATION_SLOTS[index] ?? ANIMATION_SLOTS[0];
  const [cx, cy] = PIECE_CENTERS[index] ?? [100, 100];
  const contentX = cx + (item.contentOffsetX ?? 0);
  const contentY = cy + (item.contentOffsetY ?? 0);

  return (
    <g
      className="puzzle-piece"
      style={{
        animationDelay: slot.delay,
        "--puzzle-from": slot.from,
        transformOrigin: `${contentX}px ${contentY}px`,
      } as React.CSSProperties}
      clipPath={`url(#puzzle-clip-${index})`}
    >
      <rect x={cx - 100} y={cy - 100} width={200} height={200} fill={`url(#puzzle-grid-grad-${index})`} />
      <path d={PIECE_PATHS[index]} fill={`url(#puzzle-grid-grad-${index})`} />

      <circle cx={contentX} cy={contentY - 20} r={22} fill="rgba(255,255,255,0.15)" />
      <foreignObject x={contentX - 14} y={contentY - 34} width={28} height={28}>
        <div className="flex h-full items-center justify-center">
          <Icon size={20} strokeWidth={1.8} color="white" />
        </div>
      </foreignObject>

      <text x={contentX} y={contentY + 16} textAnchor="middle" fill="white" fontSize={13} fontWeight={700} fontFamily="var(--font-sans)">
        {item.label}
      </text>
      <text x={contentX} y={contentY + 34} textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize={9} fontFamily="var(--font-sans)">
        {item.desc}
      </text>
    </g>
  );
}

function PuzzleGridLines() {
  const c = "rgba(65,0,152,0.12)";
  const w = 2.5;
  return (
    <g className="animate-hero-stagger" style={{ animationDelay: "1200ms" } as React.CSSProperties}>
      <path
        d={["M0,200","L76,200 C76,200 80,224 100,224 C120,224 124,200 124,200","L200,200","L276,200 C276,200 280,176 300,176 C320,176 324,200 324,200","L400,200","L476,200 C476,200 480,224 500,224 C520,224 524,200 524,200","L600,200"].join(" ")}
        fill="none" stroke={c} strokeWidth={w}
      />
      <path
        d={["M200,0","L200,76 C200,76 224,80 224,100 C224,120 200,124 200,124","L200,200","L200,276 C200,276 176,280 176,300 C176,320 200,324 200,324","L200,400"].join(" ")}
        fill="none" stroke={c} strokeWidth={w}
      />
      <path
        d={["M400,0","L400,76 C400,76 424,80 424,100 C424,120 400,124 400,124","L400,200","L400,276 C400,276 376,280 376,300 C376,320 400,324 400,324","L400,400"].join(" ")}
        fill="none" stroke={c} strokeWidth={w}
      />
      <rect x={0} y={0} width={600} height={400} fill="none" stroke={c} strokeWidth={w} rx={12} />
    </g>
  );
}
