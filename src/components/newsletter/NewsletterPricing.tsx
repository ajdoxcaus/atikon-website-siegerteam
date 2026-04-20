import { useState } from "react";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  ChevronDown,
  ShieldCheck,
  Clock,
  CreditCard,
} from "lucide-react";
import { newsletterPricing } from "../../data/content";
import { SectionShell } from "../ui/SectionShell";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { DropShape } from "../ui/DropShape";

/* ──────────────────────────────────────────────
   Pricing features
   ────────────────────────────────────────────── */

const included = [
  "Newsletter im Kanzleidesign",
  "Unbegrenzte Vorlagen & Textbausteine",
  "Integrierte Empfängerverwaltung",
  "Live-Statistik & Reporting",
  "DSGVO-konformer Versand",
  "DATEV-Anbindung verfügbar",
  "Persönlicher Support",
];

/* ──────────────────────────────────────────────
   FAQ
   ────────────────────────────────────────────── */

const faqs: { q: string; a: string }[] = [
  {
    q: "Muss ich etwas installieren?",
    a: "Nein. Das Newslettersystem läuft komplett im Browser – ohne Download, ohne IT-Aufwand. Sie brauchen nur einen Internetzugang.",
  },
  {
    q: "Ist das DSGVO-konform?",
    a: "Ja. Double-Opt-in, Abmeldelink und Datenverarbeitung in der EU sind fest integriert. Ihre Mandanten-Daten bleiben in sicheren Händen.",
  },
  {
    q: "Können wir eigene Kanzleinews ergänzen?",
    a: "Selbstverständlich. Sie können eigene Textbausteine anlegen oder die fertigen Steuer-Themen aus dem Content-Pool mit eigenen Beiträgen kombinieren.",
  },
  {
    q: "Wie läuft der 14-Tage-Test ab?",
    a: "Sie erhalten sofort Zugang zum vollen System. Innerhalb der Testphase können Sie Vorlagen testen, Probeversendungen durchführen und alle Funktionen ausprobieren – unverbindlich und kostenlos.",
  },
  {
    q: "Gibt es Reporting?",
    a: "Ja. Öffnungsraten, Klickraten und Abonnenten-Entwicklung sehen Sie in Echtzeit – direkt im Dashboard. So wissen Sie sofort, was bei Ihren Mandanten ankommt.",
  },
  {
    q: "Wie fügt sich das in den taxHub ein?",
    a: "Der Newsletter ist ein Modul im taxHub. Er verbindet sich nahtlos mit Ihrer Website, dem Content-Pool, dem Lead Management und den Kampagnen-Tools – alles in einem System.",
  },
];

/* ──────────────────────────────────────────────
   Export
   ────────────────────────────────────────────── */

export function NewsletterPricing() {
  return (
    <>
      <PricingSection />
      <TrialSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}

/* ─────────────── 1. PRICING ─────────────── */

function PricingSection() {
  return (
    <SectionShell id="preise" bg="white" spacing="lg">
      <SectionHeading
        title="Transparent und fair."
        subtitle="Keine versteckten Kosten, keine Mindestlaufzeit für den Test."
      />

      <div className="mx-auto max-w-lg animate-fade-up">
        <div className="rounded-2xl border-2 border-atikon-violet/15 bg-white p-8 lg:p-10 shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-wider text-atikon-violet/60">
            Newslettersystem
          </p>

          {/* Monthly price */}
          <div className="mt-5 flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-atikon-black">
              ab € {newsletterPricing.monthly},–
            </span>
            <span className="text-neutral-500">
              / {newsletterPricing.monthlySuffix}
            </span>
          </div>

          {/* Setup price */}
          <p className="mt-1.5 text-sm text-neutral-500">
            {newsletterPricing.licenseSuffix}:{" "}
            <span className="font-semibold text-neutral-700">
              € {newsletterPricing.license},–
            </span>
          </p>

          <hr className="my-6 border-neutral-200" />

          <ul className="space-y-3">
            {included.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-neutral-700"
              >
                <Check
                  size={16}
                  className="mt-0.5 shrink-0 text-atikon-orange"
                />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="#testen" variant="primary" size="md">
              14 Tage kostenlos testen
              <ArrowRight size={18} />
            </Button>
            <Button to="#termin" variant="secondary" size="md">
              <CalendarCheck size={16} />
              Termin buchen
            </Button>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

/* ─────────────── 2. TRIAL ─────────────── */

function TrialSection() {
  return (
    <SectionShell id="testen" bg="neutral">
      <div className="mx-auto max-w-2xl text-center animate-fade-up">
        <Badge variant="orange" size="md">
          Kostenlos ausprobieren
        </Badge>

        <h2 className="mt-6 text-atikon-black">
          14 Tage kostenlos testen.
        </h2>

        <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
          Voller Funktionsumfang, keine Kreditkarte, keine Verpflichtung.
          Testen Sie in Ruhe, ob das System zu Ihrer Kanzlei passt.
        </p>

        {/* Risk reducers */}
        <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm text-neutral-500">
          <span className="flex items-center gap-2">
            <Clock size={15} className="text-atikon-violet/60" />
            Zugang in wenigen Minuten
          </span>
          <span className="flex items-center gap-2">
            <CreditCard size={15} className="text-atikon-violet/60" />
            Keine Zahlungsdaten nötig
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck size={15} className="text-atikon-violet/60" />
            Endet automatisch
          </span>
        </div>

        <div className="mt-8">
          <Button to="#testen" variant="primary" size="lg">
            Jetzt kostenlos starten
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </SectionShell>
  );
}

/* ─────────────── 3. FAQ ─────────────── */

function FAQSection() {
  return (
    <SectionShell id="faq" bg="white">
      <SectionHeading
        title="Häufige Fragen."
        subtitle="Alles, was Sie vor dem Start wissen sollten."
      />

      <div className="mx-auto max-w-2xl space-y-3">
        {faqs.map((item, i) => (
          <FAQItem key={i} question={item.q} answer={item.a} />
        ))}
      </div>
    </SectionShell>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-neutral-100 bg-neutral-50 transition-shadow hover:shadow-sm">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-atikon-black">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-neutral-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-200 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-sm text-neutral-600 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── 4. FINAL CTA ─────────────── */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-atikon-violet">
      <DropShape
        color="orange"
        size="lg"
        className="absolute -top-10 right-16 opacity-15 rotate-45"
      />
      <DropShape
        color="orange"
        size="md"
        className="absolute bottom-8 left-12 opacity-10 -rotate-45"
      />

      <div className="container-max py-20 lg:py-28 text-center relative z-10">
        <h2 className="text-white text-[clamp(1.35rem,3.2vw,2.25rem)] leading-tight font-extrabold max-w-3xl mx-auto">
          Testen Sie 14 Tage, wie strukturierte Mandantenkommunikation in
          Ihrer Kanzlei wirklich aussieht.
        </h2>
        <p className="mt-4 text-white/60 text-lg max-w-lg mx-auto">
          Kein Risiko, kein Aufwand – einfach ausprobieren.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to="#testen" variant="primary" size="lg">
            14 Tage kostenlos testen
            <ArrowRight size={20} />
          </Button>
          <a
            href="#termin"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-10 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10 hover:border-white/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <CalendarCheck size={18} />
            Termin buchen
          </a>
        </div>
      </div>
    </section>
  );
}
