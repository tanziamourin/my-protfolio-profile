import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../dashboard/DashboardComponents/Sidebar";
import { AuthContext } from "../auth/AuthProvider";

const DashboardLayout = () => {
  const { role, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="text-center mt-10">Loading dashboard...</div>;
  }

  if (role !== "admin") {
    return <div className="text-center mt-10">Unauthorized Access</div>;
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />
      <div className="ml-20 md:ml-64 flex-1 min-h-screen bg-gray-50 dark:bg-gray-800 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
