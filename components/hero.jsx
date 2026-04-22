"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-primary/30 blur-[120px] rounded-full top-20 left-1/2 -translate-x-1/2" />

      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
        >
          <span className="gradient-text">
            Transforming Businesses
          </span>
          <br />
          with Smart Digital Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
        >
          Build, grow, and scale your business with high-performance websites
          and marketplace strategies.
        </motion.p>

        <div className="flex gap-4 justify-center">
          <button className="bg-primary text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition">
            Get Started
          </button>

          <button className="glass px-6 py-3 rounded-xl hover:scale-105 transition">
            Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}