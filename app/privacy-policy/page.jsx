"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function PrivacyPolicy() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-10">

        <h1 className="text-4xl font-bold text-strong text-center">
          Privacy Policy
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

          <h2 className="text-xl font-semibold text-strong">1. Introduction</h2>
          <p className="text-muted">
            CyberNestX (“Company”, “we”, “our”, or “us”) values user privacy and is committed to protecting personal information collected through our website and services.
          </p>

          <h2 className="text-xl font-semibold text-strong">2. Information We Collect</h2>
          <ul className="list-disc pl-6 text-muted space-y-2">
            <li>Name, Email, Phone number</li>
            <li>Business/company details</li>
            <li>Service inquiry details</li>
            <li>IP address, browser type, device info</li>
            <li>Analytics, cookies, session data</li>
          </ul>

          <h2 className="text-xl font-semibold text-strong">3. How We Use Information</h2>
          <ul className="list-disc pl-6 text-muted space-y-2">
            <li>Provide requested services</li>
            <li>Respond to inquiries</li>
            <li>Improve website experience</li>
            <li>Communicate updates</li>
            <li>Ensure security and compliance</li>
          </ul>

          <h2 className="text-xl font-semibold text-strong">4. Data Sharing Policy</h2>
          <p className="text-muted">
            We do not sell user data. Information is shared only with authorized service providers, legal authorities when required, or to prevent fraud/security issues.
          </p>

          <h2 className="text-xl font-semibold text-strong">5. Data Security</h2>
          <p className="text-muted">
            We implement safeguards including HTTPS encryption and secure hosting to protect user data.
          </p>

          <h2 className="text-xl font-semibold text-strong">6. Cookies Policy</h2>
          <p className="text-muted">
            Cookies may be used for analytics and functionality. Users can disable them in browser settings.
          </p>

          <h2 className="text-xl font-semibold text-strong">7. Data Retention</h2>
          <p className="text-muted">
            Data is retained only as long as necessary for services, legal obligations, and security.
          </p>

          <h2 className="text-xl font-semibold text-strong">8. User Rights</h2>
          <p className="text-muted">
            Users may request access, correction, deletion, or withdrawal of consent by contacting us.
          </p>

          <h2 className="text-xl font-semibold text-strong">9. Third-Party Services</h2>
          <p className="text-muted">
            We may integrate with platforms like Amazon, Flipkart, Meesho, etc. We are not responsible for their policies.
          </p>

          <h2 className="text-xl font-semibold text-strong">10. Contact Information</h2>
          <p className="text-muted">
            CyberNestX <br />
            Email: cybernestxdigital@gmail.com <br />
            Phone: +91 93507 75714 <br />
            Location: Haryana, India
          </p>

        </div>
      </div>
    </section>
  );
}