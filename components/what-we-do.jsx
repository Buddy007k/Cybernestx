"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function WhatWeDo() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const isDark = theme === "dark";

    return (
        <section className="py-20 px-6">
            <div className="max-w-5xl mx-auto text-center space-y-6">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-strong">
                    What We Do
                </h2>

                {/* Description */}
                <p className="text-lg text-muted leading-relaxed">
                    At <span className="font-semibold text-indigo-600">CyberNestX</span>, we provide
                    end-to-end IT and E-commerce solutions designed to help businesses succeed in
                    today’s competitive digital landscape.
                </p>

                <p className="text-lg text-muted leading-relaxed">
                    We combine <span className="font-medium text-strong">technology</span>,{" "}
                    <span className="font-medium text-strong">strategy</span>, and{" "}
                    <span className="font-medium text-strong">creativity</span> to deliver
                    results that truly matter.
                </p>

            </div>
        </section>
    );
}