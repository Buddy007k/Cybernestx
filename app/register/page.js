"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async () => {
    setLoading(true);

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Account created!");
      router.push("/login");
    } else {
      alert(data.error || "Error");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

      {/* 🌈 Background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-[500px] h-[500px] bg-sky-400/20 blur-[120px] rounded-full absolute bottom-10 left-1/2 -translate-x-1/2" />
      </div>

      <div className="glass p-8 rounded-2xl w-full max-w-md space-y-6">

        <h2 className="text-3xl font-bold text-center text-strong">
          Create Account
        </h2>

        <input
          placeholder="Name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="w-full p-3 border rounded-lg text-strong"
        />

        <input
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          className="w-full p-3 border rounded-lg text-strong"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          className="w-full p-3 border rounded-lg text-strong"
        />

        <Button onClick={handleRegister} disabled={loading} className="w-full">
          {loading ? "Creating..." : "Register"}
        </Button>

        <p className="text-center text-sm text-muted">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-indigo-600 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}