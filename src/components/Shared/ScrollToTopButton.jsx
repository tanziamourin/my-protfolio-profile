// src/components/ScrollToTopButton.jsx
import { useContext, useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import ThemeContext from "../../Context/ThemeContext";

const ScrollToTopButton = () => {
   const { isDark } = useContext(ThemeContext);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
     <button
  onClick={scrollToTop}
  className={`fixed bottom-5 right-5 p-3 rounded-full shadow-lg z-50 transition 
    ${isDark ? "bg-amber-400 text-gray-800 hover:bg-amber-600" : "bg-cyan-600 text-white hover:bg-cyan-400"}`}
  aria-label="Scroll to top"
>
  <FaArrowUp className="animate-bounce" />
</button>

    )
  );
};

export default ScrollToTopButton;
