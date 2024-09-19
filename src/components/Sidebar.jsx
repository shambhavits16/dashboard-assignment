// eslint-disable-next-line no-unused-vars
import React from 'react';
import {
  ProjectOutlined,
  DashboardOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  BankOutlined,
  TeamOutlined,
  FileTextOutlined,
  BookOutlined,
  GlobalOutlined
} from '@ant-design/icons';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white dark:bg-gray-900 p-4 shadow-md">
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">ByeWind</h2>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xs font-semibold text-gray-500 mb-2">Favorites</h3>
        <ul className="space-y-2">
          <li className="text-gray-600 dark:text-gray-400">Overview</li>
          <li className="text-gray-600 dark:text-gray-400">Projects</li>
        </ul>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xs font-semibold text-gray-500 mb-2">Dashboards</h3>
        <ul className="space-y-2">
          <li className="flex items-center text-gray-600 dark:text-gray-400">
            <DashboardOutlined className="mr-2" /> Default
          </li>
          <li className="flex items-center text-gray-600 dark:text-gray-400">
            <ShoppingCartOutlined className="mr-2" /> eCommerce
          </li>
          <li className="flex items-center text-gray-600 dark:text-gray-400">
            <ProjectOutlined className="mr-2" /> Projects
          </li>
          <li className="flex items-center text-gray-600 dark:text-gray-400">
            <BookOutlined className="mr-2" /> Online Courses
          </li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-xs font-semibold text-gray-500 mb-2">Pages</h3>
        <ul className="space-y-2">
          <li className="flex items-center justify-between text-gray-600 dark:text-gray-400">
            <span className="flex items-center">
              <UserOutlined className="mr-2" /> User Profile
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </li>
          <li className="ml-6 text-gray-600 dark:text-gray-400">Overview</li>
          <li className="ml-6 text-gray-600 dark:text-gray-400">Projects</li>
          <li className="ml-6 text-gray-600 dark:text-gray-400">Campaigns</li>
          <li className="ml-6 text-gray-600 dark:text-gray-400">Documents</li>
          <li className="ml-6 text-gray-600 dark:text-gray-400">Followers</li>
          <li className="flex items-center text-gray-600 dark:text-gray-400">
            <BankOutlined className="mr-2" /> Account
          </li>
          <li className="flex items-center text-gray-600 dark:text-gray-400">
            <TeamOutlined className="mr-2" /> Corporate
          </li>
          <li className="flex items-center text-gray-600 dark:text-gray-400">
            <FileTextOutlined className="mr-2" /> Blog
          </li>
          <li className="flex items-center text-gray-600 dark:text-gray-400">
            <GlobalOutlined className="mr-2" /> Social
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;