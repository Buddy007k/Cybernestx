/**
 * Extract numeric value from a price string (e.g. "₹10000", "$99", "10000")
 */
export function parseNumericPrice(priceStr) {
  if (!priceStr || typeof priceStr !== "string") return null;
  const cleaned = priceStr.replace(/,/g, "");
  const match = cleaned.match(/[\d.]+/);
  if (!match) return null;
  const num = parseFloat(match[0]);
  return isNaN(num) ? null : num;
}

/**
 * Get currency/prefix from price string
 */
function getPricePrefix(priceStr) {
  const match = priceStr.match(/^([^\d]*)/);
  const prefix = match?.[1]?.trim() || "";
  if (prefix) return prefix.endsWith(" ") ? prefix : `${prefix} `;
  if (priceStr.includes("₹")) return "₹";
  if (priceStr.includes("$")) return "$";
  if (priceStr.includes("€")) return "€";
  return "₹";
}

/**
 * Format discounted price preserving original currency style
 */
export function formatDiscountedPrice(originalPrice, discountPercent) {
  const original = parseNumericPrice(originalPrice);
  if (original === null || !discountPercent || discountPercent <= 0) {
    return null;
  }

  const discounted = original * (1 - discountPercent / 100);
  const prefix = getPricePrefix(originalPrice);
  const formatted = Math.round(discounted).toLocaleString("en-IN");
  return `${prefix}${formatted}`;
}

/**
 * Normalize discount from user object (0 if missing/invalid)
 */
export function getUserDiscount(user) {
  const value = Number(user?.discount);
  if (isNaN(value) || value <= 0) return 0;
  return Math.min(100, value);
}
