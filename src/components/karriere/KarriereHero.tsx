import { ArrowDown } from "lucide-react";
import { Badge } from "../ui/Badge";

export function KarriereHero() {
  return (
    <section className="relative overflow-hidden bg-atikon-violet text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-atikon-orange blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 h-[400px] w-[400px] rounded-full bg-atikon-violet-light blur-[100px]" />
      </div>

      <div className="container-max relative py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="orange" size="sm">
            #mehralsschwarzweiß
          </Badge>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Starte deine{" "}
            <span className="text-atikon-orange">orange Karriere!</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
            Wir sind Atikon, führender Marketingpartner von Steuerberaterinnen
            und Steuerberatern in Österreich sowie Deutschland. Rund 80
            kreative Köpfe entwickeln in Pasching bei Linz professionelle
            Marketingprodukte, moderne Websites und innovative Onlinetools.
          </p>

          <p className="mt-4 text-base leading-relaxed text-white/60">
            Kreativität, Offenheit, Ehrlichkeit, Engagement und Freude an der
            Arbeit ist das, was uns als Team auszeichnet. Wir haben Spaß
            miteinander, übernehmen gerne Verantwortung und feiern gemeinsam
            unsere Erfolge.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#stellen"
              className="inline-flex items-center gap-2 rounded-full bg-atikon-orange px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-atikon-orange-dark"
            >
              Offene Stellen
              <ArrowDown size={18} />
            </a>
            <a
              href="#bewerbung"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Direkt bewerben
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
