import { TaxHubHero } from "../components/taxhub/TaxHubHero";
import { TaxHubPromise } from "../components/taxhub/TaxHubPromise";
import { TaxHubDashboard } from "../components/taxhub/TaxHubDashboard";
import { TaxHubModules } from "../components/taxhub/TaxHubModules";
import { TaxHubFlow } from "../components/taxhub/TaxHubFlow";
import { TaxHubBenefits } from "../components/taxhub/TaxHubBenefits";
import { TaxHubCTA } from "../components/taxhub/TaxHubCTA";

export function TaxHubPage() {
  return (
    <>
      <TaxHubHero />
      <TaxHubPromise />
      <TaxHubDashboard />
      <TaxHubModules />
      <TaxHubFlow />
      <TaxHubBenefits />
      <TaxHubCTA />
    </>
  );
}
