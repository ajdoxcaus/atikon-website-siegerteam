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
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 75% 35%, rgba(65,0,152,0.06), transparent 70%)",
          }}
        />
      </div>

      <div className="container-max relative py-20 sm:py-24 lg:py-32 xl:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] lg:gap-10 xl:gap-14">
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
          <div className="relative w-full lg:w-[102%] xl:w-[106%] lg:max-w-none lg:justify-self-end">
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
    { label: "Website",             icon: Globe,    desc: "Professioneller Kanzlei-Auftritt",  to: "/#module", example: "Startseite, Team, Leistungen", contentOffsetX: 6 },
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
