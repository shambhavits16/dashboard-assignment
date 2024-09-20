/* eslint-disable no-unused-vars */
import React from "react";
import ProjectionsChart from "./ProjectionsChart";
import RevenueChart from "./RevenueChart";
import TopSellingProducts from "./TopSellingProducts";
import StatCard from "./StatCard";
import TotalSales from "./TotalSales";

function Dashboard() {
  // console.log('Dashboard is rendering');
  return (
    // <div className="bg-white text-gray-900 min-h-screen p-5">
    //   <h1 className="text-2xl font-bold mb-5">eCommerce </h1>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    //     {/* Stat Cards */}
    //     <div className="lg:col-span-3">
    //       <StatCard />
    //     </div>
    //     <div className="lg:col-span-3">
    //       <TotalSales />
    //     </div>

    //     {/* Charts */}
    //     <div className="lg:col-span-6">
    //       <RevenueChart />
    //     </div>
    //     <div className="lg:col-span-6">
    //       <ProjectionsChart />
    //     </div>

    //     {/* Additional Charts */}
    //     <div className="lg:col-span-4">
    //       <TopSellingProducts />
    //     </div>

    //     {/* Right Sidebar - Notifications and Activities */}
    //     <div className="lg:col-span-2">
    //       <RightSidebar />
    //     </div>
    //   </div>
    // </div>
    <div className="bg-white text-gray-900 min-h-screen p-5">
      <header className="flex justify-between items-center pb-5">
        <h1 className="text-2xl font-bold">eCommerce</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Top Row: Full-width Stat Card */}
        <div className="md:col-span-2 lg:col-span-3">
          <StatCard />
        </div>

        {/* Second Row: Line Chart and Map Chart (ProjectionsChart as a placeholder for Map) */}
        <div className="md:col-span-1 lg:col-span-2">
          <RevenueChart />
        </div>
        <div className="md:col-span-1 lg:col-span-1">
          <ProjectionsChart />
        </div>

        {/* Third Row: Table and Pie Chart (TotalSales as a placeholder for Pie Chart) */}
        <div className="md:col-span-1 lg:col-span-2">
          <TopSellingProducts />
        </div>
        <div className="md:col-span-1 lg:col-span-1">
          <TotalSales />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
