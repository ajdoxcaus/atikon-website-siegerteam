import { SocialMediaHero } from "../components/social-media/SocialMediaHero";
import { SocialMediaWhy } from "../components/social-media/SocialMediaWhy";
import { SocialMediaPricing } from "../components/social-media/SocialMediaPricing";
import { SocialMediaKampagnen } from "../components/social-media/SocialMediaKampagnen";
import { SocialMediaCTA } from "../components/social-media/SocialMediaCTA";

export function SocialMediaPage() {
  return (
    <>
      <SocialMediaHero />
      <SocialMediaWhy />
      <SocialMediaPricing />
      <SocialMediaKampagnen />
      <SocialMediaCTA />
    </>
  );
}
