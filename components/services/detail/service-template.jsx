"use client";

import ServicePricing from "./service-pricing";
import { Clock, Users, Target } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ServiceTemplate({
  title,
  description,
  image,
  offerings,
  outcome,
}) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <>
      {/* 🔥 HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">

        {/* gradient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,115,0,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.15),transparent_40%)]" />

        <div className="relative max-w-4xl mx-auto space-y-6">
          <span className="inline-block px-4 py-1 text-sm rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20">
            {title}
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-strong leading-tight">
            Crafting Digital Experiences That Drive Results
          </h1>

          <p className="text-muted text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* 🔥 STATS */}
        <div className="relative mt-12 flex flex-wrap justify-center gap-6">
          {[
            { icon: Clock, title: "4-8 Weeks", sub: "Average Delivery" },
            { icon: Users, title: "50+", sub: "Projects Delivered" },
            { icon: Target, title: "99%", sub: "Client Satisfaction" },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 px-6 py-4 rounded-xl border transition duration-300
              
              ${
                isDark
                  ? "bg-black/60 backdrop-blur-lg border-white/10 hover:shadow-xl hover:shadow-indigo-500/10"
                  : "bg-white border-gray-200 shadow-sm hover:shadow-xl hover:bg-gray-50"
              }
              `}
            >
              <item.icon className="text-orange-500" size={28} />
              <div className="text-left">
                <p className="text-xl font-semibold text-strong">
                  {item.title}
                </p>
                <p className="text-sm text-muted">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 THIN IMAGE BANNER */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto relative">

          <div className="absolute -inset-3 bg-orange-500/10 blur-2xl -z-10" />

          <img
            src={image}
            alt={title}
            className="w-full h-[220px] md:h-[260px] object-cover rounded-xl shadow-xl transition duration-500 hover:scale-[1.01]"
          />
        </div>
      </section>

      {/* 🔥 WHAT'S INCLUDED */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-strong">
            What's <span className="text-orange-500">Included</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((item, i) => (
              <div
                key={i}
                className={`flex gap-4 p-6 rounded-2xl border transition duration-300
                
                ${
                  isDark
                    ? "bg-black/60 backdrop-blur-lg border-white/10 hover:shadow-xl hover:shadow-indigo-500/10"
                    : "bg-white border-gray-200 shadow-sm hover:shadow-xl hover:bg-gray-50"
                }
                `}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                  ✔
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-strong mb-1">
                    {item}
                  </h3>
                  <p className="text-sm text-muted">
                    High-quality implementation focused on performance and scalability.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 PRICING */}
      <ServicePricing />

      {/* 🔥 OUTCOME */}
      <section className="py-20 text-center px-6">
        <p className="text-xl text-strong max-w-3xl mx-auto leading-relaxed">
          👉 {outcome}
        </p>
      </section>
    </>
  );
}