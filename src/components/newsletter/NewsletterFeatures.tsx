import {
  Palette,
  LayoutTemplate,
  MousePointerClick,
  BarChart3,
  CloudOff,
  ShieldCheck,
  Globe,
  FileText,
  Users,
  Megaphone,
  Link2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";

/* ──────────────────────────────────────────────
   Feature data
   ────────────────────────────────────────────── */

type Feature = { icon: LucideIcon; title: string; description: string };

const features: Feature[] = [
  {
    icon: Palette,
    title: "News im Kanzleidesign",
    description:
      "Personalisierte Newsletter, die nach Ihrer Kanzlei aussehen – CI-Farben, Logo und Schriften automatisch integriert.",
  },
  {
    icon: LayoutTemplate,
    title: "Vorlagen & Textbausteine",
    description:
      "Fertige Steuer-Themen importieren, eigene Bausteine anlegen und in wenigen Minuten zur fertigen Ausgabe.",
  },
  {
    icon: MousePointerClick,
    title: "Einfache Bedienung",
    description:
      "Kein Schulungsaufwand – Empfänger auswählen, Inhalte zusammenstellen, versenden. Drei Klicks reichen.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Statistik",
    description:
      "Öffnungsraten, Klicks und Abonnenten-Entwicklung in Echtzeit – damit Sie wissen, was wirkt.",
  },
  {
    icon: CloudOff,
    title: "Keine Installation",
    description:
      "Komplett webbasiert. Kein Setup, kein IT-Aufwand – einfach im Browser einloggen und loslegen.",
  },
  {
    icon: ShieldCheck,
    title: "DSGVO-konforme Nutzung",
    description:
      "Double-Opt-in, Abmeldelink und Datenverarbeitung in der EU – alles rechtskonform eingebaut.",
  },
];

/* ──────────────────────────────────────────────
   taxHub integration links
   ────────────────────────────────────────────── */

type IntegrationLink = { icon: LucideIcon; module: string; description: string };

const integrations: IntegrationLink[] = [
  {
    icon: Globe,
    module: "Website",
    description: "Newsletter-Archiv direkt auf der Kanzleiwebsite anzeigen.",
  },
  {
    icon: FileText,
    module: "Content",
    description: "Steuernews und Textbausteine aus dem Content-Pool importieren.",
  },
  {
    icon: Users,
    module: "Lead Management",
    description: "Neue Abonnenten automatisch als Leads erfassen.",
  },
  {
    icon: Megaphone,
    module: "Kampagnen",
    description: "Newsletter als Teil übergreifender Kanzlei-Kampagnen nutzen.",
  },
];

/* ──────────────────────────────────────────────
   Component
   ────────────────────────────────────────────── */

const staggerDelays = ["0ms", "60ms", "120ms", "180ms", "240ms", "300ms"];

export function NewsletterFeatures() {
  return (
    <>
      {/* ── Feature grid ── */}
      <SectionShell id="funktionen" bg="neutral">
        <SectionHeading
          title="Alles, was Ihr Newsletter braucht."
          subtitle="Professioneller Versand ohne Umwege – direkt aus dem taxHub."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="animate-fade-up group rounded-xl bg-white p-6 shadow-sm border border-neutral-100 transition-shadow hover:shadow-md"
              style={{ animationDelay: staggerDelays[i] }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-atikon-orange/8 text-atikon-orange transition-colors group-hover:bg-atikon-orange/15">
                <f.icon size={20} />
              </div>
              <h3 className="text-base font-semibold text-atikon-black">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        {/* DATEV trust line */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 animate-fade-up" style={{ animationDelay: "350ms" }}>
          <span className="inline-flex items-center gap-2 rounded-full bg-white border border-neutral-200 px-4 py-2 text-sm text-neutral-600 shadow-sm">
            <Link2 size={14} className="text-atikon-violet" />
            DATEV-Anbindung verfügbar
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white border border-neutral-200 px-4 py-2 text-sm text-neutral-600 shadow-sm">
            <ShieldCheck size={14} className="text-emerald-500" />
            Hosting in der EU
          </span>
        </div>
      </SectionShell>

      {/* ── Why stronger in taxHub ── */}
      <SectionShell id="integration" bg="white" spacing="lg">
        <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-up">
          <Badge variant="violet" size="sm">
            Plattform-Vorteil
          </Badge>
          <h2 className="mt-5 text-atikon-black">
            Warum das im taxHub stärker wirkt.
          </h2>
          <p className="mt-4 text-neutral-600 text-lg">
            Einzeln ist ein Newsletter nützlich. Vernetzt mit Website, Content
            und Lead Management wird er zum Wachstumsmotor.
          </p>
        </div>

        {/* Integration cards */}
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-atikon-violet/10"
            aria-hidden="true"
          />

          {integrations.map((item, i) => (
            <div
              key={item.module}
              className="animate-fade-up relative rounded-xl border border-neutral-100 bg-neutral-50 p-5 transition-shadow hover:shadow-md hover:border-atikon-violet/20"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative z-10 mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-atikon-violet/8 text-atikon-violet">
                <item.icon size={20} />
              </div>
              <h4 className="text-center text-sm font-semibold text-atikon-black">
                {item.module}
              </h4>
              <p className="mt-1.5 text-center text-xs text-neutral-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Hub visualisation */}
        <div className="mt-10 flex justify-center animate-fade-up" style={{ animationDelay: "400ms" }}>
          <div className="inline-flex flex-col items-center gap-2 rounded-2xl bg-atikon-violet/5 border border-atikon-violet/10 px-6 py-3 sm:flex-row sm:gap-3 sm:rounded-full">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-atikon-violet text-white text-xs font-bold">
                t
              </div>
              <span className="text-sm font-semibold text-atikon-violet">
                taxHub verbindet alles
              </span>
            </div>
            <span className="text-xs text-atikon-violet/50">
              Website · Newsletter · Content · Leads · Kampagnen
            </span>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
