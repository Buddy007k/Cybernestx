"use client";

import ServicePricing from "./service-pricing";

export default function ServiceTemplate({
  title,
  description,
  image,
  offerings,
  outcome,
}) {
  return (
    <>
      {/* HERO */}
      <section className="py-24 text-center px-6">
        <h1 className="text-4xl font-bold text-strong mb-4">
          {title}
        </h1>
        <p className="text-muted max-w-2xl mx-auto">
          {description}
        </p>
      </section>

      {/* IMAGE */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto relative">

          <div className="absolute -inset-4 bg-indigo-500/10 blur-2xl -z-10" />

          <img
            src={image}
            alt={title}
            className="w-full h-[350px] md:h-[420px] object-cover rounded-2xl shadow-xl transition duration-500 hover:scale-[1.01]"
          />

        </div>
      </section>

      {/* OFFERINGS */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="space-y-3 text-muted text-center">
          {offerings.map((item, i) => (
            <p key={i}>✔ {item}</p>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <ServicePricing />

      {/* OUTCOME */}
      <section className="py-16 text-center px-6">
        <p className="text-lg text-strong max-w-2xl mx-auto">
          👉 {outcome}
        </p>
      </section>
    </>
  );
}