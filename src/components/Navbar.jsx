import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-24 bg-purple-700 text-white shadow-lg sticky top-0 z-50">
      <div className="w-full px-8 flex justify-between items-center h-full">
        
        {/* Left: Logo + Title */}
        <div className="flex items-center space-x-4">
          <img
            src="/logo.png"
            alt="Zodeck Logo"
            className="w-16 h-16 rounded-full border-2 border-white"
          />
          <span className="text-4xl font-extrabold tracking-wide">
            Zodeck HRMS
          </span>
        </div>

        {/* Right: Nav Links */}
        <div className="flex space-x-12 text-2xl font-bold">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/register" className="hover:underline">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
