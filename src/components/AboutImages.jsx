import React, { useContext } from "react";
import { motion } from "framer-motion";
import ThemeContext from "../Context/ThemeContext";
// import myImg from "../assets/WhatsApp Image 2025-06-15 at 23.21.44_c90ec495.jpg";

const AboutImages = () => {
  const { isDark } = useContext(ThemeContext);

  const borderColor = isDark ? "border-amber-500" : "border-cyan-500";

  return (
    <section
      id="about"
      className={`py-20 px-6 md:px-12 rounded-2xl max-w-7xl mx-auto`}
    >
      <div className="flex flex-col items-center gap-12 md:flex-row">
        {/* Responsive Image Container */}
        <div className="relative w-full max-w-sm h-[320px] md:w-[300px] md:h-[300px] mx-auto">
          {/* Image 1 */}
          <motion.img
            src="https://i.ibb.co/kVwX7ZzV/Whats-App-Image-2025-06-25-at-11-47-06-c24bd1b9.jpg"
            alt="About Image 1"
            className={`w-[250px] h-[250px] md:w-[280px] md:h-[240px] object-cover rounded-lg  shadow-lg md:absolute border-4 ${borderColor} z-20
              bottom-20 right-6 md:bottom-20 md:right-20
            `}
            whileInView={{ y: [0, -30, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.5 }}
          />

          {/* Image 2 */}
          <motion.img
            src="https://i.ibb.co.com/KjVtxhQ5/Whats-App-Image-2025-08-12-at-12-07-41-8b73bb01.jpg"
            alt="About Image 2"
            className={`w-[250px] h-[250px] md:w-[280px] md:h-[240px] object-cover rounded-lg shadow-lg absolute border-4 ${borderColor} z-20
              top-25 left-6 md:top-30 md:left-10
            `}
            whileInView={{ x: [0, 30, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            viewport={{ once: false, amount: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutImages;
