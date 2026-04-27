"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Code2,
  Wind,
  Server,
  Database,
  Atom
} from "lucide-react";
import Button from "./ui/button";

export default function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden pt-24 pb-24 md:pt-0 md:pb-0">

      {/* 🖼 Background Image */}
      <div className="absolute inset-0 -z-30">
        <img
          src="/assets/hero.jpeg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 🌫 OVERLAY */}
      <div
        className={`absolute inset-0 -z-20 ${isDark ? "bg-black/70" : "bg-black/20"
          }`}
      />

      {/* 🎨 GRADIENT */}
      <div
        className={`absolute inset-0 -z-10 ${isDark
          ? "bg-gradient-to-tr from-black/80 via-transparent to-black/60"
          : "bg-transparent"
          }`}
      />

      {/* ✨ GLOW */}
      <div className="absolute inset-0 -z-10">
        <div
          className={`w-[600px] h-[600px] blur-[120px] rounded-full absolute top-10 left-1/2 -translate-x-1/2 ${isDark ? "bg-indigo-500/20" : "bg-indigo-400/10"
            }`}
        />
        <div
          className={`w-[400px] h-[400px] blur-[100px] rounded-full absolute bottom-10 left-10 ${isDark ? "bg-sky-400/20" : "bg-sky-300/10"
            }`}
        />
      </div>

      {/* ✨ CONTENT */}
      <div className="max-w-4xl px-6 space-y-6">

        <p
          className={`inline-block text-sm tracking-widest uppercase px-4 py-1 rounded-full ${isDark
            ? "text-gray-300"
            : "text-gray-800 bg-white/40 backdrop-blur-sm border border-white/60"
            }`}
        >
          Your Digital Success, Our Mission
        </p>

        <h1
          className={`text-4xl md:text-6xl font-extrabold leading-tight ${isDark
            ? "text-white"
            : "text-black bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg inline-block"
            }`}
        >
          Transforming Businesses with Smart Digital & E-commerce Solutions
        </h1>

        <p
          className={`text-lg max-w-2xl mx-auto ${isDark
              ? "text-gray-300"
              : "text-gray-800 bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg inline-block"
            }`}
        >
          From powerful websites to high-performing marketplace stores,
          CyberNestX helps you build, grow, and scale your business across
          digital platforms like Amazon, Flipkart, and Meesho.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button href="/login">Get Started Now</Button>
          <Button href="/contact" variant="secondary">
            Book Free Consultation
          </Button>
        </div>
      </div>

      {/* 🔽 TECH STRIP */}
      <div
        className={`absolute bottom-0 w-full overflow-hidden backdrop-blur-md py-4 ${isDark
          ? "bg-black/80 text-gray-400"
          : "bg-white/70 text-gray-700"
          }`}
      >

        {/* 🌫 LEFT FADE */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black/80 to-transparent dark:from-black/80 pointer-events-none z-10" />

        {/* 🌫 RIGHT FADE */}
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black/80 to-transparent dark:from-black/80 pointer-events-none z-10" />

        {/* 🚀 MOVING CONTENT */}
        <div className="marquee gap-10 text-sm items-center">

          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-20 items-center px-6">

              <div className="flex items-center gap-2 text-indigo-500 opacity-80">
                <Code2 size={16} />
                <span>Next.js</span>
              </div>

              <div className="flex items-center gap-2 text-indigo-500 opacity-80">
                <Wind size={16} />
                <span>Tailwind CSS</span>
              </div>

              <div className="flex items-center gap-2 text-indigo-500 opacity-80">
                <Server size={16} />
                <span>Node.js</span>
              </div>

              <div className="flex items-center gap-2 text-indigo-500 opacity-80">
                <Database size={16} />
                <span>MongoDB</span>
              </div>

              <div className="flex items-center gap-2 text-indigo-500 opacity-80">
                <Atom size={16} />
                <span>React.js</span>
              </div>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
}