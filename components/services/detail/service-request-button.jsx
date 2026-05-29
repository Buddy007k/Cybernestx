"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { createRequest } from "@/lib/requests";
import toast from "react-hot-toast";

export default function ServiceRequestButton({ serviceId, serviceName }) {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [submitting, setSubmitting] = useState(false);

  const handleRequest = async () => {
    if (loading) return;

    if (!user) {
      toast.error("Please log in to request this service");
      router.push("/login");
      return;
    }

    setSubmitting(true);
    try {
      const res = await createRequest({
        userId: user.uid,
        userEmail: user.email || "",
        serviceId,
        serviceName,
      });

      if (res?.success === false) {
        throw new Error(res.error || "Failed to submit request");
      }

      toast.success("Service request submitted!");
      router.push("/dashboard");
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center pt-4">
      <Button
        onClick={handleRequest}
        disabled={submitting || loading}
        className="bg-orange-600 text-white hover:bg-orange-700 transition"
      >
        {submitting ? "Submitting..." : "Request Service"}
      </Button>
    </div>
  );
}
