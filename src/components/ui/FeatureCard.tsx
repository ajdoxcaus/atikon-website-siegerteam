import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  accent?: "violet" | "orange";
};

export function FeatureCard({
  icon,
  title,
  description,
  accent = "orange",
}: FeatureCardProps) {
  const iconBg =
    accent === "violet"
      ? "bg-atikon-violet/8 text-atikon-violet"
      : "bg-atikon-orange/8 text-atikon-orange";

  return (
    <div className="rounded-[var(--radius-md)] bg-white p-6 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow duration-200">
      <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${iconBg}`}>
        {icon}
      </div>
      <h3 className="text-base">{title}</h3>
      <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
