import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const [data, setData] = useState({});
  const { jobId } = useParams();

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setData(data.find((d) => d.id == jobId)));
  }, []);

  console.log(data);
  return (
    <div className="w-full md:w-8/12 my-5 md:mx-auto px-3 md:px-0">
      <h1 className="font-bold text-center text-3xl">Job Details</h1>
    </div>
  );
};

export default JobDetails;
