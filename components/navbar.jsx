"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import MobileSidebar from "./mobile-sidebar";
import Button from "./ui/button";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[9999] backdrop-blur-xl border-b transition-all duration-300
      ${isDark
          ? "bg-black/70 border-white/10"
          : "bg-white/70 border-gray-200/60 shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src={
              isDark
                ? "/assets/CyberNestX-logo-white.png"
                : "/assets/CyberNestX-logo-black.png"
            }
            alt="CyberNestX Logo"
            width={125}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div
          className={`hidden md:flex gap-6 items-center font-medium ${isDark ? "text-white" : "text-gray-900"
            }`}
        >
          <Link href="/" className="hover:text-indigo-600 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-indigo-600 transition">
            About
          </Link>
          {/* 🔥 SERVICES DROPDOWN */}
          <div className="relative group">

            <Link href="/services" className="hover:text-indigo-600 transition flex items-center gap-1">
              Services
              <span className="text-xs">▼</span>
            </Link>

            {/* DROPDOWN */}
            <div
              className={`absolute left-0 mt-3 w-64 rounded-xl border shadow-xl opacity-0 invisible 
      group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50
      ${isDark
                  ? "bg-black/90 border-white/10 backdrop-blur-xl"
                  : "bg-white border-gray-200"
                }`}
            >

              <div className="p-2 space-y-1 text-sm">

                <Link
                  href="/services/web-development"
                  className="block px-4 py-2 rounded-lg hover:bg-indigo-500/10 transition"
                >
                  Website Development
                </Link>

                <Link
                  href="/services/seo"
                  className="block px-4 py-2 rounded-lg hover:bg-indigo-500/10 transition"
                >
                  SEO Optimization
                </Link>

                <Link
                  href="/services/digital-marketing"
                  className="block px-4 py-2 rounded-lg hover:bg-indigo-500/10 transition"
                >
                  Digital Marketing
                </Link>

                <Link
                  href="/services/ui-ux"
                  className="block px-4 py-2 rounded-lg hover:bg-indigo-500/10 transition"
                >
                  UI/UX Design
                </Link>

                <Link
                  href="/services/ecommerce"
                  className="block px-4 py-2 rounded-lg hover:bg-indigo-500/10 transition"
                >
                  E-commerce Solutions
                </Link>

              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`hover:scale-110 transition ${isDark ? "text-white" : "text-gray-900"
              }`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Button href="/contact" variant="outline" className="hidden md:inline-flex border-orange-500 hover:bg-orange-600 transition">
            Contact
          </Button>

          {/* Mobile */}
          <div className="md:hidden">
            <MobileSidebar />
          </div>
        </div>
      </div>
    </nav>
  );
}