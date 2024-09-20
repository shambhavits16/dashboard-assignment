import React from "react";
import { Layout, Menu } from "antd";
import {
  FiHome,
  FiFolder,
  FiBook,
  FiUser,
  FiSettings,
  FiBriefcase,
  FiFileText,
  FiUsers,
  FiRss,
} from "react-icons/fi";

const { Sider } = Layout;

const Sidebar = () => {
  const menuItems = [
    {
      label: 'Favorites',
      key: 'favorites', // Not necessary for `Menu.ItemGroup` but useful for `Menu`
      children: [
        {
          label: 'Overview',
          key: '1',
          icon: <FiHome />,
        },
        {
          label: 'Projects',
          key: '2',
          icon: <FiFolder />,
        }
      ]
    },
    {
      label: 'Dashboards',
      key: 'dashboards',
      icon: <FiBook />,
      children: [
        {
          label: 'Default',
          key: '3',
          icon: <FiHome />,
        },
        {
          label: 'eCommerce',
          key: '4',
          icon: <FiBriefcase />,
        },
        {
          label: 'Projects',
          key: '5',
          icon: <FiFolder />,
        },
        {
          label: 'Online Courses',
          key: '6',
          icon: <FiBook />,
        },
      ]
    },
    {
      label: 'Pages',
      key: 'pages',
      icon: <FiFileText />,
      children: [
        {
          label: 'User Profile',
          key: 'userProfile',
          icon: <FiUser />,
          children: [
            { label: 'Overview', key: '7' },
            { label: 'Projects', key: '8' },
            { label: 'Campaigns', key: '9' },
            { label: 'Documents', key: '10' },
            { label: 'Followers', key: '11' },
          ]
        },
        {
          label: 'Account',
          key: '12',
          icon: <FiSettings />,
        },
        {
          label: 'Corporate',
          key: '13',
          icon: <FiBriefcase />,
        },
        {
          label: 'Blog',
          key: '14',
          icon: <FiFileText />,
        },
        {
          label: 'Social',
          key: '15',
          icon: <FiUsers />,
        },
      ]
    }
  ];

  return (
    <Sider className="w-64 min-h-screen bg-white" theme="light">
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">ByeWind</h2>
    </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["dashboards", "pages"]}
        items={menuItems} // Using `items` instead of children
      />
    </Sider>
  );
};

export default Sidebar;
