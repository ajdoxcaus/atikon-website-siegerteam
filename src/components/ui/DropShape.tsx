import type { ReactNode } from "react";

type DropShapeProps = {
  children?: ReactNode;
  color?: "violet" | "orange";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeMap = {
  sm: "w-16 h-16 text-xs",
  md: "w-24 h-24 text-sm",
  lg: "w-36 h-36 text-base",
} as const;

export function DropShape({
  children,
  color = "violet",
  size = "md",
  className = "",
}: DropShapeProps) {
  const bg = color === "orange" ? "bg-atikon-orange" : "bg-atikon-violet";

  return (
    <div
      className={`${bg} ${sizeMap[size]} inline-flex items-center justify-center text-white font-semibold rounded-[50%_50%_50%_0] rotate-0 ${className}`}
      aria-hidden={!children}
    >
      {children}
    </div>
  );
}
