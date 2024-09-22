/* eslint-disable no-unused-vars */
import React from "react";

const locations = [
  { name: "New York", revenue: 72000 },
  { name: "San Francisco", revenue: 39000 },
  { name: "Sydney", revenue: 25000 },
  { name: "Singapore", revenue: 61000 },
];

const maxRevenue = Math.max(...locations.map((location) => location.revenue));

const ProjectionsChart = ({ theme }) => {
  // Define light and dark mode styles
  const chartBg = theme === "light" ? "bg-[#F7F9FB]" : "bg-[#282828]";
  const textColor = theme === "light" ? "text-black" : "text-white";
  const barColor = theme === "light" ? "bg-[#A8C5DA]" : "bg-[#4B5563]";

  return (
    <div
      className={`w-full max-w-xs mx-auto rounded-2xl p-6 h-fit font-inter ${chartBg}`}
    >
      <div className="p-6">
        <h2
          className={`text-sm font-semibold font-inter mb-4 text-center ${textColor}`}
        >
          Revenue by Location
        </h2>
        <div className="mb-3 relative">
          <img src="/Images/WorldMap.png" alt="" />
        </div>
        <div className="space-y-2">
          {locations.map((location, index) => (
            <div key={index} className="flex-col justify-between items-center">
              <div className="w-full flex items-center justify-between">
                <span
                  className={`text-xs font-inter font-normal leading-[18px] ${textColor}`}
                >
                  {location.name}
                </span>
                <span
                  className={`ml-2 text-xs font-inter font-normal leading-[18px] ${textColor}`}
                >
                  {`${(location.revenue / 1000).toFixed(0)}K`}
                </span>
              </div>
              <div className="flex-grow my-1">
                <div
                  className={`${barColor} h-[2px]`}
                  style={{
                    width: `${(location.revenue / maxRevenue) * 100}%`, // Dynamic width based on revenue
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectionsChart;
