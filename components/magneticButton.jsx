"use client";
import { useRef } from "react";

export default function MagneticButton({ children }) {
  const ref = useRef();

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const reset = () => {
    ref.current.style.transform = `translate(0px,0px)`;
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className="bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition"
    >
      {children}
    </button>
  );
}