export default function Results() {
  const results = [
    "Increased website traffic",
    "Higher search rankings",
    "Improved conversions",
    "Growth in online sales",
    "Strong brand presence",
  ];

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl text-center font-bold mb-12">
        Results That Matter
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 px-6">
        {results.map((r, i) => (
          <div key={i} className="p-4 shadow rounded-lg">
            ✔ {r}
          </div>
        ))}
      </div>
    </section>
  );
}