"use client";

import Card from "@/components/ui/card";

export default function AdminStats({ servicesCount = 0, requestsCount = 0, usersCount = 0 }) {
  const stats = [
    { label: "Total Services", value: servicesCount },
    { label: "Total Requests", value: requestsCount },
    { label: "Total Users", value: usersCount },
  ];

  return (
    <div className="grid sm:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <Card key={stat.label}>
          <p className="text-sm text-muted">{stat.label}</p>
          <p className="text-3xl font-bold text-strong mt-2">{stat.value}</p>
        </Card>
      ))}
    </div>
  );
}
