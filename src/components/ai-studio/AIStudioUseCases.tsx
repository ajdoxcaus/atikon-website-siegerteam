import {
  PresentationIcon,
  MessageCircle,
  CalendarCheck,
  Users,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { SectionHeading } from "../ui/SectionHeading";

type UseCase = {
  icon: LucideIcon;
  title: string;
  description: string;
  example: string;
  status: "verfügbar" | "in Entwicklung";
};

const useCases: UseCase[] = [
  {
    icon: PresentationIcon,
    title: "Bilanzpräsentations-Assistent",
    description:
      "Bereitet Jahresabschluss-Gespräche vor: fasst Kennzahlen zusammen, erstellt Gesprächsleitfäden und schlägt Optimierungen vor.",
    example: "Mandant Müller GmbH – Bilanz 2025: 3 Handlungsempfehlungen identifiziert",
    status: "in Entwicklung",
  },
  {
    icon: MessageCircle,
    title: "Kanzlei-Wissensassistent",
    description:
      "Beantwortet fachliche Standardfragen basierend auf Ihren Kanzlei-Inhalten – als interne Unterstützung für Ihr Team.",
    example: "„Wie ist die aktuelle Abschreibungsregel für E-Fahrzeuge?" – Antwort in 3 Sek.",
    status: "in Entwicklung",
  },
  {
    icon: CalendarCheck,
    title: "Meeting-Agent",
    description:
      "Bereitet Mandantengespräche vor – mit Agenda, offenen Punkten und steuerlichen Handlungsfeldern. Nach dem Termin fasst er Ergebnisse zusammen und leitet Aufgaben ab.",
    example: "Meeting mit Steuerberatung Huber: Agenda erstellt, 4 To-dos nach Gespräch zugewiesen",
    status: "in Entwicklung",
  },
  {
    icon: Users,
    title: "Mandantenkommunikations-Agent",
    description:
      "Entwirft individuelle Mandantenanschreiben, beantwortet Standardanfragen und erstellt Statusupdates – alles in Ihrer Kanzleitonalität und mit fachlicher Präzision.",
    example: "Anschreiben an 12 Mandanten zur Grundsteuererklärung – personalisiert in 30 Sek.",
    status: "in Entwicklung",
  },
];

const staggerDelays = ["0ms", "100ms", "200ms", "300ms"];

export function AIStudioUseCases() {
  return (
    <SectionShell id="anwendungsfaelle" bg="white" spacing="lg">
      <SectionHeading
        title="Konkrete Anwendungsfälle."
        subtitle="Kein Marketing-Hype – sondern KI, die Ihren Kanzleialltag spürbar entlastet."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {useCases.map((uc, i) => (
          <div
            key={uc.title}
            className="animate-fade-up rounded-xl bg-neutral-50 border border-neutral-100 p-6 transition-shadow hover:shadow-md"
            style={{ animationDelay: staggerDelays[i] }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-atikon-violet/8 text-atikon-violet">
                <uc.icon size={22} />
              </div>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold ${
                  uc.status === "verfügbar"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-amber-50 text-amber-700"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    uc.status === "verfügbar" ? "bg-emerald-500" : "bg-amber-500"
                  }`}
                />
                {uc.status}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-atikon-black">
              {uc.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              {uc.description}
            </p>

            {/* Example */}
            <div className="mt-4 flex items-start gap-2.5 rounded-lg bg-white border border-neutral-100 p-3.5">
              <Sparkles size={14} className="mt-0.5 shrink-0 text-atikon-violet/50" />
              <p className="text-xs text-neutral-500 leading-relaxed italic">
                {uc.example}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center animate-fade-up" style={{ animationDelay: "350ms" }}>
        <p className="text-sm text-neutral-400 max-w-lg mx-auto">
          Alle KI-Ergebnisse werden vor der Veröffentlichung von Ihnen geprüft.
          Nichts geht ohne Ihre Freigabe raus.
        </p>
      </div>
    </SectionShell>
  );
}
