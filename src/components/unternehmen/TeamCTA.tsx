import { ArrowRight, Briefcase } from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { Button } from "../ui/Button";

export function TeamCTA() {
  return (
    <SectionShell bg="white">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-atikon-violet/8 text-atikon-violet">
          <Briefcase size={28} />
        </div>
        <h2>Du möchtest ins Team?</h2>
        <p className="mt-4 text-lg text-neutral-600">
          Dann mach den ersten Schritt und stöbere durch unsere Jobangebote!
          Atikon ist ein Great Place to Work® – überzeuge dich selbst.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button to="/terminbuchung" variant="primary" size="md">
            Jetzt bewerben
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </SectionShell>
  );
}
