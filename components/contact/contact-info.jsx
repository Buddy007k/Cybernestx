"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactInfo() {
  const data = [
    {
      icon: MapPin,
      title: "Office Address",
      value: "Delhi, India",
    },
    {
      icon: Phone,
      title: "Phone Number",
      value: "+91 9876543210",
    },
    {
      icon: Mail,
      title: "Email Address",
      value: "contact@cybernestx.com",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Mon - Fri: 10AM - 7PM",
    },
  ];

  return (
    <section className="-mt-20 px-6 relative z-20">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6">

        {data.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="glass p-6 rounded-xl text-center space-y-3"
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center bg-orange-500/10 text-orange-500 rounded-lg">
                <Icon size={20} />
              </div>

              <h3 className="text-sm font-semibold text-strong">
                {item.title}
              </h3>

              <p className="text-sm text-muted">{item.value}</p>
            </div>
          );
        })}

      </div>
    </section>
  );
}