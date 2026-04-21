import {
  Heart,
  Users,
  Eye,
  TrendingUp,
  Target,
  Globe,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { Badge } from "../ui/Badge";

type Reason = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    icon: Heart,
    title: "Mandantenbindung stärken",
    description:
      "Regelmäßige, relevante Inhalte auf Social Media halten Ihre Kanzlei im Bewusstsein Ihrer Mandanten – vertrauensbildend und ohne Streuverlust.",
  },
  {
    icon: Users,
    title: "Fachkräfte finden",
    description:
      "Employer Branding auf LinkedIn, Facebook und Instagram macht Ihre Kanzlei als Arbeitgeber sichtbar – genau dort, wo Bewerber heute suchen.",
  },
  {
    icon: Eye,
    title: "Sichtbarkeit erhöhen",
    description:
      "Social-Media-Präsenz steigert die Besucherzahlen auf Ihrer Website und verbessert Ihre Auffindbarkeit bei Suchmaschinen und KI-Systemen.",
  },
  {
    icon: TrendingUp,
    title: "Moderne Kanzlei positionieren",
    description:
      "Zeigen Sie mit professionellen Auftritten, dass Ihre Kanzlei digital auf der Höhe der Zeit ist – ein entscheidender Differenzierungsfaktor.",
  },
  {
    icon: Target,
    title: "Neue Mandanten gewinnen",
    description:
      "Gezielte Kampagnen erreichen potenzielle Mandanten in Ihrer Region – von der Awareness bis zur direkten Terminbuchung.",
  },
  {
    icon: Globe,
    title: "Zielgruppen dort abholen, wo sie sind",
    description:
      "Ihre Mandanten und Bewerber sind bereits auf Social Media. Mit dem richtigen Auftritt vernetzen Sie sich direkt mit ihnen.",
  },
];

export function SocialMediaWhy() {
  return (
    <SectionShell id="warum" bg="white">
      <div className="mx-auto max-w-2xl text-center">
        <Badge variant="violet" size="sm">
          Warum Social Media?
        </Badge>
        <h2 className="mt-5">
          Social Media ist für Steuerkanzleien kein Trend – es ist Pflicht.
        </h2>
        <p className="mt-4 text-neutral-600 leading-relaxed">
          Mandanten informieren sich heute online, bevor sie eine Kanzlei
          wählen. Bewerber scrollen durch Instagram und LinkedIn, bevor sie
          sich bewerben. Wer als Steuerberater in diesem Umfeld nicht sichtbar
          ist, verliert – an Reichweite, an Vertrauen und letztlich an
          Mandanten und Fachkräften.
        </p>
        <p className="mt-3 text-neutral-600 leading-relaxed">
          Social Media ist längst kein „Nice-to-have" mehr. Es ist der Kanal,
          über den Sie Ihre Expertise zeigen, Ihre Kanzlei als attraktiven
          Arbeitgeber positionieren und regelmäßig mit Ihrer Zielgruppe in
          Kontakt bleiben – ohne teure Printkampagnen, ohne Streuverlust. Ein
          professioneller Auftritt auf Facebook, Instagram und LinkedIn
          signalisiert: Diese Kanzlei ist modern, erreichbar und nah an ihren
          Mandanten.
        </p>
        <p className="mt-3 text-neutral-600 leading-relaxed">
          Das Beste: Sie müssen das nicht selbst machen. Das Atikon-Team
          übernimmt Ihr komplettes Social-Media-Management – von der
          Content-Erstellung über Kanzleimomente-Fotoshootings bis zur
          strategischen Kampagnensteuerung. So gewinnen Sie Sichtbarkeit,
          ohne Ihren Kanzleialltag zu belasten.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => {
          const Icon = r.icon;
          return (
            <div
              key={r.title}
              className="group rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:border-atikon-violet/30 hover:shadow-md animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-atikon-violet/8 text-atikon-violet transition-colors group-hover:bg-atikon-violet group-hover:text-white">
                <Icon size={22} />
              </div>
              <h3 className="text-base font-bold text-atikon-black">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {r.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
