import { useState, useCallback, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  LogIn,
  ChevronDown,
  Globe,
  Mail,
  Sparkles,
  Target,
  Share2,
  FileText,
  LayoutDashboard,
  BarChart3,
  Heart,
  Users,
  Newspaper,
  CalendarCheck,
  Lightbulb,
  Video,
  CalendarDays,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTerminFunnel } from "../../context/TerminFunnelContext";

type NavChild = {
  to: string;
  label: string;
  description?: string;
  icon?: LucideIcon;
};

type NavItem =
  | { label: string; children: NavChild[]; hash?: undefined }
  | { label: string; hash: string; children?: undefined };

const NAV_ITEMS: NavItem[] = [
  {
    label: "Plattform",
    children: [
      {
        to: "/taxhub",
        label: "taxHub Übersicht",
        description: "Die All-in-One-Plattform für Ihre Kanzlei.",
        icon: LayoutDashboard,
      },
      {
        to: "/#plattform",
        label: "Plattformvorteile",
        description: "Warum eine integrierte Lösung den Unterschied macht.",
        icon: BarChart3,
      },
    ],
  },
  {
    label: "Module",
    children: [
      {
        to: "/#module",
        label: "Kanzlei-Website",
        description: "Professioneller Auftritt in 12 Wochen online.",
        icon: Globe,
      },
      {
        to: "/ai-studio",
        label: "AI Studio",
        description: "KI-gestützter Workspace für Ihre Kanzlei.",
        icon: Sparkles,
      },
      {
        to: "/#module",
        label: "Content & Marketing",
        description: "Steuernews, Rechner und Textservice ohne Aufwand.",
        icon: FileText,
      },
      {
        to: "/newsletter",
        label: "Newslettersystem",
        description: "Mandantenbindung durch personalisierte Newsletter.",
        icon: Mail,
      },
      {
        to: "/social-media",
        label: "Social Media",
        description: "Facebook, Instagram & LinkedIn aus einer Hand.",
        icon: Share2,
      },
      {
        to: "/#module",
        label: "Lead Management",
        description: "Mandantengewinnung über digitale Kampagnen.",
        icon: Target,
      },
    ],
  },
  {
    label: "Unternehmen",
    children: [
      {
        to: "/warum-atikon",
        label: "Warum Atikon",
        description: "25 Jahre Marketingpartner für Steuerkanzleien.",
        icon: Heart,
      },
      {
        to: "/team",
        label: "Team",
        description: "Rund 80 Spezialist:innen für Ihren Erfolg.",
        icon: Users,
      },
      {
        to: "/news",
        label: "News",
        description: "Neuigkeiten und Aktuelles von Atikon.",
        icon: Newspaper,
      },
      {
        to: "/terminbuchung",
        label: "Terminbuchung",
        description: "Persönliche Beratung online oder vor Ort.",
        icon: CalendarCheck,
      },
    ],
  },
  { label: "Erfolge", hash: "erfolge" },
  {
    label: "Wissen",
    children: [
      {
        to: "/marketingtipps",
        label: "Marketingtipps",
        description: "Über 100 Praxistipps für Ihr Kanzleimarketing.",
        icon: Lightbulb,
      },
      {
        to: "/webinare",
        label: "Webinare",
        description: "Kostenlose Gipfelstürmer-Webinare für Steuerberater.",
        icon: Video,
      },
      {
        to: "/veranstaltungen",
        label: "Veranstaltungen",
        description: "Events, Messen und Kongresse für Steuerberater.",
        icon: CalendarDays,
      },
    ],
  },
];

