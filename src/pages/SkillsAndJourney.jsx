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
    <section className={` py-20 px-5 sm:px-10`}>
      <h2
        className={`text-4xl sm:text-5xl font-extrabold text-center mb-15 ${textColor}`}
      >
        Technologies I’ve <span className={accentColor}> Mastered</span>
      </h2>

      {/* Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {skills.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, type: "spring", stiffness: 70 }}
            className={`${cardBg} ${textColor} rounded-2xl p-6 ${shadow} hover:scale-[1.03] transition-transform duration-300`}
          >
            <div
              className={`flex items-center gap-3 text-xl font-semibold mb-5 ${accentColor}`}
            >
              <span className="text-3xl">{group.icon}</span>
              <span>{group.category}</span>
            </div>

            <ul className="space-y-4">
              {group.list.map((item, i) => (
                <li key={i}>
                  <div className="flex justify-between text-sm font-medium mb-1">
                    <span>{item.name}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-gray-700 dark:bg-gray-600">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ duration: 1.3 }}
                      className="h-2 rounded-full bg-gradient-to-r from-amber-400 to-cyan-400 shadow"
                    />
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
