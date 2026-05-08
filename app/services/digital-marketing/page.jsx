import ServiceTemplate from "@/components/services/detail/service-template";

export default function DigitalMarketingPage() {
  return (
    <ServiceTemplate
      title="Digital Marketing"
      description="We create data-driven campaigns that generate leads and maximize ROI."
      image="/assets/digital-marketing-card.jpeg"
      offerings={[
        "Social Media Marketing",
        "Google Ads & PPC",
        "Content Marketing",
        "Lead Generation Campaigns",
        "Brand Awareness Strategy",
      ]}
      outcome="Increased visibility, engagement, and measurable ROI."
    />
  );
}