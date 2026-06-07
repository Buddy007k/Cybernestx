"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

export default function Reviews() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  const reviews = [
    {
      name: "Shubham Rajput",
      text: "Very excellent service  I am fully satisfied and recommend everyone.",
      rating: 5,
    },
    {
      name: "Aditya Verma",
      text: "Good service \nBest environments \nEveryone recommend it",
      rating: 5,
    },
    {
      name: "Anuj Roy",
      text: "Best Service ⚡\nI recommend to everyone 💥 …",
      rating: 5,
    },
    {
      name: "Preeti Sharma",
      text: "Great service and excellent team! Highly recommend in for web and digital solutions.👌 …",
      rating: 5,
    },
    {
      name: "Kritika Singh",
      text: "Every one recommend it.very good service",
      rating: 5,
    },
    {
      name: "Ãshûtøsh Bhãrdwãj",
      text: "Best web development service with professional support and quality work. Highly recommended to everyone for reliable and modern websites.",
      rating: 5,
    },
  ];

  const ReviewCard = ({ review }) => (
    <div
      className={`min-w-[320px] md:min-w-[360px] max-w-[360px] p-6 rounded-2xl mx-4 transition ${isDark
          ? "bg-white/5 border border-white/10"
          : "bg-white border border-gray-200 shadow-sm"
        }`}
    >
      <p className="text-sm text-muted mb-6 leading-relaxed whitespace-pre-line">
        “{review.text}”
      </p>

      <div className="flex items-center justify-between">
        {/* NAME */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-orange-500" />
          <span className="text-sm font-medium text-strong">
            {review.name}
          </span>
        </div>

        {/* STARS */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < review.rating
                  ? "fill-orange-500 text-orange-500"
                  : "text-gray-400"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 overflow-hidden">

      {/* 🔹 HEADING CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-strong">
          What Our <span className="text-orange-500">Clients Say</span>
        </h2>
        <p className="text-muted max-w-2xl mx-auto">
          Don’t just take our word for it — hear from businesses we’ve helped transform.
        </p>
      </div>

      {/* 🔥 FULL WIDTH MARQUEE */}
      <div className="relative w-full overflow-hidden">

        {/* 🌫 LEFT FADE */}
        <div
          className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{
            background: isDark
              ? "linear-gradient(to right, rgba(2,6,23,1), rgba(2,6,23,0.7), transparent)"
              : "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0.7), transparent)",
          }}
        />

        {/* 🌫 RIGHT FADE */}
        <div
          className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{
            background: isDark
              ? "linear-gradient(to left, rgba(2,6,23,1), rgba(2,6,23,0.7), transparent)"
              : "linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0.7), transparent)",
          }}
        />

        {/* 🔼 TOP ROW (RIGHT → LEFT) */}
        <div className="marquee-left flex py-4">
          {[...reviews, ...reviews].map((review, idx) => (
            <ReviewCard key={`top-${idx}`} review={review} />
          ))}
        </div>

        {/* 🔽 BOTTOM ROW (LEFT → RIGHT) */}
        <div className="marquee-right flex py-4">
          {[...reviews, ...reviews].map((review, idx) => (
            <ReviewCard key={`bottom-${idx}`} review={review} />
          ))}
        </div>

      </div>
    </section>
  );
}