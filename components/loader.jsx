"use client";
import { useEffect, useState } from "react";

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black text-white text-2xl z-50">
        CyberNestX
      </div>
    );
  }

  return children;
}