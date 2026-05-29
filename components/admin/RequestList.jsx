"use client";

const STATUS_OPTIONS = ["pending", "in-progress", "completed"];

export default function RequestList({ requests = [], onStatusChange }) {
  return (
    <div className="glass rounded-xl border border-[var(--border)] overflow-hidden">
      <div className="px-6 py-4 border-b border-[var(--border)]">
        <h2 className="text-xl font-bold text-strong">Service Requests</h2>
        <p className="text-sm text-muted mt-1">Manage client service requests</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b border-[var(--border)]">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold text-muted">Service</th>
              <th className="px-6 py-3 text-sm font-semibold text-muted">User</th>
              <th className="px-6 py-3 text-sm font-semibold text-muted">Status</th>
              <th className="px-6 py-3 text-sm font-semibold text-muted">Created</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {requests.map((req) => (
              <tr key={req.id} className="hover:bg-black/5 dark:hover:bg-white/5 transition">
                <td className="px-6 py-4 text-strong font-medium">{req.serviceName}</td>
                <td className="px-6 py-4 text-muted text-sm">{req.userEmail}</td>
                <td className="px-6 py-4">
                  <select
                    value={req.status || "pending"}
                    onChange={(e) => onStatusChange(req.id, e.target.value)}
                    className="input text-sm py-2 pr-8 capitalize"
                  >
                    {STATUS_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-6 py-4 text-muted text-sm whitespace-nowrap">
                  {req.createdAt
                    ? new Date(req.createdAt).toLocaleString()
                    : "—"}
                </td>
              </tr>
            ))}
            {requests.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-10 text-center text-muted">
                  No requests yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
