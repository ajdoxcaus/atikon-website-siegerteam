import {
  ArrowRight,
  Sparkles,
  Shield,
  Bot,
  Send,
  FileText,
  CheckCircle,
  Zap,
} from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

export function AIStudioHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-max py-16 sm:py-20 lg:py-28 xl:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="animate-fade-up max-w-xl">
            <Badge variant="violet" size="sm">
              <Sparkles size={12} className="mr-1" />
              Erstes KI-Produktionsstudio für Steuerkanzleien
            </Badge>

            <h1 className="mt-6 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.08] font-extrabold tracking-tight">
              <span className="text-atikon-black">Sicherer KI-Workspace</span>
              <br />
              <span className="text-atikon-orange">für Ihre Kanzlei.</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-neutral-600 max-w-md">
              Das Atikon AI Studio ist ein DSGVO-konformer KI-Assistent,
              spezialisiert auf Steuerberatung. Sicherer Chat, intelligente
              Agenten und automatisierte Workflows – angepasst an Ihre Stimme,
              Ihre Tonalität, Ihr Fachwissen.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-500">
              <span className="inline-flex items-center gap-1.5">
                <Shield size={14} className="text-emerald-600" />
                DSGVO-konform
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                EU-Hosting
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Volle Datenkontrolle
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to="#termin" variant="primary" size="md">
                Demo anfordern
                <ArrowRight size={18} />
              </Button>
              <Button to="#pakete" variant="secondary" size="md">
                Pakete & Preise
              </Button>
            </div>
          </div>

          <div
            className="animate-fade-up relative"
            style={{ animationDelay: "200ms" }}
            aria-hidden="true"
          >
            <AIVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function AIVisual() {
  return (
    <div className="relative">
      <div className="rounded-2xl border border-neutral-200 bg-white shadow-xl overflow-hidden">
        {/* App chrome */}
        <div className="flex items-center justify-between border-b border-neutral-100 bg-neutral-50/80 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            <span className="ml-3 text-[11px] text-neutral-400 font-medium">
              Atikon AI Studio
            </span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-semibold text-emerald-700">DSGVO-konform</span>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="hidden sm:flex w-44 shrink-0 flex-col border-r border-neutral-100 bg-neutral-50/50 p-3 gap-1">
            <div className="flex items-center gap-2 rounded-lg bg-atikon-violet/8 px-2.5 py-2">
              <Sparkles size={13} className="text-atikon-violet" />
              <span className="text-[11px] font-semibold text-atikon-violet">Neuer Chat</span>
            </div>
            {[
              "Bilanz Müller GmbH",
              "E-Fahrzeug AfA",
              "Mandantenbrief Q2",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-lg px-2.5 py-2 hover:bg-neutral-100 transition-colors">
                <FileText size={12} className="text-neutral-400 shrink-0" />
                <span className="text-[11px] text-neutral-500 truncate">{item}</span>
              </div>
            ))}
            <hr className="my-2 border-neutral-100" />
            <p className="px-2.5 text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">Agenten</p>
            {[
              { label: "Bilanzpräsentation", color: "bg-atikon-violet" },
              { label: "Mandantenbrief", color: "bg-atikon-orange" },
              { label: "Steuerrecherche", color: "bg-emerald-500" },
            ].map((a) => (
              <div key={a.label} className="flex items-center gap-2 rounded-lg px-2.5 py-1.5">
                <span className={`h-2 w-2 rounded-full ${a.color} shrink-0`} />
                <span className="text-[11px] text-neutral-500 truncate">{a.label}</span>
              </div>
            ))}
          </div>

          {/* Chat area */}
          <div className="flex-1 flex flex-col min-h-[340px]">
            <div className="flex-1 p-4 space-y-4 overflow-hidden">
              {/* User message */}
              <div className="flex justify-end">
                <div className="max-w-[75%] rounded-2xl rounded-tr-sm bg-atikon-violet px-4 py-2.5">
                  <p className="text-[12px] text-white leading-relaxed">
                    Erstelle eine Zusammenfassung der Bilanz 2025 für die Müller GmbH mit Handlungsempfehlungen.
                  </p>
                </div>
              </div>

              {/* AI response */}
              <div className="flex gap-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-atikon-violet/10">
                  <Bot size={14} className="text-atikon-violet" />
                </div>
                <div className="max-w-[85%]">
                  <div className="rounded-2xl rounded-tl-sm bg-neutral-50 border border-neutral-100 px-4 py-3">
                    <p className="text-[12px] text-neutral-700 leading-relaxed font-medium mb-2">
                      Bilanz-Zusammenfassung Müller GmbH 2025:
                    </p>
                    <div className="space-y-1.5">
                      {[
                        "Umsatz +12 % ggü. Vorjahr (1,8 Mio. €)",
                        "EK-Quote stabil bei 38 %",
                        "Liquidität II: 1,4 — solide",
                      ].map((line) => (
                        <div key={line} className="flex items-start gap-1.5">
                          <CheckCircle size={11} className="mt-0.5 text-emerald-500 shrink-0" />
                          <span className="text-[11px] text-neutral-600">{line}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-neutral-100">
                      <p className="text-[10px] font-semibold text-atikon-violet uppercase tracking-wider mb-1.5">Empfehlungen</p>
                      <div className="flex flex-wrap gap-1.5">
                        {["Investitionsabzug prüfen", "GF-Gehalt optimieren", "Rückstellung auflösen"].map((r) => (
                          <span key={r} className="inline-flex items-center gap-1 rounded-full bg-atikon-violet/8 px-2.5 py-1 text-[10px] font-semibold text-atikon-violet">
                            <Zap size={9} />
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-1.5 flex items-center gap-3 px-1">
                    <span className="text-[10px] text-neutral-400">Bilanzpräsentations-Agent</span>
                    <span className="text-[10px] text-neutral-300">·</span>
                    <span className="text-[10px] text-neutral-400">gerade eben</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Input bar */}
            <div className="border-t border-neutral-100 p-3">
              <div className="flex items-center gap-2 rounded-xl bg-neutral-50 border border-neutral-200 px-3.5 py-2.5">
                <span className="flex-1 text-[12px] text-neutral-400">Nachricht an AI Studio …</span>
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-atikon-violet text-white">
                  <Send size={13} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
