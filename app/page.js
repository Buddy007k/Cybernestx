"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Section from "@/components/ui/section";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import {
  Code2,
  Wind,
  Server,
  Database,
  Atom
} from "lucide-react";

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden pt-24 pb-24 md:pt-0 md:pb-0">

        {/* 🖼 Background Image */}
        <div className="absolute inset-0 -z-30">
          <img
            src="/assets/hero.jpeg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 🌫 OVERLAY (FIXED) */}
        <div
          className={`absolute inset-0 -z-20 ${isDark
              ? "bg-black/70"
              : "bg-black/20"   // 👈 subtle dark overlay instead of white
            }`}
        />

        {/* 🎨 GRADIENT (REDUCED FOR LIGHT) */}
        <div
          className={`absolute inset-0 -z-10 ${isDark
              ? "bg-gradient-to-tr from-black/80 via-transparent to-black/60"
              : "bg-transparent"   // 👈 removed heavy gradient
            }`}
        />

        {/* ✨ GLOW (REDUCED FOR LIGHT) */}
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

          {/* Tagline */}
          <p
            className={`text-sm tracking-widest uppercase ${isDark ? "text-gray-300" : "text-gray-600"
              }`}
          >
            Your Digital Success, Our Mission
          </p>

          {/* Heading */}
          <h1
            className={`text-4xl md:text-6xl font-extrabold leading-tight ${isDark ? "text-white" : "text-black"
              }`}
          >
            Transforming Businesses with Smart Digital & E-commerce Solutions
          </h1>

          {/* Subtext */}
          <p
            className={`text-lg max-w-2xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"
              }`}
          >
            From powerful websites to high-performing marketplace stores,
            CyberNestX helps you build, grow, and scale your business across
            digital platforms like Amazon, Flipkart, and Meesho.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button href="/login">Get Started Now</Button>
            <Button href="/contact" variant="secondary">
              Book Free Consultation
            </Button>
          </div>
        </div>

        {/* 🔽 TECH STRIP */}
        <div
          className={`absolute bottom-0 w-full backdrop-blur-md py-4 ${isDark
              ? "bg-black/80 text-gray-400"
              : "bg-white/70 text-gray-700"
            }`}
        >
          <div className="max-w-6xl mx-auto flex flex-wrap justify-around items-center gap-6 text-sm">

            <div className="flex items-center gap-2 text-indigo-500 opacity-80 hover:opacity-100 transition">
              <Code2 size={16} />
              <span>Next.js</span>
            </div>

            <div className="flex items-center gap-2 text-indigo-500 opacity-80 hover:opacity-100 transition">
              <Wind size={16} />
              <span>Tailwind CSS</span>
            </div>

            <div className="flex items-center gap-2 text-indigo-500 opacity-80 hover:opacity-100 transition">
              <Server size={16} />
              <span>Node.js</span>
            </div>

            <div className="flex items-center gap-2 text-indigo-500 opacity-80 hover:opacity-100 transition">
              <Database size={16} />
              <span>MongoDB</span>
            </div>

            <div className="flex items-center gap-2 text-indigo-500 opacity-80 hover:opacity-100 transition">
              <Atom size={16} />
              <span>React.js</span>
            </div>

          </div>
        </div>

      </section>

      {/* SERVICES */}
      <Section title="Our Services">
        <div className="grid md:grid-cols-4 gap-6">
          <Card>Web Development</Card>
          <Card>Digital Marketing</Card>
          <Card>App Development</Card>
          <Card>AI Solutions</Card>
        </div>
      </Section>

      {/* ABOUT PREVIEW */}
      <Section title="Who We Are">
        <p className="text-strong text-lg text-center max-w-3xl mx-auto">
          CyberNestX is a digital solutions company dedicated to helping
          businesses innovate and grow using modern technologies and smart strategies.
        </p>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-strong">
            Ready to Build Something Amazing?
          </h2>
          <Button href="/contact">Contact Us</Button>
        </div>
      </Section>

      <Footer />
    </>
  );
}