import {
  AlertTriangle,
  SendHorizonal,
  FileText,
  Eye,
  MessageCircleQuestion,
  Palette,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { Button } from "../ui/Button";

const painPoints = [
  {
    icon: SendHorizonal,
    text: "Infos werden einzeln per Mail verschickt – ohne Vorlage, ohne System.",
  },
  {
    icon: FileText,
    text: "Inhalte müssen jedes Mal neu formuliert werden, statt auf Vorlagen zurückzugreifen.",
  },
  {
    icon: Eye,
    text: "Es fehlt der Überblick, welche Infos schon rausgegangen sind – und an wen.",
  },
  {
    icon: MessageCircleQuestion,
    text: "Mandanten fragen nach, obwohl die Info längst verschickt wurde.",
  },
  {
    icon: Palette,
    text: "Die Kanzlei-Kommunikation wirkt nicht einheitlich – mal so, mal so.",
  },
];

const solutionBullets = [
  "Vorlagen mit Kanzleidesign – sofort einsatzbereit",
  "Versand, Empfänger und Auswertung an einem Ort",
  "Professioneller Kanzleiauftritt in jeder Ausgabe",
  "Mandantenbindung, die spürbar ist",
];

export function NewsletterProblemSolution() {
  return (
    <>
      {/* ── Problem section ── */}
      <SectionShell id="problem" bg="neutral">
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
          <p className="text-sm font-semibold text-atikon-orange uppercase tracking-wider mb-3">
            Klingt bekannt?
          </p>
          <h2 className="text-atikon-black">
            Diese Situationen kennen viele Kanzleien.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((p, i) => (
            <div
              key={i}
              className="animate-fade-up group flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm border border-neutral-100 transition-shadow hover:shadow-md"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-400 transition-colors group-hover:bg-red-100">
                <p.icon size={18} />
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}

          {/* Ghost card pointing to solution */}
          <div
            className="animate-fade-up flex items-center justify-center rounded-xl border-2 border-dashed border-neutral-200 p-5 text-center"
            style={{ animationDelay: `${painPoints.length * 80}ms` }}
          >
            <p className="text-sm font-medium text-neutral-400 flex items-center gap-2">
              <AlertTriangle size={15} />
              Ergebnis: Aufwand ohne Wirkung
            </p>
          </div>
        </div>
      </SectionShell>

      {/* ── Solution section ── */}
      <SectionShell id="loesung" bg="white" spacing="lg">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Copy */}
          <div className="animate-fade-up max-w-lg">
            <p className="text-sm font-semibold text-atikon-violet uppercase tracking-wider mb-3">
              Die Alternative
            </p>
            <h2 className="text-atikon-black leading-snug">
              Kein weiteres Newsletter-Tool.
              <br />
              <span className="text-atikon-violet">
                Ein Kanzlei-System für strukturierte Mandantenkommunikation.
              </span>
            </h2>
            <p className="mt-5 text-neutral-600 leading-relaxed">
              Das Newslettersystem bündelt Versand, Vorlagen, Auswertung und
              Kanzleidesign in einem klaren Ablauf – ohne Einarbeitung, ohne
              Zusatzsoftware.
            </p>

            <ul className="mt-8 space-y-3.5">
              {solutionBullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-atikon-orange/10 text-atikon-orange">
                    <CheckCircle size={14} />
                  </div>
                  <span className="text-sm text-neutral-700">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button to="#testen" variant="primary" size="md">
                Jetzt ausprobieren
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>

          {/* Visual: Before / After comparison */}
          <div
            className="animate-fade-up"
            style={{ animationDelay: "150ms" }}
            aria-hidden="true"
          >
            <SolutionVisual />
          </div>
        </div>
      </SectionShell>
    </>
  );
}

/* ──────────────────────────────────────────────
   Before / After visual
   ────────────────────────────────────────────── */

function SolutionVisual() {
  return (
    <div className="space-y-4">
      {/* Before */}
      <div className="rounded-xl border border-red-100 bg-red-50/40 p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-3">
          Vorher
        </p>
        <div className="space-y-2">
          {[
            "outlook-einzelmail-mandant-1.eml",
            "newsletter_text_entwurf_v3_FINAL.docx",
            "empfänger-liste-2025.xlsx",
            "logo-kanzlei-hoch.png",
          ].map((f) => (
            <div
              key={f}
              className="flex items-center gap-2 rounded-lg bg-white/70 px-3 py-2 text-xs text-neutral-500 border border-red-100/60"
            >
              <FileText size={13} className="text-red-300 shrink-0" />
              <span className="truncate">{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* After */}
      <div className="rounded-xl border border-emerald-100 bg-emerald-50/40 p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-500 mb-3">
          Mit dem Newslettersystem
        </p>
        <div className="rounded-xl border border-emerald-100 bg-white p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-8 w-8 rounded-full bg-atikon-violet/10 flex items-center justify-center text-xs font-bold text-atikon-violet">
              SK
            </div>
            <div>
              <p className="text-sm font-semibold text-atikon-black">
                Steuer-Update Q2
              </p>
              <p className="text-[11px] text-neutral-400">
                1.248 Empfänger · Kanzleidesign aktiv
              </p>
            </div>
            <div className="ml-auto">
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
                <CheckCircle size={11} />
                Zugestellt
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Geöffnet", value: "68 %" },
              { label: "Geklickt", value: "12 %" },
              { label: "Dauer", value: "2 Min." },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-lg bg-neutral-50 py-2 text-center"
              >
                <p className="text-[10px] text-neutral-400">{s.label}</p>
                <p className="text-xs font-extrabold text-atikon-black">
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
