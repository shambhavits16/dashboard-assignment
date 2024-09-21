// eslint-disable-next-line no-unused-vars
import React from "react";
import { FiSearch } from "react-icons/fi";
import { PiStarDuotone, PiSidebarDuotone, PiSunDuotone, PiClockCounterClockwiseDuotone, PiBellDuotone } from "react-icons/pi";

const Header = () => (
  <header className="bg-white flex justify-between items-center px-6 py-2 border-b border-[#1C1C1C1A]">
    <div className="flex items-center">
      <PiSidebarDuotone className="cursor-pointer mr-4" size={20} onClick={() => { /* Toggle sidebar functionality here */ }} />
      <PiStarDuotone className="cursor-pointer" size={20} />
      <h1 className="text-sm font-normal font-inter mr-4 ml-4 text-[#1C1C1C66]">Dashboards</h1>
      <span className="text-[#1C1C1C33] text-sm font-normal font-inter">/</span>
      <span className="ml-4 text-[#1C1C1C] text-sm font-normal font-inter">Default</span>
    </div>

    <div className="flex-grow mx-4 hidden sm:block">
      <div className="relative float-right w-fit">
        <input
          type="text"
          placeholder="Search"
          className="float-right pl-10 pr-4 py-2 bg-[#1C1C1C0D] text-[#1C1C1C33] text-sm font-normal font-inter rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
        <FiSearch
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={16}
        />
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <PiSunDuotone  className="cursor-pointer" size={20} />
      <PiClockCounterClockwiseDuotone className="cursor-pointer" size={20} />
      <PiBellDuotone className="cursor-pointer" size={20} />
      {/* {isDashboard && ( */}
      <PiSidebarDuotone className="cursor-pointer" size={20} onClick={() => { /* Handle right sidebar toggle here */ }} />
      {/* )} */}
    </div>
  </header>
);

export default Header;
