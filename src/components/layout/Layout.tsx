import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { IntentSwitcher } from "./IntentSwitcher";
import { StickyCTA } from "./StickyCTA";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export function Layout() {
  return (
    <>
      <ScrollToTop />

      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-14 focus:z-[60] focus:rounded-lg focus:bg-atikon-violet focus:px-4 focus:py-2 focus:text-white focus:text-sm focus:font-semibold focus:shadow-lg"
      >
        Zum Inhalt springen
      </a>

      <div className="brand-bar" aria-hidden="true" />

      <div className="page-offset flex min-h-screen flex-col">
        <Header />

        <main className="flex-1" id="main">
          <Outlet />
        </main>

        <Footer />
      </div>

      <IntentSwitcher />
      <StickyCTA />
    </>
  );
}
