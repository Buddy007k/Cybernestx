"use client";

import Spinner from "@/components/ui/spinner";

export default function ServiceList({
  services,
  onEdit,
  onDelete,
  deletingId = null,
}) {
  return (
    <div className="glass rounded-xl border border-[var(--border)] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          
          {/* HEADER */}
          <thead className="bg-white/5 backdrop-blur-sm border-b border-[var(--border)]">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-muted">
                Service
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-muted">
                Slug
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-muted text-right">
                Actions
              </th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="divide-y divide-[var(--border)]">
            {services.map((service) => (
              <tr
                key={service.id}
                className="hover:bg-white/5 transition"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-10 h-10 rounded object-cover border border-[var(--border)]"
                    />
                    <span className="font-medium text-strong">
                      {service.title}
                    </span>
                  </div>
                </td>

                <td className="px-6 py-4 text-muted text-sm">
                  {service.slug}
                </td>

                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-3">
                    
                    <button
                      onClick={() => onEdit(service)}
                      disabled={deletingId === service.id}
                      className="text-indigo-500 hover:text-indigo-400 text-sm font-medium disabled:opacity-50"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => {
                        if (confirm("Are you sure you want to delete this service?")) {
                          onDelete(service.id);
                        }
                      }}
                      disabled={deletingId === service.id}
                      className="text-red-500 hover:text-red-400 text-sm font-medium disabled:opacity-50 inline-flex items-center gap-1"
                    >
                      {deletingId === service.id ? (
                        <>
                          <Spinner size="sm" />
                          Deleting...
                        </>
                      ) : (
                        "Delete"
                      )}
                    </button>

                  </div>
                </td>
              </tr>
            ))}

            {services.length === 0 && (
              <tr>
                <td
                  colSpan="3"
                  className="px-6 py-10 text-center text-muted"
                >
                  No services found. Click "Add New Service" to get started.
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
}