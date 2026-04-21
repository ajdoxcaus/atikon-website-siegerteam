import { Quote } from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { Badge } from "../ui/Badge";

type Testimonial = {
  name: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Katharina Schatz",
    quote:
      "Der Zusammenhalt im Team ist bei uns ein großer Pluspunkt. Wir unterstützen uns gegenseitig und stellen uns Herausforderungen gemeinsam. Dabei lernen wir viel voneinander und der Spaß kommt auch nie zu kurz.",
  },
  {
    name: "Denise Sampt",
    quote:
      "An Atikon schätze ich vor allem meinen abwechslungsreichen Aufgabenbereich, wo mir auch viel an Verantwortung übergeben wird. Darüber hinaus natürlich die gute Zusammenarbeit mit meinen Kolleginnen, Kollegen sowie Vorgesetzten. Work-Life-Balance wird im Unternehmen zu 100 % gelebt und nicht nur geschrieben.",
  },
  {
    name: "Tanja Philipps",
    quote:
      "Bei Atikon darf man sein, wer man ist, ohne sich verstellen zu müssen. Hier werden das individuelle Wachstum und die Entwicklung aller Mitarbeiterinnen und Mitarbeiter gezielt gefördert. Als Teil eines motivierten und talentierten Teams arbeitet man hier an gemeinsamen Zielen und an einer erfolgreichen Zukunft.",
  },
];

export function KarriereTestimonials() {
  return (
    <SectionShell id="team-stimmen" bg="white">
      <div className="mx-auto max-w-2xl text-center">
        <Badge variant="violet" size="sm">
          Das sagen unsere Atikonist:innen
        </Badge>
        <h2 className="mt-5">Arbeiten auf Augenhöhe.</h2>
        <p className="mt-4 text-neutral-600 leading-relaxed">
          Selbstbestimmung und Wertschätzung machen uns als Team aus. Aber hör
          am besten selbst, was unsere Kolleg:innen sagen.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="relative flex flex-col rounded-2xl border border-neutral-200 bg-neutral-50 p-7"
          >
            <Quote
              size={32}
              className="mb-4 text-atikon-violet/15"
            />

            <blockquote className="flex-1 text-sm leading-relaxed text-neutral-700 italic">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="mt-6 flex items-center gap-3 border-t border-neutral-200 pt-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-atikon-violet text-sm font-bold text-white">
                {t.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <span className="text-sm font-semibold text-atikon-black">
                {t.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
