import { Play, ArrowRight } from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { Button } from "../ui/Button";

const ARCHIVE = [
  "KI-Schulung statt Kanzlei-Chaos \u2013 Ihre Pflicht nach dem EU AI Act",
  "Digitales Controlling mit KI als Sparringspartner",
  "So nutzen Sie als Steuerberater ChatGPT besser als 99 % Ihrer Mitbewerber",
  "Als Steuerberater erfolgreich mit Social Media starten",
  "Nachfolgel\u00f6sungen f\u00fcr KMUs \u2013 Steuerberater als Wegweiser",
  "Die 5 gr\u00f6\u00dften Digitalisierungsfehler in Steuerkanzleien",
  "Zeitfresser im Griff",
  "A-Mandanten wie am Flie\u00dfband",
  "Barrierefrei oder Bu\u00dfgeld? Website fit f\u00fcr 2025!",
  "Warum du keine TOP Mitarbeiter bekommst",
  "Power-Up E-Mail-Marketing: Strategien f\u00fcr maximale Wirkung",
  "Mitarbeitermarketing in Steuerberatungskanzleien",
  "Printmedien \u2013 \u00fcberholt oder untersch\u00e4tzt?",
  "Social Media \u2013 wo Employer Branding zum Abenteuer wird!",
  "Mensch \u00e4rgere dich nicht in der Google-Welt",
  "Zur\u00fcck in die Steuerzukunft",
  "Die HR-Aufw\u00e4rtsspirale: Der Weg zur L\u00f6sung",
  "Mitarbeiter:innen-Suche im digitalen Zeitalter",
  "Warum Ihre Website ein Makeover braucht",
  "Bewertungen bei Google & Co \u2013 Wie stehts um Ihren Ruf?",
];

export function WebinareArchiv() {
  return (
    <SectionShell bg="neutral">
      <div className="mx-auto max-w-3xl text-center mb-10">
        <h2>Webinar-Archiv</h2>
        <p className="mt-4 text-neutral-600 text-lg">
          Entdecken Sie \u00fcber 20 kostenfreie Webinare, jederzeit abrufbar und
          gef\u00fcllt mit wertvollem Praxiswissen f\u00fcr Ihre Kanzlei.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {ARCHIVE.map((title) => (
          <div
            key={title}
            className="group flex items-start gap-3 rounded-xl border border-neutral-200 bg-white p-4 transition-all hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-atikon-violet/8 text-atikon-violet transition-colors group-hover:bg-atikon-violet group-hover:text-white">
              <Play size={12} />
            </div>
            <p className="text-sm font-semibold text-neutral-800 leading-snug group-hover:text-atikon-violet transition-colors">
              {title}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button to="#termin" variant="secondary" size="md">
          Kostenlosen Zugriff anfordern
          <ArrowRight size={18} />
        </Button>
      </div>
    </SectionShell>
  );
}
