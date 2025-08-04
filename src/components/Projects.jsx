import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { FaGithub, FaPlayCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ThemeContext from "../Context/ThemeContext";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [imageIndexes, setImageIndexes] = useState({});
  const { isDark } = useContext(ThemeContext);
    const btnBg = isDark ? "bg-amber-500" : "bg-cyan-600";
  const btnHover = isDark ? "hover:bg-amber-600" : "hover:bg-cyan-700";
  const btnText = "text-white";

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => {
        setProjects(res.data);
        // Initialize each image index to 0
        const indexes = {};
        res.data.forEach((project) => {
          indexes[project._id] = 0;
        });
        setImageIndexes(indexes);
      })
      .catch((err) => console.error("Failed to fetch projects", err));
  }, []);

  const handlePrev = (id, totalImages) => {
    setImageIndexes((prev) => ({
      ...prev,
      [id]: (prev[id] - 1 + totalImages) % totalImages,
    }));
  };

  const handleNext = (id, totalImages) => {
    setImageIndexes((prev) => ({
      ...prev,
      [id]: (prev[id] + 1) % totalImages,
    }));
  };

  const bgColor = isDark ? "bg-gray-900" : "bg-white";
  const textColor = isDark ? "text-gray-200" : "text-gray-800";
  const accentColor = isDark ? "text-amber-400" : "text-cyan-600";
  const borderColor = isDark ? "border-amber-500" : "border-cyan-500";
  const shadowColor = isDark ? "shadow-amber-800" : "shadow-cyan-300";

  return (
    <section className="py-24 px-6 sm:px-12 md:px-20 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
      

         <h2
            className={`text-4xl sm:text-5xl text-center font-extrabold mb-6 ${textColor}`}
          >
             My <span className={accentColor}>Projects</span>
          </h2>
        <p className={`text-center ${textColor} opacity-90 mb-16 text-lg`}>
          A collection of projects that showcase my skills and passion for
          building modern web applications.
        </p>

        <div className="space-y-20">
          {projects.map((project) => {
            const currentIndex = imageIndexes[project._id] || 0;
            const images = Array.isArray(project.images) ? project.images : [project.image];

            return (
              <div
                key={project._id}
                className={`grid grid-cols-8 gap-10 p-10 relative items-start rounded-3xl overflow-hidden border ${borderColor} shadow-lg ${shadowColor} ${bgColor}`}
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute -top-10 -right-10 w-48 h-48 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-full opacity-20 blur-3xl pointer-events-none"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-amber-400 to-red-500 rounded-full opacity-20 blur-3xl pointer-events-none"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                />

                {/* Image with navigation */}
                <div className="col-span-3  relative h-80 overflow-hidden">
                  <img
                    src={images[currentIndex]}
                    alt={project.title}
                    className="w-full h-full  object-cover rounded-l-3xl"
                  />
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={() => handlePrev(project._id, images.length)}
                        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                      >
                        <FaChevronLeft />
                      </button>
                      <button
                        onClick={() => handleNext(project._id, images.length)}
                        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                      >
                        <FaChevronRight />
                      </button>
                    </>
                  )}
                </div>

                {/* Details */}
                <div className="w-full col-span-5 p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <h3 className={`text-2xl font-bold ${accentColor}`}>
                      {project.title}
                    </h3>
                    {project.days && (
                      <span className="text-sm text-gray-500">
                        {project.days} days
                      </span>
                    )}
                  </div>

                  <p className={`text-sm ${textColor} opacity-90`}>
                    {project.features}
                  </p>

                  {project.keywords && Array.isArray(project.keywords) && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.keywords.map((keyword, i) => (
                        <span
                          key={i}
                          className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-3 py-1 text-sm rounded-full shadow-sm"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="mt-4 flex flex-wrap gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={` px-4 py-3 flex gap-2 rounded-sm font-semibold shadow-lg transition-colors duration-300 ${btnBg} ${btnText} ${btnHover} hover:scale-105`}
                      >
                        <FaPlayCircle  className="mt-1"/> Live Preview
                      </a>
                    )}
                    {project.clientRepo && (
                      <a
                        href={project.clientRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white border border-yellow-500 text-yellow-600 px-4 py-2 rounded-lg hover:bg-yellow-100 transition"
                      >
                        <FaGithub /> Client Repo
                      </a>
                    )}
                    {project.serverRepo && (
                      <a
                        href={project.serverRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white border border-yellow-500 text-yellow-600 px-4 py-2 rounded-lg hover:bg-yellow-100 transition"
                      >
                        <FaGithub /> Server Repo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;







