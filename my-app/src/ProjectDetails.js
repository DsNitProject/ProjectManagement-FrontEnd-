import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [members, setMembers] = useState([]);
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

        const { project, tasks, members } = response.data;
        setProject(project);
        setTasks(tasks);
        setMembers(members);
      } catch (err) {
        setError("Failed to load project details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [projectId]);

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

      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">Tasks</h2>
        {tasks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tasks.map((task) => (
              <div key={task.id} className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-lg font-bold">{task.title}</h3>
                <p className="text-gray-600">{task.description}</p>
                <p
                  className={`mt-2 text-sm ${
                    task.status === "done"
                      ? "text-green-500"
                      : task.status === "in_progress"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  Status: {task.status}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Priority: {task.priority}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No tasks found.</p>
        )}
      </div>

      <div className="w-full max-w-4xl mt-8">
        <h2 className="text-2xl font-bold mb-4">Members</h2>
        {members.length > 0 ? (
          <ul className="space-y-4">
            {members.map((member) => (
              <li
                key={member.id}
                className="bg-white shadow-md rounded-lg p-4 flex items-center"
              >
                <div className="flex-shrink-0 bg-blue-200 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold text-blue-600">
                  {member.name[0]}
                </div>
                <div className="ml-4">
                  <p className="text-lg font-bold">{member.name}</p>
                  <p className="text-sm text-gray-600">{member.email}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No members found.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
