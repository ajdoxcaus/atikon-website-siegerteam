import { newsletterPricing, newsletterTestimonial } from "../../data/content";
import { SectionShell } from "../ui/SectionShell";
import { PricingCard } from "../ui/PricingCard";
import { TestimonialCard } from "../ui/TestimonialCard";

export function NewsletterPricing() {
  return (
    <>
      <SectionShell bg="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="mx-auto lg:mx-0">
            <PricingCard
              label="Newslettersystem"
              price={`€ ${newsletterPricing.monthly},–`}
              priceSuffix="/ Monat"
              setupPrice={`€ ${newsletterPricing.license},–`}
              setupSuffix="Einmalige Einrichtung"
              features={[
                "Newsletter im Kanzleidesign",
                "Unbegrenzte Vorlagen",
                "Integrierte Statistiken",
                "DSGVO-konformer Versand",
                "Persönlicher Support",
              ]}
              ctaLabel="14 Tage kostenlos testen"
              ctaTo="#testen"
              highlighted
            />
          </div>

          <div>
            <h2>Transparent und fair.</h2>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Keine versteckten Kosten, keine Mindestlaufzeit für den Test.
              Starten Sie mit einer kostenlosen 14-Tage-Testphase und
              überzeugen Sie sich selbst.
            </p>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Der regelmäßige Kontakt mit Mandantinnen und Mandanten
              stärkt die Bindung an Ihre Steuerberatung. Mit dem
              Atikon-Newslettersystem versenden und verwalten Sie News
              aus Ihrer Kanzlei mit wenigen Klicks.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell bg="neutral">
        <TestimonialCard {...newsletterTestimonial} layout="centered" />
      </SectionShell>
    </>
  );
}
