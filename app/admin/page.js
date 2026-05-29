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
import { useAuth } from "@/context/AuthContext";
import Button from "@/components/ui/button";

export default function AdminDashboard() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const isAuthed = !!user;
  const isAdmin = user?.role === "admin";
  const [services, setServices] = useState([]);
  const [requests, setRequests] = useState([]);
  const [stats, setStats] = useState({
    services: 0,
    requests: 0,
    users: 0,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);

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

  const fetchStats = async (servicesList) => {
    const [requestsCount, usersCount] = await Promise.all([
      getCollectionCount("requests"),
      getCollectionCount("users"),
    ]);
    setStats({
      services: servicesList?.length ?? 0,
      requests: requestsCount,
      users: usersCount,
    });
  };

  const loadDashboard = async () => {
    setFetchLoading(true);
    try {
      const servicesList = await fetchServices();
      await fetchRequests();
      await fetchStats(servicesList);
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
    } catch (error) {
      console.error("Operation failed:", error);
      alert("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await deleteService(id);
      if (res?.success === false) throw new Error(res.error || "Delete failed");
      await loadDashboard();
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete service");
    }
  };

  const handleStatusChange = async (requestId, status) => {
    const res = await updateRequestStatus(requestId, status);
    if (res?.success === false) {
      alert("Failed to update status");
      return;
    }
    setRequests((prev) =>
      prev.map((r) => (r.id === requestId ? { ...r, status } : r))
    );
  };

  return (
    <main className="min-h-screen pt-28 pb-12 px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-strong">Admin Dashboard</h1>
            <p className="text-muted">Manage services and client requests</p>
          </div>
          {!isEditing && (
            <Button onClick={handleAddClick} className="bg-orange-600 text-white hover:bg-orange-700">
              + Add New Service
            </Button>
          )}
        </div>

        {fetchLoading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500" />
          </div>
        ) : (
          <>
            {isEditing ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-strong">
                    {currentService ? `Edit: ${currentService.title}` : "Create New Service"}
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

                <RequestList requests={requests} onStatusChange={handleStatusChange} />

                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-strong">Services</h2>
                  <ServiceList
                    services={services}
                    onEdit={handleEditClick}
                    onDelete={handleDelete}
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
