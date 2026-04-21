import { Lightbulb } from "lucide-react";
import { Badge } from "../ui/Badge";

export function MarketingtippsHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-max py-16 sm:py-20 lg:py-28 xl:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="animate-fade-up max-w-xl">
            <Badge variant="violet" size="sm">
              <Lightbulb size={12} className="mr-1" />
              Wissensportal
            </Badge>

            <h1 className="mt-6 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.08] font-extrabold tracking-tight">
              <span className="text-atikon-black">Marketing&shy;tipps</span>{" "}
              <span className="text-atikon-orange">für Ihre Kanzlei.</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-neutral-600 max-w-md">
              Über 100 sofort umsetzbare Praxistipps für Ihr Kanzleimarketing.
              Blättern Sie durch und holen Sie sich Ihren Wissensvorsprung.
            </p>
          </div>

          <div
            className="animate-fade-up relative"
            style={{ animationDelay: "200ms" }}
            aria-hidden="true"
          >
            <TippsVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function TippsVisual() {
  const cards = [
    { y: 30, title: "Digitalisierung", color: "#410098" },
    { y: 120, title: "Mandantengewinnung", color: "#FA4616" },
    { y: 210, title: "Personalsuche", color: "#FFBB3F" },
    { y: 300, title: "Social Media", color: "#410098" },
  ];

  return (
    <div className="relative mx-auto max-w-md">
      <svg viewBox="0 0 400 380" className="w-full h-auto" fill="none">
        <defs>
          <radialGradient id="tipps-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#410098" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#410098" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="200" cy="190" rx="180" ry="170" fill="url(#tipps-glow)" />

        {/* Lightbulb outline */}
        <circle cx="90" cy="80" r="45" fill="none" stroke="#410098" strokeWidth="1.5" opacity="0.15" />
        <circle cx="90" cy="80" r="30" fill="#410098" opacity="0.06" />
        <line x1="90" y1="125" x2="90" y2="145" stroke="#FFBB3F" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        <line x1="80" y1="130" x2="100" y2="130" stroke="#FFBB3F" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        <line x1="82" y1="138" x2="98" y2="138" stroke="#FFBB3F" strokeWidth="2" strokeLinecap="round" opacity="0.4" />

        {cards.map((card, i) => (
          <g key={card.title} opacity="0">
            <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin={`${i * 0.2}s`} fill="freeze" />
            <rect x="130" y={card.y} width="240" height="68" rx="12" fill="white" stroke={card.color} strokeWidth="1.5" />
            <rect x="146" y={card.y + 16} width="6" height="36" rx="3" fill={card.color} opacity="0.6" />
            <text x="166" y={card.y + 30} fontFamily="'Fira Sans', sans-serif" fontWeight="600" fontSize="13" fill="#1a1a1a">
              {card.title}
            </text>
            <rect x="166" y={card.y + 40} width="120" height="6" rx="3" fill="#e5e5e5" />
            <rect x="166" y={card.y + 52} width="80" height="6" rx="3" fill="#e5e5e5" />
            <circle cx="346" cy={card.y + 34} r="10" fill={card.color} opacity="0.1" />
          </g>
        ))}

        {/* Floating dots */}
        {[
          { cx: 40, cy: 200, r: 4 },
          { cx: 110, cy: 320, r: 3 },
          { cx: 60, cy: 270, r: 5 },
        ].map((dot, i) => (
          <circle key={i} cx={dot.cx} cy={dot.cy} r={dot.r} fill="#410098" opacity="0.12">
            <animate attributeName="opacity" values="0.12;0.25;0.12" dur={`${3 + i}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
    </div>
  );
}
