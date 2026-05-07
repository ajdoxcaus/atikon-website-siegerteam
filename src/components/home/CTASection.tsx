import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { DropShape } from "../ui/DropShape";

export function CTASection() {
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
          Lassen Sie uns zeigen, welcher Einstieg in den taxHub Ihrer Kanzlei
          jetzt den größten Vorsprung bringt.
        </h2>
        <p className="mt-4 text-white/60 text-lg max-w-lg mx-auto">
          30 Minuten, die sich lohnen. Unverbindlich und persönlich.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to="/terminbuchung" variant="primary" size="lg">
            Termin buchen
            <ArrowRight size={20} />
          </Button>
          <Button to="/taxhub" variant="secondary" size="lg">
            taxHub ansehen
          </Button>
        </div>
      </div>
    </section>
  );
}
