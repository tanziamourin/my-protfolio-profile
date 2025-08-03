import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

const trainings = [
  {
    title: "Complete Web Development Course",
    organization: "Her Power Project",
    year: "2023",
    description:
      "Completed a full-stack training on HTML, CSS, JS, React, Node.js, MongoDB. Included real-world projects & responsive design.",
  },
  {
    title: "Programming Hero Web Dev Course",
    organization: "Programming Hero",
    year: "2025",
    description:
      "Advanced MERN stack program including Firebase, REST APIs, JWT, Tailwind, full-featured apps, and deployment strategies.",
  },
];

const ProfessionalTrainings = () => {
  const { isDark } = useContext(ThemeContext);
  const accentColor = isDark ? "text-amber-400" : "text-cyan-600";
  const bgColor = isDark ? "bg-gray-900" : "bg-white";
  const textColor = isDark ? "text-gray-100" : "text-gray-800";
  const subTextColor = isDark ? "text-gray-400" : "text-gray-600";

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section
      id="trainings"
      className={`py-20 px-6 md:px-12 rounded-3xl max-w-7xl mx-auto relative overflow-hidden ${bgColor}`}
    >
      {/* Particles Background */}
      <Particles
        id="particles-trainings"
        init={particlesInit}
        options={{
          background: { color: { value: isDark ? "#0f172a" : "#f8fafc" } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 } },
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

      {/* Glowing Gradients */}
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
      <motion.h2
        className={`text-4xl sm:text-5xl text-center font-extrabold mb-6 ${textColor}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Professional <span className={accentColor}>Trainings</span>
      </motion.h2>

      <div className="max-w-5xl mt-16 mx-auto grid gap-10 md:grid-cols-2 relative z-10">
        {trainings.map((training, index) => (
          <motion.div
            key={index}
            className={`relative backdrop-blur-lg bg-opacity-10 rounded-3xl p-6 border border-purple-400/20 shadow-xl transition-all
              ${isDark ? "bg-white/5" : "bg-white/40"} hover:scale-[1.02]`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Icon badge */}
            <div className="absolute -top-5 left-6 bg-gradient-to-tr from-green-700 to-green-200 p-2 rounded-full shadow-lg">
              <FaCheckCircle className="text-white text-lg" />
            </div>

            <h3 className={`text-xl font-bold ${accentColor} mb-2 mt-4`}>
              {training.title}
            </h3>
            <p className={`text-sm font-semibold mb-1 ${textColor}`}>
              {training.organization} — {training.year}
            </p>
            <p className={`text-sm leading-relaxed ${subTextColor}`}>
              {training.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalTrainings;
