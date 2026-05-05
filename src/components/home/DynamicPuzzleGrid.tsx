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
  { delay: "100ms", from: "translate(-60px, -40px)" },
  { delay: "300ms", from: "translate(0, -70px)" },
  { delay: "500ms", from: "translate(60px, -40px)" },
  { delay: "700ms", from: "translate(-60px, 40px)" },
  { delay: "850ms", from: "translate(0, 70px)" },
  { delay: "1000ms", from: "translate(60px, 40px)" },
] as const;

type EdgeKind = "tab" | "socket" | "flat";
type PieceEdges = { top: EdgeKind; right: EdgeKind; bottom: EdgeKind; left: EdgeKind };

const PIECE_SIZE = 232;
const GRID_WIDTH = PIECE_SIZE * 3;
const GRID_HEIGHT = PIECE_SIZE * 2;
const JOINT_START = Math.round(PIECE_SIZE * 0.38);
const JOINT_END = Math.round(PIECE_SIZE * 0.62);
const JOINT_MID = Math.round(PIECE_SIZE * 0.5);
const JOINT_DEPTH = Math.round(PIECE_SIZE * 0.12);
const JOINT_INNER_A = Math.round(PIECE_SIZE * 0.4);
const JOINT_INNER_B = Math.round(PIECE_SIZE * 0.6);
const BOARD_PADDING = JOINT_DEPTH;
const VIEWBOX_WIDTH = GRID_WIDTH + BOARD_PADDING * 2;
const VIEWBOX_HEIGHT = GRID_HEIGHT + BOARD_PADDING * 2;

const PIECE_EDGE_MAP: PieceEdges[] = [
  // row 1
  { top: "flat", right: "tab", bottom: "tab", left: "flat" },
  { top: "flat", right: "tab", bottom: "socket", left: "socket" },
  { top: "flat", right: "flat", bottom: "tab", left: "socket" },
  // row 2
  { top: "socket", right: "socket", bottom: "flat", left: "flat" },
  { top: "tab", right: "socket", bottom: "flat", left: "tab" },
  { top: "socket", right: "flat", bottom: "flat", left: "tab" },
];

const PIECE_CENTERS: [number, number][] = [
  [PIECE_SIZE * 0.5, PIECE_SIZE * 0.5],
  [PIECE_SIZE * 1.5, PIECE_SIZE * 0.5],
  [PIECE_SIZE * 2.5, PIECE_SIZE * 0.5],
  [PIECE_SIZE * 0.5, PIECE_SIZE * 1.5],
  [PIECE_SIZE * 1.5, PIECE_SIZE * 1.5],
  [PIECE_SIZE * 2.5, PIECE_SIZE * 1.5],
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
    ? `L${x + JOINT_START},${y0} C${x + JOINT_START},${y0} ${x + JOINT_INNER_A},${y0 + t * JOINT_DEPTH} ${x + JOINT_MID},${y0 + t * JOINT_DEPTH} C${x + JOINT_INNER_B},${y0 + t * JOINT_DEPTH} ${x + JOINT_END},${y0} ${x + JOINT_END},${y0} L${x1},${y0}`
    : `L${x1},${y0}`;
  const right = r
    ? `L${x1},${y + JOINT_START} C${x1},${y + JOINT_START} ${x1 + r * JOINT_DEPTH},${y + JOINT_INNER_A} ${x1 + r * JOINT_DEPTH},${y + JOINT_MID} C${x1 + r * JOINT_DEPTH},${y + JOINT_INNER_B} ${x1},${y + JOINT_END} ${x1},${y + JOINT_END} L${x1},${y1}`
    : `L${x1},${y1}`;
  const bottom = b
    ? `L${x + JOINT_END},${y1} C${x + JOINT_END},${y1} ${x + JOINT_INNER_B},${y1 + b * JOINT_DEPTH} ${x + JOINT_MID},${y1 + b * JOINT_DEPTH} C${x + JOINT_INNER_A},${y1 + b * JOINT_DEPTH} ${x + JOINT_START},${y1} ${x + JOINT_START},${y1} L${x0},${y1}`
    : `L${x0},${y1}`;
  const left = l
    ? `L${x0},${y + JOINT_END} C${x0},${y + JOINT_END} ${x0 + l * JOINT_DEPTH},${y + JOINT_INNER_B} ${x0 + l * JOINT_DEPTH},${y + JOINT_MID} C${x0 + l * JOINT_DEPTH},${y + JOINT_INNER_A} ${x0},${y + JOINT_START} ${x0},${y + JOINT_START} L${x0},${y0}`
    : `L${x0},${y0}`;

  return `M${x0},${y0} ${top} ${right} ${bottom} ${left} Z`;
}

