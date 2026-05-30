"use client";

import { useState } from "react";
import { updateUserDiscount } from "@/lib/users";
import { showSuccess, showError } from "@/lib/toast";

export default function UserDiscountManager({ users = [], onUpdated }) {
  const [drafts, setDrafts] = useState({});
  const [savingId, setSavingId] = useState(null);

  const clients = users.filter((u) => u.role !== "admin");

  const getDraft = (user) =>
    drafts[user.id] !== undefined ? drafts[user.id] : user.discount ?? 0;

  const handleSave = async (userId) => {
    setSavingId(userId);
    const user = clients.find((u) => u.id === userId);
    const discount = drafts[userId] !== undefined ? drafts[userId] : user?.discount ?? 0;
    const res = await updateUserDiscount(userId, discount);
    setSavingId(null);
    if (res?.success === false) {
      showError("Failed to update discount");
      return;
    }
    showSuccess("Discount updated successfully");
    onUpdated?.();
  };

  return (
    <div className="glass rounded-xl border border-[var(--border)] overflow-hidden">
      <div className="px-6 py-4 border-b border-[var(--border)]">
        <h2 className="text-xl font-bold text-strong">User Discounts</h2>
        <p className="text-sm text-muted mt-1">Set discount % per client (applied on service pricing)</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b border-[var(--border)]">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold text-muted">User</th>
              <th className="px-6 py-3 text-sm font-semibold text-muted">Email</th>
              <th className="px-6 py-3 text-sm font-semibold text-muted">Discount %</th>
              <th className="px-6 py-3 text-sm font-semibold text-muted text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {clients.map((user) => (
              <tr key={user.id} className="hover:bg-black/5 dark:hover:bg-white/5">
                <td className="px-6 py-4 text-strong font-medium">
                  {user.name || "—"}
                </td>
                <td className="px-6 py-4 text-muted text-sm">{user.email}</td>
                <td className="px-6 py-4">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={getDraft(user)}
                    onChange={(e) =>
                      setDrafts((prev) => ({
                        ...prev,
                        [user.id]: e.target.value,
                      }))
                    }
                    className="input w-24 text-sm py-2"
                  />
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    type="button"
                    onClick={() => handleSave(user.id)}
                    disabled={savingId === user.id}
                    className="text-sm text-orange-500 hover:underline font-medium disabled:opacity-50"
                  >
                    {savingId === user.id ? "Saving..." : "Save"}
                  </button>
                </td>
              </tr>
            ))}
            {clients.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-10 text-center text-muted">
                  No client users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
