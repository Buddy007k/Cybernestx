"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ContactHero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">

      {/* BG */}
      <img
        src="/assets/contact-banner.jpeg"
        className="absolute inset-0 w-full h-full object-cover -z-20"
      />

      {/* Overlay */}
      <div className={`absolute inset-0 -z-10 ${isDark ? "bg-black/70" : "bg-black/40"}`} />

      {/* Content */}
      <div className="space-y-4 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Contact Us
        </h1>
        <p className="text-gray-300 max-w-xl">
          Let’s discuss how we can help your business grow with digital and
          e-commerce solutions.
        </p>
      </div>

    </section>
  );
}