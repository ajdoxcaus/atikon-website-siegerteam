import type { Intent } from "../hooks/useIntent";

/* ──────────────────────────────────────────────
   INTENT VARIANTS (unified personalization data)
   ────────────────────────────────────────────── */

export type IntentVariant = {
  hero: {
    badge: string;
    headline: string;
    subline: string;
    cta: string;
    ctaTo: string;
    ctaSecondary: string;
    ctaSecondaryTo: string;
  };
  featured: {
    badge: string;
    title: string;
    subtitle: string;
    benefits: string[];
    ctaLabel: string;
    ctaTo: string;
  };
};

export const intentVariants: Record<Intent, IntentVariant> = {
  default: {
    hero: {
      badge: "Vorsprung, der bleibt.",
      headline: "Die Plattform für\nKanzleiwachstum.",
      subline:
        "Mit dem taxHub steuern Sie Website, Content, Newslettersystem, KI und Kampagnen in einem System – speziell für Steuerkanzleien.",
      cta: "Termin buchen",
      ctaTo: "#termin",
      ctaSecondary: "taxHub ansehen",
      ctaSecondaryTo: "#plattform",
    },
    featured: {
      badge: "taxHub Plattform",
      title: "Alles in einem System. Alles unter Kontrolle.",
      subtitle:
        "Der taxHub bündelt Website, Content, Newsletter, KI und Kampagnen in einer zentralen Plattform – damit Sie sich auf Ihre Mandanten konzentrieren können.",
      benefits: [
        "Ein System statt viele Einzellösungen",
        "Einheitlicher Markenauftritt über alle Kanäle",
        "Klare Conversion-Wege von Anzeige bis Termin",
      ],
      ctaLabel: "Plattform entdecken",
      ctaTo: "#module",
    },
  },
  newsletter: {
    hero: {
      badge: "taxHub Newslettersystem",
      headline: "Mandanten informieren.\nAufwand reduzieren.",
      subline:
        "Alles im taxHub: personalisierte Kanzleinews versenden, Öffnungsraten tracken und Mandantenbindung stärken – DSGVO-konform.",
      cta: "14 Tage kostenlos testen",
      ctaTo: "/newsletter#testen",
      ctaSecondary: "Funktionen ansehen",
      ctaSecondaryTo: "/newsletter#funktionen",
    },
    featured: {
      badge: "Newslettersystem",
      title: "Ihr Newsletter. Ihr Design. Ihre Mandanten.",
      subtitle:
        "Versenden Sie professionelle Kanzleinews im eigenen Design – ohne Agentur, ohne Aufwand, mit voller Kontrolle.",
      benefits: [
        "Personalisierter Versand im Kanzleidesign",
        "Integrierte Öffnungs- und Klickstatistiken",
        "DSGVO-konformer Versand ohne Installation",
      ],
      ctaLabel: "14 Tage kostenlos testen",
      ctaTo: "/newsletter",
    },
  },
  website: {
    hero: {
      badge: "taxHub Website",
      headline: "Ihre Website wird zur\nMarketingplattform.",
      subline:
        "Professioneller Kanzleiauftritt mit Onlinetools, barrierefreiem Design und laufender fachlicher Wartung – in 12 Wochen online.",
      cta: "Termin buchen",
      ctaTo: "#termin",
      ctaSecondary: "Website-Paket ansehen",
      ctaSecondaryTo: "/website",
    },
    featured: {
      badge: "Kanzlei-Website",
      title: "In 12 Wochen online – mit laufender Pflege.",
      subtitle:
        "Ihre Website wird zum Herzstück Ihres digitalen Auftritts: aktueller Content, praktische Mandanteninfos und nahtlose Anbindung an alle taxHub-Module.",
      benefits: [
        "Barrierefreies Design nach aktuellen Standards",
        "Onlinetools und Rechner für Ihre Mandanten",
        "Laufende fachliche Content-Wartung inklusive",
      ],
      ctaLabel: "Website-Paket ansehen",
      ctaTo: "/website",
    },
  },
  ai: {
    hero: {
      badge: "taxHub AI Studio",
      headline: "KI für Steuerkanzleien,\ndie im Alltag ankommt.",
      subline:
        "Ihr digitaler KI-Avatar spricht Ihre Steuernews mit Ihrer Stimme. Positionieren Sie sich als digitale Vorzeigekanzlei.",
      cta: "Demo anfordern",
      ctaTo: "#termin",
      ctaSecondary: "Mehr erfahren",
      ctaSecondaryTo: "/ai-studio",
    },
    featured: {
      badge: "AI Studio",
      title: "Ihre Kanzlei. Ihre KI. Ihr Vorsprung.",
      subtitle:
        "Mit KI-Avatar und Steuernews-TV positionieren Sie sich als digitale Vorzeigekanzlei – automatisiert und in Ihrer Tonalität.",
      benefits: [
        "KI-Avatar mit Ihrer Stimme und Tonalität",
        "Automatische Steuernews-TV-Ausgaben",
        "Video-Academy für Mandanten auf allen Kanälen",
      ],
      ctaLabel: "Demo anfordern",
      ctaTo: "/ai-studio",
    },
  },
  lead: {
    hero: {
      badge: "taxHub Lead Management",
      headline: "Aus Klicks werden\nAnfragen und Bewerbungen.",
      subline:
        "Gewinnen Sie gezielt neue Mandanten und Fachkräfte – mit Social-Media-Kampagnen, SEO und Google Ads aus einer Hand.",
      cta: "Termin buchen",
      ctaTo: "#termin",
      ctaSecondary: "Kampagnen entdecken",
      ctaSecondaryTo: "/lead-management",
    },
    featured: {
      badge: "Lead Management",
      title: "Mandanten und Fachkräfte gezielt gewinnen.",
      subtitle:
        "Von der Social-Media-Anzeige bis zur Terminbuchung: der taxHub steuert Ihre Kampagnen und liefert messbare Ergebnisse.",
      benefits: [
        "Conversion-Kampagnen auf Social Media",
        "Google Ads und Unternehmensprofil-Management",
        "Monatliches Performance-Reporting",
      ],
      ctaLabel: "Kampagnen entdecken",
      ctaTo: "/lead-management",
    },
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
  image?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Seit dem taxHub hat sich unser Abstimmungsaufwand halbiert. Website, Newsletter und Social Media laufen jetzt aus einem System – das spart uns jede Woche Stunden.",
    name: "Steuerkanzlei aus München",
    role: "12 Mitarbeitende",
    company: "Beispiel-Case",
    image: "/images/testimonial-1.jpg",
  },
  {
    quote:
      "Unsere Mandantenkommunikation ist deutlich professioneller geworden. Der Newsletter geht regelmäßig raus, die Website ist immer aktuell – und wir müssen uns um fast nichts kümmern.",
    name: "Wachstumsorientierte Kanzlei in Österreich",
    role: "25+ Mitarbeitende",
    company: "Beispiel-Case",
    image: "/images/testimonial-2.jpg",
  },
  {
    quote:
      "Über die Lead-Kampagnen kommen jeden Monat qualifizierte Anfragen rein. Wir steuern alles im Dashboard und sehen genau, was funktioniert.",
    name: "Kanzlei mit Wachstumsfokus",
    role: "Standort Norddeutschland",
    company: "Beispiel-Case",
    image: "/images/testimonial-3.jpg",
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

export const newsletterPricing = {
  license: "1.740",
  monthly: "94",
  licenseSuffix: "einmalige Einrichtung",
  monthlySuffix: "pro Monat",
};

/* ──────────────────────────────────────────────
   COMPARISON (Platform vs. tools)
   ────────────────────────────────────────────── */

export const comparisonData = {
  without: {
    title: "Klassischer Flickenteppich",
    items: [
      "Website bei Anbieter A",
      "Leads in Excel oder Anbieter B",
      "Newsletter über ein drittes Tool",
      "Kampagnen separat gesteuert",
      "Viel Abstimmung zwischen Dienstleistern",
      "Keine durchgängige Steuerung",
    ],
  },
  with: {
    title: "Mit dem taxHub",
    items: [
      "Alles in einem System",
      "Klare Prozesse von Lead bis Termin",
      "Einheitlicher Kanzleiauftritt",
      "Weniger Aufwand, mehr Wirkung",
      "Bessere Conversion-Wege",
      "Skalierbar für Kanzleiwachstum",
    ],
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
    title: "Termin buchen",
    description:
      "Wählen Sie Ihren Wunschtermin. In 30 Minuten klären wir, was Ihre Kanzlei braucht.",
  },
  {
    step: 2,
    title: "Plattform-Setup festlegen",
    description:
      "Wir definieren gemeinsam Ihren Modulumfang – abgestimmt auf Ihre Ziele und Ihr Budget.",
  },
  {
    step: 3,
    title: "Module aktivieren",
    description:
      "Unser Team richtet alles ein. Sie bekommen einen Vorschaulink und geben Feedback.",
  },
  {
    step: 4,
    title: "Ergebnisse messen",
    description:
      "Ihr taxHub läuft. Sie sehen Leads, Statistiken und Erfolge live im Dashboard.",
  },
];
