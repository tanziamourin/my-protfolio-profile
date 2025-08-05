import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // <-- Import Link
import ThemeContext from "../Context/ThemeContext";
import AboutImage from "./AboutImages";

const About = () => {
  const { isDark } = useContext(ThemeContext);

  // Colors based on theme
  const bgColor = isDark ? "bg-gray-900" : "bg-white";
  const textColor = isDark ? "text-gray-200" : "text-gray-800";
  const accentColor = isDark ? "text-amber-400" : "text-cyan-600";
  const btnBg = isDark ? "bg-amber-500" : "bg-cyan-600";
  const btnHover = isDark ? "hover:bg-amber-600" : "hover:bg-cyan-700";
  const btnText = "text-white";

  return (
    <section
      id="about"
      className={`${bgColor} py-24 px-6 sm:px-12 md:px-20 rounded-3xl max-w-7xl mx-auto relative overflow-hidden`}
    >
      {/* Background shape */}
      <motion.div
        className="absolute -top-20 -right-40 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-full opacity-20 blur-3xl pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute -bottom-20 -left-40 w-[350px] h-[350px] bg-gradient-to-tr from-amber-400 to-red-500 rounded-full opacity-20 blur-3xl pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />

      <div className="flex flex-col md:flex-row items-center gap-16 relative z-10">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h2 className={`text-5xl font-extrabold mb-6 ${textColor}`}>
            About <span className={`${accentColor}`}>Me</span>
          </h2>

          <p className={`text-lg leading-relaxed mb-8 ${textColor} opacity-90`}>
            Hello! I’m{" "}
            <span className={`${accentColor} font-semibold`}>Tanzia</span>, a
            MERN stack developer passionate about creating beautiful, performant
            web apps. I specialize in React, Node.js, and MongoDB, focusing on
            seamless UX and scalable backend architecture.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/files/tanzia-mourin-CV.pdf"
              download
              className={`inline-block sm:px-8 px-5 sm:py-3 py-2 rounded-full font-semibold shadow-lg transition-colors duration-300 ${btnBg} ${btnText} ${btnHover} hover:scale-105`}
            >
              Download My CV
            </a>

            <span className={`font-bold text-xl sm:text-2xl ${textColor}`}>
              or
            </span>

            <Link
              to="/learn-more-about-me"
              className={`inline-block sm:px-8 px-5 sm:py-3 py-2 rounded-full font-semibold shadow-lg transition-colors duration-300 ${btnBg} ${btnText} ${btnHover} hover:scale-105`}
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* Right: Image with fancy border and shadow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative rounded-3xl shadow-2xl border-2 border-cyan-500 dark:border-amber-500 ">
            <AboutImage />
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-cyan-500 rounded-full mix-blend-multiply opacity-60 animate-pulse pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
