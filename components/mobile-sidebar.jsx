"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MobileSidebar() {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Contact", path: "/contact" },
        { name: "Dashboard", path: "/dashboard" },
        { name: "Login", path: "/login" }, // 👈 add this
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
                className="md:hidden p-2 rounded-lg border"
            >
                ☰
            </button>

            {/* 🔥 Overlay */}
            {open && (
                <div
                    className="fixed inset-0 z-40 
                    backdrop-blur-xl 
                    bg-white/30 dark:bg-black/50 
                    transition-all duration-300"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* 📱 Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-[260px] z-50 
                bg-white/90 dark:bg-black/80 backdrop-blur-xl 
                border-r border-gray-200 dark:border-white/10
                transform transition-transform duration-300
                ${open ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="p-6 space-y-6">

                    {/* Close */}
                    <button
                        onClick={() => setOpen(false)}
                        className="text-lg"
                    >
                        ✕
                    </button>

                    {/* Links */}
                    <div className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => handleNav(item.path)}
                                className="text-left text-strong hover:text-indigo-500 transition"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}