import { ArrowUpRight } from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { SectionHeading } from "../ui/SectionHeading";

const FEATURED = [
  {
    title: "Kanzleimarketing richtig nutzen, nicht nur ein bisschen",
    excerpt:
      "In vielen Kanzleien bringen 20 % der Mandanten 80 % des Umsatzes. So gewinnen Sie gezielt mehr Top-Mandate mit einem durchdachten Gesamtkonzept.",
    author: "Mag. Johann Aglas",
    category: "Digitalisierung",
    accent: "border-l-atikon-violet",
  },
  {
    title: "Die 5 größten Digitalisierungsfehler in Steuerkanzleien",
    excerpt:
      "Tools werden nicht genutzt, Mandant:innen sind verunsichert, Abläufe bleiben analog. So vermeiden Sie die häufigsten Fehler.",
    author: "Mag. Johann Aglas",
    category: "Digitalisierung",
    accent: "border-l-atikon-orange",
  },
  {
    title: "Zeitmanagement für Steuerberater: Mehr Raum für Ihre A-Mandanten",
    excerpt:
      "Wer langfristig erfolgreich arbeiten will, braucht Klarheit über die eigenen Prioritäten und die richtigen Strukturen.",
    author: "Christoph Amon",
    category: "Digitalisierung",
    accent: "border-l-atikon-violet",
  },
  {
    title: "Kanzleimarketing: Mandantengewinnung für Steuerberater",
    excerpt:
      "Neue Mandanten erwarten mehr als Kompetenz. Entdecken Sie, welche Strategien heute für erfolgreiche Mandatsakquise entscheidend sind.",
    author: "Christoph Amon",
    category: "Mandantenbindung",
    accent: "border-l-atikon-orange",
  },
];

export function MarketingtippsFeatured() {
  return (
    <SectionShell bg="neutral">
      <SectionHeading
        title="Unsere neuesten Tipps für Sie"
        subtitle="Praxisnah, kompakt und sofort umsetzbar."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {FEATURED.map((tip) => (
          <article
            key={tip.title}
            className={`group relative overflow-hidden rounded-2xl border-l-4 ${tip.accent} border border-neutral-200 bg-white p-8 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5`}
          >
            <span className="inline-block rounded-full bg-atikon-violet/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-atikon-violet mb-4">
              {tip.category}
            </span>
            <h3 className="text-lg font-bold text-neutral-900 group-hover:text-atikon-violet transition-colors leading-snug">
              {tip.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              {tip.excerpt}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs font-semibold text-neutral-400">
                {tip.author}
              </span>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-atikon-violet">
                Lesen
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
