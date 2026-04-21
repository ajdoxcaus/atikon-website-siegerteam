import { Briefcase, TrendingUp, Send, ArrowRight } from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { Badge } from "../ui/Badge";
import type { LucideIcon } from "lucide-react";

type Job = {
  title: string;
  type: string;
  icon: LucideIcon;
  description: string;
  tags: string[];
};

const jobs: Job[] = [
  {
    title: "Leadmanagement (m/w/d)",
    type: "Vollzeit",
    icon: Briefcase,
    description:
      "Mit Fokus auf Neukundenakquise & Telefonie. Du bist die erste Kontaktperson für potenzielle Kund:innen und begeisterst sie für unsere Marketinglösungen.",
    tags: ["Sales", "Telefonie", "Neukundenakquise"],
  },
  {
    title: "Sales Trainee (m/w/d)",
    type: "Vollzeit",
    icon: TrendingUp,
    description:
      "Dein Einstieg in den Vertrieb! Lerne von erfahrenen Kolleg:innen die Welt des Kanzleimarketings kennen und entwickle dich zum Sales-Profi.",
    tags: ["Trainee", "Vertrieb", "Karrierestart"],
  },
  {
    title: "Initiativbewerbung",
    type: "Voll- oder Teilzeit",
    icon: Send,
    description:
      "Kein passender Job dabei? Wir sind immer auf der Suche nach motivierten, kreativen und qualifizierten Persönlichkeiten, die unser Team bereichern.",
    tags: ["Alle Bereiche", "Flexibel"],
  },
];

export function KarriereJobs() {
  return (
    <SectionShell id="stellen" bg="white">
      <div className="mx-auto max-w-2xl text-center">
        <Badge variant="violet" size="sm">
          Offene Stellen
        </Badge>
        <h2 className="mt-5">
          Werde Teil unseres kreativen Teams.
        </h2>
        <p className="mt-4 text-neutral-600 leading-relaxed">
          Entdecke unsere offenen Stellenangebote und finde deinen Platz bei
          Atikon. Wir freuen uns, dich kennenzulernen!
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {jobs.map((job) => {
          const Icon = job.icon;
          return (
            <div
              key={job.title}
              className="group relative flex flex-col rounded-2xl border border-neutral-200 bg-white p-7 transition-all duration-300 hover:border-atikon-violet/30 hover:shadow-lg hover:shadow-atikon-violet/5"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-atikon-violet/8 text-atikon-violet transition-colors group-hover:bg-atikon-violet group-hover:text-white">
                  <Icon size={22} />
                </div>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
                  {job.type}
                </span>
              </div>

              <h3 className="text-lg font-bold text-atikon-black">
                {job.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
                {job.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-atikon-violet/6 px-2.5 py-0.5 text-xs font-medium text-atikon-violet"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#bewerbung"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-atikon-violet px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-atikon-violet-dark"
              >
                Jetzt bewerben
                <ArrowRight size={16} />
              </a>
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-center text-sm text-neutral-500 leading-relaxed">
        „Wir wertschätzen Vielfalt und begrüßen daher alle Bewerbungen –
        unabhängig von Alter, Geschlecht, Nationalität, ethnischer und sozialer
        Herkunft, Religion/Weltanschauung, Beeinträchtigung sowie sexueller
        Orientierung und Identität."
      </p>
    </SectionShell>
  );
}
