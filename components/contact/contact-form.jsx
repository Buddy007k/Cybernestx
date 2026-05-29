"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";

export default function ContactForm() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { user } = useAuth();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  const services = [
    "Website Development",
    "SEO Optimization",
    "Digital Marketing",
    "UI/UX Design",
    "E-commerce Solutions",
  ];

  // 🔥 HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 VALIDATION
  const validateForm = () => {
    if (!form.firstName || !form.email || !form.service || !form.message) {
      toast.error("Please fill all required fields");
      return false;
    }
    return true;
  };

  // 🔥 SUBMIT
  const handleSubmit = async () => {
    if (!validateForm()) return;

    const toastId = toast.loading("Sending message...");

    try {
      setLoading(true);

      await addDoc(collection(db, "messages"), {
        name: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        message: form.message,
        userId: user?.uid || null,
        createdAt: new Date().toISOString(),
      });

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully 🚀", { id: toastId });

        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        toast.error(data.error || "Something went wrong", {
          id: toastId,
        });
      }
    } catch (err) {
      toast.error("Server error. Try again.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* FORM */}
        <div className="glass p-8 rounded-2xl space-y-6">

          <h2 className="text-2xl font-bold text-strong">
            Send us a message
          </h2>

          {/* NAME */}
          <div className="grid grid-cols-2 gap-4">
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="input"
              placeholder="First Name *"
            />
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="input"
              placeholder="Last Name"
            />
          </div>

          {/* CONTACT */}
          <div className="grid grid-cols-2 gap-4">
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="input"
              placeholder="Email *"
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="input"
              placeholder="Phone"
            />
          </div>

          {/* SERVICE */}
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border outline-none transition
            ${
              isDark
                ? "bg-black/60 text-white border-white/10 focus:border-orange-500"
                : "bg-white text-gray-900 border-gray-200 focus:border-orange-500"
            }`}
          >
            <option value="">Select Service *</option>
            {services.map((service, i) => (
              <option key={i} value={service}>
                {service}
              </option>
            ))}
          </select>

          {/* MESSAGE */}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="input w-full h-32"
            placeholder="Message *"
          />

          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>

        {/* IMAGE SIDE */}
        <div className="relative hidden lg:block">
          <img
            src="/assets/contact_img.jpeg"
            className="rounded-2xl w-full h-[500px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-tr from-black/70 to-transparent rounded-2xl" />

          <div className="absolute bottom-6 left-6 glass p-4 rounded-xl max-w-xs">
            <p className="text-sm text-muted">
              "We respond within 24 hours. Your growth is our priority."
            </p>
            <span className="text-xs text-orange-500 mt-2 block">
              CyberNestX Team
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}