import { ArrowRight } from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { Button } from "../ui/Button";
import { MockDashboardCard } from "../ui/MockDashboardCard";

const capabilities = [
  "Professionelle Kanzlei-Website",
  "Newslettersystem für Mandantenbindung",
  "KI-Avatar und Steuernews-TV",
  "Lead Management und Kampagnen",
  "Social-Media-Management",
  "Content- und Marketingplattform",
];

export function PlatformSection() {
  return (
    <SectionShell id="plattform" bg="neutral">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-lg">
          <h2>taxHub: Ihr System für Kanzleiwachstum.</h2>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            Kanzleimarketing von Atikon entfaltet seine volle Wirkung im
            Zusammenspiel. Der taxHub vereint alle Werkzeuge in einer
            zentralen Plattform – damit alles ineinandergreift und für
            Sie arbeitet.
          </p>

          <ul className="mt-6 space-y-3">
            {capabilities.map((cap) => (
              <li key={cap} className="flex items-start gap-3 text-sm text-neutral-700">
                <ArrowRight size={16} className="shrink-0 mt-0.5 text-atikon-orange" />
                {cap}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button to="#module" variant="secondary" size="md">
              Module entdecken
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>

        <div className="relative hidden lg:block" aria-hidden="true">
          <MockDashboardCard />
        </div>
      </div>
    </SectionShell>
  );
}
