import { ArrowRight, Users } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

const trustPoints = [
  "1.850+ Kanzleien",
  "25 Jahre Erfahrung",
  "DE & AT spezialisiert",
];

export function TaxHubHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-max py-16 sm:py-20 lg:py-28 xl:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Copy */}
          <div className="animate-fade-up max-w-xl">
            <Badge variant="violet" size="sm">
              Die Plattform für Steuerkanzleien
            </Badge>

            <h1 className="mt-6 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] font-extrabold tracking-tight">
              <span className="text-atikon-black">Alles für Ihre Kanzlei.</span>
              <br />
              <span className="text-atikon-orange">Ein System.</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-neutral-600 max-w-md">
              Der taxHub vereint Website, Newsletter, KI, Lead Management,
              Kampagnen und Content in einer Plattform – gebaut für
              Steuerkanzleien, die wachsen wollen.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to="#termin" variant="primary" size="md">
                Termin buchen
                <ArrowRight size={18} />
              </Button>
              <Button to="#module" variant="secondary" size="md">
                Module entdecken
              </Button>
            </div>

            <p className="mt-10 flex items-center gap-2 text-sm text-neutral-400">
              <Users size={14} className="text-atikon-violet/50" aria-hidden="true" />
              {trustPoints.join(" · ")}
            </p>
          </div>

          {/* Visual */}
          <div
            className="animate-fade-up relative"
            style={{ animationDelay: "200ms" }}
            aria-hidden="true"
          >
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  const modules = [
    { label: "Website", color: "bg-atikon-violet" },
    { label: "Newsletter", color: "bg-atikon-orange" },
    { label: "AI Studio", color: "bg-atikon-violet" },
    { label: "Lead Mgmt", color: "bg-atikon-orange" },
    { label: "Kampagnen", color: "bg-atikon-violet" },
    { label: "Content", color: "bg-atikon-orange" },
  ];

  return (
    <div className="relative">
      <div className="rounded-2xl border border-neutral-200 bg-white shadow-xl overflow-hidden">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-neutral-100 bg-neutral-50/80 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          <span className="ml-3 text-[11px] text-neutral-400 font-medium">
            taxhub.atikon.com
          </span>
        </div>

        <div className="p-5 sm:p-6">
          {/* Welcome bar */}
          <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-atikon-violet/5 to-atikon-orange/5 p-4 mb-4">
            <div>
              <p className="text-xs text-neutral-400">Willkommen zurück</p>
              <p className="text-sm font-semibold text-atikon-black">
                Steuerberatung Müller GmbH
              </p>
            </div>
            <div className="flex gap-2">
              <div className="h-8 w-8 rounded-full bg-atikon-violet/10 flex items-center justify-center text-xs font-bold text-atikon-violet">
                SM
              </div>
            </div>
          </div>

          {/* Module grid */}
          <div className="grid grid-cols-3 gap-2.5">
            {modules.map((m) => (
              <div
                key={m.label}
                className="rounded-lg border border-neutral-100 bg-white p-3 text-center transition-shadow hover:shadow-sm"
              >
                <div
                  className={`mx-auto mb-2 h-8 w-8 rounded-lg ${m.color} opacity-15`}
                />
                <p className="text-[11px] font-semibold text-neutral-600">
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          {/* Mini stats */}
          <div className="mt-4 grid grid-cols-3 gap-2.5">
            {[
              { label: "Besucher", value: "3.247", trend: "+12 %" },
              { label: "Leads", value: "23", trend: "+8 %" },
              { label: "Newsletter", value: "68 %", trend: "Öffnungsrate" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-lg bg-neutral-50 p-3 text-center"
              >
                <p className="text-[10px] text-neutral-400">{s.label}</p>
                <p className="text-sm font-extrabold text-atikon-black">
                  {s.value}
                </p>
                <p className="text-[10px] font-semibold text-emerald-600">
                  {s.trend}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
