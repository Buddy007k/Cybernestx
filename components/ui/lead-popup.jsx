"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import toast from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";

export default function LeadPopup() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);

    const seen = sessionStorage.getItem("lead-popup-seen");

    if (!seen) {
      setTimeout(() => setOpen(true), 1500);
      sessionStorage.setItem("lead-popup-seen", "true");
    }
  }, []);

  if (!mounted || !open) return null;

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

    const toastId = toast.loading("Sending request...");

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
        toast.success("Request sent successfully 🚀", { id: toastId });

        setForm({
          firstName: "",
          lastName: "",
          email: "",
          service: "",
          message: "",
        });

        // 🔥 Close popup after slight delay (feels smoother)
        setTimeout(() => setOpen(false), 800);
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
    <>
      {/* BACKDROP */}
      <div
        className={`fixed inset-0 z-[9998] ${
          isDark ? "bg-black/60" : "bg-black/40"
        } backdrop-blur-sm`}
        onClick={() => setOpen(false)}
      />

      {/* MODAL */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
        <div
          className={`w-full max-w-lg rounded-2xl p-8 space-y-5 relative
          ${
            isDark
              ? "bg-black/80 border border-white/10 backdrop-blur-xl"
              : "bg-white border border-gray-200 shadow-xl"
          }`}
        >
          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-xl opacity-70 hover:opacity-100"
          >
            ✕
          </button>

          {/* HEADING */}
          <h2 className="text-2xl font-bold text-strong">
            Let's Grow Your Business 🚀
          </h2>

          <p className="text-sm text-muted">
            Tell us what you need — we’ll get back within 24 hours.
          </p>

          {/* FORM */}
          <div className="space-y-4">

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

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="input w-full"
              placeholder="Email *"
            />

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
              {services.map((s, i) => (
                <option key={i} value={s}>
                  {s}
                </option>
              ))}
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="input w-full h-28"
              placeholder="Message *"
            />

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit Request"}
            </button>

          </div>
        </div>
      </div>
    </>
  );
}