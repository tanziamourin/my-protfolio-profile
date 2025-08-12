import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { FaCode, FaUser } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { GiCrystalGrowth } from "react-icons/gi";
import ThemeContext from "../Context/ThemeContext";

const faqData = [
  {
    question: "What’s your core expertise as a developer?",
    answer: (
      <>
        I specialize in building <strong>MERN stack</strong> applications — focusing on
        clean UI/UX with <code>React</code> and <code>Tailwind</code>, and scalable backend
        with <code>Node.js</code> + <code>MongoDB</code>.
      </>
    ),
    icon: <FaCode className="mr-2 text-xl" />,
  },
  {
    question: "Do you have any real-world project experience?",
    answer: (
      <>
        Yes! I’ve built:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Dashboards with user authentication</li>
          <li>Portfolio websites with animations</li>
          <li>Blog platforms and eCommerce apps</li>
        </ul>
        All using tools like <code>JWT</code>, <code>Firebase</code>, and REST APIs.
      </>
    ),
    icon: <HiSparkles className="mr-2 text-xl" />,
  },
  {
    question: "Are you currently open to opportunities?",
    answer: (
      <>
        <strong>Absolutely!</strong> I'm open to full-time, freelance, or remote roles. I enjoy
        working with collaborative teams and contributing to exciting projects.
      </>
    ),
    icon: <GiCrystalGrowth className="mr-2 text-xl" />,
  },
  {
    question: "Where can I see your work or connect?",
    answer: (
      <>
        Visit my{" "}
        <a
          href="https://github.com/tanziamourin"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        or{" "}
        <a
          href="https://www.linkedin.com/in/tanzia-mourin-chowdhury"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        . I'm always open to networking and collaborations!
      </>
    ),
    icon: <FaUser className="mr-2 text-xl" />,
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { isDark } = useContext(ThemeContext);
 const bgColor = isDark ? "bg-gray-900" : "bg-white";
 const accentColor = isDark ? "text-amber-400" : "text-cyan-600";

  const toggleFaq = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
   <section id="faq"  className={`${bgColor} py-20 my-20  px-6 sm:px-12 md:px-20 rounded-3xl max-w-7xl mx-auto relative overflow-hidden`}>
          {/* Background shape */}
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
    
     <div className="max-w-4xl mx-auto px-4 py-2">

         <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
               
              > 
      <h2 className="text-4xl sm:text-5xl text-center font-extrabold mb-15">Inquiries & <span className={accentColor}>Insights</span></h2>
      <div className="space-y-5 ">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-xl transition-all duration-300 ${
              isDark ? "border-gray-700 bg-gray-800 text-gray-200" : "border-gray-300 bg-white text-gray-800"
            }`}
          >
            <button
              onClick={() => toggleFaq(index)}
              className="flex items-center w-full px-4 py-4 text-left font-medium focus:outline-none"
            >
              {faq.icon}
              <span className="flex-grow">{faq.question}</span>
              <span className="ml-2">{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <motion.div
                className="px-4 pb-4 text-sm leading-relaxed"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>
      </motion.div>
    </div>
   </section>
  );
};

export default FAQ;
