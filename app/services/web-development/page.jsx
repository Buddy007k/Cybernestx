import ServiceTemplate from "@/components/services/detail/service-template";

export default function WebDevelopmentPage() {
  return (
    <ServiceTemplate
      title="Website Development"
      description="We create high-performance, scalable, and secure websites that convert visitors into customers."
      image="/assets/services/web-banner.jpeg"
      offerings={[
        "Custom Website Development",
        "E-commerce Website Development",
        "WordPress & CMS Solutions",
        "Responsive Design",
        "Maintenance & Support",
      ]}
      outcome="A professional online presence that builds trust and drives conversions."
    />
  );
}