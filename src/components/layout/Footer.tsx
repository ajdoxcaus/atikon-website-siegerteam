import { Link } from "react-router-dom";
import { Mail, Phone, ArrowRight, LogIn } from "lucide-react";

const FOOTER_LINKS = {
  Plattform: [
    { label: "taxHub Übersicht", to: "/#plattform" },
    { label: "Für Steuerkanzleien", to: "/#loesungen" },
    { label: "Preise", to: "/#preise" },
  ],
  Module: [
    { label: "Website", to: "/website" },
    { label: "Newslettersystem", to: "/newsletter" },
    { label: "AI Studio", to: "/ai-studio" },
    { label: "Lead Management", to: "/lead-management" },
    { label: "Social Media", to: "/social-media" },
    { label: "Content & Marketing", to: "/content" },
  ],
  Unternehmen: [
    { label: "Warum Atikon", to: "/warum-atikon" },
    { label: "Team", to: "/team" },
    { label: "News", to: "/news" },
    { label: "Terminbuchung", to: "/terminbuchung" },
  ],
  Wissen: [
    { label: "Marketingtipps", to: "/marketingtipps" },
    { label: "Webinare", to: "/webinare" },
    { label: "Veranstaltungen", to: "/veranstaltungen" },
  ],
} as const;

export function Footer() {
  return (
    <footer className="bg-atikon-violet text-white" role="contentinfo">
      <div className="container-max py-16 lg:py-20">
        {/* Top: Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="space-y-4">
            <p className="text-lg font-extrabold tracking-tight text-atikon-orange">atikon</p>
            <p className="text-sm leading-relaxed text-white/70">
              Kanzleimarketing mit System.
              <br />
              Vorsprung, der bleibt.
            </p>
            <p className="text-xs text-white/40 pt-1">
              taxHub – die Plattform für Steuerkanzleien
            </p>
            <div className="flex flex-col gap-2 pt-2 text-sm text-white/80">
              <a href="tel:+4373261126" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={14} />
                +43 732 611 266
              </a>
              <a href="mailto:info@atikon.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} />
                info@atikon.com
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="group flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
                    >
                      <ArrowRight size={12} className="text-atikon-orange opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Atikon EG. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <a
              href="#login"
              className="flex items-center gap-1.5 hover:text-white/70 transition-colors"
            >
              <LogIn size={12} />
              Login
            </a>
            <Link to="/impressum" className="hover:text-white/70 transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white/70 transition-colors">Datenschutz</Link>
            <Link to="/agb" className="hover:text-white/70 transition-colors">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
