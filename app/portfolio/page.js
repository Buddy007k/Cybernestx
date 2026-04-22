import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Section from "@/components/ui/section";
import Card from "@/components/ui/card";

export default function Portfolio() {
  return (
    <>
      <Navbar />

      <Section title="Our Projects">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>Business Website</Card>
          <Card>E-commerce Platform</Card>
          <Card>Mobile App</Card>
          <Card>Marketing Campaign</Card>
          <Card>AI Tool</Card>
        </div>
      </Section>

      <Footer />
    </>
  );
}