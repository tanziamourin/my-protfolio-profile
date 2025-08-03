import { useContext } from "react";
import ThemeContext from "../../Context/ThemeContext";

const GlowingBackgroundWrapper = ({ children }) => {
  const { isDark } = useContext(ThemeContext);

  // Light mode এর subtle grid background style (opacity কম)
  const lightGridBackground = {
    backgroundImage: `
      linear-gradient(to right, rgba(100,116,139,0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(100,116,139,0.1) 1px, transparent 1px)
    `,
    backgroundSize: "40px 40px",
  };

  // Dark mode এর grid background style (opacity বেশি)
  const darkGridBackground = {
    backgroundImage: `
      linear-gradient(to right, rgba(150,160,170,0.2) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(150,160,170,0.2) 1px, transparent 1px)
    `,
    backgroundSize: "40px 40px",
  };

  return (
    <div
      className={`min-h-screen w-full relative overflow-hidden ${
        isDark ? "bg-[#020617]" : "bg-white"
      }`}
      style={isDark ? darkGridBackground : lightGridBackground}
    >
      {/* Light mode এ কোনো বুদবুদ থাকবে না */}

      {/* Main content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlowingBackgroundWrapper;
