"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import GoogleSignInButton from "@/components/auth/google-sign-in-button";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login, loginWithGoogle } = useAuth();

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const firebaseUser = await login(form.email, form.password);
      toast.success("Logged in successfully!");

      // Redirect based on role stored in Firestore
      let role = "client";
      try {
        const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
        if (userDoc.exists()) {
          role = userDoc.data()?.role || "client";
        }
      } catch {
        // keep default role
      }

      router.replace(role === "admin" ? "/admin" : "/dashboard");
    } catch (err) {
      toast.error(err.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const { role } = await loginWithGoogle();
      toast.success("Logged in successfully!");
      router.replace(role === "admin" ? "/admin" : "/dashboard");
    } catch (err) {
      toast.error(err.message || "Google sign-in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full absolute top-10 left-1/2 -translate-x-1/2" />
        <div className="w-[400px] h-[400px] bg-sky-400/20 blur-[100px] rounded-full absolute bottom-10 left-10" />
      </div>

      <div className="glass p-8 rounded-2xl w-full max-w-md space-y-6 shadow-xl">
        <h2 className="text-3xl font-bold text-center text-strong">
          Welcome Back
        </h2>

        <p className="text-center text-muted">
          Login to your account
        </p>

        <GoogleSignInButton
          onClick={handleGoogleLogin}
          disabled={loading}
          loading={loading}
        />

        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-[var(--border)]" />
          <span className="text-xs text-muted uppercase">or</span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          className="w-full p-3 border rounded-lg text-strong focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

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

        <Button
          onClick={handleLogin}
          disabled={loading}
          className="w-full"
        >
          {loading ? "Logging in..." : "Login"}
        </Button>

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
