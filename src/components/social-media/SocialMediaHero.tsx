import { ArrowDown, CalendarCheck } from "lucide-react";
import { Badge } from "../ui/Badge";

export function SocialMediaHero() {
  return (
    <section className="relative overflow-hidden bg-atikon-violet text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-atikon-orange blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 h-[400px] w-[400px] rounded-full bg-atikon-violet-light blur-[100px]" />
      </div>

      <div className="container-max relative py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="orange" size="sm">
            Social Media Management
          </Badge>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Social Media für{" "}
            <span className="text-atikon-orange">Steuerkanzleien.</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
            Mit professionellen Social-Media-Auftritten auf Facebook, Instagram
            und LinkedIn erhöhen Sie Ihre Reichweite, gewinnen neue Mandanten
            und finden qualifizierte Fachkräfte – ohne großen Zeitaufwand.
          </p>

          <p className="mt-4 text-base leading-relaxed text-white/60">
            Das Atikon-Team übernimmt Ihr Social-Media-Management mit
            maßgeschneiderten Paketen: von vollautomatisierten Postings bis zur
            strategischen Premiumbetreuung mit Kanzleimomente-Fotoshootings.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#pakete"
              className="inline-flex items-center gap-2 rounded-full bg-atikon-orange px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-atikon-orange-dark"
            >
              Pakete ansehen
              <ArrowDown size={18} />
            </a>
            <a
              href="#termin"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              <CalendarCheck size={18} />
              Termin buchen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
