"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Section from "@/components/ui/section";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import LoadingBlock from "@/components/ui/loading-block";
import RequestStatusBadge from "@/components/dashboard/request-status-badge";
import { useAuth } from "@/context/AuthContext";
import { getRequestsByUserId } from "@/lib/requests";
import { getUserDiscount } from "@/lib/discount";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Dashboard() {
  const router = useRouter();
  const { user, loading, logout } = useAuth();
  const isAuthed = !!user;
  const discount = getUserDiscount(user);

  const [messages, setMessages] = useState([]);
  const [requests, setRequests] = useState([]);
  const [messagesLoading, setMessagesLoading] = useState(true);
  const [requestsLoading, setRequestsLoading] = useState(true);

  useEffect(() => {
    if (!loading && !isAuthed) {
      router.replace("/login");
    }
  }, [loading, isAuthed, router]);

  useEffect(() => {
    if (loading) return;
    if (user?.role === "admin") {
      router.replace("/admin");
    }
  }, [loading, user?.role, router]);

  useEffect(() => {
    if (!user?.uid) return;

    let cancelled = false;

    async function loadMessages() {
      setMessagesLoading(true);
      try {
        const messagesRef = collection(db, "messages");
        const q = query(
          messagesRef,
          where("userId", "==", user.uid),
          orderBy("createdAt", "desc")
        );
        const snap = await getDocs(q);
        const rows = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        if (!cancelled) setMessages(rows);
      } catch {
        if (!cancelled) setMessages([]);
      } finally {
        if (!cancelled) setMessagesLoading(false);
      }
    }

    async function loadRequests() {
      setRequestsLoading(true);
      try {
        const rows = await getRequestsByUserId(user.uid);
        if (!cancelled) setRequests(rows);
      } catch {
        if (!cancelled) setRequests([]);
      } finally {
        if (!cancelled) setRequestsLoading(false);
      }
    }

    loadMessages();
    loadRequests();

    return () => {
      cancelled = true;
    };
  }, [user?.uid]);

  if (!loading && (!isAuthed || user?.role === "admin")) return null;

  return (
    <>
      <Navbar />

      <Section title="Client Dashboard" className="pt-28">
        {loading ? (
          <LoadingBlock label="Loading dashboard..." />
        ) : (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <h3 className="font-bold mb-2 text-strong">Welcome 👋</h3>
                <p className="text-muted">
                  Track your service requests and messages here.
                </p>

                {discount > 0 && (
                  <p className="text-sm text-orange-500 font-medium mt-2">
                    Your account discount: {discount}% off services
                  </p>
                )}

                <div className="mt-4">
                  <Button onClick={logout}>Logout</Button>
                </div>
              </Card>

              <Card>
                <h3 className="font-bold mb-4 text-strong">Your Messages</h3>

                {messagesLoading ? (
                  <LoadingBlock label="Loading messages..." />
                ) : messages.length === 0 ? (
                  <p className="text-center text-muted py-6">
                    No messages yet
                  </p>
                ) : (
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className="p-3 border border-[var(--border)] rounded-lg"
                      >
                        <p className="text-sm text-muted">
                          {msg.createdAt?.seconds
                            ? new Date(
                                msg.createdAt.seconds * 1000
                              ).toLocaleString()
                            : ""}
                        </p>
                        <p className="text-strong">{msg.message}</p>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            </div>

            <Card>
              <h3 className="font-bold mb-4 text-strong">
                Your Service Requests
              </h3>

              {requestsLoading ? (
                <LoadingBlock label="Loading requests..." />
              ) : requests.length === 0 ? (
                <p className="text-center text-muted py-6">
                  No service requests yet 🚀
                </p>
              ) : (
                <div className="space-y-4">
                  {requests.map((req) => (
                    <div
                      key={req.id}
                      className="p-4 border border-[var(--border)] rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:shadow-md transition"
                    >
                      <div>
                        <p className="font-semibold text-strong">
                          {req.serviceName}
                        </p>
                        <p className="text-sm text-muted mt-1">
                          {req.createdAt?.seconds
                            ? new Date(
                                req.createdAt.seconds * 1000
                              ).toLocaleString()
                            : ""}
                        </p>
                      </div>

                      <RequestStatusBadge status={req.status} />
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </div>
        )}
      </Section>
    </>
  );
}