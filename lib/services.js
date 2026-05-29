import { db } from "./firebase";
import { 
  collection, 
  getDocs, 
  query, 
  where, 
  limit, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc 
} from "firebase/firestore";

/**
 * Fetches all services from Firestore
 */
export async function getAllServices() {
  try {
    const servicesRef = collection(db, "services");
    const snapshot = await getDocs(servicesRef);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error fetching all services:", error);
    return [];
  }
}

/**
 * Fetches a single service by its slug
 * @param {string} slug 
 */
export async function getServiceBySlug(slug) {
  try {
    const servicesRef = collection(db, "services");
    const q = query(servicesRef, where("slug", "==", slug), limit(1));
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) return null;
    
    return {
      id: snapshot.docs[0].id,
      ...snapshot.docs[0].data()
    };
  } catch (error) {
    console.error(`Error fetching service with slug ${slug}:`, error);
    return null;
  }
}

/**
 * Adds a new service to Firestore
 * @param {Object} serviceData 
 */
export async function addService(serviceData) {
  try {
    const servicesRef = collection(db, "services");
    const docRef = await addDoc(servicesRef, {
      ...serviceData,
      createdAt: new Date().toISOString(),
    });
    return { id: docRef.id, success: true };
  } catch (error) {
    console.error("Error adding service:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Updates an existing service in Firestore
 * @param {string} id 
 * @param {Object} serviceData 
 */
export async function updateService(id, serviceData) {
  try {
    const serviceRef = doc(db, "services", id);
    await updateDoc(serviceRef, {
      ...serviceData,
      updatedAt: new Date().toISOString(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating service:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Deletes a service from Firestore
 * @param {string} id 
 */
export async function deleteService(id) {
  try {
    const serviceRef = doc(db, "services", id);
    await deleteDoc(serviceRef);
    return { success: true };
  } catch (error) {
    console.error("Error deleting service:", error);
    return { success: false, error: error.message };
  }
}
