"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Layers, Eye, ArrowUpRight, Zap } from "lucide-react";

export default function WhyUs() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  const items = [
    {
      icon: <Layers size={20} />,
      title: "Expertise and Specialization",
      desc: "Complete IT + E-commerce solutions with a skilled and experienced team.",
    },
    {
      icon: <Eye size={20} />,
      title: "Fresh Perspectives",
      desc: "Innovative strategies to stay ahead in changing market trends.",
    },
    {
      icon: <ArrowUpRight size={20} />,
      title: "Scalability and Flexibility",
      desc: "Solutions that grow with your business from startup to enterprise.",
    },
    {
      icon: <Zap size={20} />,
      title: "Resource Optimization",
      desc: "Save time and cost with efficient workflows and expert execution.",
    },
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">

      {/* 🔥 subtle orange glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full top-0 left-0" />
        <div className="absolute w-[400px] h-[400px] bg-orange-400/10 blur-[100px] rounded-full bottom-0 right-0" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-16 text-strong">
          Why our clients choose us as{" "}
          <span className="text-orange-500">partners</span>
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          {items.map((item, i) => (
            <div key={i} className="space-y-4">

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-strong">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-muted max-w-md">
                {item.desc}
              </p>

              {/* Accent line */}
              <div className="w-10 h-[2px] bg-orange-500" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}