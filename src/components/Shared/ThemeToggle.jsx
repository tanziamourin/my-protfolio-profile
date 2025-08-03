import { useContext } from "react";
// import ThemeContext from "../context/ThemeContext"; // ✅ adjust path as needed
import { FaSun, FaMoon } from "react-icons/fa";
import ThemeContext from "../../Context/ThemeContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-20 right-6 z-50  text-white bg-cyan-600 dark:bg-gray-800 dark:text-yellow-300 p-3 rounded-full shadow-lg hover:scale-110 transition duration-300"
      title="Toggle Theme"
    >
      {isDark ? <FaSun className="animate-bounce" /> : <FaMoon className="animate-bounce" />}
    </button>
  );
};

export default ThemeToggle;
