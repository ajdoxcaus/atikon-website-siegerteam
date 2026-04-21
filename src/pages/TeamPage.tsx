import { TeamHero } from "../components/unternehmen/TeamHero";
import { TeamGrid } from "../components/unternehmen/TeamGrid";
import { TeamCTA } from "../components/unternehmen/TeamCTA";

export function TeamPage() {
  return (
    <>
      <TeamHero />
      <TeamGrid />
      <TeamCTA />
    </>
  );
}
