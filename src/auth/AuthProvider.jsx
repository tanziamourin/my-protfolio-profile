import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config"; // Must export getAuth(app) from here

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  // Watch Firebase auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Fetch user role from backend using email
useEffect(() => {
  const fetchRole = async () => {
    if (!user?.email) return;

    try {
      const res = await fetch(`http://localhost:5000/api/users/${user.email}`);
      if (res.ok && res.headers.get("content-type")?.includes("application/json")) {
        const data = await res.json();
        const userRole = data.role || "user";
        setRole(userRole);
        localStorage.setItem("role", userRole); // ✅ Store in localStorage
      } else {
        console.error("Unexpected response:", await res.text());
        setRole("user");
        localStorage.setItem("role", "user");
      }
    } catch (error) {
      console.error("Error fetching role:", error);
      setRole("user");
      localStorage.setItem("role", "user");
    }
  };

  fetchRole();
}, [user]);


  // Logout function
  // const logout = () => signOut(auth);

  const logout = () => {
  localStorage.removeItem("role");
  return signOut(auth);
};

  // Provide everything
  const authInfo = {
    user,
    role,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
