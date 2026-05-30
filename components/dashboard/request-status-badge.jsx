const STATUS_STYLES = {
  pending:
    "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-yellow-500/30",
  "in-progress":
    "bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-500/30",
  completed:
    "bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30",
};

export default function RequestStatusBadge({ status = "pending" }) {
  const key = STATUS_STYLES[status] ? status : "pending";

  const label =
    key === "in-progress"
      ? "In Progress"
      : key.charAt(0).toUpperCase() + key.slice(1);

  return (
    <span
      className={`inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full border transition-all duration-200 capitalize ${STATUS_STYLES[key]}`}
    >
      {label}
    </span>
  );
}