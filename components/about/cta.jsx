"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "../ui/button";

export default function CTA() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <section className="py-28 px-6 relative overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div
          className={`absolute w-[500px] h-[500px] blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          ${isDark ? "bg-indigo-500/20" : "bg-indigo-400/10"}
          `}
        />
      </div>

      <div className="max-w-5xl mx-auto">

        {/* 🔥 MAIN CARD */}
        <div
          className={`rounded-3xl p-10 md:p-14 text-center border backdrop-blur-xl transition
          ${
            isDark
              ? "bg-white/5 border-white/10"
              : "bg-white border-gray-200 shadow-xl"
          }
          `}
        >

          {/* TAG */}
          <p className="text-sm uppercase tracking-widest text-muted mb-4">
            Let’s Work Together
          </p>

          {/* HEADING */}
          <h2 className="text-3xl md:text-5xl font-bold text-strong leading-tight mb-6">
            Let’s Build & Scale Your{" "}
            <span className="text-orange-500">Digital Success</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-muted max-w-2xl mx-auto mb-8">
            Whether you're starting from scratch or scaling your existing
            business, CyberNestX helps you grow faster with smart digital and
            e-commerce solutions.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Button href="/contact">
              Get Started Now
            </Button>

            <Button href="/services" variant="secondary">
              Explore Services
            </Button>

          </div>

        </div>

      </div>
    </section>
  );
}