// eslint-disable-next-line no-unused-vars
import React from "react";
import { FiSearch } from "react-icons/fi";
import {
  PiStarDuotone,
  PiSidebarDuotone,
  PiSunDuotone,
  PiClockCounterClockwiseDuotone,
  PiBellDuotone,
} from "react-icons/pi";

const Header = ({
  toggle,
  toggled,
  toggleRightSidebar,
  rightSidebarOpen,
  toggleLeftSidebar,
  leftSidebarOpen,
}) => {
  const toggleSidebar = () => {
    toggleRightSidebar(!rightSidebarOpen);
    console.log(!rightSidebarOpen);
  };

  const toggleRSideBar = () => {
    toggleLeftSidebar(!leftSidebarOpen);
    console.log(!leftSidebarOpen);
  };

  const handleToggle = () => {
    // Toggle between light and dark themes
    const newTheme = toggle === "light" ? "dark" : "light";
    toggled(newTheme); // Update theme state
    console.log("Theme toggled to:", newTheme);
  };

  return (
    <header
      className={`flex justify-between items-center px-6 py-2 border-b ${toggle === "light" ? "bg-white" : "bg-[#1C1C1C] border-[#282828]"
        }`}
    >
      <div className="flex items-center">
        <PiSidebarDuotone
          className="cursor-pointer mr-4"
          size={20}
          onClick={toggleSidebar}
        />
        <PiStarDuotone className="cursor-pointer" size={20} />
        <h1
          className={`text-sm font-normal font-inter mr-4 ml-4 ${toggle === "light" ? "text-[#1C1C1C66]" : "text-gray-400"
            }`}
        >
          Dashboards
        </h1>
        <span
          className={`${toggle === "light" ? "text-[#1C1C1C33]" : "text-gray-600"
            } text-sm font-normal font-inter`}
        >
          /
        </span>
        <span
          className={`ml-4 text-sm font-normal font-inter ${toggle === "light" ? "text-[#1C1C1C]" : "text-white"
            }`}
        >
          Default
        </span>
      </div>

      <div className="flex-grow mx-4 hidden sm:block">
        <div className="relative float-right w-fit">
          <input
            type="text"
            placeholder="Search"
            className={`float-right pl-10 pr-4 py-2 ${toggle === "light"
                ? "bg-[#1C1C1C0D] text-[#1C1C1C33]"
                : "bg-gray-950 text-gray-200"
              } text-sm font-normal font-inter rounded-lg focus:outline-none focus:ring-1 ${toggle === "light" ? "focus:ring-gray-400" : "focus:ring-gray-500"
              }`}
          />
          <FiSearch
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${toggle === "light" ? "text-gray-400" : "text-gray-300"
              }`}
            size={16}
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <PiSunDuotone
          className="cursor-pointer"
          size={20}
          onClick={handleToggle}
        />
        <PiClockCounterClockwiseDuotone className="cursor-pointer" size={20} />
        <PiBellDuotone className="cursor-pointer" size={20} />
        <PiSidebarDuotone
          className="cursor-pointer"
          size={20}
          onClick={toggleRSideBar}
        />
      </div>
    </header>
  );
};

export default Header;