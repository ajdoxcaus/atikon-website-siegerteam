import {
  Palette,
  MousePointerClick,
  Cloud,
  BarChart3,
  Shield,
  Repeat,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { newsletterFeatures } from "../../data/content";
import { SectionShell } from "../ui/SectionShell";
import { SectionHeading } from "../ui/SectionHeading";
import { FeatureCard } from "../ui/FeatureCard";

const iconMap: Record<string, LucideIcon> = {
  Palette,
  MousePointerClick,
  Cloud,
  BarChart3,
  Shield,
  Repeat,
};

export function NewsletterFeatures() {
  return (
    <SectionShell id="funktionen" bg="neutral">
      <SectionHeading
        title="Alles, was Ihr Newsletter braucht"
        subtitle="Professioneller Versand ohne Umwege – direkt aus dem taxHub."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {newsletterFeatures.map((feat) => {
          const Icon = iconMap[feat.icon] ?? Palette;
          return (
            <FeatureCard
              key={feat.title}
              icon={<Icon size={20} />}
              title={feat.title}
              description={feat.description}
            />
          );
        })}
      </div>
    </SectionShell>
  );
}
