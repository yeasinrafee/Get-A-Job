import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  // console.log(job);
  return (
    <div className="border p-8 rounded-md">
      <img className="mb-6" src={job.logo} alt="" />
      <h3 className="font-bold text-xl text-gray-600 mb-1">{job.title}</h3>
      <p className="text-gray-500 mb-2">{job.sub_title}</p>
      <div className="flex gap-4 mb-3">
        {job.type.map((jType, index) => (
          <p
            key={index}
            className="text-violet-400 border border-violet-400 px-2 py-1 rounded-sm font-bold text-sm"
          >
            {jType}
          </p>
        ))}
      </div>
      <div className="flex gap-4 text-gray-500 mb-6">
        <p>⬇️ {job.Location}</p>
        <p>💲Salary: {job.salary}</p>
      </div>
      <Link to={`/${job.id}`}>
        <button className="bg-violet-400 text-md text-white px-3 py-1.5 rounded-sm">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default JobCard;
