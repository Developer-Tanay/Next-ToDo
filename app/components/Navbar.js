"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center h-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg px-6">
        <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
          &#9776;
        </button>
        <div className="text-2xl font-extrabold tracking-wider">
          Next-ToDo
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-200 shadow-xl transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            onClick={toggleSidebar}
            className="text-2xl focus:outline-none"
          >
            &times;
          </button>
        </div>
        <nav className="mt-8 space-y-4 px-6">
          <Link href="/" className="block text-lg text-gray-700 font-semibold hover:text-blue-600 transition duration-200">
            Home
          </Link>
          <Link href="/about" className="block text-lg text-gray-700 font-semibold hover:text-blue-600 transition duration-200">
            About
          </Link>
          <Link href="/contact" className="block text-lg text-gray-700 font-semibold hover:text-blue-600 transition duration-200">
            Contact
          </Link>
        </nav>
        <div className='fixed bottom-0 left-0 w-full text-center'>
          © 2023 Your Company Name. Crafted with ❤️ by <a href="https://github.com/Developer-Tanay" target="_blank">@Developer-Tanay</a>
        </div>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Navbar;
