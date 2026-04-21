import { MapPin, Phone, Mail, Clock } from "lucide-react";

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "Pluskaufstraße 7/BC-4OG 01\n4061 Pasching, Österreich",
    href: "https://maps.google.com/?q=Pluskaufstraße+7,+4061+Pasching",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+43 732 611 266",
    href: "tel:+43732611266",
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: "info@atikon.com",
    href: "mailto:info@atikon.com",
  },
  {
    icon: Clock,
    label: "Bürozeiten",
    value: "Mo – Do: 08:00 – 16:30 Uhr\nFr: 08:00 – 13:00 Uhr",
  },
];

export function TerminInfo() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-neutral-900">Kontaktdaten</h3>
      <p className="text-sm text-neutral-600 leading-relaxed">
        Atikon EDV & Marketing GmbH – Ihr Ansprechpartner für professionelles
        Kanzleimarketing. Termine außerhalb der Bürozeiten nach Vereinbarung.
      </p>

      <div className="space-y-4">
        {CONTACT_ITEMS.map((item) => {
          const Icon = item.icon;
          const content = (
            <div className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-4 transition-colors hover:border-atikon-violet/30">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-atikon-violet/8 text-atikon-violet">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-medium text-neutral-800 whitespace-pre-line">
                  {item.value}
                </p>
              </div>
            </div>
          );

          return item.href ? (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {content}
            </a>
          ) : (
            <div key={item.label}>{content}</div>
          );
        })}
      </div>
    </div>
  );
}
