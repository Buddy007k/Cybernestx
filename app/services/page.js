import ServicesHero from "@/components/services/services-hero";
import ServicesGrid from "@/components/services/services-grid";
import ServicesWhyUs from "@/components/services/services-whyus";
import ServicesCTA from "@/components/services/services-cta";
import { getAllServices } from "@/lib/services";

export default async function ServicesPage() {
  // Fetch services dynamically from Firestore
  const services = await getAllServices();

  return (
    <>
      <ServicesHero />
      <ServicesGrid services={services} />
      <ServicesWhyUs />
      <ServicesCTA />
    </>
  );
}
