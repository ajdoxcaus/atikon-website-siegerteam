import type { Intent } from "../hooks/useIntent";

/* ──────────────────────────────────────────────
   HERO VARIANTS (intent-adaptive)
   ────────────────────────────────────────────── */

export type HeroContent = {
  badge: string;
  headline: string;
  subline: string;
  cta: string;
  ctaSecondary: string;
};

export const heroVariants: Record<Intent, HeroContent> = {
  default: {
    badge: "Vorsprung, der bleibt.",
    headline: "Die Plattform für\nKanzleiwachstum.",
    subline:
      "Mit dem taxHub steuern Sie Website, Content, Newslettersystem, KI und Kampagnen in einem System – speziell für Steuerkanzleien.",
    cta: "Termin buchen",
    ctaSecondary: "taxHub ansehen",
  },
  newsletter: {
    badge: "taxHub Newslettersystem",
    headline: "Mandanten\nregelmäßig erreichen.",
    subline:
      "Versenden Sie personalisierte News im Kanzleidesign – DSGVO-konform, mit wenigen Klicks und integrierter Statistik.",
    cta: "14 Tage kostenlos testen",
    ctaSecondary: "Funktionen ansehen",
  },
  website: {
    badge: "taxHub Website",
    headline: "Ihre Website\nin 12 Wochen online.",
    subline:
      "Topaktuelle Kanzleiwebsite mit Onlinetools, barrierefreiem Design und laufender fachlicher Wartung – ohne Aufwand für Sie.",
    cta: "Termin buchen",
    ctaSecondary: "Website-Paket ansehen",
  },
  ai: {
    badge: "taxHub AI Studio",
    headline: "KI, die Ihre\nKanzlei voranbringt.",
    subline:
      "Ihr digitaler KI-Avatar spricht Ihre Steuernews mit Ihrer Stimme. Positionieren Sie sich als digitale Vorzeigekanzlei.",
    cta: "Demo anfordern",
    ctaSecondary: "Mehr erfahren",
  },
  lead: {
    badge: "taxHub Lead Management",
    headline: "A-Mandanten\nwie am Fließband.",
    subline:
      "Gewinnen Sie gezielt neue Mandanten und Fachkräfte – mit Social-Media-Kampagnen, SEO und Google Ads aus einer Hand.",
    cta: "Termin buchen",
    ctaSecondary: "Kampagnen entdecken",
  },
};

/* ──────────────────────────────────────────────
   MODULES (taxHub overview)
   ────────────────────────────────────────────── */

export type Module = {
  id: string;
  icon: string;
  title: string;
  description: string;
  link: string;
};

export const modules: Module[] = [
  {
    id: "website",
    icon: "Globe",
    title: "Kanzlei-Website",
    description:
      "Professioneller Kanzleiauftritt mit aktuellem Content, Onlinetools und barrierefreiem Design – in 12 Wochen online.",
    link: "/website",
  },
  {
    id: "newsletter",
    icon: "Mail",
    title: "Newslettersystem",
    description:
      "Personalisierte News im Kanzleidesign versenden, Mandantenbindung stärken und Öffnungsraten tracken.",
    link: "/newsletter",
  },
  {
    id: "ai-studio",
    icon: "Sparkles",
    title: "AI Studio",
    description:
      "KI-Avatar, Steuernews-TV und Video-Academy – innovative Kommunikation mit modernster Technologie.",
    link: "/ai-studio",
  },
  {
    id: "lead-management",
    icon: "Target",
    title: "Lead Management",
    description:
      "Mandantengewinnung und Mitarbeitersuche über Social-Media-Kampagnen, SEA und Google Unternehmensprofil.",
    link: "/lead-management",
  },
  {
    id: "social-media",
    icon: "Share2",
    title: "Social Media",
    description:
      "Management und Kampagnen für Facebook, Instagram und LinkedIn – abgestimmt auf Ihre Kanzleiziele.",
    link: "/social-media",
  },
  {
    id: "content",
    icon: "FileText",
    title: "Content & Marketing",
    description:
      "Steuernews, Onlinerechner, Infolisten und professioneller Textservice – aktueller Content ohne Aufwand.",
    link: "/content",
  },
];

