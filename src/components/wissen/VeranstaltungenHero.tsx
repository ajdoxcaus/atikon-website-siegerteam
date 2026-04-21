import { CalendarDays } from "lucide-react";
import { Badge } from "../ui/Badge";

export function VeranstaltungenHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-max py-16 sm:py-20 lg:py-28 xl:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="animate-fade-up max-w-xl">
            <Badge variant="violet" size="sm">
              <CalendarDays size={12} className="mr-1" />
              Events & Messen
            </Badge>

            <h1 className="mt-6 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.08] font-extrabold tracking-tight">
              <span className="text-atikon-black">Veran&shy;staltungen </span>
              <span className="text-atikon-orange">für Steuerberater.</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-neutral-600 max-w-md">
              Treffen Sie Atikon auf Messen, Kongressen und Fachtagungen.
              Entdecken Sie aktuelle Trends und knüpfen Sie wertvolle Kontakte.
            </p>
          </div>

          <div
            className="animate-fade-up relative"
            style={{ animationDelay: "200ms" }}
            aria-hidden="true"
          >
            <EventVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function EventVisual() {
  const days = [
    [null, null, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, null, null, null],
  ];
  const highlighted = [4, 5, 22, 23, 28];

  return (
    <div className="relative mx-auto max-w-sm">
      <svg viewBox="0 0 360 380" className="w-full h-auto" fill="none">
        <defs>
          <radialGradient id="ev-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#410098" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#410098" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="180" cy="190" rx="170" ry="170" fill="url(#ev-glow)" />

        {/* Calendar frame */}
        <rect x="30" y="30" width="300" height="320" rx="16" fill="white" stroke="#410098" strokeWidth="1.5" />

        {/* Header bar */}
        <rect x="30" y="30" width="300" height="55" rx="16" fill="#410098" />
        <rect x="30" y="70" width="300" height="15" fill="#410098" />
        <text x="180" y="62" textAnchor="middle" fontFamily="'Fira Sans', sans-serif" fontWeight="700" fontSize="18" fill="white">
          Mai 2026
        </text>

        {/* Day headers */}
        {["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"].map((d, i) => (
          <text
            key={d}
            x={62 + i * 40}
            y="108"
            textAnchor="middle"
            fontFamily="'Fira Sans', sans-serif"
            fontWeight="600"
            fontSize="10"
            fill="#410098"
            opacity="0.5"
          >
            {d}
          </text>
        ))}

        {/* Days grid */}
        {days.map((week, wi) =>
          week.map((day, di) => {
            if (day === null) return null;
            const x = 62 + di * 40;
            const y = 135 + wi * 40;
            const isHighlighted = highlighted.includes(day);
            return (
              <g key={`${wi}-${di}`}>
                {isHighlighted && (
                  <circle cx={x} cy={y} r="15" fill="#FA4616" opacity="0.15">
                    <animate attributeName="opacity" values="0.15;0.25;0.15" dur="3s" repeatCount="indefinite" />
                  </circle>
                )}
                <circle
                  cx={x}
                  cy={y}
                  r="14"
                  fill={isHighlighted ? "#FA4616" : "transparent"}
                  opacity={isHighlighted ? 1 : 0}
                />
                <text
                  x={x}
                  y={y + 4}
                  textAnchor="middle"
                  fontFamily="'Fira Sans', sans-serif"
                  fontWeight={isHighlighted ? "700" : "400"}
                  fontSize="12"
                  fill={isHighlighted ? "white" : "#525252"}
                >
                  {day}
                </text>
              </g>
            );
          }),
        )}

        {/* Event pins */}
        <circle cx="310" cy="155" r="6" fill="#FFBB3F" opacity="0" >
          <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="0.5s" fill="freeze" />
        </circle>
        <circle cx="310" cy="255" r="6" fill="#FFBB3F" opacity="0" >
          <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="0.8s" fill="freeze" />
        </circle>
      </svg>
    </div>
  );
}
