import { TrendingUp, Users, Building2, DollarSign } from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { Badge } from "../ui/Badge";

const years = [
  {
    label: "Jahr 1",
    sublabel: "Pilotphase",
    revenue: "158 Tsd. €",
    kanzleien: "~\u00a040",
    seats: "179",
    ebitda: "–167 Tsd. €",
    ebitdaColor: "text-red-500",
    barHeight: "20%",
  },
  {
    label: "Jahr 2",
    sublabel: "Skalierung",
    revenue: "434 Tsd. €",
    kanzleien: "~\u00a0123",
    seats: "637",
    ebitda: "+84 Tsd. €",
    ebitdaColor: "text-emerald-600",
    barHeight: "45%",
  },
  {
    label: "Jahr 3",
    sublabel: "Wachstum",
    revenue: "1.132 Tsd. €",
    kanzleien: "~\u00a0301",
    seats: "1.805",
    ebitda: "+732 Tsd. €",
    ebitdaColor: "text-emerald-600",
    barHeight: "100%",
  },
];

const highlights = [
  {
    icon: Building2,
    value: "301",
    label: "Aktive Kanzleien",
    sublabel: "Ende Jahr 3",
  },
  {
    icon: Users,
    value: "1.805",
    label: "Aktive Seats",
    sublabel: "Ende Jahr 3",
  },
  {
    icon: DollarSign,
    value: "1,1 Mio. €",
    label: "Umsatz gesamt",
    sublabel: "Jahr 3",
  },
  {
    icon: TrendingUp,
    value: "732 Tsd. €",
    label: "EBITDA",
    sublabel: "Jahr 3",
  },
];

export function AIStudioNumbers() {
  return (
    <SectionShell id="kennzahlen" bg="white" spacing="lg">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        {/* Left: headline + highlight cards */}
        <div className="animate-fade-up">
          <Badge variant="orange" size="sm">
            Business Case
          </Badge>

          <h2 className="mt-5 text-atikon-black leading-snug">
            Die Zahlen hinter
            <br />
            <span className="text-atikon-violet">dem AI Studio.</span>
          </h2>

          <p className="mt-5 text-neutral-600 leading-relaxed max-w-md">
            36-Monats-Projektion auf Basis konservativer Annahmen: 60 %
            Pilot-Conversion, 10 % jährliche Churn-Rate, organisches
            Seat-Wachstum je Kanzlei.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-xl border border-neutral-100 bg-neutral-50 p-4"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-atikon-violet/8 text-atikon-violet mb-3">
                  <h.icon size={16} />
                </div>
                <p className="text-2xl font-extrabold text-atikon-black">{h.value}</p>
                <p className="mt-0.5 text-sm font-semibold text-neutral-700">{h.label}</p>
                <p className="text-xs text-neutral-400">{h.sublabel}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Year comparison */}
        <div className="animate-fade-up" style={{ animationDelay: "150ms" }}>
          <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
            <div className="border-b border-neutral-100 bg-neutral-50/60 px-6 py-4">
              <h3 className="text-sm font-semibold text-neutral-700">
                GuV-Entwicklung (Jahr 1–3)
              </h3>
            </div>

            <div className="p-6 space-y-6">
              {years.map((y, i) => (
                <div key={y.label}>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-sm font-bold text-atikon-black">{y.label}</span>
                      <span className="ml-2 text-xs text-neutral-400">{y.sublabel}</span>
                    </div>
                    <span className={`text-sm font-bold ${y.ebitdaColor}`}>
                      EBITDA {y.ebitda}
                    </span>
                  </div>

                  {/* Bar */}
                  <div className="relative h-10 w-full rounded-lg bg-neutral-50 overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 rounded-lg bg-gradient-to-r from-atikon-violet to-atikon-violet/70 transition-all duration-700"
                      style={{ width: y.barHeight }}
                    />
                    <div className="absolute inset-0 flex items-center px-3">
                      <span className="text-xs font-semibold text-white mix-blend-difference">
                        Umsatz: {y.revenue}
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 flex gap-6 text-xs text-neutral-500">
                    <span>
                      <strong className="text-neutral-700">{y.kanzleien}</strong> Kanzleien
                    </span>
                    <span>
                      <strong className="text-neutral-700">{y.seats}</strong> Seats
                    </span>
                  </div>

                  {i < years.length - 1 && (
                    <hr className="mt-5 border-neutral-100" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 text-xs text-neutral-400 text-center">
            Alle Angaben sind Planwerte (Base-Szenario). Keine Garantie.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
