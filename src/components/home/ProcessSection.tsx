import { processSteps } from "../../data/content";
import { SectionShell } from "../ui/SectionShell";
import { SectionHeading } from "../ui/SectionHeading";

const staggerDelays = ["0ms", "100ms", "200ms", "300ms"];

export function ProcessSection() {
  return (
    <SectionShell id="wissen" bg="neutral">
      <SectionHeading
        title="So starten Sie im taxHub."
        subtitle="Vier klare Schritte – wir kümmern uns um den Rest."
      />

      <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {/* Connecting line (desktop only) */}
        <div
          className="hidden lg:block absolute top-9 left-[12%] right-[12%] h-0.5 bg-neutral-200"
          aria-hidden="true"
        />

        {processSteps.map((s, i) => (
          <div
            key={s.step}
            className="animate-fade-up relative rounded-xl bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
            style={{ animationDelay: staggerDelays[i] }}
          >
            {/* Step number (teardrop) */}
            <div className="relative z-10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-[50%_50%_50%_0] bg-atikon-violet text-white text-lg font-extrabold">
              {s.step}
            </div>

            <h3 className="text-center text-base font-semibold text-atikon-black">
              {s.title}
            </h3>
            <p className="mt-2 text-center text-sm text-neutral-600 leading-relaxed">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
