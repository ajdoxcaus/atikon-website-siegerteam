import { stats } from "../../data/content";

export function TrustStrip() {
  return (
    <section
      id="vertrauen"
      className="animate-fade-up bg-neutral-50 border-y border-neutral-100"
    >
      <div className="container-max py-10">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl bg-white border-t-2 border-t-atikon-violet px-5 py-5 text-center shadow-sm"
            >
              <p className="text-2xl font-extrabold text-atikon-violet lg:text-3xl">
                {s.value}
              </p>
              <p className="mt-1.5 text-sm text-neutral-500 leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-neutral-400">
          Website, Newsletter, KI und Kampagnen in einem System.
        </p>
      </div>
    </section>
  );
}
