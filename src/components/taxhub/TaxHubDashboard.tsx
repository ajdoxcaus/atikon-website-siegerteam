import {
  Globe,
  Mail,
  Sparkles,
  Target,
  Megaphone,
  FileText,
  BarChart3,
  TrendingUp,
  Users,
} from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { SectionHeading } from "../ui/SectionHeading";

const sidebarItems = [
  { icon: Globe, label: "Website" },
  { icon: Mail, label: "Newsletter" },
  { icon: Sparkles, label: "AI Studio" },
  { icon: Target, label: "Leads" },
  { icon: Megaphone, label: "Kampagnen" },
  { icon: FileText, label: "Content" },
];

const kpis = [
  { icon: Users, label: "Website-Besucher", value: "3.247", trend: "+12 % gg. Vormonat" },
  { icon: Mail, label: "Newsletter-Öffnungen", value: "68,4 %", trend: "+4,2 % gg. Vorausgabe" },
  { icon: Target, label: "Neue Leads", value: "23", trend: "+8 diese Woche" },
  { icon: BarChart3, label: "Kampagnen-Reichweite", value: "4.812", trend: "2 aktive Kampagnen" },
];

const bars = [35, 42, 55, 48, 62, 58, 70, 65, 78, 72, 85, 92];

export function TaxHubDashboard() {
  return (
    <SectionShell id="dashboard" bg="white" spacing="lg">
      <SectionHeading
        title="Ihr gesamtes Marketing auf einen Blick."
        subtitle="Das taxHub-Dashboard zeigt Ihnen live, was funktioniert – über alle Module hinweg."
      />

      <div className="animate-fade-up" aria-hidden="true">
        <div className="rounded-2xl border border-neutral-200 bg-white shadow-xl overflow-hidden">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-neutral-100 bg-neutral-50/60">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            <div className="ml-3 flex-1 h-6 rounded-full bg-white border border-neutral-100 flex items-center px-3">
              <span className="text-[10px] text-neutral-300 select-none">
                taxhub.atikon.com/dashboard
              </span>
            </div>
          </div>

          <div className="flex">
            {/* Sidebar */}
            <div className="hidden md:flex w-48 shrink-0 flex-col gap-1 border-r border-neutral-100 bg-neutral-50/40 p-3">
              <div className="flex items-center gap-2 px-3 py-2 mb-2">
                <div className="h-6 w-6 rounded-full bg-atikon-violet flex items-center justify-center text-[10px] font-bold text-white">
                  t
                </div>
                <span className="text-xs font-semibold text-atikon-violet">
                  taxHub
                </span>
              </div>
              {sidebarItems.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                    i === 0
                      ? "bg-atikon-violet/8 text-atikon-violet"
                      : "text-neutral-500"
                  }`}
                >
                  <item.icon size={14} />
                  {item.label}
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="flex-1 p-5 sm:p-6">
              {/* KPI row */}
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {kpis.map((kpi) => (
                  <div
                    key={kpi.label}
                    className="rounded-xl border border-neutral-100 bg-neutral-50/70 p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <kpi.icon size={14} className="text-atikon-violet/60" />
                      <span className="text-[11px] text-neutral-400">
                        {kpi.label}
                      </span>
                    </div>
                    <p className="text-xl font-extrabold text-atikon-black">
                      {kpi.value}
                    </p>
                    <p className="mt-1 text-[11px] font-medium text-emerald-600 flex items-center gap-1">
                      <TrendingUp size={10} />
                      {kpi.trend}
                    </p>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="mt-5 rounded-xl border border-neutral-100 bg-neutral-50/30 p-5">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs font-semibold text-neutral-600">
                    Besucher & Leads – letzte 12 Monate
                  </p>
                  <div className="flex gap-3">
                    <span className="flex items-center gap-1.5 text-[10px] text-neutral-400">
                      <span className="h-2 w-2 rounded-full bg-atikon-violet/40" />
                      Besucher
                    </span>
                    <span className="flex items-center gap-1.5 text-[10px] text-neutral-400">
                      <span className="h-2 w-2 rounded-full bg-atikon-orange/60" />
                      Leads
                    </span>
                  </div>
                </div>
                <div className="h-32 flex items-end gap-1.5">
                  {bars.map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col gap-0.5">
                      <div
                        className="rounded-t bg-atikon-violet/20"
                        style={{ height: `${h}%` }}
                      />
                      <div
                        className="rounded-t bg-atikon-orange/30"
                        style={{ height: `${Math.max(10, h * 0.3)}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
