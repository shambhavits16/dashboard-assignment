/* eslint-disable no-unused-vars */
import React from "react";
import { FiBell, FiSettings } from "react-icons/fi";

function RightSidebar() {
  const notifications = [
    {
      id: 1,
      message: "You have a bug that needs...",
      time: "Just now",
      icon: <FiSettings className="text-blue-500" />,
    },
    { id: 2, message: "New user registered", time: "59 minutes ago" },
    {
      id: 3,
      message: "You have a bug that needs...",
      time: "12 hours ago",
      icon: <FiSettings className="text-blue-500" />,
    },
    {
      id: 4,
      message: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
    },
  ];

  const activities = [
    {
      id: 1,
      message: "You have a bug that needs...",
      time: "Just now",
      icon: (
        <img
          src="https://via.placeholder.com/24"
          alt="User"
          className="rounded-full"
        />
      ),
    },
    {
      id: 2,
      message: "Released a new version",
      time: "59 minutes ago",
      icon: (
        <img
          src="https://via.placeholder.com/24"
          alt="User"
          className="rounded-full"
        />
      ),
    },
    {
      id: 3,
      message: "Submitted a bug",
      time: "12 hours ago",
      icon: (
        <img
          src="https://via.placeholder.com/24"
          alt="User"
          className="rounded-full"
        />
      ),
    },
    {
      id: 4,
      message: "Modified A data in Page X",
      time: "Today, 11:59 AM",
      icon: (
        <img
          src="https://via.placeholder.com/24"
          alt="User"
          className="rounded-full"
        />
      ),
    },
    {
      id: 5,
      message: "Deleted a page in Project X",
      time: "Feb 2, 2023",
      icon: (
        <img
          src="https://via.placeholder.com/24"
          alt="User"
          className="rounded-full"
        />
      ),
    },
  ];

  const contacts = [
    { id: 1, name: "Natali Craig", avatar: "https://via.placeholder.com/24" },
    { id: 2, name: "Drew Cano", avatar: "https://via.placeholder.com/24" },
    { id: 3, name: "Orlando Diggs", avatar: "https://via.placeholder.com/24" },
    { id: 4, name: "Andi Lane", avatar: "https://via.placeholder.com/24" },
    { id: 5, name: "Kate Morrison", avatar: "https://via.placeholder.com/24" },
    { id: 6, name: "Koray Okumus", avatar: "https://via.placeholder.com/24" },
  ];

  return (
    <div width={300} className="bg-white p-4 overflow-y-auto ">
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Notifications</h2>
        {notifications.map((notif) => (
          <div key={notif.id} className="flex items-start mb-4">
            <div className="mr-3 mt-2">
              {notif.icon || <FiBell className="text-gray-400" />}
            </div>
            <div>
              <p className="text-sm">{notif.message}</p>
              <p className="text-xs text-gray-500">{notif.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Activities</h2>
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start mb-4">
            <div className="mr-3 mt-2">{activity.icon}</div>
            <div>
              <p className="text-sm">{activity.message}</p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Contacts</h2>
        {contacts.map((contact) => (
          <div key={contact.id} className="flex items-center mb-4">
            <img
              src={contact.avatar}
              alt={contact.name}
              className="rounded-full mr-2"
            />
            <p className="text-sm">{contact.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightSidebar;
