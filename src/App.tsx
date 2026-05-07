import { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
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
import { ContentMarketingPage } from "./pages/ContentMarketingPage";
import { StorytellingPage } from "./pages/StorytellingPage";
import { StartPage } from "./pages/StartPage";
import { WebsitePage } from "./pages/WebsitePage";
import { LeadManagementPage } from "./pages/LeadManagementPage";

const RELOAD_PATH_KEY = "atikon_last_path_before_unload";

export function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const currentPath = window.location.pathname;
    const previousPath = sessionStorage.getItem(RELOAD_PATH_KEY);

    if (previousPath === currentPath && currentPath !== "/start") {
      navigate("/start", { replace: true });
    }

    sessionStorage.removeItem(RELOAD_PATH_KEY);

    const handleBeforeUnload = () => {
      sessionStorage.setItem(RELOAD_PATH_KEY, window.location.pathname);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [navigate]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/start" replace />} />
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
        <Route path="content" element={<ContentMarketingPage />} />
        <Route path="storytelling" element={<StorytellingPage />} />
        <Route path="website" element={<WebsitePage />} />
        <Route path="lead-management" element={<LeadManagementPage />} />
        <Route path="start" element={<StartPage />} />
        <Route path="home" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
