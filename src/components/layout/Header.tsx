import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, LogIn } from "lucide-react";

const NAV_ITEMS = [
  { to: "/#plattform", label: "Plattform" },
  { to: "/#module", label: "Module" },
  { to: "/#loesungen", label: "Lösungen" },
  { to: "/#erfolge", label: "Erfolge" },
  { to: "/#wissen", label: "Wissen" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/95 backdrop-blur-sm">
      <div className="container-max flex h-16 items-center justify-between lg:h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Atikon Startseite">
          <Atikon />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Hauptnavigation">
          {NAV_ITEMS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className="text-sm font-semibold text-neutral-700 transition-colors hover:text-atikon-violet"
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#login"
            className="flex items-center gap-1.5 text-sm font-semibold text-neutral-600 transition-colors hover:text-atikon-violet"
          >
            <LogIn size={16} />
            Login
          </a>
          <Link
            to="#termin"
            className="btn-primary hover:btn-primary-hover focus-visible:btn-primary-focus text-sm"
          >
            Termin buchen
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden p-2 -mr-2 text-neutral-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white">
          <nav className="container-max flex flex-col py-4 gap-1" aria-label="Mobile Navigation">
            {NAV_ITEMS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-atikon-violet"
              >
                {label}
              </NavLink>
            ))}
            <hr className="my-2 border-neutral-200" />
            <a
              href="#login"
              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-neutral-600 hover:bg-neutral-100"
            >
              <LogIn size={16} />
              Login
            </a>
            <div className="px-3 pt-2">
              <Link
                to="#termin"
                onClick={() => setMobileOpen(false)}
                className="btn-primary hover:btn-primary-hover w-full text-center text-sm"
              >
                Termin buchen
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function Atikon() {
  return (
    <svg viewBox="0 0 120 28" className="h-7 w-auto" aria-hidden="true" role="img">
      <text
        x="0"
        y="22"
        fontFamily="'Fira Sans', sans-serif"
        fontWeight="800"
        fontSize="24"
        fill="#FA4616"
        letterSpacing="-0.5"
      >
        atikon
      </text>
      <text
        x="0"
        y="27"
        fontFamily="'Fira Sans', sans-serif"
        fontWeight="400"
        fontSize="5.5"
        fill="#000000"
        letterSpacing="0.3"
      >
        Kanzleimarketing
      </text>
    </svg>
  );
}
