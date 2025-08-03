import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
// import ThemeContext from "../context/ThemeContext"; // ⚠️ Make sure this exists

const EmailForm = () => {
  const { isDark } = useContext(ThemeContext);
  const { register, handleSubmit, reset } = useForm();

  const sendEmail = async (data) => {
    const templateParams = {
      from_name: data.from_name,
      from_email: data.from_email,
      message: data.message,
      time: new Date().toLocaleString(),
    };

    try {
      // Email পাঠাও
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // ✅ Backend এ POST করো
      await fetch("http://localhost:5000/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(templateParams),
      });

      Swal.fire("Success!", "Your email has been sent.", "success");
      reset();
    } catch (error) {
      console.error(error);
      Swal.fire("Oops!", "Something went wrong. Please try again.", "error");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(sendEmail)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full max-w-3xl mx-auto p-8 shadow-2xl rounded-[30px] relative overflow-hidden ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Gradient Border Animation */}
      <div className="absolute -inset-[2px] z-[-1]  rounded-[30px] blur-sm animate-pulse"></div>

      <h3
        className={`text-3xl font-extrabold text-center mb-6 ${
          isDark ? "text-white" : "text-gray-800"
        }`}
      >
        ✨ Send Me a Message
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <motion.div whileFocus={{ scale: 1.02 }} className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Your Name *
          </label>
          <input
            type="text"
            placeholder="Ex. John Doe"
            {...register("from_name", { required: true })}
            className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-amber-500 transition-all duration-300"
          />
        </motion.div>

        {/* Email */}
        <motion.div whileFocus={{ scale: 1.02 }} className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Email Address *
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            {...register("from_email", { required: true })}
            className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-amber-500 transition-all duration-300"
          />
        </motion.div>
      </div>

      {/* Message */}
      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
          Message *
        </label>
        <textarea
          rows="6"
          placeholder="Type your message here..."
          {...register("message", { required: true })}
          className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-pink-500 transition-all duration-300"
        ></textarea>
      </div>

      {/* Button */}
      <div className="mt-8 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className={`inline-flex items-center gap-3 px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition duration-300 border-2
      ${
        isDark
          ? "bg-gray-800 text-amber-400 border-amber-600 hover:bg-amber-600 hover:text-gray-900"
          : "bg-white text-cyan-600 border-cyan-400 hover:bg-cyan-600 hover:text-white"
      }
    `}
        >
          <span className="text-xl">✉️</span> Send Email
        </motion.button>
      </div>
    </motion.form>
  );
};

export default EmailForm;
