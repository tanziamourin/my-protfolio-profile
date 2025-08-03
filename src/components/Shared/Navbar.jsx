import React, { useContext, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiMenuFold2Fill } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import ThemeContext from "../../Context/ThemeContext";
import { NavbarLogo } from "./NavbarLogo";


const navItems = [
  { id: "home", label: "Home" },
 
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const { isDark } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const baseClass = `px-3 py-1 rounded-2xl transition duration-300 ease-in-out ${
    isDark ? "text-white" : "text-gray-800"
  }`;
  const activeClass = isDark
    ? "bg-amber-400 text-gray-800 hover:bg-amber-600"
    : "bg-cyan-600 text-white hover:bg-cyan-400";
  const toggleBg = isDark ? "hover:text-amber-600" : "hover:text-cyan-600";
  const navText = isDark ? "text-white" : "text-black";

  useEffect(() => {
    // Check if role exists in localStorage
    const role = localStorage.getItem("role");
    if (role) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section && scrollY >= section.offsetTop) {
          setActiveId(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <div className="animated-border2 rounded-2xl p-[1px] sticky top-0 z-50 backdrop-blur-md border-b max-w-4xl mx-auto border-gray-300/20">
      <nav className="px-8 py-3 rounded-[0.9rem] shadow-sm">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <NavbarLogo />

          {/* Desktop Nav */}
          <div className="items-center hidden gap-6 md:flex">
            {navItems.map(({id, label  }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`${baseClass} hover:scale-70 ${
                  activeId === id ? activeClass : ""
                }`}
              >
                <span className="text-md">{label}</span>
              </a>
            ))}
         
            {/* ✅ Conditional button */}
            <NavLink
              to={isLoggedIn ? "/dashboard" : "/login"}
              className={`font-semibold ${isDark ? "text-white" : "text-black"}`}
            >
              {isLoggedIn ? "Dashboard" : "Login"}
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <div className="block md:hidden">
            <button
              className={`transition-colors ${toggleBg}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <IoMdClose size={28} /> : <RiMenuFold2Fill size={25} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className={`md:hidden font-semibold mt-4 ${navText} flex flex-col gap-3`}
            >
              {navItems.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={handleLinkClick}
                  className={`${baseClass} hover:scale-110 ${
                    activeId === id ? activeClass : ""
                  }`}
                >
                  <span className="text-md">{label}</span>
                </a>
              ))}
              {/* ✅ Mobile Login/Dashboard link */}
              <NavLink
                to={isLoggedIn ? "/dashboard" : "/login"}
                onClick={handleLinkClick}
                className={`text-sm underline mt-2 ${navText}`}
              >
                {isLoggedIn ? "Dashboard" : "Login"}
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
