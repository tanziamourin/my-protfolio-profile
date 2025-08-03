import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const ProjectUpload = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:5000/projects", data);
      Swal.fire("Uploaded!", "Project added successfully", "success");
      reset();
    } catch (err) {
      Swal.fire("Error", "Failed to upload project", "error");
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Upload New Project</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-xl">
        <input
          type="text"
          placeholder="Project Title"
          {...register("title", { required: true })}
          className="input input-bordered w-full"
        />

        <input
          type="text"
          placeholder="Image URL"
          {...register("image", { required: true })}
          className="input input-bordered w-full"
        />

        <input
          type="text"
          placeholder="Keywords (comma separated)"
          {...register("keywords")}
          className="input input-bordered w-full"
        />

        <textarea
          placeholder="Features / Description"
          {...register("features", { required: true })}
          rows={4}
          className="textarea textarea-bordered w-full"
        ></textarea>

        <button type="submit" className="btn btn-primary w-full">
          Upload Project
        </button>
      </form>
    </div>
  );
};

export default ProjectUpload;
