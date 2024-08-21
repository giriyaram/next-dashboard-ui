"use client";

import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 106,
    fill: "#fff",
  },
  {
    name: "Girls",
    count: 53,
    fill: "#C3EBFA",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#FAE27C",
  },
];

const CountChart = () => {
  return (
    <div className="relative bg-white rounded-xl w-full h-full p-4">
      {/* TITLRE */}
      <div className=" flex justify-between items-center">
        <h1 className="font-semibold text-lg">Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* CHART  */}
      <div className=" w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>

        <Image
          src="/MaleFemale.png"
          alt=""
          height={50}
          width={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center items-center gap-16">
        {/* boys */}
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full " />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Boys (55%)</h2>
        </div>

        {/* girls */}
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full " />
          <h1 className="font-bold">1,134</h1>
          <h2 className="text-xs text-gray-300">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
