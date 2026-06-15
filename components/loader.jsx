"use client";

import { useEffect, useState } from "react";

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("seenLoader");

    // ✅ Skip loader if already visited
    if (seen) {
      setLoading(false);
      return;
    }

    sessionStorage.setItem("seenLoader", "true");

    // ✅ Match video duration (3s)
    const timer = setTimeout(() => {
      setFadeOut(true); // start fade
      setTimeout(() => setLoading(false), 500); // remove after fade
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* 🎬 VIDEO BACKGROUND */}
        <video
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/loader.mp4" type="video/mp4" />
        </video>

        {/* 🔥 Optional overlay for contrast */}
        <div className="absolute inset-0 bg-black/30" />
      </div>
    );
  }

  return children;
}