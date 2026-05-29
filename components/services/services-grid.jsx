"use client";

import Link from "next/link";
import { normalizeFeatures } from "@/lib/service-data";

export default function ServicesGrid({ services = [] }) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-28">

        {services.map((service, i) => {
          const isReverse = i % 2 !== 0;
          const href = `/services/${service.slug}`;

          return (
            <Link key={service.id || i} href={href} className="group block">

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
                    src={service.image}
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
                    {service.description}
                  </p>

                  {/* POINTS / FEATURES */}
                  <div className="space-y-2">
                    {normalizeFeatures(service.features)
                      .slice(0, 4)
                      .map((feature, idx) => (
                        <div key={idx} className="space-y-0.5">
                          <p className="text-muted flex items-center gap-2">
                            ✔ <span className="font-medium text-strong">{feature.title}</span>
                          </p>
                          {feature.description ? (
                            <p className="text-sm text-muted pl-6">
                              {feature.description}
                            </p>
                          ) : null}
                        </div>
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

        {services.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted text-xl">No services found.</p>
          </div>
        )}

      </div>
    </section>
  );
}