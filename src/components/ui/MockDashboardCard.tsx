import { StatCard } from "./StatCard";
import { DropShape } from "./DropShape";

type Metric = { label: string; value: string; trend: string };
type Notification = { label: string; value: string };

type MockDashboardCardProps = {
  metrics?: Metric[];
  notification?: Notification;
};

const defaultMetrics: Metric[] = [
  { label: "Websitebesucher", value: "3.247", trend: "+12%" },
  { label: "Newsletter-Öffnungen", value: "68%", trend: "+4%" },
  { label: "Neue Leads", value: "23", trend: "+8%" },
];

const defaultNotification: Notification = {
  label: "Neuer Lead",
  value: "Steuerberatung Müller GmbH",
};

const chartBars = [40, 55, 35, 65, 50, 80, 70, 90, 75, 95, 85, 100];

export function MockDashboardCard({
  metrics = defaultMetrics,
  notification = defaultNotification,
}: MockDashboardCardProps) {
  return (
    <div className="relative">
      <DropShape
        color="violet"
        size="lg"
        className="absolute -top-8 -right-4 opacity-10 rotate-45"
      />

      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg">
        {/* Window chrome */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-3 w-3 rounded-full bg-atikon-orange" />
          <div className="h-3 w-3 rounded-full bg-atikon-yellow" />
          <div className="h-3 w-3 rounded-full bg-atikon-violet" />
          <div className="ml-auto h-4 w-32 rounded bg-neutral-100" />
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {metrics.map((m) => (
            <StatCard
              key={m.label}
              label={m.label}
              value={m.value}
              trend={m.trend}
              trendDirection="up"
            />
          ))}
        </div>

        {/* Chart */}
        <div className="h-32 rounded-xl bg-gradient-to-r from-atikon-violet/5 via-atikon-violet/10 to-atikon-orange/5 flex items-end px-4 pb-4 gap-2">
          {chartBars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-atikon-violet/20"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      {/* Floating notification */}
      <div className="absolute -bottom-4 -left-6 rounded-xl border border-neutral-200 bg-white px-4 py-3 shadow-md">
        <p className="text-xs text-neutral-400">{notification.label}</p>
        <p className="text-sm font-semibold text-atikon-black">{notification.value}</p>
      </div>
    </div>
  );
}
