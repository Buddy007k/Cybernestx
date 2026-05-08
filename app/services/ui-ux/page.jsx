import ServiceTemplate from "@/components/services/detail/service-template";

export default function UIUXPage() {
  return (
    <ServiceTemplate
      title="UI/UX Design"
      description="We design intuitive, modern, and conversion-focused user experiences."
      image="/assets/ui-ux-card.jpg"
      offerings={[
        "Website & App UI Design",
        "Wireframing & Prototyping",
        "User Experience Optimization",
        "Conversion-Focused Design",
      ]}
      outcome="Better engagement, improved usability, and higher conversion rates."
    />
  );
}