import React, { useState } from 'react';
import MyImage3 from './images/icons8-home-100 (1).png'
import MyImage4 from './images/icons8-test-account-100 (1).png';
import MyImage2 from './images/icons8-project-100.png'



const ProfilePage = () => {
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
    </div>
  );
};

export default ProfilePage;
