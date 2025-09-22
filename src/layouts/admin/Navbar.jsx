import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ title }) => {
  return (
    <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-row items-center">
        <Link to="/admin" className="cursor-pointer">
          <img className="w-[5%] rounded-full" src="/logo.png" alt="" />
        </Link>
        <Link
          to="/logout"
          className="bg-charkol text-yellow p-2 py-1 duration-500 cursor-pointer hover:scale-95 rounded-md"
        >
          Logout
        </Link>
      </div>
    </header>
  );
};
export default Navbar;
