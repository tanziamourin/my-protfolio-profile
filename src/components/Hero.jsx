import { motion } from "framer-motion";
import { Link } from "react-scroll";


import { TypeAnimation } from "react-type-animation";

import SocialButton from "./ui/SocialButton";

const Hero = () => {
  

  return (
    <section
      id="hero"
      className={`min-h-[600px] flex items-center justify-center px-6 mt-10 md:px-12 `}
      //   ${
      //     isDark ? "bg-gray-950 text-white" : "bg-white text-gray-900"
      //   }
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-gradient-to-r from-amber-500 via-pink-500 to-teal-500 bg-clip-text">
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
          </span>
        </motion.h1>

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
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
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
