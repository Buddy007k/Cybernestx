import ServiceTemplate from "@/components/services/detail/service-template";

export default function SEOPage() {
  return (
    <ServiceTemplate
      title="Search Engine Optimization"
      description="Increase your visibility and rank higher with strategic SEO solutions."
      image="/assets/SEO-card.jpeg"
      offerings={[
        "Keyword Research & Strategy",
        "On-Page SEO Optimization",
        "Technical SEO",
        "Link Building",
        "Performance Tracking",
      ]}
      outcome="Higher rankings, more traffic, and consistent organic growth."
    />
  );
}