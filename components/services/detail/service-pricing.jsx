"use client";

export default function ServicePricing() {
  const plans = [
    {
      name: "Starter",
      price: "Custom",
      desc: "Perfect for new businesses starting online",
      features: [
        "Responsive Website",
        "Basic SEO Setup",
        "Contact Form",
        "Mobile Optimization",
        "1 Month Support",
      ],
      highlight: false,
    },
    {
      name: "Professional",
      price: "Popular",
      desc: "Best for scaling businesses",
      features: [
        "Custom Web App / E-commerce",
        "Advanced SEO & Analytics",
        "UI/UX Design System",
        "Performance Optimization",
        "Digital Marketing Strategy",
        "6 Months Support",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Tailored",
      desc: "For large businesses & complex needs",
      features: [
        "Full-Stack Architecture",
        "Marketplace Management",
        "Dedicated Manager",
        "Enterprise Security",
        "API Integrations",
        "24/7 Priority Support",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {plans.map((plan, i) => (
          <div
            key={i}
            className={`relative rounded-2xl border p-8 transition ${
              plan.highlight
                ? "border-orange-500 shadow-lg scale-105"
                : "border-[var(--border)]"
            }`}
          >

            {/* MOST SELECTED */}
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs px-4 py-1 rounded-full">
                MOST SELECTED
              </div>
            )}

            <h3 className="text-xl font-semibold text-strong mb-2">
              {plan.name}
            </h3>

            <p className="text-muted text-sm mb-6">
              {plan.desc}
            </p>

            <h2 className="text-3xl font-bold text-strong mb-6">
              {plan.price}
            </h2>

            <div className="space-y-3 mb-6">
              {plan.features.map((f, idx) => (
                <p key={idx} className="text-muted flex gap-2">
                  ✔ {f}
                </p>
              ))}
            </div>

            <button className="w-full py-3 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition">
              Request Proposal
            </button>

          </div>
        ))}

      </div>
    </section>
  );
}