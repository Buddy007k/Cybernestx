import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Section from "@/components/ui/section";
import Card from "@/components/ui/card";

export default function Services() {
  return (
    <>
      <Navbar />

      <Section title="Our Services">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="font-bold mb-2">Web Development</h3>
            Building fast, modern, scalable websites.
          </Card>

          <Card>
            <h3 className="font-bold mb-2">Digital Marketing</h3>
            SEO, branding, and growth strategies.
          </Card>

          <Card>
            <h3 className="font-bold mb-2">App Development</h3>
            Android & cross-platform applications.
          </Card>

          <Card>
            <h3 className="font-bold mb-2">AI Solutions</h3>
            Smart automation and AI-powered tools.
          </Card>
        </div>
      </Section>

      <Footer />
    </>
  );
}