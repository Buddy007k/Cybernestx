"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <footer className="relative overflow-hidden pt-20 pb-10">

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617]"
              : "bg-gradient-to-br from-white via-gray-50 to-white"
          }`}
        />

        {/* subtle glow */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-500/10 blur-[120px]" />
      </div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* 🔥 BRAND */}
        <div className="space-y-6">

          {/* LOGO */}
          <Link href="/" className="inline-block">
            <Image
              src={
                isDark
                  ? "/assets/CyberNestX-logo-white.png"
                  : "/assets/CyberNestX-logo-black.png"
              }
              alt="CyberNestX Logo"
              width={140}
              height={45}
              priority
            />
          </Link>

          <p className="text-muted text-sm leading-relaxed">
            Dream. Build. Launch. We engineer scalable digital experiences
            that command trust and drive relentless growth for serious businesses.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 pt-2">
            {[FaTwitter, FaLinkedin, FaGithub, FaInstagram].map((Icon, i) => (
              <div
                key={i}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition cursor-pointer border
                ${
                  isDark
                    ? "border-white/10 hover:bg-white/10 text-white"
                    : "border-gray-300 hover:bg-gray-100 text-black"
                }`}
              >
                <Icon size={16} />
              </div>
            ))}
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold mb-5 text-strong">Company</h3>
          <div className="flex flex-col gap-3 text-sm text-muted">
            <Link href="/about" className="hover:text-primary transition">About Us</Link>
            <Link href="/portfolio" className="hover:text-primary transition">Portfolio</Link>
            <Link href="#" className="hover:text-primary transition">Blog</Link>
            <Link href="#" className="hover:text-primary transition">Pricing</Link>
            <Link href="#" className="hover:text-primary transition">Testimonials</Link>
            <Link href="/contact" className="hover:text-primary transition">Contact</Link>
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-semibold mb-5 text-strong">Services</h3>
          <div className="flex flex-col gap-3 text-sm text-muted">
            <span className="hover:text-primary transition cursor-pointer">Website Development</span>
            <span className="hover:text-primary transition cursor-pointer">SEO Optimization</span>
            <span className="hover:text-primary transition cursor-pointer">Digital Marketing</span>
            <span className="hover:text-primary transition cursor-pointer">UI/UX Design</span>
            <span className="hover:text-primary transition cursor-pointer">E-commerce Management</span>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-5 text-strong">Contact</h3>

          <div className="space-y-4 text-sm text-muted">
            <div>
              <p className="text-xs uppercase tracking-wider mb-1">Email</p>
              <p>hello@cybernestx.com</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider mb-1">Phone</p>
              <p>+91 98765 43210</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider mb-1">Hours</p>
              <p>Mon–Fri from 9am to 6pm</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider mb-1">Address</p>
              <p>
                CyberNestX Tower, Tech Park <br />
                Bengaluru, Karnataka, India 560001
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div
        className={`max-w-7xl mx-auto px-6 mt-16 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm
        ${isDark ? "border-white/10 text-gray-400" : "border-gray-200 text-gray-600"}`}
      >
        <p>© 2026 CyberNestX. All rights reserved.</p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hover:text-primary transition"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}