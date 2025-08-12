import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

import SocialButton from "./ui/SocialButton";
import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AboutImages from "./AboutImages";

const Hero = () => {
  const { isDark } = useContext(ThemeContext);
  const btnBg = isDark ? "bg-amber-500" : "bg-cyan-600";
  const btnHover = isDark ? "hover:bg-amber-600" : "hover:bg-cyan-700";
  const btnText = "text-white";
    const borderColor = isDark ? "border-amber-500" : "border-cyan-500";
  // Replace with your actual resume link once ready
  const resumeLink = "/tanzia-mourin-CV.pdf";

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      id="hero"
      className={`min-h-[600px] grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto  px-6 mt-10 md:px-12 `}
    >
      <div className=" mt-16 text-center">
        {/* Profile Image */}

      

        {/* Greeting */}
        <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mt-6 mb-5">
          Hi, I'm{" "}
          <span
            className={`px-2 py-1 rounded-md ${
              isDark
                ? "text-white bg-gradient-to-r from-amber-500 via-pink-500 to-teal-500"
                : "text-black bg-gradient-to-r from-amber-400 via-pink-300 to-teal-300"
            }`}
          >
            Tanzia Mourin
          </span>
        </h1>

        {/* Professional Designation with animation */}
        <h2 className="text-xl md:text-3xl font-semibold mb-4">
          {" "}
          A{" "}
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "MERN Stack Developer",
              2000,
              "React.js Enthusiast",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>

        {/* Short intro paragraph */}
        <p className="mt-2 text-lg md:text-xl text-gray-500 dark:text-gray-300 max-w-xl mx-auto">
          I engineer full-stack MERN applications that merge performance with
          pixel-perfect design — transforming complex logic into seamless user
          flows.
        </p>

        {/* Buttons: View Projects & Resume Download */}
        <div className="mt-8 flex justify-center gap-6 flex-wrap">
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-lg text-lg font-semibold shadow-lg hover:scale-105 transition-transform cursor-pointer"
          >
            View Projects
          </Link>

          {/* Resume Download Button */}
          <a
            href={resumeLink}
            download
            className={`inline-flex items-center  px-6 py-3 rounded-lg font-semibold text-lg shadow-lg transition-colors duration-300 ${btnBg} ${btnText} ${btnHover} hover:scale-105`}
          >
            Download Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className=" flex justify-center gap-6 text-2xl">
          <SocialButton />
        </div>
      </div>

      <div>
        <motion.img
          src="https://i.ibb.co/kVwX7ZzV/Whats-App-Image-2025-06-25-at-11-47-06-c24bd1b9.jpg"
          alt="Tanzia Mourin Chowdhury"
          className ={`mx-auto rounded-lg mt-16 my-20 w-500px h-100 object-cover border-4 ${borderColor}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1   }}
          whileInView={{ x: [0, 30, 0] }}
            // transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            viewport={{ once: false, amount: 0.5 }}
        />
      </div>
    </motion.section>
  );
};

export default Hero;
