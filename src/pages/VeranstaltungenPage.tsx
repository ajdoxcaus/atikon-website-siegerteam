import { VeranstaltungenHero } from "../components/wissen/VeranstaltungenHero";
import { VeranstaltungenList } from "../components/wissen/VeranstaltungenList";
import { VeranstaltungenCTA } from "../components/wissen/VeranstaltungenCTA";

export function VeranstaltungenPage() {
  return (
    <>
      <VeranstaltungenHero />
      <VeranstaltungenList />
      <VeranstaltungenCTA />
    </>
  );
}
