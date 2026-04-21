import { Mail } from "lucide-react";
import { SectionShell } from "../ui/SectionShell";

export function WebinareCTA() {
  return (
    <SectionShell bg="violet">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-white">
          Jetzt Newsletter abonnieren
        </h2>
        <p className="mt-4 text-lg text-white/70">
          Mit unserem kostenlosen Newsletter bleiben Sie immer up to date und
          erfahren alles \u00fcber Marketingnews sowie Trends aus erster Hand.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-5 py-3 text-sm text-white/60 w-full max-w-xs">
            <Mail size={16} className="shrink-0" />
            <span>Ihre E-Mail-Adresse</span>
          </div>
          <button
            type="button"
            className="shrink-0 rounded-full bg-atikon-orange px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-atikon-orange-dark hover:shadow-[0_4px_16px_rgba(250,70,22,0.3)]"
          >
            Anmelden
          </button>
        </div>
      </div>
    </SectionShell>
  );
}
