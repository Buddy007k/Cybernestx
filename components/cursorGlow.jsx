"use client";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed w-40 h-40 bg-purple-500/20 blur-3xl rounded-full z-50"
      style={{
        left: pos.x - 80,
        top: pos.y - 80,
      }}
    />
  );
}