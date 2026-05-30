"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAllServices, addService, updateService, deleteService } from "@/lib/services";
import {
  getAllRequests,
  updateRequestStatus,
  getCollectionCount,
} from "@/lib/requests";
import ServiceForm from "@/components/admin/ServiceForm";
import ServiceList from "@/components/admin/ServiceList";
import AdminStats from "@/components/admin/AdminStats";
import RequestList from "@/components/admin/RequestList";
import UserDiscountManager from "@/components/admin/UserDiscountManager";
import { getAllUsers } from "@/lib/users";
import { useAuth } from "@/context/AuthContext";
import Button from "@/components/ui/button";
import { showSuccess, showError } from "@/lib/toast";
import LoadingBlock from "@/components/ui/loading-block";

export default function AdminDashboard() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const isAuthed = !!user;
  const isAdmin = user?.role === "admin";

  const [services, setServices] = useState([]);
  const [requests, setRequests] = useState([]);
  const [users, setUsers] = useState([]);

  const [stats, setStats] = useState({
    services: 0,
    requests: 0,
    users: 0,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentService, setCurrentService] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);

  const [deletingId, setDeletingId] = useState(null);
  const [updatingStatusId, setUpdatingStatusId] = useState(null);

  const fetchServices = async () => {
    const data = await getAllServices();
    setServices(data);
    return data;
  };

  const fetchRequests = async () => {
    const data = await getAllRequests();
    setRequests(data);
    return data;
  };

  const fetchUsers = async () => {
    const data = await getAllUsers();
    setUsers(data);
    return data;
  };

  const fetchStats = async (servicesList, usersList) => {
    const requestsCount = await getCollectionCount("requests");
    setStats({
      services: servicesList?.length ?? 0,
      requests: requestsCount,
      users: usersList?.length ?? 0,
    });
  };

  const loadDashboard = async () => {
    setFetchLoading(true);
    try {
      const servicesList = await fetchServices();
      await fetchRequests();
      const usersList = await fetchUsers();
      await fetchStats(servicesList, usersList);
    } finally {
      setFetchLoading(false);
    }
  };

  useEffect(() => {
    if (loading) return;

    if (!isAuthed) {
      router.replace("/login");
      return;
    }

    if (!isAdmin) {
      router.replace("/");
      return;
    }

    loadDashboard();
  }, [loading, isAuthed, isAdmin, router]);

  if (loading || !isAuthed || !isAdmin) return null;

  const handleAddClick = () => {
    setCurrentService(null);
    setIsEditing(true);
  };

  const handleEditClick = (service) => {
    setCurrentService(service);
    setIsEditing(true);
  };

  const handleFormSubmit = async (formData) => {
    setIsLoading(true);
    try {
      if (currentService) {
        const res = await updateService(currentService.id, formData);
        if (res?.success === false) throw new Error(res.error || "Update failed");
      } else {
        const res = await addService(formData);
        if (res?.success === false) throw new Error(res.error || "Create failed");
      }

      setIsEditing(false);
      setCurrentService(null);
      await loadDashboard();

      showSuccess(
        currentService
          ? "Service updated successfully"
          : "Service created successfully"
      );
    } catch (error) {
      console.error("Operation failed:", error);
      showError(error.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setDeletingId(id);
    try {
      const res = await deleteService(id);
      if (res?.success === false) throw new Error(res.error || "Delete failed");

      await loadDashboard();
      showSuccess("Service deleted successfully");
    } catch (error) {
      console.error("Delete failed:", error);
      showError(error.message || "Failed to delete service");
    } finally {
      setDeletingId(null);
    }
  };

  const handleStatusChange = async (requestId, status) => {
    setUpdatingStatusId(requestId);
    try {
      const res = await updateRequestStatus(requestId, status);
      if (res?.success === false) {
        showError("Failed to update status");
        return;
      }

      setRequests((prev) =>
        prev.map((r) => (r.id === requestId ? { ...r, status } : r))
      );

      showSuccess("Request status updated");
    } finally {
      setUpdatingStatusId(null);
    }
  };

  return (
    <main className="min-h-screen pt-28 pb-12 px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-strong">
              Admin Dashboard
            </h1>
            <p className="text-muted">
              Manage services and client requests
            </p>
          </div>

          {!isEditing && (
            <Button
              onClick={handleAddClick}
              disabled={fetchLoading || isLoading}
              className="bg-orange-600 text-white hover:bg-orange-700"
            >
              + Add New Service
            </Button>
          )}
        </div>

        {fetchLoading ? (
          <LoadingBlock label="Loading dashboard..." />
        ) : (
          <>
            {isEditing ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-strong">
                    {currentService
                      ? `Edit: ${currentService.title}`
                      : "Create New Service"}
                  </h2>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="text-muted hover:text-strong transition"
                  >
                    ← Back to Dashboard
                  </button>
                </div>

                <ServiceForm
                  initialData={currentService}
                  onSubmit={handleFormSubmit}
                  onCancel={() => setIsEditing(false)}
                  isLoading={isLoading}
                />
              </div>
            ) : (
              <>
                <AdminStats
                  servicesCount={stats.services}
                  requestsCount={stats.requests}
                  usersCount={stats.users}
                />

                {/* ✅ EMPTY STATE FOR REQUESTS */}
                {requests.length === 0 ? (
                  <p className="text-center text-muted py-6">
                    No client requests yet 🚀
                  </p>
                ) : (
                  <RequestList
                    requests={requests}
                    onStatusChange={handleStatusChange}
                    updatingStatusId={updatingStatusId}
                  />
                )}

                <UserDiscountManager
                  users={users}
                  onUpdated={loadDashboard}
                />

                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-strong">
                    Services
                  </h2>

                  <ServiceList
                    services={services}
                    onEdit={handleEditClick}
                    onDelete={handleDelete}
                    deletingId={deletingId}
                  />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </main>
  );
}