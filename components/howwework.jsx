"use client";

export default function HowWeWork() {
  const steps = [
    "Understand Business",
    "Create Strategy",
    "Design & Execute",
    "Optimize & Scale",
    "Ongoing Support",
  ];

  return (
    <section className="py-24 text-center">
      <h2 className="text-3xl font-bold mb-16">How We Work</h2>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        {steps.map((step, i) => (
          <div
            key={i}
            className="glass px-6 py-4 rounded-full shadow"
          >
            {i + 1}. {step}
          </div>
        ))}
      </div>
    </section>
  );
}