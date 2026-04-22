export default function Card({ children, className = "" }) {
  return (
    <div
      className={`glass p-6 rounded-xl transition hover:shadow-xl hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}