import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

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
    <div className="w-full md:w-8/12 my-10 md:mx-auto px-3 md:px-0">
      <h1 className="font-bold text-center text-3xl mb-48">Job Details</h1>

      <div className="flex gap-8 items-center">
        <div className="w-2/3">
          <p className="mb-9">
            <span className="font-bold">Job Description:</span>{" "}
            <span className="text-gray-500">{data.description}</span>
          </p>
          <p className="mb-9">
            <span className="font-bold">Job Responsibility:</span>{" "}
            <span className="text-gray-500">{data.responsibility}</span>
          </p>
          <p className="mb-9">
            <span className="font-bold ">Educational Requirements:</span>
            <br /> <span className="text-gray-500">{data.requirements}</span>
          </p>
          <p className="mb-9">
            <span className="font-bold">Experiences:</span>
            <br /> <span className="text-gray-500">{data.experiences}</span>
          </p>
        </div>

        <div>
          <div className="py-9 px-8 bg-violet-50 rounded-sm">
            <h3 className="font-bold mb-4 text-xl">Job Details</h3>
            <hr className="mb-4 border border-violet-200" />
            <p className="mb-3">
              <span className="font-bold">Salary: </span>
              <span className="text-gray-500">{data.salary} (Pre Month)</span>
            </p>
            <p className="mb-5">
              <span className="font-bold">Job Title: </span>
              <span className="text-gray-500">{data.title}</span>
            </p>
            <h3 className="mb-4 font-bold text-xl">Contact Information</h3>
            <hr className="mb-4 border border-violet-200" />
            <p className="mb-3">
              <span className="font-bold">Phone: </span>{" "}
              <span className="text-gray-500">{data.phone}</span>
            </p>
            <p className="mb-3">
              <span className="font-bold">Email: </span>{" "}
              <span className="text-gray-500">{data.email}</span>
            </p>
            <p>
              <span className="font-bold">Address: </span>
              <span className="text-gray-500">{data.address}</span>
            </p>
          </div>

          <div className="mt-6 rounded-md text-center bg-violet-400 font-bold text-white py-4 cursor-pointer">
            <Link>
              <button>Apply Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
