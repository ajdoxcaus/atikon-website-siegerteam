import { HeroSection } from "../components/home/HeroSection";
import { TrustStrip } from "../components/home/TrustStrip";
import { PlatformSection } from "../components/home/PlatformSection";
import { ComparisonSection } from "../components/home/ComparisonSection";
import { ModulesOverview } from "../components/home/ModulesOverview";
import { FeaturedSection } from "../components/home/FeaturedSection";
import { ProcessSection } from "../components/home/ProcessSection";
import { SocialProof } from "../components/home/SocialProof";
import { CTASection } from "../components/home/CTASection";
import { HomeIntroVideo } from "../components/home/HomeIntroVideo";

export function HomePage() {
  return (
    <>
      <HomeIntroVideo />
      <HeroSection />
      <PlatformSection />
      <ComparisonSection />
      <ModulesOverview />
      <FeaturedSection />
      <ProcessSection />
      <SocialProof />
      <TrustStrip />
      <CTASection />
    </>
  );
}
