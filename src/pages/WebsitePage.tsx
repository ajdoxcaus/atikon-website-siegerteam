import { ArrowRight, CalendarCheck, CheckCircle2, Globe, ShieldCheck, Wrench } from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { SectionHeading } from "../components/ui/SectionHeading";
import { SectionShell } from "../components/ui/SectionShell";

const websitePillars = [
  {
    icon: Globe,
    title: "Kanzlei-Auftritt mit Struktur",
    description:
      "Klares Design, intuitive Navigation und ein professioneller erster Eindruck fur Mandanten und Bewerber.",
  },
  {
    icon: Wrench,
    title: "Mandanten-Tools inklusive",
    description:
      "Online-Rechner, Formulare und Service-Bausteine unterstutzen Ihre Mandanten direkt auf der Website.",
  },
  {
    icon: ShieldCheck,
    title: "Laufende Betreuung",
    description:
      "Inhalte, technische Pflege und Optimierungen bleiben aktuell, ohne dass Ihr Team zusatzliche Zeit verliert.",
  },
];

const websiteBenefits = [
  "In 12 Wochen von der Planung bis zum Launch",
  "Barrierearmer Aufbau fur bessere Nutzbarkeit",
  "Saubere Integration mit taxHub-Modulen und Kampagnen",
  "Klare Conversion-Wege von Besuch bis Terminbuchung",
];

export function WebsitePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="container-max py-16 sm:py-20 lg:py-28 xl:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-xl animate-fade-up">
              <Badge variant="violet" size="sm">
                taxHub Modul
              </Badge>
              <h1 className="mt-6 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.08] font-extrabold tracking-tight">
                <span className="text-atikon-black">Website</span>
                <br />
                <span className="text-atikon-orange">als Wachstumskanal</span>
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-neutral-600">
                Ihre Kanzlei-Website wird zum aktiven Baustein fur Mandantengewinnung, Recruiting
                und digitale Mandantenkommunikation.
              </p>
              <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-500">
                Von der Struktur bis zur laufenden Pflege: alles auf Steuerkanzleien ausgerichtet
                und nahtlos im taxHub integriert.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button to="#termin" variant="primary" size="md">
                  Beratungstermin sichern
                  <ArrowRight size={18} />
                </Button>
                <Button to="/taxhub" variant="secondary" size="md">
                  <CalendarCheck size={16} />
                  taxHub ansehen
                </Button>
              </div>
            </div>

            <div className="animate-fade-up rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-atikon-violet">
                Website-Paket
              </p>
              <div className="mt-4 space-y-3">
                {[
                  "Kickoff und Zielgruppen-Workshop",
                  "Sitemap, Texte und Conversion-Logik",
                  "Design, technische Umsetzung und Launch",
                  "Monatliche Updates und Content-Pflege",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 rounded-lg bg-neutral-50 p-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-atikon-violet" />
                    <span className="text-sm text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionShell id="leistungen" bg="neutral">
        <SectionHeading
          title="Was die Website fur Ihre Kanzlei leistet"
          subtitle="Die wichtigsten Bausteine fur einen digitalen Auftritt, der nicht nur gut aussieht, sondern messbar wirkt."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {websitePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card key={pillar.title} className="h-full animate-fade-up">
                <div className="flex h-full flex-col">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-atikon-violet/10 text-atikon-violet">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 text-lg">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{pillar.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </SectionShell>

      <SectionShell bg="white">
        <SectionHeading
          title="Ihr Mehrwert auf einen Blick"
          subtitle="So wird die Website zu einem stabilen Fundament fur Sichtbarkeit und Anfragen."
        />
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {websiteBenefits.map((benefit) => (
            <div key={benefit} className="rounded-xl border border-neutral-200 bg-white p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-atikon-orange" />
                <p className="text-sm leading-relaxed text-neutral-700">{benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
