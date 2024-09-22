/* eslint-disable no-unused-vars */
import React from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { name: "Jan", current: 12000, previous: 7000 },
  { name: "Feb", current: 8000, previous: 17000 },
  { name: "Mar", current: 7000, previous: 18000 },
  { name: "Apr", current: 15000, previous: 10000 },
  { name: "May", current: 19000, previous: 11000 },
  { name: "Jun", current: 20000, previous: 23000 },
];

const RevenueChart = ({ theme }) => {
  const currentWeekRevenue = 58211;
  const previousWeekRevenue = 68768;

  // Define styles based on theme
  const chartContainerClass =
    theme === "light"
      ? " bg-[#F7F9FB] rounded-3xl bg-opacity-60"
      : " bg-[#282828] rounded-3xl bg-opacity-80";

  const textClass = theme === "light" ? "text-[#1C1C1C]" : "text-gray-300";

  return (
    <div className={chartContainerClass}>
      <div className="p-6 font-inter">
        <div className="flex items-center gap-7 justify-start mb-5">
          <h2 className={`text-sm font-semibold ${textClass}`}>Revenue</h2>
          <div className="border h-4"></div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-sm">
              <div className="w-2 h-2 bg-[#1C1C1C] rounded-full mr-2"></div>
              <span className={`font-normal ${textClass}`}>Current Week</span>
              <span className="ml-2 font-semibold">
                ${currentWeekRevenue.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center text-sm">
              <div className="w-2 h-2 bg-[#A8C5DA] rounded-full mr-2"></div>
              <span className={`font-normal ${textClass}`}>Previous Week</span>
              <span className="ml-2 font-semibold">
                ${previousWeekRevenue.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 30, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
            <XAxis
              dataKey="name"
              axisLine={{ stroke: '#E5E7EB' }}
              tickLine={false}
              tick={{ fill: '#9CA3AF' }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value / 1000000}M`}
              tick={{ fill: '#9CA3AF' }}
            />
            <defs>
              <filter id="shadow" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
                <feOffset in="blur" dx="0" dy="4" result="offsetBlur" />
                <feMerge>
                  <feMergeNode in="offsetBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <Line
              type="monotone"
              dataKey="current"
              stroke="#000000"
              strokeWidth={2}
              dot={false}
              strokeDasharray="4 4"
              filter="url(#shadow)"
            />
            <Line
              type="monotone"
              dataKey="previous"
              stroke="#93C5FD"
              strokeWidth={2}
              dot={false}
              filter="url(#shadow)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
