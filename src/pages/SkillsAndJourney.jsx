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

const journey = [
  {
    title: "Formal Training",
    icon: <FaGraduationCap />,
    date: "2024 - 2025",
    heading: "MERN Stack Development",
    org: "Programming Hero",
    bullets: [
      "Completed 500+ hours of intensive training",
      "Built 3 full-stack applications",
      "Learned industry best practices",
    ],
  },
  {
    title: "Hands-on Projects",
    icon: <FaCode />,
    date: "2025 - Present",
    heading: "Practical Applications",
    org: "Personal Portfolio",
    bullets: [
      "Developed responsive portfolio with animations",
      "Created e-commerce demo with Stripe integration",
      "Built REST APIs with JWT-based authentication",
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
          className={`inline-block px-6 py-2 rounded-full border-2 font-medium text-sm sm:text-base transition duration-300 ${
            isDark
              ? "border-amber-400 text-amber-400"
              : "border-cyan-600 text-cyan-600"
          }`}
        >
          Continuously expanding my skillset ...
        </span>
      </div>
      {/* Journey */}
      {/* <h2
        className={`text-3xl sm:text-4xl font-bold text-center mt-24 mb-16 ${accentColor} tracking-wide`}
      >
        My Coding Journey
      </h2>

      <div className="max-w-5xl mx-auto space-y-12">
        {journey.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.25, type: "spring", stiffness: 60 }}
            className={`${cardBg} ${textColor} rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start ${shadow}`}
          >
            <div
              className={`${accentColor} text-4xl border-2 border-transparent p-3 rounded-full hover:border-teal-400 transition-colors`}
            >
              {item.icon}
            </div>
            <div className="flex-1">
              <div className={`flex items-center text-sm font-medium mb-2 ${accentColor}`}>
                <span>{item.title}</span>
                <span className={`ml-4 text-xs ${subText}`}>{item.date}</span>
              </div>
              <h3 className="text-2xl font-bold mb-1">{item.heading}</h3>
              <p className={`text-sm mb-4 ${subText}`}>{item.org}</p>
              <ul className={`list-disc ml-5 space-y-1 text-sm sm:text-base ${subText}`}>
                {item.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div> */}
    </section>
  );
};

export default SkillsAndJourney;
