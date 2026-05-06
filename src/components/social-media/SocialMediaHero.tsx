import { ArrowRight, CalendarCheck, Users, Shield, BarChart3 } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

const trustPoints = [
  { icon: Users, label: "Facebook, Instagram & LinkedIn" },
  { icon: Shield, label: "Fixe Ansprechperson" },
  { icon: BarChart3, label: "Redaktionsplan & Reporting" },
];

export function SocialMediaHero() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="container-max py-16 sm:py-20 lg:py-28 xl:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <div className="animate-fade-up max-w-xl">
              <Badge variant="violet" size="sm">
                Modul im taxHub
              </Badge>

              <h1 className="mt-6 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.08] font-extrabold tracking-tight">
                <span className="text-atikon-black">Social Media</span>
                <br />
                <span className="text-atikon-orange">im taxHub</span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-neutral-600 max-w-md">
                Professionelle Auftritte auf Facebook, Instagram und LinkedIn -
                abgestimmt auf Steuerkanzleien, die Mandanten binden und neue
                Fachkrafte gewinnen wollen.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button to="#pakete" variant="primary" size="md">
                  Pakete ansehen
                  <ArrowRight size={18} />
                </Button>
                <Button to="#termin" variant="secondary" size="md">
                  <CalendarCheck size={16} />
                  Termin buchen
                </Button>
              </div>
            </div>

            <div
              className="animate-fade-up relative"
              style={{ animationDelay: "200ms" }}
              aria-hidden="true"
            >
              <SocialMediaVisual />
            </div>
          </div>
        </div>
      </section>

      <div className="animate-fade-up border-y border-neutral-100 bg-neutral-50">
        <div className="container-max py-5">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustPoints.map((tp) => (
              <li key={tp.label} className="flex items-center gap-2 text-sm text-neutral-500">
                <tp.icon size={15} className="text-atikon-violet/60" />
                {tp.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

function SocialMediaVisual() {
  return (
    <div className="relative">
      <div className="rounded-2xl border border-neutral-200 bg-white shadow-xl overflow-hidden">
        <div className="flex items-center gap-2 border-b border-neutral-100 bg-neutral-50/80 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          <span className="ml-3 text-[11px] text-neutral-400 font-medium">
            taxHub - Social Media Studio
          </span>
        </div>

        <div className="p-5 sm:p-6">
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Facebook", posts: "8 Posts", color: "bg-atikon-violet/10 text-atikon-violet" },
              { label: "Instagram", posts: "8 Posts", color: "bg-atikon-orange/10 text-atikon-orange" },
              { label: "LinkedIn", posts: "4 Posts", color: "bg-atikon-violet/10 text-atikon-violet" },
              { label: "Karriere", posts: "1 Kampagne", color: "bg-atikon-orange/10 text-atikon-orange" },
            ].map((channel) => (
              <div key={channel.label} className="rounded-xl border border-neutral-100 bg-white p-3">
                <p className="text-[11px] text-neutral-400">{channel.label}</p>
                <p className="mt-1 text-sm font-semibold text-atikon-black">{channel.posts}</p>
                <span className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold ${channel.color}`}>
                  Aktiv
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-neutral-100 bg-neutral-50 p-4">
            <p className="text-xs font-semibold text-atikon-violet">Aktueller Redaktionsplan</p>
            <div className="mt-2.5 space-y-2">
              {[
                "Steuertipp des Monats",
                "Kanzleimoment mit Team-Einblick",
                "LinkedIn Fachbeitrag fur Unternehmer",
              ].map((item) => (
                <div key={item} className="rounded-lg bg-white px-3 py-2 text-[11px] text-neutral-600 border border-neutral-100">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
