"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AboutHero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <section className="relative pt-32 pb-20 text-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/assets/about-banner.jpeg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className={`absolute inset-0 -z-10 ${isDark ? "bg-black/70" : "bg-white/70"}`} />

      <div className="max-w-4xl mx-auto px-6 space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-strong">
          About <span className="text-orange-500">CyberNestX</span>
        </h1>

        <p className="text-muted">
          Building Digital Excellence, Delivering Real Results
        </p>
      </div>
    </section>
  );
}