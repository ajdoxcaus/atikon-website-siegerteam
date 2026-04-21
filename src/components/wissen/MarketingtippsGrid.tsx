import { useState } from "react";
import { SectionShell } from "../ui/SectionShell";

type Tip = {
  title: string;
  excerpt: string;
  categories: string[];
};

const CATEGORIES = [
  "Alle",
  "Digitalisierung",
  "Homepage & Website",
  "Social Media",
  "Personalsuche",
  "Mandantenbindung",
  "Drucksorten",
];

const TIPS: Tip[] = [
  {
    title: "So nutzen Sie die HR-Aufwärtsspirale für Ihre Talentegewinnung",
    excerpt: "Passen Sie Ihre Human-Resource-Strategie an die dynamischen Anforderungen des Arbeitsmarktes an.",
    categories: ["Personalsuche"],
  },
  {
    title: "Stürmische Zeiten: Digital gewinnt!",
    excerpt: "Persönlicher Kontakt ist nicht immer möglich – umso wichtiger ist eine starke digitale Präsenz.",
    categories: ["Digitalisierung"],
  },
  {
    title: "Mitarbeitergewinnung für Steuerberater",
    excerpt: "Entdecken Sie die effektivsten Strategien gegen den Fachkräftemangel – von Employer Branding bis Active Sourcing.",
    categories: ["Personalsuche"],
  },
  {
    title: "Braucht Ihre Website ein Makeover?",
    excerpt: "Schnelle, mobiloptimierte und barrierefreie Websites werden heute erwartet. Ist Ihre Homepage fit?",
    categories: ["Homepage & Website"],
  },
  {
    title: "Kein Erfolg im Recruiting? Die 5 häufigsten Fehler",
    excerpt: "Oft verhindert ein fehlendes Konzept oder eine schlechte Candidate Experience den Bewerbungserfolg.",
    categories: ["Personalsuche"],
  },
  {
    title: "Ist Ihre Website im Internet auffindbar?",
    excerpt: "Auf welchem Platz erscheint Ihre Website in Suchmaschinenergebnissen? Tipps für bessere Sichtbarkeit.",
    categories: ["Homepage & Website"],
  },
  {
    title: "LinkedIn: Neue Wege in der Personalsuche",
    excerpt: "Nutzen Sie soziale Netzwerke für die Mitarbeitersuche und erschließen Sie neue Kanäle.",
    categories: ["Social Media", "Personalsuche"],
  },
  {
    title: "Content Marketing: In 5 Schritten Inhalte finden",
    excerpt: "Das Marketing mit Inhalten soll Interessenten zu qualifizierten Kontakten und in Folge zu Mandanten machen.",
    categories: ["Homepage & Website", "Mandantenbindung"],
  },
  {
    title: "5 Tipps für den digitalen Kanzleimitarbeiter",
    excerpt: "So sparen Sie mit digitalem Kanzleimarketing wertvolle Zeit im Arbeitsalltag.",
    categories: ["Digitalisierung"],
  },
  {
    title: "Bewertungen sind gut – und Sie auch!",
    excerpt: "Ein Überblick über die Wichtigkeit von Bewertungen und wie man mit diesem Tool richtig umgeht.",
    categories: ["Homepage & Website", "Mandantenbindung"],
  },
  {
    title: "Werden Sie für Ihre offenen Stellen bei Google gefunden!",
    excerpt: "Viele Jobsuchende nutzen Google als erste Anlaufstelle. So optimieren Sie Ihre Stellenangebote.",
    categories: ["Personalsuche", "Homepage & Website"],
  },
  {
    title: "Warum Empfehlungsmarketing so empfehlenswert ist",
    excerpt: "Weiterempfehlungen haben einen enormen Einfluss auf die Gewinnung neuer Mandanten.",
    categories: ["Mandantenbindung"],
  },
  {
    title: "Onlinemarketing: Mandanten und Mitarbeiter auf Ihre Seite holen",
    excerpt: "Online ist das neue Normal. Wer sich informiert, sucht im Netz. So werden Sie gefunden.",
    categories: ["Homepage & Website", "Digitalisierung"],
  },
  {
    title: "Wie Sie mit Ihrer Karriereseite durchstarten",
    excerpt: "Potenzielle Bewerber landen immer auf Ihrer Website. Machen Sie Ihre Karriereseite zum Magneten.",
    categories: ["Personalsuche", "Homepage & Website"],
  },
  {
    title: "33 Shades of Social Media – Kreative Posting-Ideen",
    excerpt: "Kreative Ideen und Strategien für Social-Media-Posts, die Ihre Kanzlei in Szene setzen.",
    categories: ["Social Media"],
  },
  {
    title: "Entspannte Mandanten zum Jahresende",
    excerpt: "Von der Checkliste zum Jahreswechsel profitieren alle – so entlasten Sie Ihre Kanzlei.",
    categories: ["Mandantenbindung", "Drucksorten"],
  },
  {
    title: "Die digitale Zukunft? Sie hat längst begonnen!",
    excerpt: "Alles, was sich digitalisieren lässt, wird digitalisiert. So bereiten Sie sich vor.",
    categories: ["Digitalisierung"],
  },
  {
    title: "Crossmedia: Sowohl-als-auch statt Entweder-oder",
    excerpt: "Konsumverhalten und Interessen Ihrer Mandanten sind vielfältig – bedienen Sie alle Kanäle.",
    categories: ["Drucksorten", "Mandantenbindung"],
  },
  {
    title: "Die Knackigsten sind erfolgreich",
    excerpt: "Was macht ein Logo zu einer wiedererkennbaren Visitenkarte Ihrer Kanzlei?",
    categories: ["Drucksorten"],
  },
  {
    title: "Kanzlei als Marke",
    excerpt: "Marken geben Sicherheit. So bauen Sie eine starke Kanzleimarke auf.",
    categories: ["Drucksorten", "Mandantenbindung"],
  },
  {
    title: "Social Media: Ein Plus für jede Kanzlei",
    excerpt: "Soziale Netzwerke haben die Marketingwelt längst im Griff. So starten Sie erfolgreich.",
    categories: ["Social Media"],
  },
  {
    title: "Beschwerde als Chance",
    excerpt: "Reklamationen sind wertvolle Chancen. Wer richtig damit umgeht, kann Mandanten langfristig binden.",
    categories: ["Mandantenbindung"],
  },
  {
    title: "Google Ads für Steuerberater",
    excerpt: "Werbeanzeigen auf Google bringen Sie auf die besten Plätze. So setzen Sie Ihr Budget richtig ein.",
    categories: ["Homepage & Website", "Digitalisierung"],
  },
  {
    title: "5 geniale Tipps für die Mitarbeitersuche",
    excerpt: "Ein Inserat in der Zeitung reicht längst nicht mehr. Moderne Wege der Personalsuche.",
    categories: ["Personalsuche"],
  },
];

export function MarketingtippsGrid() {
  const [active, setActive] = useState("Alle");

  const filtered =
    active === "Alle" ? TIPS : TIPS.filter((t) => t.categories.includes(active));

  return (
    <SectionShell bg="white">
      <h3 className="text-xl font-bold text-neutral-900 mb-6">
        Weitere Marketingtipps
      </h3>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
              active === cat
                ? "bg-atikon-violet text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((tip) => (
          <article
            key={tip.title}
            className="group rounded-xl border border-neutral-200 bg-neutral-50 p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:bg-white"
          >
            <div className="flex flex-wrap gap-1.5 mb-3">
              {tip.categories.map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-atikon-violet/6 px-2.5 py-0.5 text-[10px] font-semibold text-atikon-violet"
                >
                  {c}
                </span>
              ))}
            </div>
            <h4 className="text-sm font-bold text-neutral-900 leading-snug group-hover:text-atikon-violet transition-colors">
              {tip.title}
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-neutral-600 line-clamp-3">
              {tip.excerpt}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
