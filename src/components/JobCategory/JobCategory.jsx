import React, { useEffect, useState } from "react";

const JobCategory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("jobCategory.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="my-20">
      <div className="text-center">
        <h1 className="font-bold text-4xl mb-4">Job Category List</h1>
        <p className="mb-8 text-gray-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="flex justify-between">
        {data.map((job) => (
          <div className="bg-violet-50 py-8 pl-8 pr-20 rounded-md" key={job.id}>
            <img
              className="p-2 bg-violet-100 rounded-md mb-5"
              src={job.img}
              alt=""
            />
            <h2 className="font-bold">{job.title}</h2>
            <p className="text-sm text-gray-400">{job.job}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
