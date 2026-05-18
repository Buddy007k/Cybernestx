"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AboutIntro() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <section className="py-20 px-6 space-y-28">

      {/* ================= BLOCK 1 ================= */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* 🔥 LEFT IMAGES (UPGRADED) */}
        <div className="relative group">

          {/* GLOW */}
          <div className="absolute -inset-6 -z-10">
            <div className="w-full h-full blur-[80px] opacity-30 bg-gradient-to-tr from-indigo-500 to-orange-500 rounded-full" />
          </div>

          {/* MAIN IMAGE */}
          <div className="relative overflow-hidden rounded-[30px]">
            <img
              src="/assets/about-1.jpeg"
              className="w-full h-[350px] object-cover transition duration-700 group-hover:scale-110"
              style={{
                clipPath:
                  "polygon(0 0, 90% 0, 100% 15%, 100% 100%, 10% 100%, 0 85%)",
              }}
            />
          </div>

          {/* FLOAT IMAGE */}
          <div className="absolute -bottom-10 right-[-20px]">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img
                src="/assets/about-3.jpeg"
                className="w-40 h-40 object-cover transition duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition" />
            </div>
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6">

          <h2 className="text-3xl md:text-4xl font-bold text-strong">
            Exclusive technology to provide{" "}
            <span className="text-orange-500">IT solutions</span>
          </h2>

          <p className="text-muted leading-relaxed">
            At CyberNestX, we leverage cutting-edge technologies to deliver
            powerful digital solutions that drive real business results.
          </p>

          <div className="space-y-3">
            <p className="flex gap-2 text-muted">✔ Easily Scale Your Business Growth</p>
            <p className="flex gap-2 text-muted">✔ Simplified Digital Transformation</p>
            <p className="flex gap-2 text-muted">✔ Solutions for the Competitive Edge</p>
          </div>

        </div>
      </div>

      {/* ================= BLOCK 2 ================= */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6 order-2 lg:order-1">

          <h2 className="text-3xl md:text-4xl font-bold text-strong">
            Providing IT solutions &{" "}
            <span className="text-orange-500">services for startups</span>
          </h2>

          <div className="space-y-4">

            <div>
              <h4 className="font-semibold text-strong">
                Quality Solution for Business
              </h4>
              <p className="text-muted text-sm">
                Delivering scalable and high-performance solutions tailored to your needs.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-strong">
                Amazing Expert Teams
              </h4>
              <p className="text-muted text-sm">
                Our skilled professionals bring expertise and innovation together.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-strong">
                Support for Clients
              </h4>
              <p className="text-muted text-sm">
                Continuous support and optimization for long-term success.
              </p>
            </div>

          </div>

        </div>

        {/* 🔥 RIGHT IMAGES (UPGRADED) */}
        <div className="relative order-1 lg:order-2 group">

          {/* GLOW */}
          <div className="absolute -inset-6 -z-10">
            <div className="w-full h-full blur-[80px] opacity-30 bg-gradient-to-tr from-orange-500 to-indigo-500 rounded-full" />
          </div>

          {/* MAIN IMAGE */}
          <div className="relative overflow-hidden rounded-[30px]">
            <img
              src="/assets/about-2.jpeg"
              className="w-full h-[350px] object-cover transition duration-700 group-hover:scale-110"
              style={{
                clipPath:
                  "polygon(10% 0, 100% 0, 100% 85%, 90% 100%, 0 100%, 0 15%)",
              }}
            />
          </div>

          {/* FLOAT IMAGE */}
          <div className="absolute -bottom-10 left-[-20px]">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img
                src="/assets/about-4.jpeg"
                className="w-44 h-44 object-cover transition duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition" />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}