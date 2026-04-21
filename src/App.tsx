import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { NewsletterPage } from "./pages/NewsletterPage";
import { TaxHubPage } from "./pages/TaxHubPage";
import { AIStudioPage } from "./pages/AIStudioPage";
import { WarumAtikonPage } from "./pages/WarumAtikonPage";
import { TeamPage } from "./pages/TeamPage";
import { NewsPage } from "./pages/NewsPage";
import { TerminbuchungPage } from "./pages/TerminbuchungPage";
import { KarrierePage } from "./pages/KarrierePage";
import { MarketingtippsPage } from "./pages/MarketingtippsPage";
import { WebinarePage } from "./pages/WebinarePage";
import { VeranstaltungenPage } from "./pages/VeranstaltungenPage";
import { SocialMediaPage } from "./pages/SocialMediaPage";

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="newsletter" element={<NewsletterPage />} />
        <Route path="taxhub" element={<TaxHubPage />} />
        <Route path="ai-studio" element={<AIStudioPage />} />
        <Route path="warum-atikon" element={<WarumAtikonPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="terminbuchung" element={<TerminbuchungPage />} />
        <Route path="karriere" element={<KarrierePage />} />
        <Route path="marketingtipps" element={<MarketingtippsPage />} />
        <Route path="webinare" element={<WebinarePage />} />
        <Route path="veranstaltungen" element={<VeranstaltungenPage />} />
        <Route path="social-media" element={<SocialMediaPage />} />
      </Route>
    </Routes>
  );
}
