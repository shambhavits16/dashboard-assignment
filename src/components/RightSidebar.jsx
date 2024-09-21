/* eslint-disable no-unused-vars */
import React from "react";
import { PiBugBeetle, PiUser, PiBroadcast  } from "react-icons/pi";

function RightSidebar() {
  const notifications = [
    {
      id: 1,
      message: "You have a bug that needs...",
      time: "Just now",
      icon: <PiBugBeetle size={16} className="bg-[#E3F5FF] rounded-lg" />,
    },
    {
      id: 2,
      message: "New user registered",
      time: "59 minutes ago",
      icon: <PiUser size={16}/>
    },
    {
      id: 3,
      message: "You have a bug that needs...",
      time: "12 hours ago",
    },
    {
      id: 4,
      message: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
      icon: <PiBroadcast size={16}/>
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
    <div width={300} className="bg-white p-4 overflow-y-auto border-l border-[#1C1C1C1A]">
      <div className="mb-8">
        <h2 className="text-sm font-inter font-semibold mb-4">Notifications</h2>
        {notifications.map((notif) => (
          <div key={notif.id} className="flex items-start mb-4">
            <div className="mr-3 mt-2">
              {notif.icon || <PiBugBeetle size={16} />}
            </div>
            <div>
              <p className="text-sm font-inter font-medium">{notif.message}</p>
              <p className="text-xs text-[#1C1C1C66]">{notif.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-sm font-inter font-semibold mb-4">Activities</h2>
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start mb-4">
            <div className="mr-3 mt-2">{activity.icon}</div>
            <div>
              <p className="text-sm font-inter font-medium">{activity.message}</p>
              <p className="text-xs text-[#1C1C1C66]">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-sm font-inter font-semibold mb-4">Contacts</h2>
        {contacts.map((contact) => (
          <div key={contact.id} className="flex items-center mb-4">
            <img
              src={contact.avatar}
              alt={contact.name}
              className="rounded-full mr-2"
            />
            <p className="text-sm font-inter font-medium">{contact.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightSidebar;
