import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  orderBy,
  query,
} from "firebase/firestore";

/**
 * Create a service request in Firestore
 */
export async function createRequest({ userId, userEmail, serviceId, serviceName }) {
  try {
    const requestsRef = collection(db, "requests");
    const docRef = await addDoc(requestsRef, {
      userId,
      userEmail,
      serviceId,
      serviceName,
      status: "pending",
      createdAt: new Date().toISOString(),
    });
    return { id: docRef.id, success: true };
  } catch (error) {
    console.error("Error creating request:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Fetch all requests (newest first)
 */
export async function getAllRequests() {
  try {
    const requestsRef = collection(db, "requests");
    const q = query(requestsRef, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  } catch (error) {
    console.error("Error fetching requests:", error);
    return [];
  }
}

/**
 * Update request status
 */
export async function updateRequestStatus(id, status) {
  try {
    const requestRef = doc(db, "requests", id);
    await updateDoc(requestRef, { status });
    return { success: true };
  } catch (error) {
    console.error("Error updating request status:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Count documents in a collection
 */
export async function getCollectionCount(collectionName) {
  try {
    const snapshot = await getDocs(collection(db, collectionName));
    return snapshot.size;
  } catch (error) {
    console.error(`Error counting ${collectionName}:`, error);
    return 0;
  }
}
