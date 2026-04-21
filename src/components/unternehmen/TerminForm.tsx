import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export function TerminForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 p-12 text-center">
        <CheckCircle size={48} className="text-emerald-500 mb-4" />
        <h3 className="text-xl font-bold text-neutral-900">
          Vielen Dank für Ihre Anfrage!
        </h3>
        <p className="mt-2 text-sm text-neutral-600">
          Wir melden uns in Kürze bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 lg:p-8">
      <h3 className="text-lg font-bold text-neutral-900 mb-6">
        Termin vereinbaren
      </h3>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="space-y-5"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="termin-name"
              className="mb-1.5 block text-sm font-semibold text-neutral-700"
            >
              Name *
            </label>
            <input
              id="termin-name"
              type="text"
              required
              className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-800 outline-none transition-colors focus:border-atikon-violet focus:ring-2 focus:ring-atikon-violet/20"
              placeholder="Max Mustermann"
            />
          </div>
          <div>
            <label
              htmlFor="termin-kanzlei"
              className="mb-1.5 block text-sm font-semibold text-neutral-700"
            >
              Kanzlei
            </label>
            <input
              id="termin-kanzlei"
              type="text"
              className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-800 outline-none transition-colors focus:border-atikon-violet focus:ring-2 focus:ring-atikon-violet/20"
              placeholder="Mustermann Steuerberatung"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="termin-email"
              className="mb-1.5 block text-sm font-semibold text-neutral-700"
            >
              E-Mail *
            </label>
            <input
              id="termin-email"
              type="email"
              required
              className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-800 outline-none transition-colors focus:border-atikon-violet focus:ring-2 focus:ring-atikon-violet/20"
              placeholder="max@beispiel.at"
            />
          </div>
          <div>
            <label
              htmlFor="termin-phone"
              className="mb-1.5 block text-sm font-semibold text-neutral-700"
            >
              Telefon
            </label>
            <input
              id="termin-phone"
              type="tel"
              className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-800 outline-none transition-colors focus:border-atikon-violet focus:ring-2 focus:ring-atikon-violet/20"
              placeholder="+43 ..."
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="termin-date"
            className="mb-1.5 block text-sm font-semibold text-neutral-700"
          >
            Wunschtermin
          </label>
          <input
            id="termin-date"
            type="date"
            className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-800 outline-none transition-colors focus:border-atikon-violet focus:ring-2 focus:ring-atikon-violet/20"
          />
        </div>

        <div>
          <label
            htmlFor="termin-message"
            className="mb-1.5 block text-sm font-semibold text-neutral-700"
          >
            Nachricht
          </label>
          <textarea
            id="termin-message"
            rows={4}
            className="w-full resize-none rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-800 outline-none transition-colors focus:border-atikon-violet focus:ring-2 focus:ring-atikon-violet/20"
            placeholder="Wie können wir Ihnen helfen?"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-atikon-orange px-8 py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-atikon-orange-dark hover:shadow-[0_4px_16px_rgba(250,70,22,0.3)]"
        >
          Termin anfragen
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
