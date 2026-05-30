export default function Spinner({ size = "md", className = "" }) {
  const sizes = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-2",
    lg: "h-12 w-12 border-t-2 border-b-2",
  };

  return (
    <span
      className={`inline-block animate-spin rounded-full border-orange-500 border-t-transparent ${sizes[size]} ${className}`}
      aria-hidden="true"
    />
  );
}
