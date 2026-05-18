"use client";

import Link from "next/link";

export default function ServicesGrid() {
  const services = [
    {
      title: "Website Development",
      desc: "We build high-performance, scalable, and secure websites tailored to your business goals.",
      points: [
        "Custom Web Development",
        "E-commerce Solutions",
        "CMS & WordPress",
        "Mobile Responsive Design",
      ],
      img: "/assets/services/web-d.jpeg",
      href: "/services/web-development",
    },
    {
      title: "Search Engine Optimization",
      desc: "Increase visibility and rank higher with our strategic SEO solutions.",
      points: [
        "Keyword Research",
        "On-page SEO",
        "Technical SEO",
        "Link Building",
      ],
      img: "/assets/services/seo.jpeg",
      href: "/services/seo",
    },
    {
      title: "Digital Marketing",
      desc: "Data-driven campaigns to generate leads and maximize ROI.",
      points: [
        "Social Media Marketing",
        "Google Ads & PPC",
        "Content Marketing",
        "Brand Awareness",
      ],
      img: "/assets/services/digi-market.jpeg",
      href: "/services/digital-marketing",
    },
    {
      title: "UI/UX Design",
      desc: "We design intuitive, modern, and conversion-focused user experiences.",
      points: [
        "UI Design",
        "Wireframing",
        "Prototyping",
        "UX Optimization",
      ],
      img: "/assets/services/ui-ux.jpeg",
      href: "/services/ui-ux",
    },
    {
      title: "E-commerce Solutions",
      desc: "Complete marketplace and store management for scalable growth.",
      points: [
        "Amazon & Flipkart",
        "Product Optimization",
        "Inventory Management",
        "Growth Strategy",
      ],
      img: "/assets/ecommerce-card.jpeg",
      href: "/services/ecommerce",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-28">

        {services.map((service, i) => {
          const isReverse = i % 2 !== 0;

          return (
            <Link key={i} href={service.href} className="group block">

              <div className="grid lg:grid-cols-2 gap-16 items-center cursor-pointer">

                {/* IMAGE */}
                <div
                  className={`order-1 ${
                    isReverse ? "lg:order-2" : "lg:order-1"
                  } relative`}
                >
                  {/* glow */}
                  <div className="absolute -inset-4 bg-indigo-500/10 blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition" />

                  <img
                    src={service.img}
                    alt={service.title}
                    className="rounded-2xl w-full h-[350px] object-cover shadow-lg transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* CONTENT */}
                <div
                  className={`order-2 ${
                    isReverse ? "lg:order-1" : "lg:order-2"
                  } space-y-6`}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-strong group-hover:text-orange-500 transition">
                    {service.title}
                  </h3>

                  <p className="text-muted leading-relaxed">
                    {service.desc}
                  </p>

                  {/* POINTS */}
                  <div className="space-y-2">
                    {service.points.map((point, idx) => (
                      <p
                        key={idx}
                        className="text-muted flex items-center gap-2"
                      >
                        ✔ {point}
                      </p>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="inline-flex items-center gap-2 text-orange-500 font-medium">
                    Explore Service
                    <span className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>

              </div>

            </Link>
          );
        })}

      </div>
    </section>
  );
}