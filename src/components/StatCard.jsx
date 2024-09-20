/* eslint-disable no-unused-vars */
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const StatCard = ({ title, value, change, isNegative = false, bgColor }) => (
  <div
    className={`h-full w-full rounded-3xl p-4 ${bgColor} flex justify-center items-center`}
  >
    <div className="flex items-center justify-between gap-10">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-3xl font-bold mt-3">{value}</p>
      </div>
      <div className="mt-5">
        <p
          className={`text-sm ${
            isNegative ? "text-red-500" : "text-green-500"
          }`}
        >
          {change} <span>{isNegative ? "↓" : "↑"}</span>
        </p>
      </div>
    </div>
  </div>
);

const chartData = [
  { name: "Jan", projected: 15, actual: 12 },
  { name: "Feb", projected: 22, actual: 19 },
  { name: "Mar", projected: 18, actual: 15 },
  { name: "Apr", projected: 25, actual: 22 },
  { name: "May", projected: 15, actual: 12 },
  { name: "Jun", projected: 22, actual: 19 },
];

const Dashboard = () => {
  return (
    <div className="bg-white p-5 ">
      <h1 className="text-xl font-semibold mb-6">eCommerce</h1>
      <div className="flex gap-6">
        {/* Statistics Section */}
        <div className="grid grid-cols-2 gap-6 w-[50%]">
          <StatCard
            title="Customers"
            value="3,781"
            change="+11.01%"
            bgColor="bg-emerald-50"
          />
          <StatCard
            title="Orders"
            value="1,219"
            change="-0.03%"
            isNegative
            bgColor="bg-gray-50"
          />
          <StatCard
            title="Revenue"
            value="$695"
            change="+15.03%"
            bgColor="bg-gray-50"
          />
          <StatCard
            title="Growth"
            value="30.1%"
            change="+6.08%"
            bgColor="bg-indigo-50"
          />
        </div>

        {/* Recharts BarChart */}
        <div className="col-span-1 lg:col-span-2 w-[50%] bg-blue-50 rounded-3xl py-6 bg-opacity-60">
          <h2 className="text-sm font-semibold mb-2 ml-10">
            Projections vs Actuals
          </h2>
          <ResponsiveContainer width="100%" height={230}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="projected" fill="#8884d8" barSize={25} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
