import { Newspaper } from "lucide-react";
import { Badge } from "../ui/Badge";

export function NewsHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-max py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <Badge variant="violet" size="sm">
            <Newspaper size={12} className="mr-1" />
            Neuigkeiten
          </Badge>

          <h1 className="mt-6 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.08] font-extrabold tracking-tight">
            <span className="text-atikon-black">News & </span>
            <span className="text-atikon-orange">Aktuelles</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-neutral-600 mx-auto max-w-2xl">
            Klicken Sie sich durch und erfahren Sie, was sich bei Atikon so tut!
          </p>
        </div>
      </div>
    </section>
  );
}
