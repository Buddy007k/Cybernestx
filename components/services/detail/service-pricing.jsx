"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Spinner from "@/components/ui/spinner";
import { createRequest } from "@/lib/requests";
import { showSuccess, showError } from "@/lib/toast";
import { FaCheck } from "react-icons/fa";

import {
  formatDiscountedPrice,
  getUserDiscount,
  parseNumericPrice,
} from "@/lib/discount";

export default function ServicePricing({
  pricingPlans = [],
  serviceId,          // ✅ NEW
  serviceName,        // ✅ NEW
}) {
  const { theme } = useTheme();
  const { user, loading } = useAuth();
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [submittingPlan, setSubmittingPlan] = useState(null); // track per card

  const discountPercent = getUserDiscount(user);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";
  const plans = pricingPlans.filter((p) => p.name || p.price);

  if (!plans.length) return null;

  const highlightIndex =
    plans.length >= 2 ? Math.floor(plans.length / 2) : -1;

  // 🔥 HANDLE REQUEST
  const handleRequest = async (plan) => {
    if (loading) return;

    if (!user) {
      showError("Please log in to request this service");
      router.push("/login");
      return;
    }

    setSubmittingPlan(plan.name);

    try {
      const finalPrice =
        discountPercent > 0 && parseNumericPrice(plan.price) !== null
          ? formatDiscountedPrice(plan.price, discountPercent)
          : plan.price;

      const res = await createRequest({
        userId: user.uid,
        userEmail: user.email || "",
        serviceId,
        serviceName,

        // ✅ PLAN DATA
        planName: plan.name,
        price: finalPrice,

        status: "pending",
        createdAt: new Date().toISOString(),
      });

      if (res?.success === false) {
        throw new Error(res.error || "Failed to submit request");
      }

      showSuccess(`${plan.name} plan requested successfully!`);
      router.push("/dashboard");

    } catch (err) {
      showError(err.message || "Something went wrong");
    } finally {
      setSubmittingPlan(null);
    }
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {plans.map((plan, i) => {
          const highlight = i === highlightIndex;
          const isSubmitting = submittingPlan === plan.name;

          return (
            <div
              key={`${plan.name}-${i}`}
              className={`relative p-8 rounded-2xl border transition duration-300
              ${
                highlight
                  ? "border-orange-500 shadow-[0_0_40px_rgba(255,115,0,0.2)] scale-105"
                  : isDark
                  ? "bg-black/60 backdrop-blur-lg border-white/10 hover:shadow-xl hover:shadow-indigo-500/10"
                  : "bg-white border-gray-200 shadow-sm hover:shadow-xl hover:bg-gray-50"
              }
              `}
            >
              {highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs px-4 py-1 rounded-full">
                  MOST SELECTED
                </div>
              )}

              <h3 className="text-xl font-semibold text-strong mb-2">
                {plan.name}
              </h3>

              {/* PRICE */}
              <div className="mb-6">
                {discountPercent > 0 && parseNumericPrice(plan.price) !== null ? (
                  <>
                    <p className="text-lg text-muted line-through">{plan.price}</p>
                    <h2 className="text-3xl font-bold text-orange-500">
                      {formatDiscountedPrice(plan.price, discountPercent)}
                    </h2>
                    <p className="text-sm text-green-600 dark:text-green-400 mt-1 font-medium">
                      You saved {discountPercent}%
                    </p>
                  </>
                ) : (
                  <h2 className="text-3xl font-bold text-strong">{plan.price}</h2>
                )}
              </div>

              {/* FEATURES */}
              <div className="space-y-3 mb-8">
                {(plan.features || []).map((f, idx) => (
                  <p key={idx} className="text-muted flex gap-2">
                    <FaCheck className="text-orange-500 text-lg" /> {f}
                  </p>
                ))}
              </div>

              {/* ✅ REAL BUTTON */}
              <button
                onClick={() => handleRequest(plan)}
                disabled={isSubmitting || loading}
                className={`w-full py-3 rounded-lg font-medium transition flex items-center justify-center gap-2
                ${
                  highlight
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : isDark
                    ? "border border-white/10 hover:bg-white/10 text-strong"
                    : "border border-gray-300 hover:bg-gray-100 text-strong"
                }
                `}
              >
                {isSubmitting && (
                  <Spinner
                    size="sm"
                    className="border-white border-t-transparent"
                  />
                )}
                {isSubmitting ? "Processing..." : `Request ${plan.name}`}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}