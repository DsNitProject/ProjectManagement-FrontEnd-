import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyImage3 from "./images/icons8-login-100.png";
import MyImage4 from "./images/icons8-home-100 (1).png";
import MyImage5 from "./images/icons8-human-100.png";

function RegisterPage() {
  const [skills, setSkills] = useState({ skill1: "", skill2: "", skill3: "", skill4: "" });
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://your-api-endpoint/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, skills }),
      });

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      navigate("/", { state: { successMessage: "Registration successful!" } });
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-between">
      <header className="fixed top-0 left-0 right-0 bg-slate-800 text-white p-4 flex items-center justify-between shadow-md z-10">
        <div className="container mx-auto flex justify-start items-center">
          <span className="flex items-center text-lg font-bold mr-6">
            <img src={MyImage4} alt="" className="w-8" />
            <a href="/" className="mt-2">Home</a>
          </span>
          <nav>
            <ul className="flex space-x-4">
              <li className="flex items-center text-lg font-bold mr-6">
                <img src={MyImage3} alt="" className="w-7" />
                <a href="/login" className="mt-3 ml-1">Login</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-blue-50 p-3">
            <img src={MyImage5} alt="" className="w-14" />
          </div>
          <span className="drop-shadow-[1px_.5px_.5px_gray] text-lg" id="username">Username</span>
        </div>
      </header>

      <main className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 mt-40">
        <h2 className="text-2xl font-bold text-gray-700 text-center drop-shadow-lg mb-6">
          Register
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium drop-shadow-lg text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium drop-shadow-lg text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Skills (Optional):</label>
            <div className="space-y-4">
              {["skill1", "skill2", "skill3", "skill4"].map((skill, index) => (
                <div key={index}>
                  <label htmlFor={skill} className="block text-gray-700 font-semibold">
                    {`Skill ${index + 1}:`}
                  </label>
                  <input
                    type="text"
                    id={skill}
                    name={skill}
                    placeholder={`Enter skill ${index + 1}`}
                    value={skills[skill]}
                    onChange={(e) => setSkills({ ...skills, [skill]: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
              Register
            </button>
            <button type="button" className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition">
              Cancel
            </button>
          </div>
        </form>
      </main>
      <footer className="w-full bg-slate-800 text-white p-6 mt-[3.95rem]">
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
}

export default RegisterPage;
