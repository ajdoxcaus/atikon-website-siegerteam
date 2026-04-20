import { Link } from "react-router-dom";
import {
  Globe,
  Mail,
  Sparkles,
  Target,
  Megaphone,
  FileText,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { SectionHeading } from "../ui/SectionHeading";

type ModuleCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
  to: string;
  accent: string;
};

const modules: ModuleCard[] = [
  {
    icon: Globe,
    title: "Kanzlei-Website",
    description:
      "Professioneller Auftritt mit Onlinetools, barrierefreiem Design und laufender Content-Wartung.",
    highlights: ["Responsive Design", "SEO-optimiert", "Mandantenportal"],
    to: "/website",
    accent: "border-t-atikon-violet",
  },
  {
    icon: Mail,
    title: "Newslettersystem",
    description:
      "Mandantenkommunikation mit Vorlagen, Kanzleidesign und integriertem Reporting.",
    highlights: ["DSGVO-konform", "Textbausteine", "Live-Statistik"],
    to: "/newsletter",
    accent: "border-t-atikon-orange",
  },
  {
    icon: Sparkles,
    title: "AI Studio",
    description:
      "KI-Avatar, Steuernews-TV und Video-Academy – positionieren Sie sich als digitale Kanzlei.",
    highlights: ["KI-Avatar", "Video-Content", "Automatisiert"],
    to: "/ai-studio",
    accent: "border-t-atikon-violet",
  },
  {
    icon: Target,
    title: "Lead Management",
    description:
      "Von der Anzeige bis zum Termin – qualifizierte Mandanten und Fachkräfte gewinnen.",
    highlights: ["Google Ads", "Social Media", "Conversion-Tracking"],
    to: "/lead-management",
    accent: "border-t-atikon-orange",
  },
  {
    icon: Megaphone,
    title: "Kampagnen",
    description:
      "Übergreifende Kampagnensteuerung mit messbaren Ergebnissen und monatlichem Reporting.",
    highlights: ["Multichannel", "Performance-Reports", "A/B-Testing"],
    to: "/kampagnen",
    accent: "border-t-atikon-violet",
  },
  {
    icon: FileText,
    title: "Content-Plattform",
    description:
      "Steuernews, Onlinerechner, Infolisten und Textservice – aktueller Fachcontent ohne Aufwand.",
    highlights: ["Steuernews", "Onlinerechner", "Textservice"],
    to: "/content",
    accent: "border-t-atikon-orange",
  },
];

const staggerDelays = ["0ms", "60ms", "120ms", "180ms", "240ms", "300ms"];

export function TaxHubModules() {
  return (
    <SectionShell id="module" bg="neutral">
      <SectionHeading
        title="Sechs Module. Eine Plattform."
        subtitle="Jedes Modul funktioniert für sich – und wird stärker durch die Verbindung mit den anderen."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((m, i) => (
          <Link
            key={m.title}
            to={m.to}
            className="animate-fade-up group block no-underline"
            style={{ animationDelay: staggerDelays[i] }}
          >
            <div
              className={`h-full rounded-xl bg-white border-t-[3px] ${m.accent} p-6 shadow-sm border-x border-b border-neutral-100 transition-shadow hover:shadow-md`}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-atikon-violet/8 text-atikon-violet">
                <m.icon size={20} />
              </div>

              <h3 className="text-lg font-semibold text-atikon-black">
                {m.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {m.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {m.highlights.map((h) => (
                  <span
                    key={h}
                    className="rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-500"
                  >
                    {h}
                  </span>
                ))}
              </div>

              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-atikon-violet group-hover:text-atikon-orange transition-colors">
                Mehr erfahren
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}
