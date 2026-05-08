export default function ContactMap() {
  return (
    <section className="px-6 pb-24">
      <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden border border-white/10">

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3492.13647083589!2d77.09719077496764!3d28.923998370786205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390daf0869ccd907%3A0x2c27dd1710ef772f!2sCybernestx!5e0!3m2!1sen!2sin!4v1778242794772!5m2!1sen!2sin"
          className="w-full h-[400px]"
          loading="lazy"
        />

      </div>
    </section>
  );
}