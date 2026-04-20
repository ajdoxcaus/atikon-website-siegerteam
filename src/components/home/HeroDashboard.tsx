import {
  Globe,
  Target,
  Mail,
  Sparkles,
  BarChart3,
} from "lucide-react";
import { DropShape } from "../ui/DropShape";

type DashboardCard = {
  icon: typeof Globe;
  label: string;
  value: string;
  dotColor: string;
};

const cards: DashboardCard[] = [
  { icon: Globe, label: "Kanzlei-Website", value: "online seit 14 Tagen", dotColor: "bg-emerald-500" },
  { icon: Target, label: "Neue Leads", value: "23 diese Woche", dotColor: "bg-atikon-orange" },
  { icon: Mail, label: "Newsletter", value: "68 % Öffnungsrate", dotColor: "bg-atikon-violet" },
  { icon: Sparkles, label: "AI Studio", value: "3 Videos generiert", dotColor: "bg-atikon-violet" },
  { icon: BarChart3, label: "Kampagnen", value: "2 aktiv · 847 Reichweite", dotColor: "bg-emerald-500" },
];

const staggerDelays = ["0ms", "100ms", "200ms", "300ms", "400ms"];

export function HeroDashboard() {
  return (
    <div className="relative">
      {/* Decorative shapes */}
      <DropShape
        color="violet"
        size="lg"
        className="absolute -top-10 -right-6 opacity-10 rotate-45"
      />
      <DropShape
        color="orange"
        size="sm"
        className="absolute -bottom-4 right-12 opacity-10 -rotate-12"
      />

      {/* Dashboard frame */}
      <div className="rounded-2xl border border-neutral-200/80 bg-white p-5 shadow-lg sm:p-6">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 pb-4 mb-4 border-b border-neutral-100">
          <div className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
          <div className="ml-3 flex-1 h-6 rounded-full bg-neutral-50 border border-neutral-100 flex items-center px-3">
            <span className="text-[10px] text-neutral-300 select-none">taxhub.atikon.com/dashboard</span>
          </div>
        </div>

        {/* Row 1: Website + Leads */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          {cards.slice(0, 2).map((card, i) => (
            <CardTile key={card.label} card={card} delay={staggerDelays[i]} />
          ))}
        </div>

        {/* Row 2: Newsletter (wide highlight) */}
        <div className="mb-3">
          <CardTile card={cards[2]} delay={staggerDelays[2]} highlight />
        </div>

        {/* Row 3: AI Studio + Kampagnen */}
        <div className="grid grid-cols-2 gap-3">
          {cards.slice(3, 5).map((card, i) => (
            <CardTile key={card.label} card={card} delay={staggerDelays[i + 3]} />
          ))}
        </div>
      </div>

    </div>
  );
}

function CardTile({
  card,
  delay,
  highlight = false,
}: {
  card: DashboardCard;
  delay: string;
  highlight?: boolean;
}) {
  const Icon = card.icon;

  return (
    <div
      className={`animate-fade-up rounded-xl border border-neutral-100 p-3.5 transition-shadow hover:shadow-sm ${
        highlight
          ? "bg-gradient-to-r from-atikon-violet/[0.04] to-atikon-orange/[0.04]"
          : "bg-neutral-50/70"
      }`}
      style={{ animationDelay: delay }}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
          <Icon size={16} className="text-atikon-violet" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <p className="text-xs font-semibold text-neutral-700 truncate">{card.label}</p>
            <span className={`inline-block h-1.5 w-1.5 shrink-0 rounded-full ${card.dotColor}`} />
          </div>
          <p className="mt-0.5 text-[13px] text-neutral-500 leading-snug">{card.value}</p>
        </div>
      </div>
    </div>
  );
}
