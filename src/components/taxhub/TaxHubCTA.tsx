import { ArrowRight, CalendarCheck } from "lucide-react";
import { Button } from "../ui/Button";
import { DropShape } from "../ui/DropShape";

export function TaxHubCTA() {
  return (
    <section id="termin" className="relative overflow-hidden bg-atikon-violet">
      <DropShape
        color="orange"
        size="lg"
        className="absolute -top-10 right-16 opacity-15 rotate-45"
      />
      <DropShape
        color="orange"
        size="md"
        className="absolute bottom-8 left-12 opacity-10 -rotate-45"
      />

      <div className="container-max py-20 lg:py-28 text-center relative z-10">
        <h2 className="text-white text-[clamp(1.5rem,3.5vw,2.5rem)] leading-tight font-extrabold max-w-3xl mx-auto">
          Lassen Sie uns gemeinsam herausfinden, welche Module den größten
          Hebel für Ihre Kanzlei haben.
        </h2>
        <p className="mt-4 text-white/60 text-lg max-w-lg mx-auto">
          30 Minuten, die sich lohnen. Unverbindlich und persönlich.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to="#termin" variant="primary" size="lg">
            Termin buchen
            <ArrowRight size={20} />
          </Button>
          <a
            href="#module"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-10 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10 hover:border-white/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <CalendarCheck size={18} aria-hidden="true" />
            Module ansehen
          </a>
        </div>
      </div>
    </section>
  );
}
