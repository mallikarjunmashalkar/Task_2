import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const TransactionChart = () => {
  const data = [
    {
      name: "Class A",
      Absent: 4000,
      Attended: 2400,
    },
    {
      name: "Class B",
      Absent: 3000,
      Attended: 1398,
    },
    {
      name: "Class C",
      Absent: 2000,
      Attended: 9800,
    },
    {
      name: "Class D",
      Absent: 2780,
      Attended: 3908,
    },
    {
      name: "Class E",
      Absent: 1890,
      Attended: 4800,
    },
    {
      name: "Class F",
      Absent: 2390,
      Attended: 3800,
    },
    {
      name: "Class G",
      Absent: 3490,
      Attended: 4300,
    },
  ];
  return (
    <div className="h-[24rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1 ml-4 ">
      <strong className="text-gray-700 font-medium">Class's</strong>
      <div className="w-full mt-3 flex-1 text-sm">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0 " vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Attended" fill="#0ea5e9" />
            <Bar dataKey="Absent" fill="#ea580c" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TransactionChart;
