import { Quote } from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { SectionHeading } from "../ui/SectionHeading";

const TESTIMONIALS = [
  {
    text: "Sehr gute Referenten. Das Webinar ist ein super Einstieg in das Thema Social Media.",
    name: "Judith Lazar",
  },
  {
    text: "Wirklich eine tolle Veranstaltung mit vielen hilfreichen Tipps und Tricks!",
    name: "Nele Carstens",
  },
  {
    text: "Sehr gut und praxisnahe gestaltet! Wertvolle Tipps und Tricks für Postings ohne großen Zeitaufwand.",
    name: "Gerda Huber",
  },
  {
    text: "Es war super und praxisorientiert, was ich immer sehr gerne mag, nicht zu viel Theorie.",
    name: "Teilnehmer:in",
  },
  {
    text: "Sehr informativ, gute Anregungen und Empfehlungen. Vielen Dank.",
    name: "Teilnehmer:in",
  },
  {
    text: "Das Webinar war gut strukturiert und verständlich präsentiert. Klares Verständnis des Themas erhalten.",
    name: "Teilnehmer:in",
  },
  {
    text: "Kurz und knapp für den ersten Einblick alle erforderlichen Informationen erhalten.",
    name: "Teilnehmer:in",
  },
  {
    text: "Ansprechend, straff und informativ und in klaren Worten. Hat sich auf jeden Fall gelohnt!",
    name: "Teilnehmer:in",
  },
];

const COLORS = [
  "bg-atikon-violet/10 text-atikon-violet",
  "bg-atikon-orange/10 text-atikon-orange",
  "bg-amber-100 text-amber-700",
  "bg-emerald-100 text-emerald-700",
];

export function WebinareTestimonials() {
  return (
    <SectionShell bg="white">
      <SectionHeading
        title="Das sagen Teilnehmende"
        subtitle="Feedback aus unseren Gipfelstürmer-Webinaren."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className="rounded-xl border border-neutral-200 bg-neutral-50 p-5 transition-all hover:shadow-md hover:-translate-y-0.5"
          >
            <Quote size={16} className="text-atikon-violet/30 mb-3" />
            <p className="text-sm leading-relaxed text-neutral-700 italic">
              {t.text}
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold ${COLORS[i % COLORS.length]}`}
              >
                {t.name[0]}
              </div>
              <span className="text-xs font-semibold text-neutral-500">
                {t.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
