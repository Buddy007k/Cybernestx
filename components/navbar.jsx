"use client";

import Link from "next/link";
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

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md 
    bg-white/70 dark:bg-black/60 
    border-b border-gray-200 dark:border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="font-bold text-xl text-strong cursor-pointer">
          CyberNestX
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center text-strong">
          <Link href="/" className="hover:text-indigo-600 transition">Home</Link>
          <Link href="/about" className="hover:text-indigo-600 transition">About</Link>
          <Link href="/services" className="hover:text-indigo-600 transition">Services</Link>
          <Link href="/portfolio" className="hover:text-indigo-600 transition">Portfolio</Link>
          <Link href="/contact" className="hover:text-indigo-600 transition">Contact</Link>

          {/* Login Button */}
          <Button href="/login" variant="outline">
            Login
          </Button>
        </div>

        {/* Right Side (Theme + Mobile Menu) */}
        <div className="flex items-center gap-3">

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-strong hover:scale-110 transition"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Sidebar Trigger */}
          <div className="md:hidden">
            <MobileSidebar />
          </div>

        </div>
      </div>
    </nav>
  );
}