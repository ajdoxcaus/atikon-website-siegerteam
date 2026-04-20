import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Settings } from "lucide-react";
import type { Intent } from "../../hooks/useIntent";
import { useIntent } from "../../hooks/useIntent";

const INTENTS: { id: Intent; label: string }[] = [
  { id: "default", label: "Default" },
  { id: "newsletter", label: "Newsletter" },
  { id: "website", label: "Website" },
  { id: "ai", label: "AI" },
  { id: "lead", label: "Lead" },
];

export function IntentSwitcher() {
  const [open, setOpen] = useState(false);
  const current = useIntent();
  const [, setParams] = useSearchParams();

  function switchIntent(id: Intent) {
    if (id === "default") {
      setParams({});
    } else {
      setParams({ intent: id });
    }
  }

  return (
    <div className="fixed bottom-16 right-4 z-50 flex items-end gap-2 lg:bottom-4">
      {open && (
        <div className="rounded-xl border border-neutral-200/60 bg-white/95 backdrop-blur-sm shadow-lg p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 mb-2 px-1">
            Intent Demo
          </p>
          <div className="flex flex-wrap gap-1.5">
            {INTENTS.map((i) => (
              <button
                key={i.id}
                type="button"
                onClick={() => switchIntent(i.id)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                  current === i.id
                    ? "bg-atikon-violet text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {i.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-atikon-violet text-white shadow-lg transition-transform hover:scale-105 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atikon-violet"
        aria-label={open ? "Intent-Switcher schließen" : "Intent-Switcher öffnen"}
        aria-expanded={open}
      >
        <Settings size={18} />
      </button>
    </div>
  );
}
