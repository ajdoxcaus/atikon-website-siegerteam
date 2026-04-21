import { ArrowRight } from "lucide-react";
import { TerminHero } from "../components/unternehmen/TerminHero";
import { TerminInfo } from "../components/unternehmen/TerminInfo";
import { SectionShell } from "../components/ui/SectionShell";
import { useTerminFunnel } from "../context/TerminFunnelContext";

export function TerminbuchungPage() {
  const { open } = useTerminFunnel();

  return (
    <>
      <TerminHero />
      <SectionShell bg="neutral">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 lg:p-10 text-center">
              <h3 className="text-xl font-bold text-neutral-900">
                Jetzt Beratungstermin vereinbaren
              </h3>
              <p className="mt-3 text-sm text-neutral-600 max-w-md mx-auto">
                In nur 5 kurzen Schritten buchen Sie Ihren persönlichen
                MS Teams Beratungstermin mit unserem Expertenteam.
              </p>
              <button
                type="button"
                onClick={open}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-atikon-orange px-8 py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-atikon-orange-dark hover:shadow-[0_4px_16px_rgba(250,70,22,0.3)]"
              >
                Termin buchen
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          <div className="lg:col-span-2">
            <TerminInfo />
          </div>
        </div>
      </SectionShell>
    </>
  );
}
