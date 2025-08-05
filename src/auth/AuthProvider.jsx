import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      setRole(null);
      setLoading(true);

      if (user) {
        try {
          const res = await fetch(`https://my-protfolio-profile-server.vercel.app/api/users/${encodeURIComponent(user.email)}`);
          if (!res.ok) throw new Error("Failed to fetch role");
          const data = await res.json();
          setRole(data.role);
          localStorage.setItem("role", data.role);
        } catch {
          setRole("user");
          localStorage.setItem("role", "user");
        }
      } else {
        localStorage.removeItem("role");
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = () => {
    localStorage.removeItem("role");
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, role, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
