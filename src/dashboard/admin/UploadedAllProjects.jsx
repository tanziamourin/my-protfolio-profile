import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const UploadedAllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch all projects
  const fetchProjects = async () => {
    const { data } = await axios.get("https://my-protfolio-profile-server.vercel.app/api/projects");
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Delete Project
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this project!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`https://my-protfolio-profile-server.vercel.app/api/projects/${id}`);
        Swal.fire("Deleted!", "Your project has been deleted.", "success");
        fetchProjects();
      }
    });
  };

  // Open edit modal
  const handleEdit = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Update Project
  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(
      `https://my-protfolio-profile-server.vercel.app/api/projects/${selectedProject._id}`,
      selectedProject
    );
    Swal.fire("Updated!", "Project updated successfully.", "success");
    setIsModalOpen(false);
    fetchProjects();
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedProject({ ...selectedProject, [name]: value });
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Uploaded Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project._id}
            className="border rounded-lg p-4 shadow-lg bg-white"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600">{project.features}</p>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => handleEdit(project)}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(project._id)}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg">
            <h3 className="text-xl font-bold mb-4">Edit Project</h3>
            <form onSubmit={handleUpdate} className="space-y-3">
              <input
                name="title"
                value={selectedProject.title}
                onChange={handleChange}
                placeholder="Title"
                className="border p-2 w-full"
              />
              <input
                name="images"
                value={selectedProject.images.join(", ")}
                onChange={(e) =>
                  setSelectedProject({
                    ...selectedProject,
                    images: e.target.value.split(",").map((img) => img.trim()),
                  })
                }
                placeholder="Images (comma separated)"
                className="border p-2 w-full"
              />
              <input
                name="keywords"
                value={selectedProject.keywords.join(", ")}
                onChange={(e) =>
                  setSelectedProject({
                    ...selectedProject,
                    keywords: e.target.value.split(",").map((k) => k.trim()),
                  })
                }
                placeholder="Keywords (comma separated)"
                className="border p-2 w-full"
              />
              <textarea
                name="features"
                value={selectedProject.features}
                onChange={handleChange}
                placeholder="Features"
                className="border p-2 w-full"
              />
              <input
                name="live"
                value={selectedProject.live || ""}
                onChange={handleChange}
                placeholder="Live Link"
                className="border p-2 w-full"
              />
              <input
                name="clientRepo"
                value={selectedProject.clientRepo || ""}
                onChange={handleChange}
                placeholder="Client Repo"
                className="border p-2 w-full"
              />
              <input
                name="serverRepo"
                value={selectedProject.serverRepo || ""}
                onChange={handleChange}
                placeholder="Server Repo"
                className="border p-2 w-full"
              />
              <input
                type="number"
                name="days"
                value={selectedProject.days || ""}
                onChange={handleChange}
                placeholder="Days"
                className="border p-2 w-full"
              />
              <textarea
                name="challenges"
                value={selectedProject.challenges || ""}
                onChange={handleChange}
                placeholder="Challenges"
                className="border p-2 w-full"
              />
              <textarea
                name="futurePlans"
                value={selectedProject.futurePlans || ""}
                onChange={handleChange}
                placeholder="Future Plans"
                className="border p-2 w-full"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-400 text-white rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadedAllProjects;
