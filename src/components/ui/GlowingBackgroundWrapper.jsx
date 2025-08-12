import { useContext } from "react";
import ThemeContext from "../../Context/ThemeContext";
// import { motion } from "framer-motion";

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
       {/* <motion.div
        className="absolute -top-50  -right-40 -left-28 w-[800px] h-[800px] bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-full opacity-20 blur-3xl pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute -bottom-20 -left-40 w-[350px] h-[350px] bg-gradient-to-tr from-amber-400 to-red-500 rounded-full opacity-20 blur-3xl pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      /> */}

      {/* Main content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlowingBackgroundWrapper;
