import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { TypeAnimation } from "react-type-animation";

import SocialButton from "./ui/SocialButton";
import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const Hero = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <section
      id="hero"
      className={`min-h-[600px] flex items-center justify-center px-6 mt-10 md:px-12 `}
      //   ${
      //     isDark ? "bg-gray-950 text-white" : "bg-white text-gray-900"
      //   }
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl md:text-5xl font-extrabold leading-tight mb-5 ">  Hi, I'm{" "}</h1>
        <h1
          className="text-2xl md:text-5xl pb-5 font-extrabold leading-tight"
        >
        
          < motion.span
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
            className={`px-2 py-1 rounded-md ${
              isDark
                ? "text-white bg-gradient-to-r from-amber-500 via-pink-500 to-teal-500"
                : "text-black bg-gradient-to-r from-amber-400 via-pink-300 to-teal-300"
            }`}
          >
            <TypeAnimation
              sequence={[
                "Tanzia Mourin",
                2000,
                " A MERN Stack Developer",
                2000,
                " A React.js Lover",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </ motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-lg md:text-xl text-gray-500 dark:text-gray-300"
        >
          I engineer full-stack MERN applications that merge performance with
          pixel-perfect design — transforming complex logic into seamless user
          flows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-8 flex justify-center gap-6 flex-wrap"
        >
        <Link
  to="/projects"
  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-lg text-lg font-semibold shadow-lg hover:scale-105 transition-transform cursor-pointer"
>
  View Projects
</Link>
        </motion.div>

        {/* Contact Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-10 flex justify-center gap-6 text-2xl"
        >
          <SocialButton></SocialButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
