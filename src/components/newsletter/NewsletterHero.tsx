import { ArrowRight, CalendarCheck, Shield, CloudOff, BarChart3, Send } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

const trustPoints = [
  { icon: Shield, label: "DATEV-Anbindung" },
  { icon: Shield, label: "DSGVO-konform" },
  { icon: CloudOff, label: "Keine Installation" },
  { icon: BarChart3, label: "Reporting" },
];

export function NewsletterHero() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="container-max py-16 sm:py-20 lg:py-28 xl:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            {/* Copy */}
            <div className="animate-fade-up max-w-xl">
              <Badge variant="violet" size="sm">
                Modul im taxHub
              </Badge>

              <h1 className="mt-6 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.08] font-extrabold tracking-tight">
                <span className="text-atikon-black">SteuerNewsLetterSystem</span>
                <br />
                <span className="text-atikon-orange">im taxHub</span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-neutral-600 max-w-md">
                Mandantenkommunikation mit Vorlagen, Reporting und klaren
                Prozessen – speziell für Steuerkanzleien.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button to="#testen" variant="primary" size="md">
                  14 Tage kostenlos testen
                  <ArrowRight size={18} />
                </Button>
                <Button to="#termin" variant="secondary" size="md">
                  <CalendarCheck size={16} />
                  Termin buchen
                </Button>
              </div>
            </div>

            {/* Visual */}
            <div
              className="animate-fade-up relative"
              style={{ animationDelay: "200ms" }}
              aria-hidden="true"
            >
              <EditorMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Trust line */}
      <div className="animate-fade-up border-y border-neutral-100 bg-neutral-50">
        <div className="container-max py-5">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustPoints.map((tp) => (
              <li key={tp.label} className="flex items-center gap-2 text-sm text-neutral-500">
                <tp.icon size={15} className="text-atikon-violet/60" />
                {tp.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

/* ──────────────────────────────────────────────
   Newsletter-Editor + Stats Mockup
   ────────────────────────────────────────────── */

function EditorMockup() {
  return (
    <div className="relative">
      {/* Browser chrome */}
      <div className="rounded-2xl border border-neutral-200 bg-white shadow-xl overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-neutral-100 bg-neutral-50/80 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          <span className="ml-3 text-[11px] text-neutral-400 font-medium">
            taxHub – Newsletter Editor
          </span>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="hidden sm:flex w-44 shrink-0 flex-col gap-1.5 border-r border-neutral-100 bg-neutral-50/50 p-3">
            {["Vorlagen", "Entwürfe", "Gesendet", "Abonnenten", "Statistik"].map(
              (item, i) => (
                <div
                  key={item}
                  className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                    i === 0
                      ? "bg-atikon-violet/8 text-atikon-violet"
                      : "text-neutral-500 hover:bg-neutral-100"
                  }`}
                >
                  {item}
                </div>
              ),
            )}
          </div>

          {/* Main editor area */}
          <div className="flex-1 p-5">
            {/* Toolbar */}
            <div className="flex items-center gap-3 pb-4 mb-4 border-b border-neutral-100">
              <Send size={16} className="text-atikon-violet" />
              <span className="text-sm font-semibold text-atikon-black">
                Neuer Newsletter
              </span>
              <div className="ml-auto flex gap-2">
                <div className="h-7 w-16 rounded-md bg-neutral-100 flex items-center justify-center text-[10px] text-neutral-400 font-medium">
                  Vorschau
                </div>
                <div className="h-7 w-20 rounded-md bg-atikon-orange text-white text-[10px] font-semibold flex items-center justify-center">
                  Senden
                </div>
              </div>
            </div>

            {/* Email preview */}
            <div className="rounded-xl border border-neutral-100 p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-8 w-8 rounded-full bg-atikon-violet/10 flex items-center justify-center text-xs font-bold text-atikon-violet">
                  SK
                </div>
                <div>
                  <p className="text-sm font-semibold text-atikon-black">
                    Steuerkanzlei Müller
                  </p>
                  <p className="text-[11px] text-neutral-400">
                    newsletter@stb-mueller.de
                  </p>
                </div>
              </div>

              <div className="border-l-[3px] border-l-atikon-orange pl-4 mb-3">
                <p className="text-sm font-semibold text-atikon-black">
                  Steuertipp des Monats
                </p>
                <p className="mt-1 text-xs text-neutral-500 leading-relaxed">
                  Fahrtenbuch richtig führen – darauf kommt es an. Wir zeigen
                  Ihnen die wichtigsten Regeln für eine lückenlose
                  Dokumentation…
                </p>
              </div>

              <div className="h-16 rounded-lg bg-gradient-to-r from-atikon-violet/5 via-atikon-orange/5 to-atikon-violet/5" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats panel (floating, hidden on very small screens) */}
      <div className="hidden sm:block absolute -bottom-5 -right-5 w-56 rounded-xl border border-neutral-200 bg-white p-4 shadow-lg">
        <p className="text-xs font-semibold text-atikon-violet mb-3 flex items-center gap-1.5">
          <BarChart3 size={13} />
          Live-Statistik
        </p>
        <div className="space-y-2.5">
          {[
            { label: "Empfänger", value: "1.248", bar: 82 },
            { label: "Öffnungsrate", value: "68,4 %", bar: 68 },
            { label: "Klickrate", value: "12,1 %", bar: 42 },
          ].map((s) => (
            <div key={s.label}>
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-[11px] text-neutral-400">{s.label}</span>
                <span className="text-xs font-extrabold text-atikon-black">
                  {s.value}
                </span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-neutral-100">
                <div
                  className="h-1.5 rounded-full bg-atikon-violet/70"
                  style={{ width: `${s.bar}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success toast (floating, hidden on very small screens) */}
      <div className="hidden sm:flex absolute -bottom-3 -left-5 rounded-xl border border-neutral-200 bg-white px-4 py-3 shadow-md items-center gap-3 animate-fade-up" style={{ animationDelay: "600ms" }}>
        <div className="h-8 w-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 text-sm font-bold">
          ✓
        </div>
        <div>
          <p className="text-[11px] text-neutral-400">Versand abgeschlossen</p>
          <p className="text-sm font-semibold text-atikon-black">
            1.248 zugestellt
          </p>
        </div>
      </div>
    </div>
  );
}
