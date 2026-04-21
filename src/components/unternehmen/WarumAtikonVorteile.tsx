import {
  Heart,
  Clock,
  ShieldCheck,
  Palette,
  BookOpen,
  Users,
  Handshake,
  BadgeCheck,
  Banknote,
} from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { SectionHeading } from "../ui/SectionHeading";

const VORTEILE = [
  {
    icon: Heart,
    title: "Wir lieben Steuerberater:innen",
    text: "Wir räumen mit dem Klischee einer trockenen Materie auf und verankern Ihr cooles Berufsbild in den Köpfen von Mandant:innen und potenziellen Fachkräften.",
  },
  {
    icon: Clock,
    title: "Seit 25 Jahren an Ihrer Seite",
    text: "Wir wissen, wo der Schuh drückt. Mit professionellem Kanzleimarketing werden Sie für Mandant:innen und Jobsuchende sichtbar.",
  },
  {
    icon: ShieldCheck,
    title: "Rundum-Kanzleimarketing",
    text: "Bei Atikon profitieren Sie von einem Gesamtpaket für Ihre digitale Kanzlei. Kein Aufwand, Zeit sparen – Ihre Website arbeitet für Sie.",
  },
  {
    icon: Users,
    title: "Agentur mit Know-how",
    text: "Rund 80 Marketingspezialist:innen arbeiten für Ihren Kanzleierfolg – Expertise und Plan aus einer Hand.",
  },
  {
    icon: Palette,
    title: "Marketing, das zu Ihnen passt",
    text: "Mehr Digitalisierung, mehr Mandantenbindung, mehr Erfolg bei der Personalsuche? Wir schnüren das passende Paket für Ihre Ziele.",
  },
  {
    icon: Handshake,
    title: "Beratung: Online oder persönlich",
    text: "Wir beraten Sie flexibel – direkt bei Ihnen vor Ort, per Onlinebesprechung oder Telefon.",
  },
  {
    icon: Banknote,
    title: "Versteckte Kosten? Nicht bei uns!",
    text: "Beste Kostenkontrolle, Ergebnissicherheit und kurze Projektdauer von 6–8 Wochen.",
  },
  {
    icon: BookOpen,
    title: "Wir teilen unser Wissen",
    text: "In unseren Gipfelstürmer-Webinaren bekommen Sie Tipps und Arbeitshilfen zu aktuellen Trends im Onlinemarketing – live und kostenlos.",
  },
  {
    icon: BadgeCheck,
    title: "Great Place to Work®",
    text: "Wir arbeiten leidenschaftlich gern für Steuerberater:innen und sind von unserem Great Place to Work® aus im Einsatz für Ihren Erfolg.",
  },
];

export function WarumAtikonVorteile() {
  return (
    <SectionShell bg="neutral">
      <SectionHeading
        title="Ihre Vorteile mit Atikon"
        subtitle="Mit professionellem Marketing werden Sie für Mandant:innen und Bewerber:innen sichtbar und bekommen den entscheidenden Klick."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {VORTEILE.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-atikon-violet/8 text-atikon-violet transition-colors group-hover:bg-atikon-violet/12">
                <Icon size={20} />
              </div>
              <h3 className="text-base font-bold text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
