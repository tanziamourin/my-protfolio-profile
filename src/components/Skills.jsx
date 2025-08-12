import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import TagCloud from "@frank-mayer/react-tag-cloud";
import { motion } from "framer-motion";
import SkillsAndJourney from "../pages/SkillsAndJourney";

const words = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "RESTful APIs",
  "JWT",
  "Firebase Auth",
  "Vite",
  "Webpack",
  "npm",
  "Yarn",
  "Git",
  "GitHub",
  "Netlify",
  "Vercel",
  "Postman",
  "Axios",
  "Framer Motion",
  "React Hook Form",
  "TanStack Query",
  "Lottie",
  "dotenv",
  "Responsive Design",
  "Mobile-First Development",
];

const Skills = () => {
  const { isDark } = useContext(ThemeContext);
  const bgColor = isDark ? "bg-gray-900" : "bg-white";
  const accentColor = isDark ? "text-amber-400" : "text-cyan-600";

  

  return (
    <section
      id="skills"
      className={`py-5 sm:px-10 md:px-5 my-20 rounded-3xl max-w-7xl mx-auto relative overflow-hidden ${bgColor}`}
    >
 

      {/* Background Glows */}
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

     

      {/* Content */}
      <div className=" grid grid-cols-1 lg:grid-cols-2 relative z-10">
        {/* Left: SkillsAndJourney */}
        <div className="">
          <SkillsAndJourney />
        </div>

            {/* Right: Word Cloud */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center"
        >
          <TagCloud
            options={(w) => ({
              radius:
                Math.min(w.innerWidth, w.innerHeight) /
                (w.innerWidth < 640 ? 3.5 : 2.5),
              maxSpeed: "fast",
              initSpeed: "normal",
              keep: true,
            })}
            className={`text-[12px] sm:text-base md:text-xl font-semibold select-none text-center ${accentColor}`}
          >
            {words}
          </TagCloud>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Skills;
