import { ArrowRight } from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { Button } from "../ui/Button";

export function WarumAtikonCTA() {
  return (
    <SectionShell bg="white">
      <div className="mx-auto max-w-2xl text-center">
        <h2>Bereit für Ihren Gipfelsturm?</h2>
        <p className="mt-4 text-lg text-neutral-600">
          Sie haben Fragen oder wünschen eine persönliche Kontaktaufnahme? Das
          Atikon-Team ist für Sie da!
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button to="/terminbuchung" variant="primary" size="md">
            Termin buchen
            <ArrowRight size={18} />
          </Button>
          <Button to="/team" variant="secondary" size="md">
            Team kennenlernen
          </Button>
        </div>
      </div>
    </SectionShell>
  );
}
