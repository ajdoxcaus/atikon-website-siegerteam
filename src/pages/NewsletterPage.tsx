import { NewsletterHero } from "../components/newsletter/NewsletterHero";
import { NewsletterProblemSolution } from "../components/newsletter/NewsletterProblemSolution";
import { NewsletterFeatures } from "../components/newsletter/NewsletterFeatures";
import { NewsletterPricing } from "../components/newsletter/NewsletterPricing";

export function NewsletterPage() {
  return (
    <>
      <NewsletterHero />
      <NewsletterProblemSolution />
      <NewsletterFeatures />
      <NewsletterPricing />
    </>
  );
}
