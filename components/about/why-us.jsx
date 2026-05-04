"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function WhyUs() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const points = [
    {
      title: "All-in-One IT & E-commerce Expertise",
      desc: "We combine technical excellence with marketplace strategy, giving you everything under one roof.",
    },
    {
      title: "Customized Growth Strategies",
      desc: "No generic solutions — everything is tailored to your business model and goals.",
    },
    {
      title: "Result-Driven Execution",
      desc: "We focus on measurable outcomes like traffic, conversions, and sales growth.",
    },
    {
      title: "Reliable Delivery & Support",
      desc: "From planning to scaling, we stay with you at every stage of your journey.",
    },
    {
      title: "Long-Term Partnership Mindset",
      desc: "We don’t just deliver projects — we build long-term business relationships.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">

        {/* ================= LEFT SIDE ================= */}
        <div className="space-y-6">

          <p className="uppercase tracking-widest text-sm text-muted">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-strong leading-tight">
            Why <span className="text-orange-500">CyberNestX</span> Stands Out
          </h2>

          <p className="text-muted leading-relaxed">
            In a crowded digital landscape, choosing the right partner can make
            all the difference. At CyberNestX, we combine strategy, technology,
            and execution to deliver results that truly matter.
          </p>

          <p className="text-muted leading-relaxed">
            Our approach is not just about building solutions — it’s about
            creating measurable business impact and long-term success.
          </p>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="relative space-y-10">

          {/* Vertical line (timeline feel) */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-500/40 via-indigo-500/30 to-transparent hidden sm:block" />

          {points.map((item, i) => (
            <div key={i} className="relative pl-12 group">

              {/* Dot */}
              <div className="absolute left-0 top-1 w-8 h-8 flex items-center justify-center rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/30 group-hover:scale-110 transition">
                <CheckCircle2 size={16} />
              </div>

              {/* Content */}
              <div className="space-y-2">

                <h3 className="text-lg font-semibold text-strong">
                  {item.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed max-w-md">
                  {item.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}