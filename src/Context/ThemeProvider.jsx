import { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(true);

  // Default to dark mode (or localStorage value)
  const [isDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme === "dark" : true;
  });

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);
  const toggleSidebar = () => setSidebar((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDark, sidebar, toggleSidebar }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
