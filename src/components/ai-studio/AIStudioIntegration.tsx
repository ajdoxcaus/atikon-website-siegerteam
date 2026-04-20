import {
  Globe,
  Mail,
  FileText,
  Target,
  Megaphone,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { Badge } from "../ui/Badge";

type Connection = {
  icon: LucideIcon;
  module: string;
  flow: string;
};

const connections: Connection[] = [
  {
    icon: Globe,
    module: "Website",
    flow: "KI-Videos direkt auf der Kanzleiwebsite einbetten",
  },
  {
    icon: Mail,
    module: "Newsletter",
    flow: "Steuernews-TV als Video-Link in jeder Ausgabe",
  },
  {
    icon: FileText,
    module: "Content",
    flow: "Textbausteine als Grundlage für Video-Skripte",
  },
  {
    icon: Target,
    module: "Lead Mgmt",
    flow: "Video-Landingpages für Kampagnen-Traffic",
  },
  {
    icon: Megaphone,
    module: "Kampagnen",
    flow: "KI-Clips als Social-Media-Content",
  },
];

export function AIStudioIntegration() {
  return (
    <SectionShell id="integration" bg="neutral">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        {/* Visual */}
        <div className="animate-fade-up" aria-hidden="true">
          <IntegrationVisual />
        </div>

        {/* Copy */}
        <div className="animate-fade-up max-w-lg" style={{ animationDelay: "150ms" }}>
          <Badge variant="orange" size="sm">
            Plattform-Vorteil
          </Badge>

          <h2 className="mt-5 text-atikon-black leading-snug">
            Kein Silo.
            <br />
            <span className="text-atikon-violet">
              Nahtlos verbunden mit dem gesamten taxHub.
            </span>
          </h2>

          <p className="mt-5 text-neutral-600 leading-relaxed">
            Die KI-Inhalte aus dem AI Studio fließen direkt in die anderen
            Module – auf die Website, in den Newsletter, in Kampagnen. Kein
            Export, kein Hochladen, kein Medienbruch.
          </p>

          <ul className="mt-8 space-y-3">
            {connections.map((c) => (
              <li key={c.module} className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-atikon-violet/8 text-atikon-violet">
                  <c.icon size={16} />
                </div>
                <div className="min-w-0">
                  <span className="text-sm font-semibold text-atikon-black">
                    {c.module}
                  </span>
                  <span className="text-sm text-neutral-500">
                    {" "}– {c.flow}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}

function IntegrationVisual() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Hub ring */}
      <div className="relative flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72">
        {/* Orbit ring */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-atikon-violet/10" />

        {/* Center */}
        <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-atikon-violet shadow-lg">
          <Sparkles size={28} className="text-white" />
        </div>

        {/* Orbiting modules */}
        {connections.map((c, i) => {
          const angle = (i * 360) / connections.length - 90;
          const rad = (angle * Math.PI) / 180;
          const r = 45;
          const x = 50 + r * Math.cos(rad);
          const y = 50 + r * Math.sin(rad);

          return (
            <div
              key={c.module}
              className="absolute flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-neutral-200 shadow-sm"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
              }}
              title={c.module}
            >
              <c.icon size={16} className="text-atikon-violet" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
