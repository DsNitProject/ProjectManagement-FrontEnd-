import React, { useState } from 'react';
import MyImage1 from './images/icons8-home-100 (1).png'
const TaskDetailsPage = () => {
  const [activeTask, setActiveTask] = useState(null);
  
  const [taskStatus, setTaskStatus] = useState({
    1: 'in-progress',
  });

  const handleTaskToggle = (taskId) => {
    setActiveTask((prevActiveTask) => (prevActiveTask === taskId ? null : taskId));
  };

  const handleStatusChange = (taskId, newStatus) => {
    setTaskStatus((prevStatus) => ({
      ...prevStatus,
      [taskId]: newStatus,
    }));
  };

  const tasks = [
    {
      id: 1,
      name: 'Task 1',
      startDate: '2023-01-01',
      endDate: '2023-01-15',
      details: 'Complete the initial setup of the project.',
      initialStatus: 'in-progress',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-slate-800 text-white p-4 flex items-center justify-between shadow-md z-10">
      <div className="flex items-center space-x-4">
          <span className="flex items-center text-lg font-bold mr-6">
            <img src={MyImage1} alt="" className="w-8" />
            <a href="/" className="mt-2">Home</a>
          </span>
        </div>
      </header>

      <main className="bg-white w-3/4 max-w-5xl mt-60 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Name</h2>

        <div className="flex justify-between mb-6">
          <p className="text-gray-600">
            Start Date: <span className="font-semibold">2023-01-01</span>
          </p>
          <p className="text-gray-600">
            End Date: <span className="font-semibold">2023-12-31</span>
          </p>
        </div>

        <div className="bg-gray-200 rounded-md p-4 overflow-y-auto h-60 mb-6">
          <ul className="space-y-4">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="task-item bg-white rounded-md p-4 shadow cursor-pointer"
                onClick={() => handleTaskToggle(task.id)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{task.name}</span>
                  <span
                    className={`task-status text-sm px-2 py-1 rounded ${
                      taskStatus[task.id] === 'in-progress'
                        ? 'bg-blue-500'
                        : taskStatus[task.id] === 'completed'
                        ? 'bg-green-500'
                        : 'bg-gray-500'
                    } text-white`}
                  >
                    {taskStatus[task.id] === 'in-progress'
                      ? 'In Progress'
                      : taskStatus[task.id] === 'completed'
                      ? 'Completed'
                      : 'Suspended'}
                  </span>
                </div>

                {activeTask === task.id && (
                  <div className="task-details mt-4">
                    <p className="text-gray-600 mb-2">Details: {task.details}</p>
                    <p className="text-gray-600 mb-2">
                      Start Date: <span className="font-semibold">{task.startDate}</span>
                    </p>
                    <p className="text-gray-600 mb-2">
                      End Date: <span className="font-semibold">{task.endDate}</span>
                    </p>

                    <div className="mb-4">
                      <label htmlFor="status" className="block text-gray-700 font-semibold">
                        Status:
                      </label>
                      <select
                        className="task-status-select w-full p-2 border border-gray-300 rounded"
                        value={taskStatus[task.id]}
                        onChange={(e) => handleStatusChange(task.id, e.target.value)}
                      >
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                        <option value="suspended">Suspended</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="file-upload"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Attach File:
                      </label>
                      <input type="file" id="file-upload" className="w-full p-2 border border-gray-300 rounded" />
                    </div>

                    <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 w-full">
                      Send
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </main>

      <footer className="w-full bg-slate-800 text-white p-6 mt-[9.95rem]">
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
            <li style={{ listStyle: 'disc' }}>
              Address: Babol Noshirvani University of Technology
            </li>
            <li style={{ listStyle: 'disc' }}>Phone: 09370117891 / 09035912910</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default TaskDetailsPage;
