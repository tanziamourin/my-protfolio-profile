import { useForm, useFieldArray } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const ProjectUpload = () => {
  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      images: [""], // start with one image input
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  });

  const onSubmit = async (data) => {
    try {
      data.keywords = data.keywords.split(",").map((k) => k.trim());
      data.images = data.images.filter((img) => img.trim() !== ""); // remove empty URLs

      await axios.post("https://my-protfolio-profile-server.vercel.app/api/projects", data);
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

        {/* Image Fields */}
        <div>
          <p className="font-medium mb-1">Image URLs</p>
          {fields.map((field, index) => (
            <div key={field.id} className="flex gap-2 mb-2">
              <input
                type="text"
                {...register(`images.${index}`)}
                placeholder={`Image ${index + 1} URL`}
                className="input input-bordered w-full"
              />
              <button
                type="button"
                className="btn btn-error btn-sm"
                onClick={() => remove(index)}
              >
                ✕
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-outline btn-sm"
            onClick={() => append("")}
          >
            + Add Image
          </button>
        </div>

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

        <input
          type="text"
          placeholder="Live Website Link"
          {...register("live")}
          className="input input-bordered w-full"
        />

        <input
          type="text"
          placeholder="GitHub (Client) Link"
          {...register("clientRepo")}
          className="input input-bordered w-full"
        />

        <input
          type="text"
          placeholder="GitHub (Server) Link"
          {...register("serverRepo")}
          className="input input-bordered w-full"
        />

        <input
          type="number"
          placeholder="Project Duration (Days)"
          {...register("days")}
          className="input input-bordered w-full"
        />

        <button type="submit" className="btn btn-primary w-full">
          Upload Project
        </button>
      </form>
    </div>
  );
};

export default ProjectUpload;
