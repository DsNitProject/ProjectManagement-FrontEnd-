import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyImage3 from "./images/icons8-login-100.png";
import MyImage4 from "./images/icons8-home-100 (1).png";
import MyImage5 from "./images/icons8-human-100.png";

function RegisterPage() {

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
