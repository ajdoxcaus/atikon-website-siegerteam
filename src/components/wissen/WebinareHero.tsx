import { Video } from "lucide-react";
import { Badge } from "../ui/Badge";

export function WebinareHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-max py-16 sm:py-20 lg:py-28 xl:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="animate-fade-up max-w-xl">
            <Badge variant="violet" size="sm">
              <Video size={12} className="mr-1" />
              Gipfelst\u00fcrmer-Webinare
            </Badge>

            <h1 className="mt-6 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.08] font-extrabold tracking-tight">
              <span className="text-atikon-black">Webinare f\u00fcr </span>
              <span className="text-atikon-orange">Steuerberater.</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-neutral-600 max-w-md">
              Kostenlose Gipfelst\u00fcrmer-Webinare bringen frische Ideen und
              neue Perspektiven in Ihre Steuerkanzlei. Kompakt, praxisnah und
              bequem von Ihrem Bildschirm aus.
            </p>
          </div>

          <div
            className="animate-fade-up relative"
            style={{ animationDelay: "200ms" }}
            aria-hidden="true"
          >
            <WebinarVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function WebinarVisual() {
  const avatarColors = ["#410098", "#FA4616", "#FFBB3F", "#410098", "#FA4616"];

  return (
    <div className="relative mx-auto max-w-md">
      <svg viewBox="0 0 420 320" className="w-full h-auto" fill="none">
        <defs>
          <radialGradient id="wb-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#410098" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#410098" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="210" cy="160" rx="200" ry="150" fill="url(#wb-glow)" />

        {/* Laptop base */}
        <rect x="50" y="40" width="320" height="200" rx="12" fill="white" stroke="#410098" strokeWidth="1.5" />
        <rect x="50" y="40" width="320" height="30" rx="12" fill="#410098" opacity="0.05" />

        {/* Window controls */}
        <circle cx="72" cy="55" r="4" fill="#FA4616" opacity="0.5" />
        <circle cx="86" cy="55" r="4" fill="#FFBB3F" opacity="0.5" />
        <circle cx="100" cy="55" r="4" fill="#22c55e" opacity="0.5" />

        {/* Title bar */}
        <rect x="130" y="50" width="100" height="10" rx="5" fill="#410098" opacity="0.1" />

        {/* Live badge */}
        <rect x="310" y="48" width="40" height="14" rx="7" fill="#22c55e" opacity="0.15" />
        <circle cx="322" cy="55" r="3" fill="#22c55e" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="330" y="59" fontFamily="'Fira Sans', sans-serif" fontWeight="600" fontSize="8" fill="#22c55e">
          LIVE
        </text>

        {/* Speaker area */}
        <rect x="70" y="80" width="180" height="140" rx="8" fill="#410098" opacity="0.04" />
        <circle cx="160" cy="130" r="28" fill="#410098" opacity="0.1" />
        <circle cx="160" cy="125" r="12" fill="#410098" opacity="0.2" />
        <rect x="148" y="142" width="24" height="16" rx="8" fill="#410098" opacity="0.15" />

        {/* Slide content */}
        <rect x="270" y="85" width="80" height="55" rx="6" fill="#410098" opacity="0.06" stroke="#410098" strokeWidth="0.5" opacity="0.2" />
        <rect x="280" y="95" width="60" height="5" rx="2.5" fill="#410098" opacity="0.15" />
        <rect x="280" y="105" width="45" height="5" rx="2.5" fill="#410098" opacity="0.1" />
        <rect x="280" y="115" width="55" height="5" rx="2.5" fill="#410098" opacity="0.1" />
        <rect x="280" y="125" width="35" height="5" rx="2.5" fill="#FA4616" opacity="0.2" />

        {/* Chat messages */}
        <rect x="270" y="150" width="80" height="60" rx="6" fill="white" stroke="#e5e5e5" strokeWidth="1" />
        <rect x="280" y="158" width="50" height="8" rx="4" fill="#410098" opacity="0.08" />
        <rect x="280" y="172" width="60" height="8" rx="4" fill="#410098" opacity="0.06" />
        <rect x="280" y="186" width="40" height="8" rx="4" fill="#410098" opacity="0.04" />

        {/* Participant avatars */}
        {avatarColors.map((color, i) => (
          <g key={i} opacity="0">
            <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin={`${0.5 + i * 0.15}s`} fill="freeze" />
            <circle cx={100 + i * 30} cy="195" r="11" fill={color} opacity="0.2" />
            <circle cx={100 + i * 30} cy="192" r="5" fill={color} opacity="0.3" />
          </g>
        ))}

        {/* Laptop keyboard */}
        <path d="M30 240 L50 240 L50 240 L370 240 L390 240 L390 255 Q390 265 380 265 L40 265 Q30 265 30 255 Z" fill="#410098" opacity="0.04" stroke="#410098" strokeWidth="0.5" opacity="0.15" />

        {/* Signal waves */}
        {[0, 1, 2].map((i) => (
          <circle key={`wave-${i}`} cx="340" cy="55" r="8" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0">
            <animate attributeName="r" from="8" to="25" dur="2s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0" dur="2s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
    </div>
  );
}
