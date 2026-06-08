"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import MobileSidebar from "./mobile-sidebar";
import Button from "./ui/button";
import { useAuth } from "@/context/AuthContext";
import { getAllServices } from "@/lib/services";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { user, loading, logout } = useAuth();

  const [services, setServices] = useState([]);
  const [servicesLoading, setServicesLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    async function loadServices() {
      try {
        const data = await getAllServices();
        setServices(data || []);
      } catch (err) {
        console.error("Failed to load services:", err);
        setServices([]);
      } finally {
        setServicesLoading(false);
      }
    }

    loadServices();
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  // 🔥 ACTIVE LINK STYLE
  const getLinkClass = (path) => {
    const isActive =
      path === "/"
        ? pathname === "/"
        : pathname.startsWith(path);

    return `transition font-medium ${
      isActive
        ? "text-orange-500 font-semibold"
        : isDark
        ? "text-white hover:text-indigo-400"
        : "text-gray-900 hover:text-indigo-600"
    }`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[9999] backdrop-blur-xl border-b transition-all duration-300
      ${
        isDark
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
        <div className="hidden md:flex gap-6 items-center">

          <Link href="/" className={getLinkClass("/")}>
            Home
          </Link>

          <Link href="/about" className={getLinkClass("/about")}>
            About
          </Link>

          {/* SERVICES */}
          <div className="relative group">
            <Link
              href="/services"
              className={`flex items-center gap-1 ${getLinkClass("/services")}`}
            >
              Services <span className="text-xs">▼</span>
            </Link>

            {/* DROPDOWN */}
            <div
              className={`absolute left-0 mt-3 w-64 rounded-xl border shadow-xl opacity-0 invisible 
              group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50
              ${isDark ? "bg-black/90 border-white/10" : "bg-white border-gray-200"}`}
            >
              <div className="p-2 space-y-1 text-sm">

                {servicesLoading && (
                  <p className="px-4 py-2 text-muted text-sm">Loading...</p>
                )}

                {!servicesLoading && services.length === 0 && (
                  <p className="px-4 py-2 text-muted text-sm">
                    No services available
                  </p>
                )}

                {services.map((service) => {
                  const isActive = pathname === `/services/${service.slug}`;

                  return (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className={`block px-4 py-2 rounded-lg transition ${
                        isActive
                          ? "bg-orange-500/10 text-orange-500 font-medium"
                          : "hover:bg-indigo-500/10"
                      }`}
                    >
                      {service.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <Link href="/contact" className={getLinkClass("/contact")}>
            Contact
          </Link>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          {/* ✅ ONLY LOGOUT (no duplicate dashboard/admin link) */}
          {!loading && user && (
            <button
              onClick={handleLogout}
              className="hidden md:block text-sm text-red-500 hover:underline"
            >
              Logout
            </button>
          )}

          {/* THEME */}
          <button onClick={() => setTheme(isDark ? "light" : "dark")}>
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* ✅ CTA (Single source of truth) */}
          <Button
            href={
              !user
                ? "/login"
                : user.role === "admin"
                ? "/admin"
                : "/dashboard"
            }
            className="hidden md:inline-flex bg-orange-600 hover:bg-orange-700 transition"
          >
            {!user
              ? "Get Started"
              : user.role === "admin"
              ? "Admin Panel"
              : "Dashboard"}
          </Button>

          {/* MOBILE */}
          <div className="md:hidden">
            <MobileSidebar services={services} />
          </div>
        </div>
      </div>
    </nav>
  );
}