export default function WhyUs() {
  const points = [
    "Complete IT + E-commerce Solutions",
    "Result-driven strategies",
    "Experienced team",
    "Transparent communication",
    "Affordable & scalable",
  ];

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl text-center font-bold mb-12">
        Why Choose Us
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 px-6">
        {points.map((p, i) => (
          <div key={i} className="p-4 rounded-lg shadow">
            ✔ {p}
          </div>
        ))}
      </div>
    </section>
  );
}