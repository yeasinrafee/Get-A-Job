import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full md:w-9/12 my-10 mx-auto flex justify-between items-start">
      <h1 className="font-bold text-4xl">GetAJob</h1>
      <nav className="flex gap-10 items-center ">
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
