export default function Section({
  children,
  className = "",
  title,
}) {
  return (
    <section className={`py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">

        {title && (
          <h2 className="text-4xl font-bold text-center mb-12 text-strong">
            {title}
          </h2>
        )}

        {children}
      </div>
    </section>
  );
}