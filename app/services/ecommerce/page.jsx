import ServiceTemplate from "@/components/services/detail/service-template";

export default function EcommercePage() {
  return (
    <ServiceTemplate
      title="E-commerce Solutions"
      description="Complete marketplace and store management for scalable growth."
      image="/assets/services/ec-banner.jpeg"
      offerings={[
        "Amazon & Flipkart Management",
        "Product Listing Optimization",
        "Inventory & Order Handling",
        "Marketplace Ads",
        "Growth Strategy",
      ]}
      outcome="Increased product visibility, higher sales, and scalable growth."
    />
  );
}