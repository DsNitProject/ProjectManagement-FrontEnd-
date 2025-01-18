import React from "react";
import "./output.css";
import MyImage2 from './images/icons8-register-100.png';
import MyImage3 from './images/icons8-login-100.png';
import MyImage4 from './images/icons8-human-100.png';
import MyImage5 from './images/premium_photo-1661963588720-838fd19183ee.avif';
import MyImage6 from './images/Project-Management.jpg';
import MyImage7 from './images/R.jpg';
import { useLocation } from "react-router-dom";

function HomePage() {
  return (
    <div className="bg-slate-200">
        <div className="bg-slate-200">
        <header className="fixed top-0 left-0 right-0 bg-slate-800 text-white p-4 flex items-center justify-between shadow-md z-10">
          <div className="flex items-center space-x-4">
            <nav>
              <ul className="flex space-x-6">
                <li className="flex items-center text-lg font-bold mr-6">
                  <img src={MyImage3} alt="Login Icon" className="w-7" />
                  <a href='/login' className="mt-3 ml-1">
                    Login
                  </a>
                </li>
                <li className="flex items-center text-lg font-bold mr-6">
                  <img src={MyImage2} alt="Register Icon" className="w-8" />
                  <a href="/register" className="mt-3 ml-1">
                    Register
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-2">
            <div className="rounded-full bg-blue-50 p-3">
              <img src={MyImage4} alt="User Icon" className="w-8" />
            </div>
            <span className="drop-shadow-[1px_.5px_.5px_gray] text-lg" id="username">
              Username
            </span>
          </div>
        </header>
      </div>
    </div>
  );
}

export default HomePage;
