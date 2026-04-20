import {
  Check,
  ArrowRight,
  MessageSquareText,
  Bot,
  BrainCircuit,
  Building2,
  Settings,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

type Tier = {
  name: string;
  price: string;
  unit: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  highlighted?: boolean;
};

const oneTimeFees = [
  {
    label: "Setup-Fee",
    price: "1.990",
    unit: "einmalig je Kanzlei",
    icon: Settings,
    details: "Kickoff, Schulung, Governance-Basis, Use-Case-Setup & Coaching",
  },
  {
    label: "Kanzlei-Grundgebühr",
    price: "49",
    unit: "/ Monat je Kanzlei",
    icon: Building2,
    details: "Basissupport, Administration und sicherer Produktions-Workspace",
  },
];

const tiers: Tier[] = [
  {
    name: "Basic",
    price: "19",
    unit: "/ User / Monat",
    description: "Einsteigerpaket für den sicheren KI-Einstieg.",
    icon: MessageSquareText,
    features: [
      "DSGVO-konformer KI-Chat",
      "Eigene Systemprompts & Vorlagen",
      "Datei- & Wissensarbeit",
      "Kanzleikontext-Konfiguration",
    ],
  },
  {
    name: "Premium",
    price: "39",
    unit: "/ User / Monat",
    description: "Produktivitäts-Upgrade mit intelligenten Agenten.",
    icon: Bot,
    highlighted: true,
    features: [
      "Alles aus Basic",
      "Meeting-Zusammenfassungen",
      "Gesprächsvorbereitung",
      "E-Mail- & Aufgabenableitung",
      "Erweiterte Dateiarbeit",
    ],
  },
  {
    name: "Professional",
    price: "69",
    unit: "/ User / Monat",
    description: "Power-User mit Fach-Agenten und Admin-Funktionen.",
    icon: BrainCircuit,
    features: [
      "Alles aus Premium",
      "Fach-Agenten (Bilanzpräsentation u.\u00a0a.)",
      "Mandantenkommunikations-Agent",
      "Admin-Funktionen & Priorisierung",
      "Zukünftige Integrationen inklusive",
    ],
  },
];

export function AIStudioPricing() {
  return (
    <SectionShell id="pakete" bg="white" spacing="lg">
      <SectionHeading
        title="Transparente Preise. Kein Kleingedrucktes."
        subtitle="Setup je Kanzlei plus nutzungsbasierte User-Lizenzen – skaliert mit Ihrem Team."
      />

      {/* Base fees */}
      <div className="mb-12 grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
        {oneTimeFees.map((fee) => (
          <div
            key={fee.label}
            className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-5"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-atikon-violet/8 text-atikon-violet">
              <fee.icon size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-atikon-black">{fee.label}</p>
              <p className="mt-1">
                <span className="text-xl font-extrabold text-atikon-black">€ {fee.price}</span>
                <span className="ml-1 text-sm text-neutral-500">{fee.unit}</span>
              </p>
              <p className="mt-1.5 text-xs text-neutral-500 leading-relaxed">{fee.details}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tiers */}
      <div className="grid gap-6 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative flex flex-col rounded-2xl border p-7 transition-shadow hover:shadow-lg ${
              tier.highlighted
                ? "border-atikon-violet/30 bg-white shadow-md ring-1 ring-atikon-violet/10"
                : "border-neutral-200 bg-white"
            }`}
          >
            {tier.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-atikon-violet px-4 py-1 text-[11px] font-semibold text-white shadow">
                Empfohlen
              </span>
            )}

            <div className="flex items-center gap-3 mb-4">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                  tier.highlighted
                    ? "bg-atikon-violet text-white"
                    : "bg-atikon-violet/8 text-atikon-violet"
                }`}
              >
                <tier.icon size={20} />
              </div>
              <h3 className="text-lg font-bold text-atikon-black">{tier.name}</h3>
            </div>

            <p className="mb-5 text-sm text-neutral-600 leading-relaxed">{tier.description}</p>

            <div className="mb-6">
              <span className="text-3xl font-extrabold text-atikon-black">€ {tier.price}</span>
              <span className="ml-1 text-sm text-neutral-500">{tier.unit}</span>
            </div>

            <ul className="flex-1 space-y-3 mb-8">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <Check
                    size={16}
                    className={`mt-0.5 shrink-0 ${
                      tier.highlighted ? "text-atikon-violet" : "text-atikon-orange"
                    }`}
                  />
                  {f}
                </li>
              ))}
            </ul>

            <Button
              to="#termin"
              variant={tier.highlighted ? "primary" : "secondary"}
              size="sm"
              className="w-full justify-center"
            >
              Paket wählen
              <ArrowRight size={16} />
            </Button>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-neutral-400">
        Pilotpaket für 6 Monate verfügbar. Preise nach Praxistest finalisiert.
        Alle Preise zzgl. MwSt.
      </p>
    </SectionShell>
  );
}
