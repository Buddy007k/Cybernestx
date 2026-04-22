"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Login", path: "/login" },
  ];

  const handleNav = (path) => {
    router.push(path);
    setOpen(false);
  };

  return (
    <>
      {/* 🍔 Hamburger Button */}
      <button
        onClick={() => setOpen(true)}
        className="p-2 rounded-lg border border-gray-300 dark:border-white/20 md:hidden"
      >
        ☰
      </button>

      {/* 🌍 PORTAL RENDER (FULL PAGE) */}
      {mounted &&
        createPortal(
          <>
            {/* 🌫 FULL PAGE BLUR OVERLAY */}
            {open && (
              <div
                className="fixed inset-0 z-[999] backdrop-blur-xl bg-black/40 transition-all duration-300"
                onClick={() => setOpen(false)}
              />
            )}

            {/* 📱 SIDEBAR */}
            <div
              className={`fixed top-0 left-0 h-full w-[260px] z-[1000]
              bg-white/90 dark:bg-black/80 backdrop-blur-xl
              border-r border-gray-200 dark:border-white/10
              transform transition-transform duration-300
              ${open ? "translate-x-0" : "-translate-x-full"}`}
            >
              <div className="p-6 space-y-6">

                {/* Close Button */}
                <button
                  onClick={() => setOpen(false)}
                  className="text-lg"
                >
                  ✕
                </button>

                {/* Navigation Links */}
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNav(item.path)}
                      className="text-left text-strong hover:text-indigo-500 transition font-medium"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>

              </div>
            </div>
          </>,
          document.body
        )}
    </>
  );
}