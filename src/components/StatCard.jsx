import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

const StatCard = ({
  title,
  value,
  change,
  isNegative = false,
  bgColor,
  textColor,
}) => (
  <div
    className={`h-fit w-full rounded-2xl p-6 ${bgColor} ${textColor} flex flex-col justify-between items-start gap-5 font-inter`}
  >
    <p className="text-sm font-semibold">{title}</p>
    <div className="flex items-center justify-between w-full">
      <p className="text-2xl font-semibold">{value}</p>
      <div className="text-xs font-normal flex items-center gap-2">
        <p>{change}</p>
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

const CustomTooltip = ({ active, payload, label, theme }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className={`p-2 border rounded shadow ${
          theme === "dark"
            ? "bg-[#282828] border-gray-600"
            : "bg-white border-gray-200"
        }`}
      >
        <p
          className={`font-normal text-xs ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {label}
        </p>
        <p
          className={`font-normal text-xs ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Actual: {payload[0].value}M
        </p>
        <p
          className={`font-normal text-xs ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Projected: {(payload[0].value + payload[1].value).toFixed(1)}M
        </p>
      </div>
    );
  }
  return null;
};

const Dashboard = ({ theme }) => {
  const bgClass = theme === "dark" ? "bg-[#282828]" : "bg-white";
  const textClass = theme === "dark" ? "text-gray-300" : "text-black";
  const cardBgColor = theme === "dark" ? "bg-[#FFFFFF0D]" : "bg-[#F7F9FB]";
  const statTextColor = theme === "dark" ? "text-white" : "text-black";

  return (
    <div className={`${bgClass} p-5 font-inter ${textClass}`}>
      <h1 className="text-sm font-semibold mb-6">eCommerce</h1>
      <div className="flex gap-6">
        {/* Statistics Section */}
        <div className="grid grid-cols-2 gap-6 w-[50%]">
          <StatCard
            title="Customers"
            value="3,781"
            change="+11.01%"
            bgColor="bg-[#E3F5FF]"
            textColor={theme === "dark" ? "text-black" : "text-black"}
          />
          <StatCard
            title="Orders"
            value="1,219"
            change="-0.03%"
            isNegative
            bgColor={cardBgColor}
            textColor={statTextColor}
          />
          <StatCard
            title="Revenue"
            value="$695"
            change="+15.03%"
            bgColor={cardBgColor}
            textColor={statTextColor}
          />
          <StatCard
            title="Growth"
            value="30.1%"
            change="+6.08%"
            bgColor="bg-[#E5ECF6]"
            textColor={theme === "dark" ? "text-black" : "text-black"}
          />
        </div>

        {/* Recharts BarChart */}
        <div
          className={`col-span-1 lg:col-span-2 w-[50%] ${cardBgColor} rounded-2xl py-6`}
        >
          <h2 className="text-sm font-semibold mb-5 ml-6">
            Projections vs Actual
          </h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData} barSize={25}>
              <CartesianGrid
                vertical={false}
                stroke={theme === "dark" ? "#555555" : "#E5E5E5"}
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: theme === "dark" ? "#ffffff" : "#000000" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `${value}M`}
                tick={{ fill: theme === "dark" ? "#ffffff" : "#000000" }}
              />
              <Tooltip content={<CustomTooltip theme={theme} />} />
              <Bar
                dataKey="actual"
                stackId="a"
                fill={theme === "dark" ? "#6B7280" : "#A8C5DA"}
              />
              <Bar
                dataKey="projected"
                stackId="a"
                fill={theme === "dark" ? "#4B5563" : "#E3F5FF"}
                radius={[5, 5, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
