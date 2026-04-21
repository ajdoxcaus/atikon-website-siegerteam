import { KarriereHero } from "../components/karriere/KarriereHero";
import { KarriereJobs } from "../components/karriere/KarriereJobs";
import { KarriereBenefits } from "../components/karriere/KarriereBenefits";
import { KarriereTestimonials } from "../components/karriere/KarriereTestimonials";
import { KarriereFormular } from "../components/karriere/KarriereFormular";

export function KarrierePage() {
  return (
    <>
      <KarriereHero />
      <KarriereJobs />
      <KarriereBenefits />
      <KarriereTestimonials />
      <KarriereFormular />
    </>
  );
}
