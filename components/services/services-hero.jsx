"use client";

export default function ServicesHero() {
  return (
    <section className="py-24 px-6 text-center relative overflow-hidden">

      {/* BG Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/20 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto space-y-6">

        <h1 className="text-4xl md:text-5xl font-bold text-strong">
          Our <span className="text-orange-500">Services</span>
        </h1>

        <p className="text-muted text-lg leading-relaxed">
          Comprehensive digital and e-commerce solutions designed to help your
          business build, grow, and scale with performance-driven strategies.
        </p>

      </div>
    </section>
  );
}