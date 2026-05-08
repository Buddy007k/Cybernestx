"use client";

import Hero from "@/components/hero";
import ServicesPage from "@/components/services";
import WhatWeDo from "@/components/what-we-do";
import Growth from "@/components/growth";
import WhyUs from "@/components/why-us";
import HowWeWork from "@/components/how-we-work";
import Results from "@/components/results";
import Reviews from "@/components/reviews";
import Portfolio from "@/components/portfolio";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <ServicesPage />
      <Growth />
      <Portfolio />
      <WhyUs />
      <Reviews />
      <HowWeWork />
      <Results />
    </>
  );
}