"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ServicesPage from "@/components/services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesPage />
      <Footer />
    </>
  );
}