"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { useTheme } from "next-themes";
import { useAuth } from "@/context/AuthContext";

export default function MobileSidebar({ services = [] }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const router = useRouter();
  const { theme } = useTheme();
  const { user, loading, logout } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" }, // ✅ no children here
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
              className={`fixed top-0 left-0 h-full w-[270px] z-[1000]
              transform transition-transform duration-300
              ${open ? "translate-x-0" : "-translate-x-full"}
              ${
                isDark
                  ? "bg-black/85 border-white/10"
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

                {/* NAV LINKS */}
                <div className="flex flex-col gap-3">
                  {navItems.map((item) => (
                    <div key={item.name}>

                      {/* MAIN BUTTON */}
                      <button
                        onClick={() => {
                          if (item.name === "Services") {
                            setOpenDropdown(!openDropdown);
                          } else {
                            handleNav(item.path);
                          }
                        }}
                        className={`w-full flex justify-between items-center text-left px-4 py-2 rounded-lg font-medium transition ${
                          isDark
                            ? "text-gray-200 hover:bg-white/10 hover:text-white"
                            : "text-gray-800 hover:bg-gray-100 hover:text-indigo-600"
                        }`}
                      >
                        {item.name}
                        {item.name === "Services" && (
                          <span className="text-xs">▼</span>
                        )}
                      </button>

                      {/* ✅ DYNAMIC SERVICES DROPDOWN */}
                      {item.name === "Services" && openDropdown && (
                        <div className="ml-4 mt-2 space-y-2">

                          {services.length === 0 && (
                            <p className="text-sm text-muted px-3 py-2">
                              No services available
                            </p>
                          )}

                          {services.map((service) => (
                            <button
                              key={service.id}
                              onClick={() => handleNav(`/services/${service.slug}`)}
                              className={`block w-full text-left px-3 py-2 text-sm rounded-md transition ${
                                isDark
                                  ? "text-gray-400 hover:text-white hover:bg-white/10"
                                  : "text-gray-600 hover:text-indigo-600 hover:bg-gray-100"
                              }`}
                            >
                              {service.title}
                            </button>
                          ))}
                        </div>
                      )}

                    </div>
                  ))}
                </div>

                {/* AUTH */}
                {!loading && (
                  <div className="mt-6 border-t pt-4 space-y-3">
                    {!user ? (
                      <>
                        <button onClick={() => handleNav("/login")} className="w-full text-left px-4 py-2 rounded-lg hover:bg-indigo-500/10">
                          Login
                        </button>
                        <button onClick={() => handleNav("/register")} className="w-full text-left px-4 py-2 rounded-lg hover:bg-indigo-500/10">
                          Signup
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() =>
                            handleNav(user.role === "admin" ? "/admin" : "/dashboard")
                          }
                          className="w-full text-left px-4 py-2 rounded-lg hover:bg-indigo-500/10"
                        >
                          {user.role === "admin" ? "Admin Dashboard" : "Dashboard"}
                        </button>

                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 rounded-lg text-red-500 hover:bg-red-500/10"
                        >
                          Logout
                        </button>
                      </>
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