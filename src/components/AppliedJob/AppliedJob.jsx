import React from "react";
import { Link } from "react-router-dom";

const AppliedJob = () => {
  const data = JSON.parse(localStorage.getItem("jobs"));
  return (
    <div className="w-full md:w-8/12 my-10 mx-auto">
      {data.map((d) => (
        <div className="flex justify-between items-center m-5 border p-6 rounded-md">
          <div className="flex gap-7 items-center">
            <div className="bg-red-50 py-14 px-6 rounded-md">
              <img className="w-32 h-12" src={d.logo} alt="" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-600 mb-1">
                {d.title}
              </h3>
              <p className="text-gray-500 mb-2">{d.sub_title}</p>
              <div className="flex gap-4 mb-3">
                {d.type.map((jType, index) => (
                  <p
                    key={index}
                    className="text-violet-400 border border-violet-400 px-2 py-1 rounded-sm font-bold text-sm"
                  >
                    {jType}
                  </p>
                ))}
              </div>
              <div className="flex gap-4 text-gray-500 mb-6">
                <p>⬇️ {d.Location}</p>
                <p>💲Salary: {d.salary}</p>
              </div>
            </div>
          </div>
          <div>
            <Link to={`/${d.id}`}>
              <button className="bg-violet-400 px-3 py-2 text-white text-lg rounded-md">
                View Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppliedJob;
