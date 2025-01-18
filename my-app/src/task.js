import React, { useState } from 'react';
import MyImage1 from './images/icons8-home-100 (1).png'
const TaskDetailsPage = () => {

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <header className="fixed top-0 left-0 right-0 bg-slate-800 text-white p-4 flex items-center justify-between shadow-md z-10">
      <div className="flex items-center space-x-4">
          <span className="flex items-center text-lg font-bold mr-6">
            <img src={MyImage1} alt="" className="w-8" />
            <a href="/" className="mt-2">Home</a>
          </span>
        </div>
      </header>
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
