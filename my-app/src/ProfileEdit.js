import React, { useState } from 'react';
import MyImage3 from './images/icons8-home-100 (1).png'
import MyImage4 from './images/icons8-test-account-100 (1).png';
import MyImage2 from './images/icons8-project-100.png'



const ProfilePage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [skills, setSkills] = useState({
    skill1: '',
    skill2: '',
    skill3: '',
    skill4: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, email, password, skills });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <header className="fixed top-0 left-0 right-0 bg-slate-800 text-white p-4 flex items-center justify-between shadow-md z-10">
        <div className="container mx-auto flex justify-start items-center">
          <span className="flex items-center text-lg font-bold mr-6">
            <img
              src={MyImage3}
              alt=""
              className="w-8"
            />
            <a href="/" className="mt-2">Home</a>
          </span>
          <nav>
            <ul className="flex space-x-6">
              <li className="flex items-center text-lg font-bold mr-6">
                <img src={MyImage2} alt="Register Icon" className="w-8" />
                <a href="/Projects" className="mt-3 ml-1">
                  Project
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="bg-white w-3/4 max-w-3xl mt-40 rounded-lg shadow-lg p-6">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-primary text-white p-4 rounded-full">
          <img src={MyImage4} alt="Login Icon" className="w-32" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Edit Your Profile</h2>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Skills (Optional):</label>
            <div className="space-y-4">
              {['skill1', 'skill2', 'skill3', 'skill4'].map((skill, index) => (
                <div key={index}>
                  <label htmlFor={skill} className="block text-gray-700 font-semibold">{`Skill ${index + 1}:`}</label>
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

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
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

export default ProfilePage;
