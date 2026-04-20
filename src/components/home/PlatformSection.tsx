import {
  LogIn,
  Palette,
  Workflow,
  CalendarCheck,
  ArrowRight,
  Globe,
  Mail,
  Sparkles,
  Target,
  Share2,
  FileText,
} from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

const benefits = [
  {
    icon: LogIn,
    title: "Ein Zugang",
    description:
      "Alle Module über ein Login. Kein Jonglieren zwischen Tools und Anbietern.",
  },
  {
    icon: Palette,
    title: "Ein Markenauftritt",
    description:
      "Ihr Kanzleidesign zieht sich durch Website, Newsletter und Social Media.",
  },
  {
    icon: Workflow,
    title: "Ein Datenfluss",
    description:
      "Leads, Statistiken und Content laufen in einem System zusammen.",
  },
  {
    icon: CalendarCheck,
    title: "Ein Weg zum Termin",
    description:
      "Von der ersten Anzeige bis zur Terminbuchung – alles in einer Pipeline.",
  },
];

const platformModules = [
  { icon: Globe, label: "Website" },
  { icon: Mail, label: "Newsletter" },
  { icon: Sparkles, label: "AI Studio" },
  { icon: Target, label: "Lead Management" },
  { icon: Share2, label: "Social Media" },
  { icon: FileText, label: "Content" },
];

export function PlatformSection() {
  return (
    <SectionShell id="plattform" bg="white">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <Badge variant="violet" size="sm">taxHub Plattform</Badge>

        <h2 className="mt-5">Ein System statt zehn Einzellösungen.</h2>

        <p className="mt-4 text-neutral-600 leading-relaxed">
          Der taxHub bündelt Website, Content, Newslettersystem, AI Studio,
          Lead Management und Kampagnen in einer Plattform für Steuerkanzleien.
        </p>
      </div>

      {/* Benefit cards */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b) => {
          const Icon = b.icon;
          return (
            <div
              key={b.title}
              className="rounded-xl bg-white p-6 shadow-sm border border-neutral-100 transition-shadow duration-200 hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-atikon-violet/8 text-atikon-violet">
                <Icon size={20} />
              </div>
              <h3 className="text-base font-semibold text-atikon-black">{b.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {b.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Platform mockup */}
      <div className="mt-14 animate-fade-up" aria-hidden="true">
        <PlatformMockup />
      </div>

      {/* CTA */}
      <div className="mt-10 text-center">
        <Button to="#module" variant="secondary" size="md">
          Module entdecken
          <ArrowRight size={18} />
        </Button>
      </div>
    </SectionShell>
  );
}

function PlatformMockup() {
  return (
    <div className="rounded-2xl border border-neutral-200/80 bg-white shadow-lg overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-5 py-3 border-b border-neutral-100 bg-neutral-50/60">
        <div className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
        <div className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
        <div className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
        <div className="ml-3 flex-1 h-6 rounded-full bg-white border border-neutral-100 flex items-center px-3">
          <span className="text-[10px] text-neutral-300 select-none">taxhub.atikon.com</span>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden sm:flex w-14 shrink-0 flex-col items-center gap-4 border-r border-neutral-100 bg-neutral-50/40 py-5">
          {platformModules.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-atikon-violet/60 hover:bg-atikon-violet/6 transition-colors"
                title={m.label}
              >
                <Icon size={16} />
              </div>
            );
          })}
        </div>

        {/* Module tiles */}
        <div className="flex-1 p-5 sm:p-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {platformModules.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.label}
                  className="flex items-center gap-3 rounded-xl border border-neutral-100 bg-neutral-50/50 p-4 transition-shadow hover:shadow-sm"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-atikon-violet/8">
                    <Icon size={16} className="text-atikon-violet" />
                  </div>
                  <span className="text-sm font-semibold text-neutral-700">{m.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
