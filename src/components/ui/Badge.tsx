import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "violet" | "orange" | "outline" | "subtle";
  size?: "sm" | "md";
  icon?: ReactNode;
};

const variantStyles: Record<string, string> = {
  violet: "bg-atikon-violet text-white",
  orange: "bg-atikon-orange text-white",
  outline: "border border-atikon-violet text-atikon-violet bg-transparent",
  subtle: "bg-atikon-violet/7 text-atikon-violet",
};

const sizeStyles: Record<string, string> = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-3.5 py-1.5 text-sm",
};

export function Badge({
  children,
  variant = "subtle",
  size = "md",
  icon,
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-semibold leading-none rounded-full whitespace-nowrap ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {icon}
      {children}
    </span>
  );
}
