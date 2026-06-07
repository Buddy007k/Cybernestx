"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { getAllServices } from "@/lib/services";

export default function ServicesPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);

    const fetchServices = async () => {
      try {
        const data = await getAllServices();

        if (!data || data.length === 0) {
          setServices([]);
          return;
        }

        // 🔥 PRIORITIZATION LOGIC
        const sorted = data.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;

          return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
        });

        // 🔥 LIMIT TO 6
        setServices(sorted.slice(0, 6));
      } catch (err) {
        console.error("Error loading services:", err);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <section className="py-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* 🔥 Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-strong">
          Our Core Services
        </h1>

        {/* 🔥 Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* LOADING */}
          {loading && (
            <p className="text-center col-span-3 text-muted">
              Loading services...
            </p>
          )}

          {/* EMPTY */}
          {!loading && services.length === 0 && (
            <p className="text-center col-span-3 text-muted">
              No services available 🚀
            </p>
          )}

          {/* SERVICES */}
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group"
            >
              <div
                className={`h-full flex flex-col rounded-2xl overflow-hidden border transition duration-300 cursor-pointer
                ${
                  isDark
                    ? "bg-black/60 backdrop-blur-lg border-white/10 hover:shadow-xl hover:shadow-indigo-500/10"
                    : "bg-white border-gray-200 shadow-sm hover:shadow-xl hover:bg-gray-50"
                }`}
              >
                {/* 🔥 IMAGE */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image || "/assets/placeholder.jpg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* HOVER */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition duration-300 px-5 py-2 rounded-lg bg-white text-black text-sm font-medium shadow-md">
                      View Details
                    </span>
                  </div>
                </div>

                {/* 🔥 CONTENT */}
                <div className="p-6 flex flex-col flex-grow">
                  
                  <h3 className="text-xl font-semibold text-strong">
                    {service.title}
                  </h3>

                  {/* ✅ CLAMPED DESCRIPTION */}
                  <p className="text-sm text-muted mt-2 line-clamp-3">
                    {service.description ||
                      "Premium service tailored for your business growth."}
                  </p>

                  {/* CTA ALWAYS AT BOTTOM */}
                  <span className="text-orange-600 text-sm font-medium mt-auto pt-4 hover:underline">
                    Read More →
                  </span>

                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}