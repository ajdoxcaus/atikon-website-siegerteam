import {
  MousePointerClick,
  Eye,
  MessageSquareText,
  Globe,
  Check,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

type Campaign = {
  icon: LucideIcon;
  name: string;
  description: string;
  setup: string;
  monthly: string;
  budget: string | null;
  features: string[];
};

const campaigns: Campaign[] = [
  {
    icon: MousePointerClick,
    name: "Conversion-Kampagne",
    description:
      "Gezielt Bewerber über Social Media erreichen. Interessenten landen direkt auf Ihrer Stellenausschreibung.",
    setup: "899",
    monthly: "199",
    budget: "ab 600",
    features: [
      "Kampagnensetup auf Facebook, Instagram & LinkedIn",
      "Laufende Optimierung für maximale Effizienz",
      "Monatliches Performance-Reporting",
      "Direkte Weiterleitung auf Ihre Karriereseite",
    ],
  },
  {
    icon: Eye,
    name: "Awareness-Kampagne",
    description:
      "Bauen Sie Ihre Marke bei der Wunsch-Zielgruppe auf – proaktiv, noch bevor eine Stelle frei wird.",
    setup: "599",
    monthly: "149",
    budget: "ab 400",
    features: [
      "Gezielte Reichweitenkampagne in Ihrer Region",
      "Digitales Branding für Ihre Kanzlei",
      "Ansprache von Mandanten und Fachkräften",
      "Monatliches Reporting zur Performance",
    ],
  },
  {
    icon: MessageSquareText,
    name: "Lead-Ads-Kampagne",
    description:
      "Bewerber können sich direkt über Facebook oder Instagram mit wenigen Klicks bewerben.",
    setup: "699",
    monthly: "179",
    budget: "ab 600",
    features: [
      "Direktbewerbung über Facebook/Instagram",
      "Minimale Hürde für maximale Bewerbungen",
      "Ideal für schnelle Stellenbesetzungen",
      "Betreuung und Auswertung durch Experten",
    ],
  },
  {
    icon: Globe,
    name: "Landingpage",
    description:
      "Professionelle Zielseite, die Ihre Kanzlei als modernen Arbeitgeber und Experten präsentiert.",
    setup: "999",
    monthly: "59",
    budget: null,
    features: [
      "Auf die Zielgruppe abgestimmtes Design",
      "Conversion-optimiert für Anfragen & Bewerbungen",
      "Monatliche Wartung inkl. Hosting",
      "Nahtlose Integration mit Kampagnen",
    ],
  },
];

const vorteile = [
  "Erstellung und Einrichtung Ihrer Werbeanzeigen",
  "Betreuung und Auswertung durch unser Expertenteam",
  "Monatliches Reporting zur Performance",
  "Individuelle Anpassung an Ihre Bedürfnisse",
  "Effiziente Zielgruppenansprache in Ihrer Region",
  "Digitales Branding für Ihre Kanzlei",
];

export function SocialMediaKampagnen() {
  return (
    <SectionShell id="kampagnen" bg="neutral" spacing="lg">
      <div className="mx-auto max-w-2xl text-center">
        <Badge variant="orange" size="sm">
          Kampagnenmanagement
        </Badge>
        <h2 className="mt-5">
          Mandanten und Fachkräfte punktgenau erreichen.
        </h2>
        <p className="mt-4 text-neutral-600 leading-relaxed">
          Mit effektiven und messbaren Social-Media-Kampagnen zur
          Mitarbeitersuche und Mandantengewinnung. Das Atikon-Team unterstützt
          Sie auf Facebook, Instagram und LinkedIn.
        </p>
      </div>

      {/* Vorteile */}
      <div className="mt-10 mx-auto max-w-3xl grid gap-x-8 gap-y-3 sm:grid-cols-2">
        {vorteile.map((v) => (
          <div key={v} className="flex items-start gap-2.5 text-sm text-neutral-700">
            <Check size={16} className="mt-0.5 shrink-0 text-atikon-orange" />
            {v}
          </div>
        ))}
      </div>

      {/* Campaign cards -- grid with subgrid-like alignment */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {campaigns.map((c) => {
          const Icon = c.icon;
          return (
            <div
              key={c.name}
              className="grid grid-rows-[auto_auto_3.5rem_auto_auto_1fr] rounded-2xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              {/* Row 1: Icon */}
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-atikon-orange/8 text-atikon-orange">
                <Icon size={22} />
              </div>

              {/* Row 2: Title */}
              <h3 className="text-base font-bold text-atikon-black">
                {c.name}
              </h3>

              {/* Row 3: Description (fixed height for alignment) */}
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {c.description}
              </p>

              {/* Row 4: Prices */}
              <div className="mt-4 space-y-1.5 rounded-lg bg-neutral-50 p-3">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-500">Einrichtung</span>
                  <span className="font-semibold text-atikon-black tabular-nums">
                    € {c.setup},–
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-500">Betreuung/Mon.</span>
                  <span className="font-semibold text-atikon-black tabular-nums">
                    € {c.monthly},–
                  </span>
                </div>
                {c.budget && (
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">Werbebudget/Mon.</span>
                    <span className="font-semibold text-atikon-black tabular-nums">
                      € {c.budget},–
                    </span>
                  </div>
                )}
              </div>

              {/* Row 5: Spacer for alignment */}
              <div className="mt-1" />

              {/* Row 6: Features */}
              <ul className="mt-3 space-y-2">
                {c.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-xs text-neutral-600"
                  >
                    <Check
                      size={13}
                      className="mt-0.5 shrink-0 text-atikon-orange"
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Button to="#termin" variant="secondary" size="md">
          Kampagne starten
          <ArrowRight size={18} />
        </Button>
      </div>

      <p className="mt-6 text-center text-sm text-neutral-400">
        Alle Preise zzgl. MwSt. Quelle:{" "}
        <span className="italic">Atikon Portfolio DE 2026</span>
      </p>
    </SectionShell>
  );
}
