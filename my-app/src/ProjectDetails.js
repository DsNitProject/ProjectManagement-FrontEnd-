import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [members, setMembers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjectDetails = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("You must log in to view project details.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://127.0.0.1:2333/projects/${projectId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const userResponse = await axios.get("http://127.0.0.1:2333/authuser", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setIsAdmin(userResponse.data.role === "admin");

        const { tasks = [], members = [], ...projectDetails } = response.data;
        setProject(projectDetails);
        setTasks(tasks);
        setMembers(members);
      } catch (err) {
        console.error("Error fetching project details:", err);
        setError("Failed to load project details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [projectId]);

  const handleAddTask = async () => {
    const title = prompt("Enter task title:");
    const description = prompt("Enter task description:");
    const token = localStorage.getItem("token");
    if (!title || !description) return alert("Title and description are required!");

    try {
      const response = await axios.post(
        "http://127.0.0.1:2333/tasks",
        {
          title,
          description,
          project_id: projectId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTasks((prevTasks) => [...prevTasks, response.data]);
    } catch (err) {
      console.error("Error adding task:", err);
      alert("Failed to add task.");
    }
  };

  const handleEditTask = async (taskId) => {
    const title = prompt("Enter new title for the task:");
    const description = prompt("Enter new description for the task:");
    const token = localStorage.getItem("token");
    if (!title || !description) return alert("Title and description are required!");

    try {
      const response = await axios.post(
        `http://127.0.0.1:2333/tasks/${taskId}`,
        { title, description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === taskId ? response.data : task))
      );
    } catch (err) {
      console.error("Error editing task:", err);
      alert("Failed to edit task.");
    }
  };

  const handleDeleteTask = async (taskId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    const token = localStorage.getItem("token");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://127.0.0.1:2333/tasks/${taskId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (err) {
      console.error("Error deleting task:", err);
      alert("Failed to delete task.");
    }
  };

  if (loading) {
    return <p className="text-gray-600">Loading project details...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
      {project && (
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 mb-6">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <p className="text-gray-700 mb-6">{project.description}</p>
          <p className="text-sm text-gray-500">
            Start Date: {project.start_date} | End Date: {project.end_date}
          </p>
        </div>
      )}

      {isAdmin && (
        <div className="w-full max-w-4xl flex justify-end mb-4">
          <button
            onClick={handleAddTask}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
          >
            Add Task
          </button>
        </div>
      )}

      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">Tasks</h2>
        {tasks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tasks.map((task) => (
              <div key={task.id} className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-lg font-bold">{task.title}</h3>
                <p className="text-gray-600">{task.description || "No description provided."}</p>
                {isAdmin && (
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={() => handleEditTask(task.id)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No tasks found.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
