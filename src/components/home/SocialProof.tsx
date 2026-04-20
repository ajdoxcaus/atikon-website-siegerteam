import { testimonials } from "../../data/content";
import { SectionShell } from "../ui/SectionShell";
import { SectionHeading } from "../ui/SectionHeading";
import { TestimonialCard } from "../ui/TestimonialCard";

export function SocialProof() {
  return (
    <SectionShell id="erfolge" bg="white">
      <SectionHeading
        title="Das sagen unsere Kanzleien"
        subtitle="Über 500 Steuerkanzleien in Deutschland und Österreich vertrauen auf Atikon."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </SectionShell>
  );
}
