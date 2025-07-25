import React, { useEffect, useState } from "react";
import axios from "axios";
import MyImage1 from './images/icons8-home-100 (1).png';
import MyImage2 from './images/icons8-administrator-male-100.png';
import MyImage3 from './images/icons8-human-100.png';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);

  const toggleProjectContent = (projectId) => {
    setActiveProject((prevProject) =>
      prevProject === projectId ? null : projectId
    );
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("https://example.com/api/projects", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  // ارسال ID پروژه به بک‌اند هنگام کلیک روی دکمه
  const handleGoToProject = async (projectId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://example.com/api/project-tasks",
        { projectId }, // ارسال ID پروژه
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Response from backend:", response.data);
      // هدایت به صفحه تسک‌ها
      window.location.href = `/task/${projectId}`;
    } catch (error) {
      console.error("Error sending project ID:", error);
    }
  };

  return (
    <div className="bg-slate-300 min-h-screen flex flex-col items-center">
      <header className="fixed top-0 left-0 right-0 bg-slate-800 text-white p-4 flex items-center justify-between shadow-md z-10">
        <div className="flex items-center space-x-4">
          <nav>
            <ul className="flex space-x-6">
              <li className="flex items-center text-lg font-bold mr-6">
                <img src={MyImage1} alt="Login Icon" className="w-7" />
                <a href="/home" className="mt-3 ml-1">Home</a>
              </li>
              <li className="flex items-center text-lg font-bold mr-6">
                <img src={MyImage2} alt="Register Icon" className="w-8" />
                <a href="/profile" className="mt-3 ml-1">Profile</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-blue-50 p-3">
            <img src={MyImage3} alt="User Icon" className="w-8" />
          </div>
          <span className="drop-shadow-[1px_.5px_.5px_gray] text-lg" id="username">
            Username
          </span>
        </div>
      </header>
      <main className="bg-gray-100 w-2/4 max-w-4xl h-[50vh] rounded-lg shadow-lg p-6 mt-56 overflow-y-auto">
        <div className="space-y-6">
          {projects.length === 0 ? (
            <p className="text-gray-600">No projects found.</p>
          ) : (
            projects.map((project) => (
              <div key={project.id} className="bg-gray-200 shadow-lg rounded-lg p-10 project">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-700">{project.name}</h2>
                  <button
                    className="toggle-btn text-gray-500 text-xl"
                    onClick={() => toggleProjectContent(project.id)}
                  >
                    {activeProject === project.id ? '▲' : '▼'}
                  </button>
                </div>
                {activeProject === project.id && (
                  <div className="hidden-content mt-4">
                    <p className="text-gray-600">Start Date: {project.startDate}</p>
                    <p className="text-gray-600">End Date: {project.endDate}</p>
                    <div className="bg-gray-100 border border-gray-300 rounded-md h-24 overflow-y-auto p-2 mt-2">
                      <ul className="list-disc pl-5 text-gray-600">
                        {project.tasks.map((task, index) => (
                          <li key={index}>{task}</li>
                        ))}
                      </ul>
                    </div>
                    <button
                      className="mt-4 inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600"
                      onClick={() => handleGoToProject(project.id)} // ارسال ID پروژه
                    >
                      Go to Project
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </main>
      <footer className="w-full bg-slate-800 text-white p-6 mt-[6.98rem]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <ul className="space-y-2">
            <li className="-ml-3">Contact Us</li>
            <li style={{ listStyle: 'disc' }}>About Us</li>
            <li style={{ listStyle: 'disc' }}>Site Management</li>
          </ul>
          <ul className="space-y-2">
            <li className="-ml-3">Information Base</li>
            <li style={{ listStyle: 'disc' }}>Ministry of Science, Research and Technology</li>
            <li style={{ listStyle: 'disc' }}>Vice President for Science and Technology</li>
          </ul>
          <ul className="space-y-2">
            <li className="-ml-3">Secretariat Address</li>
            <li style={{ listStyle: 'disc' }}>Address: Babol Noshirvani University of Technology</li>
            <li style={{ listStyle: 'disc' }}>Phone: 09370117891 / 09035912910</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default ProjectsPage;
