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
    </div>
  );
};

export default TaskDetailsPage;
