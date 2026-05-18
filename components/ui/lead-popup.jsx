"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function LeadPopup() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    const seen = localStorage.getItem("lead-popup-seen");
    if (!seen) {
      setTimeout(() => setOpen(true), 1500); // delay for UX
      localStorage.setItem("lead-popup-seen", "true");
    }
  }, []);

  if (!mounted || !open) return null;

  const isDark = theme === "dark";

  const services = [
    "Website Development",
    "SEO Optimization",
    "Digital Marketing",
    "UI/UX Design",
    "E-commerce Solutions",
  ];

  return (
    <>
      {/* BACKDROP */}
      <div
        className={`fixed inset-0 z-[9998] ${
          isDark ? "bg-black/60" : "bg-black/40"
        } backdrop-blur-sm`}
        onClick={() => setOpen(false)}
      />

      {/* MODAL */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
        <div
          className={`w-full max-w-lg rounded-2xl p-8 space-y-5 relative
          ${
            isDark
              ? "bg-black/80 border border-white/10 backdrop-blur-xl"
              : "bg-white border border-gray-200 shadow-xl"
          }`}
        >
          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-xl opacity-70 hover:opacity-100"
          >
            ✕
          </button>

          {/* HEADING */}
          <h2 className="text-2xl font-bold text-strong">
            Let's Grow Your Business 🚀
          </h2>

          <p className="text-sm text-muted">
            Tell us what you need — we’ll get back within 24 hours.
          </p>

          {/* FORM */}
          <div className="space-y-4">

            <div className="grid grid-cols-2 gap-4">
              <input className="input" placeholder="First Name" />
              <input className="input" placeholder="Last Name" />
            </div>

            <input className="input w-full" placeholder="Email" />

            {/* SERVICE DROPDOWN */}
            <select
              className={`w-full px-4 py-3 rounded-lg border outline-none transition
              ${
                isDark
                  ? "bg-black/60 text-white border-white/10"
                  : "bg-white text-gray-900 border-gray-200"
              }`}
            >
              <option className={isDark ? "bg-black text-white" : ""}>
                Select Service
              </option>
              {services.map((s, i) => (
                <option
                  key={i}
                  className={isDark ? "bg-black text-white" : ""}
                >
                  {s}
                </option>
              ))}
            </select>

            <textarea
              className="input w-full h-28"
              placeholder="Message"
            />

            <button className="w-full py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
              Submit Request
            </button>

          </div>
        </div>
      </div>
    </>
  );
}