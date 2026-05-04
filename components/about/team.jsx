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
      name: "Aman Sharma",
      role: "Founder & CEO",
      img: "https://i.pravatar.cc/300?img=11",
      desc: "Leads strategy, innovation, and long-term business growth.",
    },
    {
      name: "Rahul Verma",
      role: "Technical Lead",
      img: "https://i.pravatar.cc/300?img=12",
      desc: "Builds scalable and high-performance systems.",
    },
    {
      name: "Priya Singh",
      role: "UI/UX Designer",
      img: "https://i.pravatar.cc/300?img=13",
      desc: "Designs intuitive and engaging user experiences.",
    },
    {
      name: "Neha Gupta",
      role: "Marketing Manager",
      img: "https://i.pravatar.cc/300?img=14",
      desc: "Drives SEO, ads, and growth strategies.",
    },
    {
      name: "Karan Mehta",
      role: "E-commerce Specialist",
      img: "https://i.pravatar.cc/300?img=15",
      desc: "Optimizes marketplace performance & sales.",
    },
    {
      name: "Arjun Patel",
      role: "Web Developer",
      img: "https://i.pravatar.cc/300?img=16",
      desc: "Builds fast and modern web applications.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* 🔥 HEADING */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-strong">
            Meet Our <span className="text-orange-500">Experts</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            A passionate team of professionals dedicated to building impactful
            digital solutions and driving business growth.
          </p>
        </div>

        {/* 🔥 TEAM GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

          {team.map((member, i) => (
            <div key={i} className="group text-center">

              {/* IMAGE */}
              <div className="relative mx-auto w-40 h-40 mb-6">

                {/* glow */}
                <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-r from-indigo-500/30 to-orange-500/30 opacity-0 group-hover:opacity-100 transition" />

                <img
                  src={member.img}
                  alt={member.name}
                  className="relative w-full h-full object-cover rounded-full border-4 
                  border-white dark:border-black transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* NAME */}
              <h3 className="text-lg font-semibold text-strong">
                {member.name}
              </h3>

              {/* ROLE */}
              <p className="text-sm text-orange-500 mb-2">
                {member.role}
              </p>

              {/* DESC (hover reveal) */}
              <p className="text-sm text-muted max-w-xs mx-auto opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                {member.desc}
              </p>

            </div>
          ))}

        </div>

        {/* 🔥 BOTTOM LINE */}
        <div className="text-center pt-10">
          <p className="text-lg md:text-xl font-medium text-strong">
            A strong team is the foundation of every successful project.
          </p>
        </div>

      </div>
    </section>
  );
}