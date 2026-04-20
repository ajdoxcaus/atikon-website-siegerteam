import type { ComponentProps } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold leading-none whitespace-nowrap transition-all duration-200 cursor-pointer rounded-full";

const variants: Record<Variant, string> = {
  primary:
    "bg-atikon-orange text-white border-2 border-atikon-orange hover:bg-atikon-orange-dark hover:border-atikon-orange-dark hover:shadow-[0_4px_16px_rgba(250,70,22,0.3)] focus-visible:outline-3 focus-visible:outline-atikon-orange/40 focus-visible:outline-offset-2",
  secondary:
    "bg-transparent text-atikon-violet border-2 border-atikon-violet hover:bg-atikon-violet hover:text-white focus-visible:outline-3 focus-visible:outline-atikon-violet/30 focus-visible:outline-offset-2",
};

const sizes = {
  sm: "px-5 py-2 text-sm",
  md: "px-8 py-3 text-base",
  lg: "px-10 py-4 text-lg",
} as const;

type ButtonProps = {
  variant?: Variant;
  size?: keyof typeof sizes;
} & (
  | ({ to: string } & Omit<ComponentProps<typeof Link>, "className">)
  | ({ to?: never } & Omit<ComponentProps<"button">, "className">)
);

export function Button({
  variant = "primary",
  size = "md",
  to,
  children,
  ...rest
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]}`;

  if (to) {
    return (
      <Link to={to} className={cls} {...(rest as ComponentProps<typeof Link>)}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={cls} {...(rest as ComponentProps<"button">)}>
      {children}
    </button>
  );
}
