"use client";

import { useTheme } from "next-themes";

export default function Growth() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const growthItems = [
    "Amazon Seller Central & Vendor Central",
    "Flipkart Seller Management",
    "Meesho Product & Catalog Management",
    "Product Listing & Optimization",
    "PPC Ads & Sales Growth Strategy",
  ];

  return (
    <section className="py-15 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-strong leading-tight">
            Grow Your <span className="text-indigo-500">Online Sales</span>
          </h2>

          <p className="text-muted text-lg">
            We help you succeed on top marketplaces with powerful optimization,
            ad strategies, and growth-focused execution.
          </p>

          {/* LIST */}
          <div className="space-y-4 pt-4">
            {growthItems.map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 p-3 rounded-lg transition ${
                  isDark
                    ? "bg-white/5 hover:bg-white/10"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <span className="text-indigo-500 text-lg">✔</span>
                <span className="text-strong">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div
          className={`relative p-8 rounded-3xl overflow-hidden ${
            isDark
              ? "bg-gradient-to-br from-indigo-500/10 to-transparent border border-white/10"
              : "bg-gradient-to-br from-indigo-50 to-white border border-gray-200"
          }`}
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-strong">
              Scale Faster 🚀
            </h3>

            <p className="text-muted">
              From product listings to ad campaigns, we manage everything needed
              to grow your e-commerce business efficiently.
            </p>

            <div className="flex gap-4 flex-wrap">
              {["Amazon", "Flipkart", "Meesho"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-500 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/20 blur-3xl rounded-full" />
        </div>

      </div>
    </section>
  );
}