"use client";

import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 70,
    absent: 40,
  },
  {
    name: "Tue",
    present: 65,
    absent: 45,
  },
  {
    name: "Wed",
    present: 57,
    absent: 55,
  },
  {
    name: "Thu",
    present: 48,
    absent: 68,
  },
  {
    name: "Fri",
    present: 85,
    absent: 25,
  },
];

const AttendenceChart = () => {
  return (
    <div className="relative bg-white rounded-xl w-full h-full p-4">
      {/* TITLRE */}
      <div className=" flex justify-between items-center">
        <h1 className="font-semibold text-lg">Attendence</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* CHART  */}
      <div className=" w-full h-[75%]">
        <ResponsiveContainer width="100%" height="90%">
          <BarChart width={500} height={300} data={data} barSize={20}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
            <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
            <YAxis axisLine={false} />
            <Tooltip />
            <Legend
              align="left"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "20px", paddingBottom: "20px" }}
            />
            <Bar
              dataKey="present"
              fill="#FAE27C"
              legendType="circle"
              radius={[10,10,0,0]}
            />
            <Bar
              dataKey="absent"
              fill="#C3EBFA"
              legendType="circle"
              radius={[10,10,0,0]}
            />
          </BarChart>
        </ResponsiveContainer>
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

export default AttendenceChart;
