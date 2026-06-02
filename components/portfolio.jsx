"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Portfolio() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  const projects = [
    {
      title: "Pay-et",
      img: "/assets/p2.png",
      link: "https://www.pay-et.in/",
    },
    {
      title: "Dolin Decor",
      img: "/assets/p1.png",
      link: "https://dolindecor.com/",
    },
    {
      title: "Odarts",
      img: "/assets/p3.png",
      link: "https://odarts.com/",
    },
  ];

  return (
    <section className="py-28 px-6 relative z-0">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div className="lg:sticky lg:top-28 h-fit space-y-6">
          <p className="uppercase tracking-widest text-sm text-muted">
            Our Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-strong leading-tight">
            Discover Our <br />
            Exceptional Portfolio
          </h2>

          <p className="text-muted leading-relaxed">
            Our portfolio is more than just a showcase — it’s a collection of
            stories where bold ideas meet innovation.
          </p>

          <p className="text-muted leading-relaxed">
            Each project is crafted to push boundaries and deliver real impact.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">

          {projects.map((project, i) => (
            <div
              key={i}
              className="mb-12 sticky"
              style={{
                top: `${120 + i * 25}px`,   // ✅ below navbar
                zIndex: 10 + i,             // ✅ lower than navbar
              }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div
                  className={`rounded-2xl overflow-hidden transition duration-500
                  ${
                    isDark
                      ? "bg-black border border-white/10"
                      : "bg-white border border-gray-200 shadow-lg"
                  }
                  group-hover:scale-[1.02]
                  `}
                >
                  {/* IMAGE */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-[240px] sm:h-[300px] md:h-[400px] object-cover transition duration-700 group-hover:scale-110"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 text-white text-sm px-4 py-2 rounded-lg bg-white/20 backdrop-blur-md">
                        View Project →
                      </span>
                    </div>
                  </div>

                  {/* TITLE */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-strong">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}