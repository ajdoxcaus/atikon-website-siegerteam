import { useState } from "react";
import { Check, X, ArrowRight, Star } from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

type Feature = {
  label: string;
  values: (string | null)[];
};

type PackageTier = {
  name: string;
  price: string;
  unit: string;
  highlighted?: boolean;
};

const fbigTiers: PackageTier[] = [
  { name: "Premium", price: "1.800", unit: "/ Monat" },
  { name: "Plus", price: "690", unit: "/ Monat", highlighted: true },
  { name: "Basic", price: "244", unit: "/ Monat" },
  { name: "Content", price: "159", unit: "/ Monat" },
];

const fbigFeatures: Feature[] = [
  {
    label: "Steuernews",
    values: [
      "4/Monat mit Kanzleimomente-Bildern",
      "4/Monat mit allg. Kanzleibildern",
      "4 autom. Steuernews/Monat",
      "Steuernews Content enthalten",
    ],
  },
  {
    label: "Individuelle Postings",
    values: [
      "2 indiv. + 2 halbindiv. + 2 Kanzleimomente",
      "2 indiv. + 2 halbindiv. + 1 Kanzleimomente",
      "Ggf. halbindividuell",
      null,
    ],
  },
  {
    label: "Kanzleimomente",
    values: [
      "Fototermin alle 6 Mon., 2 Postings/Mon.",
      "Einmalig, dann KI-angepasst",
      null,
      null,
    ],
  },
  {
    label: "Video + KI-Content",
    values: [
      "1 Video/Mon. + 4 KI-Avatar Videos",
      "2 KI-Avatar Videos inkl.",
      null,
      null,
    ],
  },
  {
    label: "Employer Branding",
    values: [
      "Monatl. Posting für Zielgruppe beworben",
      null,
      null,
      null,
    ],
  },
  {
    label: "Strategische Betreuung",
    values: [
      "Strateg. Meetings, monatl. Redaktionsplan",
      "Punktuelle Meetings, quartalweiser Plan",
      null,
      null,
    ],
  },
  {
    label: "Service",
    values: [
      "Fixe Ansprechperson",
      "Fixe Ansprechperson (Onboarding)",
      "Vollautomatisiert",
      "Content-Lieferung",
    ],
  },
  {
    label: "KI-Bildgenerator",
    values: [
      "Steuernews",
      "Steuernews + halbindiv. Postings",
      "Alle Postings",
      null,
    ],
  },
];

const linkedinTiers: PackageTier[] = [
  { name: "Personal", price: "490", unit: "/ Monat", highlighted: true },
  { name: "Kanzlei", price: "490", unit: "/ Monat" },
];

const linkedinFeatures: Feature[] = [
  {
    label: "Fokus",
    values: [
      "Persönliche Expertenmarke aufbauen",
      "Arbeitgeber- und Expertenmarke stärken",
    ],
  },
  {
    label: "Postings",
    values: [null, "4 individuelle Postings/Monat"],
  },
  {
    label: "AI Search Positionierung",
    values: ["Inklusive", "Inklusive"],
  },
  {
    label: "Kundenbetreuung",
    values: ["Monatlich", "Monatlich"],
  },
  {
    label: "Service",
    values: [
      "Fixe Ansprechperson, dann SOME-Team",
      "Fixe Ansprechperson, dann SOME-Team",
    ],
  },
  {
    label: "KI-Bildgenerator",
    values: ["Inklusive", "Inklusive"],
  },
];

type Tab = "fbig" | "linkedin";

