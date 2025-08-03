import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const auth = useAuth();

  if (!auth) {
    return <Navigate to="/login" replace />;
  }

  const { user, loading, role } = auth;

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (user && role === "admin") {
    return children;
  }

  return <Navigate to="/unauthorized" replace />;
};

export default PrivateRoute;
