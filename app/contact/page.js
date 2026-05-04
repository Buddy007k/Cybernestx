import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import ContactHero from "@/components/contact/contact-hero";
import ContactInfo from "@/components/contact/contact-info";
import ContactForm from "@/components/contact/contact-form";
import ContactMap from "@/components/contact/contact-map";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
      <Footer />
    </>
  );
}