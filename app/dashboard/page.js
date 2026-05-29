"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Section from "@/components/ui/section";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Dashboard() {
  const router = useRouter();
  const { user, loading, logout } = useAuth();
  const isAuthed = !!user;
  const [messages, setMessages] = useState([]);
  const [messagesLoading, setMessagesLoading] = useState(true);

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

    async function load() {
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
      } catch (e) {
        if (!cancelled) setMessages([]);
      } finally {
        if (!cancelled) setMessagesLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [user?.uid]);

  // Avoid flicker while auth state resolves / redirects happen
  if (loading || !isAuthed || user?.role === "admin") return null;

  return (
    <>
      <Navbar />

      <Section title="Client Dashboard" className="pt-28">
        <div className="grid md:grid-cols-2 gap-6">

          {/* USER INFO */}
          <Card>
            <h3 className="font-bold mb-2">Welcome 👋</h3>
            <p className="text-muted">
              You can view your submitted messages below.
            </p>

            <div className="mt-4">
              <Button onClick={logout}>Logout</Button>
            </div>
          </Card>

          {/* USER MESSAGES */}
          <Card>
            <h3 className="font-bold mb-4">Your Messages</h3>

            {messagesLoading ? (
              <p className="text-muted">Loading...</p>
            ) : messages.length === 0 ? (
              <p className="text-muted">No messages yet</p>
            ) : (
              <div className="space-y-3">
                {messages.map((msg) => (
                  <div key={msg.id} className="p-3 border rounded-lg">
                    <p className="text-sm text-muted">
                      {msg.createdAt ? new Date(msg.createdAt).toLocaleString() : ""}
                    </p>
                    <p className="text-strong">{msg.message}</p>
                  </div>
                ))}
              </div>
            )}
          </Card>

        </div>
      </Section>
    </>
  );
}