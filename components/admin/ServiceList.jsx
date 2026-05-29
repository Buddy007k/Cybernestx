"use client";

export default function ServiceList({ services, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Service</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Slug</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {services.map((service) => (
              <tr key={service.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-10 h-10 rounded object-cover border"
                    />
                    <span className="font-medium text-gray-800">{service.title}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-500 text-sm">
                  {service.slug}
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => onEdit(service)}
                      className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        if (confirm("Are you sure you want to delete this service?")) {
                          onDelete(service.id);
                        }
                      }}
                      className="text-red-600 hover:text-red-900 text-sm font-medium"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {services.length === 0 && (
              <tr>
                <td colSpan="3" className="px-6 py-10 text-center text-gray-500">
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
