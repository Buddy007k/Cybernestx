"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ContactForm() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  const services = [
    "Website Development",
    "SEO Optimization",
    "Digital Marketing",
    "UI/UX Design",
    "E-commerce Solutions",
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* FORM */}
        <div className="glass p-8 rounded-2xl space-y-6">

          <h2 className="text-2xl font-bold text-strong">
            Send us a message
          </h2>

          {/* NAME */}
          <div className="grid grid-cols-2 gap-4">
            <input className="input" placeholder="First Name" />
            <input className="input" placeholder="Last Name" />
          </div>

          {/* CONTACT */}
          <div className="grid grid-cols-2 gap-4">
            <input className="input" placeholder="Email" />
            <input className="input" placeholder="Phone" />
          </div>

          {/* 🔥 SERVICE DROPDOWN */}
          <select
            className={`w-full px-4 py-3 rounded-lg border outline-none transition
  ${isDark
                ? "bg-black/60 text-white border-white/10 focus:border-orange-500"
                : "bg-white text-gray-900 border-gray-200 focus:border-orange-500"
              }`}
          >
            <option value="" className={isDark ? "bg-black text-white" : "bg-white text-black"}>Select Service</option>
            {services.map((service, i) => (
              <option key={i} value={service} className={isDark ? "bg-black text-white" : "bg-white text-black"}>
                {service}
              </option>
            ))}
          </select>

          {/* MESSAGE */}
          <textarea
            className="input w-full h-32"
            placeholder="Message"
          />

          {/* BUTTON */}
          <button className="w-full py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
            Send Message
          </button>
        </div>

        {/* IMAGE SIDE */}
        <div className="relative hidden lg:block">

          <img
            src="/assets/contact_img.jpeg"
            className="rounded-2xl w-full h-[500px] object-cover"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/70 to-transparent rounded-2xl" />

          {/* Floating Card */}
          <div className="absolute bottom-6 left-6 glass p-4 rounded-xl max-w-xs">
            <p className="text-sm text-muted">
              "We respond within 24 hours. Your growth is our priority."
            </p>
            <span className="text-xs text-orange-500 mt-2 block">
              CyberNestX Team
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}