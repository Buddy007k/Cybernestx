"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Technologies() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  const tech = [
    {
      title: "Frontend",
      desc: "Modern, fast and responsive UI technologies",
      items: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "HTML5"],
    },
    {
      title: "Backend",
      desc: "Robust and scalable server-side technologies",
      items: ["Node.js", "PHP", "Python", "Laravel"],
    },
    {
      title: "Database",
      desc: "Secure and scalable data management",
      items: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      title: "Cloud & Hosting",
      desc: "Reliable infrastructure and deployment platforms",
      items: ["AWS", "Cloudflare", "cPanel", "Hostinger"],
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* 🔥 HEADING */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-strong">
            Technologies We <span className="text-orange-500">Use</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            We leverage modern and reliable technologies to build scalable,
            secure, and high-performance digital solutions.
          </p>
        </div>

        {/* 🔥 TECH BLOCKS */}
        <div className="grid lg:grid-cols-2 gap-10">

          {tech.map((t, i) => (
            <div key={i} className="space-y-4 group">

              {/* TOP TITLE */}
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-strong">
                  {t.title}
                </h3>

                {/* subtle divider */}
                <div className="flex-1 h-[1px] ml-4 bg-gradient-to-r from-transparent via-gray-300 dark:via-white/20 to-transparent" />
              </div>

              {/* DESC */}
              <p className="text-sm text-muted max-w-md">
                {t.desc}
              </p>

              {/* TECH TAGS */}
              <div className="flex flex-wrap gap-3 pt-2">
                {t.items.map((item, idx) => (
                  <span
                    key={idx}
                    className={`px-4 py-2 text-sm rounded-full border transition
                      ${
                        isDark
                          ? "border-white/10 bg-white/5 hover:bg-white/10"
                          : "border-gray-200 bg-gray-50 hover:bg-gray-100"
                      }
                    `}
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

        {/* 🔥 BOTTOM LINE */}
        <div className="text-center pt-10">
          <p className="text-lg md:text-xl font-medium text-strong">
            The right technology stack powers performance, scalability, and long-term success.
          </p>
        </div>

      </div>
    </section>
  );
}