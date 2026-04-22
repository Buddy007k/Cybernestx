import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Section from "@/components/ui/section";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="w-[600px] h-[600px] bg-indigo-500/20 blur-[120px] rounded-full absolute top-10 left-1/2 -translate-x-1/2" />
          <div className="w-[400px] h-[400px] bg-sky-400/20 blur-[100px] rounded-full absolute bottom-10 left-10" />
        </div>

        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6 text-strong">
            CyberNestX
            <br />
            <span className="gradient-text">
              Innovate. Build. Scale
            </span>
          </h1>

          <p className="text-strong text-lg mb-8">
            Empowering businesses with cutting-edge digital solutions including
            web development, marketing, mobile apps, and AI innovations.
          </p>

          <div className="flex gap-4 justify-center">
            <Button href="/login">Get Started</Button>
            <Button variant="secondary" href="/contact">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section title="Our Services">
        <div className="grid md:grid-cols-4 gap-6">
          <Card>Web Development</Card>
          <Card>Digital Marketing</Card>
          <Card>App Development</Card>
          <Card>AI Solutions</Card>
        </div>
      </Section>

      {/* ABOUT PREVIEW */}
      <Section title="Who We Are">
        <p className="text-strong text-lg text-center max-w-3xl mx-auto">
          CyberNestX is a digital solutions company dedicated to helping
          businesses innovate and grow using modern technologies and smart strategies.
        </p>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-strong">
            Ready to Build Something Amazing?
          </h2>
          <Button href="/contact">Contact Us</Button>
        </div>
      </Section>

      <Footer />
    </>
  );
}