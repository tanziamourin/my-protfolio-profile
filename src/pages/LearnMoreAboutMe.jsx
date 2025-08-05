import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LearnMoreAboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-3xl mx-auto p-6 sm:p-10 bg-white dark:bg-gray-900 rounded-3xl shadow-xl my-16"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl font-extrabold mb-8 text-center text-gray-900 dark:text-white"
      >
        About Me
      </motion.h1>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-12 text-gray-800 dark:text-gray-300 leading-relaxed space-y-4 text-lg"
      >
        <p>
          Hi! I’m{" "}
          <span className="font-semibold text-cyan-600 dark:text-amber-400">
            Tanzia Mourin Chowdhury
          </span>
          , a passionate <strong>MERN Stack Developer</strong> skilled in
          building full-stack web applications using <strong>MongoDB</strong>,{" "}
          <strong>Express.js</strong>, <strong>React</strong>, and{" "}
          <strong>Node.js</strong>. I love creating responsive, user-friendly,
          and high-performance web solutions.
        </p>
        <p>
          I have hands-on experience in both front-end and back-end development,
          and I truly enjoy solving complex challenges with clean and efficient
          code. I’m continuously learning and evolving to stay updated with the
          latest technologies in web development.
        </p>
      </motion.section>

      {/* Education Section */}
      <motion.section
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white border-b-2 border-cyan-600 dark:border-amber-400 pb-2">
          Education
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300 text-lg">
          <li>
            <strong>Bachelor of Arts (BA)</strong>
            <br />
            Chunarughat Govt College
          </li>
          <li>
            <strong>Higher Secondary Certificate (HSC)</strong>
            <br />
            Moulovibar Govt Women's College
          </li>
          <li>
            <strong>Secondary School Certificate (SSC)</strong>
            <br />
            Ideal School and College
          </li>
        </ul>

        {/* Go to Home Button */}
        <div className="mt-10 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              to="/"
              className="px-6 py-3 bg-cyan-600 text-white rounded-full font-semibold shadow-lg transition-all hover:bg-cyan-700 dark:bg-amber-400 dark:text-black dark:hover:bg-amber-500"
            >
              ← Go to Home
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default LearnMoreAboutMe;
