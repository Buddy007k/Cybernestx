"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <footer
      className={`relative overflow-hidden pt-20 pb-10 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* 🔥 ORANGE STREAK BACKGROUND */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* subtle lines using gradients */}
        <div
          className={`absolute inset-0 ${
            isDark
              ? "opacity-40"
              : "opacity-20"
          }`}
          style={{
            background:
              "radial-gradient(circle at 20% 30%, rgba(255,120,0,0.25), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,120,0,0.2), transparent 40%)",
          }}
        />
      </div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* LEFT TEXT */}
        <div className="space-y-6">
          <p className={`${isDark ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>
            Building digital experiences that drive real results. Your trusted
            partner for web development, design, and digital marketing solutions.
          </p>

          <button
            className={`px-6 py-3 rounded-full border transition flex items-center gap-2 ${
              isDark
                ? "border-white/30 hover:border-white"
                : "border-gray-400 hover:border-black"
            }`}
          >
            Let’s Work Together →
          </button>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="font-semibold mb-5">Navigation</h3>
          <div className="flex flex-col gap-4">
            <Link href="/" className="hover:opacity-70 hover:text-blue-500 transition">Home</Link>
            <Link href="/services" className="hover:opacity-70 hover:text-blue-500 transition">Services</Link>
            <Link href="/about" className="hover:opacity-70 hover:text-blue-500 transition">About Us</Link>
            <Link href="/contact" className="hover:opacity-70 hover:text-blue-500 transition">Contact</Link>
          </div>
        </div>

        {/* FOLLOW US */}
        <div>
          <h3 className="font-semibold mb-5">Follow us</h3>
          <div className="flex flex-col gap-4">
            <span className="hover:opacity-70 hover:text-blue-500 transition cursor-pointer">LinkedIn</span>
            <span className="hover:opacity-70 hover:text-blue-500 transition cursor-pointer">Instagram</span>
            <span className="hover:opacity-70 hover:text-blue-500 transition cursor-pointer">Facebook</span>
            <span className="hover:opacity-70 hover:text-blue-500 transition cursor-pointer">Pinterest</span>
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-semibold mb-5">Services</h3>
          <div className="flex flex-col gap-4">
            <span className="hover:opacity-70 hover:text-blue-500 transition cursor-pointer">Website Development</span>
            <span className="hover:opacity-70 hover:text-blue-500 transition cursor-pointer">Website Design</span>
            <span className="hover:opacity-70 hover:text-blue-500 transition cursor-pointer">Digital Marketing</span>
            <span className="hover:opacity-70 hover:text-blue-500 transition cursor-pointer">Graphic Design</span>
            <span className="hover:opacity-70 hover:text-blue-500 transition cursor-pointer">E-commerce</span>
            <span className="hover:opacity-70 hover:text-blue-500 transition cursor-pointer">SEO</span>
            <span className="hover:opacity-70 hover:text-blue-500 transition cursor-pointer">Domain</span>
            <span className="hover:opacity-70 hover:text-blue-500 transition cursor-pointer">Hosting</span>
          </div>
        </div>
      </div>  

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 mt-16 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">

        <div className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
          Terms & Conditions | Privacy Policy
          <br />
          Copyright © CyberNestX PVT. LTD. 2026
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hover:opacity-70 transition"
        >
          Back to top
        </button>
      </div>
    </footer>
  );
}