import {
  Globe,
  Mail,
  Sparkles,
  Target,
  Megaphone,
  FileText,
  ArrowDown,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { Badge } from "../ui/Badge";

type FlowStep = {
  icon: LucideIcon;
  label: string;
  feeds: string;
};

const flowSteps: FlowStep[] = [
  { icon: FileText, label: "Content", feeds: "Steuernews, Texte, Rechner" },
  { icon: Globe, label: "Website", feeds: "Landingpages, Mandantenportal" },
  { icon: Mail, label: "Newsletter", feeds: "Personalisierte Kanzleinews" },
  { icon: Sparkles, label: "AI Studio", feeds: "KI-Videos, Steuernews-TV" },
  { icon: Megaphone, label: "Kampagnen", feeds: "Social Ads, Google Ads" },
  { icon: Target, label: "Leads", feeds: "Anfragen, Termine, Bewerbungen" },
];

export function TaxHubFlow() {
  return (
    <SectionShell id="datenfluss" bg="white" spacing="lg">
      <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-up">
        <Badge variant="orange" size="sm">
          Datenfluss
        </Badge>
        <h2 className="mt-5 text-atikon-black">
          Wie alles zusammenspielt.
        </h2>
        <p className="mt-4 text-neutral-600 text-lg leading-relaxed">
          Im taxHub fließen Inhalte, Daten und Designs automatisch von einem
          Modul ins nächste – ohne manuelles Kopieren.
        </p>
      </div>

      {/* Flow visualization */}
      <div className="mx-auto max-w-3xl">
        {/* Central hub */}
        <div className="animate-fade-up flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 rounded-full bg-atikon-violet px-8 py-4 shadow-lg">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white text-sm font-bold">
              t
            </div>
            <div className="text-left">
              <p className="text-white text-sm font-semibold">taxHub</p>
              <p className="text-white/60 text-xs">Zentraler Datenkern</p>
            </div>
          </div>
        </div>

        {/* Connection arrows */}
        <div className="flex justify-center mb-6" aria-hidden="true">
          <div className="grid grid-cols-3 gap-x-16 gap-y-0 sm:grid-cols-6 sm:gap-x-8">
            {flowSteps.map(() => (
              <div key={Math.random()} className="flex justify-center">
                <ArrowDown size={16} className="text-atikon-violet/30" />
              </div>
            ))}
          </div>
        </div>

        {/* Module cards */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {flowSteps.map((step, i) => (
            <div
              key={step.label}
              className="animate-fade-up rounded-xl border border-neutral-100 bg-neutral-50 p-4 text-center transition-shadow hover:shadow-md hover:border-atikon-violet/20"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-atikon-violet/8 text-atikon-violet">
                <step.icon size={18} />
              </div>
              <p className="text-xs font-semibold text-atikon-black">
                {step.label}
              </p>
              <p className="mt-1 text-[10px] text-neutral-400 leading-relaxed">
                {step.feeds}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom connecting line */}
        <div className="mt-6 flex justify-center" aria-hidden="true">
          <div className="h-0.5 w-4/5 rounded-full bg-gradient-to-r from-transparent via-atikon-violet/15 to-transparent" />
        </div>

        {/* Result */}
        <div className="animate-fade-up mt-6 flex justify-center" style={{ animationDelay: "350ms" }}>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-100 px-5 py-2.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-sm font-semibold text-emerald-700">
              Ergebnis: weniger Aufwand, mehr Wirkung, volle Transparenz
            </span>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
