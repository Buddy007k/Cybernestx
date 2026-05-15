"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Team() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  const team = [
    {
      name: "Aman Tiwari",
      role: "Founder & CEO",
      img: "/assets/team/aman.jpeg",
      desc: "Visionary leader driving innovation, strategy, and long-term growth.",
    },
    {
      name: "Abhishek kumar",
      role: "Technical Lead",
      img: "/assets/team/abhishek.jpeg",
      desc: "Expert in scalable systems, architecture, and performance engineering.",
    },
    {
      name: "Harshit Tiwari",
      role: "UI/UX Designer",
      img: "/assets/team/harshit.jpg",
      desc: "Designs intuitive, user-focused, and visually engaging experiences.",
    },
    {
      name: "Kartik Verma",
      role: "Marketing Manager",
      img: "/assets/team/patanahi.jpeg",
      desc: "Drives SEO, paid ads, and data-backed marketing growth strategies.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* 🔥 HEADING */}
        <div className="text-center space-y-4">
          <p className="text-orange-500 text-sm tracking-widest uppercase">
            The Minds Behind CyberNestX
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-strong">
            Meet Our Leadership
          </h2>

          <p className="text-muted max-w-2xl mx-auto">
            A team of experts committed to building scalable, high-performance
            digital solutions and driving measurable business growth.
          </p>
        </div>

        {/* 🔥 TEAM GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {team.map((member, i) => (
            <div key={i} className="group relative">

              {/* ✨ CARD */}
              <div className={`rounded-2xl overflow-hidden border transition duration-300
                ${isDark 
                  ? "bg-[#0b1c2c]/60 border-white/10 hover:border-white/20" 
                  : "bg-white border-black/10 hover:border-black/20"}
              `}>

                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-60 object-cover transition duration-500 group-hover:scale-110"
                  />

                  {/* gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                </div>

                {/* CONTENT */}
                <div className="p-6 space-y-3">

                  <h3 className="text-lg font-semibold text-strong">
                    {member.name}
                  </h3>

                  <p className="text-orange-500 text-sm font-medium">
                    {member.role}
                  </p>

                  <p className="text-sm text-muted leading-relaxed">
                    {member.desc}
                  </p>

                </div>
              </div>

              {/* ✨ HOVER GLOW */}
              <div className="absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition 
                bg-gradient-to-r from-indigo-500 to-orange-500 -z-10"
              />

            </div>
          ))}

        </div>

        {/* 🔥 FOOT LINE */}
        <div className="text-center pt-10">
          <p className="text-lg md:text-xl font-medium text-strong">
            A strong team is the foundation of every successful project.
          </p>
        </div>

      </div>
    </section>
  );
}