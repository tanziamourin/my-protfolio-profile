import { NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaTachometerAlt, FaEnvelope, FaUpload, FaSignOutAlt } from "react-icons/fa";
import { useContext } from "react";
import ThemeContext from "../../Context/ThemeContext";
import ThemeToggle from "../../components/Shared/ThemeToggle";

const Sidebar = () => {
  const role = localStorage.getItem("role");
  const { isDark } = useContext(ThemeContext);
  const navigate = useNavigate();

  if (role !== "admin") return null;

  const bgClass = isDark ? "bg-gray-900" : "bg-gray-100";
  const textClass = isDark ? "text-white" : "text-gray-900";
  const hoverClass = isDark ? "hover:text-amber-400" : "hover:text-cyan-600";
  const activeClass = isDark ? "text-amber-400 font-semibold" : "text-cyan-600 font-semibold";

  const handleLogout = () => {
    localStorage.removeItem("role"); // Clear role or other auth data
    localStorage.removeItem("token"); // If token used
    navigate("/"); // Redirect to Home
  };

  return (
    <div className={`w-20 md:w-64 ${bgClass} ${textClass} border-r p-4 h-screen fixed top-0 left-0`}>
      <h2 className="text-xl font-bold mb-6 hidden md:block">Admin Dashboard</h2>

      <ul className="space-y-4 text-sm">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 transition-colors ${isActive ? activeClass : hoverClass}`
            }
          >
            <FaHome className="text-lg" />
            <span className="hidden md:inline">Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 transition-colors ${isActive ? activeClass : hoverClass}`
            }
          >
            <FaTachometerAlt className="text-lg" />
            <span className="hidden md:inline">Dashboard Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/contact-messages"
            className={({ isActive }) =>
              `flex items-center gap-3 transition-colors ${isActive ? activeClass : hoverClass}`
            }
          >
            <FaEnvelope className="text-lg" />
            <span className="hidden md:inline">Admin Messages</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/project-upload"
            className={({ isActive }) =>
              `flex items-center gap-3 transition-colors ${isActive ? activeClass : hoverClass}`
            }
          >
            <FaUpload className="text-lg" />
            <span className="hidden md:inline">Project Upload</span>
          </NavLink>
        </li>

            <li>
          <NavLink
            to="/dashboard/upload-all-projects"
            className={({ isActive }) =>
              `flex items-center gap-3 transition-colors ${isActive ? activeClass : hoverClass}`
            }
          >
            <FaUpload className="text-lg" />
            <span className="hidden md:inline"> Uploaded Project</span>
          </NavLink>
        </li>

        {/* ✅ Logout Button */}
        <li>
          <button
            onClick={handleLogout}
            className={`flex items-center gap-3 transition-colors ${hoverClass}`}
          >
            <FaSignOutAlt className="text-lg" />
            <span className="hidden md:inline">Logout</span>
          </button>
        </li>
      </ul>

      <ThemeToggle />
    </div>
  );
};

export default Sidebar;
