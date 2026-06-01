"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaPinterest, FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";

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
          className={`absolute inset-0 ${isDark
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

            {/* Pinterest */}
            <a
              href="https://pin.it/2VDlSF04f"
              target="_blank"
              rel="noopener noreferrer"
              className={`group w-10 h-10 rounded-full flex items-center justify-center transition border
                ${isDark
                  ? "border-white/10 text-white"
                  : "border-gray-300 text-black"
                } hover:border-[#E60023] hover:bg-[#E60023]`}
            >
              <FaPinterest
                size={16}
                className="transition group-hover:text-white"
              />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/18iT4qE3H6/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group w-10 h-10 rounded-full flex items-center justify-center transition border
                ${isDark
                  ? "border-white/10 text-white"
                  : "border-gray-300 text-black"
                } hover:border-[#1877F2] hover:bg-[#1877F2]`}
            >
              <FaFacebookF
                size={16}
                className="transition group-hover:text-white"
              />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/cybernestx.in?igsh=NXU5a3Q0ejdya3Fo"
              target="_blank"
              rel="noopener noreferrer"
              className={`group w-10 h-10 rounded-full flex items-center justify-center transition border
                ${isDark
                  ? "border-white/10 text-white"
                  : "border-gray-300 text-black"
                } hover:border-pink-500 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600`}
            >
              <FaInstagram
                size={16}
                className="transition group-hover:text-white"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/cybernest-x/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group w-10 h-10 rounded-full flex items-center justify-center transition border
              ${isDark
                  ? "border-white/10 text-white"
                  : "border-gray-300 text-black"
                } hover:border-[#0A66C2] hover:bg-[#0A66C2]`}
            >
              <FaLinkedin
                size={16}
                className="transition group-hover:text-white"
              />
            </a>

          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold mb-5 text-strong">Company</h3>
          <div className="flex flex-col gap-3 text-sm text-muted">
            <Link href="/about" className="hover:text-orange-500 transition">About Us</Link>
            {/* <Link href="#" className="hover:text-orange-500 transition">Blog</Link> */}
            <Link href="/privacy-policy" className="hover:text-orange-500 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-orange-500 transition">Terms & Conditions</Link>
            <Link href="/contact" className="hover:text-orange-500 transition">Contact</Link>
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-semibold mb-5 text-strong">Services</h3>
          <div className="flex flex-col gap-3 text-sm text-muted">
            <Link href="/services/web-development" className="hover:text-orange-500  transition">Website Development</Link>
            <Link href="/services/seo" className="hover:text-orange-500 transition">SEO Optimization</Link>
            <Link href="/services/digital-marketing" className="hover:text-orange-500 transition">Digital Marketing</Link>
            <Link href="/services/ui-ux" className="hover:text-orange-500 transition">UI/UX Design</Link>
            <Link href="/services/ecommerce" className="hover:text-orange-500 transition">E-commerce Management</Link>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-5 text-strong">Contact</h3>

          <div className="space-y-4 text-sm text-muted">
            <div>
              <p className="text-xs uppercase tracking-wider mb-1">Email</p>
              <p>cybernestxdigital@gmail.com</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider mb-1">Phone</p>
              <p>+91 93507 75714</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider mb-1">Hours</p>
              <p>Mon–Fri from 9am to 6pm</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider mb-1">Address</p>
              <p>
                Cybernestx
                20th mile, Jatheri Rd, Sector 38,<br />
                Sonipat, Haryana 131029
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