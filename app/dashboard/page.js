"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Section from "@/components/ui/section";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";

export default function Dashboard() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("/api/user/messages")
      .then((res) => res.json())
      .then(setMessages);
  }, []);

  return (
    <>
      <Navbar />

      <Section title="Client Dashboard">
        <div className="grid md:grid-cols-2 gap-6">

          {/* USER INFO */}
          <Card>
            <h3 className="font-bold mb-2">Welcome 👋</h3>
            <p className="text-muted">
              You can view your submitted messages below.
            </p>

            <form action="/api/auth/logout" method="POST" className="mt-4">
              <Button type="submit">Logout</Button>
            </form>
          </Card>

          {/* USER MESSAGES */}
          <Card>
            <h3 className="font-bold mb-4">Your Messages</h3>

            {messages.length === 0 ? (
              <p className="text-muted">No messages yet</p>
            ) : (
              <div className="space-y-3">
                {messages.map((msg) => (
                  <div
                    key={msg._id}
                    className="p-3 border rounded-lg"
                  >
                    <p className="text-sm text-muted">
                      {new Date(msg.createdAt).toLocaleString()}
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