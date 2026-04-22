"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Section from "@/components/ui/section";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";

export default function Admin() {
  const [messages, setMessages] = useState([]);
  const [auth, setAuth] = useState("");
  const [authorized, setAuthorized] = useState(false);

  // 🔐 Simple password check
  const handleLogin = () => {
    if (auth === "admin123") {
      setAuthorized(true);
      fetchMessages();
    } else {
      alert("Wrong password");
    }
  };

  const fetchMessages = async () => {
    const res = await fetch("/api/admin/messages");
    const data = await res.json();
    setMessages(data);
  };

  const deleteMessage = async (id) => {
    await fetch(`/api/admin/messages/${id}`, {
      method: "DELETE",
    });
    fetchMessages();
  };

  if (!authorized) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold text-strong">
            Admin Login
          </h2>
          <input
            type="password"
            placeholder="Enter password"
            className="border p-2 rounded"
            onChange={(e) => setAuth(e.target.value)}
          />
          <br />
          <Button onClick={handleLogin}>Login</Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <Section title="Admin Dashboard">
        <div className="grid gap-4">
          {messages.map((msg) => (
            <Card key={msg._id}>
              <p><strong>Name:</strong> {msg.name}</p>
              <p><strong>Email:</strong> {msg.email}</p>
              <p><strong>Message:</strong> {msg.message}</p>

              <Button
                className="mt-4"
                variant="outline"
                onClick={() => deleteMessage(msg._id)}
              >
                Delete
              </Button>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}