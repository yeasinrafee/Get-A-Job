import React from "react";

const AppliedJob = () => {
  const data = JSON.parse(localStorage.getItem("jobs"));
  console.log(data);
  return (
    <div className="w-full md:w-8/12 my-10 mx-auto">
      {data.map((d) => (
        <h1>{d.title}</h1>
      ))}
    </div>
  );
};

export default AppliedJob;
