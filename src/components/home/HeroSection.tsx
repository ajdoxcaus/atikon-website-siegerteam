import { ArrowRight, Users } from "lucide-react";
import { useIntent } from "../../hooks/useIntent";
import { heroVariants } from "../../data/content";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { HeroDashboard } from "./HeroDashboard";

export function HeroSection() {
  const intent = useIntent();
  const hero = heroVariants[intent];

  const [lineA, lineB] = hero.headline.split("\n");

  return (
    <section id="hero" className="relative overflow-hidden bg-white">
      <div className="container-max py-16 sm:py-20 lg:py-28 xl:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Copy */}
          <div className="animate-fade-up max-w-xl">
            <Badge variant="violet" size="sm">
              {hero.badge}
            </Badge>

            <h1 className="mt-6 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] font-extrabold tracking-tight">
              <span className="text-atikon-black">{lineA}</span>
              {lineB && (
                <>
                  <br />
                  <span className="text-atikon-orange">{lineB}</span>
                </>
              )}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-neutral-600 max-w-md">
              {hero.subline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to="#termin" variant="primary" size="md">
                {hero.cta}
                <ArrowRight size={18} />
              </Button>
              <Button to="#plattform" variant="secondary" size="md">
                {hero.ctaSecondary}
              </Button>
            </div>

            <p className="mt-10 flex items-center gap-2 text-sm text-neutral-400">
              <Users size={14} className="text-atikon-violet/50" />
              500+ Kanzleien vertrauen auf Atikon
            </p>
          </div>

          {/* Dashboard visual */}
          <div
            className="animate-fade-up relative"
            style={{ animationDelay: "200ms" }}
            aria-hidden="true"
          >
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
