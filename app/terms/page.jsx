"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function TermsPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-10">

        <h1 className="text-4xl font-bold text-strong text-center">
          Terms & Conditions
        </h1>

        <p className="text-center text-muted">
          Last Updated: May 2026
        </p>

        <div
          className={`p-8 rounded-2xl space-y-6 ${
            isDark
              ? "bg-black/60 border border-white/10 backdrop-blur-xl"
              : "bg-white border border-gray-200 shadow-sm"
          }`}
        >

          <h2 className="text-xl font-semibold text-strong">1. Acceptance of Terms</h2>
          <p className="text-muted">
            By using our website or services, you agree to these Terms & Conditions.
          </p>

          <h2 className="text-xl font-semibold text-strong">2. Services</h2>
          <ul className="list-disc pl-6 text-muted space-y-2">
            <li>Website development</li>
            <li>E-commerce management</li>
            <li>SEO & marketing</li>
            <li>UI/UX design</li>
            <li>Consultation</li>
          </ul>

          <h2 className="text-xl font-semibold text-strong">3. Project Scope</h2>
          <p className="text-muted">
            Deliverables and pricing are defined separately. Additional changes may incur extra charges.
          </p>

          <h2 className="text-xl font-semibold text-strong">4. Pricing & Payments</h2>
          <p className="text-muted">
            Pricing is indicative and finalized after requirement analysis.
          </p>

          <h2 className="text-xl font-semibold text-strong">5. Intellectual Property</h2>
          <p className="text-muted">
            Clients own their content. CyberNestX retains proprietary tools and systems.
          </p>

          <h2 className="text-xl font-semibold text-strong">6. Third-Party Platforms</h2>
          <p className="text-muted">
            We are not responsible for third-party platform issues (Amazon, Flipkart, etc.).
          </p>

          <h2 className="text-xl font-semibold text-strong">7. Limitation of Liability</h2>
          <p className="text-muted">
            We are not liable for business losses, delays, or third-party issues.
          </p>

          <h2 className="text-xl font-semibold text-strong">8. Usage Restrictions</h2>
          <ul className="list-disc pl-6 text-muted space-y-2">
            <li>No unauthorized access</li>
            <li>No unlawful usage</li>
            <li>No copying without permission</li>
          </ul>

          <h2 className="text-xl font-semibold text-strong">9. Termination</h2>
          <p className="text-muted">
            Services may be terminated for fraud, violations, or non-payment.
          </p>

          <hr className="border-gray-300 dark:border-white/10" />

          <h2 className="text-2xl font-bold text-strong">Payment & Refund Policy</h2>

          <h3 className="text-lg font-semibold text-strong">1. Payment Terms</h3>
          <p className="text-muted">
            Projects may require advance, milestone, and final payments.
          </p>

          <h3 className="text-lg font-semibold text-strong">2. Pricing</h3>
          <p className="text-muted">
            Prices are estimates unless confirmed officially.
          </p>

          <h3 className="text-lg font-semibold text-strong">3. Refund Policy</h3>
          <p className="text-muted">
            Refunds are generally not applicable once work has started.
          </p>

          <h3 className="text-lg font-semibold text-strong">4. Cancellation</h3>
          <p className="text-muted">
            Cancellation charges may apply after project initiation.
          </p>

          <h3 className="text-lg font-semibold text-strong">5. Delayed Payments</h3>
          <p className="text-muted">
            Work may be paused for incomplete payments.
          </p>

          <h3 className="text-lg font-semibold text-strong">6. Chargebacks</h3>
          <p className="text-muted">
            Fraudulent disputes may lead to legal action.
          </p>

          <h3 className="text-lg font-semibold text-strong">7. Contact</h3>
          <p className="text-muted">
            cybernestxdigital@gmail.com <br />
            +91 93507 75714
          </p>

        </div>
      </div>
    </section>
  );
}