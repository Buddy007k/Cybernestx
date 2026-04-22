"use client";
import { motion } from "framer-motion";
import { stagger, fadeUp } from "./animations";

export default function Services() {
  const services = [
    "Website Development",
    "SEO Optimization",
    "Digital Marketing",
    "E-commerce",
  ];

  return (
    <section className="py-24">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6"
      >
        {services.map((s, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="glass p-6 rounded-xl"
          >
            {s}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}