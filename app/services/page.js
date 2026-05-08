import ServicesHero from "@/components/services/services-hero";
import ServicesGrid from "@/components/services/services-grid";
import ServicesWhyUs from "@/components/services/services-whyus";
import ServicesCTA from "@/components/services/services-cta";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesWhyUs />
      <ServicesCTA />
    </>
  );
}