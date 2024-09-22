// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import OrdersListPage from "./pages/OrderListPage";
import RightSidebar from "./components/RightSidebar";

const App = () => {
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [isToggle, setIsToggle] = useState("light");

  //Note:Toggle function for the right sidebar
  const toggleRightSidebar = () => {
    setRightSidebarOpen(!rightSidebarOpen);
  };
  //Note:Toggle function for the left sidebar
  const toggleLeftSidebar = () => {
    setLeftSidebarOpen(!leftSidebarOpen);
  };
  const themeClass =
    isToggle === "light" ? "bg-white text-black " : "bg-[#1C1C1C] text-white ";

  return (
    <Router>
      <div className={`App flex min-h-screen ${themeClass}`}>
        {/* //Note:Sidebar */}
        <Sidebar
          theme={isToggle}
          toggleRightSidebar={toggleRightSidebar}
          rightSidebarOpen={rightSidebarOpen}
        />

        {/* //Note:Main Content Area */}
        <div className="flex flex-col flex-grow relative">
          <Header
            toggle={isToggle}
            toggled={setIsToggle}
            toggleRightSidebar={toggleRightSidebar}
            rightSidebarOpen={rightSidebarOpen}
            toggleLeftSidebar={toggleLeftSidebar}
            leftSidebarOpen={leftSidebarOpen}
          />
          <div className="">
            <Routes>
              <Route
                path="/"
                element={
                  <div className="flex-grow">
                    <Dashboard themeClass={isToggle} />
                  </div>
                }
              />
              <Route
                path="/orders"
                element={
                  <div className="content flex-grow">
                    <OrdersListPage theme={isToggle}
                      setLeftSidebarOpen={setLeftSidebarOpen} />
                  </div>
                }
              />
            </Routes>
          </div>
        </div>
        <RightSidebar
          theme={isToggle}
          toggleLeftSidebar={toggleLeftSidebar}
          leftSidebarOpen={leftSidebarOpen}
          setLeftSidebarOpen={setLeftSidebarOpen}
        />
      </div>
    </Router>
  );
};

export default App;
