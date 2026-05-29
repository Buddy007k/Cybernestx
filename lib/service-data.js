/**
 * Normalize features from Firestore (supports legacy string[] and new { title, description }[]).
 */
export function normalizeFeatures(features) {
  if (!features || !Array.isArray(features)) return [];

  return features
    .map((f) => {
      if (typeof f === "string") {
        const title = f.trim();
        return title ? { title, description: "" } : null;
      }
      if (f && typeof f === "object") {
        const title = (f.title || "").trim();
        const description = (f.description || "").trim();
        return title ? { title, description } : null;
      }
      return null;
    })
    .filter(Boolean);
}

/**
 * Normalize pricing plans (supports legacy object map and new array format).
 */
export function normalizePricingPlans(pricingPlans) {
  if (!pricingPlans) return [];

  if (Array.isArray(pricingPlans)) {
    return pricingPlans
      .map((p) => ({
        name: (p?.name || "").trim(),
        price: (p?.price || "").trim(),
        features: Array.isArray(p?.features)
          ? p.features.map((x) => String(x).trim()).filter(Boolean)
          : [],
      }))
      .filter((p) => p.name || p.price);
  }

  if (typeof pricingPlans === "object") {
    return Object.entries(pricingPlans).map(([key, plan]) => ({
      name: (plan?.name || key.charAt(0).toUpperCase() + key.slice(1)).trim(),
      price: (plan?.price || "").trim(),
      features: Array.isArray(plan?.features)
        ? plan.features.map((x) => String(x).trim()).filter(Boolean)
        : [],
    }));
  }

  return [];
}

export const emptyFeature = () => ({ title: "", description: "" });
export const emptyPricingPlan = () => ({ name: "", price: "", features: [""] });

export function featuresToFormState(features) {
  const normalized = normalizeFeatures(features);
  return normalized.length ? normalized : [emptyFeature()];
}

export function pricingPlansToFormState(pricingPlans) {
  const normalized = normalizePricingPlans(pricingPlans);
  if (!normalized.length) return [emptyPricingPlan()];

  return normalized.map((p) => ({
    ...p,
    features: p.features.length ? p.features : [""],
  }));
}

export function sanitizeFeaturesForSave(features) {
  return normalizeFeatures(features);
}

export function sanitizePricingPlansForSave(plans) {
  if (!Array.isArray(plans)) return [];

  return plans
    .map((p) => ({
      name: (p.name || "").trim(),
      price: (p.price || "").trim(),
      features: Array.isArray(p.features)
        ? p.features.map((x) => String(x).trim()).filter(Boolean)
        : [],
    }))
    .filter((p) => p.name || p.price);
}
