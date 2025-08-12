import React, { useContext } from "react";
import { FaGraduationCap, FaCheckCircle } from "react-icons/fa";
import ThemeContext from "../Context/ThemeContext";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

const educationData = [
  {
    degree: "Higher Secondary Certificate (HSC)",
    year: "2019",
    institution: "Moulovibar Government Women's College",
    location: "Sylhet, Bangladesh",
    description: "Completed Higher Secondary Certificate with science background.",
  },
  {
    degree: "Bachelor of Arts (BA)",
    year: "2024",
    institution: "Chunarughat Government College",
    location: "Chunarughat, Bangladesh",
    description: "Completed BA degree in Arts.",
  },
];

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

  const textColor = isDark ? "text-gray-200" : "text-gray-800";
  const accentColor = isDark ? "text-amber-400" : "text-cyan-600";
  const bgColor = isDark ? "bg-gray-900" : "bg-white";
  const cardBg = isDark ? "bg-gray-800" : "bg-gray-100";
  const shadow = isDark
    ? "shadow-[0_8px_20px_rgba(0,0,0,0.6)]"
    : "shadow-md shadow-gray-300";

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section
      id="education-trainings"
      className={`py-16 px-5 sm:px-10 md:px-16 my-20 max-w-7xl mx-auto rounded-3xl relative overflow-hidden ${bgColor} ${textColor}`}
    >
      {/* Background Particles */}
      <Particles
        id="particles-edu-train"
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

      {/* Glowing Background Gradients */}
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

      {/* Section Heading */}
      <motion.h2
        className={`text-4xl md:text-5xl font-extrabold text-center mb-14`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        My <span className={accentColor}>Education & Trainings</span>
      </motion.h2>

      {/* Two Column Layout for Education and Trainings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto relative z-10">
        {/* Education */}
        <div>
          <h3 className={`text-4xl text-center md:text-left font-semibold mb-8 ${accentColor}`}>Education</h3>
          <div className="space-y-8">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                className={`${cardBg} ${shadow} rounded-2xl p-6 flex items-start gap-6`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, type: "spring", stiffness: 70 }}
              >
                <div className={`text-4xl ${accentColor} mt-1`}>
                  <FaGraduationCap />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold">{edu.degree}</h4>
                  <p className="text-sm font-medium text-gray-400 mb-1">
                    {edu.institution} — <span className="italic">{edu.location}</span>
                  </p>
                  <p className="text-sm font-semibold mb-2">{edu.year}</p>
                  <p className="text-gray-400">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Professional Trainings */}
        <div>
          <h3 className={`text-3xl text-center md:text-left font-semibold mb-8 ${accentColor}`}>
            Professional Trainings
          </h3>
          <div className="space-y-8">
            {trainings.map((training, index) => (
              <motion.div
                key={index}
                className={`relative backdrop-blur-lg bg-opacity-10 rounded-3xl p-6 border border-purple-400/20 shadow-xl transition-all
                  ${isDark ? "bg-white/5" : "bg-white/40"} hover:scale-[1.02]`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, type: "spring", stiffness: 70 }}
              >
                <div className="absolute -top-5 left-6 bg-gradient-to-tr from-green-700 to-green-200 p-2 rounded-full shadow-lg">
                  <FaCheckCircle className="text-white text-lg" />
                </div>

                <h4 className={`text-xl font-bold ${accentColor} mb-2 mt-4`}>
                  {training.title}
                </h4>
                <p className={`text-sm font-semibold mb-1 ${textColor}`}>
                  {training.organization} — {training.year}
                </p>
                <p className={`text-sm leading-relaxed text-gray-400`}>
                  {training.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalTrainings;
