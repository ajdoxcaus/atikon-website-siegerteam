import { WarumAtikonHero } from "../components/unternehmen/WarumAtikonHero";
import { WarumAtikonVorteile } from "../components/unternehmen/WarumAtikonVorteile";
import { WarumAtikonZahlen } from "../components/unternehmen/WarumAtikonZahlen";
import { WarumAtikonCTA } from "../components/unternehmen/WarumAtikonCTA";

export function WarumAtikonPage() {
  return (
    <>
      <WarumAtikonHero />
      <WarumAtikonVorteile />
      <WarumAtikonZahlen />
      <WarumAtikonCTA />
    </>
  );
}
