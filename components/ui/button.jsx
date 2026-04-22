"use client";

import { useRouter } from "next/navigation";

export default function Button({
  children,
  variant = "primary",
  className = "",
  href,
  onClick,
  type = "button",
  disabled = false,
}) {
  const router = useRouter();

  const base =
    "px-6 py-3 rounded-xl font-medium transition duration-200 cursor-pointer active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white shadow-md hover:shadow-lg",
    secondary:
      "glass text-strong hover:shadow-md",
    outline:
      "border border-gray-300 dark:border-white/20 text-strong hover:bg-gray-100 dark:hover:bg-white/10",
  };

  const handleClick = (e) => {
    if (disabled) return;

    if (onClick) onClick(e);

    if (href) {
      router.push(href);
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${base} ${variants[variant]} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}