// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import {
  PiChartPieSliceDuotone,
  PiShoppingBagOpenDuotone,
  PiFolderDuotone,
  PiBookOpenDuotone,
  PiIdentificationBadgeDuotone,
  PiIdentificationCardDuotone,
  PiUsersThreeDuotone,
  PiNotebookDuotone,
  PiChatsTeardropDuotone,
  PiDotOutlineFill,
  PiSidebarDuotone,
  PiListBulletsDuotone
} from "react-icons/pi";
import { Link } from "react-router-dom";

const Sidebar = ({ theme, rightSidebarOpen, toggleRightSidebar }) => {
  const [openSections, setOpenSections] = useState({
    favorites: true,
    dashboards: true,
    pages: false,
    userProfile: true,
  });
  const [selectedItem, setSelectedItem] = useState("default");
  const [isMobile, setIsMobile] = useState(false);

  // Listen for screen width changes and update isMobile accordingly
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1100);
    };

    // Run the check on mount
    handleResize();

    // Add event listener for resizing
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleItemClick = (itemKey) => {
    setSelectedItem(itemKey);
  };

  const toggleSidebar = () => {
    toggleRightSidebar(!rightSidebarOpen);
    console.log(!rightSidebarOpen);
  };

  const menuItems = [
    {
      label: "Favorites",
      key: "favorites",
      items: [
        {
          label: "Overview",
          key: "overview",
          icon: <PiDotOutlineFill size={16} color="#1C1C1C33" />,
        },
        {
          label: "Projects",
          key: "projects",
          icon: <PiDotOutlineFill size={16} color="#1C1C1C33" />,
        },
      ],
    },
    {
      label: "Dashboards",
      key: "dashboards",
      items: [
        {
          label: "Default",
          key: "default",
          icon: <PiChartPieSliceDuotone size={20} />,
          link: "/",
        },
        {
          label: "Order List",
          key: "orderlist",
          icon: <PiListBulletsDuotone size={20} />,
          link: "/orders",
        },
        {
          label: "eCommerce",
          key: "ecommerce",
          icon: <PiShoppingBagOpenDuotone size={20} />,
        },
        {
          label: "Projects",
          key: "dashboard-projects",
          icon: <PiFolderDuotone size={20} />,
        },
        {
          label: "Online Courses",
          key: "online-courses",
          icon: <PiBookOpenDuotone size={20} />,
        },
      ],
    },
    {
      label: "Pages",
      key: "pages",
      items: [
        {
          label: "User Profile",
          key: "user-profile",
          icon: <PiIdentificationBadgeDuotone size={20} />,
          subItems: [
            "Overview",
            "Projects",
            "Campaigns",
            "Documents",
            "Followers",
          ],
        },
        {
          label: "Account",
          key: "account",
          icon: <PiIdentificationCardDuotone size={20} />,
        },
        {
          label: "Corporate",
          key: "corporate",
          icon: <PiUsersThreeDuotone size={20} />,
        },
        {
          label: "Blog",
          key: "blog",
          icon: <PiNotebookDuotone size={20} />,
        },
        {
          label: "Social",
          key: "social",
          icon: <PiChatsTeardropDuotone size={20} />,
        },
      ],
    },
  ];

  const renderItems = (items, level = 0) => {
    return items.map((item) => (
      <div key={item.key} className={`ml-${level * 4}`}>
        <div
          className={`flex items-center py-[6px] px-4 cursor-pointer w-[95%] mx-auto rounded-lg relative ${selectedItem === item.key
              ? theme === "light"
                ? "bg-gray-200 "
                : "bg-[#282828] "
              : ""
            }`}
          onClick={() => {
            handleItemClick(item.key);
            if (item.items || item.subItems) toggleSection(item.key);
          }}
        >
          {selectedItem === item.key ? (
            theme === "light" ? (
              <div className="w-1 h-4 rounded-md absolute left-2 bg-black"></div>
            ) : (
              ""
            )
          ) : (
            ""
          )}

          {item.icon && <span className="mr-3">{item.icon}</span>}
          {item.link ? (
            <Link
              to={item.link}
              className={`flex-grow ${theme === "light" ? "text-gray-800" : "text-gray-300"
                } text-sm font-inter font-medium`}
            >
              {item.label}
            </Link>
          ) : (
            <span
              className={`flex-grow ${theme === "light" ? "text-gray-800" : "text-gray-300"
                } text-sm font-inter font-medium`}
            >
              {item.label}
            </span>
          )}
          {(item.items || item.subItems) &&
            (openSections[item.key] ? (
              <FiChevronDown className="ml-2" />
            ) : (
              <FiChevronRight className="ml-2" />
            ))}
        </div>
        {openSections[item.key] && item.items && (
          <div className="ml-4">{renderItems(item.items, level + 1)}</div>
        )}
        {openSections[item.key] && item.subItems && (
          <div className="ml-10">
            {item.subItems.map((subItem, subIndex) => (
              <div key={subIndex} className="py-1 flex items-center">
                {/* <span className="mr-2 text-xs">•</span> */}
                <span
                  className={
                    theme === "light" ? "text-gray-600" : "text-gray-400"
                  }
                >
                  {subItem}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    ));
  };

  return (
    <>
      {rightSidebarOpen && (
        <div
          className={`min-w-56 border-r ${theme === "light"
              ? "bg-white text-gray-700"
              : "bg-[#1C1C1C] text-gray-300 border-[#282828]"
            } border-[#1C1C1C1A] text-sm ${isMobile ? "absolute top-0 left-0 z-50" : "relative"
            }`}
        >
          <div className="flex justify-between items-center">
            <div className="p-4 flex items-center space-x-2 ">
              <div
                className={`w-6 h-6 rounded-full ${theme === "light" ? "bg-gray-300" : "bg-gray-700 border-l"
                  }`}
              >
                <img src="/Images/ByeWind.png" alt="" />
              </div>

              <span
                className={`font-medium ${theme === "light" ? "text-gray-800" : "text-gray-300"
                  } text-sm font-inter`}
              >
                ByeWind
              </span>
            </div>
            {isMobile && (
              <PiSidebarDuotone
                className="cursor-pointer mr-4"
                size={20}
                onClick={toggleSidebar}
              />
            )}
          </div>

          <div className="py-2">
            {menuItems.map((section) => (
              <div key={section.key} className="mb-4">
                <div
                  className={`px-4 py-2 text-sm font-medium uppercase ${theme === "light" ? "text-gray-500" : "text-gray-400"
                    }`}
                >
                  {section.label}
                </div>

                {renderItems(section.items)}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
