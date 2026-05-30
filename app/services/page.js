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

      {services && services.length > 0 ? (
        <ServicesGrid services={services} />
      ) : (
        <div className="py-16 text-center">
          <p className="text-muted text-lg">
            No services available right now 🚀
          </p>
        </div>
      )}

      <ServicesWhyUs />
      <ServicesCTA />
    </>
  );
}