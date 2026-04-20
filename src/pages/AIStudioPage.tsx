import { AIStudioHero } from "../components/ai-studio/AIStudioHero";
import { AIStudioWhat } from "../components/ai-studio/AIStudioWhat";
import { AIStudioUseCases } from "../components/ai-studio/AIStudioUseCases";
import { AIStudioPricing } from "../components/ai-studio/AIStudioPricing";
import { AIStudioIntegration } from "../components/ai-studio/AIStudioIntegration";
import { AIStudioCTA } from "../components/ai-studio/AIStudioCTA";

export function AIStudioPage() {
  return (
    <>
      <AIStudioHero />
      <AIStudioWhat />
      <AIStudioUseCases />
      <AIStudioPricing />
      <AIStudioIntegration />
      <AIStudioCTA />
    </>
  );
}
