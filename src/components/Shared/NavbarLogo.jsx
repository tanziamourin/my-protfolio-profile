"use client";
import { motion } from "framer-motion";
import { useContext } from "react";
import ThemeContext from "../../Context/ThemeContext";
import { FaLaptopCode } from "react-icons/fa";

export const NavbarLogo = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <motion.div
      className="flex items-center gap-3 cursor-pointer group"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      whileHover={{ scale: 1.05, rotate: -2 }}
      title="Tanzia Mourin"
    >
      {/* Glassmorphism + Gradient TM + Icon + Padding added */}
      <div
        className={`px-3 py-2 flex items-center gap-3 rounded-2xl font-bold md:text-base backdrop-blur-md transition-all duration-500
        ${
          isDark
            ? "bg-white/10 text-white border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            : "bg-white/50 text-gray-800 border border-gray-300 shadow-md"
        } group-hover:scale-110 group-hover:rotate-[6deg]`}
      >
        <FaLaptopCode
          className={`text-lg md:text-2xl ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        />
        <span className="text-transparent text-2xl bg-gradient-to-r from-amber-500 via-pink-500 to-teal-500 bg-clip-text tracking-wider">
          TM
        </span>
      </div>

      {/* Hidden screen reader text */}
      <h1 className="sr-only">Tanzia Mourin</h1>
    </motion.div>
  );
};
