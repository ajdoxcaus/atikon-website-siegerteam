import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

export type DynamicPuzzleItem = {
  label: string;
  icon: LucideIcon;
  desc: string;
  to: string;
  example?: string;
};

const ANIMATION_SLOTS = [
  { delay: "100ms", from: "translate(-60px, -40px)" },
  { delay: "300ms", from: "translate(0, -70px)" },
  { delay: "500ms", from: "translate(60px, -40px)" },
  { delay: "700ms", from: "translate(-60px, 40px)" },
  { delay: "850ms", from: "translate(0, 70px)" },
  { delay: "1000ms", from: "translate(60px, 40px)" },
] as const;

type EdgeKind = "tab" | "socket" | "flat";
type PieceEdges = { top: EdgeKind; right: EdgeKind; bottom: EdgeKind; left: EdgeKind };

const PIECE_SIZE = 200; //test
const JOINT_START = 76;
const JOINT_END = 124;
const JOINT_MID = 100;
const JOINT_DEPTH = 24;

const PIECE_EDGE_MAP: PieceEdges[] = [
  // row 1
  { top: "tab", right: "tab", bottom: "tab", left: "tab" },
  { top: "tab", right: "tab", bottom: "socket", left: "socket" },
  { top: "socket", right: "tab", bottom: "tab", left: "socket" },
  // row 2
  { top: "socket", right: "socket", bottom: "tab", left: "tab" },
  { top: "tab", right: "socket", bottom: "socket", left: "tab" },
  { top: "socket", right: "socket", bottom: "tab", left: "tab" },
];

const PIECE_CENTERS: [number, number][] = [
  [100, 100],
  [300, 100],
  [500, 100],
  [100, 300],
  [300, 300],
  [500, 300],
];

const GRADIENTS: [string, string][] = [
  ["#410098", "#5B18B5"],
  ["#5B18B5", "#410098"],
  ["#FA4616", "#FD7A55"],
  ["#2E006B", "#410098"],
  ["#410098", "#2E006B"],
  ["#D93A10", "#FA4616"],
];

function edgeDir(kind: EdgeKind, positiveDir: 1 | -1) {
  if (kind === "flat") {
    return 0;
  }
  return kind === "tab" ? positiveDir : -positiveDir;
}

function buildPiecePath(x: number, y: number, edges: PieceEdges) {
  const x0 = x;
  const y0 = y;
  const x1 = x + PIECE_SIZE;
  const y1 = y + PIECE_SIZE;

  const t = edgeDir(edges.top, -1);
  const r = edgeDir(edges.right, 1);
  const b = edgeDir(edges.bottom, 1);
  const l = edgeDir(edges.left, -1);

  const top = t
    ? `L${x + JOINT_START},${y0} C${x + JOINT_START},${y0} ${x + 80},${y0 + t * JOINT_DEPTH} ${x + JOINT_MID},${y0 + t * JOINT_DEPTH} C${x + 120},${y0 + t * JOINT_DEPTH} ${x + JOINT_END},${y0} ${x + JOINT_END},${y0} L${x1},${y0}`
    : `L${x1},${y0}`;
  const right = r
    ? `L${x1},${y + JOINT_START} C${x1},${y + JOINT_START} ${x1 + r * JOINT_DEPTH},${y + 80} ${x1 + r * JOINT_DEPTH},${y + JOINT_MID} C${x1 + r * JOINT_DEPTH},${y + 120} ${x1},${y + JOINT_END} ${x1},${y + JOINT_END} L${x1},${y1}`
    : `L${x1},${y1}`;
  const bottom = b
    ? `L${x + JOINT_END},${y1} C${x + JOINT_END},${y1} ${x + 120},${y1 + b * JOINT_DEPTH} ${x + JOINT_MID},${y1 + b * JOINT_DEPTH} C${x + 80},${y1 + b * JOINT_DEPTH} ${x + JOINT_START},${y1} ${x + JOINT_START},${y1} L${x0},${y1}`
    : `L${x0},${y1}`;
  const left = l
    ? `L${x0},${y + JOINT_END} C${x0},${y + JOINT_END} ${x0 + l * JOINT_DEPTH},${y + 120} ${x0 + l * JOINT_DEPTH},${y + JOINT_MID} C${x0 + l * JOINT_DEPTH},${y + 80} ${x0},${y + JOINT_START} ${x0},${y + JOINT_START} L${x0},${y0}`
    : `L${x0},${y0}`;

  return `M${x0},${y0} ${top} ${right} ${bottom} ${left} Z`;
}

