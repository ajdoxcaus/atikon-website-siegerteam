import { ArrowRight } from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { Button } from "../ui/Button";

export function VeranstaltungenCTA() {
  return (
    <SectionShell bg="white">
      <div className="mx-auto max-w-2xl text-center">
        <h2>Sie möchten uns persönlich treffen?</h2>
        <p className="mt-4 text-lg text-neutral-600">
          Vereinbaren Sie einen Termin mit unserem Team – auf einer
          Veranstaltung oder ganz bequem per Onlinebesprechung.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button to="#termin" variant="primary" size="md">
            Termin buchen
            <ArrowRight size={18} />
          </Button>
          <Button to="/webinare" variant="secondary" size="md">
            Webinare entdecken
          </Button>
        </div>
      </div>
    </SectionShell>
  );
}
