import React from "react";
import JobCategory from "../JobCategory/JobCategory";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const Home = () => {
  return (
    <div className="w-full md:w-8/12 my-5 md:mx-auto px-3 md:px-0">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-2/5">
          <h1 className="font-bold text-5xl md:text-6xl leading-tight mb-6">
            One Step <br /> Closer To Your{" "}
            <span className="text-violet-400">Dream Job</span>
          </h1>
          <p className=" mb-6 text-gray-500">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="font-bold bg-violet-400 py-3 px-4 text-white rounded-md">
            Get Started
          </button>
        </div>
        <div className="md:w-2/5">
          <img src="./All Images/heroimg.png" alt="" />
        </div>
      </div>
      <JobCategory />
      <FeaturedJob />
    </div>
  );
};

export default Home;
