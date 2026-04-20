import { ArrowRight, Send } from "lucide-react";
import { Button } from "../ui/Button";

export function NewsletterHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-max py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div className="max-w-xl">
            <span className="drop-badge drop-badge-orange mb-6">taxHub Modul</span>

            <h1 className="mt-6 text-[clamp(2rem,5vw,3.25rem)] leading-[1.08] font-extrabold tracking-tight">
              <span className="text-atikon-orange">Mandanten</span>
              <br />
              regelmäßig erreichen.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-neutral-600 max-w-md">
              Mit dem Atikon-Newslettersystem versenden und verwalten Sie
              News aus Ihrer Kanzlei mit wenigen Klicks – personalisiert,
              DSGVO-konform und im eigenen Kanzleidesign.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to="#testen" variant="primary" size="md">
                14 Tage kostenlos testen
                <ArrowRight size={18} />
              </Button>
              <Button to="#funktionen" variant="secondary" size="md">
                Funktionen ansehen
              </Button>
            </div>
          </div>

          {/* Mockup */}
          <div className="relative hidden lg:block" aria-hidden="true">
            <NewsletterMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsletterMockup() {
  return (
    <div className="relative">
      {/* Main editor card */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg">
        {/* Toolbar */}
        <div className="flex items-center gap-3 border-b border-neutral-100 pb-4 mb-5">
          <Send size={18} className="text-atikon-violet" />
          <span className="text-sm font-semibold text-atikon-black">Newsletter Editor</span>
          <div className="ml-auto flex gap-2">
            <div className="h-7 w-16 rounded bg-neutral-100" />
            <div className="h-7 w-20 rounded bg-atikon-orange/10 text-atikon-orange text-xs font-semibold flex items-center justify-center">
              Senden
            </div>
          </div>
        </div>

        {/* Email preview */}
        <div className="rounded-xl border border-neutral-100 p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-8 w-8 rounded-full bg-atikon-violet/10 flex items-center justify-center text-xs font-bold text-atikon-violet">
              SK
            </div>
            <div>
              <p className="text-sm font-semibold text-atikon-black">Steuerkanzlei Müller</p>
              <p className="text-xs text-neutral-400">newsletter@stb-mueller.de</p>
            </div>
          </div>
          <div className="border-l-3 border-l-atikon-orange pl-4 mb-4">
            <p className="text-sm font-semibold text-atikon-black">Steuertipp des Monats</p>
            <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
              Fahrtenbuch richtig führen – darauf kommt es an. Wir zeigen Ihnen die wichtigsten Regeln…
            </p>
          </div>
          <div className="h-20 rounded-lg bg-gradient-to-r from-atikon-violet/5 to-atikon-orange/5" />
        </div>

        {/* Stats bar */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { label: "Empfänger", value: "1.248" },
            { label: "Öffnungsrate", value: "68,4%" },
            { label: "Klickrate", value: "12,1%" },
          ].map((s) => (
            <div key={s.label} className="text-center rounded-lg bg-neutral-50 py-2.5">
              <p className="text-xs text-neutral-400">{s.label}</p>
              <p className="text-sm font-extrabold text-atikon-black">{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating notification */}
      <div className="absolute -bottom-3 -left-4 rounded-xl border border-neutral-200 bg-white px-4 py-3 shadow-md flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-sm">
          ✓
        </div>
        <div>
          <p className="text-xs text-neutral-400">Versand abgeschlossen</p>
          <p className="text-sm font-semibold text-atikon-black">1.248 Newsletter zugestellt</p>
        </div>
      </div>
    </div>
  );
}
