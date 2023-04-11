import React, { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";

const FeaturedJob = () => {
  const [jobData, setData] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="my-24">
      <div className="text-center">
        <h1 className="font-bold text-4xl mb-4">Featured Jobs</h1>
        <p className="mb-8 text-gray-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div>
        {jobData && jobData.map((job) => <JobCard key={job.id} job={job} />)}
      </div>
    </div>
  );
};

export default FeaturedJob;
