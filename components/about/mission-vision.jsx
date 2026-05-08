"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Target, Eye, Lightbulb } from "lucide-react";

export default function MissionVision() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section className="py-24 px-6 relative overflow-hidden">

      {/* 🔥 BACKGROUND GRID (like image) */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto space-y-16">

        {/* 🔥 HEADING */}
        <div className="text-center space-y-4">
          <p className="text-orange-500 text-sm tracking-widest uppercase">
            What Drives Us
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-strong">
            Mission, Vision & Approach
          </h2>
        </div>

        {/* 🔥 CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* ================= MISSION ================= */}
          <div className="relative group">

            <div className="absolute -inset-1 rounded-2xl blur-xl opacity-20 bg-gradient-to-r from-orange-500 to-red-500 group-hover:opacity-40 transition" />

            <div className="relative glass p-8 rounded-2xl h-full transition duration-300 group-hover:scale-[1.02]">

              <div className="mb-5 w-12 h-12 flex items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
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
            </div>
          </div>

          {/* ================= VISION ================= */}
          <div className="relative group">

            <div className="absolute -inset-1 rounded-2xl blur-xl opacity-20 bg-gradient-to-r from-indigo-500 to-sky-500 group-hover:opacity-40 transition" />

            <div className="relative glass p-8 rounded-2xl h-full transition duration-300 group-hover:scale-[1.02]">

              <div className="mb-5 w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500">
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
            </div>
          </div>

          {/* ================= APPROACH ================= */}
          <div className="relative group">

            <div className="absolute -inset-1 rounded-2xl blur-xl opacity-20 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:opacity-40 transition" />

            <div className="relative glass p-8 rounded-2xl h-full transition duration-300 group-hover:scale-[1.02]">

              <div className="mb-5 w-12 h-12 flex items-center justify-center rounded-lg bg-pink-500/10 text-pink-500">
                <Lightbulb size={22} />
              </div>

              <h3 className="text-xl font-semibold text-strong mb-3">
                Our Approach
              </h3>

              <p className="text-muted leading-relaxed">
                We don’t believe in cookie-cutter solutions. Every project is
                deeply researched, strategically planned, and meticulously
                crafted to deliver measurable results.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}