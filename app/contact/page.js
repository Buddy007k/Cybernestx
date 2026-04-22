"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Section from "@/components/ui/section";
import Button from "@/components/ui/button";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setMsg("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setMsg("Something went wrong");
      }
    } catch {
      setMsg("Error sending message");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <Section title="Contact Us">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-4"
        >
          <input
            placeholder="Your Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full p-3 border rounded-lg text-strong"
          />

          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full p-3 border rounded-lg text-strong"
          />

          <textarea
            placeholder="Message"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="w-full p-3 border rounded-lg text-strong"
          />

          <Button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>

          {msg && (
            <p className="text-center text-sm text-muted">
              {msg}
            </p>
          )}
        </form>
      </Section>

      <Footer />
    </>
  );
}