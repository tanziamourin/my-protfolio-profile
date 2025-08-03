import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import TagCloud from "@frank-mayer/react-tag-cloud";
import { motion } from "framer-motion";

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

  const textColor = isDark ? "text-gray-200" : "text-gray-800";
  const accentColor = isDark ? "text-amber-400" : "text-cyan-600";
  const subText = isDark ? "text-gray-300" : "text-gray-700";
  const bgColor = isDark ? "bg-gray-900" : "bg-white";

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section
      id="skills"
      className={`py-16 px-5 sm:px-10 md:px-16 my-20 rounded-3xl max-w-7xl mx-auto relative overflow-hidden ${bgColor}`}
    >
      {/* Background Particles */}
      <Particles
        id="particles"
        init={particlesInit}
        options={{
          background: { color: { value: isDark ? "#0f172a" : "#f8fafc" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#00ffff" },
            links: {
              color: "#00ffff",
              distance: 100,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.6,
              direction: "none",
              outModes: "bounce",
            },
            number: { value: 40 },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative z-10">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className={`text-4xl sm:text-5xl font-extrabold mb-6 ${textColor}`}
          >
            Skills & <span className={accentColor}>Experience</span>
          </h2>

          <p className={`mb-6 leading-relaxed text-base sm:text-lg ${subText}`}>
            As a full-stack developer with a focus on modern web technologies, I
            enjoy transforming ideas into user-friendly digital experiences. My
            work blends logic with creativity, ensuring both functionality and
            aesthetics are balanced.
            <br />
            <br />
            I specialize in building dynamic web applications from scratch —
            from designing clean interfaces to architecting robust backend
            systems. I take pride in writing maintainable code, optimizing
            performance, and ensuring smooth user interactions.
            <br />
            <br />
            Whether it’s developing scalable APIs, integrating third-party
            services, or deploying complete applications, I strive to deliver
            high-quality results that meet both user needs and business goals.
          </p>
        </motion.div>

        {/* Right: Word Cloud */}
        <motion.div
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
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