const PIECE_PATHS = PIECE_EDGE_MAP.map((edges, idx) => {
  const col = idx % 3;
  const row = Math.floor(idx / 3);
  return buildPiecePath(col * PIECE_SIZE, row * PIECE_SIZE, edges);
});

const EMPTY_BG_POSITIONS: [number, number][] = [
  [-GRID_WIDTH * 2, -GRID_HEIGHT],
  [-GRID_WIDTH, -GRID_HEIGHT],
  [0, -GRID_HEIGHT],
  [GRID_WIDTH, -GRID_HEIGHT],
  [GRID_WIDTH * 2, -GRID_HEIGHT],
  [-GRID_WIDTH * 2, 0],
  [-GRID_WIDTH, 0],
  [0, 0],
  [GRID_WIDTH, 0],
  [GRID_WIDTH * 2, 0],
  [-GRID_WIDTH * 2, GRID_HEIGHT],
  [-GRID_WIDTH, GRID_HEIGHT],
  [0, GRID_HEIGHT],
  [GRID_WIDTH, GRID_HEIGHT],
  [GRID_WIDTH * 2, GRID_HEIGHT],
];

export function DynamicPuzzleGrid({ items }: { items: DynamicPuzzleItem[] }) {
  const pieces = items.slice(0, 6);
  const insetStyle: React.CSSProperties = {
    left: `${(BOARD_PADDING / VIEWBOX_WIDTH) * 100}%`,
    right: `${(BOARD_PADDING / VIEWBOX_WIDTH) * 100}%`,
    top: `${(BOARD_PADDING / VIEWBOX_HEIGHT) * 100}%`,
    bottom: `${(BOARD_PADDING / VIEWBOX_HEIGHT) * 100}%`,
  };

  return (
    <div className="puzzle-glow relative mx-auto w-full" aria-label="Module als Puzzle-Teile">
      <svg
        viewBox={`-${BOARD_PADDING} -${BOARD_PADDING} ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
        className="h-auto w-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
      >
        <defs>
          {GRADIENTS.map(([from, to], i) => (
            <linearGradient key={`grad-${i}`} id={`puzzle-grid-grad-${i}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={from} />
              <stop offset="100%" stopColor={to} />
            </linearGradient>
          ))}
        </defs>

        {/* Empty puzzle background matrix (same geometry, full backdrop) */}
        <g pointerEvents="none">
          {EMPTY_BG_POSITIONS.map(([tx, ty], cluster) =>
            PIECE_PATHS.map((d, i) => (
              <path
                key={`empty-${cluster}-${i}`}
                d={d}
                transform={`translate(${tx} ${ty})`}
                fill="rgba(65,0,152,0.035)"
                stroke="rgba(65,0,152,0.16)"
                strokeWidth="1"
              />
            )),
          )}
        </g>

        {pieces.map((item, i) => (
          <PuzzlePieceSVG key={item.label} item={item} index={i} />
        ))}

        {/* Draw seams once on top so the puzzle reads as one assembled board */}
        <g pointerEvents="none">
          {PIECE_PATHS.map((d, i) => (
            <path key={`seam-${i}`} d={d} fill="none" stroke="rgba(65,0,152,0.26)" strokeWidth="1.1" />
          ))}
        </g>
      </svg>

      <div
        className="absolute grid grid-cols-3 grid-rows-2"
        style={insetStyle}
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
  const slot = ANIMATION_SLOTS[index] ?? ANIMATION_SLOTS[0];
  const path = PIECE_PATHS[index];
  const [cx, cy] = PIECE_CENTERS[index] ?? [100, 100];
  const contentX = cx + (item.contentOffsetX ?? 0);
  const contentY = cy + (item.contentOffsetY ?? -4);

  return (
    <g
      className="puzzle-piece"
      style={{
        animationDelay: slot.delay,
        "--puzzle-from": slot.from,
        transformOrigin: `${cx}px ${cy}px`,
      } as React.CSSProperties}
    >
      <path d={path} fill={`url(#puzzle-grid-grad-${index})`} />

      <circle
        cx={contentX}
        cy={contentY - 22}
        r={22}
        fill="rgba(255,255,255,0.15)"
        className="puzzle-piece-orb"
        style={{ animationDelay: `calc(${slot.delay} + 1200ms)` }}
      />
      <foreignObject x={contentX - 14} y={contentY - 36} width={28} height={28}>
        <div className="flex h-full items-center justify-center">
          <Icon size={20} strokeWidth={1.8} color="white" />
        </div>
      </foreignObject>

      <foreignObject x={contentX - 84} y={contentY + 6} width={168} height={66}>
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
