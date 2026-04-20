import { ArrowRight, Check } from "lucide-react";
import { useIntent } from "../../hooks/useIntent";
import { featuredVariants } from "../../data/content";
import { SectionShell } from "../ui/SectionShell";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { DropShape } from "../ui/DropShape";

export function FeaturedSection() {
  const intent = useIntent();
  const featured = featuredVariants[intent];

  return (
    <SectionShell id="featured" bg="neutral">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Content */}
        <div className="max-w-lg">
          <Badge variant="orange" size="sm">{featured.badge}</Badge>

          <h2 className="mt-5">{featured.title}</h2>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            {featured.subtitle}
          </p>

          <ul className="mt-6 space-y-3">
            {featured.features.map((feat) => (
              <li key={feat} className="flex items-start gap-3 text-sm text-neutral-700">
                <Check size={16} className="shrink-0 mt-0.5 text-atikon-orange" />
                {feat}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button to={featured.ctaTo} variant="primary" size="md">
              {featured.ctaLabel}
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>

        {/* Visual */}
        <div className="relative hidden lg:flex items-center justify-center" aria-hidden="true">
          <DropShape color="violet" size="lg" className="opacity-8" />
          <DropShape color="orange" size="md" className="absolute top-8 right-12 opacity-12 rotate-45" />
          <DropShape color="violet" size="sm" className="absolute bottom-12 left-8 opacity-10 -rotate-45" />
        </div>
      </div>
    </SectionShell>
  );
}
