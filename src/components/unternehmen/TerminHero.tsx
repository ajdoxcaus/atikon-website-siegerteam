import { CalendarCheck } from "lucide-react";
import { Badge } from "../ui/Badge";

export function TerminHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-max py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <Badge variant="violet" size="sm">
            <CalendarCheck size={12} className="mr-1" />
            Terminbuchung
          </Badge>

          <h1 className="mt-6 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.08] font-extrabold tracking-tight">
            <span className="text-atikon-black">Persönliche </span>
            <span className="text-atikon-orange">Beratung</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-neutral-600 mx-auto max-w-2xl">
            Sie möchten sich um Ihre Homepage kümmern? Wir sind flexibel und
            beraten Sie direkt bei Ihnen vor Ort oder ganz einfach per
            Onlinebesprechung oder Telefon.
          </p>
        </div>
      </div>
    </section>
  );
}
