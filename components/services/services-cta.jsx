"use client";

import Button from "../ui/button";

export default function ServicesCTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto relative overflow-hidden rounded-2xl border border-[var(--border)]">

        {/* BG */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-orange-500/10" />

        {/* CONTENT */}
        <div className="relative p-12 grid md:grid-cols-2 gap-10 items-center">

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-strong">
              Ready to Scale Your Business?
            </h2>

            <p className="text-muted">
              Let’s build powerful digital systems that drive real growth
              and measurable results for your business.
            </p>
          </div>

          <div className="flex md:justify-end">
            <Button href="/contact">
              Get Free Consultation
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}