const PIECE_PATHS = PIECE_EDGE_MAP.map((edges, idx) => {
  const col = idx % 3;
  const row = Math.floor(idx / 3);
  return buildPiecePath(col * PIECE_SIZE, row * PIECE_SIZE, edges);
});

export function DynamicPuzzleGrid({ items }: { items: DynamicPuzzleItem[] }) {
  const pieces = items.slice(0, 6);
  const BOARD_OFFSET = 24;

  return (
    <div className="puzzle-glow relative" aria-label="Module als Puzzle-Teile">
      <svg viewBox="-24 -24 648 448" className="h-auto w-full overflow-visible" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {pieces.map((_, i) => (
            <clipPath key={`clip-${i}`} id={`puzzle-grid-clip-${i}`}>
              <path d={PIECE_PATHS[i]} />
            </clipPath>
          ))}
          {GRADIENTS.map(([from, to], i) => (
            <linearGradient key={`grad-${i}`} id={`puzzle-grid-grad-${i}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={from} />
              <stop offset="100%" stopColor={to} />
            </linearGradient>
          ))}
        </defs>

        {pieces.map((item, i) => (
          <PuzzlePieceSVG key={item.label} item={item} index={i} />
        ))}
      </svg>

      <div
        className="absolute grid grid-cols-3 grid-rows-2"
        style={{ inset: `${BOARD_OFFSET}px` }}
      >
        {pieces.map((item) => (
          <Link
            key={`link-${item.label}`}
            to={item.to}
            className="block"
            aria-label={`${item.label} – ${item.desc}`}
          />
        ))}
      </div>
    </div>
  );
}

function PuzzlePieceSVG({ item, index }: { item: DynamicPuzzleItem; index: number }) {
  const Icon = item.icon;
  const slot = ANIMATION_SLOTS[index];
  const path = PIECE_PATHS[index];
  const [cx, cy] = PIECE_CENTERS[index];

  return (
    <g
      className="puzzle-piece"
      style={{
        animationDelay: slot.delay,
        "--puzzle-from": slot.from,
        transformOrigin: `${cx}px ${cy}px`,
      } as React.CSSProperties}
      clipPath={`url(#puzzle-grid-clip-${index})`}
    >
      <path d={path} fill={`url(#puzzle-grid-grad-${index})`} />
      <path d={path} fill="none" stroke="rgba(255,255,255,0.24)" strokeWidth="1.2" />
      <path d={path} fill="none" stroke="rgba(18,0,48,0.28)" strokeWidth="1.2" />

      <circle cx={cx} cy={cy - 22} r={22} fill="rgba(255,255,255,0.15)" />
      <foreignObject x={cx - 14} y={cy - 36} width={28} height={28}>
        <div className="flex h-full items-center justify-center">
          <Icon size={20} strokeWidth={1.8} color="white" />
        </div>
      </foreignObject>

      <foreignObject x={cx - 84} y={cy + 6} width={168} height={66}>
        <div className="flex h-full flex-col items-center text-center">
          <p className="text-[13px] font-bold leading-tight text-white">{item.label}</p>
          <p className="mt-1 text-[10px] leading-tight text-white/75">{item.desc}</p>
          {item.example && (
            <p className="mt-1 text-[9px] font-medium leading-tight text-white/90">
              z. B. {item.example}
            </p>
          )}
        </div>
      </foreignObject>
    </g>
  );
}
