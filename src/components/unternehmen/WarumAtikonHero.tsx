import { ArrowRight, Award } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

export function WarumAtikonHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-max py-16 sm:py-20 lg:py-28 xl:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="animate-fade-up max-w-xl">
            <Badge variant="violet" size="sm">
              <Award size={12} className="mr-1" />
              Seit 25 Jahren an Ihrer Seite
            </Badge>

            <h1 className="mt-6 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.08] font-extrabold tracking-tight">
              <span className="text-atikon-black">Warum</span>{" "}
              <span className="text-atikon-orange">Atikon?</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-neutral-600 max-w-md">
              Professionelles Kanzleimarketing bringt Sie auf die besten Plätze
              in Suchmaschinen, findet die richtigen Fachkräfte für Ihr Team und
              begeistert Mandantinnen sowie Mandanten.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to="/terminbuchung" variant="primary" size="md">
                Beratungstermin buchen
                <ArrowRight size={18} />
              </Button>
              <Button to="/team" variant="secondary" size="md">
                Unser Team
              </Button>
            </div>
          </div>

          <div
            className="animate-fade-up relative"
            style={{ animationDelay: "200ms" }}
            aria-hidden="true"
          >
            <div className="rounded-2xl border border-neutral-200 bg-gradient-to-br from-atikon-violet/5 to-atikon-orange/5 p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "25+", label: "Jahre Erfahrung" },
                  { value: "80+", label: "Spezialist:innen" },
                  { value: "1.500+", label: "Kanzleien betreut" },
                  { value: "6–8", label: "Wochen Projektdauer" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-3xl font-extrabold text-atikon-violet lg:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-neutral-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
