import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const Statistics = () => {
  const data = [
    { name: "Assignment-1", marks: 57 },
    { name: "Assignment-2", marks: 60 },
    { name: "Assignment-3", marks: 58 },
    { name: "Assignment-4", marks: 60 },
    { name: "Assignment-5", marks: 58 },
    { name: "Assignment-6", marks: 55 },
    { name: "Assignment-7", marks: 60 },
    { name: "Assignment-8", marks: 60 },
  ];
  return (
    <div className="w-full md:w-8/12 my-5 md:mx-auto px-3 md:px-0">
      <h1 className="font-bold text-3xl my-5">Assignment Marks Statistics: </h1>
      <PieChart width={600} height={600}>
        <Pie
          dataKey="marks"
          startAngle={360}
          endAngle={0}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={200}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Statistics;
