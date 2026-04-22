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
} from "lucide-react";
import { useIntent, type Intent } from "../../hooks/useIntent";
import { intentVariants } from "../../data/content";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { DynamicPuzzleGrid, type DynamicPuzzleItem } from "./DynamicPuzzleGrid";

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

type Piece = DynamicPuzzleItem;

const PUZZLE_SETS: Record<Intent, Piece[]> = {
  default: [
    { label: "Website",             icon: Globe,    desc: "Professioneller Kanzlei-Auftritt",  to: "/#module", example: "Startseite, Team, Leistungen" },
    { label: "Content & Marketing", icon: FileText, desc: "Steuernews & Textservice",          to: "/#module" },
    { label: "AI Studio",           icon: Sparkles, desc: "KI-Workspace für Kanzleien",        to: "/ai-studio", example: "Fach-Chat, Meeting-Agent" },
    { label: "Lead Management",     icon: Target,   desc: "Mandantengewinnung digital",        to: "/#module" },
    { label: "Newsletter",          icon: Mail,     desc: "Personalisierte Mandantenbindung",  to: "/newsletter", example: "Steuernews automatisch" },
    { label: "Social Media",        icon: Share2,   desc: "Social aus einer Hand",             to: "/#module", example: "Redaktionsplan & Posts" },
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

function PuzzleHero({ intent }: { intent: Intent }) {
  const pieces = PUZZLE_SETS[intent];

  return <DynamicPuzzleGrid items={pieces} />;
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
