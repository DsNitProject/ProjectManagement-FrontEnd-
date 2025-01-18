import React from "react";

import MyImage2 from './images/icons8-register-100.png';
import MyImage4 from './images/icons8-home-100 (1).png';
import MyImage5 from './images/icons8-human-100.png';

const RegisterPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-evenly">
      <header className="fixed top-0 left-0 right-0 bg-slate-800 text-white p-4 flex items-center justify-between shadow-md z-10">
        <div className="container mx-auto flex justify-start items-center">
          <span className="flex items-center text-lg font-bold mr-6">
            <img src={MyImage4} alt="Home Icon" className="w-8" />
            <a href="/" className="mt-2">Home</a>
          </span>
          <nav>
            <ul className="flex space-x-4">
              <li className="flex items-center text-lg font-bold mr-6">
                <img src={MyImage2} alt="Register Icon" className="w-7" />
                <a href="/register" className="mt-3 ml-1">Register</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-blue-50 p-3">
            <img src={MyImage5} alt="User Icon" className="w-14" />
          </div>
          <span className="drop-shadow-[1px_.5px_.5px_gray] text-lg" id="username">
            Username
          </span>
        </div>
      </header>
      <main className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 mt-72">
        <h2 className="text-2xl font-bold text-gray-700 text-center drop-shadow-lg mb-6">Login</h2>
        <form action="#" method="POST">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium drop-shadow-lg text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="name"
              name="name"
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
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"
            />
          </div>
          <div className="flex justify-center space-x-4">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition"
            >
              Login
            </button>
            <button
              type="button"
              className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </main>
      <footer className="w-full bg-slate-800 text-white p-6 mt-[12.8rem]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <ul className="space-y-2">
            <li className="-ml-3">Contact Us</li>
            <li style={{ listStyle: "disc" }}>About Us</li>
            <li style={{ listStyle: "disc" }}>Site Management</li>
          </ul>
          <ul className="space-y-2">
            <li className="-ml-3">Information Base</li>
            <li style={{ listStyle: "disc" }}>Ministry of Science, Research and Technology</li>
            <li style={{ listStyle: "disc" }}>Vice President for Science and Technology</li>
          </ul>
          <ul className="space-y-2">
            <li className="-ml-3">Secretariat Address</li>
            <li style={{ listStyle: "disc" }}>Address: Babol Noshirvani University of Technology</li>
            <li style={{ listStyle: "disc" }}>Phone: 09370117891 / 09035912910</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default RegisterPage;
