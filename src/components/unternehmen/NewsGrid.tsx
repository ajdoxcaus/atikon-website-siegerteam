import { ArrowUpRight, Calendar } from "lucide-react";
import { SectionShell } from "../ui/SectionShell";

const NEWS_ITEMS = [
  {
    title: "Barrierefreiheit: Neues Gesetz ab 2025",
    excerpt:
      "Mit 28.6.2025 tritt in Deutschland das Barrierefreiheitsstärkungsgesetz (BFSG) bzw. in Österreich das Barrierefreiheitsgesetz (BaFG) in Kraft. Ist Ihre Website barrierefrei?",
    date: "2025",
    featured: true,
  },
  {
    title: "2.000 Euro für Christkind-Aktion",
    excerpt:
      "Mit unserer alljährlichen Atikon-Christbaum-Challenge unterstützten wir 2024 das BezirksRundSchau Christkind in Linz-Land.",
    date: "2024",
    featured: true,
  },
  {
    title: "Feierliche Klimabündnisaufnahme in Linz",
    excerpt:
      "Unternehmertum und Klimaschutz: Wie gut das zusammenpasst, beweist das Klimabündnis – Europas größtes kommunales Klimaschutz-Netzwerk.",
    date: "2024",
  },
  {
    title: "Wir gehören zum Klimabündnis!",
    excerpt:
      "Unser Klima geht uns alle an – als Teil des Klimabündnisses möchten wir aktiv dazu beitragen, es langfristig zu schützen.",
    date: "2024",
  },
  {
    title: "Great Place to Work®: Atikon ist auch 2023 wieder Toparbeitgeber!",
    excerpt:
      "Atikon wurde erneut für die exzellente Mitarbeiter:innenorientierung ausgezeichnet und bleibt weiterhin ein Great Place to Work®.",
    date: "2023",
  },
  {
    title: "Atikon erhält JULIUS-Award",
    excerpt:
      "Michael Mayr (Geschäftsführer) und Christiane Landauf (HR) nahmen den JULIUS-Award von Wirtschaftsbund-Bezirksobmann Jürgen Kapeller entgegen.",
    date: "2023",
  },
  {
    title: "Internationaler Kindertag – Atikon spendet!",
    excerpt:
      "Am internationalen Kindertag nehmen wir diesen besonderen Tag zum Anlass, Kindern einmal mehr Gehör zu schenken und sie zu unterstützen.",
    date: "2023",
  },
  {
    title: "Platz 3 und 3,5 Mio. Schritte für den guten Zweck",
    excerpt:
      "Um unserer Gesundheit Gutes zu tun und die Nico Langmann Foundation zu unterstützen, haben wir an den MOVEVO MOVE DAYS teilgenommen.",
    date: "2023",
  },
  {
    title: "Halloween-Aktion für den guten Zweck!",
    excerpt:
      "Für unsere Atikonist:innen hieß es am 31.10.: Süßes, sonst gibt's Saures! Je mehr Süßigkeiten, desto höher der Spendenbetrag.",
    date: "2023",
  },
  {
    title: "Podcast: Webdesigntrends in 2024",
    excerpt:
      "Die 4. Folge unserer Podcasts \u201EMarketing Süß-Sauer\u201C ist online! Erfahren Sie alles über aktuelle Webdesigntrends.",
    date: "2024",
  },
  {
    title: "Atikon goes TOP TEN: Firmen Fitness Award",
    excerpt:
      "Die Presse, der ÖBSV und SPORTaktiv zeichnen Betriebe aus, die auf die körperliche und soziale Gesundheit ihrer Belegschaft achten.",
    date: "2022",
  },
  {
    title: "Kinderarmut abschaffen – Atikon als Unterstützer",
    excerpt:
      "Im Dezember haben wir alle Atikonist:innen gebeten, unsere Christbäume zum Strahlen zu bringen – für den guten Zweck.",
    date: "2022",
  },
];

export function NewsGrid() {
  const featured = NEWS_ITEMS.filter((n) => n.featured);
  const rest = NEWS_ITEMS.filter((n) => !n.featured);

  return (
    <SectionShell bg="neutral">
      {/* Featured articles */}
      <div className="grid gap-6 md:grid-cols-2 mb-12">
        {featured.map((item) => (
          <article
            key={item.title}
            className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-2 text-xs text-neutral-500 mb-4">
              <Calendar size={12} />
              {item.date}
            </div>
            <h3 className="text-xl font-bold text-neutral-900 group-hover:text-atikon-violet transition-colors">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              {item.excerpt}
            </p>
            <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-atikon-violet">
              Weiterlesen
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </article>
        ))}
      </div>

      {/* More news */}
      <h3 className="text-lg font-bold text-neutral-900 mb-6">
        Weitere Neuigkeiten
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((item) => (
          <article
            key={item.title}
            className="group rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
              <Calendar size={11} />
              {item.date}
            </div>
            <h4 className="text-sm font-bold text-neutral-900 group-hover:text-atikon-violet transition-colors leading-snug">
              {item.title}
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-neutral-600 line-clamp-3">
              {item.excerpt}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
