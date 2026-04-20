import {
  Rocket,
  TrendingUp,
  Zap,
  ChevronRight,
  Gauge,
  Users,
  BarChart3,
  ArrowUpRight,
  RefreshCcw,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";

type Wave = {
  icon: LucideIcon;
  phase: string;
  timeframe: string;
  title: string;
  description: string;
  milestones: string[];
  accent: string;
};

const waves: Wave[] = [
  {
    icon: Rocket,
    phase: "Welle 1",
    timeframe: "0–6 Monate",
    title: "Pilotierung",
    description:
      "Ausgewählte Pilotkanzleien starten mit dem AI Studio. Use-Cases werden geschärft und Governance etabliert.",
    milestones: [
      "50 Pilotkanzleien ongeboardet",
      "Use-Cases validiert & geschärft",
      "Governance-Basis etabliert",
      "Sicherer KI-Chat produktionsreif",
    ],
    accent: "border-l-atikon-violet",
  },
  {
    icon: TrendingUp,
    phase: "Welle 2",
    timeframe: "6–12 Monate",
    title: "Rollout & Skalierung",
    description:
      "Breiter Rollout im Steuerberater-Segment. Sales-Playbook steht, Standard-Agenten werden ausgebaut.",
    milestones: [
      "100 neue Paid-Kanzleien",
      "Sales-Playbook finalisiert",
      "Standard-Agenten-Portfolio erweitert",
      "Ø 5,2 Seats je Kanzlei",
    ],
    accent: "border-l-atikon-orange",
  },
  {
    icon: Zap,
    phase: "Welle 3",
    timeframe: "Ab Monat 12",
    title: "Upsell & Fach-Agenten",
    description:
      "Fach-Agenten, Integrationen und Premium-Module treiben Upsell. Ausweitung auf weitere Segmente.",
    milestones: [
      "200+ neue Kanzleien p.\u00a0a.",
      "Fach-Agenten live (Bilanz, Mandantenkommunikation)",
      "Integrationen & Premium-Module",
      "Ø 6 Seats je Kanzlei",
    ],
    accent: "border-l-emerald-500",
  },
];

type KPI = {
  icon: LucideIcon;
  label: string;
  description: string;
};

const kpis: KPI[] = [
  { icon: ArrowUpRight, label: "Pilot → Paid Conversion", description: "Konversionsrate aus Pilotphase" },
  { icon: Users, label: "Aktive Kanzleien", description: "Laufend gebundene Kanzleien" },
  { icon: Gauge, label: "Seats / Kanzlei", description: "Nutzungstiefe im Team" },
  { icon: BarChart3, label: "ARPA", description: "Ø Umsatz je Kanzlei" },
  { icon: RefreshCcw, label: "Retention / Churn", description: "Kundenbindung als Wachstumstreiber" },
];

export function AIStudioRoadmap() {
  return (
    <SectionShell id="roadmap" bg="neutral">
      <SectionHeading
        title="Go-to-Market in drei Wellen."
        subtitle="Kontrollierter Einstieg über Pilot – dann Skalierung und Upsell."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {waves.map((w, i) => (
          <div
            key={w.phase}
            className={`animate-fade-up flex flex-col rounded-xl bg-white border-l-4 ${w.accent} p-6 shadow-sm transition-shadow hover:shadow-md`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-atikon-violet/8 text-atikon-violet">
                <w.icon size={20} />
              </div>
              <div>
                <Badge variant="subtle" size="sm">{w.phase}</Badge>
                <p className="text-xs text-neutral-500 mt-0.5">{w.timeframe}</p>
              </div>
            </div>

            <h3 className="text-lg font-bold text-atikon-black">{w.title}</h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed flex-1">
              {w.description}
            </p>

            <ul className="mt-5 space-y-2.5 border-t border-neutral-100 pt-5">
              {w.milestones.map((m) => (
                <li key={m} className="flex items-start gap-2 text-sm text-neutral-700">
                  <ChevronRight size={14} className="mt-0.5 shrink-0 text-atikon-violet/50" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* KPIs */}
      <div className="mt-14">
        <h3 className="text-center text-base font-semibold text-neutral-500 uppercase tracking-wider mb-8">
          Steuerungs-KPIs ab Tag 1
        </h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="flex flex-col items-center text-center rounded-xl bg-white border border-neutral-100 p-4 shadow-sm"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-atikon-violet/8 text-atikon-violet mb-3">
                <kpi.icon size={18} />
              </div>
              <p className="text-sm font-semibold text-atikon-black">{kpi.label}</p>
              <p className="mt-1 text-xs text-neutral-500">{kpi.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
