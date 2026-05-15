"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ServicesPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  const services = [
    {
      title: "Web Development",
      img: "/assets/web-d-card.jpeg",
      desc: "Modern, responsive, and high-performing websites tailored to your business needs.",
      href: "/services/web-development",
    },
    {
      title: "Search Engine Optimization (SEO)",
      img: "/assets/SEO-card.jpeg",
      desc: "Rank higher on Google and drive organic traffic with data-driven SEO strategies.",
      href: "/services/seo",
    },
    {
      title: "Digital Marketing",
      img: "/assets/digital-marketing-card.jpeg",
      desc: "Reach your target audience and generate leads with performance marketing.",
      href: "/services/digital-marketing",
    },
    {
      title: "E-commerce Solutions",
      img: "/assets/ecommerce-card.jpeg",
      desc: "Complete support for Amazon, Flipkart, and Meesho sellers.",
      href: "/services/ecommerce",
    },
    {
      title: "Graphic Design",
      img: "/assets/graphic-design-card.jpeg",
      desc: "Create compelling visual content that resonates with your audience.",
      href: "/services/ui-ux",
    },
    {
      title: "Domain Service",
      img: "/assets/domain-service-card.jpeg",
      desc: "Deploy, scale, and manage apps efficiently in the cloud.",
      href: "/services/domain",
    },
  ];

  return (
    <section className="py-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-strong">
          Our Core Services
        </h1>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            
            <Link key={i} href={service.href} className="group">
              
              <div
                className={`rounded-2xl overflow-hidden border transition duration-300 cursor-pointer

                ${
                  isDark
                    ? "bg-black/60 backdrop-blur-lg border-white/10 hover:shadow-xl hover:shadow-indigo-500/10"
                    : "bg-white border-gray-200 shadow-sm hover:shadow-xl hover:bg-gray-50"
                }
                `}
              >
                {/* IMAGE */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover 
                    group-hover:scale-110 transition duration-500"
                  />

                  {/* 🔥 HOVER OVERLAY */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition duration-300 px-5 py-2 rounded-lg bg-white text-black text-sm font-medium shadow-md">
                      View Details
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-strong">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted">
                    {service.desc}
                  </p>

                  <span className="text-orange-600 text-sm font-medium hover:underline">
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