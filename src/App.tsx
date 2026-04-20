import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { NewsletterPage } from "./pages/NewsletterPage";
import { TaxHubPage } from "./pages/TaxHubPage";
import { AIStudioPage } from "./pages/AIStudioPage";

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="newsletter" element={<NewsletterPage />} />
        <Route path="taxhub" element={<TaxHubPage />} />
        <Route path="ai-studio" element={<AIStudioPage />} />
      </Route>
    </Routes>
  );
}
