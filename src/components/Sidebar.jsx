// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  FiChevronDown,
  FiChevronRight
} from "react-icons/fi";
import { PiChartPieSliceDuotone, PiShoppingBagOpenDuotone, PiFolderDuotone, PiBookOpenDuotone, PiIdentificationBadgeDuotone, PiIdentificationCardDuotone, PiUsersThreeDuotone, PiNotebookDuotone, PiChatsTeardropDuotone, PiDotOutlineFill  } from "react-icons/pi";

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({
    favorites: true,
    dashboards: true,
    pages: false,
    userProfile: false
  });
  const [selectedItem, setSelectedItem] = useState('default');

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleItemClick = (itemKey) => {
    setSelectedItem(itemKey);
  };

  const menuItems = [
    {
      label: 'Favorites',
      key: 'favorites',
      items: [
        // { label: 'Recently', key: 'recently', items: [] },
        { label: 'Overview', key: 'overview', icon: <PiDotOutlineFill size={16} color="#1C1C1C33"/> },
        { label: 'Projects', key: 'projects', icon: <PiDotOutlineFill size={16} color="#1C1C1C33"/>}
      ]
    },
    {
      label: 'Dashboards',
      key: 'dashboards',
      items: [
        { label: 'Default', key: 'default', icon: <PiChartPieSliceDuotone size={20} /> },
        { label: 'eCommerce', key: 'ecommerce', icon: <PiShoppingBagOpenDuotone size={20} />, items: [] },
        { label: 'Projects', key: 'dashboard-projects', icon: <PiFolderDuotone size={20} />, items: [] },
        { label: 'Online Courses', key: 'online-courses', icon: <PiBookOpenDuotone size={20} />, items: [] }
      ]
    },
    {
      label: 'Pages',
      key: 'pages',
      items: [
        {
          label: 'User Profile',
          key: 'user-profile',
          icon: <PiIdentificationBadgeDuotone size={20} />,
          subItems: ['Overview', 'Projects', 'Campaigns', 'Documents', 'Followers']
        },
        { label: 'Account', key: 'account', icon: <PiIdentificationCardDuotone size={20} />, items: [] },
        { label: 'Corporate', key: 'corporate', icon: <PiUsersThreeDuotone size={20} />, items: [] },
        { label: 'Blog', key: 'blog', icon: <PiNotebookDuotone size={20} />, items: [] },
        { label: 'Social', key: 'social', icon: <PiChatsTeardropDuotone size={20} />, items: [] }
      ]
    }
  ];

  const renderItems = (items, level = 0) => {
    return items.map((item) => (
      <div key={item.key} className={`ml-${level * 4}`}>
        <div
          className={`flex items-center py-2 px-4 cursor-pointer ${selectedItem === item.key ? 'bg-[#1C1C1C0D]' : ''}`}
          onClick={() => {
            handleItemClick(item.key);
            if (item.items || item.subItems) toggleSection(item.key);
          }}
        >
          {item.icon && <span className="mr-3">{item.icon}</span>}
          <span className="flex-grow text-[#1C1C1C] text-sm font-inter font-medium">{item.label}</span>
          {(item.items || item.subItems) && (
            openSections[item.key] ? <FiChevronDown className="ml-2" /> : <FiChevronRight className="ml-2" />
          )}
        </div>
        {openSections[item.key] && item.items && (
          <div className="ml-4">
            {renderItems(item.items, level + 1)}
          </div>
        )}
        {openSections[item.key] && item.subItems && (
          <div className="ml-8">
            {item.subItems.map((subItem, subIndex) => (
              <div key={subIndex} className="py-1 flex items-center">
                <span className="mr-2 text-xs">•</span>
                <span>{subItem}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="w-56 bg-white text-gray-700 border-r border-[#1C1C1C1A] text-sm h-screen">
      <div className="p-4 flex items-center space-x-2">
        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
        <span className="font-medium text-[#1C1C1C] text-sm font-inter">ByeWind</span>
      </div>
      <div className="py-2">
        {menuItems.map((section) => (
          <div key={section.key} className="mb-4">
            <div className="px-4 py-2 text-sm font-medium text-[#1C1C1C66] uppercase">
              {section.label}
            </div>
            {renderItems(section.items)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;