export default function ContactMap() {
  return (
    <section className="px-6 pb-24">
      <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden border border-white/10">

        <iframe
          src="https://www.google.com/maps?q=Delhi&output=embed"
          className="w-full h-[400px]"
          loading="lazy"
        />

      </div>
    </section>
  );
}