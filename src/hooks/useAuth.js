// hooks/useAuth.js
import { useState, useEffect } from "react";

export const useAuth = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    // রোল স্টোর করা থাকে localStorage বা context এ
    const storedRole = localStorage.getItem("role"); // e.g., "admin" or "user"
    setRole(storedRole);
  }, []);

  return role;
};
