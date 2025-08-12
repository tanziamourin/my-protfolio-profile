import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ThemeContext from "../Context/ThemeContext";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    axios
      .get("https://my-protfolio-profile-server.vercel.app/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Failed to fetch projects", err));
  }, []);

  return (
    <section className="py-20 px-6 sm:px-12 md:px-20 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2
          className={`md:text-5xl text-4xl font-bold text-center mb-16 ${
            isDark ? "text-gray-200" : "text-gray-800"
          }`}
        >
          My{" "}
          <span className={isDark ? "text-amber-400" : "text-cyan-600"}>
            Projects
          </span>
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative pb-10 rounded-2xl overflow-hidden group transform transition-all duration-500 hover:scale-[1.02] ${
                isDark
                  ? "bg-white/5 border border-white/10"
                  : "bg-white border border-gray-200"
              } shadow-lg hover:shadow-2xl backdrop-blur-lg`}
            >
              {/* Image with Overlay */}
              <div className="relative h-100% w-full overflow-hidden">
                <img
                  src={
                    Array.isArray(project.images)
                      ? project.images[0]
                      : project.image
                  }
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 pointer-events-none"></div>
              </div>

              {/* Content Box */}
              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                >
                  {project.title}
                </h3>
              

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    to={`/projects/${project._id}`}
                    className={`px-4 py-2 rounded-lg text-sm font-medium shadow-md transition-all duration-300 ${
                      isDark
                        ? "bg-amber-500 hover:bg-amber-600"
                        : "bg-cyan-600 hover:bg-cyan-700"
                    } text-white`}
                  >
                    Know More
                  </Link>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
