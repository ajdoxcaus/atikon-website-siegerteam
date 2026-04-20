import {
  Clock,
  TrendingUp,
  Eye,
  Handshake,
  Zap,
  Settings,
} from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { SectionHeading } from "../ui/SectionHeading";

const benefits = [
  {
    icon: Clock,
    title: "Weniger Abstimmung",
    stat: "–50 %",
    description:
      "Kein Jonglieren zwischen Agenturen und Einzeltools – alles läuft über einen Ansprechpartner.",
  },
  {
    icon: TrendingUp,
    title: "Mehr qualifizierte Anfragen",
    stat: "+38 %",
    description:
      "Durchgängige Conversion-Wege von der Anzeige bis zum Termin bringen messbar mehr Leads.",
  },
  {
    icon: Eye,
    title: "Volle Transparenz",
    stat: "Live",
    description:
      "Dashboard-Zugang mit Echtzeit-Statistiken zu Website, Newsletter, Kampagnen und Leads.",
  },
  {
    icon: Handshake,
    title: "Stärkere Mandantenbindung",
    stat: "68 %",
    description:
      "Regelmäßige, professionelle Kommunikation steigert Vertrauen und Öffnungsraten.",
  },
  {
    icon: Zap,
    title: "Schneller Go-Live",
    stat: "12 Wo.",
    description:
      "Vom ersten Gespräch bis zum fertigen Kanzleiauftritt in nur zwölf Wochen.",
  },
  {
    icon: Settings,
    title: "Skalierbar mit Ihrer Kanzlei",
    stat: "Flexibel",
    description:
      "Starten Sie mit dem, was Sie brauchen – und aktivieren Sie weitere Module jederzeit.",
  },
];

const staggerDelays = ["0ms", "60ms", "120ms", "180ms", "240ms", "300ms"];

export function TaxHubBenefits() {
  return (
    <SectionShell id="vorteile" bg="neutral">
      <SectionHeading
        title="Was Kanzleien konkret davon haben."
        subtitle="Messbare Vorteile, die den Unterschied machen."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b, i) => (
          <div
            key={b.title}
            className="animate-fade-up group rounded-xl bg-white p-6 shadow-sm border border-neutral-100 transition-shadow hover:shadow-md"
            style={{ animationDelay: staggerDelays[i] }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-atikon-orange/8 text-atikon-orange transition-colors group-hover:bg-atikon-orange/15">
                <b.icon size={20} />
              </div>
              <span className="text-lg font-extrabold text-atikon-violet">
                {b.stat}
              </span>
            </div>
            <h3 className="text-base font-semibold text-atikon-black">
              {b.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              {b.description}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
