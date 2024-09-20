/* eslint-disable no-unused-vars */
import React from "react";

const salesData = [
  { category: "Direct", amount: 300.56, color: "black" },
  { category: "Affiliate", amount: 135.18, color: "#98FB98" },
  { category: "Sponsored", amount: 154.02, color: "#6495ED" },
  { category: "E-mail", amount: 48.96, color: "#ADD8E6" },
];

const TotalSales = () => {
  const total = salesData.reduce((sum, item) => sum + item.amount, 0);
  const percentages = salesData.map((item) => ({
    ...item,
    percentage: (item.amount / total) * 100,
  }));

  let currentAngle = 0;

  return (
    <div className="w-full max-w-xs bg-blue-50 rounded-3xl bg-opacity-60 p-5">
      <h2 className="text-lg font-semibold mb-4">Total Sales</h2>
      <div className="relative w-32 h-32 mx-auto mb-4">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          {percentages.map((item, index) => {
            const startAngle = currentAngle;
            const endAngle = startAngle + (item.percentage / 100) * 360;
            const largeArcFlag = item.percentage > 50 ? 1 : 0;
            const x1 = 50 + 45 * Math.cos((startAngle * Math.PI) / 180);
            const y1 = 50 + 45 * Math.sin((startAngle * Math.PI) / 180);
            const x2 = 50 + 45 * Math.cos((endAngle * Math.PI) / 180);
            const y2 = 50 + 45 * Math.sin((endAngle * Math.PI) / 180);

            currentAngle = endAngle;

            return (
              <path
                key={index}
                d={`M 50 50 L ${x1} ${y1} A 45 45 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                fill={item.color}
              />
            );
          })}
          <circle cx="50" cy="50" r="30" fill="white" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold">
            {percentages[1].percentage.toFixed(1)}%
          </span>
        </div>
      </div>
      <div className="space-y-1 text-sm">
        {salesData.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center">
              <span
                className="w-3 h-3 mr-2 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              <span>{item.category}</span>
            </div>
            <span>${item.amount.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalSales;
