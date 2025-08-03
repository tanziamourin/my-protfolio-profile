// Login.jsx
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async ({ email, password }) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      const response = await fetch(`http://localhost:5000/api/users/${email}`);

     
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const userData = await response.json();

      if (userData.role !== "admin") {
        Swal.fire({
          icon: "error",
          title: "Unauthorized",
          text: "Only admins can log in!",
        });
        return;
      }

  
     
// Login success
localStorage.setItem("role", userData.role);

Swal.fire({
  icon: "success",
  title: "Login Successful",
  text: "Welcome admin!",
}).then(() => {
  window.location.href = "/dashboard"; // ❗ force reload, context reinitialize
});




      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error.message);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message,
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
          required
        />
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
          required
        />
        <button type="submit" className="btn btn-primary w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
