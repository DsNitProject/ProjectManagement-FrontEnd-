import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MyImage1 from './images/icons8-home-100 (1).png';
import MyImage2 from './images/icons8-project-100.png'
import MyImage3 from './images/icons8-human-100.png';

const UserProfile = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    skills: '',
  });


  useEffect(() => {
    const fetchUserData = async () => {
      try {

        const response = await axios.get('/api/user/profile');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">

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
                <a href="/Projects" className="mt-3 ml-1">Project</a>
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

      <main className="flex-1 p-6 bg-white rounded-lg shadow-lg w-1/4 max-w-5xl mx-auto mt-60 mb-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Profile Information</h2>

        <div className="mt-8 mb-8 ">
          <label className="block text-gray-600 font-semibold">Name:</label>
          <p>{userData.name}</p>
        </div>

        <div className="mb-8">
          <label className="block text-gray-600 font-semibold">Email:</label>
          <p>{userData.email}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">Skills:</label>
          <p>{userData.skills}</p>
        </div>

        {/* Edit Button */}
        <div className="mt-16">
          <a
            href="/prfileEdit"
            className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600"
          >
            Edit Profile
          </a>
        </div>
      </main>

      {/* Footer */}
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

export default UserProfile;
