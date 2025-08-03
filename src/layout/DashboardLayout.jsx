import { useContext, useEffect } from "react";
// import { AuthContext } from "../context/AuthProvider";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../dashboard/DashboardComponents/Sidebar";
import { AuthContext } from "../auth/AuthProvider";

const DashboardLayout = () => {
  const { role, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && role && role !== "admin") {
      navigate("/unauthorized");
    }
  }, [role, loading, navigate]);

  if (loading || !role) {
    return <div className="text-center mt-10">Loading dashboard...</div>;
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-4 md:p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
