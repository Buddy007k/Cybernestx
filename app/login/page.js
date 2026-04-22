"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        // ✅ FIXED REDIRECT
        if (data.role === "admin") {
          router.replace("/admin");
        } else {
          router.replace("/dashboard");
        }
      } else {
        alert(data.error || "Invalid credentials");
      }
    } catch (err) {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

      {/* 🌈 Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full absolute top-10 left-1/2 -translate-x-1/2" />
        <div className="w-[400px] h-[400px] bg-sky-400/20 blur-[100px] rounded-full absolute bottom-10 left-10" />
      </div>

      {/* 💎 Card */}
      <div className="glass p-8 rounded-2xl w-full max-w-md space-y-6 shadow-xl">

        <h2 className="text-3xl font-bold text-center text-strong">
          Welcome Back
        </h2>

        <p className="text-center text-muted">
          Login to your account
        </p>

        {/* EMAIL */}
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          className="w-full p-3 border rounded-lg text-strong focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          className="w-full p-3 border rounded-lg text-strong focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleLogin();
          }}
        />

        {/* BUTTON */}
        <Button
          onClick={handleLogin}
          disabled={loading}
          className="w-full"
        >
          {loading ? "Logging in..." : "Login"}
        </Button>

        {/* REGISTER LINK */}
        <p className="text-center text-sm text-muted">
          Don’t have an account?{" "}
          <span
            onClick={() => router.push("/register")}
            className="text-indigo-600 cursor-pointer hover:underline font-medium"
          >
            Register
          </span>
        </p>

      </div>
    </div>
  );
}