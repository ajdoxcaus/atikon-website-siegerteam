import {
  Layers,
  Palette,
  Workflow,
  ShieldCheck,
} from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { Badge } from "../ui/Badge";

const promises = [
  {
    icon: Layers,
    title: "Ein System statt zehn Tools",
    description:
      "Website, Newsletter, KI, Lead Management, Kampagnen und Content – alles integriert, nichts doppelt.",
  },
  {
    icon: Palette,
    title: "Ein Markenauftritt überall",
    description:
      "Ihr Kanzleidesign zieht sich konsistent durch jeden Kanal – von der Website bis zum Social-Media-Post.",
  },
  {
    icon: Workflow,
    title: "Ein Datenfluss ohne Brüche",
    description:
      "Leads, Statistiken und Inhalte laufen automatisch zusammen. Kein manuelles Kopieren, kein Informationsverlust.",
  },
  {
    icon: ShieldCheck,
    title: "Ein Partner für alles",
    description:
      "Strategie, Umsetzung, Hosting und Support – ein Ansprechpartner, der Ihre Branche versteht.",
  },
];

const staggerDelays = ["0ms", "80ms", "160ms", "240ms"];

export function TaxHubPromise() {
  return (
    <SectionShell id="versprechen" bg="neutral">
      <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-up">
        <Badge variant="violet" size="sm">
          Plattform-Versprechen
        </Badge>
        <h2 className="mt-5 text-atikon-black">
          Warum Kanzleien auf eine Plattform setzen.
        </h2>
        <p className="mt-4 text-neutral-600 text-lg leading-relaxed">
          Einzellösungen kosten Abstimmung. Der taxHub gibt Ihnen alles aus
          einer Hand – mit klarer Struktur und echtem Mehrwert.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {promises.map((p, i) => (
          <div
            key={p.title}
            className="animate-fade-up group rounded-xl bg-white p-6 shadow-sm border border-neutral-100 transition-shadow hover:shadow-md"
            style={{ animationDelay: staggerDelays[i] }}
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-atikon-violet/8 text-atikon-violet transition-colors group-hover:bg-atikon-violet/15">
              <p.icon size={20} />
            </div>
            <h3 className="text-base font-semibold text-atikon-black">
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
