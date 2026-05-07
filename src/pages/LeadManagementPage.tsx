import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  CheckCircle2,
  Search,
  Target,
  Users,
} from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { SectionHeading } from "../components/ui/SectionHeading";
import { SectionShell } from "../components/ui/SectionShell";

const channels = [
  {
    icon: Target,
    title: "Social Ads",
    description:
      "Kampagnen fur Mandanten- und Bewerberzielgruppen mit klarer Ansprache und sauberem Funnel.",
  },
  {
    icon: Search,
    title: "Google Ads & Sichtbarkeit",
    description:
      "Gezielte Suchkampagnen und lokale Sichtbarkeit, damit Ihre Kanzlei genau dann gefunden wird, wenn Bedarf besteht.",
  },
  {
    icon: Users,
    title: "Lead-Qualifizierung",
    description:
      "Anfragen werden strukturiert erfasst, vorqualifiziert und fur Ihr Team priorisiert.",
  },
  {
    icon: BarChart3,
    title: "Performance-Reporting",
    description:
      "Transparente Kennzahlen zu Kosten, Leads und Abschlusspotenzial fur fundierte Entscheidungen.",
  },
];

const processSteps = [
  "Ziele und Zielgruppen definieren",
  "Kampagnen-Setup mit passenden Creatives",
  "Landingpage und Formular-Flow optimieren",
  "Leads auswerten und laufend verbessern",
];

export function LeadManagementPage() {
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
                <span className="text-atikon-black">Lead Management</span>
                <br />
                <span className="text-atikon-orange">mit messbarer Wirkung</span>
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-neutral-600">
                Wir verbinden Kampagnen, Landingpages und Reporting zu einem Prozess, der aus
                Reichweite planbare Kanzlei-Anfragen macht.
              </p>
              <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-500">
                Ob neue Mandanten oder Fachkrafte: Sie sehen transparent, welche Kanale liefern und
                wie sich Ihr Budget entwickelt.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button to="#termin" variant="primary" size="md">
                  Kampagnenberatung starten
                  <ArrowRight size={18} />
                </Button>
                <Button to="/social-media" variant="secondary" size="md">
                  <CalendarCheck size={16} />
                  Social Media ansehen
                </Button>
              </div>
            </div>

            <div className="animate-fade-up rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-atikon-violet">
                Fokus-Kennzahlen
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Cost per Lead", value: "Transparent je Kanal" },
                  { label: "Lead-Qualitat", value: "Klare Vorqualifizierung" },
                  { label: "Terminquote", value: "Mehr qualifizierte Gesprache" },
                  { label: "Optimierung", value: "Monatliches Reporting" },
                ].map((kpi) => (
                  <div key={kpi.label} className="rounded-lg border border-neutral-100 bg-neutral-50 p-3">
                    <p className="text-xs uppercase tracking-wide text-neutral-500">{kpi.label}</p>
                    <p className="mt-1 text-sm font-semibold text-neutral-800">{kpi.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionShell id="kanaele" bg="neutral">
        <SectionHeading
          title="Leistungsspektrum im Lead Management"
          subtitle="Alle Bausteine greifen ineinander, damit aus Klicks reale Gesprachsanlasse werden."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <Card key={channel.title} className="h-full animate-fade-up">
                <div className="flex h-full flex-col">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-atikon-violet/10 text-atikon-violet">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 text-lg">{channel.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{channel.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </SectionShell>

      <SectionShell bg="white">
        <SectionHeading
          title="Ablauf in vier Schritten"
          subtitle="Ein strukturierter Prozess sorgt fur planbare Ergebnisse statt Zufall."
        />
        <div className="mx-auto grid max-w-4xl gap-4">
          {processSteps.map((step, index) => (
            <div key={step} className="rounded-xl border border-neutral-200 bg-white p-5">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-atikon-violet text-xs font-bold text-white">
                  {index + 1}
                </span>
                <p className="pt-1 text-sm leading-relaxed text-neutral-700">{step}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-atikon-violet/20 bg-atikon-violet/5 p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-atikon-violet" />
            <p className="text-sm leading-relaxed text-neutral-700">
              Ziel ist kein kurzfristiger Kampagnen-Peak, sondern ein nachhaltiger Lead-Prozess mit
              kontinuierlicher Verbesserung.
            </p>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
