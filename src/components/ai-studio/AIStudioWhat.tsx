import {
  Sparkles,
  MessageSquareText,
  Bot,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { Badge } from "../ui/Badge";

const layers = [
  {
    icon: MessageSquareText,
    step: "1",
    title: "Sicherer KI-Chat",
    description:
      "DSGVO-konforme Arbeitsumgebung mit eigenem Systemprompt, Vorlagen und Datei- & Wissensarbeit im Kanzleikontext.",
    color: "bg-atikon-violet/8 text-atikon-violet",
  },
  {
    icon: Bot,
    step: "2",
    title: "Standard-Agenten",
    description:
      "Meeting-Zusammenfassungen, Gesprächsvorbereitung, E-Mail- und Aufgabenableitung – automatisierte Produktivitäts-Workflows.",
    color: "bg-atikon-violet/12 text-atikon-violet",
  },
  {
    icon: BrainCircuit,
    step: "3",
    title: "Fach-Agenten & Integrationen",
    description:
      "Bilanzpräsentationsagent, Mandantenkommunikation und perspektivisch Integrationen in Kanzleisoftware und Premium-Module.",
    color: "bg-atikon-violet/18 text-atikon-violet",
  },
];

export function AIStudioWhat() {
  return (
    <SectionShell id="was-ist" bg="neutral">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="animate-fade-up max-w-lg">
          <Badge variant="violet" size="sm">
            <Sparkles size={12} className="mr-1" />
            Produktlogik
          </Badge>

          <h2 className="mt-5 text-atikon-black leading-snug">
            Ein Stufenmodell, das mit
            <br />
            <span className="text-atikon-violet">Ihrer Kanzlei wächst.</span>
          </h2>

          <p className="mt-5 text-neutral-600 leading-relaxed">
            Das AI Studio ist kein allgemeiner Chatbot. Es ist ein
            fachspezifischer KI-Assistent für Steuerberatung – aufgebaut in drei
            Stufen: vom sicheren Chat über Produktivitäts-Agenten bis hin zu
            spezialisierten Fach-Agenten.
          </p>

          <p className="mt-4 text-neutral-600 leading-relaxed">
            Alle Ergebnisse bleiben unter Ihrer Kontrolle. Nichts wird
            automatisch veröffentlicht. Sie prüfen, Sie geben frei.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 border border-neutral-200 px-4 py-2 text-sm text-neutral-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Hosting: ausschließlich in der EU
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {layers.map((l, i) => (
            <div
              key={l.title}
              className="animate-fade-up group relative flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm border border-neutral-100 transition-shadow hover:shadow-md"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${l.color} transition-colors group-hover:bg-atikon-violet/20`}
                >
                  <l.icon size={20} />
                </div>
                {i < layers.length - 1 && (
                  <div className="mt-2 h-4 w-px bg-neutral-200" aria-hidden="true" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-atikon-violet/60 uppercase tracking-wider">
                    Stufe {l.step}
                  </span>
                  {i === 0 && (
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                      Basis
                    </span>
                  )}
                </div>
                <h3 className="mt-1 text-base font-semibold text-atikon-black">
                  {l.title}
                </h3>
                <p className="mt-1.5 text-sm text-neutral-600 leading-relaxed">
                  {l.description}
                </p>
              </div>
              {i < layers.length - 1 && (
                <ArrowRight
                  size={14}
                  className="absolute bottom-2 right-4 text-neutral-300 rotate-90"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
