import { ArrowRight, Check } from "lucide-react";
import { Button } from "./Button";

type PricingCardProps = {
  label: string;
  price: string;
  priceSuffix: string;
  setupPrice?: string;
  setupSuffix?: string;
  features: string[];
  ctaLabel: string;
  ctaTo: string;
  highlighted?: boolean;
};

export function PricingCard({
  label,
  price,
  priceSuffix,
  setupPrice,
  setupSuffix,
  features,
  ctaLabel,
  ctaTo,
  highlighted = false,
}: PricingCardProps) {
  const border = highlighted
    ? "border-2 border-atikon-violet/20 shadow-[var(--shadow-lg)]"
    : "border-2 border-atikon-violet/10 shadow-[var(--shadow-md)]";

  return (
    <div className={`rounded-2xl bg-white p-8 lg:p-10 ${border} max-w-md w-full`}>
      <p className="text-sm font-semibold uppercase tracking-wider text-atikon-violet/60">
        {label}
      </p>

      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-4xl font-extrabold text-atikon-black">
          {price}
        </span>
        <span className="text-neutral-500">{priceSuffix}</span>
      </div>

      {setupPrice && (
        <p className="mt-1 text-sm text-neutral-500">
          {setupSuffix}: {setupPrice}
        </p>
      )}

      <hr className="my-6 border-neutral-200" />

      <ul className="space-y-3">
        {features.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-700">
            <Check size={16} className="shrink-0 mt-0.5 text-atikon-orange" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button to={ctaTo} variant="primary" size="md">
          {ctaLabel}
          <ArrowRight size={18} />
        </Button>
      </div>
    </div>
  );
}
