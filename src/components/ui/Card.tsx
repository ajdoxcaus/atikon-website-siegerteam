import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  accent?: "violet" | "orange";
  hover?: boolean;
  className?: string;
};

export function Card({
  children,
  accent = "violet",
  hover = true,
  className = "",
}: CardProps) {
  const accentColor =
    accent === "orange" ? "border-l-atikon-orange" : "border-l-atikon-violet";

  return (
    <div
      className={`bg-white rounded-[var(--radius-md)] shadow-[var(--shadow-card)] p-[var(--spacing-card)] border-l-4 ${accentColor} transition-all duration-200 ${hover ? "hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
