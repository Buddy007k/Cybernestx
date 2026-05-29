import ServiceTemplate from "@/components/services/detail/service-template";
import { getServiceBySlug } from "@/lib/services";
import {
  normalizeFeatures,
  normalizePricingPlans,
} from "@/lib/service-data";
import { notFound } from "next/navigation";

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <ServiceTemplate
      title={service.title}
      description={service.description}
      image={service.image}
      serviceId={service.id}
      offerings={normalizeFeatures(service.features)}
      pricingPlans={normalizePricingPlans(service.pricingPlans)}
      outcome={service.outcome || "A professional result that drives growth and success."}
    />
  );
}
