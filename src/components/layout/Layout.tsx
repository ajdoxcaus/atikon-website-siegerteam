import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <>
      {/* Brand bar — left vertical stripe (CI element) */}
      <div className="brand-bar" aria-hidden="true" />

      <div className="page-offset flex min-h-screen flex-col">
        <Header />

        <main className="flex-1" id="main">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}
