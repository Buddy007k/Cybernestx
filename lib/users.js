import { db } from "./firebase";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

/**
 * Fetch all users from Firestore
 */
export async function getAllUsers() {
  try {
    const snapshot = await getDocs(collection(db, "users"));
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

/**
 * Update user discount percentage (0–100)
 */
export async function updateUserDiscount(userId, discount) {
  try {
    const value = Math.min(100, Math.max(0, Number(discount) || 0));
    await updateDoc(doc(db, "users", userId), { discount: value });
    return { success: true };
  } catch (error) {
    console.error("Error updating user discount:", error);
    return { success: false, error: error.message };
  }
}
