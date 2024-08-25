"use client";

import Image from "next/image";
import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { fileURLToPath } from "url";

const data = [
  { name: "Group A", value: 92, fill: "#C3EBFA" },
  { name: "Group B", value: 8, fill: "#FAE276" },
];

const Performance = () => {
  return (
    <div className="flex flex-col bg-white p-4 rounded-md h-80 relative">
        <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold" >Performace</h1>
        <Image src="/moreDark.png" alt="" width={16} height={16}/>
        </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart >
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            fill="#8884d8"
            
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
        <h1 className="text-3xl font-bold">9.2</h1>
        <p className="text-xs text-gray-300">of 10 max LTS</p>
      </div>
      <div className=" absolute text-center bottom-16 left-0 right-0 m-auto ">
        1st Semester - 2nd Semester
      </div>
    </div>
  );
};

export default Performance;
