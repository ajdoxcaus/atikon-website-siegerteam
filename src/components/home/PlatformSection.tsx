import {
  LogIn,
  Palette,
  Workflow,
  CalendarCheck,
  ArrowRight,
  Globe,
  Mail,
  Sparkles,
  Target,
  Share2,
  FileText,
} from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

const benefits = [
  {
    icon: LogIn,
    title: "Ein Zugang",
    description:
      "Alle Module über ein Login. Kein Jonglieren zwischen Tools und Anbietern.",
  },
  {
    icon: Palette,
    title: "Ein Markenauftritt",
    description:
      "Ihr Kanzleidesign zieht sich durch Website, Newsletter und Social Media.",
  },
  {
    icon: Workflow,
    title: "Ein Datenfluss",
    description:
      "Leads, Statistiken und Content laufen in einem System zusammen.",
  },
  {
    icon: CalendarCheck,
    title: "Ein Weg zum Termin",
    description:
      "Von der ersten Anzeige bis zur Terminbuchung – alles in einer Pipeline.",
  },
];

const platformModules = [
  { icon: Globe, label: "Website" },
  { icon: Mail, label: "Newsletter" },
  { icon: Sparkles, label: "AI Studio" },
  { icon: Target, label: "Lead Management" },
  { icon: Share2, label: "Social Media" },
  { icon: FileText, label: "Content" },
];

