import React from "react";
import ProjectionsChart from "./ProjectionsChart";
import RevenueChart from "./RevenueChart";
import TopSellingProducts from "./TopSellingProducts";
import StatCard from "./StatCard";
import TotalSales from "./TotalSales";

const productData = [
  {
    key: "1",
    name: "ASOS Ridley High Waist",
    price: 79.49,
    quantity: 82,
    amount: 6518.18,
  },
  {
    key: "2",
    name: "Marco Lightweight Shirt",
    price: 128.5,
    quantity: 37,
    amount: 4754.5,
  },
  {
    key: "3",
    name: "Half Sleeve Shirt",
    price: 39.99,
    quantity: 64,
    amount: 2559.36,
  },
  {
    key: "4",
    name: "Lightweight Jacket",
    price: 20.0,
    quantity: 184,
    amount: 3680.0,
  },
  {
    key: "5",
    name: "Marco Shoes",
    price: 79.49,
    quantity: 64,
    amount: 1965.81,
  },
];

// Accept the `themeClass` prop to conditionally apply dark or light mode styles
function Dashboard({ themeClass }) {
  return (
    <div className={`min-h-screen p-5 ${themeClass}`}>
      {/* StatCard and charts are unchanged */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Top Row: Full-width Stat Card */}
        <div className={`md:col-span-2 lg:col-span-3`}>
          <StatCard theme={themeClass} />
        </div>

        {/* Second Row: Line Chart and Map Chart (ProjectionsChart as a placeholder for Map) */}
        <div className="md:col-span-1 lg:col-span-2">
          <RevenueChart theme={themeClass} />
        </div>
        <div className="md:col-span-1 lg:col-span-1">
          <ProjectionsChart theme={themeClass} />
        </div>

        {/* Third Row: Table and Pie Chart (TotalSales as a placeholder for Pie Chart) */}
        <div className="md:col-span-1 lg:col-span-2">
          <TopSellingProducts products={productData} theme={themeClass} />
        </div>
        <div className="md:col-span-1 lg:col-span-1">
          <TotalSales theme={themeClass} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
