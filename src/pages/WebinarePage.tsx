import { WebinareHero } from "../components/wissen/WebinareHero";
import { WebinareNext } from "../components/wissen/WebinareNext";
import { WebinareTestimonials } from "../components/wissen/WebinareTestimonials";
import { WebinareArchiv } from "../components/wissen/WebinareArchiv";
import { WebinareCTA } from "../components/wissen/WebinareCTA";

export function WebinarePage() {
  return (
    <>
      <WebinareHero />
      <WebinareNext />
      <WebinareTestimonials />
      <WebinareArchiv />
      <WebinareCTA />
    </>
  );
}
