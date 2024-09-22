/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React from "react";
// import { Layout } from "antd";
// import Sidebar from "./components/Sidebar";
// import Header from "./components/Header";
// import Dashboard from "./components/StatCard";
// import TopSellingProducts from "./components/TopSellingProducts";
// import RevenueChart from "./components/RevenueChart";
// import RightSidebar from "./components/RightSidebar";
// import ProjectionsChart from "./components/ProjectionsChart";
// import TotalSales from "./components/TotalSales ";

// const { Content } = Layout;

// const revenueData = [
//   { name: "Jan", current: 10000, previous: 8000 },
//   { name: "Feb", current: 15000, previous: 10000 },
//   { name: "Mar", current: 12000, previous: 12000 },
//   { name: "Apr", current: 18000, previous: 14000 },
//   { name: "May", current: 20000, previous: 16000 },
//   { name: "Jun", current: 22000, previous: 18000 },
// ];

// const topSellingProducts = [
//   {
//     name: "ASOS Ridley High Waist",
//     price: 79.49,
//     quantity: 82,
//     amount: 6518.18,
//   },
//   {
//     name: "Marco Lightweight Shirt",
//     price: 128.5,
//     quantity: 37,
//     amount: 4754.5,
//   },
//   { name: "Half Sleeve Shirt", price: 39.99, quantity: 64, amount: 2559.36 },
//   { name: "Lightweight Jacket", price: 20.0, quantity: 184, amount: 3680.0 },
//   { name: "Marco Shoes", price: 79.49, quantity: 64, amount: 1945.81 },
// ];

// const App = () => {
//   return (
//     <Layout className="font-inter" style={{ minHeight: "100vh" }}>
//       <Sidebar />
//       <Layout>
//         <Header />
//         <Content
//           className=" bg-gray-100 hide-scrollbar"
//           style={{
//             height: "calc(100vh - 64px)",
//             overflowY: "auto",
//             position: "relative",
//           }}
//         >
//           <div>
//             <Dashboard />
//           </div>
//           <div className="flex bg-white p-5 gap-5">
//             <RevenueChart data={revenueData} />
//             <ProjectionsChart data={revenueData} />
//           </div>
//           <div className="flex bg-white p-5 gap-5">
//             <TopSellingProducts products={topSellingProducts} />
//             <TotalSales />
//           </div>
//         </Content>
//       </Layout>
//       <RightSidebar />
//     </Layout>
//   );
// };

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import OrdersListPage from './pages/OrderListPage';
import RightSidebar from './components/RightSidebar';

const App = () => {
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);

  // Toggle function for the right sidebar
  const toggleRightSidebar = () => {
    setRightSidebarOpen(!rightSidebarOpen);
  };
  
  return (
    <Router>
      <div className="App flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex flex-col flex-grow relative">
          <Header />
          <div className="">
            <Routes>
              <Route path="/" element={
                  <div className="flex-grow">
                    <Dashboard />
                  </div>
              } />
              <Route path="/orders" element={
                <div className="content flex-grow">
                  <OrdersListPage />
                </div>
              } />
            </Routes>
          </div>
        </div>
        <RightSidebar />
      </div>
    </Router>
  );
};

export default App;