/* ──────────────────────────────────────────────
   SOCIAL PROOF
   ────────────────────────────────────────────── */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Unsere neue Website kommt bei unseren Mandantinnen und Mandanten richtig gut an – sie ist modern, übersichtlich und leicht zu bedienen. Besonders erfreulich ist, wie oft die Videos aufgerufen werden!",
    name: "Thomas Hartmann",
    role: "Dipl.-Finanzwirt (FH), Steuerberater",
    company: "steuerberatung-hartmann.de",
  },
  {
    quote:
      "Alles, was Herr Schwarz und das Atikon-Team versprochen haben, wurde zu 100 % eingehalten – einfach top! Besonders überzeugt hat uns die breite Produktpalette und das Newslettersystem.",
    name: "Andreas Marx",
    role: "Dipl. Betriebswirt (FH), Steuerberater",
    company: "steuerberater-marx.de",
  },
  {
    quote:
      "Die Zusammenarbeit mit Atikon bei der Neugestaltung unserer Website war von Anfang bis Ende absolut professionell. Besonders positiv ist mir der konstruktive Austausch in Erinnerung geblieben.",
    name: "Michael Buchner",
    role: "Wirtschaftsprüfer, Steuerberater",
    company: "rhs-muenchen.de",
  },
];

/* ──────────────────────────────────────────────
   STATS
   ────────────────────────────────────────────── */

export const stats = [
  { value: "1.850", label: "Kunden" },
  { value: "25", label: "Jahre Erfahrung" },
  { value: "90", label: "Mitarbeitende" },
  { value: "DE & AT", label: "spezialisiert auf Steuerkanzleien" },
];

/* ──────────────────────────────────────────────
   NEWSLETTER PAGE
   ────────────────────────────────────────────── */

export const newsletterFeatures = [
  {
    icon: "Palette",
    title: "Ihr Kanzleidesign",
    description:
      "Maßgeschneiderte und personalisierte News im eigenen Kanzleidesign – flexible Gestaltung eigener Kanzleinewsletter möglich.",
  },
  {
    icon: "MousePointerClick",
    title: "Einfache Bedienung",
    description:
      "Minimaler Zeitaufwand durch Vorlagen und Import von Textbausteinen. Versand und Verwaltung mit wenigen Klicks.",
  },
  {
    icon: "Cloud",
    title: "Keine Installation",
    description:
      "Keine Software-Installation notwendig – das Newslettersystem läuft komplett webbasiert in Ihrem Browser.",
  },
  {
    icon: "BarChart3",
    title: "Integrierte Statistik",
    description:
      "Verfolgen Sie Öffnungsraten, Klickraten und Abonnenten-Entwicklung in Echtzeit mit dem integrierten Statistiktool.",
  },
  {
    icon: "Shield",
    title: "DSGVO-konform",
    description:
      "Das Newslettersystem erfüllt alle datenschutzrechtlichen Vorgaben – für rechtssicheren Versand an Ihre Mandanten.",
  },
  {
    icon: "Repeat",
    title: "Regelmäßiger Kontakt",
    description:
      "Stärken Sie die Bindung zu Ihren Mandantinnen und Mandanten durch regelmäßige, relevante Informationen.",
  },
];

export const newsletterPricing = {
  license: "1.740",
  monthly: "94",
  licenseSuffix: "einmalige Einrichtung",
  monthlySuffix: "pro Monat",
};

export const newsletterTestimonial: Testimonial = {
  quote:
    "Auch das Newslettersystem ist für uns ein echter Gewinn: Unsere Mandantinnen und Mandanten werden zeitnah und professionell über aktuelle Themen informiert. Das schafft Vertrauen und spart uns viel Zeit.",
  name: "Andreas Marx",
  role: "Dipl. Betriebswirt (FH), Steuerberater",
  company: "steuerberater-marx.de",
};

/* ──────────────────────────────────────────────
   COMPARISON (Platform vs. tools)
   ────────────────────────────────────────────── */

export const comparisonData = {
  without: {
    title: "Ohne taxHub",
    items: [
      "Insellösungen ohne Zusammenspiel",
      "Mehrere Anbieter, mehrere Logins",
      "Kein Überblick über Ihre Kanäle",
      "Zeitaufwändige manuelle Abstimmung",
      "Inkonsistenter Kanzleiauftritt",
    ],
  },
  with: {
    title: "Mit taxHub",
    items: [
      "Alle Kanäle in einer Plattform",
      "Ein Dashboard, ein Login",
      "Ein Ansprechpartner für alles",
      "Automatisierte Workflows",
      "Konsistenter Auftritt über alle Kanäle",
    ],
  },
};