function scrollToHash(hash: string) {
  const el = document.getElementById(hash);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { open: openTermin } = useTerminFunnel();

  const handleHashClick = useCallback(
    (e: React.MouseEvent, hash: string) => {
      e.preventDefault();
      if (pathname !== "/") {
        navigate("/");
        requestAnimationFrame(() =>
          setTimeout(() => scrollToHash(hash), 80),
        );
      } else {
        scrollToHash(hash);
      }
    },
    [pathname, navigate],
  );

  const handleLinkClick = useCallback(
    (e: React.MouseEvent, to: string) => {
      if (to.startsWith("/#")) {
        handleHashClick(e, to.slice(2));
      }
    },
    [handleHashClick],
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/95 backdrop-blur-sm">
      <div className="container-max flex h-16 items-center justify-between lg:h-[72px]">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Atikon Startseite">
          <Atikon />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Hauptnavigation">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <DesktopDropdown
                key={item.label}
                label={item.label}
                items={item.children}
                onLinkClick={handleLinkClick}
              />
            ) : (
              <a
                key={item.hash}
                href={`/#${item.hash}`}
                onClick={(e) => handleHashClick(e, item.hash)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-atikon-violet"
              >
                {item.label}
              </a>
            ),
          )}
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
            to="/karriere"
            className="btn-violet hover:btn-violet-hover focus-visible:btn-violet-focus text-sm"
          >
            Karriere
          </Link>
          <button
            type="button"
            onClick={openTermin}
            className="btn-primary hover:btn-primary-hover focus-visible:btn-primary-focus text-sm"
          >
            Termin buchen
          </button>
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
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <MobileAccordion
                  key={item.label}
                  label={item.label}
                  items={item.children}
                  onLinkClick={(e, to) => {
                    handleLinkClick(e, to);
                    setMobileOpen(false);
                  }}
                  onClose={() => setMobileOpen(false)}
                />
              ) : (
                <a
                  key={item.hash}
                  href={`/#${item.hash}`}
                  onClick={(e) => {
                    handleHashClick(e, item.hash);
                    setMobileOpen(false);
                  }}
                  className="rounded-lg px-3 py-2.5 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-atikon-violet"
                >
                  {item.label}
                </a>
              ),
            )}
            <hr className="my-2 border-neutral-200" />
            <a
              href="#login"
              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-neutral-600 hover:bg-neutral-100"
            >
              <LogIn size={16} />
              Login
            </a>
            <div className="px-3 pt-2 flex flex-col gap-2">
              <Link
                to="/karriere"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-atikon-violet px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-atikon-violet-dark w-full text-center"
              >
                Karriere
              </Link>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  openTermin();
                }}
                className="btn-primary hover:btn-primary-hover w-full text-center text-sm"
              >
                Termin buchen
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ── Desktop dropdown (hover) ─────────────────── */

function DesktopDropdown({
  label,
  items,
  onLinkClick,
}: {
  label: string;
  items: NavChild[];
  onLinkClick: (e: React.MouseEvent, to: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>(undefined);
  const ref = useRef<HTMLDivElement>(null);

  const enter = () => {
    clearTimeout(timeout.current);
    setOpen(true);
  };
  const leave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => () => clearTimeout(timeout.current), []);

  const isWide = items.length > 3;

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      <button
        type="button"
        className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-atikon-violet"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 transition-all duration-200 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
      >
        <div
          className={`rounded-xl border border-neutral-200 bg-white shadow-lg ring-1 ring-black/5 overflow-hidden ${
            isWide ? "w-[540px] p-3 grid grid-cols-2 gap-1" : "w-72 p-2 flex flex-col gap-0.5"
          }`}
        >
          {items.map((child) => {
            const Icon = child.icon;
            const isHash = child.to.startsWith("/#");

            const content = (
              <div className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-neutral-50 group/item">
                {Icon && (
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-atikon-violet/8 text-atikon-violet transition-colors group-hover/item:bg-atikon-violet/12">
                    <Icon size={16} />
                  </div>
                )}
                <div className="min-w-0">
                  <span className="block text-sm font-semibold text-neutral-800 group-hover/item:text-atikon-violet transition-colors">
                    {child.label}
                  </span>
                  {child.description && (
                    <span className="block mt-0.5 text-xs text-neutral-500 leading-relaxed">
                      {child.description}
                    </span>
                  )}
                </div>
              </div>
            );

            return isHash ? (
              <a
                key={child.label}
                href={child.to}
                onClick={(e) => {
                  onLinkClick(e, child.to);
                  setOpen(false);
                }}
              >
                {content}
              </a>
            ) : (
              <Link
                key={child.label}
                to={child.to}
                onClick={() => setOpen(false)}
              >
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ── Mobile accordion ─────────────────────────── */

function MobileAccordion({
  label,
  items,
  onLinkClick,
  onClose,
}: {
  label: string;
  items: NavChild[];
  onLinkClick: (e: React.MouseEvent, to: string) => void;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-atikon-violet"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {label}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="ml-3 flex flex-col gap-0.5 border-l-2 border-neutral-100 pl-3 pb-1">
          {items.map((child) => {
            const Icon = child.icon;
            const isHash = child.to.startsWith("/#");

            const cls =
              "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-atikon-violet";

            const inner = (
              <>
                {Icon && <Icon size={15} className="shrink-0 text-atikon-violet/50" />}
                {child.label}
              </>
            );

            return isHash ? (
              <a
                key={child.label}
                href={child.to}
                className={cls}
                onClick={(e) => {
                  onLinkClick(e, child.to);
                  onClose();
                }}
              >
                {inner}
              </a>
            ) : (
              <Link
                key={child.label}
                to={child.to}
                className={cls}
                onClick={onClose}
              >
                {inner}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ── Logo ─────────────────────────────────────── */

function Atikon() {
  return (
    <img
      src="/images/atikon-logo.png"
      alt="Atikon – Alles Marketing"
      className="h-10 w-auto lg:h-12"
    />
  );
}
