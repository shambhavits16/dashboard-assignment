/* eslint-disable no-unused-vars */
import React from "react";

const locations = [
  { name: "New York", revenue: "72K" },
  { name: "San Francisco", revenue: "39K" },
  { name: "Sydney", revenue: "25K" },
  { name: "Singapore", revenue: "61K" },
];

const ProjectionsChart = () => {
  return (
    <div className="w-full max-w-xs bg-blue-50 rounded-3xl bg-opacity-60">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Revenue by Location</h2>
        <div className="mb-4 relative">
          <img src='/Images/WorldMap.png' alt="" />
        </div>
        <div className="space-y-2">
          {locations.map((location, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-gray-600">{location.name}</span>
              <div className="flex items-center">
                <div className="w-24 h-1 bg-blue-200 mr-2"></div>
                <span className="font-semibold">{location.revenue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectionsChart;
