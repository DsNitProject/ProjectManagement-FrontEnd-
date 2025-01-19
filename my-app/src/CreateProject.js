import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    start_date: "",
    end_date: "",
    description: "",
    owner_id: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // مدیریت تغییرات فرم
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ارسال داده‌ها به سرور
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token"); // دریافت توکن از localStorage
    if (!token) {
      setError("You must be logged in as an admin to create a project.");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:2333/projects",
        { ...formData },
        {
          headers: {
            Authorization: `Bearer ${token}`, // ارسال توکن برای احراز هویت
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setSuccess("Project created successfully!");
        setFormData({ title: "", start_date: "", end_date: "", description: "" });
        setTimeout(() => navigate("/projects"), 2000); // هدایت به صفحه پروژه‌ها
      }
    } catch (error) {
      console.error("Error creating project:", error);
      setError("Failed to create project. Please check your inputs and try again.");
    }
  };

  return (
    <div className="bg-slate-100 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Create New Project</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Project Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="start_date" className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <input
            type="date"
            id="start_date"
            name="start_date"
            value={formData.start_date}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="end_date" className="block text-sm font-medium text-gray-700">
            End Date
          </label>
          <input
            type="date"
            id="end_date"
            name="end_date"
            value={formData.end_date}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            rows="4"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Create Project
        </button>
      </form>
    </div>
  );
};

export default CreateProject;