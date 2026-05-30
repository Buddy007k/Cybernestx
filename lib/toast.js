import toast from "react-hot-toast";

/** Consistent success notification (green) */
export function showSuccess(message) {
  return toast.success(message);
}

/** Consistent error notification (red) */
export function showError(message) {
  return toast.error(message);
}
