"use client";

import { useEffect, useState } from "react";
import ServicesHero from "@/components/services/services-hero";
import ServicesGrid from "@/components/services/services-grid";
import ServicesWhyUs from "@/components/services/services-whyus";
import ServicesCTA from "@/components/services/services-cta";
import { getAllServices } from "@/lib/services";

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadServices() {
      try {
        const data = await getAllServices();
        console.log("SERVICES PAGE DATA:", data); // 🔍 debug
        setServices(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadServices();
  }, []);

  return (
    <>
      <ServicesHero />

      {loading ? (
        <div className="py-16 text-center">
          <p className="text-muted text-lg">Loading services...</p>
        </div>
      ) : services.length > 0 ? (
        <ServicesGrid services={services} />
      ) : (
        <div className="py-16 text-center">
          <p className="text-muted text-lg">
            No services available right now 🚀
          </p>
        </div>
      )}

      <ServicesWhyUs />
      <ServicesCTA />
    </>
  );
}