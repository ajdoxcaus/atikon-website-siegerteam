import { Check, X, ArrowRight } from "lucide-react";
import { comparisonData } from "../../data/content";
import { SectionShell } from "../ui/SectionShell";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

export function ComparisonSection() {
  return (
    <SectionShell id="vergleich" bg="neutral">
      <SectionHeading
        title="Plattform statt Flickenteppich."
        subtitle="Warum eine integrierte Lösung den Unterschied macht."
      />

      <div className="grid gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
        {/* Without */}
        <div className="relative rounded-2xl bg-neutral-100 border border-neutral-200/60 p-8 lg:p-10">
          {/* Subtle "noise" decoration */}
          <div className="absolute inset-0 rounded-2xl opacity-[0.03] pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_8px,currentColor_8px,currentColor_9px)]" />

          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Vorher
          </p>
          <h3 className="mt-2 text-xl text-neutral-600">
            {comparisonData.without.title}
          </h3>

          <ul className="mt-6 space-y-4">
            {comparisonData.without.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-neutral-500">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-200/80">
                  <X size={12} className="text-neutral-400" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* With */}
        <div className="rounded-2xl bg-white border border-neutral-200/60 p-8 lg:p-10 shadow-lg ring-1 ring-atikon-violet/10">
          <p className="text-xs font-semibold uppercase tracking-wider text-atikon-orange">
            Nachher
          </p>
          <h3 className="mt-2 text-xl">
            {comparisonData.with.title}
          </h3>

          <ul className="mt-6 space-y-4">
            {comparisonData.with.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-neutral-700">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-atikon-orange/10">
                  <Check size={12} className="text-atikon-orange" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button to="#termin" variant="primary" size="sm">
              Jetzt umsteigen
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
