// eslint-disable-next-line no-unused-vars
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: "Direct", value: 300.56, color: "#000000" },
  { name: "Affiliate", value: 135.18, color: "#98FB98" },
  { name: "Sponsored", value: 154.02, color: "#6495ED" },
  { name: "E-mail", value: 48.96, color: "#ADD8E6" },
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const TotalSales = () => (
  <div className="w-full max-w-xs mx-auto bg-[#F7F9FB] rounded-2xl p-6 h-fit font-inter">
    <h2 className="text-sm font-semibold mb-4">Total Sales</h2>
    <ResponsiveContainer width="100%" height={210}>
      <PieChart>
        <Pie
          data={data}
          labelLine={false}
          outerRadius="80%"
          dataKey="value"
          innerRadius="55%"
          paddingAngle={1}
          cornerRadius={5}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
    <div className="mt-4 space-y-2 text-xs font-normal font-inter">
      {data.map((item, index) => (
        <div key={index} className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></span>
            <span>{item.name}</span>
          </div>
          <span>${item.value.toFixed(2)}</span>
        </div>
      ))}
    </div>
  </div>
);

export default TotalSales;