/* ──────────────────────────────────────────────
   FEATURED SECTION (intent-adaptive)
   ────────────────────────────────────────────── */

export type FeaturedContent = {
  badge: string;
  title: string;
  subtitle: string;
  features: string[];
  ctaLabel: string;
  ctaTo: string;
};

export const featuredVariants: Record<Intent, FeaturedContent> = {
  default: {
    badge: "Highlight",
    title: "Mandanten erreichen – automatisch.",
    subtitle:
      "Mit dem Newslettersystem im taxHub versenden Sie personalisierte Kanzleinews mit wenigen Klicks.",
    features: [
      "Personalisierter Versand im Kanzleidesign",
      "Integrierte Öffnungs- und Klickstatistiken",
      "DSGVO-konformer Versand",
      "Import von Textbausteinen und Vorlagen",
    ],
    ctaLabel: "Newslettersystem entdecken",
    ctaTo: "/newsletter",
  },
  newsletter: {
    badge: "Newslettersystem",
    title: "Ihr Newsletter. Ihr Design. Ihre Mandanten.",
    subtitle:
      "Versenden Sie professionelle Kanzleinews – ohne Agentur, ohne Aufwand.",
    features: [
      "Maßgeschneiderte Newsletter im Kanzleidesign",
      "Einfache Bedienung mit Vorlagen",
      "Integriertes Statistiktool",
      "Keine Software-Installation notwendig",
    ],
    ctaLabel: "14 Tage kostenlos testen",
    ctaTo: "/newsletter#testen",
  },
  website: {
    badge: "Kanzlei-Website",
    title: "Ihre Website – in 12 Wochen online.",
    subtitle:
      "Professioneller Kanzleiauftritt mit aktuellem Content, Onlinetools und barrierefreiem Design.",
    features: [
      "Topaktuelle Website ohne Aufwand für Sie",
      "Laufende fachliche Wartung",
      "Praktische Mandanteninfos und Onlinetools",
      "Barrierefreies Design nach aktuellen Standards",
    ],
    ctaLabel: "Website-Paket ansehen",
    ctaTo: "/website",
  },
  ai: {
    badge: "AI Studio",
    title: "Ihre Kanzlei. Ihre KI. Ihr Vorsprung.",
    subtitle:
      "Mit KI-Avatar und Steuernews-TV positionieren Sie sich als digitale Vorzeigekanzlei.",
    features: [
      "KI-Avatar mit Ihrer Stimme und Tonalität",
      "Automatische Steuernews-TV-Ausgaben",
      "Video-Academy für Mandanten",
      "Einsatz auf Website, Social Media und YouTube",
    ],
    ctaLabel: "Demo anfordern",
    ctaTo: "/ai-studio",
  },
  lead: {
    badge: "Lead Management",
    title: "Mandanten und Fachkräfte gezielt gewinnen.",
    subtitle:
      "Mit Social-Media-Kampagnen, SEO und Google Ads erreichen Sie Ihre Zielgruppe punktgenau.",
    features: [
      "Conversion-Kampagnen auf Social Media",
      "Suchmaschinenoptimierung (SEO & GEO)",
      "Google Ads und Unternehmensprofil",
      "Monatliches Reporting zur Performance",
    ],
    ctaLabel: "Kampagnen entdecken",
    ctaTo: "/lead-management",
  },
};

/* ──────────────────────────────────────────────
   PROCESS STEPS
   ────────────────────────────────────────────── */

export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Kennenlernen",
    description:
      "Buchen Sie Ihren Wunschtermin. Wir finden heraus, ob wir zueinander passen.",
  },
  {
    step: 2,
    title: "Ziele festlegen",
    description:
      "Gemeinsam entwickeln wir den Marketingmix, der Ihre Kanzleiziele optimal unterstützt.",
  },
  {
    step: 3,
    title: "Design & Umsetzung",
    description:
      "80 kreative Köpfe entwerfen Design, Tools und Content für Ihren individuellen Kanzleiauftritt.",
  },
  {
    step: 4,
    title: "Vorschau & Feedback",
    description:
      "Sie sehen Ihren neuen Kanzleiauftritt live in der Vorschau – mit Raum für Wünsche und Anpassungen.",
  },
  {
    step: 5,
    title: "Go-Live & Support",
    description:
      "Nach Ihrer Freigabe geht Ihr Auftritt online. Unser Team bleibt an Ihrer Seite.",
  },
];
