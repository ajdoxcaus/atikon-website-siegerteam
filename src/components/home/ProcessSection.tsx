import { processSteps } from "../../data/content";
import { SectionShell } from "../ui/SectionShell";
import { SectionHeading } from "../ui/SectionHeading";

export function ProcessSection() {
  return (
    <SectionShell id="prozess" bg="white">
      <SectionHeading
        title="In 5 Schritten zum Vorsprung."
        subtitle="Von der ersten Idee bis zum laufenden Betrieb – so starten Sie mit dem taxHub."
      />

      <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        {/* Connecting line (desktop only) */}
        <div
          className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-neutral-200"
          aria-hidden="true"
        />

        {processSteps.map((s) => (
          <div key={s.step} className="relative text-center">
            {/* Step number */}
            <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-[50%_50%_50%_0] bg-atikon-violet text-white text-lg font-extrabold">
              {s.step}
            </div>

            <h3 className="mt-4 text-base">{s.title}</h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
