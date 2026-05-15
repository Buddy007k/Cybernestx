"use client";

import { useTheme } from "next-themes";
import {
  TrendingUp,
  ShoppingCart,
  BarChart3,
  Globe,
  Rocket,
} from "lucide-react";

export default function Results() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const results = [
    {
      title: "Website Traffic",
      icon: Globe,
      desc: "Drive consistent, high-quality traffic to your digital platforms.",
    },
    {
      title: "Search Rankings",
      icon: TrendingUp,
      desc: "Improve visibility and dominate search engine results.",
    },
    {
      title: "Conversions",
      icon: ShoppingCart,
      desc: "Turn visitors into paying customers with optimized funnels.",
    },
    {
      title: "Sales Growth",
      icon: Rocket,
      desc: "Scale your business with data-driven growth strategies.",
    },
    {
      title: "Brand Presence",
      icon: BarChart3,
      desc: "Build a strong and memorable digital brand identity.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-14">

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold text-strong">
          Results That <span className="text-orange-500">Matter</span>
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {results.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className={`group p-8 rounded-2xl transition ${
                  isDark
                    ? "bg-white/5 hover:bg-white/10 border border-white/10"
                    : "bg-white hover:bg-gray-50 border border-gray-200 shadow-sm"
                }`}
              >
                {/* ICON */}
                <div className="mb-5 flex justify-center">
                  <div className="p-4 rounded-xl bg-orange-500/10 text-orange-500 group-hover:scale-110 transition">
                    <Icon size={28} />
                  </div>
                </div>

                {/* TEXT */}
                <h3 className="text-xl font-semibold mb-2 text-strong">
                  {item.title}
                </h3>

                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <div
          className={`mt-12 p-6 rounded-xl ${
            isDark
              ? "bg-indigo-500/10 border border-indigo-500/20"
              : "bg-indigo-50 border border-indigo-200"
          }`}
        >
          <p className="text-lg text-strong">
            We don’t just provide services — we deliver measurable growth.
          </p>
        </div>

      </div>
    </section>
  );
}