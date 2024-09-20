/* eslint-disable no-unused-vars */
import React from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", current: 12000, previous: 7000 },
  { name: "Feb", current: 8000, previous: 17000 },
  { name: "Mar", current: 7000, previous: 18000 },
  { name: "Apr", current: 15000, previous: 10000 },
  { name: "May", current: 19000, previous: 11000 },
  { name: "Jun", current: 20000, previous: 23000 },
];

const RevenueChart = () => {
  const currentWeekRevenue = 58211;
  const previousWeekRevenue = 68768;

  return (
    <div className="w-full max-w-2xl bg-blue-50 rounded-3xl bg-opacity-60">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Revenue</h2>
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">Current Week</span>
            <span className="ml-2 font-semibold">
              ${currentWeekRevenue.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-200 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">Previous Week</span>
            <span className="ml-2 font-semibold">
              ${previousWeekRevenue.toLocaleString()}
            </span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value / 1000}M`}
            />
            <Line
              type="monotone"
              dataKey="current"
              stroke="#2563eb"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="previous"
              stroke="#93c5fd"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
