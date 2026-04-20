import { Link } from "react-router-dom";
import {
  Globe,
  Mail,
  Sparkles,
  Target,
  Share2,
  FileText,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { modules } from "../../data/content";
import { Card } from "../ui/Card";
import { SectionShell } from "../ui/SectionShell";
import { SectionHeading } from "../ui/SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Mail,
  Sparkles,
  Target,
  Share2,
  FileText,
};

export function ModulesOverview() {
  return (
    <SectionShell id="module" bg="neutral">
      <SectionHeading
        title="Eine Plattform. Alles drin."
        subtitle="Der taxHub vereint alle Werkzeuge für Ihren digitalen Kanzleiauftritt – nahtlos integriert, zentral gesteuert."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((mod) => {
          const Icon = iconMap[mod.icon] ?? Globe;
          return (
            <Link key={mod.id} to={mod.link} className="group block no-underline">
              <Card hover>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-atikon-violet/8 text-atikon-violet">
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg">{mod.title}</h3>
                    <p className="mt-1.5 text-sm text-neutral-600 leading-relaxed">
                      {mod.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-atikon-violet group-hover:text-atikon-orange transition-colors">
                      Mehr erfahren
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </SectionShell>
  );
}
