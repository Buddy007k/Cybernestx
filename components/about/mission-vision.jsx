"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* 🔥 HEADING */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-strong">
            Our <span className="text-orange-500">Purpose</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Driven by innovation and guided by strategy, our mission and vision
            define how we create long-term value for businesses.
          </p>
        </div>

        {/* 🔥 CONTENT */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* ================= MISSION ================= */}
          <div className="relative group">

            {/* GLOW */}
            <div className="absolute -inset-1 rounded-2xl blur-xl opacity-20 bg-gradient-to-r from-indigo-500 to-orange-500 group-hover:opacity-40 transition" />

            <div className="relative glass p-8 rounded-2xl h-full transition duration-300 group-hover:scale-[1.02]">

              {/* ICON */}
              <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500">
                <Target size={22} />
              </div>

              <h3 className="text-xl font-semibold text-strong mb-3">
                Our Mission
              </h3>

              <p className="text-muted leading-relaxed">
                To empower businesses with intelligent, scalable, and
                result-oriented digital and e-commerce solutions that create
                long-term value and sustainable growth.
              </p>

              {/* ACCENT LINE */}
              <div className="mt-6 h-[2px] w-16 bg-indigo-500 rounded-full group-hover:w-24 transition-all duration-300" />

            </div>
          </div>

          {/* ================= VISION ================= */}
          <div className="relative group">

            {/* GLOW */}
            <div className="absolute -inset-1 rounded-2xl blur-xl opacity-20 bg-gradient-to-r from-orange-500 to-indigo-500 group-hover:opacity-40 transition" />

            <div className="relative glass p-8 rounded-2xl h-full transition duration-300 group-hover:scale-[1.02]">

              {/* ICON */}
              <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                <Eye size={22} />
              </div>

              <h3 className="text-xl font-semibold text-strong mb-3">
                Our Vision
              </h3>

              <p className="text-muted leading-relaxed">
                To be recognized as a leading global IT and E-commerce solutions
                provider, known for innovation, excellence, and long-term client
                partnerships.
              </p>

              {/* ACCENT LINE */}
              <div className="mt-6 h-[2px] w-16 bg-orange-500 rounded-full group-hover:w-24 transition-all duration-300" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}