"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Code2, Search, Megaphone, Palette } from "lucide-react";

export default function Expertise() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  const data = [
    {
      title: "Website Development",
      desc: "High-performance, scalable, and secure websites tailored to your business goals.",
      icon: Code2,
    },
    {
      title: "Search Engine Optimization",
      desc: "Data-driven SEO strategies to boost rankings, traffic, and visibility.",
      icon: Search,
    },
    {
      title: "Digital Marketing",
      desc: "Performance marketing campaigns designed for reach, engagement, and ROI.",
      icon: Megaphone,
      highlight: true, // 🔥 featured one
    },
    {
      title: "UI/UX Design",
      desc: "Modern, intuitive, and user-centric designs that enhance user experience.",
      icon: Palette,
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* 🔥 HEADING */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-strong">
            Our <span className="text-orange-500">Expertise</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            We combine technology, strategy, and creativity to deliver
            impactful digital solutions that drive measurable results.
          </p>
        </div>

        {/* 🔥 LIST STYLE (NOT CARDS) */}
        <div className="space-y-6">

          {data.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className={`group flex items-start gap-6 p-6 rounded-2xl transition border
                ${
                  item.highlight
                    ? "border-orange-500/30 bg-orange-500/5"
                    : isDark
                    ? "border-white/10 hover:bg-white/5"
                    : "border-gray-200 hover:bg-gray-50"
                }
                `}
              >
                {/* ICON */}
                <div
                  className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg transition
                  ${
                    item.highlight
                      ? "bg-orange-500 text-white"
                      : isDark
                      ? "bg-white/10 text-white"
                      : "bg-gray-100 text-black"
                  }
                  group-hover:scale-110`}
                >
                  <Icon size={22} />
                </div>

                {/* CONTENT */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-strong">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>
                </div>

                {/* RIGHT INDICATOR */}
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition">
                  <span className="text-sm text-orange-500">
                    →
                  </span>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}