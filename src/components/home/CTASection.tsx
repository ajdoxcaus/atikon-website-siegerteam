import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { DropShape } from "../ui/DropShape";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-atikon-violet">
      {/* Decorative drops */}
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
        <h2 className="text-white text-[clamp(1.75rem,4vw,2.75rem)] leading-tight font-extrabold">
          Bereit für Ihren Vorsprung?
        </h2>
        <p className="mt-4 text-white/70 text-lg max-w-lg mx-auto">
          Buchen Sie Ihren persönlichen Beratungstermin – wir finden heraus,
          ob wir zueinander passen.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to="#termin" variant="primary" size="lg">
            Jetzt Termin buchen
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}
