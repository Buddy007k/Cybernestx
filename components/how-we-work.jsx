"use client";

import { useTheme } from "next-themes";
import {
  Search,
  Lightbulb,
  PenTool,
  Rocket,
  LifeBuoy,
} from "lucide-react";

export default function HowWeWork() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const steps = [
    {
      title: "Understand Your Business",
      icon: Search,
      desc: "We analyze your goals, audience, and current challenges to build a strong foundation.",
    },
    {
      title: "Create Strategy & Plan",
      icon: Lightbulb,
      desc: "We craft a tailored roadmap focused on growth, performance, and scalability.",
    },
    {
      title: "Design & Execute",
      icon: PenTool,
      desc: "Our team designs and builds solutions that align with your brand and objectives.",
    },
    {
      title: "Optimize & Scale",
      icon: Rocket,
      desc: "We continuously improve performance and scale your business with data-driven insights.",
    },
    {
      title: "Ongoing Support",
      icon: LifeBuoy,
      desc: "We stay with you long-term to ensure stability, growth, and continuous success.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* HEADING */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-strong">
            How We <span className="text-indigo-500">Work</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            A structured process designed to deliver consistent, scalable, and high-quality results.
          </p>
        </div>

        {/* STEPS */}
        <div className="relative">

          {/* 🔗 CONNECTING LINE (desktop only) */}
          <div
            className={`hidden md:block absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 ${
              isDark ? "bg-white/10" : "bg-gray-200"
            }`}
          />

          <div className="grid md:grid-cols-5 gap-10 relative">

            {steps.map((step, i) => {
              const Icon = step.icon;

              return (
                <div key={i} className="relative group text-center">

                  {/* ICON */}
                  <div className="flex justify-center mb-4 relative z-10">
                    <div
                      className={`p-4 rounded-xl transition transform group-hover:scale-110 ${
                        isDark
                          ? "bg-white/5 border border-white/10"
                          : "bg-white border border-gray-200 shadow-sm"
                      }`}
                    >
                      <Icon className="text-indigo-500" size={26} />
                    </div>
                  </div>

                  {/* STEP NUMBER */}
                  <div className="text-xs text-muted mb-2">
                    Step {i + 1}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold text-strong mb-2">
                    {step.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-sm text-muted">
                    {step.desc}
                  </p>

                  {/* DOT ON LINE */}
                  <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-indigo-500" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}