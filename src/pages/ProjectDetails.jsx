import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import ThemeContext from "../Context/ThemeContext";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    axios
      .get(`https://my-protfolio-profile-server.vercel.app/api/projects/${id}`)
      .then((res) => setProject(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <section
      className={`py-16 min-h-screen ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-10 text-center"
        >
          {project.title}
        </motion.h1>

        {/* Swiper Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="rounded-xl shadow-lg"
          >
            {project.images?.map((img, i) => (
              <SwiperSlide
                key={i}
                className="flex justify-center items-center bg-gray-100 dark:bg-gray-800"
              >
                <img
                  src={img}
                  alt={`Project Image ${i + 1}`}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Tech Stack */}
        <h2 className="text-2xl font-semibold mb-3">Main Technology Stack</h2>
        <div className="flex flex-wrap gap-2 mb-10">
          {project.keywords?.map((tech, i) => (
            <span
              key={i}
              className={`px-4 py-1 rounded-full text-sm font-medium shadow-sm ${
                isDark
                  ? "bg-amber-500/20 text-amber-400 border border-amber-500"
                  : "bg-cyan-100 text-cyan-700 border border-cyan-300"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-semibold mb-2">Project Features</h2>
          <p className="leading-relaxed opacity-90">{project.features}</p>
        </motion.div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mb-12">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2 rounded-full font-medium shadow-md ${
                isDark
                  ? "bg-amber-500 text-black hover:bg-amber-600"
                  : "bg-cyan-600 text-white hover:bg-cyan-700"
              } transition-colors`}
            >
              Live Preview
            </a>
          )}
          {project.clientRepo && (
            <a
              href={project.clientRepo}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2 rounded-full font-medium border ${
                isDark
                  ? "border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black"
                  : "border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white"
              } transition-colors`}
            >
              Client Repository
            </a>
          )}
        </div>

        {/* Challenges */}
        {project.challenges && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Challenges Faced</h2>
            <p className="leading-relaxed opacity-90">{project.challenges}</p>
          </div>
        )}

        {/* Future Plans */}
        {project.futurePlans && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Future Plans</h2>
            <p className="leading-relaxed opacity-90">{project.futurePlans}</p>
          </div>
        )}

        {/* Duration */}
        {project.days && (
          <p className="text-sm opacity-70 italic">
            Duration: {project.days} days
          </p>
        )}

        {/* Back Button */}
        <div className="mt-10">
          <Link
            to="/"
            className={`px-6 py-3 rounded-full font-semibold shadow-lg ${
              isDark
                ? "bg-amber-500 text-white hover:bg-amber-600"
                : "bg-cyan-600 text-white hover:bg-cyan-700"
            } transition-all`}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
