import { ArrowRight } from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { Button } from "../ui/Button";

export function MarketingtippsCTA() {
  return (
    <SectionShell bg="violet">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-white">
          Sie möchten mehr erfahren?
        </h2>
        <p className="mt-4 text-lg text-white/70">
          Lassen Sie sich von unseren Expert:innen persönlich beraten und
          erfahren Sie, wie Sie Ihr Kanzleimarketing auf das nächste Level heben.
        </p>
        <div className="mt-8">
          <Button to="#termin" variant="primary" size="md">
            Beratungstermin buchen
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </SectionShell>
  );
}
