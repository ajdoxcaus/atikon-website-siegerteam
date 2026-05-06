import {
  ArrowRight,
  BookOpenText,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Megaphone,
  Newspaper,
  Palette,
  Printer,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { SectionShell } from "../components/ui/SectionShell";
import { SectionHeading } from "../components/ui/SectionHeading";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type Benefit = {
  title: string;
  description: string;
};

type FAQ = {
  question: string;
  answer: string;
};

const services: Service[] = [
  {
    icon: Palette,
    title: "Logo",
    description:
      "Professionelles Kanzleilogo mit klarem Wiedererkennungswert fur Website, Print und Social Media.",
  },
  {
    icon: Printer,
    title: "Drucksorten",
    description:
      "Von Briefpapier bis Visitenkarte: ein durchgangiges Erscheinungsbild fur alle Kontaktpunkte.",
  },
  {
    icon: Megaphone,
    title: "Werbemittel",
    description:
      "Roll-ups, Schilder und Materialien im Kanzleidesign fur Events, Recruiting und Mandantenbindung.",
  },
  {
    icon: Newspaper,
    title: "Gedruckte Steuernews",
    description:
      "Regelmassiger Kontakt mit Ihren Mandanten durch aktuelle Fachinfos im eigenen Markenlook.",
  },
  {
    icon: ClipboardCheck,
    title: "Checkliste zum Jahreswechsel",
    description:
      "Praktische Arbeitshilfe fur Mandanten mit hohem Nutzwert und starkem Markenbezug.",
  },
  {
    icon: BookOpenText,
    title: "Steuerinfo",
    description:
      "Ganzjahresratgeber im Kanzleidesign fur mehr Sichtbarkeit, Vertrauen und Entlastung im Alltag.",
  },
];

const benefits: Benefit[] = [
  {
    title: "Markenbild aus einem Guss",
    description:
      "Ihr Kanzleilogo zieht sich durch Website, Drucksorten, Steuernews und Werbemittel.",
  },
  {
    title: "Mehr Wiedererkennung",
    description:
      "Je haufiger Mandanten und Bewerber Ihre Marke sehen, desto starker verankert sie sich.",
  },
  {
    title: "Professioneller Auftritt",
    description:
      "Klares Design transportiert Fachkompetenz und schafft Vertrauen auf den ersten Blick.",
  },
  {
    title: "Kontinuierliche Mandantenkommunikation",
    description:
      "Regelmassige News und Tipps zeigen Praxistransparenz und halten Ihre Kanzlei im Gesprach.",
  },
];

const faqs: FAQ[] = [
  {
    question: "Welchen Zweck verfolgt professionelles Grafikdesign?",
    answer:
      "Es macht Ihre Kanzlei sichtbar und unverwechselbar. Einheitliches Design uber alle Medien starkt Marke, Vertrauen und Weiterempfehlung.",
  },
  {
    question: "Welche Leistungen umfasst Content & Marketing bei Atikon?",
    answer:
      "Von Logo und Drucksorten uber Steuernews bis zu Werbemitteln: alle Bausteine werden auf Ihre Kanzlei und Zielgruppe abgestimmt.",
  },
  {
    question: "Warum ist das fur Kanzleien relevant?",
    answer:
      "Mandanten erwarten klare Kommunikation und Verlasslichkeit. Ein konsistenter Auftritt erleichtert Orientierung und unterstutzt Mandantenbindung.",
  },
];

const trustPoints = [
  { icon: Users, label: "Alles aus einer Hand fur Steuerkanzleien" },
  { icon: ShieldCheck, label: "Konsistentes Kanzleidesign in allen Medien" },
  { icon: BookOpenText, label: "Regelmassige Inhalte fur Mandantenbindung" },
];

export function ContentMarketingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="container-max py-16 sm:py-20 lg:py-28 xl:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <div className="animate-fade-up max-w-xl">
              <Badge variant="violet" size="sm">
                Modul im taxHub
              </Badge>
              <h1 className="mt-6 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.08] font-extrabold tracking-tight">
                <span className="text-atikon-black">Content & Marketing</span>
                <br />
                <span className="text-atikon-orange">im taxHub</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-neutral-600 max-w-md">
                Professionelles Grafikdesign und relevante Kanzleiinhalte fur
                alle Kontaktpunkte - von Print bis digital.
              </p>
              <p className="mt-4 text-base leading-relaxed text-neutral-500 max-w-md">
                So bleibt Ihre Kanzlei sichtbar, nahbar und wiedererkennbar -
                bei Mandanten und Bewerbern.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button to="#termin" variant="primary" size="md">
                  Kostenloses Expertengesprach
                  <ArrowRight size={18} />
                </Button>
                <Button to="/social-media" variant="secondary" size="md">
                  <CalendarCheck size={16} />
                  Social Media ansehen
                </Button>
              </div>
            </div>

            <div
              className="animate-fade-up relative"
              style={{ animationDelay: "200ms" }}
              aria-hidden="true"
            >
              <ContentVisual />
            </div>
          </div>
        </div>
      </section>

      <div className="animate-fade-up border-y border-neutral-100 bg-neutral-50">
        <div className="container-max py-5">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustPoints.map((tp) => (
              <li key={tp.label} className="flex items-center gap-2 text-sm text-neutral-500">
                <tp.icon size={15} className="text-atikon-violet/60" />
                {tp.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <SectionShell id="leistungen" bg="white">
        <SectionHeading
          title="Leistungen fur Content & Marketing"
          subtitle="Alle zentralen Grafikdesign- und Content-Bausteine fur einen modernen, einheitlichen Kanzleiauftritt."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="h-full animate-fade-up" hover>
                <div className="flex h-full flex-col">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-atikon-violet/10 text-atikon-violet">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 text-lg">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </SectionShell>

      <SectionShell bg="neutral">
        <SectionHeading
          title="Ihr Nutzen"
          subtitle="So unterstutzt ein konsistenter Content- und Designauftritt Ihr Kanzleiwachstum."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="animate-fade-up rounded-xl border border-neutral-200 bg-white p-6"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-atikon-violet"
                />
                <div>
                  <h3 className="text-base font-bold text-atikon-black">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell bg="white">
        <SectionHeading
          title="Haufige Fragen"
          subtitle="Kurz beantwortet: was Content & Marketing fur Ihre Kanzlei bringt."
        />
        <div className="mx-auto grid max-w-4xl gap-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-xl border border-neutral-200 p-6">
              <h3 className="text-base font-bold text-atikon-black">{faq.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </SectionShell>
    </>
  );
}

function ContentVisual() {
  return (
    <div className="relative">
      <div className="rounded-2xl border border-neutral-200 bg-white shadow-xl overflow-hidden">
        <div className="flex items-center gap-2 border-b border-neutral-100 bg-neutral-50/80 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          <span className="ml-3 text-[11px] text-neutral-400 font-medium">
            taxHub - Content & Marketing
          </span>
        </div>

        <div className="p-5 sm:p-6">
          <div className="grid grid-cols-2 gap-3">
            {[
              { title: "Logo", status: "Aktiv", tone: "text-atikon-violet bg-atikon-violet/10" },
              { title: "Drucksorten", status: "In Produktion", tone: "text-atikon-orange bg-atikon-orange/10" },
              { title: "Steuernews", status: "Monatlich", tone: "text-atikon-violet bg-atikon-violet/10" },
              { title: "Steuerinfo", status: "Jahrespaket", tone: "text-atikon-orange bg-atikon-orange/10" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-neutral-100 bg-white p-3">
                <p className="text-[11px] text-neutral-400">{item.title}</p>
                <span className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold ${item.tone}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-neutral-100 bg-neutral-50 p-4">
            <p className="text-xs font-semibold text-atikon-violet">Aktuelle Themenplanung</p>
            <div className="mt-2.5 space-y-2">
              {[
                "Steuertipp: Fahrtenbuch korrekt fuhren",
                "Checkliste Jahreswechsel fur Mandanten",
                "Steuerinfo-Update fur Unternehmer",
              ].map((item) => (
                <div key={item} className="rounded-lg border border-neutral-100 bg-white px-3 py-2 text-[11px] text-neutral-600">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
