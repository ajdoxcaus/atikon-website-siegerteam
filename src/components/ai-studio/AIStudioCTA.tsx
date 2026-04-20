import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { DropShape } from "../ui/DropShape";

export function AIStudioCTA() {
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
        <h2 className="text-white text-[clamp(1.35rem,3.2vw,2.25rem)] leading-tight font-extrabold max-w-3xl mx-auto">
          Sehen Sie in 30 Minuten, wie KI Ihre Kanzlei konkret entlasten kann
          – ohne Verpflichtung.
        </h2>
        <p className="mt-4 text-white/60 text-lg max-w-lg mx-auto">
          Persönliche Demo mit einem Berater, der Ihre Branche versteht.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to="#termin" variant="primary" size="lg">
            Demo anfordern
            <ArrowRight size={20} />
          </Button>
          <a
            href="#anwendungsfaelle"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-10 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10 hover:border-white/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Anwendungsfälle ansehen
          </a>
        </div>
      </div>
    </section>
  );
}
