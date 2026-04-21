import {
  Clock,
  Home,
  Users,
  BookOpen,
  Monitor,
  HeartPulse,
  HandHeart,
  Shield,
  PartyPopper,
  Gift,
  Coffee,
  UtensilsCrossed,
  Car,
  Train,
} from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { Badge } from "../ui/Badge";
import type { LucideIcon } from "lucide-react";

type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    icon: Clock,
    title: "Work-Life-Balance",
    description: "Wird bei uns gelebt – wir arbeiten flexibel und spontan.",
  },
  {
    icon: Home,
    title: "Homeoffice",
    description: "3 Tage Büro, 2 Tage Homeoffice – flexibel vereinbar.",
  },
  {
    icon: Users,
    title: "Onboarding & Mentoring",
    description:
      "Umfangreiche Einschulung durch persönliches Mentoringprogramm.",
  },
  {
    icon: BookOpen,
    title: "Weiterbildung",
    description: "Wir unterstützen dich bei deiner Wissenserweiterung.",
  },
  {
    icon: Monitor,
    title: "Ergonomische Arbeitsplätze",
    description: "Topausgestattete und ergonomische Büroräumlichkeiten.",
  },
  {
    icon: HeartPulse,
    title: "Gesundheitsmanagement",
    description:
      "Abwechslungsreiche Aktivitäten zur Förderung deiner Gesundheit.",
  },
  {
    icon: HandHeart,
    title: "Soziales Engagement",
    description:
      "Regelmäßige Spenden an gemeinnützige Vereine und Organisationen.",
  },
  {
    icon: Shield,
    title: "Krisensicherer Arbeitsplatz",
    description: "Auch schwierige Zeiten bewältigen wir gemeinsam.",
  },
  {
    icon: PartyPopper,
    title: "Mitarbeiterevents",
    description:
      "Ausflüge, Stammtische und Weihnachtsfeiern stärken unser Miteinander.",
  },
  {
    icon: Gift,
    title: "Goodies für zwischendurch",
    description: "Kleine Aufmerksamkeiten als Wertschätzung inkludiert.",
  },
  {
    icon: Coffee,
    title: "Obst, Kaffee & Tee",
    description: "Stehen dir kostenfrei zur Verfügung – jederzeit.",
  },
  {
    icon: UtensilsCrossed,
    title: "Essensservice",
    description:
      "Täglich frische Brötchen vom Bäcker oder Mittagessen von Gourmet.",
  },
  {
    icon: Car,
    title: "Gratis Parken",
    description: "Viele, kostenfreie Parkmöglichkeiten vor dem Haus.",
  },
  {
    icon: Train,
    title: "Gute Anbindung",
    description: "Mit der Straßenbahnlinie 3 und 4 direkt vor die Tür.",
  },
];

export function KarriereBenefits() {
  return (
    <SectionShell id="benefits" bg="neutral">
      <div className="mx-auto max-w-2xl text-center">
        <Badge variant="orange" size="sm">
          Deine Benefits
        </Badge>
        <h2 className="mt-5">So macht Arbeiten einfach Spaß!</h2>
        <p className="mt-4 text-neutral-600 leading-relaxed">
          Bei Atikon erwartet dich nicht nur ein spannender Job, sondern ein
          Umfeld, in dem du dich rundum wohlfühlst.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {benefits.map((b, i) => {
          const Icon = b.icon;
          return (
            <div
              key={b.title}
              className="group rounded-xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:border-atikon-orange/30 hover:shadow-md animate-fade-up"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-atikon-orange/8 text-atikon-orange transition-colors group-hover:bg-atikon-orange group-hover:text-white">
                <Icon size={20} />
              </div>
              <h3 className="text-sm font-bold text-atikon-black">{b.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-neutral-500">
                {b.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
