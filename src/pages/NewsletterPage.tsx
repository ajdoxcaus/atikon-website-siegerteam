import { NewsletterHero } from "../components/newsletter/NewsletterHero";
import { NewsletterFeatures } from "../components/newsletter/NewsletterFeatures";
import { NewsletterPricing } from "../components/newsletter/NewsletterPricing";
import { CTASection } from "../components/home/CTASection";

export function NewsletterPage() {
  return (
    <>
      <NewsletterHero />
      <NewsletterFeatures />
      <NewsletterPricing />
      <CTASection />
    </>
  );
}
