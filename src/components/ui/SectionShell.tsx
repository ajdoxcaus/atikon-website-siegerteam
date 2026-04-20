import type { ReactNode } from "react";

type SectionShellProps = {
  children: ReactNode;
  id?: string;
  bg?: "white" | "neutral" | "violet";
  container?: "max" | "narrow" | "text";
  spacing?: "default" | "lg";
  className?: string;
};

const bgMap = {
  white: "bg-white",
  neutral: "bg-neutral-50",
  violet: "bg-atikon-violet text-white",
} as const;

export function SectionShell({
  children,
  id,
  bg = "neutral",
  container = "max",
  spacing = "default",
  className = "",
}: SectionShellProps) {
  const spacingCls = spacing === "lg" ? "section-spacing-lg" : "section-spacing";
  const containerCls =
    container === "narrow"
      ? "container-narrow"
      : container === "text"
        ? "container-text"
        : "container-max";

  return (
    <section id={id} className={`${bgMap[bg]} ${spacingCls} ${className}`}>
      <div className={containerCls}>{children}</div>
    </section>
  );
}
