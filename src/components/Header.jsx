// eslint-disable-next-line no-unused-vars
import React from "react";
import { FiBell, FiRotateCcw, FiSearch,  } from "react-icons/fi";
import { TiWeatherSunny } from "react-icons/ti";
import { CiStar } from "react-icons/ci";

const notificationsCount = 5;

const Header = () => (
  <header className="bg-white flex justify-between items-center px-6 py-2 border-b">

    <div className="flex items-center">
      <CiStar className="text-gray-500 cursor-pointer" size={20} />
      <h1 className="text-xl font-semibold mr-4 ml-2">Dashboards</h1>
      <span className="text-gray-500">/</span>
      <span className="ml-4 text-gray-500">Default</span>
    </div>

    <div className="flex-grow mx-4 hidden sm:block">
      <div className="relative float-right w-fit">
        <input
          type="text"
          placeholder="Search"
          className="float-right pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FiSearch
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={18}
        />
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <TiWeatherSunny className="text-gray-500 cursor-pointer" size={20} />
      <FiRotateCcw className="text-gray-500 cursor-pointer" size={20} />
      <div className="relative">
        <FiBell className="text-gray-500 cursor-pointer" size={20} />
        {notificationsCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {notificationsCount}
          </span>
        )}
      </div>
      {/* <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
        <img
          src="/api/placeholder/32/32"
          alt="User"
          className="w-full h-full object-cover"
        />
      </div> */}
    </div>
  </header>
);

export default Header;
