import { Link } from "react-router-dom";

const Sidebar = () => {
  const role = localStorage.getItem("role");

  if (role !== "admin") return null;

  return (
    <div className="w-64 bg-white border-r p-4 hidden md:block">
      <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
      <ul className="space-y-2">
        <li><Link to="/dashboard">Dashboard Home</Link></li>
        <li><Link to="/dashboard/contact-messages">Admin Messages</Link></li>
        <li><Link to="/dashboard/project-upload">Project Upload</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
