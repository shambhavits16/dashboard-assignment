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
import { FaArrowTrendUp, FaArrowTrendDown  } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const StatCard = ({ title, value, change, isNegative = false, bgColor }) => (
  <div
    className={`h-fit w-full rounded-2xl p-6 ${bgColor} flex flex-col justify-between items-start gap-5 font-inter`}
  >
    <p className="text-sm font-semibold">{title}</p>
    <div className="flex items-center justify-between w-full">
      <p className="text-2xl font-semibold">{value}</p>
      <div className={`text-xs font-normal flex items-center gap-2`}>
        <p>
        {change}
        {/* <span className="">{isNegative ? <FaArrowTrendDown /> : <FaArrowTrendUp />}</span> */}
        </p>
        {isNegative ? <FaArrowTrendDown /> : <FaArrowTrendUp />}
      </div>
    </div>
  </div>
);

const chartData = [
  { name: "Jan", actual: 15, projected: 3 },
  { name: "Feb", actual: 18, projected: 3 },
  { name: "Mar", actual: 16, projected: 4 },
  { name: "Apr", actual: 22, projected: 5 },
  { name: "May", actual: 10, projected: 4 },
  { name: "Jun", actual: 15, projected: 3 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 rounded shadow">
        <p className="font-normal text-xs text-[#1C1C1C66]">{label}</p>
        <p className="font-normal text-xs text-[#1C1C1C66]">Actual: {payload[0].value}M</p>
        <p className="font-normal text-xs text-[#1C1C1C66]">Projected: {(payload[0].value + payload[1].value).toFixed(1)}M</p>
      </div>
    );
  }
  return null;
};

const Dashboard = () => {
  return (
    <div className="bg-white p-5 font-inter">
      <h1 className="text-sm font-semibold mb-6">eCommerce</h1>
      <div className="flex gap-6">
        {/* Statistics Section */}
        <div className="grid grid-cols-2 gap-6 w-[50%]">
          <StatCard
            title="Customers"
            value="3,781"
            change="+11.01%"
            bgColor="bg-[#E3F5FF]"
          />
          <StatCard
            title="Orders"
            value="1,219"
            change="-0.03%"
            isNegative
            bgColor="bg-[#F7F9FB]"
          />
          <StatCard
            title="Revenue"
            value="$695"
            change="+15.03%"
            bgColor="bg-[#F7F9FB]"
          />
          <StatCard
            title="Growth"
            value="30.1%"
            change="+6.08%"
            bgColor="bg-[#E5ECF6]"
          />
        </div>

        {/* Recharts BarChart */}
        <div className="col-span-1 lg:col-span-2 w-[50%] bg-[#F7F9FB] rounded-2xl py-6 bg-opacity-60">
          <h2 className="text-sm font-semibold mb-5 ml-6">
            Projections vs Actuals
          </h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData} barSize={25}>
              <CartesianGrid vertical={false} stroke="#E5E5E5" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `${value}M`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="actual" stackId="a" fill="#A8C5DA" />
              <Bar dataKey="projected" stackId="a" fill="#E3F5FF" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
