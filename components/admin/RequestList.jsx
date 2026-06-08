"use client";

import Spinner from "@/components/ui/spinner";

const STATUS_OPTIONS = ["pending", "in-progress", "completed", "cancelled"];

export default function RequestList({
  requests = [],
  onStatusChange,
  updatingStatusId = null,
}) {
  return (
    <div className="glass rounded-xl border border-[var(--border)] overflow-hidden">
      {/* HEADER */}
      <div className="px-6 py-4 border-b border-[var(--border)]">
        <h2 className="text-xl font-bold text-strong">Service Requests</h2>
        <p className="text-sm text-muted mt-1">
          Manage client service requests
        </p>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b border-[var(--border)]">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold text-muted">
                Service
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-muted">
                User
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-muted">
                Status
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-muted">
                Created
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[var(--border)]">
            {requests.map((req) => (
              <tr
                key={req.id}
                className="hover:bg-black/5 dark:hover:bg-white/5 transition"
              >
                {/* SERVICE */}
                <td className="px-6 py-4 text-strong font-medium">
                  {req.serviceName}
                </td>

                {/* USER */}
                <td className="px-6 py-4 text-muted text-sm">
                  {req.userEmail}
                </td>

                {/* STATUS */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    
                    {/* SELECT WRAPPER */}
                    <div className="relative">
                      <select
                        value={req.status || "pending"}
                        onChange={(e) =>
                          onStatusChange(req.id, e.target.value)
                        }
                        disabled={updatingStatusId === req.id}
                        className="
                          appearance-none
                          bg-[var(--card)]
                          text-strong
                          border border-[var(--border)]
                          rounded-lg
                          px-3 py-2
                          pr-8
                          text-sm
                          capitalize
                          focus:outline-none
                          focus:ring-2 focus:ring-indigo-500
                          disabled:opacity-60
                        "
                      >
                        {STATUS_OPTIONS.map((s) => (
                          <option
                            key={s}
                            value={s}
                            className="bg-white text-black dark:bg-black dark:text-white"
                          >
                            {s}
                          </option>
                        ))}
                      </select>

                      {/* Custom Arrow */}
                      <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted">
                        ▼
                      </span>
                    </div>

                    {/* LOADING */}
                    {updatingStatusId === req.id && (
                      <Spinner size="sm" />
                    )}
                  </div>
                </td>

                {/* CREATED */}
                <td className="px-6 py-4 text-muted text-sm whitespace-nowrap">
                  {req.createdAt
                    ? new Date(req.createdAt).toLocaleString()
                    : "—"}
                </td>
              </tr>
            ))}

            {/* EMPTY STATE */}
            {requests.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-10 text-center text-muted"
                >
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