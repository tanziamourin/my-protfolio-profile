import { useContext } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaUserTie } from "react-icons/fa";
import EmailForm from "../components/EmailForm";
import ThemeContext from "../Context/ThemeContext";

const ContactSection = () => {

  // const [activeForm, setActiveForm] = useState("contact");
   const { isDark } = useContext(ThemeContext);
   const bgColor = isDark ? "bg-gray-900" : "bg-white";
   const accentColor = isDark ? "text-amber-400" : "text-cyan-600";

  return (
    <section id="contact" className={`${bgColor} py-20 my-20  px-6 sm:px-12 md:px-20 rounded-3xl max-w-7xl mx-auto relative overflow-hidden`}>

         {/* Background shape */}
                <motion.div
                  className="absolute -top-20 -right-40 w-[350px] h-[350px] bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-full opacity-20 blur-3xl pointer-events-none"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
          
                <motion.div
                  className="absolute -bottom-20 -left-40 w-[350px] h-[350px] bg-gradient-to-tr from-amber-400 to-red-500 rounded-full opacity-20 blur-3xl pointer-events-none"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* ✅ Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <p className={`text-sm ${accentColor}font-medium mb-2`}>Get in Touch</p>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Let’s Work on <br />
              <span className={` italic ${accentColor}`}>Your Next Project</span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-base">
              I’m open to freelance work, collaboration or even just a chat. Drop me a line — let’s make ideas happen!
            </p>
          </div>

<div className="space-y-4 text-gray-700 dark:text-gray-300">
  <div className="flex items-center gap-3">
    <FiPhone className={`text-lg ${accentColor}`} />
    <span>+8801*****</span>
  </div>
  <div className="flex items-center gap-3">
    <FiMail className={`text-lg ${accentColor}`} />
    <span>tanziamourin68@gmail.com</span>
  </div>
  <div className="flex items-center gap-3">
    <FiMapPin className={`text-lg ${accentColor}`} />
    <span>Hobiganj, Sylhet, Bangladesh</span>
  </div>

  {/* GitHub */}
  <a
    href="https://github.com/tanziamourin"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 hover:underline"
  >
    <FaGithub className={`text-lg ${accentColor}`} />
    <span>GitHub</span>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/tanzia-mourin-chowdhury-5699a02b6/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 hover:underline"
  >
    <FaLinkedin className={`text-lg ${accentColor}`} />
    <span>LinkedIn</span>
  </a>

  {/* Freelancer */}
  <a
    href="https://www.freelancer.com.bd/u/tanziamourin21"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 hover:underline"
  >
    <FaUserTie className={`text-lg ${accentColor}`} />
    <span>Freelancer</span>
  </a>
</div>

        </motion.div>

        {/* ✅ Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=" "
        >
         <EmailForm></EmailForm>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
