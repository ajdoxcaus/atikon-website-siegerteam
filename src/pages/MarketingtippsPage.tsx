import { MarketingtippsHero } from "../components/wissen/MarketingtippsHero";
import { MarketingtippsFeatured } from "../components/wissen/MarketingtippsFeatured";
import { MarketingtippsGrid } from "../components/wissen/MarketingtippsGrid";
import { MarketingtippsCTA } from "../components/wissen/MarketingtippsCTA";

export function MarketingtippsPage() {
  return (
    <>
      <MarketingtippsHero />
      <MarketingtippsFeatured />
      <MarketingtippsGrid />
      <MarketingtippsCTA />
    </>
  );
}
