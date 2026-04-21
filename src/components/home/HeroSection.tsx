import {
  ArrowRight,
  Users,
  Globe,
  FileText,
  Share2,
  Sparkles,
  Mail,
  Target,
  BarChart3,
  Palette,
  ShieldCheck,
  Send,
  MousePointerClick,
  Bot,
  BrainCircuit,
  MessageSquareText,
  CalendarCheck,
  Megaphone,
  Search,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useIntent, type Intent } from "../../hooks/useIntent";
import { intentVariants } from "../../data/content";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

export function HeroSection() {
  const intent = useIntent();
  const hero = intentVariants[intent].hero;

  const [lineA, lineB] = hero.headline.split("\n");

  return (
    <section id="hero" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <PuzzlePattern />
      </div>

      <div className="container-max relative py-16 sm:py-20 lg:py-28 xl:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Copy */}
          <div className="max-w-xl">
            <div className="animate-hero-stagger" style={{ animationDelay: "0ms" }}>
              <Badge variant="violet" size="sm">
                {hero.badge}
              </Badge>
            </div>

            <h1 className="mt-6 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] font-extrabold tracking-tight">
              <span
                className="animate-hero-stagger inline-block text-atikon-black"
                style={{ animationDelay: "150ms" }}
              >
                {lineA}
              </span>
              {lineB && (
                <>
                  <br />
                  <span
                    className="animate-hero-stagger inline-block text-atikon-orange"
                    style={{ animationDelay: "300ms" }}
                  >
                    {lineB}
                  </span>
                </>
              )}
            </h1>

            <p
              className="animate-hero-stagger mt-6 text-lg leading-relaxed text-neutral-600 max-w-md"
              style={{ animationDelay: "500ms" }}
            >
              {hero.subline}
            </p>

            <div
              className="animate-hero-stagger mt-8 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "700ms" }}
            >
              <Button to={hero.ctaTo} variant="primary" size="md">
                {hero.cta}
                <ArrowRight size={18} />
              </Button>
              <Button to={hero.ctaSecondaryTo} variant="secondary" size="md">
                {hero.ctaSecondary}
              </Button>
            </div>

            <p
              className="animate-hero-stagger mt-10 flex items-center gap-2 text-sm text-neutral-400"
              style={{ animationDelay: "1000ms" }}
            >
              <Users size={14} className="text-atikon-violet/50" />
              1500+ Kanzleien vertrauen auf Atikon
            </p>
          </div>

          {/* Puzzle visual */}
          <div className="relative">
            <PuzzleHero intent={intent} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Puzzle piece data (intent-aware) ── */

type Piece = {
  label: string;
  icon: LucideIcon;
  desc: string;
  to: string;
};

const ANIMATION_SLOTS = [
  { delay: "100ms",  from: "translate(-60px, -40px)" },
  { delay: "300ms",  from: "translate(0, -70px)" },
  { delay: "500ms",  from: "translate(60px, -40px)" },
  { delay: "700ms",  from: "translate(-60px, 40px)" },
  { delay: "850ms",  from: "translate(0, 70px)" },
  { delay: "1000ms", from: "translate(60px, 40px)" },
] as const;

const PUZZLE_SETS: Record<Intent, Piece[]> = {
  default: [
    { label: "Website",             icon: Globe,    desc: "Professioneller Kanzlei-Auftritt",  to: "/#module" },
    { label: "Content & Marketing", icon: FileText, desc: "Steuernews & Textservice",          to: "/#module" },
    { label: "AI Studio",           icon: Sparkles, desc: "KI-Workspace für Kanzleien",        to: "/ai-studio" },
    { label: "Lead Management",     icon: Target,   desc: "Mandantengewinnung digital",        to: "/#module" },
    { label: "Newsletter",          icon: Mail,     desc: "Personalisierte Mandantenbindung",  to: "/newsletter" },
    { label: "Social Media",        icon: Share2,   desc: "Social aus einer Hand",             to: "/#module" },
  ],
  newsletter: [
    { label: "Kanzlei-Design",      icon: Palette,           desc: "Ihr CI, Ihre Farben, Ihr Logo",      to: "/newsletter" },
    { label: "Personalisierung",    icon: Users,             desc: "Individuelle Inhalte pro Mandant",    to: "/newsletter" },
    { label: "DSGVO-konform",       icon: ShieldCheck,       desc: "Sicherer Versand, Double-Opt-In",     to: "/newsletter" },
    { label: "Automatischer Versand", icon: Send,            desc: "Steuernews per Autopilot",            to: "/newsletter" },
    { label: "Öffnungsraten",       icon: BarChart3,         desc: "Klick- und Leseanalysen live",        to: "/newsletter" },
    { label: "Mandantenbindung",    icon: MousePointerClick, desc: "Mehr Interaktion, weniger Aufwand",   to: "/newsletter" },
  ],
  ai: [
    { label: "KI-Chat",             icon: MessageSquareText, desc: "DSGVO-konformer KI-Assistent",       to: "/ai-studio" },
    { label: "Standard-Agenten",    icon: Bot,               desc: "Vorgefertigte Kanzlei-Workflows",    to: "/ai-studio" },
    { label: "Fach-Agenten",        icon: BrainCircuit,      desc: "Individuelle KI-Integrationen",      to: "/ai-studio" },
    { label: "Meeting-Agent",       icon: CalendarCheck,     desc: "Gespräche vor- und nachbereiten",    to: "/ai-studio" },
    { label: "Bilanz-Assistent",    icon: FileText,          desc: "Präsentationen automatisiert",        to: "/ai-studio" },
    { label: "EU-Hosting",          icon: ShieldCheck,       desc: "Sicher in europäischen Rechenzentren", to: "/ai-studio" },
  ],
  website: [
    { label: "Modernes Design",     icon: Palette,           desc: "Responsive & barrierefrei",           to: "/#module" },
    { label: "Onlinetools",         icon: MousePointerClick, desc: "Rechner & Infos für Mandanten",       to: "/#module" },
    { label: "Content-Wartung",     icon: FileText,          desc: "Laufend aktuelle Fachinhalte",        to: "/#module" },
    { label: "SEO-optimiert",       icon: Search,            desc: "Bessere Sichtbarkeit bei Google",     to: "/#module" },
    { label: "In 12 Wochen online", icon: TrendingUp,        desc: "Schnelle Umsetzung garantiert",       to: "/#module" },
    { label: "taxHub-Integration",  icon: Sparkles,          desc: "Nahtlos mit allen Modulen verknüpft", to: "/#module" },
  ],
  lead: [
    { label: "Social Ads",          icon: Megaphone,         desc: "Kampagnen auf Meta & LinkedIn",       to: "/#module" },
    { label: "Google Ads",          icon: Search,            desc: "Suchmaschinenmarketing mit ROI",      to: "/#module" },
    { label: "Landing Pages",       icon: Globe,             desc: "Conversion-optimierte Zielseiten",    to: "/#module" },
    { label: "Bewerber-Kampagnen",  icon: Users,             desc: "Fachkräfte gezielt ansprechen",       to: "/#module" },
    { label: "Performance-Reporting", icon: BarChart3,       desc: "Monatliche Ergebnisberichte",         to: "/#module" },
    { label: "Termin-Funnel",       icon: Target,            desc: "Vom Klick zur Mandatsanfrage",        to: "/#module" },
  ],
};

/*
 * SVG clip-path outlines for each of the 6 puzzle pieces in a 3×2 grid.
 *
 * The puzzle uses a 600×400 viewBox (3 cols × 200px, 2 rows × 200px).
 * Each piece occupies a 200×200 cell. Shared edges have a circular
 * bump (tab) on one side and a matching indent (socket) on the other.
 * Bumps extend ~24px beyond the cell boundary; sockets indent ~24px.
 *
 * Convention:
 *   tab-right  on [r,c]  ↔  socket-left on [r, c+1]
 *   tab-bottom on [r,c]  ↔  socket-top  on [r+1, c]
 */
const PIECE_PATHS = [
  // [0,0] Website — right tab, bottom tab
  "M0,0 L200,0 L200,76 C200,76 224,80 224,100 C224,120 200,124 200,124 L200,200 L124,200 C124,200 120,224 100,224 C80,224 76,200 76,200 L0,200 Z",
  // [0,1] Content — left socket, right tab, bottom socket
  "M200,0 L400,0 L400,76 C400,76 424,80 424,100 C424,120 400,124 400,124 L400,200 L324,200 C324,200 320,176 300,176 C280,176 276,200 276,200 L200,200 L200,124 C200,124 224,120 224,100 C224,80 200,76 200,76 Z",
  // [0,2] AI Studio — left socket, bottom tab
  "M400,0 L600,0 L600,200 L524,200 C524,200 520,224 500,224 C480,224 476,200 476,200 L400,200 L400,124 C400,124 424,120 424,100 C424,80 400,76 400,76 Z",
  // [1,0] Lead Management — right socket, top socket
  "M0,200 L76,200 C76,200 80,224 100,224 C120,224 124,200 124,200 L200,200 L200,276 C200,276 176,280 176,300 C176,320 200,324 200,324 L200,400 L0,400 Z",
  // [1,1] Newsletter — left tab, top tab, right socket
  "M200,200 L276,200 C276,200 280,176 300,176 C320,176 324,200 324,200 L400,200 L400,276 C400,276 376,280 376,300 C376,320 400,324 400,324 L400,400 L200,400 L200,324 C200,324 176,320 176,300 C176,280 200,276 200,276 Z",
  // [1,2] Social Media — left tab, top socket
  "M400,200 L476,200 C476,200 480,224 500,224 C520,224 524,200 524,200 L600,200 L600,400 L400,400 L400,324 C400,324 376,320 376,300 C376,280 400,276 400,276 Z",
];

/* Centre of each piece's bounding cell (for positioning content) */
const PIECE_CENTERS: [number, number][] = [
  [100, 100],  // [0,0]
  [300, 100],  // [0,1]
  [500, 100],  // [0,2]
  [100, 300],  // [1,0]
  [300, 300],  // [1,1]
  [500, 300],  // [1,2]
];

const GRADIENTS: [string, string][] = [
  ["#410098", "#5B18B5"],
  ["#5B18B5", "#410098"],
  ["#FA4616", "#FD7A55"],
  ["#2E006B", "#410098"],
  ["#410098", "#2E006B"],
  ["#D93A10", "#FA4616"],
];

function PuzzleHero({ intent }: { intent: Intent }) {
  const pieces = PUZZLE_SETS[intent];

  return (
    <div
      className="puzzle-glow relative rounded-2xl overflow-hidden"
      aria-label="taxHub Plattform – 6 Module setzen sich als Puzzle zusammen"
    >
      <svg
        viewBox="0 0 600 400"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {pieces.map((_, i) => (
            <clipPath key={`clip-${i}`} id={`puzzle-clip-${i}`}>
              <path d={PIECE_PATHS[i]} />
            </clipPath>
          ))}

          {GRADIENTS.map(([from, to], i) => (
            <linearGradient
              key={`grad-${i}`}
              id={`puzzle-grad-${i}`}
              x1="0" y1="0" x2="1" y2="1"
            >
              <stop offset="0%" stopColor={from} />
              <stop offset="100%" stopColor={to} />
            </linearGradient>
          ))}
        </defs>

        <PuzzleGridLines />

        {pieces.map((piece, i) => (
          <PuzzlePieceSVG key={piece.label} piece={piece} index={i} />
        ))}
      </svg>

      {/* React Router link overlays */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-2">
        {pieces.map((piece) => (
          <Link
            key={piece.label}
            to={piece.to}
            className="block hover:bg-white/10 transition-colors duration-200"
            aria-label={`${piece.label} – ${piece.desc}`}
          />
        ))}
      </div>
    </div>
  );
}

function PuzzlePieceSVG({ piece, index }: { piece: Piece; index: number }) {
  const Icon = piece.icon;
  const [cx, cy] = PIECE_CENTERS[index];
  const slot = ANIMATION_SLOTS[index];

  return (
    <g
      className="puzzle-piece"
      style={{
        animationDelay: slot.delay,
        "--puzzle-from": slot.from,
        transformOrigin: `${cx}px ${cy}px`,
      } as React.CSSProperties}
      clipPath={`url(#puzzle-clip-${index})`}
    >
      {/* Background fill */}
      <rect
        x={cx - 100} y={cy - 100}
        width={200} height={200}
        fill={`url(#puzzle-grad-${index})`}
        rx={0}
      />

      {/* Extend fill into tab areas */}
      <path d={PIECE_PATHS[index]} fill={`url(#puzzle-grad-${index})`} />

      {/* Icon circle */}
      <circle cx={cx} cy={cy - 20} r={22} fill="rgba(255,255,255,0.15)" />
      <foreignObject x={cx - 14} y={cy - 34} width={28} height={28}>
        <div className="flex items-center justify-center h-full">
          <Icon size={20} strokeWidth={1.8} color="white" />
        </div>
      </foreignObject>

      {/* Label */}
      <text
        x={cx} y={cy + 16}
        textAnchor="middle"
        fill="white"
        fontSize={13}
        fontWeight={700}
        fontFamily="var(--font-sans)"
      >
        {piece.label}
      </text>

      {/* Description */}
      <text
        x={cx} y={cy + 34}
        textAnchor="middle"
        fill="rgba(255,255,255,0.7)"
        fontSize={9}
        fontFamily="var(--font-sans)"
      >
        {piece.desc}
      </text>

    </g>
  );
}

/* Puzzle grid lines matching piece boundaries */
function PuzzleGridLines() {
  const c = "rgba(65,0,152,0.12)";
  const w = 2.5;

  return (
    <g className="animate-hero-stagger" style={{ animationDelay: "1200ms" } as React.CSSProperties}>
      {/* Horizontal divider y=200 */}
      <path
        d={[
          "M0,200",
          "L76,200 C76,200 80,224 100,224 C120,224 124,200 124,200",
          "L200,200",
          "L276,200 C276,200 280,176 300,176 C320,176 324,200 324,200",
          "L400,200",
          "L476,200 C476,200 480,224 500,224 C520,224 524,200 524,200",
          "L600,200",
        ].join(" ")}
        fill="none" stroke={c} strokeWidth={w}
      />
      {/* Vertical divider x=200 */}
      <path
        d={[
          "M200,0",
          "L200,76 C200,76 224,80 224,100 C224,120 200,124 200,124",
          "L200,200",
          "L200,276 C200,276 176,280 176,300 C176,320 200,324 200,324",
          "L200,400",
        ].join(" ")}
        fill="none" stroke={c} strokeWidth={w}
      />
      {/* Vertical divider x=400 */}
      <path
        d={[
          "M400,0",
          "L400,76 C400,76 424,80 424,100 C424,120 400,124 400,124",
          "L400,200",
          "L400,276 C400,276 376,280 376,300 C376,320 400,324 400,324",
          "L400,400",
        ].join(" ")}
        fill="none" stroke={c} strokeWidth={w}
      />
      {/* Outer border */}
      <rect x={0} y={0} width={600} height={400} fill="none" stroke={c} strokeWidth={w} rx={12} />
    </g>
  );
}

/* ── Background puzzle grid ── */

function PuzzlePattern() {
  const stroke = "rgba(65,0,152,0.09)";
  const w = 3;

  const paths = [
    "M0,0 L73,0 C73,0 73,13 84,24 C92,32 108,32 116,24 C127,13 127,0 127,0 L273,0 C273,0 273,-13 284,-24 C292,-32 308,-32 316,-24 C327,-13 327,0 327,0 L400,0",
    "M0,200 L73,200 C73,200 73,187 84,176 C92,168 108,168 116,176 C127,187 127,200 127,200 L273,200 C273,200 273,213 284,224 C292,232 308,232 316,224 C327,213 327,200 327,200 L400,200",
    "M0,0 L0,73 C0,73 13,73 24,84 C32,92 32,108 24,116 C13,127 0,127 0,127 L0,273 C0,273 -13,273 -24,284 C-32,292 -32,308 -24,316 C-13,327 0,327 0,327 L0,400",
    "M200,0 L200,73 C200,73 187,73 176,84 C168,92 168,108 176,116 C187,127 200,127 200,127 L200,273 C200,273 213,273 224,284 C232,292 232,308 224,316 C213,327 200,327 200,327 L200,400",
  ];

  return (
    <>
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="puzzle-bg"
            width={400}
            height={400}
            patternUnits="userSpaceOnUse"
            overflow="visible"
          >
            {paths.map((d, i) => (
              <path
                key={i}
                d={d}
                fill="none"
                stroke={stroke}
                strokeWidth={w}
                pathLength={1}
                className={`puzzle-bg-line puzzle-bg-line-${i}`}
              />
            ))}
          </pattern>
          <linearGradient id="puzzle-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="75%" stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#puzzle-bg)" />
        <rect width="100%" height="100%" fill="url(#puzzle-fade)" />
      </svg>

      {/* Wandering glow overlay */}
      <div
        className="puzzle-bg-glow-overlay absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 50% 50%, rgba(65,0,152,0.08), transparent 70%)",
          backgroundSize: "200% 200%",
        }}
      />
    </>
  );
}
