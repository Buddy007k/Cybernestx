"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ServicePricing() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  const plans = [
    {
      name: "Starter",
      price: "Custom",
      desc: "Perfect for new businesses",
      features: [
        "Responsive Website",
        "Basic SEO Setup",
        "Contact Form",
        "Mobile Optimization",
        "1 Month Support",
      ],
      highlight: false,
    },
    {
      name: "Professional",
      price: "Popular",
      desc: "Best for scaling businesses",
      features: [
        "Custom Web App / E-commerce",
        "Advanced SEO & Analytics",
        "UI/UX Design System",
        "Performance Optimization",
        "Digital Marketing Strategy",
        "6 Months Support",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Tailored",
      desc: "For complex solutions",
      features: [
        "Full-Stack Architecture",
        "Marketplace Management",
        "Dedicated Manager",
        "Enterprise Security",
        "API Integrations",
        "24/7 Support",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {plans.map((plan, i) => (
          <div
            key={i}
            className={`relative p-8 rounded-2xl border transition duration-300

            ${
              plan.highlight
                ? "border-orange-500 shadow-[0_0_40px_rgba(255,115,0,0.2)] scale-105"
                : isDark
                ? "bg-black/60 backdrop-blur-lg border-white/10 hover:shadow-xl hover:shadow-indigo-500/10"
                : "bg-white border-gray-200 shadow-sm hover:shadow-xl hover:bg-gray-50"
            }
            `}
          >

            {/* 🔥 MOST SELECTED */}
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs px-4 py-1 rounded-full">
                MOST SELECTED
              </div>
            )}

            {/* TITLE */}
            <h3 className="text-xl font-semibold text-strong mb-2">
              {plan.name}
            </h3>

            {/* DESC */}
            <p className="text-muted text-sm mb-6">
              {plan.desc}
            </p>

            {/* PRICE */}
            <h2 className="text-3xl font-bold text-strong mb-6">
              {plan.price}
            </h2>

            {/* FEATURES */}
            <div className="space-y-3 mb-8">
              {plan.features.map((f, idx) => (
                <p key={idx} className="text-muted flex gap-2">
                  ✔ {f}
                </p>
              ))}
            </div>

            {/* CTA */}
            <button
              className={`w-full py-3 rounded-lg font-medium transition

              ${
                plan.highlight
                  ? "bg-orange-500 hover:bg-orange-600 text-white"
                  : isDark
                  ? "border border-white/10 hover:bg-white/10 text-strong"
                  : "border border-gray-300 hover:bg-gray-100 text-strong"
              }
              `}
            >
              Request Proposal
            </button>

          </div>
        ))}

      </div>
    </section>
  );
}