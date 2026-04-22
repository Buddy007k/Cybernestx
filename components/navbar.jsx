"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

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
        <h1 className="font-bold text-xl text-strong">
          CyberNestX
        </h1>

        {/* Links */}
        <div className="hidden md:flex gap-6 text-strong">
          <Link href="/" className="hover:text-indigo-600 transition">Home</Link>
          <Link href="/about" className="hover:text-indigo-600 transition">About</Link>
          <Link href="/services" className="hover:text-indigo-600 transition">Services</Link>
          <Link href="/portfolio" className="hover:text-indigo-600 transition">Portfolio</Link>
          <Link href="/contact" className="hover:text-indigo-600 transition">Contact</Link>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-strong hover:scale-110 transition"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
}