export function SocialMediaPricing() {
  const [tab, setTab] = useState<Tab>("fbig");

  const tiers = tab === "fbig" ? fbigTiers : linkedinTiers;
  const features = tab === "fbig" ? fbigFeatures : linkedinFeatures;
  const colCount = tiers.length;

  return (
    <SectionShell id="pakete" bg="white" spacing="lg">
      <SectionHeading
        title="Unsere Social-Media-Pakete."
        subtitle="Wählen Sie das Paket, das zu Ihrer Kanzlei passt – von vollautomatisiert bis zur strategischen Premiumbetreuung."
      />

      {/* Tab selector */}
      <div className="mx-auto mb-10 flex max-w-md rounded-full border border-neutral-200 bg-neutral-50 p-1">
        <button
          type="button"
          onClick={() => setTab("fbig")}
          className={`flex-1 rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
            tab === "fbig"
              ? "bg-atikon-violet text-white shadow-sm"
              : "text-neutral-600 hover:text-atikon-violet"
          }`}
        >
          Facebook + Instagram
        </button>
        <button
          type="button"
          onClick={() => setTab("linkedin")}
          className={`flex-1 rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
            tab === "linkedin"
              ? "bg-atikon-violet text-white shadow-sm"
              : "text-neutral-600 hover:text-atikon-violet"
          }`}
        >
          LinkedIn
        </button>
      </div>

      {/* Comparison table */}
      <div className="overflow-x-auto -mx-4 px-4 pt-4">
        <table className="w-full border-collapse">
          {/* Header: Package names + prices */}
          <thead>
            <tr>
              <th className="w-[200px] min-w-[160px]" />
              {tiers.map((tier) => (
                <th
                  key={tier.name}
                  className={`relative px-4 pt-6 pb-4 text-center align-bottom ${
                    tier.highlighted
                      ? "bg-atikon-violet/[0.03] rounded-t-2xl"
                      : ""
                  }`}
                >
                  {tier.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-atikon-violet px-3 py-1 text-[11px] font-semibold text-white shadow flex items-center gap-1 whitespace-nowrap">
                      <Star size={11} />
                      Empfohlen
                    </span>
                  )}
                  <span className="block text-base font-bold text-atikon-black">
                    {tier.name}
                  </span>
                  <span className="block mt-1 text-2xl font-extrabold text-atikon-black">
                    € {tier.price},–
                  </span>
                  <span className="block text-xs text-neutral-500">
                    {tier.unit}
                  </span>
                  <span className="block mt-1 text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                    Mindestlaufzeit 1 Jahr
                  </span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {features.map((f, fi) => (
              <tr
                key={f.label}
                className={fi % 2 === 0 ? "bg-neutral-50/60" : "bg-white"}
              >
                {/* Feature label */}
                <td className="px-4 py-3 text-sm font-semibold text-atikon-black align-top">
                  {f.label}
                </td>

                {/* Values per tier */}
                {tiers.map((tier, ti) => {
                  const val = f.values[ti];
                  return (
                    <td
                      key={tier.name}
                      className={`px-4 py-3 text-center align-top ${
                        tier.highlighted ? "bg-atikon-violet/[0.03]" : ""
                      }`}
                    >
                      {val ? (
                        <span className="inline-flex items-start gap-1.5 text-xs text-neutral-700">
                          <Check
                            size={14}
                            className="mt-0.5 shrink-0 text-atikon-violet"
                          />
                          <span className="text-left">{val}</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-xs text-neutral-300">
                          <X size={14} className="shrink-0" />
                          <span>–</span>
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}

            {/* CTA row */}
            <tr>
              <td className="px-4 pt-6 pb-4" />
              {tiers.map((tier) => (
                <td
                  key={tier.name}
                  className={`px-4 pt-6 pb-4 text-center ${
                    tier.highlighted
                      ? "bg-atikon-violet/[0.03] rounded-b-2xl"
                      : ""
                  }`}
                >
                  <Button
                    to="#termin"
                    variant={tier.highlighted ? "primary" : "secondary"}
                    size="sm"
                  >
                    Wählen
                    <ArrowRight size={14} />
                  </Button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-8 text-center text-sm text-neutral-400">
        Alle Preise zzgl. MwSt. Einmalige Einrichtung ab € 1.790,–.
        Mindestvertragslaufzeit 1 Jahr.
      </p>
    </SectionShell>
  );
}
