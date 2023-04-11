import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full md:w-8/12 py-10 px-3 md:px-0 mx-auto flex flex-col md:flex-row justify-between items-start">
      <h1 className="font-bold text-4xl mb-3 md:mb-0">GetAJob</h1>
      <nav className="flex gap-10 items-center mb-4 md:mb-0">
        <NavLink to="/" className="hover:text-violet-400">
          Home
        </NavLink>
        <NavLink to="stats" className="hover:text-violet-400">
          Statistics
        </NavLink>
        <NavLink to="job" className="hover:text-violet-400">
          Applied Job
        </NavLink>
        <NavLink to="blog" className="hover:text-violet-400">
          Blog
        </NavLink>
      </nav>
      <button className="font-bold bg-violet-400 py-3 px-4 text-white rounded-md">
        Start Applying
      </button>
    </div>
  );
};

export default Header;
