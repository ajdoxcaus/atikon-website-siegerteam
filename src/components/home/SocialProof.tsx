import { testimonials } from "../../data/content";
import { SectionShell } from "../ui/SectionShell";
import { SectionHeading } from "../ui/SectionHeading";
import { TestimonialCard } from "../ui/TestimonialCard";

const miniStats = [
  { value: "–50 %", label: "Abstimmungsaufwand" },
  { value: "+38 %", label: "qualifizierte Anfragen" },
  { value: "12 Wochen", label: "bis zum ersten Go-Live" },
];

const staggerDelays = ["0ms", "120ms", "240ms"];

export function SocialProof() {
  return (
    <SectionShell id="erfolge" bg="white">
      <SectionHeading
        title="Warum Kanzleien auf Atikon setzen."
        subtitle="Erfahrungen aus dem Kanzleialltag – anonymisiert dargestellt."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="animate-fade-up h-full"
            style={{ animationDelay: staggerDelays[i] }}
          >
            <TestimonialCard {...t} />
          </div>
        ))}
      </div>

      {/* Mini stats */}
      <div className="mt-14 flex flex-wrap items-center justify-center gap-8 lg:gap-14">
        {miniStats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-2xl font-extrabold text-atikon-violet">{s.value}</p>
            <p className="mt-1 text-sm text-neutral-500">{s.label}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
