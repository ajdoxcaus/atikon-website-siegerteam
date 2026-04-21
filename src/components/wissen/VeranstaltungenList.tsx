import { MapPin, Calendar, ArrowUpRight } from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { SectionHeading } from "../ui/SectionHeading";

const EVENTS = [
  {
    title: "TAXarena \u2013 Die Innovationsmesse f\u00fcr Steuerkanzleien",
    date: "23. April 2026",
    location: "Jahrhunderthalle Bochum",
    address: "An der Jahrhunderthalle 1, 44793 Bochum",
    accent: "bg-atikon-violet",
  },
  {
    title: "64. Deutscher Steuerberaterkongress 2026",
    date: "04.\u201305. Mai 2026",
    location: "Estrel Berlin Congress Center",
    address: "Sonnenallee 225, 12057 Berlin",
    accent: "bg-atikon-orange",
  },
  {
    title: "\u00d6GSW Finanzstrafrechtstagung",
    date: "22. Mai 2026",
    location: "Steigenberger Hotel Herrenhof",
    address: "Herrengasse 10, 1010 Wien",
    accent: "bg-atikon-violet",
  },
  {
    title: "Arbeitstagung der Akademie der Wirtschaftspr\u00fcfer und Steuerberater",
    date: "28. Mai \u2013 02. Juni 2026",
    location: "Congress Center Villach",
    address: "Europaplatz 1-2, 9500 Villach",
    accent: "bg-atikon-orange",
  },
];

export function VeranstaltungenList() {
  return (
    <SectionShell bg="neutral">
      <SectionHeading
        title="Kommende Veranstaltungen"
        subtitle="Treffen Sie unser Team auf diesen Events."
      />

      <div className="relative mx-auto max-w-3xl">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-neutral-200 hidden md:block" />

        <div className="space-y-6">
          {EVENTS.map((event, i) => (
            <div key={event.title} className="relative md:pl-16">
              {/* Timeline dot */}
              <div className={`absolute left-4 top-8 hidden md:flex h-5 w-5 items-center justify-center rounded-full ${event.accent} ring-4 ring-white`}>
                <span className="h-2 w-2 rounded-full bg-white" />
              </div>

              <article className="group rounded-2xl border border-neutral-200 bg-white p-6 lg:p-8 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-atikon-violet transition-colors leading-snug">
                      {event.title}
                    </h3>

                    <div className="mt-3 flex flex-col gap-1.5 sm:flex-row sm:gap-4 text-sm text-neutral-600">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={14} className="text-atikon-violet shrink-0" />
                        {event.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={14} className="text-atikon-violet shrink-0" />
                        {event.location}
                      </span>
                    </div>

                    <p className="mt-1 text-xs text-neutral-400 pl-5 sm:pl-0">
                      {event.address}
                    </p>
                  </div>

                  <div className="shrink-0">
                    <span className="inline-flex items-center gap-1 rounded-full bg-atikon-violet/8 px-4 py-2 text-xs font-semibold text-atikon-violet transition-colors group-hover:bg-atikon-violet group-hover:text-white">
                      Details
                      <ArrowUpRight size={12} />
                    </span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
