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

  return (
    <section
      id="about"
      className={`${bgColor} py-20 px-12 sm:px-12 md:px-20 rounded-3xl max-w-7xl mx-auto relative overflow-hidden`}
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
          <h2 className={`md:text-5xl text-4xl text-center font-extrabold mb-10 ${textColor}`}>
            About <span className={`${accentColor}`}>Me</span>
          </h2>
      <div className="flex flex-col md:flex-row items-center gap-16 relative z-10">
        
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
         
          <p className={`${textColor} text-lg my-2  leading-relaxed`}>
            Hello, I’m{" "}
            <span className={`font-semibold ${accentColor}`}>
              Tanzia Mourin Chowdhury
            </span>
            . I began my journey building foundational websites and have grown
            into a MERN stack developer, crafting applications with clean
            interfaces and reliable backends using React and Node.js.
          </p>

          <p className={`${textColor} text-lg my-2  leading-relaxed`}>
            I thrive on solving complex challenges by delivering seamless,
            intuitive user experiences through innovative thinking.
          </p>

          <p className={`${textColor} text-lg my-2  leading-relaxed`}>
            When not coding, I find inspiration in painting and hiking —
            activities that fuel my creativity and refresh my perspective.
          </p>

          <p className={`${textColor} text-lg my-2  leading-relaxed`}>
            I approach each project with dedication, curiosity, and empathy,
            constantly learning and evolving as a developer.
          </p>
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
