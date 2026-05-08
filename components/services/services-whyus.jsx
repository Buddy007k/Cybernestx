"use client";

export default function ServicesWhyUs() {
  const points = [
    "End-to-End Digital & E-commerce Solutions",
    "Customized Strategies for Your Business",
    "Data-Driven & Performance Focused",
    "Transparent Communication & Reporting",
    "Dedicated Support & Long-Term Partnership",
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-strong">
            Why Choose Our <span className="text-orange-500">Services</span>
          </h2>

          <p className="text-muted">
            We don’t just deliver services — we build scalable systems
            designed for measurable business growth and long-term success.
          </p>

          <div className="space-y-3">
            {points.map((p, i) => (
              <p key={i} className="flex items-center gap-2 text-muted">
                ✔ {p}
              </p>
            ))}
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative">

          <div className="rounded-2xl border border-[var(--border)] p-10 bg-[var(--card)]">

            <h3 className="text-xl font-semibold text-strong mb-4">
              Result-Focused Approach
            </h3>

            <p className="text-muted text-sm">
              Every service we provide is aligned with business outcomes —
              whether it's traffic, conversions, or scalable growth.
            </p>

            <div className="mt-6 h-[2px] w-20 bg-orange-500 rounded-full" />

          </div>

          {/* glow */}
          <div className="absolute -inset-4 blur-2xl bg-orange-500/10 -z-10" />

        </div>

      </div>
    </section>
  );
}