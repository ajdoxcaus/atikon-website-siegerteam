import { ArrowRight } from "lucide-react";
import { useTerminFunnel } from "../../context/TerminFunnelContext";

export function StickyCTA() {
  const { open } = useTerminFunnel();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-neutral-200 bg-white/95 backdrop-blur-sm shadow-[0_-2px_12px_rgba(0,0,0,0.08)]">
      <div className="pl-[var(--brand-bar-width)] px-4 py-3">
        <button
          type="button"
          onClick={open}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-atikon-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-atikon-orange-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atikon-orange"
        >
          Termin buchen
          <ArrowRight size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
