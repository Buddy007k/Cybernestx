"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Users, Lightbulb, ShieldCheck, Target, Heart } from "lucide-react";

export default function WorkCulture() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const values = [
    {
      title: "Collaborative Environment",
      desc: "We believe in teamwork, shared ideas, and collective success.",
      icon: Users,
      color: "indigo",
    },
    {
      title: "Innovation-Driven",
      desc: "We continuously adapt to the latest technologies and trends.",
      icon: Lightbulb,
      color: "orange",
    },
    {
      title: "Excellence in Execution",
      desc: "We deliver high-quality solutions with attention to every detail.",
      icon: Target,
      color: "sky",
    },
    {
      title: "Integrity & Transparency",
      desc: "Honest communication and ethical practices guide everything we do.",
      icon: ShieldCheck,
      color: "pink",
    },
    {
      title: "Client-Centric Approach",
      desc: "We focus on delivering measurable results that matter to our clients.",
      icon: Heart,
      color: "rose",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* 🔥 HEADING */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-strong">
            Our <span className="text-orange-500">Work Culture</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            At CyberNestX, our culture is built on innovation, collaboration,
            and a commitment to delivering real business results.
          </p>
        </div>

        {/* 🔥 GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {values.map((item, i) => {
            const Icon = item.icon;

            return (
              <div key={i} className="relative group">

                {/* ✨ GLOW */}
                <div className={`absolute -inset-1 rounded-2xl blur-xl opacity-20 
                  bg-gradient-to-r
                  ${item.color === "indigo" && "from-indigo-500 to-indigo-400"}
                  ${item.color === "orange" && "from-orange-500 to-orange-400"}
                  ${item.color === "sky" && "from-sky-500 to-sky-400"}
                  ${item.color === "pink" && "from-pink-500 to-pink-400"}
                  ${item.color === "rose" && "from-rose-500 to-rose-400"}
                  group-hover:opacity-40 transition`} />

                <div className="relative glass p-6 rounded-2xl h-full transition duration-300 group-hover:scale-[1.03]">

                  {/* ICON */}
                  <div className={`mb-4 w-12 h-12 flex items-center justify-center rounded-lg
                    ${item.color === "indigo" && "bg-indigo-500/10 text-indigo-500"}
                    ${item.color === "orange" && "bg-orange-500/10 text-orange-500"}
                    ${item.color === "sky" && "bg-sky-500/10 text-sky-500"}
                    ${item.color === "pink" && "bg-pink-500/10 text-pink-500"}
                    ${item.color === "rose" && "bg-rose-500/10 text-rose-500"}
                  `}>
                    <Icon size={22} />
                  </div>

                  {/* TITLE */}
                  <h3 className="font-semibold text-strong mb-2">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-sm text-muted leading-relaxed">
                    {item.desc}
                  </p>

                </div>
              </div>
            );
          })}

        </div>

        {/* 🔥 BOTTOM STATEMENT (STRONG BRAND LINE) */}
        <div className="text-center pt-10">
          <p className="text-lg md:text-xl font-medium text-strong">
            A strong team and the right culture are the foundation of every
            successful project.
          </p>
        </div>

      </div>
    </section>
  );
}