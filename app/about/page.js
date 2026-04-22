import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Section from "@/components/ui/section";
import Card from "@/components/ui/card";

export default function About() {
  return (
    <>
      <Navbar />

      <Section title="About CyberNestX">
        <p className="text-strong text-lg text-center max-w-3xl mx-auto">
          CyberNestX is focused on delivering innovative digital solutions
          that help businesses scale and succeed in the modern world.
        </p>
      </Section>

      <Section title="Our Vision">
        <Card>
          To be a leading global provider of digital and AI-driven solutions.
        </Card>
      </Section>

      <Section title="Our Mission">
        <Card>
          To empower businesses with technology, creativity, and strategy.
        </Card>
      </Section>

      <Footer />
    </>
  );
}