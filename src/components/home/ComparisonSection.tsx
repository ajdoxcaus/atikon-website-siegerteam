import { Check, X } from "lucide-react";
import { comparisonData } from "../../data/content";
import { SectionShell } from "../ui/SectionShell";
import { SectionHeading } from "../ui/SectionHeading";

export function ComparisonSection() {
  return (
    <SectionShell id="vergleich" bg="white">
      <SectionHeading
        title="Plattform statt Tool-Wildwuchs."
        subtitle="Warum eine integrierte Lösung den Unterschied macht."
      />

      <div className="grid gap-6 lg:grid-cols-2 max-w-4xl mx-auto">
        {/* Without */}
        <div className="rounded-[var(--radius-md)] bg-neutral-100 p-8">
          <h3 className="text-lg text-neutral-700">{comparisonData.without.title}</h3>
          <ul className="mt-5 space-y-3.5">
            {comparisonData.without.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-neutral-500">
                <X size={16} className="shrink-0 mt-0.5 text-neutral-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* With */}
        <div className="rounded-[var(--radius-md)] bg-white p-8 border-l-4 border-l-atikon-violet shadow-[var(--shadow-card)]">
          <h3 className="text-lg">{comparisonData.with.title}</h3>
          <ul className="mt-5 space-y-3.5">
            {comparisonData.with.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-neutral-700">
                <Check size={16} className="shrink-0 mt-0.5 text-atikon-orange" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
