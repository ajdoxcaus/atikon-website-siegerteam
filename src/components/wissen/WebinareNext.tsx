import { Calendar, Clock, Users, ArrowRight } from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { Button } from "../ui/Button";

const BULLET_POINTS = [
  "Warum Personal Branding für Steuerberater im KI-Zeitalter wichtiger wird",
  "Wie sich die Rolle von Fachwissen und persönlicher Positionierung verändert",
  "Wie Sie auf LinkedIn bei Ihrer Zielgruppe sichtbar punkten",
  "Wie Sie Ihren Expertenstatus gezielt nach außen tragen und festigen",
];

export function WebinareNext() {
  return (
    <SectionShell bg="neutral">
      <div className="mx-auto max-w-3xl">
        <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 mb-6">
          Nächstes Webinar
        </span>

        <div className="rounded-2xl border border-neutral-200 bg-white p-8 lg:p-10 shadow-sm">
          <h3 className="text-xl font-bold text-neutral-900 lg:text-2xl leading-tight">
            Platzhirsch bleiben trotz KI: Personal Branding als Steuerberater
          </h3>

          <p className="mt-2 text-sm font-semibold text-atikon-violet">
            Christoph Amon – Geschäftsführung und Marketingexperte für Steuerberater
          </p>

          <p className="mt-4 text-sm leading-relaxed text-neutral-600">
            Künstliche Intelligenz verändert den Markt für Steuerberater spürbar.
            Fachwissen wird schneller verfügbar, Inhalte werden austauschbarer.
            Wer heute nicht nur fachlich überzeugt, sondern auch als Persönlichkeit
            erkennbar ist, schafft Vertrauen und hebt sich vom Wettbewerb ab.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-500">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} className="text-atikon-violet" />
              Donnerstag, 21. Mai 2026
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} className="text-atikon-violet" />
              15:00 Uhr | ca. 50 Min.
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Users size={14} className="text-atikon-violet" />
              Kostenlos | begrenzte Plätze
            </span>
          </div>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
              Das erwartet Sie
            </p>
            <ul className="space-y-2">
              {BULLET_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-neutral-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-atikon-orange" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <Button to="#termin" variant="primary" size="md">
              Jetzt kostenfrei anmelden
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