export function PlatformSection() {
  return (
    <SectionShell id="plattform" bg="white">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <Badge variant="violet" size="sm">taxHub Plattform</Badge>

        <h2 className="mt-5">Ein System statt zehn Einzellösungen.</h2>

        <p className="mt-4 text-neutral-600 leading-relaxed">
          Der taxHub bündelt Website, Content, Newslettersystem, AI Studio,
          Lead Management und Kampagnen in einer Plattform für Steuerkanzleien.
        </p>
      </div>

      {/* Benefit cards */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b) => {
          const Icon = b.icon;
          return (
            <div
              key={b.title}
              className="rounded-xl bg-white p-6 shadow-sm border border-neutral-100 transition-shadow duration-200 hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-atikon-violet/8 text-atikon-violet">
                <Icon size={20} />
              </div>
              <h3 className="text-base font-semibold text-atikon-black">{b.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {b.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Platform mockup */}
      <div className="mt-14 animate-fade-up" aria-hidden="true">
        <PlatformMockup />
      </div>

      {/* CTA */}
      <div className="mt-10 text-center">
        <Button to="#module" variant="secondary" size="md">
          Module entdecken
          <ArrowRight size={18} />
        </Button>
      </div>
    </SectionShell>
  );
}

function PlatformMockup() {
  const cx = 480;
  const cy = 220;
  const coreR = 68;

  const nodes = [
    { ...platformModules[0], x: 130, y: 100, r: 50, delay: 0 },
    { ...platformModules[1], x: 830, y: 100, r: 50, delay: 0.3 },
    { ...platformModules[2], x: 180, y: 340, r: 55, delay: 0.6 },
    { ...platformModules[3], x: 780, y: 340, r: 50, delay: 0.9 },
    { ...platformModules[4], x: 60, y: 220, r: 47, delay: 1.2 },
    { ...platformModules[5], x: 900, y: 220, r: 47, delay: 1.5 },
  ];

  return (
    <div className="relative mx-auto max-w-4xl">
      <svg
        viewBox="-10 0 980 440"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="bg-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#410098" stopOpacity="0.07" />
            <stop offset="100%" stopColor="#410098" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FA4616" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#410098" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#410098" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#410098" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#FA4616" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#410098" stopOpacity="0.5" />
          </linearGradient>

          <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="core-filter" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="16" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <ellipse cx={cx} cy={cy} rx="420" ry="200" fill="url(#bg-glow)" />

        {nodes.map((node) => {
          const dx = node.x - cx;
          const dy = node.y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const dashLen = dist;
          return (
            <g key={node.label}>
              <line
                x1={cx}
                y1={cy}
                x2={node.x}
                y2={node.y}
                stroke="url(#line-grad)"
                strokeWidth="1.5"
                strokeDasharray={`${dashLen}`}
                strokeDashoffset={dashLen}
                opacity="0.6"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from={dashLen}
                  to="0"
                  dur="1.2s"
                  begin={`${node.delay}s`}
                  fill="freeze"
                />
              </line>

              <circle cx={node.x} cy={node.y} r={dist * 0.06} fill="#410098" opacity="0">
                <animate
                  attributeName="opacity"
                  values="0;0.12;0"
                  dur="3s"
                  begin={`${node.delay + 1}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="r"
                  values={`${dist * 0.04};${dist * 0.08};${dist * 0.04}`}
                  dur="3s"
                  begin={`${node.delay + 1}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}

        {nodes.map((node, i) => {
          const next = nodes[(i + 1) % nodes.length];
          return (
            <line
              key={`cross-${node.label}`}
              x1={node.x}
              y1={node.y}
              x2={next.x}
              y2={next.y}
              stroke="#410098"
              strokeWidth="0.8"
              strokeDasharray="4 6"
              opacity="0"
            >
              <animate
                attributeName="opacity"
                values="0;0.2;0"
                dur="4s"
                begin={`${1.5 + i * 0.4}s`}
                repeatCount="indefinite"
              />
            </line>
          );
        })}

        <circle cx={cx} cy={cy} r={coreR + 30} fill="url(#core-glow)" filter="url(#core-filter)">
          <animate
            attributeName="r"
            values={`${coreR + 20};${coreR + 35};${coreR + 20}`}
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx={cx} cy={cy} r={coreR} fill="#410098" opacity="0.95">
          <animate
            attributeName="r"
            values={`${coreR};${coreR + 3};${coreR}`}
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>

        <text
          x={cx}
          y={cy - 8}
          textAnchor="middle"
          fontFamily="'Fira Sans', sans-serif"
          fontWeight="800"
          fontSize="21"
          fill="white"
          letterSpacing="1"
        >
          taxHub
        </text>
        <text
          x={cx}
          y={cy + 14}
          textAnchor="middle"
          fontFamily="'Fira Sans', sans-serif"
          fontWeight="400"
          fontSize="12"
          fill="white"
          opacity="0.8"
        >
          Marketing & KI
        </text>

        {[0, 1, 2].map((ring) => (
          <circle
            key={`ring-${ring}`}
            cx={cx}
            cy={cy}
            r={coreR + 10}
            fill="none"
            stroke="#FA4616"
            strokeWidth="1"
            opacity="0"
          >
            <animate
              attributeName="r"
              from={coreR + 10}
              to={coreR + 80}
              dur="3s"
              begin={`${ring * 1}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.4;0"
              dur="3s"
              begin={`${ring * 1}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {nodes.map((node) => {
          const Icon = node.icon;
          return (
            <g key={`node-${node.label}`} filter="url(#node-glow)" opacity="0">
              <animate
                attributeName="opacity"
                from="0"
                to="1"
                dur="0.5s"
                begin={`${node.delay + 0.8}s`}
                fill="freeze"
              />

              <circle cx={node.x} cy={node.y} r={node.r} fill="white" stroke="#410098" strokeWidth="1.5" opacity="0.95" />

              <circle cx={node.x} cy={node.y} r={node.r - 2} fill="none" stroke="#410098" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.3">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from={`0 ${node.x} ${node.y}`}
                  to={`360 ${node.x} ${node.y}`}
                  dur="20s"
                  repeatCount="indefinite"
                />
              </circle>

              <foreignObject
                x={node.x - 14}
                y={node.y - 22}
                width="28"
                height="28"
              >
                <div className="flex items-center justify-center w-full h-full text-atikon-violet">
                  <Icon size={24} />
                </div>
              </foreignObject>

              <text
                x={node.x}
                y={node.y + 16}
                textAnchor="middle"
                fontFamily="'Fira Sans', sans-serif"
                fontWeight="600"
                fontSize="11"
                fill="#410098"
              >
                {node.label}
              </text>
            </g>
          );
        })}

        {nodes.map((node, i) => {
          const angle = Math.atan2(node.y - cy, node.x - cx);
          const particleCount = 3;
          return Array.from({ length: particleCount }, (_, j) => {
            const offset = j * (1 / particleCount);
            const pathLength = Math.sqrt((node.x - cx) ** 2 + (node.y - cy) ** 2);
            return (
              <circle key={`particle-${i}-${j}`} r="2" fill="#FA4616" opacity="0">
                <animate
                  attributeName="cx"
                  values={`${cx};${node.x};${cx}`}
                  dur="4s"
                  begin={`${node.delay + 1.5 + offset * 4}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  values={`${cy};${node.y};${cy}`}
                  dur="4s"
                  begin={`${node.delay + 1.5 + offset * 4}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0;0.8;0.8;0"
                  dur="4s"
                  begin={`${node.delay + 1.5 + offset * 4}s`}
                  repeatCount="indefinite"
                />
              </circle>
            );
          });
        })}
      </svg>
    </div>
  );
}
