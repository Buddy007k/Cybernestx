"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ServicesPage from "@/components/services";
import WhatWeDo from "@/components/what-we-do";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <ServicesPage />
      <Footer />
    </>
  );
}