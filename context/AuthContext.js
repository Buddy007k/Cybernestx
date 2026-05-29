"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile
} from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const AuthContext = createContext({
  user: null,
  loading: true,
  login: async () => {},
  signup: async () => {},
  loginWithGoogle: async () => {},
  logout: async () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          // Fetch additional user data from Firestore
          const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
          let userData;

          if (userDoc.exists()) {
            userData = { 
              uid: firebaseUser.uid, 
              email: firebaseUser.email,
              ...userDoc.data() 
            };
          } else {
            // Fallback for users who might exist in Auth but not in Firestore
            userData = { 
              uid: firebaseUser.uid, 
              email: firebaseUser.email, 
              role: "client" 
            };
          }
          
          setUser(userData);
        } catch (error) {
          console.error("Error fetching user data:", error);
          setUser({ uid: firebaseUser.uid, email: firebaseUser.email, role: "client" });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  };

  const signup = async (name, email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const firebaseUser = userCredential.user;

    // Update Firebase Auth profile
    await updateProfile(firebaseUser, { displayName: name });

    // Create user document in Firestore
    const userData = {
      uid: firebaseUser.uid,
      name,
      email,
      role: "client", // Default role
      createdAt: new Date().toISOString(),
    };

    await setDoc(doc(db, "users", firebaseUser.uid), userData);
    
    // syncSession is handled by onAuthStateChanged listener
    return firebaseUser;
  };

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    const firebaseUser = userCredential.user;

    const userRef = doc(db, "users", firebaseUser.uid);
    const userDoc = await getDoc(userRef);

    let role = "client";

    if (!userDoc.exists()) {
      const userData = {
        uid: firebaseUser.uid,
        name: firebaseUser.displayName || "",
        email: firebaseUser.email,
        role: "client",
        createdAt: new Date().toISOString(),
      };
      await setDoc(userRef, userData);
    } else {
      role = userDoc.data()?.role || "client";
    }

    return { user: firebaseUser, role };
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
