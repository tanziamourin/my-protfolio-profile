import React, { useContext } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaServer,
  FaTools,
  FaGraduationCap,
} from "react-icons/fa";
import ThemeContext from "../Context/ThemeContext";
import { FaArrowCircleRight } from "react-icons/fa";
const skills = [
  {
    category: "Frontend",
    icon: <FaCode />,
    list: [
      { name: "HTML5", value: 95 },
      { name: "CSS3", value: 90 },
      { name: "JavaScript", value: 95 },
      { name: "React", value: 90 },
      { name: "Tailwind CSS", value: 90 },
      { name: "Daisy UI", value: 85 },
    ],
  },
  {
    category: "Backend",
    icon: <FaServer />,
    list: [
      { name: "Node.js", value: 90 },
      { name: "Express", value: 90 },
      { name: "REST APIs", value: 95 },
      { name: "Authentication", value: 90 },
      { name: "JWT", value: 85 },
    ],
  },
  {
    category: "Database",
    icon: <FaDatabase />,
    list: [
      { name: "MongoDB", value: 90 },
      { name: "Firebase", value: 80 },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: <FaTools />,
    list: [
      { name: "Git", value: 90 },
      { name: "Vercel", value: 80 },
      { name: "Render", value: 85 },
    ],
  },
];

const SkillsAndJourney = () => {
  const { isDark } = useContext(ThemeContext);

  const textColor = isDark ? "text-gray-200" : "text-gray-800";
  const accentColor = isDark ? "text-amber-400" : "text-cyan-600";

  const cardBg = isDark ? "bg-gray-800" : "bg-gray-100";
  const shadow = isDark
    ? "shadow-[0_8px_20px_rgba(0,0,0,0.6)]"
    : "shadow-md shadow-gray-300";

  return (
    <section className={` py-20  max-w-7xl mx-auto px-10  lg:px-2 md:px-10`}>
      <h2
        className={`lg:text-5xl text-4xl sm:px-2 font-extrabold text-center mb-15 ${textColor}`}
      >
        Tech Stack &  <span className={accentColor}> Tools</span>
      </h2>

      {/* Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  mx-auto">
        {skills.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, type: "spring", stiffness: 70 }}
            className={`${cardBg} ${textColor} rounded-2xl p-6 ${shadow} hover:scale-[1.03] transition-transform duration-300`}
          >
            <div
              className={`flex items-center gap-3 text-xl font-semibold mb-3 ${accentColor}`}
            >
              <span className="text-3xl">{group.icon}</span>
              <span>{group.category}</span>
            </div>

            <ul className="space-y-1.5">
              {group.list.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="flex-grow">
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  <div className="w-10 h-8 relative">
                    <svg viewBox="0 0 36 36" className="w-full h-full">
                      <circle
                        className="text-gray-700 dark:text-gray-600"
                        strokeWidth="4"
                        stroke="currentColor"
                        fill="none"
                        cx="18"
                        cy="18"
                        r="16"
                      />
                      <motion.circle
                        className="text-cyan-400 dark:text-amber-400"
                        strokeWidth="4"
                        stroke="currentColor"
                        fill="none"
                        cx="18"
                        cy="18"
                        r="16"
                        strokeDasharray="100"
                        strokeDashoffset="100"
                        initial={{ strokeDashoffset: 100 }}
                        animate={{ strokeDashoffset: 100 - item.value }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        style={{ strokeLinecap: "round" }}
                      />
                    </svg>
                    <div className="absolute inset-0  flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200">
                      {item.value}%
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
        {/* Bottom Button-like Text */}
      </div>
      <div className="mt-16 flex justify-center">
        <span
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 font-medium text-sm sm:text-base transition duration-300 shadow-md hover:scale-105 ${
            isDark
              ? "border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black"
              : "border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white"
          }`}
        >
          <FaArrowCircleRight className="text-lg animate-bounce" />
          Continuously expanding my skillset ...
        </span>
      </div>
    </section>
  );
};

export default SkillsAndJourney;
