type StatCardProps = {
  label: string;
  value: string;
  trend?: string;
  trendDirection?: "up" | "down" | "neutral";
};

const trendColors: Record<string, string> = {
  up: "text-emerald-600",
  down: "text-red-600",
  neutral: "text-neutral-500",
};

export function StatCard({
  label,
  value,
  trend,
  trendDirection = "up",
}: StatCardProps) {
  return (
    <div className="rounded-xl bg-neutral-50 p-4">
      <p className="text-xs text-neutral-400">{label}</p>
      <p className="mt-1 text-xl font-extrabold text-atikon-black">{value}</p>
      {trend && (
        <p className={`mt-0.5 text-xs font-semibold ${trendColors[trendDirection]}`}>
          {trend}
        </p>
      )}
    </div>
  );
}
