import { SectionShell } from "../ui/SectionShell";

const STATS = [
  { value: "25+", label: "Jahre Erfahrung", accent: "text-atikon-orange" },
  { value: "80+", label: "Spezialist:innen im Team", accent: "text-atikon-yellow" },
  { value: "1.500+", label: "betreute Kanzleien", accent: "text-atikon-orange" },
  { value: "6–8", label: "Wochen Projektdauer", accent: "text-atikon-yellow" },
];

export function WarumAtikonZahlen() {
  return (
    <SectionShell bg="violet">
      <div className="text-center mb-12">
        <h2 className="text-white">Atikon in Zahlen</h2>
        <p className="mt-4 text-lg text-white/70">
          Fakten, die für sich sprechen.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className={`text-4xl font-extrabold lg:text-5xl ${stat.accent}`}>
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-white/70 lg:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
