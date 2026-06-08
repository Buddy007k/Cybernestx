"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { useTheme } from "next-themes";
import { useAuth } from "@/context/AuthContext";

export default function MobileSidebar({ services = [] }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const router = useRouter();
  const pathname = usePathname(); // ✅ for highlighting
  const { theme } = useTheme();
  const { user, loading, logout } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNav = (path) => {
    router.push(path);
    setOpen(false);
  };

  const handleLogout = async () => {
    await logout();
    router.push("/");
    setOpen(false);
  };

  // 🔥 ACTIVE STYLE
  const getLinkClass = (path) => {
    const isActive =
      path === "/"
        ? pathname === "/"
        : pathname.startsWith(path);

    return `flex-1 text-left px-4 py-2 rounded-lg font-medium transition ${
      isActive
        ? "bg-orange-500/10 text-orange-500"
        : isDark
        ? "text-gray-200 hover:bg-white/10 hover:text-white"
        : "text-gray-800 hover:bg-gray-100 hover:text-indigo-600"
    }`;
  };

  return (
    <>
      {/* 🍔 Hamburger */}
      <button
        onClick={() => setOpen(true)}
        className={`p-2 rounded-lg md:hidden transition ${
          isDark
            ? "border border-white/20 text-white"
            : "border border-gray-300 text-gray-800 bg-white/60 backdrop-blur-sm"
        }`}
      >
        ☰
      </button>

      {/* 🌍 PORTAL */}
      {mounted &&
        createPortal(
          <>
            {/* BACKDROP */}
            {open && (
              <div
                className={`fixed inset-0 z-[999] ${
                  isDark
                    ? "bg-black/50 backdrop-blur-md"
                    : "bg-black/30 backdrop-blur-sm"
                }`}
                onClick={() => setOpen(false)}
              />
            )}

            {/* SIDEBAR */}
            <div
              className={`fixed top-0 left-0 h-full w-[280px] z-[1000]
              transform transition-transform duration-300
              ${open ? "translate-x-0" : "-translate-x-full"}
              ${
                isDark
                  ? "bg-black/90 border-white/10"
                  : "bg-white border-gray-200 shadow-xl"
              }
              backdrop-blur-xl border-r`}
            >
              <div className="p-6 flex flex-col h-full">

                {/* HEADER */}
                <div className="flex justify-between items-center mb-8">
                  <h2 className={`font-semibold text-lg ${isDark ? "text-white" : "text-gray-900"}`}>
                    Menu
                  </h2>
                  <button
                    onClick={() => setOpen(false)}
                    className={`text-xl ${isDark ? "text-white" : "text-gray-800"}`}
                  >
                    ✕
                  </button>
                </div>

                {/* NAV */}
                <div className="flex flex-col gap-2">

                  {navItems.map((item) => (
                    <div key={item.name}>

                      <div className="flex items-center justify-between">

                        {/* MAIN LINK */}
                        <button
                          onClick={() => handleNav(item.path)}
                          className={getLinkClass(item.path)}
                        >
                          {item.name}
                        </button>

                        {/* SERVICES DROPDOWN */}
                        {item.name === "Services" && (
                          <button
                            onClick={() => setOpenDropdown(!openDropdown)}
                            className="px-2 text-xs opacity-70"
                          >
                            {openDropdown ? "▲" : "▼"}
                          </button>
                        )}
                      </div>

                      {/* DROPDOWN ITEMS */}
                      {item.name === "Services" && openDropdown && (
                        <div className="ml-4 mt-2 space-y-1">

                          {services.length === 0 && (
                            <p className="text-sm text-muted px-3 py-2">
                              No services available
                            </p>
                          )}

                          {services.map((service) => {
                            const isActive =
                              pathname === `/services/${service.slug}`;

                            return (
                              <button
                                key={service.id}
                                onClick={() =>
                                  handleNav(`/services/${service.slug}`)
                                }
                                className={`block w-full text-left px-3 py-2 text-sm rounded-md transition ${
                                  isActive
                                    ? "bg-orange-500/10 text-orange-500"
                                    : isDark
                                    ? "text-gray-400 hover:text-white hover:bg-white/10"
                                    : "text-gray-600 hover:text-indigo-600 hover:bg-gray-100"
                                }`}
                              >
                                {service.title}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* 🔥 CTA SECTION (MODERN STYLE) */}
                {!loading && (
                  <div className="mt-6 border-t pt-5 space-y-3">

                    {/* CTA BUTTON */}
                    <button
                      onClick={() =>
                        handleNav(
                          !user
                            ? "/login"
                            : user.role === "admin"
                            ? "/admin"
                            : "/dashboard"
                        )
                      }
                      className="w-full py-3 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-700 transition"
                    >
                      {!user
                        ? "Get Started"
                        : user.role === "admin"
                        ? "Admin Panel"
                        : "Dashboard"}
                    </button>

                    {/* LOGOUT */}
                    {user && (
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 rounded-lg text-red-500 hover:bg-red-500/10"
                      >
                        Logout
                      </button>
                    )}
                  </div>
                )}

                {/* FOOTER */}
                <div className="mt-auto text-sm opacity-60">
                  <p className={isDark ? "text-gray-400" : "text-gray-500"}>
                    © CyberNestX
                  </p>
                </div>

              </div>
            </div>
          </>,
          document.body
        )}
    </>
  );
}