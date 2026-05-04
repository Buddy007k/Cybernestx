"use client";

import { useEffect, useState, useRef } from "react";

export default function Stats() {
  const [start, setStart] = useState(false);
  const ref = useRef(null);

  const stats = [
    { number: 1800, suffix: "+", label: "Projects Completed" },
    { number: 600, suffix: "+", label: "Happy Clients" },
    { number: 95, suffix: "%", label: "Client Retention" },
    { number: 5, suffix: "+", label: "Years Experience" },
  ];

  // 🔥 Trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // 🔢 Counter Component
  const Counter = ({ end, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!start) return;

      let startValue = 0;
      const duration = 1500;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        startValue += increment;
        if (startValue >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(startValue));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [start, end]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* 🔥 HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-strong">
            Results That <span className="text-orange-500">Speak</span>
          </h2>
          <p className="text-muted mt-3">
            Numbers that reflect our commitment to excellence and growth.
          </p>
        </div>

        {/* 🔥 STATS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, i) => (
            <div key={i} className="relative group">

              {/* ✨ GLOW */}
              <div className="absolute -inset-1 rounded-2xl blur-xl opacity-20 bg-gradient-to-r from-indigo-500 to-orange-500 group-hover:opacity-40 transition" />

              <div className="relative glass p-8 rounded-2xl text-center transition duration-300 group-hover:scale-[1.05]">

                <h3 className="text-3xl md:text-4xl font-bold text-strong">
                  <Counter end={item.number} suffix={item.suffix} />
                </h3>

                <p className="text-muted mt-2 text-sm">
                  {item.label}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}