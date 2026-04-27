"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { useTheme } from "next-themes";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { theme } = useTheme();

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
            {/* 🌫 BACKDROP */}
            {open && (
              <div
                className={`fixed inset-0 z-[999] transition-all duration-300 ${
                  isDark
                    ? "bg-black/50 backdrop-blur-md"
                    : "bg-black/30 backdrop-blur-sm"
                }`}
                onClick={() => setOpen(false)}
              />
            )}

            {/* 📱 SIDEBAR */}
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

                {/* 🔝 HEADER */}
                <div className="flex justify-between items-center mb-8">
                  <h2
                    className={`font-semibold text-lg ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Menu
                  </h2>

                  <button
                    onClick={() => setOpen(false)}
                    className={`text-xl ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    ✕
                  </button>
                </div>

                {/* 🔗 NAV LINKS */}
                <div className="flex flex-col gap-3">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNav(item.path)}
                      className={`text-left px-4 py-2 rounded-lg font-medium transition ${
                        isDark
                          ? "text-gray-200 hover:bg-white/10 hover:text-white"
                          : "text-gray-800 hover:bg-gray-100 hover:text-indigo-600"
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>

                {/* 🔻 FOOTER SPACE (OPTIONAL FUTURE USE) */}
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