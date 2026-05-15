"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ShoppingCart, TrendingUp, Package, BarChart3 } from "lucide-react";

export default function Ecommerce() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  const features = [
    "Amazon Seller & Vendor Central Management",
    "Flipkart Seller Account Management",
    "Meesho Product & Catalog Management",
    "Product Listing & Optimization",
    "Marketplace SEO & Keyword Ranking",
    "PPC Ads & Campaign Management",
    "Inventory & Order Management",
    "A+ Content & Brand Store Design",
  ];

  const cards = [
    {
      title: "Marketplace Setup",
      icon: ShoppingCart,
      desc: "Complete account setup and optimization for all major marketplaces.",
      color: "indigo",
    },
    {
      title: "Sales Growth",
      icon: TrendingUp,
      desc: "Data-driven strategies to boost visibility, conversions, and revenue.",
      color: "orange",
    },
    {
      title: "Operations Management",
      icon: Package,
      desc: "Efficient inventory, order handling, and catalog management.",
      color: "sky",
    },
    {
      title: "Performance Tracking",
      icon: BarChart3,
      desc: "Analytics-driven insights for continuous improvement and scaling.",
      color: "pink",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT SIDE ================= */}
        <div className="space-y-6">

          <p className="uppercase tracking-widest text-sm text-muted">
            E-commerce Solutions
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-strong leading-tight">
            Grow Your <span className="text-orange-500">Online Sales</span>{" "}
            Across Marketplaces
          </h2>

          <p className="text-muted leading-relaxed">
            We help businesses scale on leading marketplaces like Amazon,
            Flipkart, and Meesho with complete end-to-end management and
            performance-driven strategies.
          </p>

          {/* 🔥 FEATURES LIST */}
          <div className="grid sm:grid-cols-2 gap-3 pt-4">
            {features.map((item, i) => (
              <p key={i} className="text-sm text-muted flex items-start gap-2">
                <span className="text-orange-500">✔</span> {item}
              </p>
            ))}
          </div>

          <button className="mt-6 px-6 py-3 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition">
            Start Selling →
          </button>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="grid sm:grid-cols-2 gap-6">

          {cards.map((card, i) => {
            const Icon = card.icon;

            return (
              <div key={i} className="relative group">

                {/* ✨ GLOW */}
                <div className={`absolute -inset-1 rounded-2xl blur-xl opacity-20 
                  bg-gradient-to-r
                  ${card.color === "indigo" && "from-indigo-500 to-indigo-400"}
                  ${card.color === "orange" && "from-orange-500 to-orange-400"}
                  ${card.color === "sky" && "from-sky-500 to-sky-400"}
                  ${card.color === "pink" && "from-pink-500 to-pink-400"}
                  group-hover:opacity-40 transition`} />

                <div className="relative glass p-6 rounded-2xl h-full transition duration-300 group-hover:scale-[1.03]">

                  {/* ICON */}
                  <div className={`mb-4 w-12 h-12 flex items-center justify-center rounded-lg
                    ${card.color === "indigo" && "bg-indigo-500/10 text-indigo-500"}
                    ${card.color === "orange" && "bg-orange-500/10 text-orange-500"}
                    ${card.color === "sky" && "bg-sky-500/10 text-sky-500"}
                    ${card.color === "pink" && "bg-pink-500/10 text-pink-500"}
                  `}>
                    <Icon size={22} />
                  </div>

                  {/* TITLE */}
                  <h3 className="font-semibold text-strong mb-2">
                    {card.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-sm text-muted leading-relaxed">
                    {card.desc}
                  </p>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}