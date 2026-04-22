"use client";
import { motion } from "framer-motion";

export default function WhyUs() {
  const points = [
    "Complete IT + E-commerce Solutions",
    "Result-driven strategies",
    "Experienced team",
    "Transparent communication",
    "Affordable & scalable",
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-900">
      <h2 className="text-3xl font-bold text-center mb-16">
        Why Choose Us
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">
        {points.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="glass p-6 rounded-xl"
          >
            ✔ {p}
          </motion.div>
        ))}
      </div>
    </section>
  );
}