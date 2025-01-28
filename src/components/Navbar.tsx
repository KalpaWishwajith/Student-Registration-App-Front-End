import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <h1 className="text-xl">Student Registration App</h1>
      <div>
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/register" className="mr-4">
          Register
        </Link>
        <Link to="/login" className="mr-4">
          Login
        </Link>
        <Link to="/dashboard" className="mr-4">
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
